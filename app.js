
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

function mensaje (){
    const barra_mensaje = document.createElement("section");
    barra_mensaje.classList.add("barra-mensaje");

    const div = document.createElement("div");
    div.classList.add("input-mensaje");
    barra_mensaje.appendChild(div);

    const inputMensaje = document.createElement("input");
    inputMensaje.classList.add("mensaje-input");
    inputMensaje.placeholder = "Escribe tu mensaje aquí...";
    div.appendChild(inputMensaje);


    let enviar = document.createElement("img");
    enviar.src="/images/send_120237.svg";
    enviar.classList.add("enviar");
    barra_mensaje.appendChild(enviar);

    const body = document.body;
    body.appendChild(barra_mensaje);
}

function css(){
    const estilo = document.createElement("style");
    estilo.innerHTML = `

    html{
        font-size: 62.5%;
        box-sizing: border-box; 
    }
    ,:before, *:after{
        box-sizing: inherit;
    }

    .enviar {
        background-color:  #1E90FF;
        border-radius: 50%;
        width: 3rem;
        margin-top: 0;
        margin-bottom: 2rem; 
        position: absolute;
        right: 40px; 
        top: 50%; 
        transform: translateY(-75%); 
    }

    .enviar:hover {
        cursor: pointer;
    }

    .input-mensaje {
        display: flex;
        border-radius: 20px; 
        overflow: hidden; 
        width: 95%;
    }

    .mensaje-input {
        flex: 1;
        border: 2px solid #ccc;
        padding: 10px;
        border-radius: 20px; 
        outline: none; 
    }

    .barra-mensaje {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        padding: 10px; 
        border-top: 1px solid #ccc; 
    }

        .mensaje{
            cursor: pointer;
            background-color: #1E90FF;
            border-radius: 10px; 
            padding: 5px; 
            display: inline-block;
        }

        .modo-grande {
            cursor: pointer;
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

            .enviar {
                background-color: #ADFF2F;
            }

            .mensaje-input {
                background-color: #ccc;
            }
        }

        .caja-info {
            position: fixed;
            top: 50%;
            left: 50%;
            height: 50%;
            width: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0.5);
            color: #fff; 
            padding: 20px; 
            border-radius: 10px;
            backdrop-filter: blur(100%);
        }

        
    `;
    const encabezadoDocumento = document.head;
    encabezadoDocumento.appendChild(estilo);
}

