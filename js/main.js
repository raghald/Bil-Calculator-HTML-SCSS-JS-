const inputPrice = document.querySelector('.bottom__input-price');
const inputPersons = document.querySelector('.bottom__input-persons');
const inputTip = document.querySelector('.bottom__input-select');
const btn = document.querySelector('.bottom__btn');
const pResult = document.querySelector('.bottom__result');
const pResultCost = document.querySelector('.bottom__result--cost');
const pError = document.querySelector('.bottom__error');


console.log(price);

const priceEngine = () => {
	let price =  Number(inputPrice.value);
	let persons = Number(inputPersons.value);
	let tip = Number(inputTip.value);
	
	if (price <= 0 || persons <= 0 || tip == 0) {
		pError.textContent = 'Podaj poprawnie wszystkie wartości';
		pResult.style.display = ''
		return
	} else {
		let cost = (price + (price * tip)) / persons
		pResultCost.textContent = cost.toFixed(2)
		pResult.style.display = 'block'
		pError.textContent = '';
	}
};

btn.addEventListener('click', priceEngine);
