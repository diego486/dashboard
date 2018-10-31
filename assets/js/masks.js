
    $(document).ready(function () { 
        var $documentcpf = $("#document-cpf");
        $documentcpf.mask('000.000.000-00');
    });
    $(document).ready(function () { 
        var $documentcnpj = $("#document-cnpj");
        $documentcnpj.mask('00.000.000/0000-00');
    });
    $(document).ready(function () { 
        var $phonenumber = $("#customer-phonenumber");
        $phonenumber.mask('(00) 0000-0000');
    });
    $(document).ready(function () { 
        var $phonenumber = $("#merchant-phonenumber");
        $phonenumber.mask('(00) 0000-0000');
    });
     $(document).ready(function () { 
        var $phonenumber = $("#merchant-phonenumber-2");
        $phonenumber.mask('(00) 0000-0000');
    });
    $(document).ready(function () { 
        var $cellnumber = $("#customer-cellphone");
        $cellnumber.mask('(00) 00000-0000');
    });
    $(document).ready(function () { 
        var $cellnumber = $("#merchant-cellphone");
        $cellnumber.mask('(00) 00000-0000');
    });
    $(document).ready(function () { 
        var $cellnumber = $("#merchant-cellphone-2");
        $cellnumber.mask('(00) 00000-0000');
    });
    $(document).ready(function () { 
        var $cellnumber = $("#driver-cellphone");
        $cellnumber.mask('(00) 00000-0000');
    });
     $(document).ready(function () { 
        var $zipcode = $("#customer-zipcode");
        $zipcode.mask('00000-000');
    });
    $(document).ready(function () { 
        var $zipcode = $("#merchant-zipcode");
        $zipcode.mask('00000-000');
    });
    $(document).ready(function () { 
        var $credicard = $("#creditcard");
        $creditcard.mask('0000.0000.0000.0000');
    });

    $('#customer-first-name').on('input', function(e) {
    if(/[0-9]/g.test(this.value)){
      this.value= this.value.substr(0,(this.value.length-1));
    }
    });
    $('#customer-last-name').on('input', function(e) {
    if(/[0-9]/g.test(this.value)){
      this.value= this.value.substr(0,(this.value.length-1));
    }
    });
    $('#merchant-contact').on('input', function(e) {
    if(/[0-9]/g.test(this.value)){
      this.value= this.value.substr(0,(this.value.length-1));
    }
    });
    $('#merchant-name-1').on('input', function(e) {
    if(/[0-9]/g.test(this.value)){
      this.value= this.value.substr(0,(this.value.length-1));
    }
    });
    $('#merchant-document').on('input', function(e) {
    if(/[a-z]/g.test(this.value)){
      this.value= this.value.substr(0,(this.value.length-1));
    }
    });
    $('#merchant-contact').on('input', function(e) {
    if(/[0-9]/g.test(this.value)){
      this.value= this.value.substr(0,(this.value.length-1));
    }
    });
    $('#merchant-contact-1').on('input', function(e) {
    if(/[0-9]/g.test(this.value)){
      this.value= this.value.substr(0,(this.value.length-1));
    }
    });
    $('#merchant-contact-2').on('input', function(e) {
    if(/[0-9]/g.test(this.value)){
      this.value= this.value.substr(0,(this.value.length-1));
    }
    });
    $('#driver-first-name').on('input', function(e) {
    if(/[0-9]/g.test(this.value)){
      this.value= this.value.substr(0,(this.value.length-1));
    }
    });
    $('#driver-last-name').on('input', function(e) {
    if(/[0-9]/g.test(this.value)){
      this.value= this.value.substr(0,(this.value.length-1));
    }
    });
    $('#document-cpf').on('input', function(e) {
    if(/[a-z]/g.test(this.value)){
      this.value= this.value.substr(0,(this.value.length-1));
    }
    });
      $('#document-cnpj').on('input', function(e) {
    if(/[a-z]/g.test(this.value)){
      this.value= this.value.substr(0,(this.value.length-1));
    }
    });
    $('#client-phonenumber').on('input', function(e) {
    if(/[a-z]/g.test(this.value)){
      this.value= this.value.substr(0,(this.value.length-1));
    }
    });
    $('#merchant-city').on('input', function(e) {
    if(/[0-9]/g.test(this.value)){
      this.value= this.value.substr(0,(this.value.length-1));
    }
    });
    $('#merchant-address-neighborhood').on('input', function(e) {
    if(/[0-9]/g.test(this.value)){
      this.value= this.value.substr(0,(this.value.length-1));
    }
    });
    $('#merchant-phonenumber').on('input', function(e) {
    if(/[a-z]/g.test(this.value)){
      this.value= this.value.substr(0,(this.value.length-1));
    }
    });
    $('#client-cellphone').on('input', function(e) {
    if(/[a-z]/g.test(this.value)){
      this.value= this.value.substr(0,(this.value.length-1));
    }
    });
    $('#merchant-cellphone').on('input', function(e) {
    if(/[a-z]/g.test(this.value)){
      this.value= this.value.substr(0,(this.value.length-1));
    }
    });
    $('#driver-cellphone').on('input', function(e) {
    if(/[a-z]/g.test(this.value)){
      this.value= this.value.substr(0,(this.value.length-1));
    }
    });
    $('#client-zipcode').on('input', function(e) {
    if(/[a-z]/g.test(this.value)){
      this.value= this.value.substr(0,(this.value.length-1));
    }
    });
    $('#merchant-zipcode').on('input', function(e) {
    if(/[a-z]/g.test(this.value)){
      this.value= this.value.substr(0,(this.value.length-1));
    }
    });
    $('#credicard').on('input', function(e) {
    if(/[a-z]/g.test(this.value)){
      this.value= this.value.substr(0,(this.value.length-1));
    }
    });
    $('#customer-address-number').on('input', function(e) {
    if(/[a-z]/g.test(this.value)){
      this.value= this.value.substr(0,(this.value.length-1));
    }
    });
    $('#merchant-address-number').on('input', function(e) {
    if(/[a-z]/g.test(this.value)){
      this.value= this.value.substr(0,(this.value.length-1));
    }
    });




merchant-address-neighborhood