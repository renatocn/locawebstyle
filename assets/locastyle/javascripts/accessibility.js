function accessMenu(){$("#header .limit").prepend('<nav class="menuAccess" />'),$("[data-access]").each(function(){var e=$(this).attr("title"),t=$(this).attr("href"),n=$(this).text();$(".menuAccess").append('<a role="menuitem" tabindex="1" href="'+t+'" aria-label="'+e+'" title="'+e+'">'+n+"</a>")})}function subMenuAccess(){$("#menuPrincipal .parent a").focus(function(){$(this).parents(".parent").addClass("focus"),$(this).parents(".parent").find("ul").attr({"aria-expanded":!0,"aria-hidden":!1})}).blur(function(){$(this).parents(".parent").removeClass("focus"),$(this).parents(".parent").find("ul").attr({"aria-expanded":!1,"aria-hidden":!0})})}$(function(){accessMenu(),subMenuAccess(),$("#menuPrincipal li > a").attr("tabindex","2"),$(".btn, .tabs a").attr("tabindex","3"),$("#menuPrincipal").attr("role","navigation"),$("#menuPrincipal li a").attr("role","menuitem"),$("#menuPrincipal li > a").attr("tabindex","2"),$(".pathWays").attr("role","navigation"),$("#footer").attr("role","contentinfo"),$(".alert").attr("role","alert"),$("a.btn, .modal-header .close").attr("role","button"),$(".boxGray").attr("role","region"),$(".boxGray h2").attr("role","presentation"),$("#header").attr("role","banner"),$(".content").attr("role","main"),$(".sidebar").attr("role","complementary"),$("input.required").attr("aria-required","true"),$(".lnkCoverAll").attr("tabindex","3"),$(".lnkCoverAll .btn").attr("tabindex","0"),$(".tabs").attr("role","tablist"),$(".tabs li a").attr({role:"tab","aria-selected":"false",tabindex:3}),$(".tabs li.active a").attr("aria-selected","true"),$(".tabs li.active a").attr("tabindex","3"),$(".boxCollapse header").each(function(){var e=$(this).find("h4").text(),t=$(this).data("target");$(this).prepend('<a href="#" role="button" aria-haspopup="true" aria-controls="'+t+'" aria-label="'+e+'" title="'+e+'" class="lnkCollapse" tabindex="3"></a>')}),$(".collapse").find('[tabindex="3"]').attr("tabindex","0"),$(".collapse.in").find('[tabindex="0"]').attr("tabindex","3"),$(".onFocus, .modal").attr("tabindex","-1").focus(),$(".lnkContent").on("click",function(e){e.preventDefault(),$(".titleContent").attr("tabindex","-1").focus().css("outline","none"),$("html, body").animate({scrollTop:$(".titleContent").offset().top},500)}),$(".accessibility a").focus(function(){$(this).parent().addClass("show")}).blur(function(){$(this).parent().removeClass("show")}),$(".dropdown-menu li:last-child a").blur(function(){$(this).parents(".dropdown-menu").siblings(".dropdown-toggle").click(),$(".serviceName a").focus()}),$(".shortcutBox a").focus(function(){$(this).parents("div:first").addClass("active")}).blur(function(){$(".shortcutBox > div").removeClass("active")}),$("#menuPrincipal > ul > li > a").focus(function(){$(this).parents("li").addClass("selected")}).blur(function(){$(this).parents("li").removeClass("selected")})});