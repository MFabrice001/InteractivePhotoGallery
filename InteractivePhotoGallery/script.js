document.addEventListener('DOMContentLoaded', () => {
  const thumbnails = document.querySelectorAll('.thumbnail img');
  const fullsize = document.querySelector('.fullsize img');

  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
          fullsize.src = thumbnail.src;
      });
  });
});
