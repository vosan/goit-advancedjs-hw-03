import{r as e}from"./assets/rolldown-runtime-QTnfLwEv.js";import"./assets/styles-BNLQZP01.js";import{n as t,r as n,t as r}from"./assets/vendor-CZveusGh.js";var i=`https://pixabay.com/api/`,a=`56352942-a4df77b9d744e7d73d31e642f`;function o(e){return n.get(i,{params:{key:a,q:e,image_type:`photo`,orientation:`horizontal`,safesearch:!0}}).then(e=>e.data)}var s=e(t(),1),c=document.querySelector(`.gallery`),l=document.querySelector(`.loader`),u=new s.default.default(`.gallery a`,{captionsData:`alt`,captionDelay:250});function d(e){c.innerHTML=e.map(({webformatURL:e,largeImageURL:t,tags:n,likes:r,views:i,comments:a,downloads:o})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img class="gallery-image" src="${e}" alt="${n}" />
      </a>
      <div class="image-info">
        <p><b>Likes</b>${r}</p>
        <p><b>Views</b>${i}</p>
        <p><b>Comments</b>${a}</p>
        <p><b>Downloads</b>${o}</p>
      </div>
    </li>
  `).join(``),u.refresh()}function f(){c.innerHTML=``}function p(){l.classList.remove(`is-hidden`)}function m(){l.classList.add(`is-hidden`)}var h=e(r(),1);function g(e){h.default.error({title:`Error`,message:e,position:`topRight`,icon:`ico-error`})}document.querySelector(`.form`).addEventListener(`submit`,e=>{e.preventDefault();let t=e.currentTarget.elements[`search-text`].value.trim();if(!t){f(),g(`Please enter a search query!`);return}f(),p(),o(t).then(e=>{e.hits.length===0?g(`Sorry, there are no images matching your search query. Please, try again!`):d(e.hits)}).catch(e=>{g(`Something went wrong. Please try again later.`)}).finally(()=>{m()})});
//# sourceMappingURL=index.js.map