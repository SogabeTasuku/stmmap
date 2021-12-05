window.onload = function() {
	// ページ読み込み時の処理
	var boxesTotal = $(".flexBox").length;
	for (var i = 0; i < boxesTotal; i++) {
		var itemSel = ".flexItem_" + (i + 1);
		$(itemSel).css({
			"border-radius":"5px",
			"color":"#fff",
    		"height":"50px",
			"width":"200px",
    		"text-align":"center",
			"margin":"5px",
			"font-size":"20px",
		});
		if (i >= 3) {
			$(itemSel).css({"color":"#000"});
		}
		for (var j = 0; j < $(itemSel).length; j++) {
			var colorSel = $(itemSel + ":nth-child(" + (j + 1) + ")");
			var colorCode = colorSel.val();
			colorSel.css("background-color", colorCode);
			if (i == 3) {
				if (j == 0 || j == 1 || j == 6 || j == 7) {
					colorSel.css({"color":"#FFF"});
				}
			}
		}
	}
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

function clickMap() {
	alert("クリックされました。");
}
