import ThermalPrinterModule from 'react-native-thermal-printer'
import moment from 'moment'

async function printQueueNumber (activeQueueNumber) {
  try {
    let payload =
      "[C]   Hello there, you are currently in the queue\n" +
      "[L]\n\n" +
      "[C][C]     Your Number:" +
      "[L]\n\n" +
      "[C][C]        <font size='big'><b>"+ activeQueueNumber +"</b></font>" +
      "[L]\n\n\n" +
      "[C]      Your number will be called shortly\n" +
      "[C]"+moment().format('MMMM Do YYYY, h:mm:ss a')+"\n" +
      "[L]\n\n" +
      "[L]\n\n" +
      "[L]\n\n"

    return await ThermalPrinterModule.printBluetooth({ 
      payload,
      printerNbrCharactersPerLine: 38,
      printerWidthMM: 200,
     })
  } catch (error) {
    console.log('printQueueNumber Error:', error)
  }
}

function formatQueueNumber (number) {
  return String(number).padStart(4, '0')
}

function getDate (format) {
  return moment().format(format)
}

export {
  printQueueNumber,
  formatQueueNumber,
  getDate
}