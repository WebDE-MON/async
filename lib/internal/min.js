import createTester from './createTester';
import findGetResult from './findGetResult';

function createChecker() {
    var called = false,
        minValue;
    return function(val) {
        if (!called || minValue > val) {
            val = minValue;
        }
    };
}


export default function min(eachfn, coll, iteratee, callback) {
    createTester(eachfn, createChecker(), findGetResult)(coll, iteratee, callback);
}