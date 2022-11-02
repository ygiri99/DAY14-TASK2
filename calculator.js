//creating main div for background
const mainDiv = document.createElement('div');
mainDiv.className = 'm-2 container text-center  table-responsive';
//mainDiv.setAttribute('class','fontFamily');
//creating h1
const h1 = document.createElement('h1');
h1.innerText = 'CALCULATOR';
h1.id = 'title';
//creating p
const p = document.createElement('p');
p.innerText = 'To calculate simple sums use this.';
p.id = 'description';
p.className = 'text-lighter';
//creating calculator div
const calcdiv = document.createElement('div');
calcdiv.className = 'd-flex justify-content-center';
//creating table
const table = document.createElement('table');
table.className = 'table-bordered table-responsive rounded m-1 bg-secondary box';
//first row
const row1 = document.createElement('tr');
const inp =document.createElement('input');
inp.className = 'col-10 bg-transperat m-1 mt-3 fontFamily';

inp.id = 'result';
inp.type = 'text';
inp.value ='';
inp.placeholder = '0';
//second row
const row2 = document.createElement('tr');
const cbtn = document.createElement('button');
cbtn.innerText = "C";
cbtn.id = 'clear';
//cbtn.value = '';
cbtn.className = 'col col-md-20 bg-danger m-1 py-2 px-1 button';
const backbtn = document.createElement('button');
backbtn.innerText = '<-';
backbtn.id = 'back';
backbtn.className = 'col col-md-20 bg-warning m-1 py-2 px-1 button';
const dotbtn = document.createElement('button');
dotbtn.innerText = ".";
dotbtn.id = 'dot';
dotbtn.className = 'col col-md-20 bg-warning m-1 py-2 px-1 button';
const mulbtn = document.createElement('button');
mulbtn.innerText = "*";
mulbtn.id = 'multiply';
mulbtn.className = 'col col-md-20 bg-warning m-1 py-2 px-1 button';
//third row
const row3 = document.createElement('tr');
const btn7 = document.createElement('button');
btn7.innerText = "7";
btn7.id = '7';
btn7.className = 'col col-sm-25 bg-info m-1 py-2 px-4 button';
const btn8 = document.createElement('button');
btn8.innerText = '8';
btn8.id = '8';
btn8.className = 'col col-sm-25 bg-info m-1 py-2 px-4 button';
const btn9 = document.createElement('button');
btn9.innerText = "9";
btn9.id = '9';
btn9.className = 'col col-sm-25 bg-info m-1 py-2 px-4 button';
const divbtn = document.createElement('button');
divbtn.innerText = "/";
divbtn.id = 'division';
divbtn.className = 'col col-sm-25 bg-warning m-1 py-2 px-4 button';
//fourth row
const row4 = document.createElement('tr');
const btn4 = document.createElement('button');
btn4.innerText = "4";
btn4.id = '4';
btn4.className = 'col col-sm-25 bg-info m-1 py-2 button';
const btn5 = document.createElement('button');
btn5.innerText = '5';
btn5.id = '5';
btn5.className = 'col col-sm-25 bg-info m-1 py-2 px-4 button';
const btn6 = document.createElement('button');
btn6.innerText = "6";
btn6.id = '6';
btn6.className = 'col col-sm-25 bg-info m-1 py-2 px-4 button';
const subbtn = document.createElement('button');
subbtn.innerText = "-";
subbtn.id = 'subtract';
subbtn.className = 'col col-sm-25 bg-warning m-1 py-2 px-4 button';
//fifth row
const row5 = document.createElement('tr');
const btn1 = document.createElement('button');
btn1.innerText = "1";
btn1.id = '1';
btn1.className = 'col col-sm-25 bg-info m-1 py-2 px-4 button';
const btn2 = document.createElement('button');
btn2.innerText = "2";
btn2.id = '2';
btn2.value = '2';
btn2.className = 'col col-sm-25 bg-info m-1 py-2 px-4 button';
const btn3 = document.createElement('button');
btn3.innerText = "3";
btn3.id = '3';
btn3.value = '3';
btn3.className = 'col col-sm-25 bg-info m-1 py-2 px-4 button';
const addbtn = document.createElement('button');
addbtn.innerText = '+';
addbtn.id = 'add';
addbtn.value = '+';
addbtn.className = 'col col-sm-25 bg-warning m-1 py-2 px-4 button';
//last row
const rowL = document.createElement('tr');
const btn0 = document.createElement('button');
btn0.innerText = "0";
btn0.id = '0';
btn0.value = '0';
btn0.className = 'col col-sm-25 bg-info m-1 py-2 px-4 button';
const btn00 = document.createElement('button');
btn00.innerText = '00';
btn00.id = '00';
btn00.value = '00';
btn00.className = 'col col-sm-25 bg-info m-1 py-2 px-3 button';
const eqlbtn = document.createElement('button');
eqlbtn.innerText = "=";
eqlbtn.id = 'equal';
eqlbtn.value = "=";
eqlbtn.className = 'col col-sm-50 bg-success m-1 py-2 px-5 buttoneq';
//appending all
row1.append(inp);
row2.append(cbtn,backbtn,dotbtn,mulbtn);
row3.append(btn7,btn8,btn9,divbtn);
row4.append(btn4,btn5,btn6,subbtn);
row5.append(btn1,btn2,btn3,addbtn);
rowL.append(btn0,btn00,eqlbtn);
table.append(row1,row2,row3,row4,row5,rowL);
calcdiv.appendChild(table);
mainDiv.append(h1,p,calcdiv);
document.body.append(mainDiv);

