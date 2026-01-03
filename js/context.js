function getContext(input) {
  return {
    iv: input.iv,
    direcao: "alta",   // MVP: direção fixa
    dteValido: true,
    evento: false
  };
}

