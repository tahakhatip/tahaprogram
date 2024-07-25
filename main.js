let btnMenu = document.getElementById('btn-menu');
let Menu = document.querySelector('.nav-links');

btnMenu.onclick = function(){
    btnMenu.classList.toggle('fa-times');
    Menu.classList.toggle('active')
}

let header = document.querySelector('header');

window.onscroll = function(){
    if(this.scrollY >= 100){
        header.classList.add('active')
    }
    else{
        header.classList.remove('active')
    }
    btnMenu.classList.remove('fa-times')
    Menu.classList.remove('active')
}



document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // التحقق من الوضع الحالي وتحديث واجهة المستخدم
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    // إضافة حدث النقر على زر الوضع الداكن
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // حفظ الوضع الحالي في التخزين المحلي
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});
