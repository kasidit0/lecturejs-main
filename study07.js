for(let i = 1 ;i <= 5; i++) {  // ใช้สำหรับรู้ว่าต้องทำกี่รอบ ***และเทำงานร็วทีึ่สุด**
    console.log(i,"Hello");
    
}
console.log("-----------------------------------");
for(let i = 1 ;i <= 5; i++) { 
    if (i == 3) {
        break;
    }
    console.log(i,"Hello");
}
console.log("-----------------------------------");
for(let i = 1 ;i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i,"Hey");
}
