/*! Locastyle version: 1.1.9*/

;
Locastyle = (function() {
	Locastyle.prototype.base = {
		init: function (dom_scope) {
			this.toggleTextOnClick(dom_scope);
			this.toggleTextOnHover(dom_scope);
			this.datePickerSetup(dom_scope, this.datePickerOptions);
			this.numbersOnly(dom_scope);
			this.activateCollapseOnShown(dom_scope);
			this.deactivateCollapseOnHide(dom_scope);
			this.htmlForceClass(dom_scope);
			this.disableClass(dom_scope);
			this.classParentLiMenu(dom_scope);
			this.modalAutoFocus(dom_scope);
			this.preventDefaultOnDisabled(dom_scope);
			this.openCollapsesWithError(dom_scope);
			this.autoOpenModal(dom_scope);
			this.pathWayStepCounter(dom_scope);
			this.setListDetailSeparator();
			this.advancedSearchValueHandler(dom_scope);
			this.toggleChild(dom_scope);
			this.toggleChildValue(dom_scope);
			this.inputDataValue(dom_scope);
			this.carouselCounter(dom_scope);
			this.initCustomSelect(dom_scope);
			this.collapseSetAnchor();
			this.notificationInfoSet(dom_scope);
			this.notificationInfoHandler(dom_scope);
			this.minShortcutsCookieSetter(dom_scope);
			this.minShortcutsCookieHandler();
			this.linkPreventDefault();
			this.popover(dom_scope);
			this.labelSelectCustom();
			this.collapsedRadios(dom_scope);
		},

		popover: function(dom_scope){
			$("[rel=popover]", dom_scope).popover()
		},

		toggleTextOnClick: function(dom_scope) {
			var self = this;
			$('[data-toggle_text="click"]', dom_scope).on("click", function(e) {
				e.preventDefault();
				self.toggleText(this);
			});
		},

		toggleTextOnHover: function(dom_scope) {
			var self = this;
			$('[data-toggle_text="hover"]', dom_scope).on("mouseover", function(e) {
				e.preventDefault();
				self.toggleText(this);
			});
		},

		toggleText: function(element) {
			var text, replacementText;
			text = $(element).html();
			replacementText = $(element).data("text");
			$(element).text(replacementText).data("text", text).attr("title", replacementText);
		},

		datePickerOptions: {
			showOn: "button",
			dateFormat: "dd/mm/yy",
			monthNamesShort: ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],
			monthNames: ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],
			dayNames: ['Domingo','Segunda-feira','Ter&ccedil;a-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sabado'],
			dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
			dayNamesMin: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab']
		},

		datePickerSetup: function(dom_scope, options) {
			$('.datepicker', dom_scope).datepicker(options);
			$('.ui-datepicker-trigger', dom_scope).addClass('icon-calendar').html('');
		},

		numbersOnly: function(dom_scope) {
			$('.numbersOnly', dom_scope).keyup(function() {
				this.value = this.value.replace(/[^0-9\.]/g,'');
			});
		},

		activateCollapseOnShown: function(dom_scope) {
			var self = this;
			var self = this;
			$('.collapse', dom_scope).on('shown', function(){
				$(this).parents(".boxCollapse").addClass("active");
				$(this).find('[tabindex="0"]').attr('tabindex','3');
			});
		},

		deactivateCollapseOnHide: function(dom_scope) {
			var self = this;
			$('.collapse', dom_scope).on('hide', function(){
				$(this).parents(".boxCollapse").removeClass("active");
				$(this).find('[tabindex="3"]').attr('tabindex','0');
			});
		},

		htmlForceClass: function(dom_scope) {
			$("html", dom_scope).addClass("forceClass");
		},

		disableClass: function(dom_scope) {
			$("input[disabled], select[disabled], textarea[disabled], input[readonly], select[readonly], textarea[readonly]", dom_scope).addClass("disabled");
		},

		classParentLiMenu: function(dom_scope) {
			$("#menuPrincipal li", dom_scope).has('ul').addClass("parent");
		},

		modalAutoFocus: function(dom_scope) {
			$(".modal", dom_scope).on("shown", function () {
				$(".autoFocus", this).focus();
			});
		},

		preventDefaultOnDisabled: function(dom_scope) {
			$(".btn.disabled", dom_scope).click( function(event) {
				event.preventDefault();
			})
		},

		openCollapsesWithError: function(dom_scope) {
			$(".collapse .error", dom_scope).parents(".collapse").collapse("show");
		},

		autoOpenModal: function(dom_scope) {
			$(".modalAutoOpen", dom_scope).modal("show");
		},

		showElement: function(element) {
			$(element).removeClass("dNone");
		},

		hideElement: function(element) {
			$(element).addClass("dNone");
		},

		pathWayStepCounter: function() {
			$(".pathWay").each(function() {
				var steps = $(this).find("li").size();
				$(this).addClass('steps' + steps);
			});
		},

		setListDetailSeparator: function() {
			$(".listDetail dd").each(function(i, el){
				$(el).after("<hr class='sep'/>");
			});
		},

		advancedSearchValueHandler: function(dom_scope) {
			$(".inputAdvancedSearchField", dom_scope).each(function(i, el){
				if($(el).val() !== ""){
					$(this).parents().addClass("in");
				}
			});
		},

		toggleChild: function(dom_scope) {
			self = this;
			$(".lnkToggle", dom_scope).on("click", function(e){
				e.preventDefault();
				$(this).parents(".toggleChild").find(".itemToToggle").toggleClass("dNone");
				$(this).parents(".toggleChild").toggleClass($(this).parents(".toggleChild").data("class"));
				self.toggleChildValue(dom_scope);
				$(this).trigger($.Event('lnkToggleFinish'));
			});
		},

		toggleChildValue: function(dom_scope) {
			$(".btn.lnkToggle", dom_scope).on("click", function(e){
				var inputs = $(this).parents(".toggleChild").find('[data-value]')
				inputs.each(function(){
					$(this).val($(this).data('value'));
				});
			});
		},

		inputDataValue: function(dom_scope) {
			$.each($('textarea, input[type="url"], input[type="text"], input[type="password"], input[type="number"], input[type="tel"], input[type="email"]', dom_scope), function(i, e){
				var value = $(this).attr("value");
				$(this).attr("data-value", value);
			});
		},

		collapseAutoOpen: function(target) {
			$("[data-target=" + target + "]").click();
			$("[data-target=" + target + "]").parent().addClass("active");
		},

		collapseSetAnchor: function(){
			var collapseAnchor = window.location.hash.replace("!/", "");
			this.collapseAnchorHandler(collapseAnchor);
		},

		collapseAnchorHandler: function(anchor){
			if(anchor != ''){
				this.collapseAutoOpen(anchor);
			}
		},

		carouselCounter: function(dom_scope){
			$.each($(".carousel", dom_scope), function() {
				var items = $(".carousel-inner", this).children().size();
				$(".carouselNav i", this).html(items);
				$(this).on('slid', function() {
					$(this).find(".carouselNav b").html($(this).find(".active").index() + 1);
				});
			});
		},

		labelSelectCustom: function(){
			$(".label-for-custom2").on("click", function(){
				var target = $(this).data("target");
				$(target).select2("open");
			});
		},

		initCustomSelect: function(dom_scope){
			$("select.customSelect", dom_scope).select2();
		},

		notificationInfoSet: function(dom_scope){
			$('.lnkNoShow', dom_scope).on("click", function(){
				$.cookie( $(this).data("target") , true );
				$($(this).data("target")).remove();
			});
		},

		notificationInfoHandler: function(dom_scope){
			$.each($(".lnkNoShow", dom_scope), function() {
				var target = $(this).data("target");
				if($.cookie(target) === "true"){
					$(target).remove();
				}
			});
		},

		minShortcutsCookieSetter: function(dom_scope){
			var self = this;
			$(".minShortcuts", dom_scope).on('click', function(){
				if($.cookie("minShortcuts") === "true"){
					$.cookie("minShortcuts", false);
					self.toggleText($(this));
				}else{
					$.cookie("minShortcuts", true);
					self.toggleText($(this));
				}
				$(this).siblings(".expandBox").toggleClass("microBox");
			});
		},

		minShortcutsCookieHandler: function(){
			if($.cookie("minShortcuts") === "true"){
				self.toggleText($(".minShortcuts"));
				$(".expandBox").addClass("microBox");
			}
		},

		// look down here to cover tests
		collapsedRadios: function(dom_scope) {
			$(".collapsedRadios [data-toggle='collapse']").on("click", function(){
				$(this).parents(".collapsedRadios").find(".collapse.in").collapse("hide")
			});
		},

		collapsesWeirdBehavior: function(dom_scope) {
			$('body').on('change.collapse.data-api', '[data-toggle=hide]', function (e) {
				e.preventDefault();
				$($(this).data('target')).collapse('hide');
			});

			$('body').on('change.collapse.data-api', '[data-toggle=show]', function (e) {
				e.preventDefault();
				$($(this).data('target')).collapse('show');
			});

			$('[data-toggle=show]', dom_scope).filter(':checked').change();
		},

		linkPreventDefault: function(){
			$("a").on("click", function(e){
				if($(this).attr("href") === "" || $(this).attr("href") === "#"){
					e.preventDefault();
				}
			})
		},

		clearForms: function(dom_scope) {
			$('.clearFormBt', dom_scope).live('click', function(e){
				e.preventDefault();
				$(this).closest('.boxFiltro').find('.clearForm').not('.in').find(':input').each(function(){
					switch(this.type) {
						case 'password':
						case 'select-multiple':
						case 'select-one':
						case 'text':
						case 'textarea':
							$(this).val('');
							break;
						case 'checkbox':
							this.selected = false;
							break;
						case 'radio':
							this.checked = false;
					}
				});
			});
		}

	}

});
$(window).load(function() {
  window.locastyle = new Locastyle();

  locastyle.base.init($(document));
});

  //
  // TRACK EVENT ANALYTICS
  // $('.serviceName a').attr('onclick', "_gaq.push(['_trackEvent(category, action, opt_label, opt_value, opt_noninteraction)]);");
  $('.serviceName a').attr('onclick', "_gaq.push(['_trackEvent', 'Logo', 'Clique', 'Nome do Servico']);"); // Logo do produto
  $('.logOut').attr('onclick', "_gaq.push(['_trackEvent', 'BT_Sair', 'Clique', 'Sair do Servico']);"); // Botão sair
  $('.lnkSugestoes').attr('onclick', "_gaq.push(['_trackEvent', 'BT_Sugestoes', 'Clique', 'Sugestoes Feedbackr']);"); // Link de sugestões
  $('.infoLogin .btn-group').attr('onclick', "_gaq.push(['_trackEvent', 'Combo_Administrar', 'Clique', 'Troca de Ambiente']);"); // Combo de mudança de ambiente

  $('.minShortcuts.shortcutExpanded').attr('onclick', "_gaq.push(['_trackEvent', 'Atalhos', 'Clique', 'Minimizar']);"); // links minimizar atalhos
  $('.minShortcuts').attr('onclick', "_gaq.push(['_trackEvent', 'Atalhos', 'Clique', 'Expandir']);"); // links expandir atalhos

  $('.span12 .carousel-control.left').attr('onclick', "_gaq.push(['_trackEvent', 'Slider', 'Clique', 'Anterior']);"); // seta dica esquerda HOME
  $('.span12 .carousel-control.right').attr('onclick', "_gaq.push(['_trackEvent', 'Slider', 'Clique', 'Proximo']);"); // seta dica direita HOME
 
  $('.innerSideBox .carousel-control.left').attr('onclick', "_gaq.push(['_trackEvent', 'Slider', 'Clique', 'Anterior']);"); // seta dica esquerda
  $('.innerSideBox .carousel-control.right').attr('onclick', "_gaq.push(['_trackEvent', 'Slider', 'Clique', 'Proximo']);"); // seta dica direita

  $('.footerTop .ico-helpDesk').attr('onclick', "_gaq.push(['_trackEvent', 'Atendimento', 'Clique', 'Helpdesk']);"); // link Help Desk do Footer
  $('.footerTop .ico-Chat').attr('onclick', "_gaq.push(['_trackEvent', 'Atendimento', 'Clique', 'Chat']);"); // link Chat do Footer
  $('.footerTop .ico-Telefone').attr('onclick', "_gaq.push(['_trackEvent', 'Atendimento', 'Clique', 'Telefone']);"); // link Telefone do Footer
  $('.footerTop .lnkArrow.lnkArrowWhite').attr('onclick', "_gaq.push(['_trackEvent', 'Atendimento', 'Clique', 'VerFormasAtendimento']);"); // Link Ver Outras Formas

