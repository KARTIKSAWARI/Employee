import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


function ChildComponent() {
     return (
        <div style={{display:'flex',justifyContent:'center',
                     alignItems:'center'}}>
        <Box
boxShadow={3}
borderRadius={8}
padding={2}
width={1000}
height={150}
>
    <div style={{display:'flex',justifyContent:'center'}}>
    
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>empid</TableCell>
            <TableCell >name</TableCell>
            <TableCell >designation</TableCell>
            <TableCell >department</TableCell>
            <TableCell >Project</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
         
        </TableBody>
      </Table>
    </TableContainer>
    <Button style={{margin:'10px'}} variant="contained">Edit</Button>
    <Button style={{margin:'10px'}} variant="contained">Delete</Button>
    </div>
    </Box>
    </div>
  );
}

export default ChildComponent;