import { english, romanian } from "../constance/constants";

const getTitles = (languages) => {
  switch (languages) {
    case english:
      return {
        id:'Id',
        date:'Date',
        debit:'Debit',
        credit: 'Credit',
        sender:'Sender',
        receiver:'Receiver'
      }
      case romanian:
        return {
          id:'Id',
          date:'Data',
          debit:'Debitul',
          credit: 'Credit',
          sender:'Expeditor',
          receiver:'Receptor'
        }
  

  
    default:
      break;
  }
}

export default getTitles;