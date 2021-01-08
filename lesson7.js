// 課題07 - 1. 文字列オブジェクトのメソッド
// 「メソッドの調べ方」のセクションに書いてある方法で、文字列のオブジェクトに対して用意されているメソッドを調べてください。
// 気になったメソッドを3つほどピックアップして、実際にプログラムを書いて動作を確認してください。
// WARNING
// 👎や⚠️マークがついているメソッドは、使用が推奨されません。それ以外のメソッドを選ぶようにしてください。

const greeting = ' Hello world!   ';

console.log(greeting.trim()); //前後の空白を削除する
console.log(greeting.trimStart());　//前の空白を削除する
console.log(greeting.trimEnd());　//後の空白を削除する

const before = '　ありがとうございます。';
// const after = before.concat('いいえ、どういたしまして。　'); //bforeに繋げてafterに代入する
// console.log(after.trim()); //afterの前後の空白を削除する

const after = before.substring(11, 4); //5文字目から11文字目までが切り抜かれています
console.log(after);

// 課題07 - 2. 配列オブジェクトのメソッド
// 課題07 - 1と同様に、配列のオブジェクトに対して用意されているメソッドをリファレンスから調べて、
// 気になったメソッドを3つほど試してください。

const objectData = {
    1: 'ロケット',
    2: '飛行機',
    3: '電車',
    4: '自動車'
}
console.log(Object.keys(objectData));
console.log(Object.values(objectData));
console.log(Object.entries(objectData));


// また、文字列オブジェクトで使えるメソッドとの共通点、相違点を簡単にまとめましょう。
//共通点
// 両方ともテキスト形式で表現可能なデータを保持できる

//相違点
//二つ以上の値を扱える