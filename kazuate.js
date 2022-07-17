let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
hantei();
let bu = document.querySelector('#print');
bu.addEventListener('click',hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let yoso = document.querySelector('input[name="math"]');
    let math = yoso.value;
    parseInt(yoso);       // 第5回課題:テキストボックスの数値をここに代入
    // 課題3-1：ここの判定処理を作成する．
    let pp = document.querySelector('p#result');
    let pp2 = document.querySelector('p#answer');
    let p;
    let p2;
    p = document.createElement('p');
    p2 = document.createElement('p2');
    pp2.insertAdjacentElement('beforeend',p2);
    pp.insertAdjacentElement('afterend',p);

    kaisu++;
    if (kaisu != 0){
        if (kaisu<=3) {
            p2.textContent = kaisu+'回目の予想: '+math+' ';
            if (math<kotae) {
                p.textContent = 'まちがい．答えはもっと大きいですよ';
            } else if (math>kotae) {
                p.textContent ='まちがい．答えはもっと小さいですよ';
            } else if (math==kotae) {
                p.textContent ='正解です．おめでとう!';
            }
        }
    }


    if (kaisu>3) {
        p.textContent ='答えは ' + kotae + ' でした．すでにゲームは終わっています';

    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること

    }
}