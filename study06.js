//control flow แบบ loop 
// while ,do-while, fro ,foreach

//while
let x = 1;
// ` = Alt+96
while (x <= 10) {  //พิิสูจน์ก่อนทำ
    console.log(x,"Hello",true);
    console.log(x+"Hello", true); //  ถ้าใช้ + จะไม่เว้นวรรคให้ต้องกดเพิ่มไปเอง
    console.log(`${x} Hello... ${true}`); //recomend เพราะใช้ร่วมกับtypeอื่นที่ไม่ใช่ stringได้
    
    x++;
}
let y= 1; 
do{ // ทำก่อน1 ครั้งค่อยพิสูจ
    console.log(`${y} Hey... ${true}`)
    y++;
}while (y <= 5 ) {
    console.log("-----------------------------------");
    
}

for (let i = 1; i <= 5; i++) {  // ใช้สำหรับรู้ว่าต้องทำกี่รอบ ***และเทำงานร็วทีึ่สุด**
    console.log(`${i} Hi... ${true}`);
}

console.log("-----------------------------------");




