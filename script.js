const dropdownBtns = document.querySelectorAll('.dropdown-button');


dropdownBtns.forEach(button => {
    button.addEventListener('click', (event) =>{
        const parent = button.parentElement;
        const dropContent = parent.querySelector('.drop-content');

        dropContent.classList.toggle('visible');
    });
});

window.addEventListener('click', (event) => {
    if(!event.target.classList.contains('dropdown-button')) {
        const dropRemove = document.querySelectorAll('.drop-content');

        dropRemove.forEach(content => {
            content.classList.remove('visible');
        })
    }
})