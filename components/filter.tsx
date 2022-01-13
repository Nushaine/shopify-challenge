import React from 'react'

export default function Filter(props: {img: string, text: string}) {
  return (
    <div className='filter-container'>
      <img src={`/${props.img}.svg`} />
      <p className='tag-text '>{props.text}</p>
      <img src={`/arrow-down.svg`}/>
    </div>
  )
}