;
// Identificando os browsers...
if ($.browser.msie) {
  if(parseInt($.browser.version) == 9){
   $("html").addClass("ie9"); // Para IE9
  } else if (parseInt($.browser.version) == 8){
   $("html").addClass("ie8"); // Para IE8
  } else if(parseInt($.browser.version) == 7){
   $("html").addClass("ie7"); // Para IE7
  } else if(parseInt($.browser.version) == 6){
   $("html").addClass("ie6"); // Para IE6
  }
} else if ($.browser.mozilla) {
  $("html").addClass("gecko");
} else if ($.browser.webkit) {
  $("html").addClass("webkit");
}
;
$(function(){
	$.fn.passwordStrength = function(options) {
		var getPasswordStrength;
		getPasswordStrength = function(pass) {
			var easy, medium, medium_easy, passReturnStrength, strong, strong_easy;
			easy = pass.length;
			if (easy > 3) {
				easy = 3;
			}
			medium_easy = pass.replace(/[0-9]/g, "");
			medium = pass.length - medium_easy.length;
			if (medium > 4) {
				medium = 4;
			}
			strong_easy = pass.replace(/\W/g, "");
			strong = pass.length - strong_easy.length;
			if (strong > 5) {
				strong = 5;
			}
			passReturnStrength = ((easy * 10) - 30) + (medium * 10) + (strong * 10);
			if (passReturnStrength < 0) {
				passReturnStrength = 0;
			}
			if (passReturnStrength > 100) {
				passReturnStrength = 100;
			}
			return passReturnStrength;
		};
		return this.each(function() {
			var _this;
			_this = this;
			_this.opts = {};
			_this.opts = $.extend({}, $.fn.passwordStrength.defaults, options);
			_this.div = $(_this.opts.targetDiv);
			_this.defaultClass = _this.div.attr("class");
			_this.percents = (_this.opts.classes.length ? 100 / _this.opts.classes.length : 100);
			return $(this).keyup(function() {
				var largeNumber;
				if (typeof el === "undefined") {
					this.el = $(this);
				}
				largeNumber = Math.floor(getPasswordStrength(this.value) / this.percents);
				if (100 <= getPasswordStrength(this.value)) {
					largeNumber = this.opts.classes.length - 1;
				}
				return this.div.removeAttr("class").addClass(this.defaultClass).addClass(this.opts.classes[largeNumber]);
			}).next();
		});
	};

	$.fn.passwordStrength.defaults = {
		classes: Array("np10", "np20", "np30", "np40", "np50", "np60", "np70", "np80", "np90", "np100"),
		targetDiv: "#passwordStrength",
		cache: {}
	};

	$(document).ready(function() {
		return $("#user_password, #account_password").passwordStrength();
	});
})
;
$(function(){

	accessMenu();
	subMenuAccess();

	$('#menuPrincipal li > a').attr('tabindex','2');
	$('.btn, .tabs a').attr('tabindex','3');

//
// WAI-ARIA nos elementos
//

	// Menu
	$('#menuPrincipal').attr('role','navigation');
	$('#menuPrincipal li a').attr('role','menuitem');
	$('#menuPrincipal li > a').attr('tabindex','2');

	// Elementos Geral
	$('.pathWays').attr('role','navigation');
	$('#footer').attr('role','contentinfo');
	$('.alert').attr('role','alert');
	$('a.btn, .modal-header .close').attr('role','button');
	$('.boxGray').attr('role','region');
	$('.boxGray h2').attr('role','presentation');
	$('#header').attr('role','banner');
	$('.content').attr('role','main');
	$('.sidebar').attr('role','complementary');
	$('input.required').attr('aria-required','true');
	$('.lnkCoverAll').attr('tabindex','3');
	$('.lnkCoverAll .btn').attr('tabindex','0');


	// TABS
	$('.tabs').attr('role','tablist');

	$('.tabs li a').attr({
		role: 'tab',
		'aria-selected': 'false',
		tabindex : 3
	});

	$('.tabs li.active a').attr('aria-selected','true');
	$('.tabs li.active a').attr('tabindex','3');

	//collapse
	$('.boxCollapse header').each(function(){
		var title = $(this).find('h4').text();
		var target = $(this).data('target');
		$(this).prepend('<a href="#" role="button" aria-haspopup="true" aria-controls="'+target+'" aria-label="'+title+'" title="'+title+'" class="lnkCollapse" tabindex="3"></a>');
	})
	$('.collapse').find('[tabindex="3"]').attr('tabindex','0');
	$('.collapse.in').find('[tabindex="0"]').attr('tabindex','3');

	//Notificaçao
	$('.onFocus, .modal').attr('tabindex','-1').focus();

	//Ir para o conteudo
	$('.lnkContent').on('click',function(e){
		e.preventDefault();
    $('.titleContent').attr('tabindex', '-1').focus().css('outline','none');
    $('html, body').animate({
		    scrollTop: $(".titleContent").offset().top
		}, 500);
  })
  $('.accessibility a').focus(function(){
  	$(this).parent().addClass('show');
  }).blur(function(){
  	$(this).parent().removeClass('show');
  })

  // Selecao de servicos no header
  $('.dropdown-menu li:last-child a').blur(function(){
  	$(this).parents('.dropdown-menu').siblings('.dropdown-toggle').click();
  	$('.serviceName a').focus();
  })

  // Ativa visualmente as chamadas ao receber o foco do teclado
  $('.shortcutBox a').focus(function(){
  	$(this).parents('div:first').addClass('active');
  }).blur(function(){
  	$('.shortcutBox > div').removeClass('active')
  })

  // Menu com focus
  $('#menuPrincipal > ul > li > a').focus(function(){
  	$(this).parents('li').addClass('selected');
  }).blur(function(){
  	$(this).parents('li').removeClass('selected');
  })

})

function accessMenu(){
	// Menu acessivel, sendo lido apos o link de ir para o conteudo
	$('#header .limit').prepend('<nav class="menuAccess" />');
	$('[data-access]').each(function(){
		var title = $(this).attr('title');
		var  href = $(this).attr('href');
		var  text = $(this).text();
		$('.menuAccess').append('<a role="menuitem" tabindex="1" href="'  + href + '" aria-label="' + title + '" title="' + title + '">' + text + '</a>');
	})
}

// Deixa o submenu acessivel
function subMenuAccess(){
	$('#menuPrincipal .parent a').focus(function(){
	$(this).parents('.parent').addClass('focus');
	$(this).parents('.parent').find('ul').attr({
		'aria-expanded' : true,
			 'aria-hidden': false
		})
	}).blur(function(){
		$(this).parents('.parent').removeClass('focus');
		$(this).parents('.parent').find('ul').attr({
			'aria-expanded' : false,
				 'aria-hidden': true
		})
	})
}
;








