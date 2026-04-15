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