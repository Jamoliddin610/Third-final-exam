let openHomeModal = document.getElementById('home-modal');
let homeModal = document.getElementById('modal-home');
let closeHomemodal = document.getElementById('close-home');
let openShopmodal = document.getElementById('shop-modal');
let shopModal = document.getElementById('modal-shop');
let closeShopmodal = document.getElementById('close-shop');
let openPagemodal = document.getElementById('page-modal');
let shopPage = document.getElementById('modal-page');
let closePagemodal = document.getElementById('close-page');
let opencontent = document.getElementById('open-content');
let content = document.getElementById('first-content');
let opencontentsecond = document.getElementById('open-content-second');
let contentSecond = document.getElementById('second-content');
let opencontentthird = document.getElementById('open-content-third');
let contentthird = document.getElementById('third-content');
let opencontentfour = document.getElementById('open-content-four');
let contentfour = document.getElementById('four-content');


openHomeModal.addEventListener('click',function(){
    homeModal.classList.add('open-modals')
});
closeHomemodal.addEventListener('click',function(){
    homeModal.classList.remove('open-modals')
});
openShopmodal.addEventListener('click',function(){
    shopModal.classList.add('open-modals-shop');
})
closeShopmodal.addEventListener('click',function(){
    shopModal.classList.remove('open-modals-shop');
})
openPagemodal.addEventListener('click',function(){
    shopPage.classList.add('open-modals-page');
})
closePagemodal.addEventListener('click',function(){
    shopPage.classList.remove('open-modals-page');
})
opencontent.addEventListener('click',function(){
     content.classList.toggle('open-content');
    opencontent.classList.toggle('btn-rotate');
    contentSecond.classList.remove('open-content');
    opencontentsecond.classList.remove('btn-rotate');
    contentthird.classList.remove('open-content');
    opencontentthird.classList.remove('btn-rotate');
    contentfour.classList.remove('open-content');
    opencontentfour.classList.remove('btn-rotate');
})
opencontentsecond.addEventListener('click',function(){
    contentSecond.classList.toggle('open-content');
    opencontentsecond.classList.toggle('btn-rotate');
    content.classList.remove('open-content');
    opencontent.classList.remove('btn-rotate');
    contentthird.classList.remove('open-content');
    opencontentthird.classList.remove('btn-rotate');
    contentfour.classList.remove('open-content');
    opencontentfour.classList.remove('btn-rotate');
})
opencontentthird.addEventListener('click',function(){
    contentthird.classList.toggle('open-content');
    opencontentthird.classList.toggle('btn-rotate');
    content.classList.remove('open-content');
    opencontent.classList.remove('btn-rotate');
    contentSecond.classList.remove('open-content');
    opencontentsecond.classList.remove('btn-rotate');
    contentfour.classList.remove('open-content');
    opencontentfour.classList.remove('btn-rotate');
})
opencontentfour.addEventListener('click',function(){
    contentfour.classList.toggle('open-content');
    opencontentfour.classList.toggle('btn-rotate');
    content.classList.remove('open-content');
    opencontent.classList.remove('btn-rotate');
    contentSecond.classList.remove('open-content');
    opencontentsecond.classList.remove('btn-rotate');
    contentthird.classList.remove('open-content');
    opencontentthird.classList.remove('btn-rotate');
})

let openSearchBox = document.getElementById('open-search');
let SearchBox = document.getElementById('search-modal');
let SearchIcon = document.getElementById('search-icon')
var num = 0
openSearchBox.addEventListener('click',function(){
    SearchBox.classList.toggle('open-search-modal');
    if (num==0) {
        SearchIcon.className= 'fal fa-close';
        num++
    }else{
        SearchIcon.className = 'fal fa-search';
        num--;
    }
    
})