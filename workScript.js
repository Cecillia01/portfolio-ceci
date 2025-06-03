// Image modal viewer for graphic and tshirt designs
document.querySelectorAll('.clickable-img').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <span class="modal-close">&times;</span>
      <img src="${img.src}" alt="${img.alt}">
    `;
    document.body.appendChild(modal);
    modal.style.display = 'block';

    modal.querySelector('.modal-close').addEventListener('click', () => {
      modal.remove();
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".clickable-img").forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "flex"; // Use flex to center content
      modalImg.src = img.src;
      captionText.textContent = img.alt;
      document.body.style.overflow = "hidden"; // prevent scroll
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});
