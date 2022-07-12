const printName = (name) => "Hii "+name;

const printBill = (name,bill) => "Hii "+ name +", "+"Please pay : Rs. "+bill +"/-";

const person = {
    name : "Vishal Tella",
    age : 21
}

let {name,age}=person;
let msg;
msg="<hr>"+name+"<br><br>"+printName(name)+"<br><br>"+printBill(name,5000);
document.querySelector('p').innerHTML=msg;
console.log(name);
console.log(age);
console.log(printName(name));
console.log(printBill(name,5000));