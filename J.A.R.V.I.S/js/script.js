/* =========================================================
   J.A.R.V.I.S.
   SCRIPT.JS
========================================================= */


/* =========================================================
   ELEMENTOS PRINCIPAIS
========================================================= */

const menuButton =
    document.getElementById("menuButton");

const sidebar =
    document.getElementById("sidebar");

const clock =
    document.getElementById("clock");

const pageTitle =
    document.getElementById("pageTitle");

const welcomeTitle =
    document.getElementById("welcomeTitle");

const welcomeText =
    document.getElementById("welcomeText");

const controlPanel =
    document.getElementById("controlPanel");

const aiPanel =
    document.getElementById("aiPanel");

const content =
    document.querySelector(".content");


/* =========================================================
   NAVEGAÇÃO
========================================================= */

const navInicio =
    document.getElementById("navInicio");

const navSistema =
    document.getElementById("navSistema");

const navCasa =
    document.getElementById("navCasa");

const navDados =
    document.getElementById("navDados");

const navConfiguracoes =
    document.getElementById("navConfiguracoes");

const navLinks = [
    navInicio,
    navSistema,
    navCasa,
    navDados,
    navConfiguracoes
];


/* =========================================================
   AI PANEL
========================================================= */

const openAiPanel =
    document.getElementById("openAiPanel");

const backToControl =
    document.getElementById("backToControl");

const aiInput =
    document.getElementById("aiInput");

const aiSend =
    document.getElementById("aiSend");

const aiState =
    document.getElementById("aiState");

const aiResponse =
    document.getElementById("aiResponse");


/* =========================================================
   ESTADO DO SISTEMA
========================================================= */

let aiIsOpen = false;
let aiProcessing = false;


/* =========================================================
   ATIVIDADES
========================================================= */

function addActivity(message) {

    const now =
        new Date();

    const hours =
        String(now.getHours())
            .padStart(2, "0");

    const minutes =
        String(now.getMinutes())
            .padStart(2, "0");


    const activityPanels =
        document.querySelectorAll(
            ".dashboard-panel"
        );

    let activityPanel = null;


    activityPanels.forEach(function (panel) {

        const title =
            panel.querySelector("h3");


        if (
            title &&
            title.textContent.trim()
            === "Atividade do J.A.R.V.I.S."
        ) {

            activityPanel = panel;
        }

    });


    if (!activityPanel) {
        return;
    }


    const activity =
        document.createElement("div");

    activity.classList.add("activity");


    const time =
        document.createElement("span");

    time.classList.add("activity-time");

    time.textContent =
        `${hours}:${minutes}`;


    const text =
        document.createElement("span");

    text.textContent =
        message;


    activity.appendChild(time);

    activity.appendChild(text);

    activityPanel.appendChild(activity);
}


/* =========================================================
   MENU LATERAL
========================================================= */

if (menuButton && sidebar) {

    menuButton.addEventListener(
        "click",
        function () {

            sidebar.classList.toggle(
                "closed"
            );

        }
    );

}


/* =========================================================
   FECHAR SIDEBAR NO MOBILE
========================================================= */

function closeSidebarOnMobile() {

    if (
        window.innerWidth <= 768 &&
        sidebar
    ) {

        sidebar.classList.add(
            "closed"
        );

    }

}


/* =========================================================
   RELÓGIO
========================================================= */

function updateClock() {

    if (!clock) {
        return;
    }


    const now =
        new Date();


    const hours =
        String(now.getHours())
            .padStart(2, "0");

    const minutes =
        String(now.getMinutes())
            .padStart(2, "0");

    const seconds =
        String(now.getSeconds())
            .padStart(2, "0");


    clock.textContent =
        `${hours}:${minutes}:${seconds}`;
}


updateClock();

setInterval(
    updateClock,
    1000
);


/* =========================================================
   SAUDAÇÃO
========================================================= */

function updateWelcome() {

    if (
        !welcomeTitle ||
        !welcomeText
    ) {
        return;
    }


    const hour =
        new Date().getHours();


    if (
        hour >= 5 &&
        hour < 12
    ) {

        welcomeTitle.textContent =
            "Bom dia, Skavinski.";

        welcomeText.textContent =
            "Todos os sistemas estão prontos.";

    }

    else if (
        hour >= 12 &&
        hour < 18
    ) {

        welcomeTitle.textContent =
            "Boa tarde, Skavinski.";

        welcomeText.textContent =
            "Todos os sistemas estão prontos.";

    }

    else {

        welcomeTitle.textContent =
            "Boa noite, Skavinski.";

        welcomeText.textContent =
            "Todos os sistemas estão prontos.";

    }

}


