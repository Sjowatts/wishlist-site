
fetch('data/items.json').then(r=>r.json()).then(items=>{
 let cat = window.CATEGORY || null;
 const g=document.getElementById('gallery');
 items.filter(i=>!cat || i.category===cat).forEach(i=>{
   g.innerHTML+=`
   <div class='item-card'>
     <img src='${i.image}'>
     <a href='${i.link}' target='_blank'>${i.name}</a>
   </div>`;
 });
});
