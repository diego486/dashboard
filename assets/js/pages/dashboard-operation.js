Morris.Bar({
  element: 'operacao-chart-1',
  data: [
    { y: 'Lavemcasa-MG', a: 5, b: 1 },
    { y: 'Bilhar-MG', a: 10,  b: 2 },
    { y: 'Bilhar-SP', a: 5,  b: 0  }
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Pedidos', 'Pedidos com atraso']
});

Morris.Bar({
  element: 'operacao-chart-2',
  data: [
    { y: 'Seg', a: 10 },
    { y: 'Ter', a: 2 },
    { y: 'Qua', a: 3 },
    { y: 'Qui', a: 4 },
    { y: 'Sex', a: 6 },
    { y: 'Sab', a: 7 },
  ],
  xkey: 'y',
  ykeys: ['a'],
  labels: ['Total'],
  barColors:['#cc0033']
});

Morris.Bar({
  element: 'operacao-chart-3',
  data: [
    { y: 'Jan', a: 1000,b:10},
    { y: 'Fev', a: 1100,b:15 },
    { y: 'Mar', a: 1150,b:20 },
    { y: 'Abr', a: 1500,b:11 },
    { y: 'Mai', a: 1600,b:30 },
    { y: 'Jun', a: 1500,b:25 },
    { y: 'Jul', a: 1700,b:17 },
    { y: 'Ago', a: 1650,b:18 },
    { y: 'Set', a: 1735,b:25 },
    { y: 'Out', a: 1685,b:35 },
    { y: 'Nov', a: 1712,b:10 },
    { y: 'Dez', a: 1730,b:5 }
  ],
  xkey: 'y',
  ykeys: ['a','b'],
  labels: ['Total de Pedidos','Total de Atrasos'],
  hideover:false
  
});

Morris.Bar({
  element: 'operacao-chart-4',
  data: [
    { y: 'Seg', a: 10 },
    { y: 'Ter', a: 2 },
    { y: 'Qua', a: 3 },
    { y: 'Qui', a: 4 },
    { y: 'Sex', a: 6 },
    { y: 'Sab', a: 7 },
  ],
  xkey: 'y',
  ykeys: ['a'],
  labels: ['Total'],
   barColors:['#ccd124']

});

Morris.Bar({
  element: 'operacao-chart-5',
  data: [
    { y: 'Jan', a: 1000,b:10},
    { y: 'Fev', a: 1100,b:15 },
    { y: 'Mar', a: 1150,b:20 },
    { y: 'Abr', a: 1500,b:11 },
    { y: 'Mai', a: 1600,b:30 },
    { y: 'Jun', a: 1500,b:25 },
    { y: 'Jul', a: 1700,b:17 },
    { y: 'Ago', a: 1650,b:18 },
    { y: 'Set', a: 1735,b:25 },
    { y: 'Out', a: 1685,b:35 },
    { y: 'Nov', a: 1712,b:10 },
    { y: 'Dez', a: 1730,b:5 }
  ],
  xkey: 'y',
  ykeys: ['a','b'],
  labels: ['Total de Pedidos','Total de Atrasos'],
  hideover:false
  
});


