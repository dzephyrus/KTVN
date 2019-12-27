// JavaScript Document
const tobeSelected = (s) => document.querySelector(s);

tobeSelected('.menu-toggle').addEventListener('click' , () =>{
	tobeSelected('header-res').classList.toggle(token:'nav-open');
});

tobeSelected('.dropdown-toggle').addEventListener('click', (e) =>{
	e.preventDefault();
	tobeSelected('#nyDropdown').classList.toggle('show-dropdown');
});