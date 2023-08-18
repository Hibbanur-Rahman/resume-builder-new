var hamburger=document.querySelector('.hamburger');
var dialogbox=document.querySelector('.dialogbox');
var cross=document.querySelector('.cross');

dialogbox.style.display='none';
cross.style.display='none';

hamburger.addEventListener('click',()=>{
        dialogbox.style.display='flex';
        hamburger.style.display='none';
        cross.style.display='flex';
})
cross.addEventListener('click',()=>{
    dialogbox.style.display='none';
    hamburger.style.display='flex';
    cross.style.display='none';
})


//home nav move the page
var homeNav= document.querySelector('#homeNav');
