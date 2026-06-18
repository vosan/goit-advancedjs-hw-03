import{r as e}from"./assets/rolldown-runtime-QTnfLwEv.js";import{n as t,r as n,t as r}from"./assets/vendor-CZveusGh.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=`https://pixabay.com/api/`,a=`56352942-a4df77b9d744e7d73d31e642f`;function o(e){return n.get(i,{params:{key:a,q:e,image_type:`photo`,orientation:`horizontal`,safesearch:!0}}).then(e=>e.data)}var s=e(t(),1),c=document.querySelector(`.gallery`),l=document.querySelector(`.loader`),u=new s.default.default(`.gallery a`,{captionsData:`alt`,captionDelay:250});function d(e){c.innerHTML=e.map(({webformatURL:e,largeImageURL:t,tags:n,likes:r,views:i,comments:a,downloads:o})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${t}">
            <img class="gallery-image" src="${e}" alt="${n}" />
          </a>
          <div class="image-info">
            <div class="image-info-item">
              <span class="info-label">Likes</span>
              <span class="info-value">${r||0}</span>
            </div>
            <div class="image-info-item">
              <span class="info-label">Views</span>
              <span class="info-value">${i||0}</span>
            </div>
            <div class="image-info-item">
              <span class="info-label">Comments</span>
              <span class="info-value">${a||0}</span>
            </div>
            <div class="image-info-item">
              <span class="info-label">Downloads</span>
              <span class="info-value">${o||0}</span>
            </div>
          </div>
        </li>
      `).join(``),u.refresh()}function f(){c.innerHTML=``}function p(){l.classList.remove(`is-hidden`)}function m(){l.classList.add(`is-hidden`)}var h=e(r(),1);function g(e){h.default.error({title:`Error`,message:e,position:`topRight`,icon:`ico-error`})}document.querySelector(`.form`).addEventListener(`submit`,e=>{e.preventDefault();let t=e.target.elements[`search-text`].value.trim();if(f(),!t){g(`Please enter a search query!`);return}p(),o(t).then(e=>{e.hits.length===0?g(`Sorry, there are no images matching your search query. Please, try again!`):d(e.hits)}).catch(()=>{g(`Something went wrong. Please try again later.`)}).finally(()=>{m()})});
//# sourceMappingURL=index.js.map