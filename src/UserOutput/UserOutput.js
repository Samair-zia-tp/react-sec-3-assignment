import React from 'react';

const userOutput = (props) =>{
  const style ={
    backgroundColor: '#eee',
    padding: '16px'
  }
  return (
    <div className="output">
      <p style={style}>{ props.name }</p>
      <p>lorem ipsum 2</p>
    </div>
  )
}

export default userOutput;