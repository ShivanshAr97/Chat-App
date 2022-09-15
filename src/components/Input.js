import React, { useContext, useState } from "react";
// import { MdOutlineAttachFile } from 'react-icons/md';
// import { AiOutlineFileImage,AiOutlineSend } from 'react-icons/ai';
import { AiOutlineSend } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Modal3 from "./Modal3";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const [showBelow, setShowBelow] = useState(false)
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  function close4() {
    setShowBelow(false)
  }
  function belowShow() {
    setShowBelow(true)
  }
  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };

  return (
    <>
    <Modal3 onClose={close4} visible={showBelow}/>
    <div className='flex justify-between'>
      <div className=' align-middle border-b-2 border-r-2 border-l w-full flex'>
        <input className='m-2 outline-none border-none md:m-2 placeholder:text-sm md:placeholder:text-base w-4/5  placeholder:text-gray-400' type="text" placeholder='Type something ...' onChange={(e) => setText(e.target.value)}
          value={text} />
        <span className="my-3 md:my-4 mr-2 cursor-pointer" onClick={belowShow}><BsThreeDotsVertical /></span>
        <button className='bg-blue-400 text-white md:hidden m-1 md:mx-2 md:my-4 px-2 py-1 rounded-full md:rounded-lg' onClick={handleSend}><AiOutlineSend /></button>
        <button className='bg-blue-400 md:mx-4 text-base font-semibold hidden md:block text-white m-1 px-4 py-2 rounded-full md:rounded-lg' onClick={handleSend}>Send</button>
      </div>
    </div>
    </>
  )
}

export default Input