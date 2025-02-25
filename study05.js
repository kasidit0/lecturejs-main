//control flow ใช้ตรวจสอบก่อนทำงานใดๆ

let a = 10;

if (a == 10) {
    console.log("wow");
}

console.log("-----------------------------");

let score = 56;

if (score >= 80) {
    console.log("A");
} else if (score >= 60) {
    console.log("B");
}else if (score >= 40) {
    console.log("C");
}else {
    console.log("F");
}

console.log("----------------------------");

//switch case ใช้ตรวจสอบก่อนทำงานใดๆ
let day = 2;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}