function normalize (){
    const normalize = document.createElement("style");
    normalize.innerHTML = `
    /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

    /* Document
    ========================================================================== */

    /**
     * 1. Correct the line height in all browsers.
     * 2. Prevent adjustments of font size after orientation changes in iOS.
     */

    html {
        line-height: 1.15; /* 1 */
        -webkit-text-size-adjust: 100%; /* 2 */
    }
    
    /* Sections
        ========================================================================== */
    
    /**
     * Remove the margin in all browsers.
     */
    
    body {
        margin: 0;
    }
    
    /**
     * Render the main element consistently in IE.
     */
    
    main {
        display: block;
    }
    
    /**
     * Correct the font size and margin on h1 elements within section and
     * article contexts in Chrome, Firefox, and Safari.
     */
    
    h1 {
        font-size: 2em;
        margin: 0.67em 0;
    }
    
    /* Grouping content
        ========================================================================== */
    
    /**
     * 1. Add the correct box sizing in Firefox.
     * 2. Show the overflow in Edge and IE.
     */
    
    hr {
        box-sizing: content-box; /* 1 */
        height: 0; /* 1 */
        overflow: visible; /* 2 */
    }
    
    /**
     * 1. Correct the inheritance and scaling of font size in all browsers.
     * 2. Correct the odd em font sizing in all browsers.
     */
    
    pre {
        font-family: monospace, monospace; /* 1 */
        font-size: 1em; /* 2 */
    }
    
    /* Text-level semantics
        ========================================================================== */
    
    /**
     * Remove the gray background on active links in IE 10.
     */
    
    a {
        background-color: transparent;
    }
    
    /**
     * 1. Remove the bottom border in Chrome 57-
     * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
     */
    
    abbr[title] {
        border-bottom: none; /* 1 */
        text-decoration: underline; /* 2 */
        text-decoration: underline dotted; /* 2 */
    }
    
    /**
     * Add the correct font weight in Chrome, Edge, and Safari.
     */
    
    b,
    strong {
        font-weight: bolder;
    }
    
    /**
     * 1. Correct the inheritance and scaling of font size in all browsers.
     * 2. Correct the odd em font sizing in all browsers.
     */
    
    code,
    kbd,
    samp {
        font-family: monospace, monospace; /* 1 */
        font-size: 1em; /* 2 */
    }
    
    /**
     * Add the correct font size in all browsers.
     */
    
    small {
        font-size: 80%;
    }
    
    /**
     * Prevent sub and sup elements from affecting the line height in
     * all browsers.
     */
    
    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }
    
    sub {
        bottom: -0.25em;
    }
    
    sup {
        top: -0.5em;
    }
    
    /* Embedded content
        ========================================================================== */
    
    /**
     * Remove the border on images inside links in IE 10.
     */
    
    img {
        border-style: none;
    }
    
    /* Forms
        ========================================================================== */
    
    /**
     * 1. Change the font styles in all browsers.
     * 2. Remove the margin in Firefox and Safari.
     */
    
    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit; /* 1 */
        font-size: 100%; /* 1 */
        line-height: 1.15; /* 1 */
        margin: 0; /* 2 */
    }
    
    /**
     * Show the overflow in IE.
     * 1. Show the overflow in Edge.
     */
    
    button,
    input { /* 1 */
        overflow: visible;
    }
    
    /**
     * Remove the inheritance of text transform in Edge, Firefox, and IE.
     * 1. Remove the inheritance of text transform in Firefox.
     */
    
    button,
    select { /* 1 */
        text-transform: none;
    }
    
    /**
     * Correct the inability to style clickable types in iOS and Safari.
     */
    
    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }
    
    /**
     * Remove the inner border and padding in Firefox.
     */
    
    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }
    
    /**
     * Restore the focus styles unset by the previous rule.
     */
    
    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
        outline: 1px dotted ButtonText;
    }
    
    /**
     * Correct the padding in Firefox.
     */
    
    fieldset {
        padding: 0.35em 0.75em 0.625em;
    }
    
    /**
     * 1. Correct the text wrapping in Edge and IE.
     * 2. Correct the color inheritance from fieldset elements in IE.
     * 3. Remove the padding so developers are not caught out when they zero out
     *    fieldset elements in all browsers.
     */
    
    legend {
        box-sizing: border-box; /* 1 */
        color: inherit; /* 2 */
        display: table; /* 1 */
        max-width: 100%; /* 1 */
        padding: 0; /* 3 */
        white-space: normal; /* 1 */
    }
    
    /**
     * Add the correct vertical alignment in Chrome, Firefox, and Opera.
     */
    
    progress {
        vertical-align: baseline;
    }
    
    /**
     * Remove the default vertical scrollbar in IE 10+.
     */
    
    textarea {
        overflow: auto;
    }
    
    /**
     * 1. Add the correct box sizing in IE 10.
     * 2. Remove the padding in IE 10.
     */
    
    [type="checkbox"],
    [type="radio"] {
        box-sizing: border-box; /* 1 */
        padding: 0; /* 2 */
    }
    
    /**
     * Correct the cursor style of increment and decrement buttons in Chrome.
     */
    
    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
        height: auto;
    }
    
    /**
     * 1. Correct the odd appearance in Chrome and Safari.
     * 2. Correct the outline style in Safari.
     */
    
    [type="search"] {
        -webkit-appearance: textfield; /* 1 */
        outline-offset: -2px; /* 2 */
    }
    
    /**
     * Remove the inner padding in Chrome and Safari on macOS.
     */
    
    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }
    
    /**
     * 1. Correct the inability to style clickable types in iOS and Safari.
     * 2. Change font properties to inherit in Safari.
     */
    
    ::-webkit-file-upload-button {
        -webkit-appearance: button; /* 1 */
        font: inherit; /* 2 */
    }
    
    /* Interactive
        ========================================================================== */
    
    /*
    * Add the correct display in Edge, IE 10+, and Firefox.
    */
    
    details {
        display: block;
    }
    
    /*
    * Add the correct display in all browsers.
    */
    
    summary {
        display: list-item;
    }
    
    /* Misc
        ========================================================================== */
    
    /**
     * Add the correct display in IE 10+.
     */
    
    template {
        display: none;
    }
    
    /**
     * Add the correct display in IE 10.
     */
    
    [hidden] {
        display: none;
    }
    `;

    const enncabezado = document.head;
    enncabezado.appendChild(normalize);
}

function darkMode (){
    const btn = document.querySelector(".dark-mode");
    //let isDarkMode = localStorage.getItem("isDarkMode") === "
    btn.addEventListener("click", () => {
        document.body.classList.toggle("oscuro");
    })
}

function info() {
    document.addEventListener("click", (event) => {
        if (event.target.matches(".mensaje")) {
            if (!document.querySelector(".caja-info")) {
                const caja = document.createElement("div");
                caja.classList.add("caja-info");
                caja.textContent = "Información";
                document.body.appendChild(caja);
                
               
                document.body.classList.add("blur-background");
            } else {
                document.querySelector(".caja-info").remove();
                
                
                document.body.classList.remove("blur-background");
            }
        } else {
            if (document.querySelector(".caja-info")) {
                document.querySelector(".caja-info").remove();
                document.body.classList.remove("blur-background");
            }
        }
    });
}




header();
body();
mensaje();
css();
normalize();
darkMode();
info();
