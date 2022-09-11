import React from 'react'
import Input from './Input'
import Messages from './Messages'
import NavbarChat from './NavbarChat'
import './Sidebar.css'

const Chat = () => {
  return (
    <>
    <NavbarChat/>
    <Messages/>
    <Input/>
    </>
  )
}

export default Chat