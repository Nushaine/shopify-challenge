import React from 'react'
import styles from '../../styles/Home.module.css'

export default function FilterSkeleton() {
  return (
    <div className={styles.filterContainerLoading}>
      <div className='filter-skeleton loading-animation'/>
      <div className='filter-skeleton loading-animation'/>
      <div className='filter-skeleton loading-animation'/>
    </div>
  )
}
