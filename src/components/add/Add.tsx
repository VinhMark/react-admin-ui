import React from 'react';
import './add.scss';
import { GridColDef } from '@mui/x-data-grid';

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('create oke');
  };

  return (
    <div className='add'>
      <div className='modal'>
        <span className='close' onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== 'id' && item.field !== 'img')
            .map((item) => (
              <div className='item'>
                <label htmlFor=''>{item.headerName}</label>
                <input type={item.type} placeholder={item.field} />
              </div>
            ))}
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
