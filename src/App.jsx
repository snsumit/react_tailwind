import React from 'react'

const App = () => {
  return (
    <section className='bg-slate-900 h-screen w-full text-white flex flex-col justify-center items-center'>
        <div className='max-w-sm text-black h-auto bg-white p-4 mx-auto flex justify-center items-center  rounded-md gap-2'>
              <div>
                  <img className='h-24' src="https://static.thenounproject.com/png/3794420-200.png" alt="" />
              </div>
              <div >
                  <h1 className='text-2xl capitalize text-blue-600'>ChitChat</h1>
                  <p className='text-base text-gray-500'>You have a new Notification?</p>
              </div>
        </div>

         <button className='mt-4 bg-blue-600 p-2 w-48 uppercase rounded-full cursor-pointer hover:bg-blue-500 text-lg'>
                   Click Me
         </button>

        <div className='max-w-sm overflow-hidden bg-white mx-auto mt-4 p-2  h-auto rounded-md md:max-w-xl '>
             <div className='flex justify-center  flex-col  gap-7 items-center w-full overflow-hidden shadow-2xl md:flex-row '>
                  <div className=''>
                        <img className='w-full md:w-[85rem] object-cover md:h-[12rem]  ' src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg" alt="" />
                  </div>
             
                  <div className=' text-black p-4 mt-[-10px]  '>
                      <h1 className='md:text-2xl text-3xl  text-blue-700 font-normal uppercase '>Company Retreats</h1>
                       <h1 className='text-xl md:text-lg font-medium leading-8'> Incredible accomodation</h1>
                       <p className='md:text-sm text-xl text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum amet dolores cupiditate, laudantium, molestiae asperiores ab placeat quod nam, quam harum perspiciatis ea in et rem sint </p>
                  </div>
             
             </div>
        </div>



    </section>
    

   
  )
}

export default App
