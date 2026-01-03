function getInput() {
  const ativo = document.getElementById("ativo").value.trim();
  const perfil = document.getElementById("perfil").value;
  const iv = document.getElementById("iv").value;

  if (!ativo || !perfil || !iv) {
    return { erro: "Preencha todos os campos." };
  }

  return { ativo, perfil, iv };
}

