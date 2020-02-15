import backEnd from "../utils/back-end"

const getFinanceData = async(n) => {
  const response = await backEnd(n).then((res)=>res)
  return response
}
export default getFinanceData;