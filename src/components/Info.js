import React from 'react'

const Info = ({title, value}) => {
  return (
    <span className='flex items-center'>
    <h1 className='mr-2 capitalize'>{title} : </h1>
    <h1 className='font-semibold'>{value}</h1>
  </span>
  )
}

export default Info