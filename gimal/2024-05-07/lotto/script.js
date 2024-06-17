// 로또 번호를 저장할 배열 선언
var lotto = [];

// 로또 번호가 6개가 될 때까지 반복
while(lotto.length < 6) {
  // 1부터 45 사이의 랜덤한 정수를 생성
  var num = parseInt(Math.random() * 45 + 1);
  // 생성된 번호가 배열에 없는 경우에만 추가
  if (lotto.indexOf(num) == -1) { 
    lotto.push(num);
  }    
}

// 로또 번호를 오름차순으로 정렬
lotto.sort((a, b) => a - b); 
// 로또 번호를 내림차순으로 정렬
// lotto.sort((a, b) => b - a); 

// 정렬된 로또 번호를 HTML에 출력
document.write("<div class='ball ball1'>" + lotto[0] + "</div>");
document.write("<div class='ball ball2'>" + lotto[1] + "</div>");
document.write("<div class='ball ball3'>" + lotto[2] + "</div>");
document.write("<div class='ball ball4'>" + lotto[3] + "</div>");
document.write("<div class='ball ball5'>" + lotto[4] + "</div>");
document.write("<div class='ball ball6'>" + lotto[5] + "</div>");
