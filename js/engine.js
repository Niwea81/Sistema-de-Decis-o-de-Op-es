function executar() {
  const resultado = document.getElementById("resultado");
  resultado.textContent = "";

  const input = getInput();
  if (input.erro) {
    resultado.textContent = input.erro;
    return;
  }

  const contexto = getContext(input);
  const decisao = decideStrategy(contexto, input.perfil);

  if (!decisao.permitido) {
    resultado.textContent = decisao.motivo;
    return;
  }

  const parametros = getMoneyness(decisao.estrategia, input.perfil);

  const output = {
    ativo: input.ativo,
    perfil: input.perfil,
    contexto: `Direção ${contexto.direcao} + IV ${contexto.iv}`,
    estrategia: decisao.estrategia,
    parametros
  };

  resultado.textContent = JSON.stringify(output, null, 2);
}

