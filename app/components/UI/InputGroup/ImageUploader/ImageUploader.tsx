import React, {CSSProperties, FC, useEffect, useState} from "react";
import {FieldError} from "react-hook-form";
import styles from "./ImageUploader.module.scss";
import {useUpload} from "@/UI/InputGroup/ImageUploader/useImageUpload";


interface ImageUploaderProps {
    value?: string,
    onChange: (...event: any[]) => void,
    placeholder: string,
    error?: FieldError,
    style?: CSSProperties,
    isNoImage?: boolean,
}

const ImageUploader: FC<ImageUploaderProps> = ({onChange, placeholder, error, isNoImage = false, style, value}) => {
    const {
        // isLoading,
        uploadFile,
        drag,
        dragStartHandler,
        dragLeaveHandler,
        onDropHandler
    } = useUpload(onChange);

    return (
        <div>
            <input
                type="file"
                onChange={uploadFile}
                className={styles.input}
                id={placeholder}
            />
            {
                drag
                    ? <label
                        className={`${styles.dropArea} ${error && styles.dropArea_error}`}
                        htmlFor={placeholder}
                        onDragStart={e => dragStartHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                        onDrop={e => onDropHandler(e)}
                    >
                        Отпустите файл
                    </label>
                    : <label
                        className={`${styles.dropArea} ${error && styles.dropArea_error}`}
                        htmlFor={placeholder}
                        onDragStart={e => dragStartHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                    >
                        Переместите или выберите файл для загрузки
                    </label>
            }
            {error && <div className={styles.errorLog}>{error.message}</div>}
            {
                !isNoImage && <div>
                    {
                        // isLoading
                        //     ? <div>Loading...</div>
                            // : value && <img className={styles.img} alt="" src={`https://sevsu-map-of-events.onrender.com/api/v1/image/${value}`}/>
                            value && <img className={styles.img} alt="" src={value}/>
                    }
                </div>
            }
        </div>
    );
};

export default ImageUploader;