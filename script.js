document.getElementById('bookingForm').addEventListener('submit', function(event) {
    // Impede a página de recarregar ao enviar o formulário
    event.preventDefault(); 

    // Captura os valores inseridos pelo usuário
    const checkinValue = document.getElementById('checkin').value;
    const checkoutValue = document.getElementById('checkout').value;
    const suiteSelecionada = document.getElementById('suite').value;
    const feedback = document.getElementById('feedbackMessage');

    // Transforma as datas de string para objetos de Data para fazer cálculos
    const dataCheckin = new Date(checkinValue + "T00:00:00");
    const dataCheckout = new Date(checkoutValue + "T00:00:00");
    const hoje = new Date();
    hoje.setHours(0,0,0,0); // Zera as horas para comparar apenas os dias

    // --- REGRAS DE NEGÓCIO ---

    // 1. Validar se a data de check-in está no passado
    if (dataCheckin < hoje) {
        feedback.className = "mensagem erro";
        feedback.innerHTML = "Data inválida. Por favor, escolha uma data futura.";
        return;
    }

    // 2. Validar se o check-out é menor ou igual ao check-in
    if (dataCheckout <= dataCheckin) {
        feedback.className = "mensagem erro";
        feedback.innerHTML = "A data de saída deve ser posterior à data de entrada.";
        return;
    }

    // --- SE TUDO ESTIVER CORRETO (SUCESSO) ---

    // Formata as datas para exibição visual amigável (padrão brasileiro)
    const formatarData = (data) => {
        return data.toLocaleDateString('pt-BR');
    };

    // Exibe a mensagem de sucesso na tela
    feedback.className = "mensagem sucesso";
    feedback.innerHTML = `Sucesso! A <strong>${suiteSelecionada}</strong> está disponível na Pousada Ubatuba de Itaguá para o período de ${formatarData(dataCheckin)} até ${formatarData(dataCheckout)}.`;

    // Simula o salvamento dos dados salvando no localStorage do navegador
    const dadosReserva = {
        suite: suiteSelecionada,
        entrada: checkinValue,
        saida: checkoutValue,
        dataSolicitacao: new Date().toISOString()
            };
            localStorage.setItem('reserva_pousada', JSON.stringify(dadosReserva));

            // Limpa o formulário após o sucesso
            document.getElementById('bookingForm').reset();
            
            const numeroWhats = "5512992477869";
            const mensagemWhats = `Olá! Gostaria de reservar a ${suiteSelecionada} na Pousada Ubatuba de Itaguá para o período de ${formatarData(dataCheckin)} até ${formatarData(dataCheckout)}.`;
            const urlWhats = `https://api.whatsapp.com/send?phone=${numeroWhats}&text=${encodeURIComponent(mensagemWhats)}`;
        });
