{
    var a =10;
    let b =20;
    const c =30;
}
//console.log('value of a', a);
//console.log('value of b',b);  //b is not defined
//console.log('value of c',c);  // c is not defined


function parent(){
    const d= 20;
    function child(){
        const childVar =50;
        console.log('value of a inside child function', d)
    }
    console.log('value of child var',childVar)
    child();
}

parent();



var ill = 100;
{
    let ill =20;
    console.log(ill);
}
console.log(ill);


