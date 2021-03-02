const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () =>{
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
})


// part projecten
const panels = document.querySelectorAll('.panel');


panels.forEach((panel) =>{

    panel.addEventListener('click', () =>{

        removeActiveClasses();

        panel.classList.add('active');
    })
})


function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}