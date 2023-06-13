import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DisplayValues from './ChildComponent';

interface FormValues {
  [key: string]: string;
}

const Receiving: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>({});
  const [submittedValues, setSubmittedValues] = useState<FormValues>({});

  const handleAddClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = () => {
    setSubmittedValues(formValues);
    setFormValues({});
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flexDirection: 'column' }}>
      {!isEditing && (
        <Button variant="contained" onClick={handleAddClick}>
          Add New Employee
        </Button>
      )}
      {isEditing && (
        <Box boxShadow={3} borderRadius={8} padding={2} width={1000} height={150}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              id="outlined-basic"
              name="empId"
              disabled={!isEditing}
              label="EmpId"
              variant="outlined"
              style={{ margin: '10px' }}
              value={formValues['empId'] || ''}
              onChange={handleInputChange}
              type='number'
              required
            />
            <TextField
              id="outlined-basic"
              name="empName"
              disabled={!isEditing}
              label="EmpName"
              variant="outlined"
              style={{ margin: '10px' }}
              value={formValues['empName'] || ''}
              onChange={handleInputChange}
              type='text'
              required
            />
            <TextField
              id="outlined-basic"
              name="designation"
              disabled={!isEditing}
              label="designation"
              variant="outlined"
              style={{ margin: '10px' }}
              value={formValues['designation'] || ''}
              onChange={handleInputChange}
              required
            />
            <TextField
              id="outlined-basic"
              name="department"
              disabled={!isEditing}
              label="Department"
              variant="outlined"
              style={{ margin: '10px' }}
              value={formValues['department'] || ''}
              onChange={handleInputChange}
              required
            />
            <TextField
              id="outlined-basic"
              name="project"
              disabled={!isEditing}
              label="Project"
              variant="outlined"
              style={{ margin: '10px' }}
              value={formValues['project'] || ''}
              onChange={handleInputChange}
              required
            />
          </div>
          <Button style={{ margin: '20px' }} variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      )}
      <br /><br />
      {Object.keys(submittedValues).length > 0 && <DisplayValues values={submittedValues} />}
    </div>
  );
};

export default Receiving;
