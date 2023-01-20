const card__items = document.querySelectorAll('.cards__item');

const cards_list = Array.from(card__items);


cards_list.forEach((card) => card.addEventListener('mouseleave', ()=>{
    card.children[0].classList.add('hover')
}))
cards_list.forEach((card) => card.addEventListener('mouseover', ()=>{
    card.children[0].classList.remove('hover')
}))


function preventClick(){
    this.removeEventListener('click',preventClick)
}

let clickCount = 0;

cards_list.forEach((card) => card.addEventListener('click',(e)=>{

    card.children[0].classList.toggle('selected')
    card.children[1].children[0].classList.toggle('active');/* измененние текста под блоком*/
    card.children[1].children[1].classList.toggle('active');
    clickCount++;
    if(clickCount>=10){/* добавление класса disabled если кликов >=10 */
        card.children[0].classList.add('disabled');
        card.children[1].children[0].classList.remove('active');
        card.children[1].children[1].classList.remove('active');
        card.children[1].children[2].classList.add('active');
        card.addEventListener('mouseleave',()=>{
            card.children[0].children[0].classList.add('active');
            card.children[0].children[1].classList.remove('active');
        })

        card.addEventListener('mouseover',()=>{
            card.children[0].children[0].classList.add('active');
            card.children[0].children[1].classList.remove('active');
        })

        card.style.pointerEvents = "none";/* Если disabled отключается клик по блоку*/
    }
    
    if(card.children[0].classList.contains('selected')){/* если блок выбран то менять текст заголовка при выходе мыши из блока */
        card.addEventListener('mouseleave',()=>{
            card.children[0].children[0].classList.remove('active');
            card.children[0].children[1].classList.add('active');
        })
        card.addEventListener('mouseover',()=>{
            card.children[0].children[0].classList.add('active');
            card.children[0].children[1].classList.remove('active');
        })
    }else {
        card.addEventListener('mouseleave',()=>{
            card.children[0].children[0].classList.add('active');
            card.children[0].children[1].classList.remove('active');
        })
    }

    
}))


