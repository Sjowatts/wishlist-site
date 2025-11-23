fetch('data/items.json')
  .then(response => response.json())
  .then(items => renderItems(items))
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

    gallery.appendChild(card);
  });
}
