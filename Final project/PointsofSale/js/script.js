$(document).ready(function(){
    $('.slider').slick();
});
$('.slider').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  });


  const popupLinks = document.querySelectorAll('.popup_link');
              const body = document.querySelectorAll('.body');
              const lockPadding = document.querySelectorAll('.lock-padding');

              let unlock = true;

              const timeout="800";

              if (popupLinks.length > 0) {
                  for (let index = 0; index < popupLinks.length; index++) {
                    const popupLink = popupLinks[index];
                    popupLink.addEventListener("click", function (e){
                        const popupName = popupLink.getAttribute('href').replace('#', '');
                        const curentPopup = document.getElementById(popupName);
                        popupOpen(curentPopup);
                        e.preventDefault();
                    });S
                  }
              }
              function popupOpen(curentPopup) {
                if (curentPopup && unlock) {
                    const popupActive = document.querySelector('.popup.open');
                    if (popupActive) {
                        popupClose(popupActive, false);
                        } else{
                            bodyLock();
                        }
                        currentPopup.classList.add('open');
                        currentPopup.addEventListener("click", function (e) {
                            if (!e.target.closest('.popup_content')) {
                                popupClose(e.target.closest('.popup'));
                            }
                        });
                        }
                };
              function popupClose(popupActive, doUnlock = true){
                  if(unlock){
                      popupActive.classList.remove('open');
                      if (doUnlock) {
                          bodyUnlock();
                      }
                  } 
              }