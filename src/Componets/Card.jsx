import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div className='border border-gray-700 p-4 mt-10 transition-All duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-2 rounded-xl'>
                <img className='w-full border-b mb-2' src={props.i.thumbnail} alt="" />
                <h1 className='text-white semibold text-2xl pt-2 min-h-[90px] '>{props.i.title}</h1>
                <p className='border w-60 rounded-xl border-gray-700 text-center py-2 text-2xl mt-3 mb-5 transition-All duration-300 hover:bg-green-400 hover:border-green-400 hover:text-black hover:shadow-lg hover:shadow-green-500/20'>Price : {props.i.price}</p>

                <p className='text-center mt-4 text-gray-300 hover:text-green-400 transition'>category : {props.i.category}</p>
                <p className='text-center mt-2 text-gray-300 hover:text-yellow-400 transition'>Stock : {props.i.stock}</p>
                <p className=' pt-2 leading-6 tracking-wide h-[150px] mb-5 mt-3 '>{props.i.description}</p>
            </div>
        </div>
    )
}

export default Card
