import{i as c,S as u}from"./assets/vendor-46aac873.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();document.getElementById("searchForm").addEventListener("submit",function(l){l.preventDefault(),showLoader(),document.getElementById("searchInput").value.trim(),document.addEventListener("DOMContentLoaded",function(){const n="41901564 - aceebb7c9fdd08ac794ac72d8",s="https://pixabay.com/api/";document.getElementById("searchForm").addEventListener("submit",function(e){e.preventDefault();const o=document.getElementById("searchInput").value.trim();if(o===""){c.error({title:"Error",message:"Please enter a search term"});return}const d={key:n,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};fetch(`${s}?${new URLSearchParams(d)}`).then(r=>r.json()).then(r=>{t(r.hits),a()}).catch(()=>{a(),c.error({title:"Error",message:"Failed to fetch images. Please try again later."})})});function a(){const e=document.querySelector(".loader-container");e&&e.remove()}function t(e){const o=document.getElementById("gallery");if(o.innerHTML="",e.length===0){c.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"});return}e.forEach(r=>{const i=document.createElement("div");i.className="card",i.innerHTML=`
                <a href="${r.largeImageURL}" data-lightbox="gallery" data-title="Likes: ${r.likes}, Views: ${r.views}, Comments: ${r.comments}, Downloads: ${r.downloads}">
                    <img src="${r.webformatURL}" alt="${r.tags}" data-src="${r.largeImageURL}" data-caption="Likes: ${r.likes}, Views: ${r.views}, Comments: ${r.comments}, Downloads: ${r.downloads}">
                </a>
            `,o.appendChild(i)}),new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}})});
//# sourceMappingURL=commonHelpers.js.map