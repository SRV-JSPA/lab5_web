
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
    barra.appendChild(config);


    let body = document.body;
    body.appendChild(header);
}

function css(){
    const estilo = document.createElement("style");
    estilo.innerHTML = `
        .contenedor {
            width: min(90%, 120rem);
            margin: 0 auto;
        }
        .barra {
            padding-top: 4rem;
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
    `;
    var encabezadoDocumento = document.head;
    encabezadoDocumento.appendChild(estilo);
}

header();
css();