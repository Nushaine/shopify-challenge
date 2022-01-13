import React from 'react'
import ImageSkeleton from './imageSkeleton'
import styles from '../../styles/Home.module.css'

export default function ImageLoadingRow() {
  return (
    <div className={styles.imageContainer}>
      <ImageSkeleton />
      <ImageSkeleton />
      <ImageSkeleton />
      <ImageSkeleton /> 
    </div>
  )
}
