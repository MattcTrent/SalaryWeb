import React from "react";
import { useState } from 'react';
import "./ConfirmModal.css";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { SystemParameterService } from "../../API/Services/SystemParameterService.js";
import cloneDeep from 'lodash/cloneDeep';

export default function ConfirmModal({ showModal, modalAction, systemParameter: loadedSystemParameter, onClose }) {

    const systemParam = cloneDeep(loadedSystemParameter);
    const [groupMissing, setGroupMissing] = useState(systemParam.group == null);
    const [nameMissing, setNameMissing] = useState(systemParam.name == null);

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
        if (action === "cancel") {
            onClose(action, e)
        }
        else if (!PassValidation()) {
            if (action === "delete") {
                SystemParameterService.deleteSystemParameter(e).then((response) => {
                    if (response.data) {
                        console.log("Success")
                    }
                });
            }
            else if (action === "edit") {
                SystemParameterService.updateSystemParameter(e, systemParam).then((response) => {
                    if (response.data) {
                        console.log("Success")
                    }
                });
            }
            else if (action === "create") {
                SystemParameterService.createSystemParameter(systemParam).then((response) => {
                    if (response.data) {
                        console.log("Success")
                    }
                });
            }

            onClose(action, e)
        }
    };

    const PassValidation = () => {
        let error = false;
        let message = "";
        if (systemParam.group == null || systemParam.group === "") {
            error = true;
            message += "Group, ";
        }
        if (systemParam.name == null || systemParam.name === "") {
            error = true;
            message += "Name, ";
        }

        
        if ((systemParam.rate == null || systemParam.rate === "") && (systemParam.lowerThreshold == null || systemParam.lowerThreshold === "") && (systemParam.upperThreshold == null || systemParam.upperThreshold === "")) {
            error = true;
            message += "At least one Rate or Threshold is required. ";
        }

        if (message !== "") {
            alert("Require Properies: \n"+ message);
        }
        return error;
    }

    const handleChange = (propChanged) => (event) => {
        switch (propChanged) {
            case "group":
                systemParam.group = event.target.value;
                setGroupMissing(systemParam.group == null || systemParam.group === "");
                break;
            case "name":
                systemParam.name = event.target.value;
                setNameMissing(systemParam.name == null || systemParam.name === "");
                break;
            case "rate":
                systemParam.rate = parseFloat(event.target.value).toFixed(2);
                break;
            case "lowerThreshold":
                systemParam.lowerThreshold = parseFloat(event.target.value).toFixed(2);
                break;
            case "upperThreshold":
                systemParam.upperThreshold = parseFloat(event.target.value).toFixed(2);
                break;
            default:
        };
    }

    return (
        <>
            {showModal ?
                <Modal open={showModal}>
                    <Box sx={style}>
                        {modalAction === "delete" ?
                            <>
                                <Typography id="modal-modal-title" variant="h6" component="h2">Delete System Parameter "{loadedSystemParameter.group ?? null} {loadedSystemParameter.name ?? null}"</Typography>
                                <div>Are you sure you want to delete this parameter?</div>
                                <Button onClick={() => onClick("delete", systemParam.id ?? null)}>Delete</Button>
                                <Button onClick={() => onClick("cancel")}>Cancel</Button>
                            </>
                            :
                            <>
                                < h2 > {modalAction.charAt(0).toUpperCase() + modalAction.slice(1).toLowerCase() ?? null} System Parameter {null} {null}</h2 >
                                <>
                                    <Table aria-label="updateParamTable" >
                                        <TableBody>
                                            <TableRow>
                                                <TableCell align="left">Group </TableCell>
                                                <TableCell align="left">
                                                    <TextField
                                                        id="inpGroup"
                                                        name="group"
                                                        required
                                                        error={groupMissing}
                                                        label="Required"
                                                        defaultValue={systemParam.group ?? null}
                                                        onChange={handleChange('group')}
                                                        InputProps={{
                                                            readOnly: (modalAction === "edit"),
                                                        }}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="left">Name </TableCell>
                                                <TableCell align="left">
                                                    <TextField
                                                        id="inpName"
                                                        name="name"
                                                        required
                                                        error={nameMissing}
                                                        label="Required"
                                                        defaultValue={systemParam.name ?? null}
                                                        onChange={handleChange('name')}
                                                        InputProps={{
                                                            readOnly: (modalAction === "edit"),
                                                        }}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="left">Rate </TableCell>
                                                <TableCell align="left">
                                                    <FormControl fullWidth >
                                                        <InputLabel >Percent</InputLabel>
                                                        <OutlinedInput
                                                            id="inpRate"
                                                            name="rate"
                                                            required
                                                            defaultValue={systemParam.rate}
                                                            onChange={handleChange('rate')}
                                                            endAdornment={<InputAdornment position="start">%</InputAdornment>}
                                                            label="Amount"
                                                            type="number"
                                                        />
                                                    </FormControl>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="left">Lower Threshold </TableCell>
                                                <TableCell align="left">
                                                    <FormControl fullWidth >
                                                        <InputLabel >Amount</InputLabel>
                                                        <OutlinedInput
                                                            id="inpLowerThreshold"
                                                            name="lowerThreshold"
                                                            defaultValue={systemParam.lowerThreshold}
                                                            onChange={handleChange('lowerThreshold')}
                                                            startAdornment={<InputAdornment position="start">£</InputAdornment>}
                                                            label="Amount"
                                                            type="number"
                                                        />
                                                    </FormControl>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="left">Upper Threshold </TableCell>
                                                <TableCell align="left">
                                                    <FormControl fullWidth >
                                                        <InputLabel>Amount</InputLabel>
                                                        <OutlinedInput
                                                            id="inpUpperThreshold"
                                                            name="upperThreshold"
                                                            defaultValue={systemParam.upperThreshold}
                                                            onChange={handleChange("upperThreshold")}
                                                            startAdornment={<InputAdornment position="start">£</InputAdornment>}
                                                            label="Amount"
                                                            type="number"
                                                        />
                                                    </FormControl>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </>
                                <Button onClick={() => onClick(modalAction, loadedSystemParameter.id ?? null)}>Save</Button>
                                <Button onClick={() => onClick("cancel")}>Cancel</Button>
                            </>
                        }
                    </Box>
                </Modal>
                : null}
        </>


    )
};