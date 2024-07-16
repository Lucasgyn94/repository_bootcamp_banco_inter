function changeMode()
{
    changeClasses();
    changeText();
}
// Criando changeClasses
function changeClasses() 
{
	button.classList.toggle(darkModeClass);
	h1.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);
}


function changeText()
{
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if(body.classList.contains(darkModeClass))
    {
        // adiciona html dentro do botão
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }
    else
    {
        button.innerHTML = darkMode;
        h1.innerHTML = lightMode + " ON";
    }
}

const darkModeClass = 'dark-mode';
// selecionando o butão através do id
const button = document.getElementById('mode-selector')
// selecionando o h1
const h1 = document.getElementById('page-title');
// selecionando o body
const body = document.getElementsByTagName('body')[0];
// selecionando footer
const footer = document.getElementsByTagName('footer')[0];

// // adicionando Event Listener do butão
button.addEventListener('click', changeMode);
