Morris.Line({ //Linha 
  element: 'marketing-chart-1',
  data: [ 
    {week:'DOM', "sale":'13',"sale2":'5',"sale3":'10'},          
    {week:'SEG', "sale":'5',"sale2":'4',"sale3":'15'},
    {week:'TER', "sale":'10',"sale2":'10',"sale3":'20'},
    {week:'QUA', "sale":'15',"sale2":'10',"sale3":'25'},
    {week:'QUI', "sale":'6',"sale2":'12',"sale3":'10'},
    {week:'SEX', "sale":'12',"sale2":'18',"sale3":'5'},
    {week:'SAB', "sale":'20',"sale2":'13',"sale3":'10'}
    
   ],
   xkey: 'week', 
   ykeys: ['sale','sale2','sale3'],
   labels: ['Cupom Outubro Rosa', 'Cupom Celso Cardoso','Cupom Dia das Crianças'],
   parseTime:false,
   hideHover:false,
   lineWidth:'2px',
   stacked: true

});


Morris.Bar({ //barra 
  element: 'marketing-chart-2',
  data: [
    { y: '28-10-2018', a: 100, b: 90 },
    { y: '29-10-2018', a: 75,  b: 65 },
    { y: '30-10-2018', a: 50,  b: 40 },
    { y: '31-10-2018', a: 75,  b: 65 },
    { y: '01-11-2018', a: 50,  b: 40 },
    { y: '02-11-2018', a: 75,  b: 65 },
    { y: '03-11-2018', a: 100, b: 90 }
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['SMS Enviados', 'Cupons Utilizados'],
  xLabels: "day"
});