//clearing
const clear = () => {
    inp.value = '';
    row1.append(inp);
}
cbtn.addEventListener('click',clear);


inp.addEventListener('keydown',(e)=>{
    let n = e.key;
    n =+ n;
    if(e.key=='Enter'){
        let v = inp.value;
    inp.value = eval(v);
    row1.append(inp);
    } 
    else if(e.key=="shift"){
        row1.append(inp);
    }
    else {
    function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }
    if(isNumber(n) === false){
        alert("Only numbers are allowed"); 
    }
}

});
//delet an number
backbtn.addEventListener('click',back = ()=> {
    let v = inp.value;
    let arr =v.split('');
    arr.pop();
    v = arr.join("");
    inp.value = v;
    row1.append(inp);

})
//dot .
dotbtn.addEventListener('click',dot = () => {
    inpt('.');
});

//add *
mulbtn.addEventListener('click',multiply = () => {
    inpt('*');
});

//add 7
btn7.addEventListener('click',id7 = () => {
    inpt('7');
});
//add 8
btn8.addEventListener('click',id8 = () => {
    inpt('8');
});
//add 9
btn9.addEventListener('click',id9 = () => {
    inpt('9');
});
//add /
divbtn.addEventListener('click',division = () => {
    inpt('/');
});
//add 4
btn4.addEventListener('click',id4 = () => {
    inpt('4');
});
//add 5
btn5.addEventListener('click',id5 = () => {
    inpt('5');
});
//add 6
btn6.addEventListener('click',id6 = () => {
    inpt('6');
});
//add -
subbtn.addEventListener('click',subtraction = () => {
    inpt('-');
});
//add 1
btn1.addEventListener('click',id1 = () => {
    inpt('1');
});
//add 2
btn2.addEventListener('click',id2 = () => {
    inpt('2');
});
//add 3
btn3.addEventListener('click',id3 = () => {
    inpt('3');
});
//add +
addbtn.addEventListener('click',addtion = () => {
    inpt('+');
});
//add 0
btn0.addEventListener('click',id0 = () => {
    inpt('0');
});
//add 00
btn00.addEventListener('click',id00 = () => {
    inpt('00');
});
//sum
 
eqlbtn.addEventListener('click',sum = (e) => {
    let v = inp.value;
    inp.value = eval(v);
    row1.append(inp);
});
//input function
function inpt(val){
    inp.value += val;
    row1.append(inp);
}