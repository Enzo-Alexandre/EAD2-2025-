window.onload = function() {
    var myModal = new bootstrap.Modal(document.getElementById('modalBoasVindas'));
    myModal.show();
};

document.getElementById('outrosMonstrosLink').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o link de ser seguido
    var modal = new bootstrap.Modal(document.getElementById('modalNovosMonstros'));
    modal.show(); // Mostra o modal
});