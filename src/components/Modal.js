import React from 'react'
import { LinkedinShareButton, LinkedinIcon, WhatsappIcon, TelegramShareButton, TelegramIcon, TwitterShareButton, TwitterIcon,FacebookShareButton, FacebookIcon } from "react-share";
const shareURL = "https://chat-hackathon-webapp.vercel.app"
const title = "Gap-Shap"
const title2 = "Visit website to begin conversation with friends and colleagues."
const share = `${shareURL}%0a%0a${title}%0a${title2}`
const shareWhatsapp = `whatsapp://send?text=${share}`

export default function Modal({ visible, onClose }) {
    function handleOnClose(e) {
        if (e.target.id === 'container') {
            onClose();
        }
    }
    if (!visible) {
        return null
    }
    return (
        <div id='container' onClick={handleOnClose} className=' fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className='bg-white rounded-lg font-semibold text-sm  w-fit px-4 py-2'>
                <p className='text-black text-xl font-bold justify-center flex my-2'>Share with others..</p>
                <div className='flex'>
                <div className='m-1 md:m-2'>
                    <span className='flex justify-center'><a href={shareWhatsapp} target='_blank' rel='noreferrer'><WhatsappIcon size={32} round="true" /></a></span>
                    <span className='text-black text-xs md:text-base'>Whatsapp</span>
                </div>
                <div className='m-1 md:m-2'>
                    <LinkedinShareButton url={shareURL}>
                    <span className=' cursor-pointer flex justify-center'><LinkedinIcon size={32} round="true"/></span>
                    <span className='text-black text-xs md:text-base'>LinkedIn</span>
                    </LinkedinShareButton>
                </div>
                <div className='m-1 md:m-2'>
                    <TwitterShareButton url={shareURL}>
                    <span className=' cursor-pointer flex justify-center'><TwitterIcon size={32} round="true"/></span>
                    <span className='text-black text-xs md:text-base'>Twitter</span>
                    </TwitterShareButton>
                </div>
                <div className='m-1 md:m-2'>
                    <FacebookShareButton url={shareURL}>
                    <span className=' cursor-pointer flex justify-center'><FacebookIcon size={32} round="true"/></span>
                    <span className='text-black text-xs md:text-base'>Facebook</span>
                    </FacebookShareButton>
                </div>
                <div className='m-1 md:m-2'>
                    <TelegramShareButton url={shareURL}>
                    <span className=' cursor-pointer flex justify-center'><TelegramIcon size={32} round="true"/></span>
                    <span className='text-black text-xs md:text-base'>Telegram</span>
                    </TelegramShareButton>
                </div>
                </div>
            </div>
        </div>
    )
}

