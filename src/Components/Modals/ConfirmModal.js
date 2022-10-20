import React from "react";
import "./ConfirmModal.css";

export default function ConfirmModal({ showModal, setShowModal, modalAction, parameter }) {
    console.log(showModal + "---" + (modalAction === "delete"))
    return (
        <>
            {showModal ?
                <div className="ModalWrapper">
                    {modalAction === "delete" ?
                        <>
                            < h2 > Delete System Parameter {null} {null}</h2 >
                            <div>Are you sure you want to delete this parameter?</div>
                            <button>Confirm</button>
                            <button>Cancel</button>
                        </>
                        :
                        <>
                            <div>{modalAction} System Parameter</div>
                            <button>Save</button>
                            <button>Cancel</button>
                        </>
                    }
                </div>
                : null}
        </>


    )
};