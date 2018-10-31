if (typeof prisma == 'undefined') { prisma = new Object(); }
if (typeof prisma.cookie == 'undefined') { prisma.cookie = new Object(); }
if (typeof prisma.general == 'undefined') { prisma.general = new Object(); }
if (typeof prisma.form == 'undefined') { prisma.form = new Object(); }

raw_login = null;

prisma.form = {

	inputErrors: function(collection_id){
		
		$('input').each(
			function() {
				//$(this).parent('.custom-input').removeClass('error');
				$(this).removeClass('error_form');
			}
		);
		
		$('select').each(
			function() {
				$(this).parent('.custom-select').removeClass('error');
				$(this).parent('.select-devem').removeClass('error');

				if ($(this).hasClass('chosen-select')) {
					$(this).parent().find('.select2-choice').first().removeClass('error');
				}
			}
		);
		
		$('textarea').each(
			function() {
				$(this).parent('.custom-textarea').removeClass('error');
				$(this).parent('.textarea-devem').removeClass('error');
			}
		);
		
		var i;
		for(i=0; i < collection_id.length; i++)
		{
			if($('#' + collection_id[i]).is("input"))
			{
				$('#' + collection_id[i]).addClass('error_form');
				$('#' + collection_id[i]).addClass('error_form');
			}
			
			if($('#' + collection_id[i]).is("select"))
			{
				$('#' + collection_id[i]).parent('.custom-select').addClass('error');
				$('#' + collection_id[i]).parent('.select-devem').addClass('error');

				if ($('#' + collection_id[i]).hasClass('chosen-select')) {
					$('#' + collection_id[i]).parent().find('.select2-choice').first().addClass('error');
				}
			}
			
			if($('#' + collection_id[i]).is("textarea"))
			{
				$('#' + collection_id[i]).parent('.custom-textarea').addClass('error');
				$('#' + collection_id[i]).parent('.textarea-devem').addClass('error');
			}
		}
		
		$('#' + collection_id[0]).focus();

	}

};

prisma.cookie = {

  set: function(cname, cvalue, exdays) {
     
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/; ";

  },

  get: function(cname) {
      
    var name = cname + "=";
    var ca = document.cookie.split(';');
    
    for(var i=0; i<ca.length; i++) {
        
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1);
      if (c.indexOf(name) == 0) return c.substring(name.length, c.length);

    }

    return "";
  },

  check: function(cname) {
      
    var name = cname + "=";
    var ca = document.cookie.split(';');
    
    for(var i=0; i<ca.length; i++) {
        
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1);
      if (c.indexOf(name) == 0) return true;

    }

    return false;
  },

  checkAndGet: function(cname) {

    var validate = prisma.cookie.check(cname);

    if(!validate)
      return false;

    return prisma.cookie.get(cname);

  },

  checkAndSet: function(cname, cvalue, exdays) {

    if(typeof exdays == 'undefined')
      var exdays = 365;

      var validate = devem.core.Cookie.check(cname);

      if(typeof cvalue != 'undefined')
              devem.core.Cookie.set(cname, cvalue, exdays);

        return validate;

  }, 

  destroy: function(cname) {
	document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
  }

};


prisma.general = {

	url: function(params){
		return location.origin+'/'+params;
	},

	init: function(){

		$('.bt_back').click(function(){

			window.history.back();

		});

		$('form').submit(function(){
			return false;
		});

		if($("#bt-login-validate").length > 0)
			$('#bt-login-validate').click(prisma.general.validateLogin);

		if($("#bt-logout").length > 0)
			$('#bt-logout').click(prisma.general.logout);

	},

	genCode: function(){

        var caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        var retorno = "";
        var rand;

        var len = caracteres.length;

        for (n = 1; n <= 8; n++)
        {

            rand = Math.round(Math.random() * (len - 1) + 1);
            retorno += caracteres[rand - 1];

        }

        return retorno;

	},

	validateLogin: function(){

		var validate = true;
		var fields = [];

		if($("#login_email").val().length < 6){
			validate = false;
			fields.push('login_email');
		}

		if($("#login_pwd").val().length < 6){
			validate = false;
			fields.push('login_pwd');
		}

		if(validate !== false){
			prisma.general.sendLogin();
		}else{
			prisma.form.inputErrors(fields);
			$(".alert-error p").text('*** Preencha todos os campos e não esqueça de selecionar a nota (estrelas).').parent().show();
		}

	},

	sendLogin: function(){

		var code = prisma.general.genCode();

		$.post(prisma.general.url('login/validate'),{email: $('#login_email').val(), pwd: $("#login_pwd").val(), codeauth: code},function(data){

			if(data !== false){

				prisma.cookie.set('prisma-code',code);
				prisma.cookie.set('prisma-id-user',data.idUser);
				prisma.cookie.set('prisma-name-user',data.name + ' ' + data.lastname);
				prisma.cookie.set('prisma-image-user',data.image);
				prisma.cookie.set('prisma-type-user',data.type);

				window.location.reload();

			}else{
        		prisma.form.inputErrors(['login_senha','login_email']);
				$(".alert-error-login p").text('*** Verifique seus dados de acesso.').parent().show();
			}

		},'json');

	},

	logout: function(){
		prisma.cookie.destroy('prisma-code');
		prisma.cookie.destroy('prisma-id-user');
		prisma.cookie.destroy('prisma-name-user');
		prisma.cookie.destroy('prisma-image-user');
		prisma.cookie.destroy('prisma-type-user');

		window.location.reload();
	},

    loader: function(){
    
    }


};

$(document).ready(prisma.general.init);