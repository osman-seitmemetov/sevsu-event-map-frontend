import React, {ChangeEvent, useCallback, useMemo, useState} from "react";
import {convertFileToBase64} from "@/utils/convertFileToBase64";

type TypeUpload = (onChange: (...event: any[]) => void) => {
    uploadFile: (e: ChangeEvent<HTMLInputElement>) => Promise<void>,
    dragStartHandler: (e: React.DragEvent) => void,
    dragLeaveHandler: (e: React.DragEvent) => void,
    onDropHandler: (e: React.DragEvent) => Promise<void>,
    drag: boolean
}

export const useUpload: TypeUpload = (onChange) => {
    const [drag, setDrag] = useState(false);

    const uploadFile = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files?.length) return;

        const convertedFile = await convertFileToBase64(files[0]);
        onChange(convertedFile);
    }, [onChange])

    const dragStartHandler = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setDrag(true)
    }, [])

    const dragLeaveHandler = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setDrag(false)
    }, [])

    const onDropHandler = useCallback(async (e: React.DragEvent) => {
        e.preventDefault();
        let files = e.dataTransfer.files;
        if (!files?.length) return;

        const convertedFile = await convertFileToBase64(files[0]);
        onChange(convertedFile);
        
        setDrag(false)
    }, [onChange])

    return useMemo(() => ({
        uploadFile, dragStartHandler, dragLeaveHandler, onDropHandler, drag
    }), [uploadFile, dragStartHandler, dragLeaveHandler, onDropHandler, drag]);
}