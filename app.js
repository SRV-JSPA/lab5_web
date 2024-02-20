async function api() {
    const apiResponse = await fetch("http://localhost:3009/messages");
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
    header.style.width="100%";
    header.style.borderBottom="1px solid gray";
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
    config.src="/images/dark-mode.svg";
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
    body.appendChild(header);
}

function bodyA (mensajeA){
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

    

    let p = document.createElement("p");
    p.classList.add("contenido-mensaje");
    p.style.padding= "1rem";
    p.innerHTML = mensajeA;
    c.appendChild(p);

    
    const body = document.body;
    body.appendChild(main);
    
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

function bodyP (mensajeP){
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

    let p2 = document.createElement("p");
    p2.classList.add("contenido-mensaje");
    p2.style.padding= "1rem";
    p2.innerHTML = mensajeP;
    c2.appendChild(p2);

    const body = document.body;
    body.appendChild(main2);

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
    enviar.src="/images/send_120237.svg";
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

    const body = document.body;
    body.appendChild(barra_mensaje);
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
            isDarkMode = false;
        } else {
            document.body.style.backgroundColor = "black";
            btn.style.filter = "invert(100%)";
            nombre.style.color = "white";
            // mensaje.style.backgroundColor = "#ADFF2F";
            // mensajeA.style.backgroundColor = "#ADFF2F";
            enviar.style.backgroundColor = "#ADFF2F";
            mensaje_input.style.backgroundColor = "#ccc";
            isDarkMode = true;
        }
    })
}

resultados.then(resultado => {

    header();
   
    resultado.forEach(elemento => {

        if(elemento.user == "per22318"){
            bodyP(elemento.mensaje);
        } else {
            bodyA(elemento.mensaje);
        }
    });
    
    mensaje();
    globales();
    darkMode();
});


