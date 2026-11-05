/* ---------- Servidor local: catálogo de serviços ---------- */
export const carregarServicos = (url = 'data/servicos.json') => buscarJSON(url, 'Não foi possível carregar os serviços');

/* Dados de exemplo para demonstração. */
export const carregarAgendaExemplo = () => buscarJSON('data/agenda-exemplo.json', 'Não foi possível carregar os dados de exemplo');