
import React, { useState } from 'react'

function App() {

  const [bgColor, setBgColor] = useState('bg-green-500')

  const changeToRed = () => setBgColor('bg-red-500')
  const changeToYellow = () => setBgColor('bg-yellow-400')
  const changeToGreen = () => setBgColor('bg-green-500')

  const buttonStyle = 'rounded-xl px-5 py-3 text-white font-bold'

  return (
    <div className="min-h-screen bg-gray-700 flex flex-col items-center justify-center gap-6">


      <div className={`w-40 h-40 rounded-full border-4 border-slate-800 ${bgColor} transition-colors duration-300`}>
      </div>

      <div className="flex gap-3">

        <button
          onClick={changeToRed}
          className={`${buttonStyle} bg-red-500`}
        >
          Красный
        </button>

        <button
          onClick={changeToYellow}
          className={`${buttonStyle} bg-yellow-400 text-black`}
        >
          Жёлтый
        </button>

        <button
          onClick={changeToGreen}
          className={`${buttonStyle} bg-green-500`}
        >
          Зелёный
        </button>

      </div>

    </div>
  )
}

export default App
