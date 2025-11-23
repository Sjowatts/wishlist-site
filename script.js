fetch('data/items.json')
  .then(r=>r.json())
  .then(items=>{
    window.allItems=items;
    render(items);
  });

function render(items){
  const g=document.getElementById('gallery');
  g.innerHTML='';
  items.forEach(i=>{
    g.innerHTML+=`
    <div class="item-card">
      <img src="${i.image}" alt="${i.name}">
      <a href="${i.link}" target="_blank">${i.name}</a>
    </div>`;
  });
}

document.querySelectorAll('nav button').forEach(btn=>{
  btn.onclick=()=>{
    const f=btn.dataset.filter;
    if(f==="all") render(allItems);
    else render(allItems.filter(i=>i.category===f));
  };
});
