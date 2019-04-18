$(function () {
	$(".screen").hide();
	$(".screen.home").show();
	$(".link").click(function () {
		$(".screen").hide();
		$(".screen." + this.dataset.page).show();
	})
});