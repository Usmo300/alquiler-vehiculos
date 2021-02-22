'use strict';



function caculateDays(){
	let beginDate = new Date(document.querySelector('#leaseDate').value);
    console.log(beginDate);
	let endDate = new Date(document.querySelector('#leaseReturnDate').value);
	let rentalDays= endDate.getTime()-beginDate.getTime();
	let numberOfDays = Math.round(rentalDays/(1000*60*60*24));
	console.log(numberOfDays);
};
caculateDays();