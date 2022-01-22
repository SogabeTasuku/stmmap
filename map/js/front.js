window.onload = function() {
	// ページ読み込み時の処理
	var MyLatLng = new google.maps.LatLng(35.6811673, 139.7670516);
	var Options = {
	zoom: 15,      //地図の縮尺値 tasuku3
	center: MyLatLng,    //地図の中心座標
	mapTypeId: 'roadmap'   //地図の種類
	};
	var map = new google.maps.Map(document.getElementById('map'), Options);
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
