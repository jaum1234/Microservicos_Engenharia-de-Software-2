const rotas = {
    "/alugueis": () => {
        const res = requisicao("/trancas/1");

        if (res.err) return res.err;

    },
    "/trancas/{trancaId}": () => {
        if ("invalido") return {erro: "errro"};
        if ("nao responde") return {erro: "erro"};

        return {status: "em reparo", ano: "2024", modelo: "modela A"};

    },
    "/bicicltas/{bicicletaId}": () => {
        // faz alguma coisa
    }
}