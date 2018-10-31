Morris.Bar({
  element: 'atendimento-chart-1',
  data: [
    { y: '29-10-2018', a: 20, b: 10, c:20, d:3 },
    { y: '30-10-2018', a: 75,  b: 65, c:20, d:2 },
    { y: '31-10-2018', a: 50,  b: 40, c:20, d:2 },
    { y: '01-11-2018', a: 75,  b: 65, c:20, d:2 },
    { y: '02-11-2018', a: 50,  b: 40, c:20, d:2 },
    { y: '03-11-2018', a: 75,  b: 65, c:20, d:2 },
    { y: '04-11-2018', a: 100, b: 90, c:20, d:2 }
  ],
  xkey: 'y',
  ykeys: ['a', 'b','c','d'],
  labels: ['1º Pedido', 'Novos Planos','Pedidos Avulso','Pedidos Cancelados'],
  barColors:['#0099FF','#FFCC66','#33CC00','#ff6666'],
  stacked:true
});


Morris.Donut({
  element: 'atendimento-chart-2',
  data: [
    {label: "Novos Clientes", value: 50},
    {label: "Novas Assinaturas", value: 17},
    {label: "Pedidos Avulso", value: 20},
    {label: "Pedidos Cancelados", value: 2}
  ],
  colors:['#0B62A4','#3980B5','#95BBD7','#cc0033']
});

Morris.Bar({
  element: 'atendimento-chart-3',
  data: [
    { y: '29-10-2018', a: 20, b: 10, c:20, d:1 },
    { y: '30-10-2018', a: 75,  b: 65, c:20, d:0 },
    { y: '31-10-2018', a: 50,  b: 40, c:20, d:0 },
  ],
  xkey: 'y',
  ykeys: ['a', 'b','c','d'],
  labels: ['1º Pedido', 'Novos Planos','Pedidos Avulso','Pedidos Cancelados'],
  barColors:['#0099FF','#FFCC66','#33CC00','#ff6666'],
});

Morris.Bar({
  element: 'bar-example',
  data: [
    { y: '2006', a: 100, b: 90 },
    { y: '2007', a: 75,  b: 65 },
    { y: '2008', a: 50,  b: 40 },
    { y: '2009', a: 75,  b: 65 },
    { y: '2010', a: 50,  b: 40 },
    { y: '2011', a: 75,  b: 65 },
    { y: '2012', a: 100, b: 90 }
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Series A', 'Series B'],
});

