'use strict'
export const updateUser = async(index,nameEdit,categoryEdit,UoMEdit,countEdit,priceEdit) =>{
    await fetch(`https://lunar-childish-primula.glitch.me/api/goods/${index}`,{
        method:'PATCH',
        headers:{
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
            title: nameEdit.value ,
            category: categoryEdit.value,
            units: UoMEdit.value,
            count: countEdit.value,
            price: priceEdit.value,
        }),
        mode:'cors'
    })
}