updateWelcome();


/* =========================================================
   NAVEGAÇÃO ATIVA
========================================================= */

function setActiveNav(activeLink) {

    navLinks.forEach(
        function (link) {

            if (link) {

                link.classList.remove(
                    "active"
                );

            }

        }
    );


    if (activeLink) {

        activeLink.classList.add(
            "active"
        );

    }

}


/* =========================================================
   TROCAR CONTEÚDO
========================================================= */

function changeContent(
    title,
    text,
    html
) {

    if (pageTitle) {

        pageTitle.textContent =
            title;

    }


    if (!content) {
        return;
    }


    content.innerHTML = `
        <div class="welcome">
            <h2>
                ${title}
            </h2>

            <p>
                ${text}
            </p>
        </div>

        ${html}
    `;

}


/* =========================================================
   INÍCIO
========================================================= */

function showInicio() {

    setActiveNav(
        navInicio
    );


    changeContent(

        "Bem-vindo, Skavinski.",

        "Sistema J.A.R.V.I.S. operacional.",

        `

        <div class="status-cards">

            <div class="status-card">

                <h3>
                    CPU
                </h3>

                <span>
                    32%
                </span>

            </div>


            <div class="status-card">

                <h3>
                    Memória
                </h3>

                <span>
                    48%
                </span>

            </div>


            <div class="status-card">

                <h3>
                    Backend
                </h3>

                <span id="backendStatus">
                    VERIFICANDO...
                </span>

            </div>

        </div>


        <div class="dashboard-bottom">


            <div class="dashboard-panel">

                <h3>
                    Atividade do J.A.R.V.I.S.
                </h3>

            </div>


            <div class="dashboard-panel">

                <h3>
                    Dispositivos
                </h3>


                <div class="device">

                    <div>

                        <strong>
                            Samsung
                        </strong>

                        <span>
                            Computador principal
                        </span>

                    </div>


                    <span class="device-status">
                        ONLINE
                    </span>

                </div>

            </div>


        </div>

        `

    );


    addActivity(
        "J.A.R.V.I.S. online"
    );

    addActivity(
        "Samsung conectado"
    );

    addActivity(
        "Sistema iniciado"
    );

    addActivity(
        "Control Panel iniciado"
    );

}


/* =========================================================
   SISTEMA
========================================================= */

function showSistema() {

    setActiveNav(
        navSistema
    );


    changeContent(

        "Status do sistema",

        "Monitoramento do sistema J.A.R.V.I.S.",

        `

        <div class="status-cards">


            <div class="status-card">

                <h3>
                    CPU
                </h3>

                <span>
                    32%
                </span>

            </div>


            <div class="status-card">

                <h3>
                    Memória
                </h3>

                <span>
                    48%
                </span>

            </div>


            <div class="status-card">

                <h3>
                    Rede
                </h3>

                <span>
                    ONLINE
                </span>

            </div>


        </div>


        <div class="dashboard-bottom">


            <div class="dashboard-panel">

                <h3>
                    Samsung
                </h3>

                <p>
                    Computador principal de interface e desenvolvimento.
                </p>

                <br>


                <div class="device">

                    <div>

                        <strong>
                            Sistema
                        </strong>

                        <span>
                            Interface principal
                        </span>

                    </div>


                    <span class="device-status">
                        ONLINE
                    </span>

                </div>

            </div>


            <div class="dashboard-panel">

                <h3>
                    J.A.R.V.I.S.
                </h3>

                <p>
                    Núcleo do sistema e gerenciamento das funções do assistente.
                </p>

                <br>


                <div class="device">

                    <div>

                        <strong>
                            Sistema central
                        </strong>

                        <span>
                            Núcleo J.A.R.V.I.S.
                        </span>

                    </div>


                    <span class="device-status">
                        ONLINE
                    </span>

                </div>

            </div>


        </div>

        `

    );


    addActivity(
        "Página Sistema aberta"
    );

}


/* =========================================================
   CASA
========================================================= */

