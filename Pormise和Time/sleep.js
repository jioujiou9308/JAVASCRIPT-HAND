console.log("Hello");

sleep(1000).then(() => {
  console.log("world");
});

function sleep(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}
