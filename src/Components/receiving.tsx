import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'

function receiving() {
  return (
    <div style={{display:'flex',justifyContent:'center'}}>

<Box
      boxShadow={3} 
      borderRadius={8} 
      padding={2} 
      width={1000}
      height={150}
    >
    <div style={{display:'flex',alignItems:'center'}}> 
     <TextField id="outlined-basic" name='Required' label="EmpId" variant="outlined" style={{margin:'10px'}}/>
     <TextField id="outlined-basic" name='Required' label="EmpName" variant="outlined" style={{margin:'10px'}}/>
     <TextField id="outlined-basic" name='Required' label="designation" variant="outlined" style={{margin:'10px'}}/>
     <TextField id="outlined-basic" name='Required' label="Department" variant="outlined" style={{margin:'10px'}} />
     <TextField id="outlined-basic" name='Required' label="Project" variant="outlined" style={{margin:'10px'}}/>
    
     </div>


    </Box>
    </div>
  )
}

export default receiving;