'use strict'
import {loadPage} from "./getData.js";
import {loadStyle} from "./loadStyle.js";
import {renderModal} from "./modal.js";
import {renderContacts} from "./render.js";
import {formControl} from "./formControl.js";

export const data = await loadPage();

const row =  document.createElement('tr');
const cell = document.createElement('td');
const tbody = document.querySelector('tbody');
const table = document.querySelector('table');
const tFooter = document.querySelector('.table__footer');
const PriceModal = document.querySelector('.priceAdd');
const CountModal = document.querySelector('.countAdd');
const modal = document.querySelector('.modal');
const modalEdit = document.querySelector('.modalEdit');
const modalWrapper = document.querySelector('.modal__wrapper');
const btnAdd = document.querySelector('.addProd');
// const wrapper = document.querySelector('.wrapper');
const form = document.querySelector('.modal__window');
// const btnSubmit = document.querySelector('.allAdd');
const btnClose = document.querySelectorAll('.closeCross');
const modalWrapperEdit = document.querySelector('.modal__wrapperEdit');
const formEdit = document.querySelector('.modal__windowEdit');

export const removeUser = async(id) =>{
    await fetch(`https://lunar-childish-primula.glitch.me/api/goods/${id}`, {
        method: 'DELETE',
    })
}
export const removeItems = (elem) => {
    const items = document.querySelectorAll(elem);
    for (let i = 0; i < items.length; i++) {
        items[i].remove();
    }
}

const init = () =>{
    formControl(modal, modalEdit, btnAdd, btnClose, modalWrapperEdit, modalWrapper, form);
    renderContacts(tbody)
}
init()