function showCasa() {

    setActiveNav(
        navCasa
    );


    changeContent(

        "Controle da casa",

        "Controle dos dispositivos conectados ao J.A.R.V.I.S.",

        `

        <div class="status-cards">


            <div class="status-card">

                <h3>
                    Iluminação
                </h3>

                <span id="lightStatus">
                    DESLIGADA
                </span>

                <br><br>

                <button id="lightButton">
                    LIGAR
                </button>

            </div>


            <div class="status-card">

                <h3>
                    Televisão
                </h3>

                <span id="tvStatus">
                    DESLIGADA
                </span>

                <br><br>

                <button id="tvButton">
                    LIGAR
                </button>

            </div>


            <div class="status-card">

                <h3>
                    Ambiente
                </h3>

                <span>
                    NORMAL
                </span>

                <br><br>

                <button id="environmentButton">
                    ATUALIZAR
                </button>

            </div>


        </div>


        <div class="dashboard-bottom">


            <div class="dashboard-panel">

                <h3>
                    Iluminação
                </h3>

                <p>
                    Controle das luzes conectadas ao sistema.
                </p>

            </div>


            <div class="dashboard-panel">

                <h3>
                    Televisão
                </h3>

                <p>
                    Controle da televisão e dispositivos multimídia.
                </p>

            </div>


        </div>

        `

    );


    addActivity(
        "Página Casa aberta"
    );


    const lightButton =
        document.getElementById(
            "lightButton"
        );

    const lightStatus =
        document.getElementById(
            "lightStatus"
        );


    if (
        lightButton &&
        lightStatus
    ) {

        lightButton.addEventListener(
            "click",
            function () {

                if (
                    lightStatus.textContent.trim()
                    === "DESLIGADA"
                ) {

                    lightStatus.textContent =
                        "LIGADA";

                    lightButton.textContent =
                        "DESLIGAR";

                    addActivity(
                        "Iluminação ligada"
                    );

                }

                else {

                    lightStatus.textContent =
                        "DESLIGADA";

                    lightButton.textContent =
                        "LIGAR";

                    addActivity(
                        "Iluminação desligada"
                    );

                }

            }
        );

    }


    const tvButton =
        document.getElementById(
            "tvButton"
        );

    const tvStatus =
        document.getElementById(
            "tvStatus"
        );


    if (
        tvButton &&
        tvStatus
    ) {

        tvButton.addEventListener(
            "click",
            function () {

                if (
                    tvStatus.textContent.trim()
                    === "DESLIGADA"
                ) {

                    tvStatus.textContent =
                        "LIGADA";

                    tvButton.textContent =
                        "DESLIGAR";

                    addActivity(
                        "Televisão ligada"
                    );

                }

                else {

                    tvStatus.textContent =
                        "DESLIGADA";

                    tvButton.textContent =
                        "LIGAR";

                    addActivity(
                        "Televisão desligada"
                    );

                }

            }
        );

    }


    const environmentButton =
        document.getElementById(
            "environmentButton"
        );


    if (environmentButton) {

        environmentButton.addEventListener(
            "click",
            function () {

                environmentButton.textContent =
                    "ATUALIZADO";

                addActivity(
                    "Ambiente atualizado"
                );


                setTimeout(
                    function () {

                        environmentButton.textContent =
                            "ATUALIZAR";

                    },
                    1500
                );

            }
        );

    }

}


/* =========================================================
   DADOS
========================================================= */

function showDados() {

    setActiveNav(
        navDados
    );


    changeContent(

        "Dados do J.A.R.V.I.S.",

        "Área destinada às informações e dados armazenados.",

        `

        <div class="dashboard-bottom">


            <div class="dashboard-panel">

                <h3>
                    Banco de dados
                </h3>

                <p>
                    Sistema de armazenamento ainda em desenvolvimento.
                </p>

                <br>


                <div class="device">

                    <div>

                        <strong>
                            Banco local
                        </strong>

                        <span>
                            Aguardando conexão
                        </span>

                    </div>


                    <span class="device-status">
                        OFFLINE
                    </span>

                </div>

            </div>


            <div class="dashboard-panel">

                <h3>
                    Memória
                </h3>

                <p>
                    Memória do J.A.R.V.I.S. ainda não conectada.
                </p>

                <br>


                <div class="device">

                    <div>

                        <strong>
                            Memória
                        </strong>

                        <span>
                            Módulo futuro
                        </span>

                    </div>


                    <span class="device-status">
                        STANDBY
                    </span>

                </div>

            </div>


        </div>


        <div class="dashboard-bottom">


            <div class="dashboard-panel">

                <h3>
                    Samsung
                </h3>

                <p>
                    Dados locais do computador principal.
                </p>

            </div>


            <div class="dashboard-panel">

                <h3>
                    Sistema J.A.R.V.I.S.
                </h3>

                <p>
                    Dados e informações do sistema central.
                </p>

            </div>


        </div>

        `

    );


    addActivity(
        "Página Dados aberta"
    );

}


/* =========================================================
   CONFIGURAÇÕES
========================================================= */

