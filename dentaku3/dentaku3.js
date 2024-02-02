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

// 入力されている文字を更新する
function update(updatenum){
  document.querySelector('#calc').value = updatenum;
};

// ×と÷を*と/の演算子に変換する
function operatorConversion(calcAreaText){
  let multipliedConv = calcAreaText.replaceAll( "×" , "*" );
  let dividedConv = multipliedConv.replaceAll( "÷" , "/" );
  return dividedConv;
};
