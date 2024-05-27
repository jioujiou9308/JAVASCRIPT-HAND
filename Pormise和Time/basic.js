const checkScore = (score) => {
  return new Promise((resolve, reject) => {
    if (score >= 60 && score <= 100) {
      resolve("你通過考試了");
    } else if (score < 60) {
      resolve("不及格喔");
    } else {
      reject("請輸入有效成績");
    }
  });
};

console.log("checkScore()", checkScore);

checkScore(100000)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