function showConfiguracoes() {

    setActiveNav(
        navConfiguracoes
    );


    changeContent(

        "Configurações",

        "Configurações do sistema J.A.R.V.I.S.",

        `

        <div class="dashboard-bottom">


            <div class="dashboard-panel">

                <h3>
                    Sistema
                </h3>

                <p>
                    Configurações gerais do J.A.R.V.I.S.
                </p>

                <br>

                <button id="environmentButton">
                    SISTEMA ONLINE
                </button>

            </div>


            <div class="dashboard-panel">

                <h3>
                    Interface
                </h3>

                <p>
                    Interface principal do J.A.R.V.I.S.
                </p>

                <br>


                <div class="device">

                    <div>

                        <strong>
                            Interface
                        </strong>

                        <span>
                            Control Panel
                        </span>

                    </div>


                    <span class="device-status">
                        ONLINE
                    </span>

                </div>

            </div>


        </div>


        <div class="dashboard-bottom">


            <div class="dashboard-panel">

                <h3>
                    Segurança
                </h3>

                <p>
                    Módulo de segurança ainda em desenvolvimento.
                </p>

            </div>


            <div class="dashboard-panel">

                <h3>
                    J.A.R.V.I.S. AI
                </h3>

                <p>
                    Sistema de inteligência artificial em desenvolvimento.
                </p>

            </div>


        </div>

        `

    );


    addActivity(
        "Página Configurações aberta"
    );

}


/* =========================================================
   EVENTOS DE NAVEGAÇÃO
========================================================= */

if (navInicio) {

    navInicio.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            showInicio();

            closeSidebarOnMobile();

        }
    );

}


if (navSistema) {

    navSistema.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            showSistema();

            closeSidebarOnMobile();

        }
    );

}


if (navCasa) {

    navCasa.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            showCasa();

            closeSidebarOnMobile();

        }
    );

}


if (navDados) {

    navDados.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            showDados();

            closeSidebarOnMobile();

        }
    );

}


if (navConfiguracoes) {

    navConfiguracoes.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            showConfiguracoes();

            closeSidebarOnMobile();

        }
    );

}


/* =========================================================
   ABRIR AI PANEL
========================================================= */

function openAI() {

    if (
        !controlPanel ||
        !aiPanel
    ) {
        return;
    }


    aiIsOpen = true;


    controlPanel.classList.add(
        "panel-exit"
    );


    setTimeout(
        function () {

            controlPanel.style.display =
                "none";

            controlPanel.classList.remove(
                "panel-exit"
            );


            aiPanel.style.display =
                "flex";

            aiPanel.classList.remove(
                "leaving"
            );

            aiPanel.classList.add(
                "active"
            );


            if (aiInput) {

                setTimeout(
                    function () {

                        aiInput.focus();

                    },
                    300
                );

            }

        },
        300
    );


    addActivity(
        "AI Panel iniciado"
    );


    console.log(
        "J.A.R.V.I.S. AI iniciado."
    );

}


if (openAiPanel) {

    openAiPanel.addEventListener(
        "click",
        openAI
    );

}


/* =========================================================
   VOLTAR PARA CONTROL PANEL
========================================================= */

function closeAI() {

    if (
        !controlPanel ||
        !aiPanel
    ) {
        return;
    }


    aiIsOpen = false;


    aiPanel.classList.remove(
        "active"
    );

    aiPanel.classList.add(
        "leaving"
    );


    setTimeout(
        function () {

            aiPanel.style.display =
                "none";

            aiPanel.classList.remove(
                "leaving"
            );


            controlPanel.style.display =
                "block";


            controlPanel.classList.add(
                "panel-enter"
            );


            setTimeout(
                function () {

                    controlPanel.classList.remove(
                        "panel-enter"
                    );

                },
                450
            );

        },
        300
    );


    console.log(
        "Retornando ao Control Panel."
    );

}


if (backToControl) {

    backToControl.addEventListener(
        "click",
        closeAI
    );

}


/* =========================================================
   ESTADO DA IA
========================================================= */

function setAiState(state) {

    if (aiState) {

        aiState.textContent =
            state;

    }

}


/* =========================================================
   RESPOSTA VISUAL
========================================================= */

function showAiResponse(response) {

    if (!aiResponse) {
        return;
    }


    aiResponse.textContent =
        response;


    aiResponse.classList.add(
        "visible"
    );


    setTimeout(
        function () {

            if (aiResponse) {

                aiResponse.classList.remove(
                    "visible"
                );

            }

        },
        7000
    );

}


/* =========================================================
   PROCESSAMENTO DE COMANDOS
========================================================= */

