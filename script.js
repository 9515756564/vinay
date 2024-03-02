var categories = document.querySelector('.categories');

var selectOptions = document.querySelector('.selectOptions');

var options = document.getElementsByClassName('options');

var selectName = document.getElementsByClassName('.selectName');

categories.onclick = function(){
    selectOptions.classList.toggle('act');
}

//////////////

var home1 = document.querySelector('.home1');

var homeOptions = document.querySelector('.homeOptions');

var hlist = document.getElementsByClassName('hlist');

home1.onclick = function(){
    homeOptions.classList.toggle('homevisible');
}

//////////////

var shop1 = document.querySelector('.shop1');

var shopOptions = document.querySelector('.shopOptions');

var slist = document.getElementsByClassName('slist');

shop1.onclick = function(){
    shopOptions.classList.toggle('shopvisible');
}

//////////////

var page1 = document.querySelector('.page1');

var pageOptions = document.querySelector('.pageOptions');

var plist = document.getElementsByClassName('plist');

page1.onclick = function(){
    pageOptions.classList.toggle('pagevisible');
}

//////////////

var cate = document.querySelector('.cate');

var categorieOptions = document.querySelector('.categorieOptions');

var clist = document.getElementsByClassName('clist');

var sectionHead = document.getElementById('sectionHead');

var header3 = document.querySelector('.header3')

cate.onclick = function(){
    categorieOptions.classList.toggle('catevisible');

    if(sectionHead.style.display === 'none'){

        sectionHead.style.display='';
    }
    else{
        sectionHead.style.display='none';
    }

}
for(op of clist){
    op.onclick = function(){
    cate.innerText = this.innerText;
    }

}


///////////////////////cart/////////////////////////////

// let headerLogos = document.querySelector('.headerLogos');
// let header7 = document.querySelector('.header7');
// let shopping = document.querySelector('.shopping');
// let cartcount = document.querySelector('.cartcount');
// let cartItem = document.querySelector('.cartItem');
// let listCard = document.querySelector('listCard');
// let checkOut = document.querySelector('.checkOut');
// let total = document.querySelector('.total');
// let closeCart = document.querySelector('.closeCart');
// let body = document.querySelector('body');

// shopping.addEventListener('click',()=>{
//   cartItem.classList.toggle('active')
//   cartItem.style.display="";
// })

///////////////////////////////////////////////////////