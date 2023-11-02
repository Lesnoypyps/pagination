import {loadStyle} from "./loadStyle.js";
import {data, removeUser} from "./script.js";
import {renderContacts} from "./render.js";


export const formControl = (modal, modalEdit, btnAdd, btnClose, modalWrapperEdit, modalWrapper, form) =>{
    const fullPriceModal = document.querySelector('.price--text--span--modal');
    const tbody = document.querySelector('tbody');
    const spanPrice = document.querySelector('.price--text--span');
    data.forEach( el =>{
        console.log(el)
    })
    const openModal =() => {

        modal.classList.add('visible');
        loadStyle('./style/modal.css')
    }
    const openModalEdit =() => {
        modalEdit.classList.add('visible');
        loadStyle('./style/modal.css')
    }
    const closeModalEdit =() => {
        modalEdit.classList.remove('visible')
    }

    const closeModal =() => {
        modal.classList.remove('visible');

    };

    btnAdd.addEventListener('click', ()=>{
        openModal()
    });
    modal.addEventListener('click', e => {
        const target = e.target;
        if(target === modalWrapper){
            closeModal();
        }
    });
    modalEdit.addEventListener('click', e =>{
        const target = e.target
        if (target === modalWrapperEdit) {
            closeModalEdit();
        }
    } )
    btnClose.forEach(elem => {
        elem.addEventListener('click', ()=>{
            closeModalEdit()
            closeModal()
        })
    });
    form.addEventListener('submit', e=>{
        e.preventDefault();
        const target = e.target;
        const formData = new FormData(target);
        let newProduct = Object.fromEntries(formData);
        fetch('https://lunar-childish-primula.glitch.me/api/goods',{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
            mode:'cors'
        })
        fullPriceModal.textContent = '0$';
        form.reset();

        closeModal();
    })
    window.addEventListener('click', e => {


        const target = e.target;
        // const products = getStorage('products');

        if (target.closest('.edit-icon')) {
            let str = target.closest('.table__row').childNodes[0].textContent;
            console.log(Number(str));


            data.forEach(elem =>{
                if(elem.id === str){
                    const index = data.findIndex(i => i.id === Number(str));
                    console.log(Number(str))
                    document.querySelector('.nameEditInput').value = elem.title;
                    document.querySelector('.categoryEditInput').value = elem.category;
                    document.querySelector('.UoMEditInput').value = elem.units;
                    document.querySelector('.countEditInput').value = elem.count;
                    document.querySelector('.priceEditInput').value = elem.price;
                    document.querySelector('.descriptionEditInput').value = elem.description;
                }
            })
            openModalEdit();
        }
    })
    tbody.addEventListener('click', e => {
        const target = e.target;
        if(target.closest('.del-icon')){
            for(const elem of data){
                if(elem.id === target.closest('.table__row').firstChild.textContent){
                    const index = data.findIndex(i => i.id === target.closest('.table__row').firstChild.textContent);
                    removeUser(index)
                    data.splice(index,1);
                    renderContacts(data)
                }
            }
        }
    });
    const checkbox = document.querySelector('#discount');
    if (checkbox.checked) {
        const inputDiscount = document.querySelector('.discountAdd');
        inputDiscount.disabled = false;
        const discount = Number(inputDiscount.value);
        fullPriceModal.textContent = Number(CountModal.value)*Number(PriceModal.value)*(discount/100) + '$';
    }
    let totalPriceList = 0;
    data.forEach(elem =>{
        totalPriceList += elem.price * elem.count;
    })
    spanPrice.textContent = totalPriceList.toString() + '₽';
    fullPriceModal.textContent = '0$';
}
