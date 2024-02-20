async function api() {
    const apiResponse = await fetch("https://chat.arpanetos.lol/messages");
    const datos = await apiResponse.json();

    const resultados = datos.map(info => ({
        id: info.id,
        user: info.username,
        mensaje: info.message,
        hora: info.created_at,
    }));

    return resultados;
}


const resultados = api();

function header (){
    let ancho_p = window.innerWidth;
    let header = document.createElement("div");
    header.style.paddingBottom="3rem";
    header.style.margin = "0";
    header.style.width="100%";
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.borderBottom="1px solid gray";
    header.style.backgroundColor = "white";
    header.classList.add("header");

    let contenedor = document.createElement("div");
    contenedor.style.width="min(90%, 120rem)";
    contenedor.style.margin = "0 auto";
    if(ancho_p <= 768){
        contenedor.style.display = "column";
        contenedor.style.alignItems = "center";
    }
    contenedor.classList.add("contenedor");
    header.appendChild(contenedor);

    let barra = document.createElement("div");
    barra.style.paddingTop="4rem";
    barra.style.display = "flex";
    barra.style.justifyContent = "space-between";
    barra.style.alignItems = "center";
    barra.classList.add("barra");
    contenedor.appendChild(barra);
    
    let h1 = document.createElement("h1");
    h1.style.paddingBottom="2rem";
    h1.style.fontWeight= "normal";
    h1.style.margin = "0";
    h1.style.textAlign ="center";
    h1.classList.add("nombre", "no-margen", "centrar-texto");
    h1.innerHTML = "Chat Web";
    barra.appendChild(h1);

    let config = document.createElement("img");
    config.src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F110827%2Fmoon_icon&psig=AOvVaw3fPnhXNHz2S5hdxqzsl-a5&ust=1708557239366000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKC7u-yFu4QDFQAAAAAdAAAAABAE";
    config.style.width="3rem";
    config.style.marginTop="0"
    config.style.marginBottom="2rem";
    config.style.display = "block";
    config.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });
    config.addEventListener('mouseleave', function() {
        this.style.cursor = 'auto';
    });
    config.classList.add("dark-mode");
    barra.appendChild(config);

    let body = document.body;
    body.insertBefore(header, body.firstChild);
}

function bodyA (mensajeA, usuario, hora){
    const main = document.createElement("section");
    main.style.width="min(90%, 120rem)";
    main.style.margin = "0 auto";
    main.style.width="auto";
    main.style.padding="20px";
    main.classList.add("contenedor", "seccion");

    let c = document.createElement("div");
    c.style.cursor='pointer';
    c.style.backgroundColor="#1E90FF";
    c.style.borderRadius="10px";
    c.style.padding="5px";
    c.style.display="inline-block";
    c.classList.add("mensajeA");
    main.appendChild(c);

    let p1 = document.createElement("p");
    p1.classList.add("contenido-mensaje");
    p1.style.padding= "1rem";
    p1.style.top = "0"; 
    p1.style.left = "0";
    p1.style.fontWeight = "bold";
    p1.innerHTML = usuario;
    c.appendChild(p1);

    let p = document.createElement("p");
    p.classList.add("contenido-mensaje");
    p.style.padding= "1rem";
    p.innerHTML = mensajeA;
    c.appendChild(p);

    let p2 = document.createElement("p");
    p2.classList.add("contenido-mensaje");
    p2.style.padding= "1rem";
    p2.style.top = "0"; 
    p2.style.left = "0";
    p2.style.fontWeight = "bold";
    p2.innerHTML = hora;
    c.appendChild(p2);

    
    const body = document.body;
    body.firstElementChild.insertAdjacentElement('afterend', main);
    setTimeout(() => {
        if (p.clientWidth > 600) {
            p.style.cursor = "pointer";
            p.style.backgroundColor = "#1E90FF";
            p.style.borderRadius = "10px";
            p.style.padding = "5px";
            p.style.maxWidth = "400px";
            p.style.overflowWrap = "break-word"
        }
    }, 0);

    
}

function bodyP (mensajeP, tiempo){
    const main2 = document.createElement("section");
    main2.style.width="min(90%, 120rem)";
    main2.style.margin = "0 auto";
    main2.style.display = "flex";
    main2.style.justifyContent = "flex-end";
    main2.style.width = "auto";
    main2.style.padding = "20px";
    main2.classList.add("contenedor", "seccion2");

    let c2 = document.createElement("div");
    c2.style.cursor='pointer';
    c2.style.backgroundColor="#1E90FF";
    c2.style.borderRadius="10px";
    c2.style.padding="5px";
    c2.style.display="inline-block";
    c2.classList.add("mensaje");
    main2.appendChild(c2);  

    let p3 = document.createElement("p");
    p3.classList.add("contenido-mensaje");
    p3.style.padding= "1rem";
    p3.style.top = "0"; 
    p3.style.left = "0";
    p3.style.fontWeight = "bold";
    p3.innerHTML = "yo";
    c2.appendChild(p3);

    let p2 = document.createElement("p");
    p2.classList.add("contenido-mensaje");
    p2.style.padding= "1rem";
    p2.innerHTML = mensajeP;
    c2.appendChild(p2);

    let p4 = document.createElement("p");
    p4.classList.add("contenido-mensaje");
    p4.style.padding= "1rem";
    p4.style.top = "0"; 
    p4.style.left = "0";
    p4.style.fontWeight = "bold";
    p4.innerHTML = tiempo;
    c2.appendChild(p4);
    
    const body = document.body;
    body.firstElementChild.insertAdjacentElement('afterend', main2);

    setTimeout(() => {
        if (p2.clientWidth > 600) {
            p2.style.cursor = "pointer";
            p2.style.backgroundColor = "#1E90FF";
            p2.style.borderRadius = "10px";
            p2.style.padding = "5px";
            p2.style.maxWidth = "400px";
            p2.style.overflowWrap = "break-word"
        }
    }, 0);

}

