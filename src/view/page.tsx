import React, { useState, useEffect } from 'react';
import Drag from '../util/darg';

//iframe hooks
const useIframeLoad = () => {
    const [iframeState, setIframeState] = useState(false);
    const [windowState, setWindowState] = useState(document.readyState === "complete");

    const iframeLoad = () => {
        const iframeEle = document.getElementById("my-iframe");
        iframeEle && setIframeState(iframeEle.ownerDocument.readyState === "complete");
        if (!iframeState && iframeEle) {
            iframeEle.onload = () => {
                setIframeState(true);
            };
        }
    };
    useEffect(() => {
        if (!windowState) {
            setIframeState(false);
            window.addEventListener('load', () => {
                setWindowState(true);
                iframeLoad();
            })
        } else {
            iframeLoad();
        }
    }, []);
    return iframeState;
}
const isIFrame = (input: HTMLElement | null): input is HTMLIFrameElement =>
    input !== null && input.tagName === 'IFRAME';
export const Page: React.FunctionComponent = () => {


    const init = () => {

        const iframe = document.getElementById('my-iframe')
        if (isIFrame(iframe) && iframe) {
            Drag.init({
                dragEle: document.getElementById('drag-box'),
                dropEle: iframe.contentWindow?.document.getElementById('drop-box')
            })
        }

    }

    useIframeLoad() && init();

    return <>
        {/* <!-- 组件区 --> */}
        <div id="drag-box">
            <div className="drag-item"   >拖动元素</div>
            <div className="drag-item"   >拖动元素</div>
            <div className="drag-item"   >拖动元素</div>
        </div>
        {/* <!-- 预览区 --> */}
        <div className="drop-content">
            <iframe id="my-iframe" src="http://localhost:3000/iframe" style={{ width: "100%", height: "480px", }} />
        </div>
    </>
}