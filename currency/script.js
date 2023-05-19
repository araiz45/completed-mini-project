let dates = document.getElementById("date");
let btn = document.getElementById("btn")
let dog = document.getElementById("now")
let ins = document.getElementById("insert");
let ins2 = document.getElementById("insert2");
let fro = document.getElementById('from')
let num = document.getElementById('number')


// let tdate = new Date();
// let mdate = tdate.getMonth();
// console.log(tdate, mdate)

btn.addEventListener('click', () => {
    let a = dates.value;
    let b = dog.value;
    let c = fro.value;
    let d = num.value;
    console.log(c, d);
    console.log(a, b)


    let p = fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${a}/currencies/${fro.value}.json`);

    p.then((value) => {
        return value.json();
    }).then((value) => {
        for (let b in value) {
            console.log(value[b]);
            let tot = value[b][`${dog.value}`] * num.value;
            // console.log(`The total Value of ${dog.value} - ${num.value} is`+tot * num.value);
            console.log("The value of " + value[b][`${dog.value}`]);
            ins.innerHTML = "The price of 1 " + fro.value + " in " + dog.value + " is " + value[b][`${dog.value}`] + " on "+a;  
            ins2.innerHTML =  num.value +" "+fro.value +" is equal to " + tot + " " +dog.value; 
        }

    }).catch((error) =>{
        ins.innerHTML = "Invalid Value Please Enter Correct Values"
    })
})