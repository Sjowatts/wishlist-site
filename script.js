let allItems = [];

fetch('data/items.json')
  .then(response => response.json())
  .then(items => {
    allItems = items;
    renderItems(allItems);
  })
  .catch(err => console.error('JSON load error:', err));

function renderItems(items) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'item-card';

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <a href="${item.link}" target="_blank">${item.name}</a>
    `;

    card.style.opacity = 0;
    gallery.appendChild(card);

    setTimeout(() => { card.style.opacity = 1; }, 50);
  });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    if (filter === 'all') {
      renderItems(allItems);
    } else {
      const filtered = allItems.filter(item => item.category === filter);
      renderItems(filtered);
    }
  });
});
