const tons = document.getElementById('tons');
const kilogram = document.getElementById('kilogram');
const stone = document.getElementById('stone');
const ounces = document.getElementById('ounces');
const instruction = document.getElementById('instruction');
const form = document.getElementById('form');
const converter = document.getElementById('converter');
const output = document.getElementById('output');

let convert;


tons.addEventListener('click', function() {
    instruction.textContent='Type in a number of tons';
    convert = 'tons';
 });
 kilogram.addEventListener('click', function() {
    instruction.textContent='Type in a number of kilogram';
    convert = 'kilogram';
 });

 stone.addEventListener('click', function() {
    instruction.textContent='Type in a number of stone';
    convert = 'stone';
 });
 ounces.addEventListener('click', function() {
    instruction.textContent='Type in a number of ounces';
    convert = 'ounces';
 });

 function convertBtn(){

    const number = document.getElementById('number').value;

    if(convert === 'tons'){
        let ans = number * 1000;
        output.innerHTML = number + ' ' + 'tons ' + '= ' +  ans + ' kilogram';
        console.log(ans);
    }
    else if(convert === 'kilogram'){
        let ans = number / 1000;
        output.innerHTML =  number + ' ' + 'kilograms ' + '= ' +  ans + ' tons';
        console.log(ans);
    }
    else if(convert ==='stone'){
        let ans = number * 63.5;
        output.innerHTML =  number + ' ' + 'stone ' + '= ' +  ans + ' ounces';
        console.log(ans);
    }
    else if(convert === 'ounces'){
        let ans = number / 35.274;
        output.innerHTML =  number + ' ' + 'ounce ' + '= ' +  ans + ' stone';
        console.log(ans);
    }
 }
   


