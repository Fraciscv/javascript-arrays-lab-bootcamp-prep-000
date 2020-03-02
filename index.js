var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(n){
  return kittens.push(n)
}

function destructivelyPrependKitten(n) {
  return kittens.unshift(n);
}
