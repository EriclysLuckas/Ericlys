function includeHTML() {
    var elements = document.querySelectorAll('[include]');
    
    elements.forEach(function(element) {
        var file = element.getAttribute('include');
        if (file) {
            fetch(file)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Page not found.');
                    }
                    return response.text();
                })
                .then(html => {
                    element.innerHTML = html;
                    element.removeAttribute('include');
                    includeHTML();
                })
                .catch(error => {
                    console.error(error);
                    element.innerHTML = 'Page not found.';
                });
        }
    });
}

function setupMenuOption(menuItemId, filePath) {
    var menuItem = document.getElementById(menuItemId);

    if (menuItem) {
        menuItem.addEventListener("click", function (event) {
            event.preventDefault();
            setActiveOption(menuItemId);
            loadHTML(filePath, document.getElementById("contentDiv"));
        
        
        });
    } else {
        console.error("Element with ID '" + menuItemId + "' not found.");
    }
}

function loadHTML(file, elmnt) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error('Page not found.');
            }
            return response.text();
        })
        .then(html => {
            elmnt.innerHTML = html;
        })
        .catch(error => {
            console.error(error);
            elmnt.innerHTML = 'Page not found.';
        });
}

function setActiveOption(optionId) {
    var options = document.getElementsByClassName("Lista");
    Array.from(options).forEach(function (option) {
        option.classList.remove("active");
    });

    var selectedOption = document.getElementById(optionId);
    if (selectedOption) {
        selectedOption.classList.add("active");
    } else {
        console.error("Element with ID '" + optionId + "' not found.");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    includeHTML();
    setupMenuOption("Home", "Cadastros/home.html");
    setupMenuOption("Cadastros", "Projeto OS/html/Cadastros/CadastroClientes.html");
    setupMenuOption("Produtos", "Projeto OS/html/Cadastros/CadastroIncluir/Reservas.html");
    setupMenuOption("Administrador", "Projeto OS/html/Cadastros/Administrador.html");
    setupMenuOption("Ajuda", "Projeto OS/html/Cadastros/Ajuda.html");
    setupMenuOption("Sair", "Sair.html");
});

// Define a primeira opção como ativa
setActiveOption("Home");
//==========================================================================================
var homeFile = "Cadastros/Home.html";
var contentDiv = document.getElementById("contentDiv");
loadHTML(homeFile, contentDiv);



