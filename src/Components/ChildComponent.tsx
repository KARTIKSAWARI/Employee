import React, { useState, useEffect } from 'react';
import Divider from '@mui/material/Divider';

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
    <div>
      <h2>Display Component</h2>
      <div>
        {displayedValues.map((value, index) => (
          <div key={index}>
            {Object.entries(value).map(([key, val]) => (
              <React.Fragment key={key}>
                {editIndex === index ? (
                  <div>
                    <span>{key}: </span>
                    <input
                      type="text"
                      value={editedValues[key] || ''}
                      onChange={(e) =>
                        setEditedValues((prevValues) => ({
                          ...prevValues,
                          [key]: e.target.value,
                        }))
                      }
                    />
                  </div>
                ) : (
                  <span>
                    {key}: {val}
                  </span>
                )}
                <Divider orientation="vertical" flexItem />
              </React.Fragment>
            ))}
            {editIndex === index ? (
              <button onClick={() => handleSave(index)}>Save</button>
            ) : (
              <>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </>
            )}
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayValues;
