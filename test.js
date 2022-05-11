const obj = {
    name:"faaraz",
    age:"18",
    address:{
        city:"karachi"
    }
}

const {name,age,address} = obj


const num = [2,3,3,4,12]
const [num1,...num2] = num;
function tableMultiple(num,...numbers){
    numbers.forEach(element => {
        console.log(element * num);
    });
}
tableMultiple(num1,...num2)