
const CalculateExchange = async (from: string, to: string, amount: number) => {
    const response = await fetch(`http://localhost:5270/api/exchangerate/latest?from=${from}&to=${to}&amount=${amount}`)
    const data = await response.json()
    return data
}
export default CalculateExchange
