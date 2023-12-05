
function handleSubmit(event) {
    // Evita o comportamento padrão de envio do formulário (atualização da página)
    event.preventDefault();

//lógica do back
    // ...
    const form = event.target;
    const inputs = form.querySelectorAll('input');
    
    inputs.forEach(input => {
        if (input.type !== 'submit') {
            input.value = '';
        }
    });
    // Fecha o modal após o envio
    closeModalAddClientes();
}

//MODAL DE RESERVAS 
function openModalAddReservas(){
    const ModalAddReservas = document.querySelector('.ModalCadastroReservas')
    ModalAddReservas.style.display = 'flex'



    const closeButton = ModalAddReservas.querySelector('.fechaModalReservas');


    if (closeButton) {
        closeButton.addEventListener('click', closeModalAddReservas);
    } else {
        console.error('Botão de fechar não encontrado dentro do modal');
    }
    const submitButton = ModalAddReservas.querySelector('input[type="submit"]');
    if (submitButton) {
        submitButton.addEventListener('click', handleSubmit);
    } else {
        console.error('Botão de submit não encontrado dentro do modal');
    }

}


function closeModalAddReservas() {
    const ModalAddReservas = document.querySelector('.ModalCadastroReservas');
    if (ModalAddReservas) {
        
        ModalAddReservas.style.display = 'none';
    } else {
        console.error('Elemento .ModalClientes não encontrado');
    }
}




//MODAL DE CLIENTES 
function openModalAddClientes(){
    const ModalAddClientes = document.querySelector('.ModalClientes');
    ModalAddClientes.style.display = 'flex';

    // Adiciona um evento de clique ao botão de fechar dentro do modal
    const closeButton = ModalAddClientes.querySelector('.fechaModalClientes');
    if (closeButton) {
        closeButton.addEventListener('click', closeModalAddClientes);
    } else {
        console.error('Botão de fechar não encontrado dentro do modal');
    }

    // Adiciona um evento de envio ao formulário dentro do modal
    const form = ModalAddClientes.querySelector('form');
    if (form) {
        form.addEventListener('submit', handleSubmit);
    } else {
        console.error('Formulário não encontrado dentro do modal');
    }

}


function closeModalAddClientes() {
    const ModalAddClientes = document.querySelector('.ModalClientes');
    if (ModalAddClientes) {
        
        ModalAddClientes.style.display = 'none';
    } else {
        console.error('Elemento .ModalClientes não encontrado');
    }
}




window.onload = function () {
     /* Clientes modal */   

    document.getElementById("contentDiv").addEventListener("click", function(event) {
        const Addclientes = event.target.closest('.BtnAdd');
        
        if (Addclientes) {
            
console.log("Adicionar Clientes")
            openModalAddClientes()
        }
    });









 /* Reservas modal */   
    document.getElementById("contentDiv").addEventListener("click", function(event) {
        const AddReservas = event.target.closest('.BtnAddReservas');
        if (AddReservas) {
            console.log("MODAL ADD RESERVAS");
            openModalAddReservas()
        }
    });
    
document.getElementById("contentDiv").addEventListener("click", function(event) {
    const Editarcadastro = event.target.closest('.AlterarBtnClientes');
    if (Editarcadastro) {
        console.log("Detalhes");
    }
});
document.getElementById("contentDiv").addEventListener("click", function(event) {
    const ExcluirCadastro = event.target.closest('.AlterarBtnClientes');
    if (ExcluirCadastro) {
        console.log("Excluir");
    }
});

};

