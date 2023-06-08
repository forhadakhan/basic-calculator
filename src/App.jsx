import { useState } from 'react'
import './App.css'
import BasicCalculator from './components/BasicCalculator'

function App() {
  return (
    <div className='bg-info-subtle min-height-full '>
            <div className="container px-3 mx-auto">
                <div className="d-flex align-items-center justify-content-center bg-white mb-4 p-2 border border-top-0 rounded-bottom-5">
                    <h1 className='h-6 bg-white'> <i class="bi bi-calculator-fill"></i> Basic Calculator </h1>
                </div>

                <BasicCalculator />

                <div className="d-flex align-items-center justify-content-center bg-white mt-5 p-2 border border-bottom-0 rounded-top-5">
                    <p className='font-monospace pt-3 px-4 text-secondary'><a href='https://github.com/forhadakhan/' target='_blank'>@forhadakhan</a> coded it. You may find the code <a href='https://github.com/forhadakhan/basic-calculator' target='_blank'>repository here</a>.</p>
                </div>
            </div>
        </div>
  )
}

export default App
