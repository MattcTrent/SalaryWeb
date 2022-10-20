import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { variables } from '../../API/Variables.js';
import { setSystemParameters } from '../../Redux/Actions/SystemParameterActions.js';
import { MdDelete } from "react-icons/md"
import { BiEdit } from "react-icons/bi"
import { IoMdCreate } from "react-icons/io"
import { BiExport } from "react-icons/bi"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ConfirmModal from "../Modals/ConfirmModal.js";

export const SystemParameterList = () => {

  const [showModal, setShowModal] = useState(false);
  const [modalAction, setModalAction] = useState("");

  const systemParameters = useSelector((state) => state.allSystemParameters.systemParameters);
  const dispatch = useDispatch();

  const fetchSystemParameters = async () => {
    const apiURL = variables.API_URL + "/SystemParameters";
    const response = await axios.get(apiURL).catch((error) => {
      console.log("Error", error)
    });

    dispatch(setSystemParameters(response.data));
  };


  //useEffect and useDispatch causing infinite loop, must fix
  useEffect(() => {
    fetchSystemParameters();
  });

  const openModal = (action) => {
    setModalAction(action);
    setShowModal(!showModal);
  }

  const onClick = (action, e) => {
    openModal(action);
    console.log("ID", e);
  };

  const sxButtonStyle =
  {
    color:"white",
    ":hover": 
    { 
      color:"black",
      backgroundColor:"#625D5D"
    }
  }

  
  const sxCellButtonStyle =
  {
    color:"black",
    ":hover": 
    { 
      backgroundColor:"#8D918D"
    }
  }

  const sxRowStyle =
  {
     '&:last-child td, &:last-child th': { border: 0 },
     ":hover": 
     { 
       color:"black"
     },
     minHeight: 20,
     Height: 20,
     padding:0, margin:0,
  }

  const sxCellStyle =
  {
     minHeight: 20,
     Height: 20,
     padding:1, 
  }

  return (
    <>
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#36454F" }}>
                <TableCell sx={{ Width: 10, maxWidth: 10,}} align="left"><Button sx={sxButtonStyle} onClick={() => onClick("create")}><IoMdCreate size={25} /> New</Button></TableCell>
                <TableCell align="left"><Button sx={sxButtonStyle} onClick={() => onClick("export")}><BiExport size={25} /> Export</Button></TableCell>
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
                <TableCell sx={sxCellStyle} align="center"><Button sx={sxCellButtonStyle} onClick={() => onClick("edit", parameter.id)}><BiEdit size={25} /></Button></TableCell>
                <TableCell sx={sxCellStyle} align="left">{parameter.group}</TableCell>
                <TableCell sx={sxCellStyle} align="left" component="th" scope="row"> {parameter.name}</TableCell>
                <TableCell sx={sxCellStyle} align="left">{parameter.rate}</TableCell>
                <TableCell sx={sxCellStyle} align="left">{parameter.lowerThreshold}</TableCell>
                <TableCell sx={sxCellStyle} align="left">{parameter.upperThreshold}</TableCell>
                <TableCell sx={sxCellStyle} align="center"><Button sx={sxCellButtonStyle} onClick={() => onClick("delete", parameter.id)}><MdDelete size={25} /></Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ConfirmModal showModal={showModal} setShowModal={setShowModal} modalAction={modalAction}/>
    </>
  )
}