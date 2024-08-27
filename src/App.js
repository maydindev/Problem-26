import { useEffect,useState } from "react"


export default function Stopwatch() {
  const [isRunning,setIsRunning] = useState(false)
  const [seconds,setSeconds] = useState(0)

  useEffect(() => {
    let timerId
    if(isRunning){
      timerId = setInterval(() => {
        setSeconds(prev => prev + 1)
        //console.log('count')
      }, 1000)
    }  
    return () => clearInterval(timerId)
  },[isRunning])

  const handleClickStart = () => {
    setIsRunning(true)
  }

  const handleClickStop = () => {
    setIsRunning(false)
  }

  return (
    <div className='p-12 mx-auto space-y-4 max-w-[300px]'>
      <div className='font-bold text-center text-3xl'>Zamanlayıcı: {seconds}s</div>
      <div className='flex justify-between'>
        <button className='text-amber-500 font-bold' onClick={handleClickStop}>Durdur</button>
        <button className='text-green-500 font-bold' onClick={handleClickStart}>Başlat</button>
      </div>
    </div>
  )
}
