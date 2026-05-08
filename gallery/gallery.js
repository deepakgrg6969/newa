var currentPage = 1;
var totalPages = 2;

// ── Pagination ──
function changePage(page) {
  if (page < 1 || page > totalPages) return;

  // Hide current page
  document.getElementById('page-' + currentPage).classList.add('hidden');
  document.getElementById('btn-' + currentPage).classList.remove('active');

  // Show new page
  currentPage = page;
  document.getElementById('page-' + currentPage).classList.remove('hidden');
  document.getElementById('btn-' + currentPage).classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Add click listeners to all gallery items ──
var items = document.querySelectorAll('.gallery-item');
items.forEach(function(item) {
  item.addEventListener('click', function() {
    var img = item.querySelector('img');
    if (img) {
      openLightbox(img.src);
    }
  });
});
