var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
    
  });

 

  // Lineup linkleri

  document.querySelector("#ice").onclick=function()
  {
    window.location.href="https://tracker.gg/valorant/guides/clips?map=icebox"
  }
  document.querySelector("#haven").onclick=function()
  {
    window.location.href="https://tracker.gg/valorant/guides/clips?map=haven"
  }
  document.querySelector("#ascent").onclick=function()
  {
    window.location.href="https://tracker.gg/valorant/guides/clips?map=ascent"
  }
  document.querySelector("#fract").onclick=function()
  {
    window.location.href="https://tracker.gg/valorant/guides/clips?map=fracture"
  }
  document.querySelector("#breeze").onclick=function()
  {
    window.location.href="https://tracker.gg/valorant/guides/clips?map=breeze"
  }
  document.querySelector("#pearl").onclick=function()
  {
    window.location.href="https://tracker.gg/valorant/guides/clips?map=pearl"
  }
  document.querySelector("#split").onclick=function()
  {
    window.location.href="https://tracker.gg/valorant/guides/clips?agent=all&map=split"
  }
  document.querySelector("#urun").onclick=function()
  {
    window.location.href="https://www.shopier.com/ShowProductNew/storefront.php?shop=kupastorem&sid=clhtdG1mN3RlbnZXakZNZzBfLTFfIF8g"
  }
  // Footer ürün linkleri
  document.querySelector("#ınstagram").onclick=function()
  {
    window.location.href="https://www.instagram.com/kupastorem/"
  }
  document.querySelector("#shopier").onclick=function()
  {
    window.location.href="https://www.shopier.com/ShowProductNew/storefront.php?shop=kupastorem&sid=clhtdG1mN3RlbnZXakZNZzBfLTFfIF8g"
  }
  document.querySelector("#dolap").onclick=function()
  {
    window.location.href="https://dolap.com/profil/kupastorem"
  }
   // Yayıncı linkleri

    // çido linkler
   
   document.querySelector("#çidoyt").onclick=function()
   {
     window.location.href="https://www.youtube.com/c/cigdemt"
   }
   document.querySelector("#çidotw").onclick=function()
   {
     window.location.href="https://www.twitch.tv/cigdemt"
   }
   // kemal linkler
   
   document.querySelector("#kemalyt").onclick=function()
   {
     window.location.href="https://www.youtube.com/c/KendineM%C3%BCzisyenKM"
   }
   document.querySelector("#kemaltw").onclick=function()
   {
     window.location.href="https://www.twitch.tv/kendinemuzisyen"
   }

   // wtcn linkler
   
   document.querySelector("#ferityt").onclick=function()
   {
     window.location.href="https://www.youtube.com/c/wtcNFerit"
   }
   document.querySelector("#ferittw").onclick=function()
   {
     window.location.href="https://www.twitch.tv/wtcn"
   }

   
   // 2xcıv linkler
   
   document.querySelector("#cıvyt").onclick=function()
   {
     window.location.href="https://www.youtube.com/c/2xCIV"
   }
   document.querySelector("#cıvtw").onclick=function()
   {
     window.location.href="https://www.twitch.tv/2xciv"
   }
   
   // yükel linkler
   
   document.querySelector("#yükselyt").onclick=function()
   {
     window.location.href="https://www.youtube.com/c/YukoStrikesBack"
   }
   document.querySelector("#yükselig").onclick=function()
   {
     window.location.href="https://www.instagram.com/yukostrikesback/"
   }
   
   // da1mon linkler
   
   document.querySelector("#daiyt").onclick=function()
   {
     window.location.href="https://www.youtube.com/c/da1moN"
   }
   document.querySelector("#daitw").onclick=function()
   {
     window.location.href="https://www.twitch.tv/da1mon"
   }


  
  
 
  var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

  
  