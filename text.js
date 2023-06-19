


// const toSeconds = (timeStr) => {
//     const [hours, minutes] = timeStr.split(':').map(Number);

//     if (hours > 24 || hours < 0 || minutes < 0 || minutes > 60) {
//         Error.messages("The selected time is incorrect")
//     }
//     return hours * 3600 + minutes * 60;
// }
let text = "/departments/648893d13965ac7c405240e0";
const myArray = text.split("/");
console.log(myArray);

// // const chekaTe = (heuer) => {
// //     const today = new Date();
// //     const year = today.getFullYear();
// //     const mes = today.getMonth() + 1;
// //     const dia = today.getDate();
// //     const originalString = heuer
// //     let splitString = originalString.split("/");

// //     splitString = splitString.map(str => {
// //         return Number(str.trim());
// //     });

// //     if (year > splitString[2]) {
// //         Error.messages("The year is incorrect, try again");
// //     }

// //     if ((splitString[1] > 12 || splitString[1] < 1) || (year === splitString[2] && splitString[1] < mes)) {
// //         Error.messages(splitString[1], mes);
// //         Error.messages("Invalid month, try again");
// //     }

// //     if ((year === splitString[2] && splitString[1] === mes) && (dia === splitString[0] || dia > splitString[0])) {
// //         Error.messages("The selected day is incorrect");
// //     }

// //     const limitedDays = getDaysInMonth(...splitString)
// //     if (limitedDays) {
// //         Error.messages("The day that took place is not normal");
// //     }
// //     return true

// // }
// // const getDaysInMonth = (dey, month, year) => {

// //     const nemdey = new Date(year, month, 0).getDate();
// //     if (nemdey < dey || dey <= 0) {
// //         return true
// //     }

// // }
