//block scope js = { }

//variable ตัวแปร 
var myData1 = "Hello";
let myData2 = 20 ; 

const myData3 = 30; // const ตัวแปรเปลี่ยนค่าไม่ได้
myData1 = "hi.." ; // สามารถเปลี่ยนค่าได้
myData2 = 30 ; // สามารถเปลี่ยนค่าได้

{
    var a  = 1 ;
    let b = 2 ;
    const c = 3 ;

    {
        var d = 4 ;
        let e = 5 ;
        const f = 6 ;
        console.log(a);
        
    }
    console.log("Hello, this is a log message!");

} 