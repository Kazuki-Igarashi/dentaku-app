// ボタンを押したとき最後の数字の後に押したボタンの数字が入力される
function inputNumber(num){
  document.querySelector( '#calc' ).value += num;
}

// 最後の1文字だけ消す
function Clear(){
  let calcAreaText = document.querySelector( '#calc' ).value;
  let afterDeleteText = calcAreaText.slice(0, -1);
  document.querySelector( '#calc' ).value = afterDeleteText;
}

// 入力されている文字を更新する
function update(updatenum){
  document.querySelector( '#calc' ).value = updatenum;
}

// ×と÷を*と/の演算子に変換する
function operatorConversion(calcAreaText){
  let multipliedConv = calcAreaText.replaceAll( "×" , "*" );
  let dividedConv = multipliedConv.replaceAll( "÷" , "/" );
  return dividedConv;
}

// 入力した計算式を計算する
function calcFunction(calcAreaTextConv){
  const answer = new Function('return ' + calcAreaTextConv);
  return answer;
}

// =を押したときの実装
function calc(){
  let calcAreaText = document.querySelector( '#calc' ).value;
  let calcAreaTextConv = operatorConversion(calcAreaText);
  // 正規表現"+","-","×","÷",の文字があるか判断する
  let regex = /[+\-\×\÷]/g;
  // "+","-","×","÷",の文字がない場合-1になり文字があった場合-1以外になる
  let branch = calcAreaText.search(regex);
  if(branch!=-1){
    // 計算する
    try {
      const answer = calcFunction(calcAreaTextConv);
      update( answer());
    } catch( _error ) {
      update( _error );
    }
  } else {
    //もし"+","-","×","÷",がない場合入力している場所を0にする
    document.querySelector( '#calc' ).value = 0;
  }
}

// %を押したときの実装
function percentage(){
  let calcAreaText = document.querySelector( '#calc' ).value;
  // 正規表現"+","-","×","÷",の文字があるか判断する
  let regex = /[+\-\×\÷]/g;
  // "+","-","×","÷",の文字がない場合-1になり文字があった場合-1以外になる
  let branch = calcAreaText.search(regex);
  if(branch!=-1){
    // 計算する
    // "+","-","×","÷"を全ての文字を配列で返す
    let operatorSearch = calcAreaText.match(regex);
    // 配列の中身をlengthにする0スタートの為-1
    let operatorLastArray = operatorSearch.length - 1;
    // 最後の演算子までの文字数を出す
    let operatorLastindex = calcAreaText.lastIndexOf(operatorSearch[operatorLastArray])+1;
    // 最後の演算子以降の数値を百分率計算を最初に計算できるよう"(÷100)"を追加
    let calcText1 = calcAreaText.slice(0, operatorLastindex) + '(';
    let calcText2 = calcAreaText.slice(operatorLastindex)+'÷100)';
    let calcAreaText = calcText1+calcText2;
    let calcAreaTextConv = operatorConversion(calcAreaText);
    try {
      const percentageAnswer = calcFunction(calcAreaTextConv);
      update(percentageAnswer());
    } catch( _error ) {
      update( _error );
    }
  } else{
    document.querySelector( '#calc' ).value = 0;
  }
}