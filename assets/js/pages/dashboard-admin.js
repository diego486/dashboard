

Morris.Line({ //Linha 
  element: 'admin-chart-3',
  data: [ 
    {week:'SEM 1', "meta":'3000', "alcancado":'800'},          
    {week:'SEM 2', "meta":'3000', "alcancado":'1850'},
    {week:'SEM 3', "meta":'3000', "alcancado":'2500'},
    {week:'SEM 4', "meta":'3000', "alcancado":'3100'}
    
   ],
   xkey: 'week', 
   ykeys: ['meta','alcancado'],
   labels: ['Meta','Pedidos'],
   parseTime:false,
   hideHover:true,
   lineWidth:'2px',
   stacked: true     
});

Morris.Bar({
  element: 'admin-chart-4',
  data: [
    { y: 'Jan', a: 100.000},
    { y: 'Fev', a: 175.000 },
    { y: 'Mar', a: 150.000 },
    { y: 'Abr', a: 175.000 },
    { y: 'Mai', a: 120.000 },
    { y: 'Jun', a: 150.000 },
    { y: 'Jul', a: 100.000 },
    { y: 'Ago', a: 110.000 },
    { y: 'Set', a: 125.000 },
    { y: 'Out', a: 170.000 },
    { y: 'Nov', a: 189.000 },
    { y: 'Dez', a: 210.000 },
  ],
  xkey: 'y',
  ykeys: ['a'],
  hideHover:true,
  labels: ['Total']
});


Morris.Area({
  element: 'admin-chart-5',
  data: [
    { week: 'Jan', "novocliente": '50',"novassinatura":'10'},
    { week: 'Fev',  "novocliente": '30',"novassinatura":'20' },
    { week: 'Mar',  "novocliente": '40',"novassinatura":'30'},
    { week: 'Abr',  "novocliente": '10',"novassinatura":'40'},
    { week: 'Mai',  "novocliente": '60',"novassinatura":'45'},
    { week: 'Jun',  "novocliente": '45',"novassinatura":'55'},
    { week: 'Jul',  "novocliente": '55',"novassinatura":'40'},
    { week: 'Ago',  "novocliente": '17',"novassinatura":'30'},
    { week: 'Set',  "novocliente": '15',"novassinatura":'25'},
    { week: 'Out', "novocliente": '25',"novassinatura":'55'},
    { week: 'Nov', "novocliente": '30',"novassinatura":'20'},
    { week: 'Dez', "novocliente": '35',"novassinatura":'30'},
  ],
  xkey: 'week',
  ykeys: ['novocliente','novassinatura'],
  labels: ['Novo Cliente', 'Nova Assinatura'],
  fillOpacity: 0.6,
  behaveLikeLine:true,
  parseTime:false,
  hideHover:true,
  lineWidth:2,
  
});

Morris.Line({ //Linha 
  element: 'admin-chart-6',
  data: [ 
    {week:'SEM 1', "meta":'3000', "alcancado":'800'},          
    {week:'SEM 2', "meta":'3000', "alcancado":'1850'},
    {week:'SEM 3', "meta":'3000', "alcancado":'2500'},
    {week:'SEM 4', "meta":'3000', "alcancado":'3100'}
    
   ],
   xkey: 'week', 
   ykeys: ['meta','alcancado'],
   labels: ['Meta','Pedidos'],
   parseTime:false,
   hideHover:true,
   lineWidth:'2px',
   stacked: true     
});






