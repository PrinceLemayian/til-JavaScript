function destroyer(arr, ...args) {
  const remove = arr.filter((element) => !args.includes(element));
  return remove;
}

console.log(destroyer(destroyer([1, 2, 3, 1, 2, 3], 2, 3)));
