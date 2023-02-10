import React from 'react'
import MyButton from './button/MyButton';
import { Link } from 'react-router-dom';
import './style.css'

function Posts({id, title, body, onDelete}) {

  const handleDelete = () => {
    onDelete(id);
  }

  return (
    <div className='list'>
      <h3>{title}</h3>
      <p>{body}</p>
      <MyButton onClick={handleDelete}>Delete</MyButton>
        <Link to={'/info/'+id}>Info</Link>
        <Link to={'/update/'+id}>Update</Link>
    </div>
  )
}

export default Posts