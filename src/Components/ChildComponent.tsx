import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
//import Divider from '@mui/material/Divider';

interface Values {
  [key: string]: string;
}

interface DisplayValuesProps {
  values: Values;
}

const DisplayValues: React.FC<DisplayValuesProps> = ({ values }) => {
  const [displayedValues, setDisplayedValues] = useState<Values[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editedValues, setEditedValues] = useState<Values>({});

  useEffect(() => {
    if (values) {
      setDisplayedValues((prevValues) => [...prevValues, values]);
    }
  }, [values]);

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setEditedValues(displayedValues[index]);
  };

  const handleSave = (index: number) => {
    setEditIndex(null);
    setDisplayedValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[index] = editedValues;
      return updatedValues;
    });
  };

  const handleDelete = (index: number) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this item?');
    if (confirmDelete) {
      setDisplayedValues((prevValues) => {
        const updatedValues = [...prevValues];
        updatedValues.splice(index, 1);
        return updatedValues;
      });
    }
  };

  return (
    <Box boxShadow={3} borderRadius={8} padding={2} minWidth={800}>
      <h2>Display Component</h2>
      <TableContainer style={{textAlign:'center'}}>
        <Table >
          <TableHead>
            <TableRow>
              {Object.keys(displayedValues[0] || {}).map((key) => (
                <TableCell key={key}>{key}</TableCell>
              ))}
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedValues.map((value, index) => (
              <TableRow key={index}>
                {Object.entries(value).map(([key, val], subIndex) => (
                  <TableCell key={subIndex}>
                    {editIndex === index ? (
                      <TextField
                        type="text"
                        value={editedValues[key] || ''}
                        onChange={(e) =>
                          setEditedValues((prevValues) => ({
                            ...prevValues,
                            [key]: e.target.value,
                          }))
                        }
                      />
                    ) : (
                      <Box>{val}</Box>
                    )}
                  </TableCell>
                ))}
                <TableCell>
                  {editIndex === index ? (
                    <Button variant="contained" onClick={() => handleSave(index)}>Save</Button>
                  ) : (
                    <>
                      <Button style={{ margin: '5px' }} variant="contained" onClick={() => handleEdit(index)}>Edit</Button>
                      <Button style={{ margin: '5px', color: 'Yellow' }} variant="contained" onClick={() => handleDelete(index)}>Delete</Button>

                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DisplayValues;
