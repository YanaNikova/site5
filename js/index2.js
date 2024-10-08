const contentCard = document.querySelectorAll('.content__cards-foto');
const cardSize = document.querySelectorAll('.cards-size');
const cardDescr = document.querySelectorAll('.cards-descr');
const imgCard = document.querySelectorAll('.img');

const backImg = document.querySelectorAll('.back-img');
const modelTabs = document.querySelectorAll('.clothmodel__tabs-img');

const colorBlock = document.querySelectorAll('.color_block');
const colorCircle = document.querySelectorAll('.color_circle div');

contentCard.forEach((element, i) => {
    element.addEventListener('mouseover', () => {
        if (cardSize[i].classList.contains("hover")) {
            cardSize[i].classList.remove("hover");
            cardDescr[i].classList.add("hover");
            imgCard[i].classList.add("shadow");
            element.addEventListener('click', function (){
                window.location.href = 'goods.html';
            })
        } 
    })

    element.addEventListener('mouseout', () => {
        if (cardDescr[i].classList.contains("hover")) {
            cardSize[i].classList.add("hover");
            cardDescr[i].classList.remove("hover");
            imgCard[i].classList.remove("shadow");
        } 
    })
});

modelTabs.forEach((element, i) => {
    element.addEventListener('mouseover', () => {
        element.classList.add("shadow");
    })
    element.addEventListener('click', () => {
        if (!backImg[i].classList.contains("activ")) {
            for(let j=0; j<modelTabs.length; j++){
                backImg[j].classList.remove("activ");
            }
            backImg[i].classList.add("activ");
        } 
    })
    element.addEventListener('mouseout', () => {
        element.classList.remove("shadow");
    })

});


colorCircle.forEach((element, i) => {
    element.addEventListener('mouseover', () => {
        element.classList.add("shadow");
    })
    element.addEventListener('click', () => {
        if (!colorBlock[i].classList.contains("block")) {
            for(let j=0; j<modelTabs.length; j++){
                colorBlock[j].classList.remove("block");
            }
            colorBlock[i].classList.add("block");
        } 
    })
    element.addEventListener('mouseout', () => {
        element.classList.remove("shadow");
    })
});