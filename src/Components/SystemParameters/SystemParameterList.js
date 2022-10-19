import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { useEffect } from 'react';
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

export const SystemParameterList = () => {

  const systemParameters = useSelector((state) => state.allSystemParameters.systemParameters);
  const dispatch = useDispatch();

  const fetchSystemParameters = async () => {
    const apiURL = variables.API_URL + "/SystemParameters";
    const response = await axios.get(apiURL).catch((error) => {
      console.log("Error", error)
    });

    dispatch(setSystemParameters(response.data));
  };

  useEffect(() => {
    fetchSystemParameters();
  });

  const onClickEdit = (e) => {
    console.log("ID", e);
    return alert("Clicked: "+ e);
  };

  const onClickDelete = (e) => {

    return alert("Clicked: "+ e);
  };
  
  const onClickCreate = (e) => {

    return alert("Clicked: "+ e);
  };
  
  const onClickExport = (e) => {

    return alert("Clicked: "+ e);
  };

  const sxStyle =
  {
    color:"white", 
    ":hover": 
    { 
      color:"red"
    }
  }

  return (
    <>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "black" }}>
                <TableCell align="center"><Button sx={sxStyle} onClick={onClickCreate}><IoMdCreate size={25} /> New</Button></TableCell>
                <TableCell align="center"><Button sx={{color:"white", ":hover": { color:"red"}}} onClick={onClickExport}><BiExport size={25} /> Export</Button></TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "black" }}>
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
              <TableRow
                key={parameter.group + parameter.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center"><Button sx={{color:"black"}} onClick={() => onClickEdit(parameter.id)}><BiEdit size={25} /></Button></TableCell>
                <TableCell align="left">{parameter.group}</TableCell>
                <TableCell align="left" component="th" scope="row"> {parameter.name}</TableCell>
                <TableCell align="left">{parameter.rate}</TableCell>
                <TableCell align="left">{parameter.lowerThreshold}</TableCell>
                <TableCell align="left">{parameter.upperThreshold}</TableCell>
                <TableCell align="center"><Button sx={{color:"black"}} onClick={onClickDelete}><MdDelete size={25} /></Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}