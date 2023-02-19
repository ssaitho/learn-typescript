import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const messages = {
  good: "0以上の数値が入力されました!",
  bad: "負の数値を入力しないでください!",
};

rl.question("数値を入力してください:", (line) => {
  const num = Number(line);
  console.log(messages[num >= 0 ? "good" : "bad"]);
  rl.close;
});

// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

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

// rl.question("コマンドを入力してください:", (name) => {
//   switch (name) {
//     case "greet":
//       console.log("こんにちは。");
//       break;
//     case "cat":
//       console.log("あなたは猫派ですか？");
//       console.log("私は犬派です。");
//       break;
//     default:
//       console.log(`コマンド「${name}」を認識できませんでした。`);
//   }
//   rl.close();
// });
// let result = "";
// for (let i = 1; i <= 100; i++) {
//   if (i > 1) {
//     result += " ";
//   }
//   if (i % 3 === 0 && i % 5 === 0) {
//     result += "FizzBuzz";
//   } else if (i % 3 === 0) {
//     result += "Fizz";
//   } else if (i % 5 === 0) {
//     result += "Buzz";
//   } else {
//     result += String(i);
//   }
// }
// console.log(result);
