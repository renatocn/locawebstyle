/*! Locastyle version: 1.1.9*/
function accessMenu(){$("#header .limit").prepend('<nav class="menuAccess" />'),$("[data-access]").each(function(){var e=$(this).attr("title"),t=$(this).attr("href"),n=$(this).text();$(".menuAccess").append('<a role="menuitem" tabindex="1" href="'+t+'" aria-label="'+e+'" title="'+e+'">'+n+"</a>")})}function subMenuAccess(){$("#menuPrincipal .parent a").focus(function(){$(this).parents(".parent").addClass("focus"),$(this).parents(".parent").find("ul").attr({"aria-expanded":!0,"aria-hidden":!1})}).blur(function(){$(this).parents(".parent").removeClass("focus"),$(this).parents(".parent").find("ul").attr({"aria-expanded":!1,"aria-hidden":!0})})}Locastyle=function(){Locastyle.prototype.base={init:function(e){this.toggleTextOnClick(e),this.toggleTextOnHover(e),this.datePickerSetup(e,this.datePickerOptions),this.numbersOnly(e),this.activateCollapseOnShown(e),this.deactivateCollapseOnHide(e),this.htmlForceClass(e),this.disableClass(e),this.classParentLiMenu(e),this.modalAutoFocus(e),this.preventDefaultOnDisabled(e),this.openCollapsesWithError(e),this.autoOpenModal(e),this.pathWayStepCounter(e),this.setListDetailSeparator(),this.advancedSearchValueHandler(e),this.toggleChild(e),this.toggleChildValue(e),this.inputDataValue(e),this.carouselCounter(e),this.initCustomSelect(e),this.collapseSetAnchor(),this.notificationInfoSet(e),this.notificationInfoHandler(e),this.minShortcutsCookieSetter(e),this.minShortcutsCookieHandler(),this.linkPreventDefault(),this.popover(e),this.labelSelectCustom(),this.collapsedRadios(e)},popover:function(e){$("[rel=popover]",e).popover()},toggleTextOnClick:function(e){var t=this;$('[data-toggle_text="click"]',e).on("click",function(e){e.preventDefault(),t.toggleText(this)})},toggleTextOnHover:function(e){var t=this;$('[data-toggle_text="hover"]',e).on("mouseover",function(e){e.preventDefault(),t.toggleText(this)})},toggleText:function(e){var t,n;t=$(e).html(),n=$(e).data("text"),$(e).text(n).data("text",t).attr("title",n)},datePickerOptions:{showOn:"button",dateFormat:"dd/mm/yy",monthNamesShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],monthNames:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],dayNames:["Domingo","Segunda-feira","Ter&ccedil;a-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sabado"],dayNamesShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],dayNamesMin:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"]},datePickerSetup:function(e,t){$(".datepicker",e).datepicker(t),$(".ui-datepicker-trigger",e).addClass("icon-calendar").html("")},numbersOnly:function(e){$(".numbersOnly",e).keyup(function(){this.value=this.value.replace(/[^0-9\.]/g,"")})},activateCollapseOnShown:function(e){var t=this,t=this;$(".collapse",e).on("shown",function(){$(this).parents(".boxCollapse").addClass("active"),$(this).find('[tabindex="0"]').attr("tabindex","3")})},deactivateCollapseOnHide:function(e){var t=this;$(".collapse",e).on("hide",function(){$(this).parents(".boxCollapse").removeClass("active"),$(this).find('[tabindex="3"]').attr("tabindex","0")})},htmlForceClass:function(e){$("html",e).addClass("forceClass")},disableClass:function(e){$("input[disabled], select[disabled], textarea[disabled], input[readonly], select[readonly], textarea[readonly]",e).addClass("disabled")},classParentLiMenu:function(e){$("#menuPrincipal li",e).has("ul").addClass("parent")},modalAutoFocus:function(e){$(".modal",e).on("shown",function(){$(".autoFocus",this).focus()})},preventDefaultOnDisabled:function(e){$(".btn.disabled",e).click(function(e){e.preventDefault()})},openCollapsesWithError:function(e){$(".collapse .error",e).parents(".collapse").collapse("show")},autoOpenModal:function(e){$(".modalAutoOpen",e).modal("show")},showElement:function(e){$(e).removeClass("dNone")},hideElement:function(e){$(e).addClass("dNone")},pathWayStepCounter:function(){$(".pathWay").each(function(){var e=$(this).find("li").size();$(this).addClass("steps"+e)})},setListDetailSeparator:function(){$(".listDetail dd").each(function(e,t){$(t).after("<hr class='sep'/>")})},advancedSearchValueHandler:function(e){$(".inputAdvancedSearchField",e).each(function(e,t){$(t).val()!==""&&$(this).parents().addClass("in")})},toggleChild:function(e){self=this,$(".lnkToggle",e).on("click",function(t){t.preventDefault(),$(this).parents(".toggleChild").find(".itemToToggle").toggleClass("dNone"),$(this).parents(".toggleChild").toggleClass($(this).parents(".toggleChild").data("class")),self.toggleChildValue(e),$(this).trigger($.Event("lnkToggleFinish"))})},toggleChildValue:function(e){$(".btn.lnkToggle",e).on("click",function(e){var t=$(this).parents(".toggleChild").find("[data-value]");t.each(function(){$(this).val($(this).data("value"))})})},inputDataValue:function(e){$.each($('textarea, input[type="url"], input[type="text"], input[type="password"], input[type="number"], input[type="tel"], input[type="email"]',e),function(e,t){var n=$(this).attr("value");$(this).attr("data-value",n)})},collapseAutoOpen:function(e){$("[data-target="+e+"]").click(),$("[data-target="+e+"]").parent().addClass("active")},collapseSetAnchor:function(){var e=window.location.hash.replace("!/","");this.collapseAnchorHandler(e)},collapseAnchorHandler:function(e){e!=""&&this.collapseAutoOpen(e)},carouselCounter:function(e){$.each($(".carousel",e),function(){var e=$(".carousel-inner",this).children().size();$(".carouselNav i",this).html(e),$(this).on("slid",function(){$(this).find(".carouselNav b").html($(this).find(".active").index()+1)})})},labelSelectCustom:function(){$(".label-for-custom2").on("click",function(){var e=$(this).data("target");$(e).select2("open")})},initCustomSelect:function(e){$("select.customSelect",e).select2()},notificationInfoSet:function(e){$(".lnkNoShow",e).on("click",function(){$.cookie($(this).data("target"),!0),$($(this).data("target")).remove()})},notificationInfoHandler:function(e){$.each($(".lnkNoShow",e),function(){var e=$(this).data("target");$.cookie(e)==="true"&&$(e).remove()})},minShortcutsCookieSetter:function(e){var t=this;$(".minShortcuts",e).on("click",function(){$.cookie("minShortcuts")==="true"?($.cookie("minShortcuts",!1),t.toggleText($(this))):($.cookie("minShortcuts",!0),t.toggleText($(this))),$(this).siblings(".expandBox").toggleClass("microBox")})},minShortcutsCookieHandler:function(){$.cookie("minShortcuts")==="true"&&(self.toggleText($(".minShortcuts")),$(".expandBox").addClass("microBox"))},collapsedRadios:function(e){$(".collapsedRadios [data-toggle='collapse']").on("click",function(){$(this).parents(".collapsedRadios").find(".collapse.in").collapse("hide")})},collapsesWeirdBehavior:function(e){$("body").on("change.collapse.data-api","[data-toggle=hide]",function(e){e.preventDefault(),$($(this).data("target")).collapse("hide")}),$("body").on("change.collapse.data-api","[data-toggle=show]",function(e){e.preventDefault(),$($(this).data("target")).collapse("show")}),$("[data-toggle=show]",e).filter(":checked").change()},linkPreventDefault:function(){$("a").on("click",function(e){($(this).attr("href")===""||$(this).attr("href")==="#")&&e.preventDefault()})},clearForms:function(e){$(".clearFormBt",e).live("click",function(e){e.preventDefault(),$(this).closest(".boxFiltro").find(".clearForm").not(".in").find(":input").each(function(){switch(this.type){case"password":case"select-multiple":case"select-one":case"text":case"textarea":$(this).val("");break;case"checkbox":this.selected=!1;break;case"radio":this.checked=!1}})})}}},$(window).load(function(){window.locastyle=new Locastyle,locastyle.base.init($(document))}),$(".serviceName a").attr("onclick","_gaq.push(['_trackEvent', 'Logo', 'Clique', 'Nome do Servico']);"),$(".logOut").attr("onclick","_gaq.push(['_trackEvent', 'BT_Sair', 'Clique', 'Sair do Servico']);"),$(".lnkSugestoes").attr("onclick","_gaq.push(['_trackEvent', 'BT_Sugestoes', 'Clique', 'Sugestoes Feedbackr']);"),$(".infoLogin .btn-group").attr("onclick","_gaq.push(['_trackEvent', 'Combo_Administrar', 'Clique', 'Troca de Ambiente']);"),$(".minShortcuts.shortcutExpanded").attr("onclick","_gaq.push(['_trackEvent', 'Atalhos', 'Clique', 'Minimizar']);"),$(".minShortcuts").attr("onclick","_gaq.push(['_trackEvent', 'Atalhos', 'Clique', 'Expandir']);"),$(".span12 .carousel-control.left").attr("onclick","_gaq.push(['_trackEvent', 'Slider', 'Clique', 'Anterior']);"),$(".span12 .carousel-control.right").attr("onclick","_gaq.push(['_trackEvent', 'Slider', 'Clique', 'Proximo']);"),$(".innerSideBox .carousel-control.left").attr("onclick","_gaq.push(['_trackEvent', 'Slider', 'Clique', 'Anterior']);"),$(".innerSideBox .carousel-control.right").attr("onclick","_gaq.push(['_trackEvent', 'Slider', 'Clique', 'Proximo']);"),$(".footerTop .ico-helpDesk").attr("onclick","_gaq.push(['_trackEvent', 'Atendimento', 'Clique', 'Helpdesk']);"),$(".footerTop .ico-Chat").attr("onclick","_gaq.push(['_trackEvent', 'Atendimento', 'Clique', 'Chat']);"),$(".footerTop .ico-Telefone").attr("onclick","_gaq.push(['_trackEvent', 'Atendimento', 'Clique', 'Telefone']);"),$(".footerTop .lnkArrow.lnkArrowWhite").attr("onclick","_gaq.push(['_trackEvent', 'Atendimento', 'Clique', 'VerFormasAtendimento']);"),$.browser.msie?parseInt($.browser.version)==9?$("html").addClass("ie9"):parseInt($.browser.version)==8?$("html").addClass("ie8"):parseInt($.browser.version)==7?$("html").addClass("ie7"):parseInt($.browser.version)==6&&$("html").addClass("ie6"):$.browser.mozilla?$("html").addClass("gecko"):$.browser.webkit&&$("html").addClass("webkit"),$(function(){$.fn.passwordStrength=function(e){var t;return t=function(e){var t,n,r,i,s,o;return t=e.length,t>3&&(t=3),r=e.replace(/[0-9]/g,""),n=e.length-r.length,n>4&&(n=4),o=e.replace(/\W/g,""),s=e.length-o.length,s>5&&(s=5),i=t*10-30+n*10+s*10,i<0&&(i=0),i>100&&(i=100),i},this.each(function(){var n;return n=this,n.opts={},n.opts=$.extend({},$.fn.passwordStrength.defaults,e),n.div=$(n.opts.targetDiv),n.defaultClass=n.div.attr("class"),n.percents=n.opts.classes.length?100/n.opts.classes.length:100,$(this).keyup(function(){var e;return typeof el=="undefined"&&(this.el=$(this)),e=Math.floor(t(this.value)/this.percents),100<=t(this.value)&&(e=this.opts.classes.length-1),this.div.removeAttr("class").addClass(this.defaultClass).addClass(this.opts.classes[e])}).next()})},$.fn.passwordStrength.defaults={classes:Array("np10","np20","np30","np40","np50","np60","np70","np80","np90","np100"),targetDiv:"#passwordStrength",cache:{}},$(document).ready(function(){return $("#user_password, #account_password").passwordStrength()})}),$(function(){accessMenu(),subMenuAccess(),$("#menuPrincipal li > a").attr("tabindex","2"),$(".btn, .tabs a").attr("tabindex","3"),$("#menuPrincipal").attr("role","navigation"),$("#menuPrincipal li a").attr("role","menuitem"),$("#menuPrincipal li > a").attr("tabindex","2"),$(".pathWays").attr("role","navigation"),$("#footer").attr("role","contentinfo"),$(".alert").attr("role","alert"),$("a.btn, .modal-header .close").attr("role","button"),$(".boxGray").attr("role","region"),$(".boxGray h2").attr("role","presentation"),$("#header").attr("role","banner"),$(".content").attr("role","main"),$(".sidebar").attr("role","complementary"),$("input.required").attr("aria-required","true"),$(".lnkCoverAll").attr("tabindex","3"),$(".lnkCoverAll .btn").attr("tabindex","0"),$(".tabs").attr("role","tablist"),$(".tabs li a").attr({role:"tab","aria-selected":"false",tabindex:3}),$(".tabs li.active a").attr("aria-selected","true"),$(".tabs li.active a").attr("tabindex","3"),$(".boxCollapse header").each(function(){var e=$(this).find("h4").text(),t=$(this).data("target");$(this).prepend('<a href="#" role="button" aria-haspopup="true" aria-controls="'+t+'" aria-label="'+e+'" title="'+e+'" class="lnkCollapse" tabindex="3"></a>')}),$(".collapse").find('[tabindex="3"]').attr("tabindex","0"),$(".collapse.in").find('[tabindex="0"]').attr("tabindex","3"),$(".onFocus, .modal").attr("tabindex","-1").focus(),$(".lnkContent").on("click",function(e){e.preventDefault(),$(".titleContent").attr("tabindex","-1").focus().css("outline","none"),$("html, body").animate({scrollTop:$(".titleContent").offset().top},500)}),$(".accessibility a").focus(function(){$(this).parent().addClass("show")}).blur(function(){$(this).parent().removeClass("show")}),$(".dropdown-menu li:last-child a").blur(function(){$(this).parents(".dropdown-menu").siblings(".dropdown-toggle").click(),$(".serviceName a").focus()}),$(".shortcutBox a").focus(function(){$(this).parents("div:first").addClass("active")}).blur(function(){$(".shortcutBox > div").removeClass("active")}),$("#menuPrincipal > ul > li > a").focus(function(){$(this).parents("li").addClass("selected")}).blur(function(){$(this).parents("li").removeClass("selected")})});