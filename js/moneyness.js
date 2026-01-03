function getMoneyness(estrategia, perfil) {

  if (estrategia === "Spread") {
    return {
      compra: "ATM",
      venda: "OTM",
      dte: "30–45 dias"
    };
  }

  if (estrategia === "Opcao Comprada") {
    return {
      compra: "ATM ou ITM leve",
      dte: "30–45 dias"
    };
  }

  return {};
}

