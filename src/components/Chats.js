import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import './Sidebar.css'


const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="bg-slate-600">
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        <div
        // bg-slate-600, bg-slate-700
          className="flex px-2 py-4 cursor-pointer
          bg-gradient-to-r from-[#8EC5FC] to-[#E0C3FC] hover:from-[#8EC5FC]/95 hover:to-[#E0C3FC]/95 border-b border-gray-400 
          dark:bg-gradient-to-r dark:from-[#141E30] dark:to-[#243B55] dark:hover:from-[#141E30]/90 dark:hover:to-[##243B55]/90"
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          <img className="w-12 h-12 rounded-full object-cover" src={chat[1].userInfo.photoURL} alt="" />
          <div className="flex flex-col px-2">
            <span className=" font-bold dark:text-white">{chat[1].userInfo.displayName}</span>
            <p className=" text-sm dark:text-white">{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
