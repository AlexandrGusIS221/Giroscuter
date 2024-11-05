function toggleActive(selectedItem) {
    const items = document.querySelectorAll('.catalog-filtr__item');

    items.forEach(item => {
        item.classList.remove('catalog-filtr__item--active');
    });

    selectedItem.classList.add('catalog-filtr__item--active');
}