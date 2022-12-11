import React, {FC, useState} from "react";
import {EmailIcon, EmailShareButton, TelegramIcon, TelegramShareButton, VKIcon, VKShareButton} from "react-share";
import Modal from "@/UI/modals/Modal/Modal";
import QRCode from "react-qr-code";


interface ShareModalProps {
    modalTitle: string,
    title: string,
    url: string,
    isActive: boolean,
    setIsActive: (isActive: boolean) => void
}

const ShareModal: FC<ShareModalProps> = ({modalTitle, title, url, isActive, setIsActive}) => {
    return (
        <Modal title={modalTitle} active={isActive} setActive={setIsActive}>
            <TelegramShareButton url={url} title={title}>
                <TelegramIcon size={32} round/>
            </TelegramShareButton>

            <VKShareButton url={url} title={title}>
                <VKIcon size={32} round/>
            </VKShareButton>

            <EmailShareButton url={url} title={title} subject="vvsvdsvd" body="sv dsvd" separator=" ">
                <EmailIcon size={32} round/>
            </EmailShareButton>

            <QRCode size={300} value={url}/>
        </Modal>
    );
}

export default ShareModal;