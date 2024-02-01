// ボタンを押したとき最後の数字の後に押したボタンの数字が入力される
function inputNumber(num){
  document.querySelector('#calc').value += num;
};

// 最後の1文字だけ消す
function Clear(){
  let calcAreaText = document.querySelector('#calc').value;
  let afterDeleteText = calcAreaText.slice(0, -1);
  document.querySelector('#calc').value = afterDeleteText
};

