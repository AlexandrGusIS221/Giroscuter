function toggleActive(selectedItem) {
    const items = document.querySelectorAll('.catalog-filtr__item');

    items.forEach(item => {
        item.classList.remove('catalog-filtr__item--active');
    });

    selectedItem.classList.add('catalog-filtr__item--active');
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Отменяем стандартное поведение ссылки

        const target = document.querySelector(this.getAttribute('href'));
        const offset = 124; // Смещение на 124 пикселя
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth' // Плавная прокрутка
        });
    });
});
const button = document.getElementById('burger');
const burgerlist = document.getElementById('burgerList');

button.addEventListener('click', function() {
    if(burgerlist.style.display == 'flex'){
        burgerlist.style.display = 'none';
    }
    else{
        burgerlist.style.display = 'flex';
    }
});