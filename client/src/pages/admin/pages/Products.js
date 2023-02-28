import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import axios from "axios";
const Products = () => {
  const [laptops, Setlaptops] = React.useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5522/api/laptops/get")
      .then((res) => Setlaptops(res.data));
  }, []);
  const [mobiles, Setmobiles] = React.useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5522/api/mobiles/get")
      .then((res) => Setmobiles(res.data));
  }, []);
  return (
    <div className='page__main'>
      <h1>Products</h1>
      <div className='laptop'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align='right'>Price</TableCell>
                <TableCell align='right'>Release Date</TableCell>
                <TableCell align='right'>CPU</TableCell>
                <TableCell align='right'>GPU</TableCell>
                <TableCell align='right'>RAM</TableCell>
                <TableCell align='right'>Windows</TableCell>
                <TableCell align='right'>Guarantee</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {laptops.map((laptop) => (
                <TableRow
                  key={laptop.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {laptop.name}
                  </TableCell>
                  <TableCell align='right'>{laptop.price}</TableCell>
                  <TableCell align='right'>{laptop.releasedate}</TableCell>
                  <TableCell align='right'>{laptop.cpu}</TableCell>
                  <TableCell align='right'>{laptop.gpu}</TableCell>
                  <TableCell align='right'>{laptop.Ram}</TableCell>
                  <TableCell align='right'>{laptop.Windows}</TableCell>
                  <TableCell align='right'>{laptop.guarantee}</TableCell>
                  <TableCell align="right"><button className="deletebtn" onClick={() =>
                        axios
                          .delete(
                            `http://localhost:5522/api/laptops/delete/${laptop._id}`,
                          )
                          .then(() => {
                            axios
                              .get("http://localhost:5522/api/laptops/get")
                              .then((res) => Setmobiles(res.data));
                          })
                      }>Delete</button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className='laptop'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align='right'>Price</TableCell>
                <TableCell align='right'>Release Date</TableCell>
                <TableCell align='right'>CPU</TableCell>
                <TableCell align='right'>Display</TableCell>
                <TableCell align='right'>battery</TableCell>
                <TableCell align='right'>camera</TableCell>
                <TableCell align='right'>Detele</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mobiles.map((mobile) => (
                <TableRow
                  key={mobile.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {mobile.name}
                  </TableCell>
                  <TableCell align='right'>{mobile.price}</TableCell>
                  <TableCell align='right'>{mobile.releasedate}</TableCell>
                  <TableCell align='right'>{mobile.cpu}</TableCell>
                  <TableCell align='right'>{mobile.display}</TableCell>
                  <TableCell align='right'>{mobile.battery}</TableCell>
                  <TableCell align='right'>{mobile.camera}</TableCell>
                  <TableCell align='right'>
                    <button className="deletebtn"
                      onClick={() =>
                        axios
                          .delete(
                            `http://localhost:5522/api/mobiles/delete/${mobile._id}`,
                          )
                          .then(() => {
                            axios
                              .get("http://localhost:5522/api/mobiles/get")
                              .then((res) => Setmobiles(res.data));
                          })
                      }
                    >
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Products;
