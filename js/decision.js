function decideStrategy(context, perfil) {

  if (!context.dteValido) {
    return { permitido: false, motivo: "DTE inválido" };
  }

  if (perfil === "conservador") {
    return { permitido: true, estrategia: "Spread" };
  }

  if (perfil === "moderado") {
    if (context.iv === "baixa") {
      return { permitido: true, estrategia: "Opcao Comprada" };
    } else {
      return { permitido: true, estrategia: "Spread" };
    }
  }

  return { permitido: false, motivo: "Perfil inválido" };
}

