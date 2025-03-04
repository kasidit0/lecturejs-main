//Exception Handling: Error/Exception ซ่อมข้อผิดพลาดไม่ให้ user เห็น  **เป็นทางเลือกที่ 2 ลองจากแก้ไขให้ถูกต้อง 
//try-catch
//try-catch-finally


try{
    let data1 = "Hello";
    console.log(data1);
}catch(err){
    console.log('พบปัญหาโปรดติดต่อ Admin ');
    console.log(err);
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);

}finally{
    console.log("ขอบคุณที่ใช้บริกาาร");
    console.log("ขอบคุณที่ใช้บริกาาร");
}