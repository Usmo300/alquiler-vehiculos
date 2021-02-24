'use strict';

// let fecha = document.querySelector('input[type="date"]');
// console.log(fecha.value);

function caculateDays(){
	let beginDate = new Date(document.querySelector('#leaseDate').value);
    console.log(beginDate);
	let endDate = new Date(document.querySelector('#leaseReturnDate').value);
    console.log(endDate);
	let rentalDays= endDate.getTime() - beginDate.getTime();
	let numberOfDays = Math.round(rentalDays/(1000*60*60*24));
	console.log(numberOfDays);
};
const button = document.querySelector('#confirmDates');
button.addEventListener('click', caculateDays);

const pricePerDay= document.querySelector('#leasingPrice').value;
console.log(pricePerDay);

function calculatePrice(numberOfDays, pricePerDay){
    const finalPrice = numberOfDays * pricePerDay;
    console.log(finalPrice);
}
button.addEventListener('click', calculatePrice);

