
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
    const main = document.createElement("section");
    main.classList.add("contenedor", "seccion");

    let c = document.createElement("div");
    c.classList.add("mensaje");
    main.appendChild(c);

    let p = document.createElement("p");
    p.classList.add("contenido-mensaje");
    p.innerHTML = "HOLA";
    c.appendChild(p);

    const main2 = document.createElement("section");
    main2.classList.add("contenedor", "seccion2");

    let c2 = document.createElement("div");
    c2.classList.add("mensaje");
    main2.appendChild(c2);

    let p2 = document.createElement("p");
    p2.classList.add("contenido-mensaje");
    p2.innerHTML = "ADIOS";
    c2.appendChild(p2);


    const body = document.body;
    body.appendChild(main);
    body.appendChild(main2);

    setTimeout(() => {
        if (p.clientWidth > 600) {
            p.classList.remove("mensaje");
            p.classList.add("modo-grande");
        }
    }, 0);

    setTimeout(() => {
        if (p2.clientWidth > 600) {
            p2.classList.remove("contenido-mensaje");
            p2.classList.add("modo-grande");
        }
    }, 0);
}



function css(){
    const estilo = document.createElement("style");
    estilo.innerHTML = `

        .mensaje{
            background-color: #1E90FF;
            border-radius: 10px; 
            padding: 5px; 
            display: inline-block;
        }

        .modo-grande {
            background-color: #1E90FF; 
            border-radius: 10px; 
            padding: 5px;
            max-width: 400px; 
            word-wrap: break-word; 
          }

        .contenido-mensaje{
            padding: 1rem;
        }

        

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
        }

        .header {
            padding-bottom: 3rem;
            width: 100%;
            border-bottom: 1px solid gray;
        }

        img, picture {
            width: 100%;
            display: block;
        }

        .dark-mode {
            width: 3rem;
            margin-top: 0;
            margin-bottom: 2rem;
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
            width: auto;
            padding: 20px;
        }

        .seccion2{
            display:flex;
            justify-content: flex-end;
            width: auto;
            padding: 20px;
        }

        .oscuro {
            background-color: black;

            .dark-mode{
                filter: invert(100%);
            }

            .nombre {
                color: white;
            }

            .mensaje{
                background-color: #ADFF2F;
            }

            .modo-grande {
                background-color: #ADFF2F;
            }
        }

        
    `;
    const encabezadoDocumento = document.head;
    encabezadoDocumento.appendChild(estilo);
}

function darkMode (){
    const btn = document.querySelector(".dark-mode");
    //let isDarkMode = localStorage.getItem("isDarkMode") === "
    const nombre = document.querySelector( ".nombre" );
    btn.addEventListener("click", () => {
        document.body.classList.toggle("oscuro");
    })
}

header();
body();
css();
darkMode();
