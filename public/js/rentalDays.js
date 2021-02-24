'use strict';

let numberOfDays = 0;

function caculateDays(){
	let beginDate = new Date(document.querySelector('#leaseDate').value);
    console.log(beginDate);
	let endDate = new Date(document.querySelector('#leaseReturnDate').value);
    console.log(endDate);
	let rentalDays= endDate.getTime() - beginDate.getTime();
	numberOfDays = Math.round(rentalDays/(1000*60*60*24));
	console.log( numberOfDays);
	// alert(`El total de días de alquiler es ${numberOfDays}`);
	
};

const button = document.querySelector('#confirmDates');
button.addEventListener('click', caculateDays);

let pricePerDay= parseInt(document.querySelector('#leasingPrice').textContent);
console.log(typeof pricePerDay);

function calculatePrice(a, b){
    const finalPrice = a * b;
    console.log(finalPrice);
	return finalPrice;
}

button.addEventListener('click', function(){
	document.querySelector('#finalPrice').value = 	calculatePrice(numberOfDays, pricePerDay);
});
