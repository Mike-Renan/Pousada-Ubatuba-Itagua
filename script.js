document.getElementById('reservaForm').addEventListener('submit', function(evento) {
    // Impede o recarregamento automático da página ao enviar formulário
    evento.preventDefault();

    // Capturando os inputs preenchidos pelo cliente
    const entradaStr = document.getElementById('checkin').value;
    const saidaStr = document.getElementById('checkout').value;
    const quartoEscolhido = document.getElementById('quarto').value;
    const boxFeedback = document.getElementById('mensagemFeedback');

    // Convertendo as entradas de texto em instâncias de objetos Date do JavaScript
    const dataEntrada = new Date(entradaStr + "T00:00:00");
    const dataSaida = new Date(saidaStr + "T00:00:00");
    const dataHoje = new Date();
    dataHoje.setHours(0,0,0,0); // Limpa as horas para validar apenas o calendário civil

    // Validação 1: Evitar que escolham dias que já passaram
    if (dataEntrada < dataHoje) {
        boxFeedback.className = "feedback-box erro";
        boxFeedback.innerHTML = "<i class='fas fa-exclamation-triangle'></i> Período Inválido. Selecione uma data de entrada que não esteja no passado.";
        return;
    }

    // Validação 2: Evitar que a saída seja igual ou anterior à entrada
    if (dataSaida <= dataEntrada) {
        boxFeedback.className = "feedback-box erro";
        boxFeedback.innerHTML = "<i class='fas fa-exclamation-triangle'></i> Erro nas datas. A data de saída precisa ser maior que o dia de entrada.";
        return;
    }

    // --- SE TUDO ESTIVER CORRETO (ENVIO DIRETO PARA O WHATSAPP) ---

    // Formatador nativo de datas para o padrão de leitura local brasileiro (DD/MM/AAAA)
    const formatadorBR = (objetoData) => {
        return objetoData.toLocaleDateString('pt-BR');
    };

    // Montando o link direto de conversão para o WhatsApp da Pousada Ubatuba Itaguá
    const numeroWhats = "5511998803853";
    const textoMensagem = encodeURIComponent(
        `Olá! Gostaria de fazer uma reserva na Pousada Ubatuba Itaguá. \n\n🏨 Acomodação: ${quartoEscolhido} \n📅 Data de Entrada (Check-in): ${formatadorBR(dataEntrada)} \n📅 Data de Saída (Check-out): ${formatadorBR(dataSaida)} \n\nPor favor, verifique os valores e a disponibilidade!`
    );
    const urlLinkWhatsApp = "https://wa.me/" + numeroWhats + "?text=" + textoMensagem;


    // Exibe uma rápida mensagem de sucesso na tela antes de redirecionar
    boxFeedback.className = "feedback-box sucesso";
    boxFeedback.innerHTML = "<i class='fas fa-spinner fa-spin'></i> Tudo pronto! Redirecionando para o WhatsApp da pousada...";

    // Armazenando em cache local (LocalStorage) para controle interno
    const historicoDeSimulacao = {
        quarto: quartoEscolhido,
        checkin: entradaStr,
        checkout: saidaStr,
        criadoEm: new Date().toLocaleString('pt-BR')
    };
    localStorage.setItem('ultima_simulacao_itagua', JSON.stringify(historicoDeSimulacao));

    // Redireciona o cliente IMEDIATAMENTE para o WhatsApp abrindo em uma nova aba
    setTimeout(() => {
        window.open(urlLinkWhatsApp, '_blank');
    }, 1000); // Aguarda 1 segundo apenas para o cliente ler o aviso de redirecionamento
});
