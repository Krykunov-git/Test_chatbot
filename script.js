const openButton = document.getElementById('openButton')
const closeButton = document.getElementById('closeButton')
const navMenu = document.getElementById('navMenu')

const togleNavMenu =()=>{
    navMenu.classList.toggle('nav-menu--open')

}
openButton.addEventListener('click', togleNavMenu )
closeButton.addEventListener('click', togleNavMenu )


  const scriptElement = document.createElement("script");
      scriptElement.src = `https://chatbot.gitcommitt.com/assets/widget/chat-widget.umd.js?v=${Math.floor(
        Math.random() * 10000000
      )}`;
      document.body.appendChild(scriptElement);
   