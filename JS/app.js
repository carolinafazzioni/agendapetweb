/* =========================== Catálogo (fetch + 3 estados) =========================== */

async function carregarCatalogo() {
  const aviso = $('servicos-status');
  ui.mostrarEstado(aviso, 'carregando', 'Carregando serviços…');
  // Para a demonstração: abra a página com ?simularErro=servicos para provar o tratamento de falha.
  const simularErro = new URLSearchParams(location.search).get('simularErro') === 'servicos';
  try {
    const dados = await carregarServicos(simularErro ? 'data/nao-existe.json' : undefined);
    estado.servicos = dados.map((d) => new Servico(d));
  } catch (erro) {
    const mensagem = erro instanceof ErroApi && erro.tipo === 'rede' ? 'Sem conexão para carregar os serviços.' : erro.message;
    ui.mostrarEstado(aviso, 'erro', mensagem, carregarCatalogo);
    return;
  }
  ui.esconderEstado(aviso);
  ui.renderizarServicos(estado.servicos);
  ui.popularSelectServicos(estado.servicos);
  restaurarAgenda();
  atualizarTela();
}
