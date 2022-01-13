import React from 'react'
import { Calendar } from 'react-feather';
import ToolTip from './tooltip';

export default function Tag(props: {img: string, text: string}) {
  return (
    <div className='tag-tooltip-container'>
      <div className='flex-row tag-container'>
        <Calendar color="rgba(152, 162, 179, 1)" size={16} /> 
        <p className='tag-text'>{props.text.toUpperCase()}</p>
      </div> 
      <ToolTip text={"Date Picture Taken"}/> 
    </div>
    
  )
}
