let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })

    }
};

tab();

let waypoint = new Waypoint({
    element: document.getElementById('animScroll'),
    handler: function (direction) {
        let header = document.querySelector('.partners__imgs')
        if (direction === 'down') {
            header.classList.remove('moveRight');
            header.classList.add('moveLeft');
        } else {
            header.classList.remove('moveLeft');
            header.classList.add('moveRight');
        }
    }
})

$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        speed: 900,
        //autoplay: true,
        autoplaySpeed: 6000
    });  
});

    

 var $win = $(window);
 var $marker = $('#st1');
 $win.scroll(function () {
     $marker.each(function () {
         if ($win.scrollTop() + $win.height() >= $(this).offset().top + 300 ) {
             $('#st1').addClass('step1');
             $('#st2').addClass('step2');
             $('#st3').addClass('step3');
             $('.line__path').addClass('line__anim');
         } else {
            console.log('hi')
         }
     });
 });
