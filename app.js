
function header (){

    let header = document.createElement("div");
    header.classList.add("header");

    let contenedor = document.createElement("div");
    contenedor.classList.add("contenedor");
    header.appendChild(contenedor);

    let barra = document.createElement("div");
    barra.classList.add("barra");
    contenedor.appendChild(barra);

    let h1 = document.createElement("h1");
    h1.classList.add("nombre", "no-margen", "centrar-texto");
    h1.innerHTML = "UVG Chat";
    barra.appendChild(h1);

    let config = document.createElement("img");
    config.src="/images/dark-mode.svg";
    config.classList.add("dark-mode");
    barra.appendChild(config);


    let body = document.body;
    body.appendChild(header);
}

function body (){
    const main = document.createElement("main");
    main.classList.add("contenedor", "seccion", "color-main");

    let p = document.createElement("p");
    p.innerHTML = "HOLA";
    main.appendChild(p);


    const body = document.body;
    body.appendChild(main);
}

function footer (){
    let footer = document.createElement("footer");
    footer.classList.add("footer");

    let contenedor = document.createElement("div");
    contenedor.classList.add("contenedor", "contenedor-footer");
    header.appendChild(contenedor);


    let h1 = document.createElement("h1");
    h1.classList.add("nombre", "no-margen", "centrar-texto");
    h1.innerHTML = "UVG Chat";
    contenedor.appendChild(h1);

    let parrafo = document.createElement("p");
    parrafo.classList.add("copyright");
    parrafo.innerText = "Todos los derechos reservados &copy;";
    contenedor.appendChild(parrafo);

    let body = document.body;
    body.appendChild(footer);
}

function css(){
    const estilo = document.createElement("style");
    estilo.innerHTML = `
        .no-margen{
            margin: 0;
        }

        .centrar-texto{
            text-align: center;
        }

        .contenedor {
            width: min(90%, 120rem);
            margin: 0 auto;
        }
        .barra {
            padding-top: 4rem;
        }

        .barra h1 {
            padding-bottom: 2rem;
        }

        @media (min-width: 768px) {
            .barra{
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }

        .nombre {
            font-weight: normal;
            color: white;
        }

        .header {
            background-color: black;
            padding-bottom: 3rem;
            width: 100%;
        }

        img, picture {
            width: 100%;
            display: block;
        }

        .dark-mode {
            width: 3rem;
            margin-top: 0;
            margin-bottom: 2rem;
            filter: invert(100%);
        }

        .dark-mode:hover {
            cursor:pointer;
        }

        .footer{
            padding: 5rem / 2 0;
            background-color: black;
            margint-bottom: 0;
        }

        .contenedor-footer {
            padding-top: calc(5rem / 2):
        }

        .copyright {
            color: white;
            text-align: center;
        }

        .seccion{
            margin-top: calc(5rem / 2);
            margin-bottom: calc(5rem / 2);
        }

        .color-main{
            background-color: black;
            margin-top: 0;
        }
    `;
    const encabezadoDocumento = document.head;
    encabezadoDocumento.appendChild(estilo);
}

header();
body();
css();
