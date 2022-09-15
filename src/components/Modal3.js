import React from 'react'
import { MdOutlineAttachFile } from 'react-icons/md';
import { AiOutlineFileImage } from 'react-icons/ai';
const shareURL = "https://chat-hackathon-webapp.vercel.app"
const title = "Gap-Shap"
const title2 = "Visit website to begin conversation with friends and colleagues."
const share = `${shareURL}%0a%0a${title}%0a${title2}`
const shareWhatsapp = `whatsapp://send?text=${share}`

export default function Modal3({ visible, onClose }) {
    function handleOnClose(e) {
        if (e.target.id === 'container') {
            onClose();
        }
    }
    if (!visible) {
        return null
    }
    return (
        <div id='container' onClick={handleOnClose} className='fixed inset-x-8 inset-0 inset-y-16'>
            <div className='bg-white rounded-lg font-semibold text-sm py-1'>
                <div className='flex flex-col'>
                <div className='flex p-2 text-gray-500 cursor-pointer border-y'><MdOutlineAttachFile size="20px" />Attach Files</div>
                    <input
                        type="file"
                        style={{ display: "none" }}
                        id="file"
                        // onChange={(e) => setImg(e.target.files[0])}
                    />
                    <label htmlFor="file">
                        <div className='flex p-2 text-gray-500 cursor-pointer border-y'><AiOutlineFileImage size="20px" />Attach Images</div>
                    </label>
                </div>
            </div>
        </div>
    )
}

