console.log('ABC...'); //string
console.log("ABC...");
console.log(123456) ;//number
console.log(115.546) ;
//boolean
console.log(true);  //false;
console.log(1, 2, 3, "hello", true, false) ; //array

//ตัวแปร
var a = 10 //เป็นแบบ Global ใช้ที่ไหนก็ได้
let b = 20  //เป็นแบบ Local ใช้ได้เฉพาะใน { } หนึ่งๆ เท่านั้น ***
const c = 30 //ไม่สามารถเปลี่ยนค่าได้ เป็นแบบ Local ใช้ได้เฉพาะใน { } หนึ่งๆ เท่านั้น

let data01 = 'Wow....'
let data02 = 123456

//เวลาเอาข้อมูลหลากหลายแบบมาใช้ร่วมกัน
console.log('AAA ' + 555 + '  ' + data01 + '     ' + data02 )

console.log(`AAA ${555}  ${data01}     ${data02}`)