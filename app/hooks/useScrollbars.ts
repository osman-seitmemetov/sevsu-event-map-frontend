import {RefObject, useEffect} from "react";
import {OverlayScrollbars} from "overlayscrollbars";


export const useScrollbars = (root: RefObject<HTMLDivElement>) => {
    root.current?.scrollBy()
    // useEffect(() => {
    //     let scrollbars;
    //
    //     if(root.current) {
    //         let scrollbars = OverlayScrollbars(root.current, {
    //             scrollbars: {
    //                 visibility: "auto",
    //                 autoHide: "never",
    //                 autoHideDelay: 800,
    //             },
    //         })
    //         scrollbars.scroll()
    //     }
    //
    //     return () => {
    //         if(scrollbars) {
    //             scrollbars.destroy();
    //         }
    //     }
    // }, [root])
}