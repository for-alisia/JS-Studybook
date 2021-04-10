function mergeTwo(arr1, arr2) {
  let i = 0;
  let j = 0;

  let merged = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  if (j < arr2.length) {
    for (j; j < arr2.length; j++) {
      merged.push(arr2[j]);
    }
  }

  if (i < arr1.length) {
    for (i; i < arr1.length; i++) {
      merged.push(arr1[i]);
    }
  }

  return merged;
}

var mergeKLists = function (lists) {
  if (lists.length < 2) return lists[0];

  lists.push(mergeTwo(...lists.splice(0, 2)));
  return mergeKLists(lists);
};

const result = mergeKLists([
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
]);

console.log(result);
