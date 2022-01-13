import React from 'react'

export default function ImageSkeleton() {
  return (
    <div className='flex-col' style={{gap: '10px'}}>
      <div className='image-skeleton loading-animation' />
      <div className='tag-skeleton loading-animation' />
      <div className='text-skeleton loading-animation' />
    </div>
  )
}
