//ajax是一項後端技術，專門把後端資料傳到前端，減低伺服器載入及流量的問題

var content =document.getElementById("content");
var xhr = new XMLHttpRequest();  //跟伺服器要求資料的物件

xhr.open("GET","./data.txt");  //開啟檔案("取得"，"檔案路徑"，非同步處理)
xhr.send();  //傳送

// 載入完成後會執行
xhr.onload=() => {
    content.innerText= xhr.responseText;
}