'use strict'
const URL = 'https://lunar-childish-primula.glitch.me/api/goods';
const loadPage = async() =>{
    const goods = await fetch('https://lunar-childish-primula.glitch.me/api/goods');
    return goods.json();
}
console.log(loadPage());

export {loadPage};
