import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
const Rating = ({ stars, reviews }) => {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5
        return (
            <span key={index}>
                {
                    3.5 >= index + 1 ?
                     (<BsStarFill  className='text-yellow-500'/>) : 
                     stars >= number ? 
                     (<BsStarHalf className='text-yellow-500' />) 
                     : (<BsStar className='text-yellow-500' />)
                }
            </span>
        )
    })
    return (
        <div className='flex items-center flex-col '>
            <p className='flex'>{ratingStar}</p>
            <p className='text-xs'>{reviews} Customer Reviews</p>
        </div>
    )
}

export default Rating