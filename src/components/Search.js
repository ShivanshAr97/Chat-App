import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Search = () => {

  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) { }

    setUser(null);
    setUsername("")
  };

  return (
    <>
      <div className="">
        {/* bg-slate-600 */}
        <input className=' border-b-2 border-gray-500 outline-none px-4 text-sm py-2 w-full 
        
        bg-gradient-to-r from-[#8EC5FC]/95 to-[#E0C3FC]/95
        
        dark:bg-gradient-to-r dark:from-[#141E30] dark:to-[#243B55] dark:hover:from-[#141E30]/90 dark:hover:to-[#243B55]/90
        
        text-black placeholder:text-black dark:text-white dark:placeholder:text-white'
          type="text"
          placeholder="&#x1F50E;&#xFE0E; Search participants ..."
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div className='flex cursor-pointer bg-cyan-400 hover:bg-cyan-500 bg-gradient-to-r from-[#8EC5FC] to-[#E0C3FC] hover:from-[#8EC5FC]/90 hover:to-[#E0C3FC]/90 p-2 border-b' onClick={handleSelect}>

          <img className=' p-2 w-12 h-12 object-cover rounded-full' src={user.photoURL} alt="" />
          <h1 className='py-3 px-1 font-bold'>{user.displayName}</h1>
        </div>
      )}
    </>
  )
}

export default Search