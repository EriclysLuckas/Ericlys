
function handleSubmit(event) {
    event.preventDefault();

    // formulário para o backend
    // ...
    const form = event.target.form;
    form.reset();

    // Fecha o modal após o envio
    closeModalAddClientes();

}
function openModalAddClientes(){
    const ModalAddClientes = document.querySelector('.ModalClientes')
    ModalAddClientes.style.display = 'flex'



    const closeButton = ModalAddClientes.querySelector('.fechaModalClientes');


    if (closeButton) {
        closeButton.addEventListener('click', closeModalAddClientes);
    } else {
        console.error('Botão de fechar não encontrado dentro do modal');
    }
    const submitButton = ModalAddClientes.querySelector('input[type="submit"]');
    if (submitButton) {
        submitButton.addEventListener('click', handleSubmit);
    } else {
        console.error('Botão de submit não encontrado dentro do modal');
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