function processCommand(command) {

    const text =
        command.toLowerCase().trim();


    if (
        text === "oi" ||
        text === "olá" ||
        text === "ola" ||
        text.includes("bom dia") ||
        text.includes("boa tarde") ||
        text.includes("boa noite")
    ) {

        return "Olá, Skavinski. Sistemas online.";

    }


    if (
        text.includes("status") ||
        text.includes("sistema")
    ) {

        return "Todos os sistemas locais estão operacionais.";

    }


    if (text.includes("hora")) {

        const now =
            new Date();


        const hours =
            String(
                now.getHours()
            ).padStart(2, "0");


        const minutes =
            String(
                now.getMinutes()
            ).padStart(2, "0");


        return `Agora são ${hours}:${minutes}.`;

    }


    if (
        text.includes("quem é você") ||
        text.includes("quem e você") ||
        text.includes("quem e voce")
    ) {

        return "Eu sou o J.A.R.V.I.S., seu assistente pessoal. Ainda estou em desenvolvimento.";

    }


    if (text.includes("samsung")) {

        return "Samsung identificado como a máquina principal de interface e desenvolvimento.";

    }


    if (
        text.includes("casa") ||
        text.includes("automação") ||
        text.includes("automacao")
    ) {

        return "O módulo de automação residencial ainda está em desenvolvimento.";

    }


    if (
        text === "ajuda" ||
        text.includes("comandos")
    ) {

        return "Você pode perguntar sobre o status, horário, Samsung, casa ou perguntar quem eu sou.";

    }


    return "Comando recebido. Ainda não possuo uma função para executar esse comando.";

}


/* =========================================================
   EXECUTAR COMANDO
   AI PANEL → BACKEND
========================================================= */

async function executeCommand(command) {

    if (
        !command ||
        command.trim() === ""
    ) {
        return;
    }


    if (aiProcessing) {
        return;
    }


    aiProcessing = true;


    aiPanel.classList.add(
        "processing"
    );


    setAiState(
        "PROCESSANDO..."
    );


    addActivity(
        "Comando enviado ao backend"
    );


    try {

        const resposta =
            await fetch(
                "/api/comando",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify({
                            comando:
                                command
                        })
                }
            );


        const dados =
            await resposta.json();


        setAiState(
            "AGUARDANDO..."
        );


        showAiResponse(
            dados.resposta
        );


        addActivity(
            "Backend processou o comando"
        );


        console.log(
            "VOCÊ:",
            command
        );


        console.log(
            "BACKEND:",
            dados
        );

    }

    catch (erro) {

        setAiState(
            "ERRO"
        );


        showAiResponse(
            "Não foi possível conectar ao backend."
        );


        addActivity(
            "Erro ao conectar ao backend"
        );


        console.error(
            "Erro ao enviar comando:",
            erro
        );

    }

    finally {

        aiPanel.classList.remove(
            "processing"
        );


        aiProcessing = false;

    }

}


/* =========================================================
   BOTÃO ENVIAR
========================================================= */

if (aiSend) {

    aiSend.addEventListener(
        "click",
        function () {

            if (!aiInput) {
                return;
            }


            const command =
                aiInput.value.trim();


            if (command === "") {
                return;
            }


            aiInput.value = "";


            executeCommand(
                command
            );

        }
    );

}


/* =========================================================
   ENTER
========================================================= */

if (aiInput) {

    aiInput.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();


                if (aiSend) {

                    aiSend.click();

                }

            }

        }
    );

}


/* =========================================================
   ATALHO ESC
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            aiIsOpen
        ) {

            closeAI();

        }

    }
);


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

showInicio();


setAiState(
    "AGUARDANDO..."
);


/* =========================================================
   TESTAR BACKEND
========================================================= */

async function testarBackend() {

    try {

        const resposta =
            await fetch(
                "/api/status"
            );


        const dados =
            await resposta.json();


        console.log(
            "Backend:",
            dados
        );


        if (
            dados.status === "online"
        ) {

            console.log(
                "J.A.R.V.I.S. conectado ao backend."
            );

        }

    }

    catch (erro) {

        console.error(
            "Erro ao conectar com o backend:",
            erro
        );

    }

}


testarBackend();


/* =========================================================
   ATUALIZAR STATUS DO BACKEND
========================================================= */

async function atualizarStatusBackend() {

    const backendStatus =
        document.getElementById(
            "backendStatus"
        );


    if (!backendStatus) {
        return;
    }


    try {

        const resposta =
            await fetch(
                "/api/status"
            );


        const dados =
            await resposta.json();


        if (
            dados.status === "online"
        ) {

            backendStatus.textContent =
                "ONLINE";

        }

        else {

            backendStatus.textContent =
                "OFFLINE";

        }

    }

    catch (erro) {

        backendStatus.textContent =
            "OFFLINE";

    }

}


atualizarStatusBackend();