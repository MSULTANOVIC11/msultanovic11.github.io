const inscription = document.querySelector(".inscrire");
const inscription1 = document.querySelector(".inscrire1");
const inscription2 = document.querySelector(".inscrire2");
const inscription3 = document.querySelector(".inscrire3");
const inscription4 = document.querySelector(".inscrire4");
const inscription5 = document.querySelector(".inscrire5");
const flou= document.querySelector(".fullpage");
const header= document.querySelector(".header");
const body = document.body;
const page = document.documentElement;

function doToggle()
{
    header.classList.toggle('bye');
    flou.classList.toggle('flou');
    body.classList.toggle('inscription-open');
    page.classList.toggle('noscroll');
}

inscription.addEventListener('click',doToggle);
inscription1.addEventListener('click',doToggle);
inscription2.addEventListener('click',doToggle);
inscription3.addEventListener('click',doToggle);
inscription4.addEventListener('click',doToggle);
inscription5.addEventListener('click',doToggle);