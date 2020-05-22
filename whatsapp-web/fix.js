/**
 * Busca na tela o texto de atualização em inglês ou pt-BR
 * Searches on screen the update text in english or brazilian portuguese
 */
if (
  document.body.innerText
    .replace(/\n/g, " ")
    .search(
      /(o whatsapp funciona com|WhatsApp works with).*(para utilizar o whatsapp|To use WhatsApp).*(atualize|update)/i
    ) !== -1
)
  navigator.serviceWorker.getRegistration().then(function (r) {
    r.unregister();
    document.location.reload();
  });
