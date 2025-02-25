//Operator ตัวดำเนินการ
// + - * %

let a = 10 ;
let b = "10" ;
let c = a * b ;
console.log(10**2);

console.log(c);
// เปลี่ยบเทียบว่า เท่ากันไหม  
console.log(a == b); //ไม่สนใจ type 
console.log(a === b);//สนใจ type 

console.log(a != b); //ไม่สนใจ type 
console.log(a !== b);//สนใจ type 
console.log("-----------------------------------");

a = "hELLO"; // js เปลี่ยนข้อมูลในตัวแปรได้เลยโดยไม่สนใจ type 
console.log(a);
console.log("-----------------------------------");

console.log('Bangna'<'Bangkok');// js ใช้เปลียบเทียบกับ str ได้โดยจะตรวจไปทีละตัว เช่นในที่นี้ n มาหลัง k จึงค่ามากกว่า k
console.log("-----------------------------------");

// ***** Teranary Operator *********
// ___?____:_____
//เงื่อนไข ? ทำเมือจริง : ทำเมื่อเท็จ 
let score = 45
let grade = score > 55 ? "A":"B"
console.log(grade)
console.log("-----------------------------------");

//nullish coalescing operator
//___??___
//ถ้าข้างหน้า ?? เป็น  null หรือ undefined ให้ทำหลัง ?? 
let data01 = null 
let data02 = "wow"
let data3 

console.log(data01 ?? "No data");
console.log(data3 ?? "undefined NAJA");

 //ถ้าไม่ใช่จะได้ค่าของตัวแปรนั้นเลย
console.log(data02 ?? "Hello");
