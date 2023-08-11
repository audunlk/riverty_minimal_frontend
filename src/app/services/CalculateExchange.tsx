
const CalculateExchange = async (from: string, to: string, amount: number) => {
    //im aware of no error handling here, but its a demo
    const response = await fetch(`http://localhost:5270/api/exchangerate/latest?from=${from}&to=${to}&amount=${amount}`)
    const data = await response.json()
    return data
}
export default CalculateExchange
