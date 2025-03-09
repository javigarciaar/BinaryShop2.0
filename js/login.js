document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var isLogged = false;

    let nameList = ['seller456', 'dancabello', 'root', 'comprador', 'vendedor', 'admin'];
    let passwordList = ['Intro123', 'J5*asdRD.s', 'dochouse', '1234', '1234', '1234'];
    let roles = [ 'comprador', 'vendedor', 'admin', 'comprador', 'vendedor', 'admin'];

    const r = document.getElementsByName('rol');
    let rolSeleccionado;
  
    for (const rol of r) {
      if (rol.checked) {
        rolSeleccionado = rol.value;
        break;
      }
    }

    for (let i = 0; i < nameList.length; i++) {
        if (username === nameList[i] && password === passwordList[i]) {
            isLogged = true;
            if (roles[i] === 'comprador' && roles[i] === rolSeleccionado) {
                window.location.href = 'main.html';
            } else if (roles[i] === 'vendedor' && roles[i] === rolSeleccionado) {
                window.location.href = 'vendedor.html';
            } else if (roles[i] === 'admin' && roles[i] === rolSeleccionado) {
                window.location.href = 'admin.html';
            }
        } 
    }
    if (!isLogged) {
        errorDisplay.style.display = 'block';
    }
});