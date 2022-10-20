import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { selectSystemParameter, getSystemParameters } from '../../Redux/Actions/SystemParameterActions.js';
import { MdDelete } from "react-icons/md"
import { BiEdit } from "react-icons/bi"
import { IoMdCreate } from "react-icons/io"
import { BiExport } from "react-icons/bi"
import { sxCellStyle, sxButtonStyle, sxCellButtonStyle, sxRowStyle } from "./SystemParameterSXOverrides.js";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ConfirmModal from "../Modals/ConfirmModal.js";
import { SystemParameterService } from "../../API/Services/SystemParameterService.js";

export const SystemParameterList = () => {

  const [showModal, setShowModal] = useState(false);
  const [modalAction, setModalAction] = useState("");

  const systemParameters = useSelector((state) => state.allSystemParameters.systemParameters);
  const selSystemParameter = useSelector((state) => state.selectedSystemParameter);
  const dispatch = useDispatch();

  const fetchSystemParameters = async () => {
    SystemParameterService.getSystemParameters().then((response) => {
      if (response.data) {
        dispatch(getSystemParameters(response.data));
      }
    });
  };


  const fetchSystemParameter = async (systemParameterId, action) => {
    SystemParameterService.getSystemParameter(systemParameterId).then((response) => {
      if (response.data) {
        dispatch(selectSystemParameter(response.data));
        openModal(action);
      }
    });
  };

  useEffect(() => {
    fetchSystemParameters();
  }, []);

  const openModal = (action) => {
    setModalAction(action);
    setShowModal(!showModal);
  }

  const onClickOpen = (action, e) => {
    if (e != null) {
      fetchSystemParameter(e, action);
    }
    else {
      openModal(action);
    }
  };

  
  const onClickClose = () => {
    dispatch(selectSystemParameter({
      systemParameters: []
  }));
    setShowModal(!showModal);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#36454F" }}>
              <TableCell sx={{ Width: 10, maxWidth: 10, }} align="left"><Button sx={sxButtonStyle} onClick={() => onClickOpen("create")}><IoMdCreate size={25} /> New</Button></TableCell>
              <TableCell align="left"><Button sx={sxButtonStyle} onClick={() => onClickOpen("export")}><BiExport size={25} /> Export</Button></TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
          <TableHead>
            <TableRow sx={{ backgroundColor: "#25383C" }}>
              <TableCell align="center"></TableCell>
              <TableCell sx={{ color: "White", fontWeight: "Bold" }} align="left">Group</TableCell>
              <TableCell sx={{ color: "White", fontWeight: "Bold" }} align="left">Name</TableCell>
              <TableCell sx={{ color: "White", fontWeight: "Bold" }} align="left">Rate</TableCell>
              <TableCell sx={{ color: "White", fontWeight: "Bold" }} align="left">Lower Threshold</TableCell>
              <TableCell sx={{ color: "White", fontWeight: "Bold" }} align="left">Upper Threshold</TableCell>
              <TableCell sx={{ color: "White", fontWeight: "Bold" }} align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {systemParameters.map((parameter) => (
              <TableRow key={parameter.group + parameter.name} sx={sxRowStyle}>
                <TableCell sx={sxCellStyle} align="center"><Button sx={sxCellButtonStyle} onClick={() => onClickOpen("update", parameter.id)}><BiEdit size={25} /></Button></TableCell>
                <TableCell sx={sxCellStyle} align="left">{parameter.group}</TableCell>
                <TableCell sx={sxCellStyle} align="left" component="th" scope="row"> {parameter.name}</TableCell>
                <TableCell sx={sxCellStyle} align="left">{parameter.rate}</TableCell>
                <TableCell sx={sxCellStyle} align="left">{parameter.lowerThreshold}</TableCell>
                <TableCell sx={sxCellStyle} align="left">{parameter.upperThreshold}</TableCell>
                <TableCell sx={sxCellStyle} align="center"><Button sx={sxCellButtonStyle} onClick={() => onClickOpen("delete", parameter.id)}><MdDelete size={25} /></Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ConfirmModal showModal={showModal} setShowModal={setShowModal} modalAction={modalAction} systemParameter={selSystemParameter} onClose={onClickClose} />
    </>
  )
}