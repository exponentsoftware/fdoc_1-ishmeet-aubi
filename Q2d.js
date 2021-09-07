const arr = [1, 4, 6, 2, 1];

function checkUniqueness(arr) {
  const noDups = new Set(arr);

  if (arr.length !== noDups.size) {
    return true;
  } else {
    return false;
  }
}
