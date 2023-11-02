'use strict'
import {loadPages} from "./getData.js";
import {loadStyle} from "./loadStyle.js";
import {renderContacts} from "./render.js";
import {formControl} from "./formControl.js";

export const data = await loadPages();

const tbody = document.querySelector('tbody');

const modal = document.querySelector('.modal');
const modalEdit = document.querySelector('.modalEdit');
const modalWrapper = document.querySelector('.modal__wrapper');
const btnAdd = document.querySelector('.addProd');
const form = document.querySelector('.modal__window');
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

