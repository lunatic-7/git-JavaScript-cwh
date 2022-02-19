console.log("Iterators are here!");

// Iterators

function fruitsIterator(values) {
    let nextIndex = 0;

    // We will return an object
    return {
        next: function () {
            if (nextIndex < values.length) {
                // We will return below object
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}

const fruits = ["Grapes", "Mango", "Apple", "Chico"];
console.log("Fruits are: ", fruits);

const frut = fruitsIterator(fruits);
console.log(frut.next());
// To keep getting next fruuits.
console.log(frut.next()); 
console.log(frut.next().value);  // To get value only. 
console.log(frut.next());
console.log(frut.next());
console.log(frut.next());