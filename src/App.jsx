import React from 'react'

const App = () => {
  return (
    <section className='bg-slate-900 h-screen w-full text-white flex justify-center items-center'>
        <div className='max-w-sm text-black h-auto bg-white p-4 mx-auto flex justify-center items-center rounded-md  gap-2'>
              <div>
                  <img className='h-24' src="https://static.thenounproject.com/png/3794420-200.png" alt="" />
              </div>
              <div >
                  <h1 className='text-2xl capitalize text-blue-600'>ChitChat</h1>
                  <p className='text-base text-gray-500'>You have a new Notification?</p>
              </div>
        </div>
    </section>
    

   
  )
}

export default App
