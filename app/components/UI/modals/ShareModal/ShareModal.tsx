import React, {FC} from "react";
import {
    TelegramIcon,
    TelegramShareButton,
    ViberIcon,
    ViberShareButton,
    VKIcon,
    VKShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from "react-share";
import Modal from "@/UI/modals/Modal/Modal";
import QRCode from "react-qr-code";
import styles from "./ShareModal.module.scss";


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
            <div className={styles.content}>
                <div className={styles.section}>
                    <div className={styles.title}>В соцсетях и мессенджерах</div>

                    <div className={styles.socials}>
                        <TelegramShareButton url={url} title={title}>
                            <TelegramIcon size={"100%"} round/>
                        </TelegramShareButton>

                        <VKShareButton url={url} title={title}>
                            <VKIcon size={"100%"} round/>
                        </VKShareButton>

                        <WhatsappShareButton url={url} title={title}>
                            <WhatsappIcon size={"100%"} round/>
                        </WhatsappShareButton>

                        <ViberShareButton url={url} title={title}>
                            <ViberIcon size={"100%"} round/>
                        </ViberShareButton>
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.title}>Через QR код</div>
                    <QRCode size={300} value={url}/>
                </div>
            </div>
        </Modal>
    );
}

export default ShareModal;