import { useRef } from "react";
import { useImperativeHandle } from "react"
import { createPortal } from "react-dom"
import Button from "./Button.jsx";

export default function Modal({ ref, children, buttonLabel, onClose }) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    });

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button>{buttonLabel}</Button>
            </form>
        </dialog>,
        document.getElementById("modal-root")
    )
}