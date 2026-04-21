function openImageModal(imageSrc) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    
    modal.style.display = "block";
    modalImg.src = imageSrc; // Подставляем путь к картинке меню
}

function closeImageModal() {
    document.getElementById('image-modal').style.display = "none";
}

// Закрытие при клике вне окна
window.onclick = function(event) {
    const modal = document.getElementById('image-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}






function moveSlide(direction, btnElement) {
    // Находим ближайший контейнер именно этого слайдера
    const container = btnElement.closest('.slider-container');
    
    // Берем слайды только внутри этого контейнера
    const slides = container.querySelectorAll('.slide');
    
    // Ищем, какая картинка сейчас активна
    let activeIndex = Array.from(slides).findIndex(s => s.classList.contains('active'));
    
    // Если вдруг активный класс потерялся, ставим на первый слайд
    if (activeIndex === -1) activeIndex = 0;

    // Убираем видимость у текущего слайда
    slides[activeIndex].classList.remove('active');
    
    // Считаем индекс следующего слайда
    let newIndex = (activeIndex + direction + slides.length) % slides.length;
    
    // Показываем новый слайд
    slides[newIndex].classList.add('active');
}