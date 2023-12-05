
// Declare um array para armazenar os dados do formulário
const dadosDoFormularioArray = [];

function handleSubmit(event) {
    event.preventDefault();

    // Crie um objeto para armazenar os dados do formulário
    const dadosDoFormulario = {};

    // Obtenha todos os campos do formulário
    const form = event.target;
    const inputs = form.querySelectorAll('input');

    // Preencha o objeto com os valores dos campos do formulário
    inputs.forEach(input => {
        if (input.type !== 'submit') {
            dadosDoFormulario[input.name] = input.value;
        }
    });

    // Adicione o objeto ao array
    dadosDoFormularioArray.push(dadosDoFormulario);

    // Limpe os campos do formulário (opcional)
    inputs.forEach(input => {
        if (input.type !== 'submit') {
            input.value = '';
        }
    });

    // Faça algo com o array de dados do formulário (por exemplo, exiba no console)
    console.log('Dados do Formulário Array:', dadosDoFormularioArray);

    // Fecha o modal após o envio
    closeModalAddClientes();
}

// function handleSubmit(event) {
//     event.preventDefault();

// //lógica do back

// function submitForm() {
//     var formData = new FormData(document.getElementById('formteste'));
//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', 'enviarusuario.php', true);
//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             // Ação após o sucesso (opcional)
//             alert('Formulário enviado com sucesso!');
//             closeModalAddClientes();
//         } else {
//             // Ação em caso de falha (opcional)
//             alert('Erro ao enviar o formulário. Tente novamente mais tarde.');
//         }
//     };
//     xhr.send(formData);
// }
//     // ...
//     const form = event.target;
//     const inputs = form.querySelectorAll('input');
    
//     inputs.forEach(input => {
//         if (input.type !== 'submit') {
//             input.value = '';
//         }
//     });


        
//     submitForm()
//     // Fecha o modal após o envio
//     closeModalAddClientes();
// }

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

