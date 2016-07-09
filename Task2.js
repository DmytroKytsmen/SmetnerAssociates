/**
 * Returns decorator that calculates execution
 * time of passed variable of Function type
 * @param func @type Function
 * @returns {Function}
 */
function timeLoggingDecorator(func) {
    //check weather passed parameter is of Function type
    if (checkFunction(func)) {
        return function () {
            //getting name of function to write it to console
            var funcName = getFuncName(func);
            console.log(" -> Function has started: " + funcName);
            //calculating time and executing function using call forwarding
            var startTime = Date.now();
            var result = func.apply(this, arguments);
            var workingTime = Date.now() - startTime;
            console.log(" -> Function has finished: " + funcName + ". Working time: " + workingTime + "ms");
            //returning result
            return result;
        };
    }
    else {
        console.log(" -> Passed variable is not a function");
    }
}

/**
 * Function that returns name of passed into function
 * @param fun @type Function
 * @returns {string}
 */
function getFuncName(fun) {
    if (checkFunction(fun)) {
        var res = fun.toString();
        res = res.substr('function '.length);
        res = res.substr(0, res.indexOf('('));
        return res;
    }
    else {
        console.log(" -> Passed variable is not a function");
    }
}

/**\
 * Function that checks if passed argument is of Function type
 * @param value
 * @returns {boolean}
 */
function checkFunction(value) {
    return typeof value === "function"
}


Array.prototype.join = timeLoggingDecorator(Array.prototype.join);
console.log([1, 2, 3].join('-'));
