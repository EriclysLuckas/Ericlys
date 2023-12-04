

function openModalAddClientes(){
    const ModalAddClientes = document.querySelector('.ModalClientes')
    ModalAddClientes.style.display = 'flex'
}

window.onload = function () {
    
    document.getElementById("contentDiv").addEventListener("click", function(event) {
        const Addclientes = event.target.closest('.BtnAdd');
        if (Addclientes) {
            
console.log("Adicionar Clientes")
            openModalAddClientes()
        }
    });
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

