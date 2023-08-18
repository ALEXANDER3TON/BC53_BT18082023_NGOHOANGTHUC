// BT1:
// b1: xác định input
// today: ngày nhập vào;
// yesterday: ngày trước
// tomorrow: ngày sau
// b2: xử lý

function handleDate() {
  var today = new Date(document.querySelector("#today").value);
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var date = today.getDate();
  var yesterday = [date - 1, month, year].join("/");
  var tomorrow = [date + 1, month, year].join("/");

  document.querySelector("#resultDate").innerHTML = `
  <p>Ngày trước: ${yesterday}</p>
  <p>Ngày sau: ${tomorrow}</p>`;
}
// b3:in ra kết quả
document.querySelector("#handleDate").onclick = handleDate;

// BT2:
// b1: xác định input;
// month2: tháng
// year2: năm
// soNgay2: số ngày
// b2: xử lý

function handleDate2() {
  var year2 = +document.querySelector("#year2").value;
  var month2 = +document.getElementById("month2").value;
  var soNgay2;
  switch (month2) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      soNgay2 = "31 ngày";
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      soNgay2 = "30 ngày";
      break;
    case 2:
      soNgay2 = "29 ngày";
      break;
    default:
      soNgay2 = "Vui lòng nhập lại";
  }
  document.getElementById(
    "resultDate2"
  ).innerHTML = ` Số ngày của tháng: ${soNgay2}`;
}

document.getElementById("handleDate2").onclick = handleDate2;

//-----------------------------------------------------------

// BT3:
// b1: xác định input
// num: số có 3 chữ số
// unit: đơn vị
// ten: chục
// hundred: trăm
// b2: xử lý
function handleNum3() {
  var num = +document.querySelector("#num").value;
  var hundred = Math.floor(num / 100);
  var ten = Math.floor((num % 100) / 10);
  var unit = Math.floor((num % 100) % 10);
  var readHundred;
  var readTen;
  var readUnit;
  switch (hundred) {
    case 1:
      readHundred = "một trăm";
      break;
    case 2:
      readHundred = "hai trăm";
      break;
    case 3:
      readHundred = "ba trăm";
      break;
    case 4:
      readHundred = "bốn trăm";
      break;
    case 5:
      readHundred = "năm trăm";
      break;
    case 6:
      readHundred = "sáu trăm";
      break;
    case 7:
      readHundred = "bảy trăm";
      break;
    case 8:
      readHundred = "tám trăm";
      break;
    case 9:
      readHundred = "chín trăm";
      break;
  }
  if (ten === 1) {
    readTen = "mười";
    switch (unit) {
      case 1:
        readUnit = "một";
        break;
      case 2:
        readUnit = "hai";
        break;
      case 3:
        readUnit = "ba";
        break;
      case 4:
        readUnit = "bốn";
        break;
      case 5:
        readUnit = "năm";
        break;
      case 6:
        readUnit = "sáu";
        break;
      case 7:
        readUnit = "bảy";
        break;
      case 8:
        readUnit = "tám";
        break;
      case 9:
        readUnit = "chín";
        break;
    }
  } else {
    switch (ten) {
      case 0:
        readTen = "lẻ";
        break;
      case 2:
        readTen = "hai mươi";
        break;
      case 3:
        readTen = "ba mươi";
        break;
      case 4:
        readTen = "bốn mươi";
        break;
      case 5:
        readTen = "năm mươi";
        break;
      case 6:
        readTen = "sau mươi";
        break;
      case 7:
        readTen = "bảy mươi";
        break;
      case 8:
        readTen = "tám mươi";
        break;
      case 9:
        readTen = "chín mươi";
        break;
    }

    switch (unit) {
      case 1:
        readUnit = "mốt";
        break;
      case 2:
        readUnit = "hai";
        break;
      case 3:
        readUnit = "ba";
        break;
      case 4:
        readUnit = "bốn";
        break;
      case 5:
        readUnit = "năm";
        break;
      case 6:
        readUnit = "sáu";
        break;
      case 7:
        readUnit = "bảy";
        break;
      case 8:
        readUnit = "tám";
        break;
      case 9:
        readUnit = "chín";
        break;
    }
  }

  if(ten === 0 && unit === 0){
    readTen = " ";
    readUnit = " ";
  }

  document.querySelector("#resultNum3").innerHTML = `
  <p>${readHundred} ${readTen} ${readUnit}</p>`
}

// b3: in ra kết quả
document.querySelector("#handleNum3").onclick = handleNum3;

//----------------------------------------------------------
// BT4:
// b1: xác định input 
// xSchool: tọa độ x trường
// ySchool: tọa độ y trường
// xSV1:tọa độ x SV1
// ySV1:tọa độ y SV1
// xSV2:tọa độ x SV2
// ySV2:tọa độ y SV2
// xSV3:tọa độ x SV3
// YSv3:tọa độ y SV3
// d: là khoản cách
// b2: xử lý
function handleLocate () {
  var xSchool = +document.querySelector("#xSchool").value;
  var ySchool = +document.querySelector("#ySchool").value;
  var xSV1 = +document.querySelector("#xSV1").value;
  var ySV1 = +document.querySelector("#ySV1").value;
  var xSV2 = +document.querySelector("#xSV2").value;
  var ySV2 = +document.querySelector("#ySV2").value;
  var xSV3 = +document.querySelector("#xSV3").value;
  var ySV3 = +document.querySelector("#ySV3").value;
  var farSV;
  var dSV1 = Math.sqrt((xSV1 - xSchool)*(xSV1 - xSchool) + (ySV1 - ySchool)*(ySV1 - ySchool));
  var dSV2 = Math.sqrt((xSV2 - xSchool)*(xSV2 - xSchool) + (ySV2 - ySchool)*(ySV2 - ySchool));
  var dSV3 = Math.sqrt((xSV3 - xSchool)*(xSV3 - xSchool) + (ySV3 - ySchool)*(ySV3 - ySchool));
  if (dSV1 === dSV2 && dSV2 === dSV3){
    farSV = "cả ba sinh đều ở xa"
  } else {
    if (dSV1 > dSV2 && dSV1 > dSV3) {
      farSV = "Sinh viên 1 nhà xa nhất"
    } else if (dSV2 > dSV1 && dSV2 > dSV3) {
      farSV = "Sinh viên 2 nhà xa nhất"
    } else {
      farSV = "Sinh viên 3 nhà xa nhất"
    }
  }

  document.querySelector("#resultLocate").innerHTML = farSV;
}

document.querySelector("#handleLocate").onclick = handleLocate;