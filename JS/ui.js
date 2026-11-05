/* ---------- Catálogo de serviços ---------- */

export function renderizarServicos(servicos) {
  const lista = $('lista-servicos');
  lista.replaceChildren();
  servicos.forEach((s) => {
    lista.append(
      criar('li', { classe: 'servico' },
        criar('div', { classe: 'servico__topo' },
          criar('strong', { classe: 'servico__nome', texto: s.nome }),
          criar('span', { classe: 'servico__preco', texto: formatarMoeda(s.preco) })),
        criar('p', { classe: 'servico__descricao', texto: s.descricao }),
        criar('p', { classe: 'servico__meta', texto: `${s.duracaoMin} min · ${s.domiciliar ? 'faz atendimento domiciliar' : 'somente na loja'}` }))
    );
  });
}

export function popularSelectServicos(servicos) {
  const select = $('servico');
  select.replaceChildren(criar('option', { texto: 'Selecione…', atributos: { value: '' } }));
  servicos.forEach((s) => {
    select.append(criar('option', { texto: `${s.nome} — ${formatarMoeda(s.preco)} (${s.duracaoMin} min)`, atributos: { value: s.id } }));
  });
}
