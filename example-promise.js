/**
 * Created by zichuange on 2017/6/2.
 */
function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject();
      }
    }, 3000)
  })
}

addPromise(2, 'a').then(function (sum) {
  console.log('the sum is', sum);
}, function () {
  console.log('no number!');
});