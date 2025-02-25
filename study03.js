let data01 = 'Wow....'
let data02 = 123456
let data03 = true
// array มี index num เริ่มที่ 0 เหมาะกับข้อมูลประเภทเดียว เช่น เก็บชื่ออย่างเดียว หรือ อายุ อย่างเดียว 
let data04 = [10, 20, 30]
//array แบบที่ไม่ดี 
let data06 = ['John Doe', 20, 'soi 1', 'street petchakasem']
//   obj เหมาะกับเก็บข้อมูลหลายประเภท เช่น ถนน ชื่อ อายุ ซอย
let data05 = {
    fullname : "John Doe",
    age : 20 ,
    color : ['red', 'green', 'blue'],

    addr :{
        no :"10/5",
        soi : "soi 1",
        street : "street petchakasem",

    }
}
let data08 = null;
let data09 ;

console.log(data01) 
console.log(data02)
console.log(data03)

console.log(data04[2])
console.log(data04[1])
console.log(data04[0])
console.log("--------------");

//เข้าถึงข้อมูลใน array ทั้งหมด 
data04.forEach((value) => {
    console.log(value*10)
})
console.log("--------------");

data04[2] = 40; 

data04.forEach((value) => {
    console.log(value*10)
})

// ตัวแปร คีย์
console.log(data05.fullname);

console.log(data05.color[1]);
console.log(data05.addr.street);
console.log("--------------");
console.log(data08);
console.log(data09);
