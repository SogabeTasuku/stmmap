window.onload = function() {
	// ページ読み込み時の処理
	var mapLatLng = new google.maps.LatLng({lat: markerData[0]['lat'], lng: markerData[0]['lng']}); // 緯度経度のデータ作成
	var MyLatLng = new google.maps.LatLng(35.6811673, 139.7670516);
	var MyLatLng2 = new google.maps.LatLng(35.6852650, 139.7670500);
	var MyLatLng3 = new google.maps.LatLng(35.6782650, 139.7620430);
	var Options = {
		zoom: 15,      //地図の縮尺値 tasuku3
		center: mapLatLng,    //地図の中心座標
		mapTypeId: 'roadmap'   //地図の種類
	};
	var map = new google.maps.Map(document.getElementById('map'), Options);

	var marker = new google.maps.Marker({ // マーカーの追加
        position: MyLatLng, // マーカーを立てる位置を指定
      	map: map // マーカーを立てる地図を指定
   	});

	var marker2 = new google.maps.Marker({ // マーカーの追加
        position: MyLatLng2, // マーカーを立てる位置を指定
      	map: map // マーカーを立てる地図を指定
   	});

	var marker3 = new google.maps.Marker({ // マーカーの追加
        position: MyLatLng3, // マーカーを立てる位置を指定
      	map: map // マーカーを立てる地図を指定
   	});

	var infoWindow = new google.maps.InfoWindow({ // 吹き出しの追加
		content: '<div class="sample">tokyo station</div>' // 吹き出しに表示する内容
	});
	marker.addListener('click', function() { // マーカーをクリックしたとき
		infoWindow.open(map, marker); // 吹き出しの表示
	});

	// マーカー毎の処理
	for (var i = 0; i < markerData.length; i++) {
        markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
        marker[i] = new google.maps.Marker({ // マーカーの追加
        	position: markerLatLng, // マーカーを立てる位置を指定
            map: map // マーカーを立てる地図を指定
       	});
 
   		infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
			content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
		});
 
     	markerEvent(i); // マーカーにクリックイベントを追加
 	}
 
   	marker[0].setOptions({// TAM 東京のマーカーのオプション設定
        icon: {
         	url: markerData[0]['icon']// マーカーの画像を変更
       	}
   	});

	// マーカーにクリックイベントを追加
	function markerEvent(i) {
		marker[i].addListener('click', function() { // マーカーをクリックしたとき
			infoWindow[i].open(map, marker[i]); // 吹き出しの表示
		});
	}

	// var geocoder = new google.maps.Geocoder();
	// geocoder.geocode({
	// 	'address': '東京都千代田区神田小川町3-28-9' // TAM 東京
	// }, function(results, status) { // 結果
	// 	if (status === google.maps.GeocoderStatus.OK) { // ステータスがOKの場合
	// 		console.group('Success');
	// 		console.log(results);
	// 		console.log(status);
	// 	} else { // 失敗した場合
	// 		console.group('Error');
	// 		console.log(results);
	// 		console.log(status);
	// 	}
	// });
}

var markerData = [ // マーカーを立てる場所名・緯度・経度
	{
		name: 'TAM 東京',
		lat: 35.6954806,
		lng: 139.76325010000005,
		icon: 'tam.png' // TAM 東京のマーカーだけイメージを変更する
   	}, 
	{
		name: '小川町駅',
	   	lat: 35.6951212,
		lng: 139.76610649999998
   	},
	{
		name: '淡路町駅',
	   	lat: 35.69496,
		lng: 139.76746000000003
   },
   {
		name: '御茶ノ水駅',
		lat: 35.6993529,
		lng: 139.76526949999993
   },
   {
		name: '神保町駅',
	   	lat: 35.695932,
	   	lng: 139.75762699999996
   },
   {
		name: '新御茶ノ水駅',
		lat: 35.696932,
	   	lng: 139.76543200000003
   }
];

function clickSearch(type) {
	// $('#map').show();
	if(type == "current") {
		currentSearch();
	}
}

function currentSearch() {
	// Geolocation APIに対応している
	if (navigator.geolocation) {
        // 現在地を取得
        navigator.geolocation.getCurrentPosition(
          	// 取得成功した場合
          	function(position) {
            	// 緯度・経度を変数に格納
            	var mapLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            	// マップオプションを変数に格納
            	var mapOptions = {
              		zoom : 15,          // 拡大倍率
              		center : mapLatLng  // 緯度・経度
            	};
            	// マップオブジェクト作成
            	var map = new google.maps.Map(
              		document.getElementById("map"), // マップを表示する要素
              		mapOptions         // マップオプション
            	);
            	//　マップにマーカーを表示する
            	var marker = new google.maps.Marker({
              		map : map,             // 対象の地図オブジェクト
              		position : mapLatLng   // 緯度・経度
            	});
          	},
          	// 取得失敗した場合
          	function(error) {
            	// エラーメッセージを表示
            	switch(error.code) {
              		case 1: // PERMISSION_DENIED
                		alert("位置情報の利用が許可されていません");
                		break;
              		case 2: // POSITION_UNAVAILABLE
                		alert("現在位置が取得できませんでした");
                		break;
              		case 3: // TIMEOUT
                		alert("タイムアウトになりました");
                		break;
              		default:
                		alert("その他のエラー(エラーコード:"+error.code+")");
                		break;
            	}
          	}
        );
    // Geolocation APIに対応していない
    } else {
        alert("この端末では位置情報が取得できません");
    }
}



// let map;
// let mainMarker;
// let marker =[];
// let infoWindow = [];

// function initMap(){
// 	let markerData = gon.places;
// 	let latlng = {lat: gon.latitude, lng: gon.longitude};
// 	// 初期位置の指定
// 	map = new google.maps.Map(document.getElementById('map'), {
// 		center: latlng,
// 		zoom: 14
// 	});

// 	// 初期位置にマーカーを立てる
// 	mainMarker = new google.maps.Marker({
// 		map: map,
// 		position: latlng
// 	});

// 	// 近隣店舗にマーカーを立てる
// 	for (var i = 0; i < markerData.length; i++) {
// 		const image = "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png";
// 		const id = markerData[i]['id'];
// 		// 緯度経度のデータを作成
// 		let markerLatLng = new google.maps.LatLng({lat: markerData[i]['latitude'], lng: markerData[i]['longitude']});
// 		// マーカーの追加
// 		marker[i] = new google.maps.Marker({
// 			position: markerLatLng,
// 			map: map,
// 			icon: image,
// 		});

// 		// 吹き出しの追加
// 		infoWindow[i] = new google.maps.InfoWindow({
// 			// 吹き出しに店舗詳細ページへのリンクを追加
// 			content: `<a href=/laundries/${id}>${markerData[i]['name']}</a>`
// 		});

// 		markerEvent(i); 
// 	}

// 	// マーカークリック時に吹き出しを表示する
// 	function markerEvent(i) {
// 		marker[i].addListener('click', function() {
// 			infoWindow[i].open(map, marker[i]);
// 		});
// 	}
// }

// document.addEventListener('turbolinks:load', function(){
// 	initMap();
// });
