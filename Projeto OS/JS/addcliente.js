window.onload = function () {
    document.getElementById("contentDiv").addEventListener("click", function(event) {
        const btnAdd = event.target.closest('.BtnAdd');
        if (btnAdd) {
          
            
        }
    });
    document.getElementById("contentDiv").addEventListener("click", function(event) {
        const btnAdd1 = event.target.closest('.BtnAddReservas');
        if (btnAdd1) {
            console.log("teste1");
        }
    });
};