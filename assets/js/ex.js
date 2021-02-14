var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};


function loadBackground(){
    const url = "https://api.unsplash.com/photos/random/?count=1&collections=11202998&client_id=q66Nd00EFVibb6KoE08DZpbFHOhrBPJKz-pShruifO8"
    var photo;

    fetch(url).then(response =>{
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    }).then(data =>{
       photo = data[0]["urls"]["regular"];
       var backG = document.getElementsByClassName("background-image")[0];
       backG.style.backgroundImage="url("+photo+")";

    }).catch(error =>{
        var backG = document.getElementsByClassName("background-image")[0];
        backG.style.backgroundImage="url(assets/images/defaultBackground.jpg)";

    });

    return 0;
    
};



window.onload = function() {



    var temp = loadBackground();


    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff; margin-right:0.2em; animation: animated-cursor 1000ms steps(2,start) infinite;  -webkit-animation: animated-cursor 1000ms steps(2, start) infinite;}";
    document.body.appendChild(css);
};