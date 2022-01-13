import React from 'react'
import { Camera, Calendar, Radio } from 'react-feather';
import ToolTip from './tooltip';

function renderImage(imageType: string) {
  if(imageType == 'camera') {
    return <Camera color="rgba(152, 162, 179, 1)" size={16} />
  } else if(imageType == 'date') {
    return <Calendar color="rgba(152, 162, 179, 1)" size={16} />
  } else if(imageType == 'rover') {
    return <Radio color="rgba(152, 162, 179, 1)" size={16} />
  }
}

function getToolTipText(text: string, img: string) {
  if(img == 'camera') {
    return "Camera Type"
  } else if (img == 'date') {
    return "Date Taken"
  } else if (img == "rover") {
    return `${text} Rover`
  } else {
    return "--"
  }
}

export default function Tag(props: {img: string, text: string}) {
  return (
    <div className='tag-tooltip-container'>
      <div className='flex-row tag-container'>
        {renderImage(props.img)}
        <p className='tag-text'>{props.text.toUpperCase()}</p>
      </div> 
      <ToolTip text={getToolTipText(props.text, props.img)}/> 
    </div>
    
  )
}
