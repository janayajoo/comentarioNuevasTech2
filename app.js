
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    // Section Active Class
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            //Remove selected from the other btn
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            // hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

   

}

function per0() {
    document.getElementById("myBar").style.width = "0%";
}

function per25() {
    document.getElementById("myBar").style.width = "25%";
}

function per50() {
    document.getElementById("myBar").style.width = "75%";
}

function per100() {
    document.getElementById("myBar").style.width = "100%";
}


PageTransitions();
