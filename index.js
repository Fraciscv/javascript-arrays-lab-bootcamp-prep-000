var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(n){
  return kittens.push(n)
}

function destructivelyPrependKitten(n) {
  return kittens.unshift(n);
}

function destructivelyRemoveLastKitten(n) {
  return kittens.pop(n);
}

function destructivelyRemoveFirstKitten(n) {
  return kittens.shift(n);
}

function appendKitten(n) {
  return [...kittens, n];
}

function prependKitten(n) {
  return [n, ...kittens];
}

function removeLastKitten(n) {
  return kitten.slice(0, kitten.length - 1);
}
