import React, { useEffect, useState } from "react";
import "./ConfirmModal.css";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ConfirmModal({ showModal, setShowModal, modalAction, systemParameter, onClose }) {


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const onClick = (action, e) => {
        if (action === "delete") {
        }
        else if (action === "create" || action === "update") {
        }

        onClose()
    };

    return (
        <>
            {console.log("param", systemParameter)}
            {showModal ?
                <Modal open={showModal}>
                    <Box sx={style}>
                        {modalAction === "delete" ?
                            <>
                                <Typography id="modal-modal-title" variant="h6" component="h2">Delete System Parameter "{systemParameter.group ?? null} {systemParameter.name ?? null}"</Typography>
                                <div>Are you sure you want to delete this parameter?</div>
                                <Button onClick={() => onClick("delete", systemParameter.id ?? null)}>Delete</Button>
                                <Button onClick={() => onClick("cancel")}>Cancel</Button>
                            </>
                            :
                            <>
                                < h2 > {modalAction.charAt(0).toUpperCase() + modalAction.slice(1).toLowerCase() ?? null} System Parameter {null} {null}</h2 >

                                {modalAction === "create" ?
                                <>
                                    <div>Group:</div>
                                    <div>Name:</div>
                                    <div>Rate:</div>
                                    <div>Lower Threshold:</div>
                                    <div>Upper Threshold: </div>
                                </>
                                :
                                <>
                                    <div>Group: {systemParameter.group ?? null}</div>
                                    <div>Name: {systemParameter.name ?? null}</div>
                                    <div>Rate: {systemParameter.rate ?? null}%</div>
                                    <div>Lower Threshold: £{systemParameter.lowerThreshold ?? null}</div>
                                    <div>Upper Threshold: £{systemParameter.upperThreshold ?? null}</div>
                                </>}
                                <Button onClick={() => onClick(modalAction, systemParameter.id ?? null)}>Save</Button>
                                <Button onClick={() => onClick("cancel")}>Cancel</Button>
                            </>
                        }
                    </Box>
                </Modal>
                : null}
        </>


    )
};