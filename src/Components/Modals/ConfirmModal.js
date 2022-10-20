import React from "react";
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

export default function ConfirmModal({ showModal, modalAction, systemParameter, onClose }) {


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
                                        <Table aria-label="createParamTable" >
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell align="Left">Group: </TableCell>
                                                    <TableCell align="Left"></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="Left">Name </TableCell>
                                                    <TableCell align="Left"></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="Left">Rate </TableCell>
                                                    <TableCell align="Left">
                                                        <FormControl fullWidth >
                                                            <InputLabel htmlFor="outlined-adornment-amount">Percent</InputLabel>
                                                            <OutlinedInput
                                                                id="outlined-adornment-amount"
                                                                /*onChange={handleChange('amount')}*/
                                                                endAdornment={<InputAdornment position="start">%</InputAdornment>}
                                                                label="Amount"
                                                                type="number"
                                                            />
                                                        </FormControl>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="Left">Lower Threshold </TableCell>
                                                    <TableCell align="Left">
                                                        <FormControl fullWidth >
                                                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                                            <OutlinedInput
                                                                id="outlined-adornment-amount"
                                                                /*onChange={handleChange('amount')}*/
                                                                startAdornment={<InputAdornment position="start">£</InputAdornment>}
                                                                label="Amount"
                                                                type="number"
                                                            />
                                                        </FormControl>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="Left">Upper Threshold </TableCell>
                                                    <TableCell align="Left">
                                                        <FormControl fullWidth >
                                                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                                            <OutlinedInput
                                                                id="outlined-adornment-amount"
                                                                /*onChange={handleChange('amount')}*/
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
                                    :
                                    <>
                                        <Table aria-label="updateParamTable" >
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell align="Left">Group </TableCell>
                                                    <TableCell align="Left">{systemParameter.group ?? null}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="Left">Name </TableCell>
                                                    <TableCell align="Left">{systemParameter.name ?? null}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="Left">Rate </TableCell>
                                                    <TableCell align="Left">
                                                        <FormControl fullWidth >
                                                            <InputLabel htmlFor="outlined-adornment-amount">Percent</InputLabel>
                                                            <OutlinedInput
                                                                id="outlined-adornment-amount"
                                                                value={systemParameter.rate}
                                                                /*onChange={handleChange('amount')}*/
                                                                endAdornment={<InputAdornment position="start">%</InputAdornment>}
                                                                label="Amount"
                                                                type="number"
                                                            />
                                                        </FormControl>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="Left">Lower Threshold </TableCell>
                                                    <TableCell align="Left">
                                                        <FormControl fullWidth >
                                                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                                            <OutlinedInput
                                                                id="outlined-adornment-amount"
                                                                value={systemParameter.lowerThreshold}
                                                                /*onChange={handleChange('amount')}*/
                                                                startAdornment={<InputAdornment position="start">£</InputAdornment>}
                                                                label="Amount"
                                                                type="number"
                                                            />
                                                        </FormControl>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="Left">Upper Threshold </TableCell>
                                                    <TableCell align="Left">
                                                        <FormControl fullWidth >
                                                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                                            <OutlinedInput
                                                                id="outlined-adornment-amount"
                                                                value={systemParameter.upperThreshold}
                                                                /*onChange={handleChange('amount')}*/
                                                                startAdornment={<InputAdornment position="start">£</InputAdornment>}
                                                                label="Amount"
                                                                type="number"
                                                            />
                                                        </FormControl>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
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