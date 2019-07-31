window.onload = function () {
    "use strict";

    console.log(reverseArray(["A", "B", "C"]));

    let arrayValue = [1, 2, 3, 4, 5];
    reverseArrayInPlace(arrayValue);
    console.log(arrayValue);

    let array = [1,2,3,4,5,6];
    console.log(arrayToList(array));

    console.log(nth(arrayToList(array), 3));

    let obj = {here: {is: "an"}, object: 2};
    console.log(deepEqual(obj, obj));

    console.log(deepEqual(obj, {here: 1, object: 2}));

    console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

    console.log("Output of reverseArray([A, B, C]) should be [C, B, A]. result is, "+reverseArray(["A", "B", "C"]));
    console.log("Output of reverseArrayInPlace(A, B, C) should be [C, B, A]. result is, "+reverseArrayInPlace(["A", "B", "C"]),["C", "B", "A"]);
    console.log("Output of nth(arrayToList([1,2,3,4,5,6]), 3) should be 4. result is, "+nth(arrayToList(array), 3));
    console.log("Output of deepEqual(deepEqual(obj, {here: {is: \"an\"}, object: 2})) should be true, result is "+deepEqual(obj, {here: {is: "an"}, object: 2}))

    /**
     * This function reverses given array
     * @param arr input array
     * @returns {Array} reverse order or input array
     */
    function reverseArray(arr) {
        let newArr = [];
        for (let i = arr.length-1; i >= 0; i--) {
            newArr.push(arr[i]);
        }

        return newArr;
    }

    /**
     * This function in-place reverses given array
     * @param arr
     */
    function reverseArrayInPlace(arr) {
        let lastIndex=arr.length-1;
        for (let i = 0; i < arr.length/2; i++)  {
            let temp = arr[i];
            arr[i] = arr[lastIndex];
            arr[lastIndex] = temp;
            lastIndex--;
        }
    }

    /**
     * This
     * @param arr
     * @returns {{rest: *, value: *}}
     */
    function arrayToList(arr){
        let list=null;

        for (let i = 0; i < arr.length; i++) {
            list = prepend(arr[arr.length-i-1], list)
        }

        return list;
    }

    /**
     * this function adds given element to head of given list
     * @param elem input element
     * @param list input list
     * @returns {{rest: *, value: *}}
     */
    function prepend(elem, list){
        return {
            value: elem,
            rest: list
        };
    }

    /**
     * this function returns n'th element of list
     * @param list input list
     * @param index index of element to be returned
     * @returns {undefined|*}
     */
    function nth(list, index) {

        for (let i = 0; true; i++) {
            if (list == null)
                return undefined;

            if (index == i)
                return list.value;

            list = list.rest;
        }
    }

    /**
     * this function deeply compares given object of equality
     * @param o1
     * @param o2
     * @returns {boolean|(boolean|*)}
     */
    function deepEqual(o1, o2) {
        if (o1 && o2 && typeof o1 === "object" && typeof o2 === "object") {
            for (let key in o1) {
                return true && deepEqual(o1[key], o2[key]);
            }
        } else if (o1 && o2 && typeof o1 !== "object" && typeof o2 !== "object") {
            return o2 === o2;
        } else {
            return false;
        }
    }
}