function mensaje (){
    const barra_mensaje = document.createElement("section");
    barra_mensaje.style.position = 'fixed' ;
    barra_mensaje.style.bottom = "0";
    barra_mensaje.style.left = "0";
    barra_mensaje.style.width = "100%";
    barra_mensaje.style.height = "50px";
    barra_mensaje.style.padding = "10px";
    barra_mensaje.style.borderTop = "1px solid #ccc";
    barra_mensaje.style.backgroundColor = "white";
    barra_mensaje.classList.add("barra-mensaje");

    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.borderRadius = "20px";
    div.style.overflow = "hidden";
    div.style.width = "95%";
    div.style.justifyContent = "center";
    div.style.alignContent = "center";
    div.classList.add("input-mensaje");
    barra_mensaje.appendChild(div);

    const inputMensaje = document.createElement("input");
    inputMensaje.style.flex = "1";
    inputMensaje.style.border="2px solid #ccc";
    inputMensaje.style.padding = "10px";
    inputMensaje.style.borderRadius= "20px";
    inputMensaje.style.marginRight = "2rem"
    inputMensaje.style.outline = "none";
    inputMensaje.classList.add("mensaje-input");
    inputMensaje.placeholder = "Escribe tu mensaje aquí...";
    div.appendChild(inputMensaje);

    let enviar = document.createElement("img");
    enviar.src="http://arpanetos.lol/lab5/22318/send_120237.svg";
    enviar.classList.add("enviar");
    enviar.style.backgroundColor = '#1E90FF';
    enviar.style.borderRadius='50%';
    enviar.style.width = "4rem";
    enviar.style.margin = "0 auto";
    enviar.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });
    enviar.addEventListener('mouseleave', function() {
        this.style.cursor = 'auto';
    });
    enviar.classList.add("enviar");
    div.appendChild(enviar);
    enviar.addEventListener('click', function () {
        enviarMensaje(inputMensaje);
    });

    
    inputMensaje.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); 
            enviarMensaje(inputMensaje);
        }
    });

    const body = document.body;
    body.appendChild(barra_mensaje);
}

function enviarMensaje(inputMensaje) {
    let mensaje = inputMensaje.value;
    let hora = new Date();
    let horaA = hora.toLocaleTimeString();

    if (mensaje.length > 140) {
        alert("El mensaje es muy grande.");
        return; 
    }

    let mensajeJSON = {
        username: "per22318",
        message: mensaje,
        created_at: horaA
    };

    fetch('https://chat.arpanetos.lol/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mensajeJSON)
    })
        .then(response => {
            if (response.ok) {
                console.log('Mensaje enviado con éxito');
            } else {
                console.error('Error al enviar el mensaje');
            }
        })
        .catch(error => {
            console.error('Error de red:', error);
        });

    inputMensaje.value = '';
}
   


function globales(){
    var htmlElement = document.documentElement;
    htmlElement.style.fontSize = "62.5%";
    htmlElement.style.boxSizing = "border-box";
}


function darkMode (){
    let btn = document.querySelector(".dark-mode");
    let nombre = document.querySelector(".nombre");
    let mensaje = document.querySelector(".mensaje");
    let mensajeA = document.querySelector(".mensajeA");
    let enviar = document.querySelector(".enviar");
    let mensaje_input = document.querySelector(".mensaje-input");
    let barra_mensaje = document.querySelector(".barra-mensaje");
    let header = document.querySelector(".header");

    let isDarkMode = false;
    //let isDarkMode = localStorage.getItem("isDarkMode") === "
    btn.addEventListener("click", () => {
        if(isDarkMode){
            document.body.style.backgroundColor = "white";
            btn.style.filter = "";
            nombre.style.color = "black";
            // mensaje.style.backgroundColor = "#1E90FF";
            // mensajeA.style.backgroundColor = "#1E90FF";
            enviar.style.backgroundColor = "#1E90FF";
            mensaje_input.style.backgroundColor = "";
            barra_mensaje.style.backgroundColor = "white";
            header.style.backgroundColor = "white";
            
            isDarkMode = false;
        } else {
            document.body.style.backgroundColor = "black";
            btn.style.filter = "invert(100%)";
            nombre.style.color = "white";
            // mensaje.style.backgroundColor = "#ADFF2F";
            // mensajeA.style.backgroundColor = "#ADFF2F";
            enviar.style.backgroundColor = "#ADFF2F";
            mensaje_input.style.backgroundColor = "#ccc";
            barra_mensaje.style.backgroundColor = "black";
            header.style.backgroundColor = "black";
           
            isDarkMode = true;
        }
    })
}

resultados.then(resultado => {

    header();
   
    resultado.forEach(elemento => {

        if(elemento.user == "per22318"){
            bodyP(elemento.mensaje, elemento.hora);
        } else {
            bodyA(elemento.mensaje, elemento.user, elemento.hora);
        }
    });
    
    mensaje();
    globales();
    darkMode();
});


