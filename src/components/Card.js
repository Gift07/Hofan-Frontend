import React from 'react'

const Card = ({Image}) => {
  return (
    <div className='w-80 pb-2 rounded-lg shadow-lg bg-white mt-5'>
    <span>
        <img src={Image} alt="mikael" className='w-full h-2/3 object-cover rounded-t-lg'/>
    </span>
    <span className='px-2'>
        <h1 className='text-lg font-bold text-gray-800 px-2'>
            Eu ullamco dolor tempor non consectetur.
        </h1>
        <p className='text-sm overflow-hidden text-ellipsis px-2 text-gray-700'>
            Exercitation sunt nulla veniam reprehenderit et culpa elit anim. Adipisicing magna reprehenderit ipsum do. Nostrud sint sunt ea magna ex Lorem adipisicing proident proident aute.
        </p>
    </span>
</div>
  )
}

export default Card