'use client'
import { useState } from 'react'
import CalculateExchange from './services/CalculateExchange'

export default function Home() {
  const [messageString, setMessageString] = useState<string>('')
  const [currencyFrom, setCurrencyFrom] = useState<string>('')
  const [currencyTo, setCurrencyTo] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [amount, setAmount] = useState<number>(0)

  const convert = async () => {
    setLoading(true)
    if(!currencyFrom || !currencyTo || !amount) {
      setMessageString('Please fill out all fields')
      return
    }
    const data = await CalculateExchange(currencyFrom, currencyTo, amount)
    if(data){
      setMessageString(`${amount} ${currencyFrom.toUpperCase()} is ${data} ${currencyTo.toUpperCase()}`)
    }
    setLoading(false)
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* create input channels that takes EUR or USD ex and a button that converts their values */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-10">Currency Converter</h1>
        <div className="flex flex-col items-center justify-center gap-4 padding-4">
          <label className="flex flex-col items-center justify-center gap-2">
            <span className="text-2xl font-bold">From</span>
            <input
              className="border border-gray-400 rounded-l px-4 py-2 focus:outline-none"
              type="text"
              placeholder="ex. USD"
              onChange={(e) => setCurrencyFrom(e.target.value)}
            />
          </label>
          <label className="flex flex-col items-center justify-center gap-2">
            <span className="text-2xl font-bold">To</span>
            <input
              className="border border-gray-400 rounded-l px-4 py-2 focus:outline-none"
              type="text"
              placeholder="ex. EUR"
              onChange={(e) => setCurrencyTo(e.target.value)}
            />
          </label>
          <label className="flex flex-col items-center justify-center gap-2">
            <span className="text-2xl font-bold">Amount</span>
            <input
              className="border border-gray-400 rounded-l px-4 py-2 focus:outline-none"
              type="number"
              placeholder="ex. 100"
              onChange={(e) => setAmount(parseInt(e.target.value))}
            />
          </label>
          <button 
          onClick={convert}
          className="bg-gray-200 px-4 py-2 rounded-r hover:bg-gray-300 focus:outline-none">
            {loading ? 'Loading...' : 'Convert'}
          </button>
          <p className="text-2xl font-bold mt-4">{messageString}</p>
        </div>
      </div>
    </main>
  )
}
