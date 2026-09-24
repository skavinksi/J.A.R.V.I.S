const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

// Permitir receber JSON
app.use(express.json());

// Servir os arquivos do J.A.R.V.I.S.
app.use(express.static(path.join(__dirname, "..")));

// ================================
// PROCESSAMENTO DOS COMANDOS
// ================================

function processarComando(comando) {

    const texto = comando
        .toLowerCase()
        .trim();

    // SAUDAÇÕES
    if (
        texto === "oi" ||
        texto === "olá" ||
        texto === "ola" ||
        texto.includes("bom dia") ||
        texto.includes("boa tarde") ||
        texto.includes("boa noite")
    ) {
        return "Olá, Skavinski. Todos os sistemas estão online.";
    }

    // STATUS
    if (
        texto.includes("status") ||
        texto === "sistema"
    ) {
        return "Todos os sistemas locais estão operacionais.";
    }

    // HORA
    if (texto.includes("hora")) {

        const agora = new Date();

        const horas = String(
            agora.getHours()
        ).padStart(2, "0");

        const minutos = String(
            agora.getMinutes()
        ).padStart(2, "0");

        return `Agora são ${horas}:${minutos}.`;
    }

    // IDENTIDADE
    if (
        texto.includes("quem é você") ||
        texto.includes("quem e você") ||
        texto.includes("quem e voce")
    ) {
        return "Eu sou o J.A.R.V.I.S., seu assistente pessoal. Ainda estou em desenvolvimento.";
    }

    // SAMSUNG
    if (texto.includes("samsung")) {
        return "Samsung identificado como a máquina principal de interface e desenvolvimento.";
    }

    // CASA / AUTOMAÇÃO
    if (
        texto.includes("casa") ||
        texto.includes("automação") ||
        texto.includes("automacao")
    ) {
        return "O módulo de automação residencial ainda está em desenvolvimento.";
    }

    // AJUDA
    if (
        texto === "ajuda" ||
        texto.includes("comandos")
    ) {
        return "Você pode perguntar sobre status, horário, Samsung, casa, automação ou perguntar quem eu sou.";
    }

    // COMANDO NÃO RECONHECIDO
    return "Comando recebido. Ainda não possuo uma função para executar esse comando.";
}


// ================================
// API DE STATUS
// ================================

app.get("/api/status", (req, res) => {

    res.json({
        sistema: "J.A.R.V.I.S.",
        status: "online"
    });

});


// ================================
// API DE COMANDOS
// ================================

app.post("/api/comando", (req, res) => {

    const comando = req.body.comando;

    console.log(
        "Comando recebido:",
        comando
    );

    const resposta =
        processarComando(comando);

    console.log(
        "Resposta:",
        resposta
    );

    res.json({

        sucesso: true,

        comando: comando,

        resposta: resposta

    });

});


// ================================
// INICIAR SERVIDOR
// ================================

app.listen(PORT, () => {

    console.log(
        `J.A.R.V.I.S. backend ativo em http://localhost:${PORT}`
    );

});