window.onload = function() {
	// ページ読み込み時の処理
	
}

function clickCopy(id) {
	//コピーするために活性
	$("#" + id).prop("disabled", false);
	$("#" + id).select();
	//テキストをコピー
	document.execCommand("copy");
	//再度非活性
	$("#" + id).prop("disabled", true);
}

function clickCss(value) {
	$("#text1").val(value);
	$("#text2").val("color: " + value + ";");
	$("#text3").val("background-color: " + value + ";");
}

function clickSearch(type) {
	$('#map').show();
}
