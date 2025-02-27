const cats = ["Milo", "Otis", "Garfield"];

// Appends a cat to the end of the array (modifies original array)
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Prepends a cat to the beginning of the array (modifies original array)
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Removes the last cat from the array (modifies original array)
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Removes the first cat from the array (modifies original array)
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Appends a cat and returns a new array (does not modify original)
function appendCat(name) {
  return [...cats, name]; 
}

// Prepends a cat and returns a new array (does not modify original)
function prependCat(name) {
  return [name, ...cats];
}

// Removes the last cat and returns a new array (does not modify original)
function removeLastCat() {
  return cats.slice(0, -1);
}

// Removes the first cat and returns a new array (does not modify original)
function removeFirstCat() {
  return cats.slice(1);
}

// Exporting the functions if required for tests
module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat
};
