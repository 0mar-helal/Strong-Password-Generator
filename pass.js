let lowerCase ="abcdefghijklmnopqrstuvwxyz";
let nums="1234567890";
let upperCase = lowerCase.toUpperCase();
let symbols='.!$#&^*$?';
var random = document.querySelector("input[type='text']");
let btn=document.querySelector("a.btn");
let checkBox=document.querySelectorAll("input[type='checkbox']");
let selectedNumber=document.querySelector("select");


let obj ={
    'upper':upperCase,
    'lower':lowerCase,
    'num':nums,
    'symbol':symbols
}
// reset random value
random.value='';
btn.onclick =function () {
    let requirdLetter=[],rand='';
    let length=selectedNumber.value;
    let arr=[];
    let format=[];let i=0
    checkBox.forEach(el => {
        if(el.checked) {
            requirdLetter.push(obj[el.dataset.value]);
            arr.push(el.dataset.value);
            format[i]=1;i++;
        }
    });
    // confirm that word consists of all option selected
    let prefixSum=0;
    let copyOfLength=length;
    for(let i=0;i<format.length-1;++i) {
        format[i]+=Math.ceil(Math.random() * (length-(format.length+prefixSum)))
        prefixSum+=format[i]-1;
        copyOfLength-=format[i];
    }
    format[format.length-1]+=copyOfLength-1;
    //format the password in way all option is in it
    if(arr.length==1) {
        for (let i=1; i <=length; ++i) {
            rand+= requirdLetter[0][Math.trunc(Math.random() * requirdLetter[0].length)];
        }
    }
    else {
        for (let i=0; i <format.length; ++i) {
            for(let j=0;j<format[i];j++) {
                rand+= requirdLetter[i][Math.trunc(Math.random() * requirdLetter[i].length)];
            }
        }
    }
    //Now the word is sorted like that asd1234%^* => char num symbol
    // for random sort
    rand=Array.from(rand);
    let finalAns='';
    for (let i=1; i <=length; ++i) {
        let j=Math.trunc(Math.random() * rand.length);
        finalAns+= rand[j];
        rand.splice(j,1)
    }
    random.value=finalAns;
}