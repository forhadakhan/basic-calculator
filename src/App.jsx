import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className='bg-light bg-gradient min-height-full min-vh-100'>
            <div className="container py-4 px-3 mx-auto">
                <div className="d-flex align-items-center justify-content-center bg-white m-4 p-2 border rounded-3">
                    <h1 className='display-6 bg-white'> <i class="bi bi-calculator-fill"></i> Basic Calculator </h1>
                </div>

                

                <div className="d-flex align-items-center justify-content-center bg-white mt-5 border rounded-3">
                    <p className='font-monospace pt-3 px-4 text-secondary'><a href='https://github.com/forhadakhan/' target='_blank'>@forhadakhan</a> coded it. You may find the code <a href='https://github.com/forhadakhan/basic-calculator' target='_blank'>repository here</a>.</p>
                </div>
            </div>
        </div>
  )
}

export default App
