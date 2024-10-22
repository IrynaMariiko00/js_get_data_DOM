var t=document.querySelectorAll(".population"),e=0;t.forEach(function(t){e+=parseInt(t.textContent.replace(/,/g,""),10)});var o=e/t.length,n=document.querySelector(".total-population"),r=document.querySelector(".average-population");n.textContent=e.toLocaleString("en-Us"),r.textContent=o.toLocaleString("en-Us");
//# sourceMappingURL=index.f17d812c.js.map
