import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("数値を入力してください:", (line) => {
//   const num = Number(line);
//   if (0 <= num && num < 100) {
//     console.log(`${num}は0以上100未満です`);
//   } else {
//     console.log(`${num}は0以上100未満ではありません`);
//   }
//   rl.close();
// });

// rl.question("名前を入力してください:", (name) => {
//   const displayName = name || "名無し";
//   console.log(`こんにちは、${displayName}さん`);
//   rl.close();
// });

rl.question("コマンドを入力してください:", (name) => {
  switch (name) {
    case "greet":
      console.log("こんにちは。");
      break;
    case "cat":
      console.log("あなたは猫派ですか？");
      console.log("私は犬派です。");
      break;
    default:
      console.log(`コマンド「${name}」を認識できませんでした。`);
  }
  rl.close();
});
