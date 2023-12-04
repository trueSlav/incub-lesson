let name = 'it-incubator';

let graduatesCount = 2000;

let areYouChampion = false;

document.write('<h1>', name, '</h1>');

document.write('<input type="number" value=" ' + graduatesCount + ' ">');

document.write('<input type="checkbox"', areYouChampion ? 'checked' : '', '>');

let student = {
	info: {
		firstName: 'Ivan',
		lastName: 'Ivanov'
	},
	address: {
		country: 'France',
		city: 'Paris',
	}
}

document.write('<p>','firstname: ',student.info.firstName ,'</br>', 'lastname: ',student.info.lastName, '</p>');


