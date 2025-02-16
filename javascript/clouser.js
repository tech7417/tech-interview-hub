const obj = {
    name: "Alice",
    normalFunc: function () {
        console.log(this.name);
    },
    arrowFunc: () => {
        console.log(this.name);
    }
};

//obj.normalFunc(); // "Alice"

 let abc = obj.arrowFunc.bind(obj);
 abc(); // undefined (inherits `this` from global scope)
