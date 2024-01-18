// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

document.getElementById('searchForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Відображення індикатора завантаження
  showLoader();

  const searchTerm = document.getElementById('searchInput').value.trim();

  document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '41901564 - aceebb7c9fdd08ac794ac72d8';
    const apiUrl = 'https://pixabay.com/api/';

    document
      .getElementById('searchForm')
      .addEventListener('submit', function (e) {
        e.preventDefault();

        const searchTerm = document.getElementById('searchInput').value.trim();

        if (searchTerm === '') {
          iziToast.error({
            title: 'Error',
            message: 'Please enter a search term',
          });
          return;
        }

        const requestData = {
          key: apiKey,
          q: searchTerm,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
        };

        fetch(`${apiUrl}?${new URLSearchParams(requestData)}`)
          .then(response => response.json())
          .then(data => {
            displayImages(data.hits);
            hideLoader(); // Приховання індикатора завантаження після успішного завершення
          })
          .catch(() => {
            hideLoader(); // Приховання індикатора завантаження у разі помилки
            iziToast.error({
              title: 'Error',
              message: 'Failed to fetch images. Please try again later.',
            });
          });
      });
    function showLoader() {
      const loaderContainer = document.createElement('div');
      loaderContainer.className = 'loader-container';

      const loader = document.createElement('div');
      loader.className = 'loader';

      loaderContainer.appendChild(loader);
      document.body.appendChild(loaderContainer);
    }

    function hideLoader() {
      const loaderContainer = document.querySelector('.loader-container');
      if (loaderContainer) {
        loaderContainer.remove();
      }
    }
    function displayImages(images) {
      const gallery = document.getElementById('gallery');
      gallery.innerHTML = '';

      if (images.length === 0) {
        iziToast.info({
          title: 'Info',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      images.forEach(image => {
        const card = document.createElement('div');
        card.className = 'card';

        // Обгортаємо картку зображення в посилання для SimpleLightbox
        card.innerHTML = `
                <a href="${image.largeImageURL}" data-lightbox="gallery" data-title="Likes: ${image.likes}, Views: ${image.views}, Comments: ${image.comments}, Downloads: ${image.downloads}">
                    <img src="${image.webformatURL}" alt="${image.tags}" data-src="${image.largeImageURL}" data-caption="Likes: ${image.likes}, Views: ${image.views}, Comments: ${image.comments}, Downloads: ${image.downloads}">
                </a>
            `;

        gallery.appendChild(card);
      });

      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });

      // Оновлення галереї
      lightbox.refresh();
    }
  });
});
