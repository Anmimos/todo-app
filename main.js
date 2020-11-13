window.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".hover-wave"),t=[];e.forEach((e,a)=>{t[a]||(t[a]=e.querySelector("span")),e.addEventListener("mouseover",o=>{t[a].style.left=o.pageX-e.offsetLeft+"px",t[a].style.top=o.pageY-e.offsetTop+"px"}),e.addEventListener("mouseout",o=>{t[a].style.left=o.pageX-e.offsetLeft+"px",t[a].style.top=o.pageY-e.offsetTop+"px"})});const a=document.querySelector("form"),o=document.querySelector('input[name="taskName"]');o.addEventListener("input",e=>{o.value=o.value.replace(/\  /g,"")});let s=0;a.addEventListener("submit",e=>{e.preventDefault();const t=a.querySelector("input").value;if(""!=t&&" "!=t){const e=(()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))();if(localStorage.getItem("_tasks")){const t=localStorage.getItem("_tasks");localStorage.setItem("_tasks",`${t}${e} `)}else localStorage.setItem("_tasks",`${e} `);localStorage.setItem(`task-${e}`,JSON.stringify({taskText:t,taskId:e,completed:!1})),a.reset();const o=document.createElement("div");o.classList.add("task-card","animate__animated","animate__fadeInDown"),o.innerHTML=`\n                <div class="check">\n                    <label class="labCheck" for="completed${s}">\n                        <span></span>\n                        <text>\n                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                <g clip-path="url(#clip0)">\n                                <path d="M29.6631 3.95914C29.2027 3.48242 28.4431 3.46921 27.9664 3.92961C27.9564 3.93925 27.9465 3.94909 27.9368 3.95914L8.38525 23.5108L2.03365 17.1592C1.55693 16.6988 0.797273 16.712 0.336867 17.1887C-0.112289 17.6538 -0.112289 18.391 0.336867 18.856L7.53686 26.056C8.00549 26.5245 8.76508 26.5245 9.23364 26.056L29.6336 5.65599C30.1103 5.19552 30.1235 4.43586 29.6631 3.95914Z" fill="#000"/>\n                                </g>\n                                <defs>\n                                <clipPath id="clip0">\n                                <rect width="30" height="30" fill="white"/>\n                                </clipPath>\n                                </defs>\n                            </svg>\n                        </text>\n                    </label>\n                    <input type="checkbox" data-id=${e} id="completed${s}" name="completed${s}">\n                </div>\n                <div class="task-text">\n                    <p>${t}</p>\n                </div>\n                <a href=${e} class="hover-wave">\n                    <span></span> \n                    <text>\n                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <path d="M5.38599 10.7227V30H24.6141V10.7227H5.38599ZM11.6602 25.5469H9.90239V14.7656H11.6602V25.5469ZM15.879 25.5469H14.1211V14.7656H15.879V25.5469ZM20.0977 25.5469H18.3399V14.7656H20.0977V25.5469Z" fill="black"/>\n                            <path d="M19.2381 3.39844V0H10.7619V3.39844H4.20117V8.96484H25.7988V3.39844H19.2381ZM17.4803 3.39844H12.5197V1.75781H17.4803V3.39844Z" fill="black"/>\n                            </svg>                                                             \n                    </text>\n                </a>\n        `,document.querySelector("div.tasks").append(o);const r=document.querySelector(`input[data-id="${e}"]`);r.addEventListener("change",e=>{const t=e.target.getAttribute("data-id"),a=JSON.parse(localStorage.getItem(`task-${t}`));r.checked?(localStorage.setItem(`task-${t}`,JSON.stringify({taskText:a.taskText,taskId:t,completed:!0})),JSON.parse(localStorage.getItem(`task-${t}`)),e.target.previousElementSibling.querySelector("text").classList.add("checkVisible"),e.target.parentNode.parentNode.querySelector(".task-text").classList.add("task-compl")):(localStorage.setItem(`task-${t}`,JSON.stringify({taskText:a.taskText,taskId:t,completed:!1})),e.target.previousElementSibling.querySelector("text").classList.remove("checkVisible"),e.target.parentNode.parentNode.querySelector(".task-text").classList.remove("task-compl"))}),document.querySelector(`a[href="${e}"]`).addEventListener("click",e=>{if(e.preventDefault(),e.target.matches("a")){const t=e.target.getAttribute("href");localStorage.removeItem(`task-${t}`);const a=localStorage.getItem("_tasks");localStorage.setItem("_tasks",`${a.replace(`${t} `,"")}`),e.target.parentNode.classList.remove("animate__fadeInDown"),e.target.parentNode.classList.add("animate__fadeOutDown"),setTimeout(()=>{e.target.parentNode.remove()},1e3)}else if(e.target.matches("span")){const t=e.target.parentNode.getAttribute("href"),a=localStorage.getItem("_tasks");localStorage.setItem("_tasks",`${a.replace(`${t} `,"")}`),localStorage.removeItem(`task-${t}`),e.target.parentNode.parentNode.classList.remove("animate__fadeInDown"),e.target.parentNode.parentNode.classList.add("animate__fadeOutDown"),setTimeout(()=>{e.target.parentNode.parentNode.remove()},1e3)}else if(e.target.matches("text")){const t=e.target.parentNode.getAttribute("href"),a=localStorage.getItem("_tasks");localStorage.setItem("_tasks",`${a.replace(`${t} `,"")}`),localStorage.removeItem(`task-${t}`),e.target.parentNode.parentNode.classList.remove("animate__fadeInDown"),e.target.parentNode.parentNode.classList.add("animate__fadeOutDown"),setTimeout(()=>{e.target.parentNode.parentNode.remove()},1e3)}else if(e.target.matches("path")){const t=e.target.parentNode.parentNode.parentNode.getAttribute("href"),a=localStorage.getItem("_tasks");localStorage.setItem("_tasks",`${a.replace(`${t} `,"")}`),localStorage.removeItem(`task-${t}`),e.target.parentNode.parentNode.parentNode.parentNode.classList.remove("animate__fadeInDown"),e.target.parentNode.parentNode.parentNode.parentNode.classList.add("animate__fadeOutDown"),setTimeout(()=>{e.target.parentNode.parentNode.parentNode.parentNode.remove()},1e3)}else if(e.target.matches("svg")){const t=e.target.parentNode.parentNode.getAttribute("href"),a=localStorage.getItem("_tasks");localStorage.setItem("_tasks",`${a.replace(`${t} `,"")}`),localStorage.removeItem(`task-${t}`),e.target.parentNode.parentNode.parentNode.classList.remove("animate__fadeInDown"),e.target.parentNode.parentNode.parentNode.classList.add("animate__fadeOutDown"),setTimeout(()=>{e.target.parentNode.parentNode.parentNode.remove()},1e3)}});const n=o.querySelectorAll(".hover-wave"),l=[];n.forEach((e,t)=>{l[t]||(l[t]=e.querySelector("span")),e.addEventListener("mouseover",a=>{l[t].style.left=a.pageX-e.offsetLeft+"px",l[t].style.top=a.pageY-e.offsetTop+"px"}),e.addEventListener("mouseout",a=>{l[t].style.left=a.pageX-e.offsetLeft+"px",l[t].style.top=a.pageY-e.offsetTop+"px"})}),s++}}),function(){const e=localStorage.getItem("_tasks").split(" ");for(let t=0;t<e.length-1;t++){const a=JSON.parse(localStorage.getItem(`task-${e[t]}`)),o=document.createElement("div");o.classList.add("task-card","animate__animated","animate__fadeInDown");const r=a.taskId,n=a.completed;let l="task-text";n&&(l+=" task-compl");let d="";d=n?"checkVisible":"",o.innerHTML=`\n                <div class="check">\n                    <label class="labCheck" for="completed${s}">\n                        <span></span>\n                        <text class="${d}">\n                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                <g clip-path="url(#clip0)">\n                                <path d="M29.6631 3.95914C29.2027 3.48242 28.4431 3.46921 27.9664 3.92961C27.9564 3.93925 27.9465 3.94909 27.9368 3.95914L8.38525 23.5108L2.03365 17.1592C1.55693 16.6988 0.797273 16.712 0.336867 17.1887C-0.112289 17.6538 -0.112289 18.391 0.336867 18.856L7.53686 26.056C8.00549 26.5245 8.76508 26.5245 9.23364 26.056L29.6336 5.65599C30.1103 5.19552 30.1235 4.43586 29.6631 3.95914Z" fill="#000"/>\n                                </g>\n                                <defs>\n                                <clipPath id="clip0">\n                                <rect width="30" height="30" fill="white"/>\n                                </clipPath>\n                                </defs>\n                            </svg>\n                        </text>\n                    </label>\n                    <input type="checkbox" data-id=${r} id="completed${s}" name="completed${s}">\n                </div>\n                <div class="${l}">\n                    <p>${a.taskText}</p>\n                </div>\n                <a href=${r} class="hover-wave">\n                    <span></span> \n                    <text>\n                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <path d="M5.38599 10.7227V30H24.6141V10.7227H5.38599ZM11.6602 25.5469H9.90239V14.7656H11.6602V25.5469ZM15.879 25.5469H14.1211V14.7656H15.879V25.5469ZM20.0977 25.5469H18.3399V14.7656H20.0977V25.5469Z" fill="black"/>\n                            <path d="M19.2381 3.39844V0H10.7619V3.39844H4.20117V8.96484H25.7988V3.39844H19.2381ZM17.4803 3.39844H12.5197V1.75781H17.4803V3.39844Z" fill="black"/>\n                            </svg>                                                             \n                    </text>\n                </a>\n        `,document.querySelector("div.tasks").append(o);const c=o.querySelectorAll(".hover-wave"),p=[];c.forEach((e,t)=>{p[t]||(p[t]=e.querySelector("span")),e.addEventListener("mouseover",a=>{p[t].style.left=a.pageX-e.offsetLeft+"px",p[t].style.top=a.pageY-e.offsetTop+"px"}),e.addEventListener("mouseout",a=>{p[t].style.left=a.pageX-e.offsetLeft+"px",p[t].style.top=a.pageY-e.offsetTop+"px"})});const i=document.querySelector(`input[id="completed${s}"]`);i.addEventListener("change",e=>{e.preventDefault();const t=e.target.getAttribute("data-id");i.checked?(localStorage.setItem(`task-${t}`,JSON.stringify({taskText:a.taskText,taskId:t,completed:!0})),JSON.parse(localStorage.getItem(`task-${t}`)),e.target.previousElementSibling.querySelector("text").classList.add("checkVisible"),e.target.parentNode.parentNode.querySelector(".task-text").classList.add("task-compl")):(localStorage.setItem(`task-${t}`,JSON.stringify({taskText:a.taskText,taskId:t,completed:!1})),e.target.previousElementSibling.querySelector("text").classList.remove("checkVisible"),e.target.parentNode.parentNode.querySelector(".task-text").classList.remove("task-compl"))}),document.querySelector(`a[href="${r}"]`).addEventListener("click",e=>{if(e.preventDefault(),e.target.matches("a")){const t=e.target.getAttribute("href");localStorage.removeItem(`task-${t}`);const a=localStorage.getItem("_tasks");localStorage.setItem("_tasks",`${a.replace(`${t} `,"")}`),e.target.parentNode.classList.remove("animate__fadeInDown"),e.target.parentNode.classList.add("animate__fadeOutDown"),setTimeout(()=>{e.target.parentNode.remove()},1e3)}else if(e.target.matches("span")){const t=e.target.parentNode.getAttribute("href"),a=localStorage.getItem("_tasks");localStorage.setItem("_tasks",`${a.replace(`${t} `,"")}`),localStorage.removeItem(`task-${t}`),e.target.parentNode.parentNode.classList.remove("animate__fadeInDown"),e.target.parentNode.parentNode.classList.add("animate__fadeOutDown"),setTimeout(()=>{e.target.parentNode.parentNode.remove()},1e3)}else if(e.target.matches("text")){const t=e.target.parentNode.getAttribute("href"),a=localStorage.getItem("_tasks");localStorage.setItem("_tasks",`${a.replace(`${t} `,"")}`),localStorage.removeItem(`task-${t}`),e.target.parentNode.parentNode.classList.remove("animate__fadeInDown"),e.target.parentNode.parentNode.classList.add("animate__fadeOutDown"),setTimeout(()=>{e.target.parentNode.parentNode.remove()},1e3)}else if(e.target.matches("path")){const t=e.target.parentNode.parentNode.parentNode.getAttribute("href"),a=localStorage.getItem("_tasks");localStorage.setItem("_tasks",`${a.replace(`${t} `,"")}`),localStorage.removeItem(`task-${t}`),e.target.parentNode.parentNode.parentNode.parentNode.classList.remove("animate__fadeInDown"),e.target.parentNode.parentNode.parentNode.parentNode.classList.add("animate__fadeOutDown"),setTimeout(()=>{e.target.parentNode.parentNode.parentNode.parentNode.remove()},1e3)}else if(e.target.matches("svg")){const t=e.target.parentNode.parentNode.getAttribute("href"),a=localStorage.getItem("_tasks");localStorage.setItem("_tasks",`${a.replace(`${t} `,"")}`),localStorage.removeItem(`task-${t}`),e.target.parentNode.parentNode.parentNode.classList.remove("animate__fadeInDown"),e.target.parentNode.parentNode.parentNode.classList.add("animate__fadeOutDown"),setTimeout(()=>{e.target.parentNode.parentNode.parentNode.remove()},1e3)}}),s++}}()});