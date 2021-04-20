var maxArea = function (h) {
  let maxArea = 0;

  let lt = 0;
  let rt = h.length - 1;

  while (lt < rt) {
    let high = Math.min(h[lt], h[rt]);
    maxArea = Math.max(maxArea, high * (rt - lt));

    if (h[lt] <= high && lt < rt) {
      lt++;
    }

    if (h[rt] <= high && lt < rt) {
      rt--;
    }
  }

  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
