const menuBtn=document.querySelector(".burger-menu"),headerNav=document.querySelector(".header__nav"),logo=document.querySelector(".logo"),body=document.querySelector("body"),menuHalo=document.querySelector(".halo");function toggleMenu(){headerNav.classList.contains("visible")?(headerNav.classList.remove("visible"),menuBtn.classList.remove("active"),body.classList.remove("overflowHidden"),menuHalo.classList.remove("active")):(headerNav.classList.add("visible"),menuBtn.classList.add("active"),body.classList.add("overflowHidden"),menuHalo.classList.add("active"))}menuBtn&&menuBtn.addEventListener("click",toggleMenu);let mobileNavMaxMatch=window.matchMedia("(max-width: 1200px)"),mobileNavMinMatch=window.matchMedia("(min-width: 1201px)");function mobileMenuMaxWidth(){mobileNavMaxMatch.matches&&mobileNavMaxMatch?logo.src="../assets/images/logo-white.png":(logo.src="../assets/images/logo@2x.png",headerNav.classList.remove("visible"),menuBtn.classList.remove("active"))}function mobileMenuMinWidth(){mobileNavMinMatch.matches&&mobileNavMinMatch&&(headerNav.classList.remove("visible"),menuBtn.classList.remove("active"),menuHalo.classList.remove("active"))}mobileNavMaxMatch.addEventListener("change",mobileMenuMaxWidth),mobileNavMinMatch.addEventListener("change",mobileMenuMinWidth),mobileMenuMaxWidth(mobileNavMaxMatch),mobileMenuMinWidth(mobileNavMinMatch);const accordionItems=document.querySelectorAll(".accordion > div");function toggleAccordion(e){let a=e.currentTarget;a.classList.contains("active")?a.classList.remove("active"):(accordionItems.forEach(e=>{e.classList.remove("active")}),a.classList.add("active"))}accordionItems.forEach(e=>e.addEventListener("click",toggleAccordion));const openModalBtns=document.querySelectorAll(".js-open-modal"),closeModalBtns=document.querySelectorAll(".js-close-modal"),modals=document.querySelectorAll(".modal-bg");openModalBtns&&openModalBtns.forEach(e=>{e.addEventListener("click",e=>{const a=document.querySelector(e.target.dataset.modalName);a.classList.add("active")})}),closeModalBtns&&closeModalBtns.forEach(e=>{e.addEventListener("click",()=>{modals.forEach(e=>{e.classList.contains("active")&&e.classList.remove("active")})})});