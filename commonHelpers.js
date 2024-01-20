import{i as m,S as f}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function c(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=c(t);fetch(t.href,s)}})();document.addEventListener("DOMContentLoaded",function(){const o=document.getElementById("loaderContainer");a();const r=document.getElementById("searchForm"),c=document.getElementById("searchInput"),n=document.getElementById("gallery");document.querySelector(".btn");const t="41901564-aceebb7c9fdd08ac794ac72d8";r.addEventListener("submit",function(i){i.preventDefault(),s();const d=c.value.trim();if(d===""){m.error({title:"Error",message:"Please enter a search term"}),a();return}const e="https://pixabay.com/api/",l={key:t,q:d,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9};fetch(`${e}?${new URLSearchParams(l)}`).then(u=>u.json()).then(u=>{p(u.hits)}).catch(()=>{m.error({title:"Error",message:"Failed to fetch images. Please try again later."})}).finally(()=>{a()})});function s(){o&&(o.style.display="block")}function a(){o&&(o.style.display="none")}function p(i){if(n.innerHTML="",i.length===0){m.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}),a();return}i.forEach(e=>{const l=document.createElement("div");l.className="gallery-item",l.innerHTML=`
      <a href="${e.largeImageURL}" data-lightbox="gallery" data-title="Likes: ${e.likes}, Views: ${e.views}, Comments: ${e.comments}, Downloads: ${e.downloads}">
          <img src="${e.webformatURL}" alt="${e.tags}" data-src="${e.largeImageURL}" data-caption="Likes: ${e.likes}, Views: ${e.views}, Comments: ${e.comments}, Downloads: ${e.downloads}">
        </a>
        <div class="image-stats">
      <div class="stat-item">
        <p class="stat-label">Likes:</p>
        <p class="stat-value">${e.likes}</p>
      </div>
      <div class="stat-item">
        <p class="stat-label">Views:</p>
        <p class="stat-value">${e.views}</p>
      </div>
      <div class="stat-item">
        <p class="stat-label">Comments:</p>
        <p class="stat-value">${e.comments}</p>
      </div>
      <div class="stat-item">
        <p class="stat-label">Downloads:</p>
        <p class="stat-value">${e.downloads}</p>
      </div>
    </div>
      `,n.appendChild(l)}),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}});
//# sourceMappingURL=commonHelpers.js.map
