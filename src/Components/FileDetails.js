import React from 'react'
import img1 from "../Assets/card-img.jpeg";

const FileDetails = () => {
  return (
    <div className='flex flex-col '>
        <div className='flex p-1 flex-row  justify-between  bg-[#eaeaea] mb-2'>
        <div className=' p-4 ml-14'>
            Name 
        </div>
        <div className=' p-4 mr-10'>
            Created
        </div>
        </div>

        <div className=' flex flex-row ml-10 justify-between mb-5'>
        <div className='flex flex-row'>
            <div>
                <img src={img1} alt="image1" className='max-w-20 rounded-lg'/>
            </div>
            <div className='ml-7 p-7'>
            <p className='text-lg'>Name of image.jpg</p>
            <small className='text-[#86898d]'>File size:569kb</small>
            </div> 
        </div>
        <div className='mt-7 text-[#091e42] p-5'>
        20/06/2023 at 11am
        </div>
        </div>


        <div className=' flex flex-row ml-10 justify-between mb-5'>
        <div className='flex flex-row'>
            <div>
                <img src={img1} alt="image1" className='max-w-20 rounded-lg'/>
            </div>
            <div className='ml-7 p-7'>
            <p className='text-lg'>Name of image.jpg</p>
            <small className='text-[#86898d]'>File size:569kb</small>
            </div> 
        </div>
        <div className='mt-7 text-[#091e42] p-5'>
        20/06/2023 at 11am
        </div>
        </div>

        <div className=' flex flex-row ml-10 justify-between mb-5'>
        <div className=' flex flex-row'>
            <div>
                <img src={img1} alt="image1" className='max-w-20 rounded-lg'/>
            </div>
            <div className='ml-7 p-7'>
            <p className='text-lg'>Name of image.jpg</p>
            <small className='text-[#86898d]'>File size:569kb</small>
            </div> 
        </div>
        <div className='mt-7 text-[#091e42] p-5'>
        20/06/2023 at 11am
        </div>
        </div>

        <div className=' flex flex-row ml-10 justify-between mb-5'>
        <div className=' flex flex-row'>
            <div>
                <img src={img1} alt="image1" className='max-w-20 rounded-lg'/>
            </div>
            <div className='ml-7 p-7'>
            <p className='text-lg'>Name of image.jpg</p>
            <small className='text-[#86898d]'>File size:569kb</small>
            </div> 
        </div>
        <div className='mt-7 text-[#091e42] p-5'>
        20/06/2023 at 11am
        </div>
        </div>

        <div className=' flex flex-row ml-10 justify-between mb-5'>
        <div className=' flex flex-row'>
            <div>
                <img src={img1} alt="image1" className='max-w-20 rounded-lg'/>
            </div>
            <div className='ml-7 p-7'>
            <p className='text-lg'>Name of image.jpg</p>
            <small className='text-[#86898d]'>File size:569kb</small>
            </div> 
        </div>
        <div className='mt-7 text-[#091e42] p-5'>
        20/06/2023 at 11am
        </div>
        </div>

        <div className=' flex flex-row ml-10 justify-between mb-5'>
        <div className=' flex flex-row'>
            <div>
                <img src={img1} alt="image1" className='max-w-20 rounded-lg'/>
            </div>
            <div className='ml-7 p-7'>
            <p className='text-lg'>Name of image.jpg</p>
            <small className='text-[#86898d]'>File size:569kb</small>
            </div> 
        </div>
        <div className='mt-1 text-[#091e42] p-3'>
        20/06/2023 at 11am
        </div>
        </div>

    </div>
  )
}

export default FileDetails