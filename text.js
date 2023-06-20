[
    {
        "_id": "648893c13965ac7c405240de",
        "name": "hr",
        "manager": [
            {
                "_id": "64888f61eb017a7af28a4632",
                "firstName": "Olga",
                "lastName": "Little",
                "dob": "07/08/1975",
                "department": "6488b1f6280105fbc1a6cc0f",
                "shift": [
                    "648f06a28ab6b19f53382616",
                    "648f06ab8ab6b19f53382618"
                ]
            }
        ],
        "employees": [
            {
                "_id": "64888f80eb017a7af28a4638",
                "firstName": "Antoinette",
                "lastName": "Durgan",
                "dob": "01/09/1942",
                "department": "648893c13965ac7c405240de"
            }
        ]
    },
    {
        "_id": "648893d13965ac7c405240e0",
        "name": "sell",
        "manager": [
            {
                "_id": "64888f80eb017a7af28a4638",
                "firstName": "Antoinette",
                "lastName": "Durgan",
                "dob": "01/09/1942",
                "department": "648893c13965ac7c405240de"
            }
        ],
        "employees": []
    },
    {
        "_id": "648893de3965ac7c405240e2",
        "name": "dev",
        "manager": [
            {
                "_id": "64888f9eeb017a7af28a463e",
                "firstName": "Dino",
                "lastName": "Hermann",
                "dob": "25/04/1991"
            }
        ],
        "employees": []
    },
    {
        "_id": "648893e93965ac7c405240e4",
        "name": "secruriti",
        "manager": [
            {
                "_id": "64888fcceb017a7af28a4644",
                "firstName": "Lea",
                "lastName": "Pfannerstill",
                "dob": "21/08/1988"
            }
        ],
        "employees": []
    },
    {
        "_id": "6488b1f6280105fbc1a6cc0f",
        "name": " test ",
        "manager": [
            {
                "_id": "64888f9eeb017a7af28a463e",
                "firstName": "Dino",
                "lastName": "Hermann",
                "dob": "25/04/1991"
            }
        ],
        "employees": [
            {
                "_id": "64888f61eb017a7af28a4632",
                "firstName": "Olga",
                "lastName": "Little",
                "dob": "07/08/1975",
                "department": "6488b1f6280105fbc1a6cc0f",
                "shift": [
                    "648f06a28ab6b19f53382616",
                    "648f06ab8ab6b19f53382618"
                ]
            }
        ]
    },
    {
        "_id": "64915cbe850645b7286b01fa",
        "name": "test123",
        "manager": [
            {
                "_id": "64888fcceb017a7af28a4644",
                "firstName": "Lea",
                "lastName": "Pfannerstill",
                "dob": "21/08/1988"
            }
        ],
        "employees": []
    }
]
const chek = {
    "firstName": "Lester",
    "lastName": "Welch",
    "bbab": "asd"
}
const { firstName, lastName, Start_Work_Year } = chek
const w = { firstName, lastName, Start_Work_Year }
w.map(data => {
    if (!data) {
        return "noooo"
    }
})
console.log(firstName, lastName, Start_Work_Year);
console.log(w);
const x = {
    "firstName": "moas",
    "lastName": "Welch",
    "Start_Work_Year": "08/04/1972"
}

console.log(Object.keys(x));
console.log(Object.keys(x).length);

// const toSeconds = (timeStr) => {
//     const [hours, minutes] = timeStr.split(':').map(Number);

//     if (hours > 24 || hours < 0 || minutes < 0 || minutes > 60) {
//         Error.messages("The selected time is incorrect")
//     }
//     return hours * 3600 + minutes * 60;
// }
// let text = "/departments/648893d13965ac7c405240e0";
// const myArray = text.split("/");
// console.log(myArray);

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
