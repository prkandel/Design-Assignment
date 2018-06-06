var counter1 = new Counter("counter-one-number");
var counter2 = new Counter("counter-two-number");
var counter3 = new Counter("counter-three-number");
var counter4 = new Counter("counter-four-number");

function testScroll(ev) {

    if (window.pageYOffset > 600) {

        counter1.startCount(79000);
        counter2.startCount(754);
        counter3.startCount(4000);
        counter4.startCount(1000);
    }

    //Following piece of code is for the disappearance of menu after we scroll down one screen height
    if(window.pageYOffset >= window.innerHeight)
        document.getElementsByClassName('menu-wrapper')[0].style.display = 'none';
    else
        document.getElementsByClassName('menu-wrapper')[0].style.display = 'block';
}

window.onscroll = testScroll;
