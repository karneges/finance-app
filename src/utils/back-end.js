

 const getRandom = (min, max) => {
   let rand = min - 0.5 + Math.random() * (max - min + 1);
   return Math.round(rand);
 }

 function randomDate(start = new Date(1960, 0, 1), end = new Date()) {
   return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
 }


 class Sender {
   constructor(id) {
     this.transaction_id = id
     this.date = randomDate()
     this.debit = getRandom(100, 2000)
     this.credit = getRandom(100, 2000)
     this.sender = `Sender${getRandom (485,15854)}`
     this.receiver = `Receiver${getRandom (15854,5481251)}`
     this.color = `rgb(${getRandom(0,255)},${getRandom(0,255)},${getRandom(0,255)})`
   }
 }

  const backEnd = (count) => {
   const dataArr = [...Array(count)].map((item, id) => id + 1)
    .map((item, id) => new Sender(id))
    // return dataArr

 const response = new Promise ((resolve,reject)=> {
   setTimeout(()=>{
     console.log(`ответ`);
     resolve(dataArr)
    },2000)

 })
    return response
 }

 export default backEnd;