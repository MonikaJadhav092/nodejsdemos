var mym = require('./mymodule.js');

mym.arr1.forEach((v,i)=>{console.log(v+" present at "+i)});

console.log(mym.msg.charAt(3));

console.log("Full name : "+mym.obj.fname+" "+mym.obj.lname);

console.log("area : "+mym.calarea(4.5));
