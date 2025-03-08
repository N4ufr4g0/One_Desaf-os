// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//aray
let listaDeAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    //seleccionamos el elemento con ID amigo y se asigna en inputAmigo
    const inputAmigo = document.getElementById('amigo');
    //se eliminan espacios y se almacena en una nueva variable nombreAmigo
    const nombreAmigo = inputAmigo.value.trim();
    // se comprueba que el campo no este vacio
    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }
    //agregamos un nuevo nombre con push en el array listaDeAmigos
    listaDeAmigos.push(nombreAmigo);
    //utilizamos o llamamos a la funcion para mostrar el nombre en la lista
    mostrarLista();
    //limpiamos el campo
    inputAmigo.value = '';
}

// Función para mostrar la lista de amigos en la página
function mostrarLista() {
    // Selecciona el elemento de la lista en el HTML.
    const listaAmigos = document.getElementById('listaAmigos');
    // Limpiar la lista existente
    listaAmigos.innerHTML = ''; 

    for (let i = 0; i < listaDeAmigos.length; i++) {  
        // Obtiene el nombre del amigo actual
        const amigo = listaDeAmigos[i];  
        // Crea un nuevo elemento de lista (<li>)
        const listItem = document.createElement('li');  
        // Asigna el nombre del amigo al elemento <li>
        listItem.textContent = amigo;  
        // Agregar el elemento a la lista
        listaAmigos.appendChild(listItem); 
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSecreto = listaDeAmigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li role="listitem">El amigo secreto es: ${amigoSecreto}</li>`;
}
