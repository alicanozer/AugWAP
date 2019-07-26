
/*
* Returns max number of two elements
*/
function max(a,b){
	if (a>=b) {
		return a;
	} else {
		return b;
	}
}

/*
* Returns max number of 3 elements
*/
function maxOfThree(a,b,c){
	return max(a,max(b,c));
}

/*
* Returns true if letter is vowel, false otherwise
*/
function isVowel(c){
	if (c==='A' || c==='E' ||c==='I' ||c==='O' ||c==='U' || c==='a' || c==='e' ||c==='i' ||c==='o' ||c==='u') {
		return true;
	} else {
		return false;
	}
}
/*
* Returns sum of all elements in given array
*/
function sum(a){
	var sum = 0;

	for (var i = 0; i < a.length; i++){
		sum += a[i];
	}
	
	return sum;
}
/*
* Returns multiply of all elements in given array
*/
function multiply(a){
	var mul = 1;

	for (var i = 0; i < a.length; i++){
		mul *= a[i];
	}
	
	return mul;
}
/*
* Returns reverse of given string
*/
function reverse(a){
	var rev="";

	for (var i = a.length - 1; i >= 0; i--) {
		rev += a.charAt(i);
	}

	return rev;
}
/*
* Returns longest word in given array of string
*/
function findLongestWord(words){
	var longest;
	var len=0;

	for (var i = 0; i < words.length; i++){
		if(words[i].length>len){
			longest = words[i];
			len=words[i].length;
		}
	}

	return longest;
}
/*
* Returns array of words that length is greater than given integer l
*/
function filterLongWords(words, l){
	let res = [];

	for (var i = 0; i < words.length; i++) {
		if (words[i].length>l) {
			res.push(words[i]);
		}
	}

	return res;
}
/*
* Estimates given elements are equal or including same things
*/
function isSucceded(a, b){
	if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
		for (var i = 0; i < a.length; i++) {
			if(a[i] != b[i]){
				return "TEST FAILED";
			}
		}
		return "TEST SUCCEEDED";
	}else{
		if(a === b){
			return "TEST SUCCEEDED";
		}else{
			return "TEST FAILED";
		}
	}

	return "TEST FAILED";
	
}
/*
* Prints result to console and list in web view
*/
function printResult(w){
	var node = document.createElement("LI");
	var textnode = document.createTextNode(w);
	node.appendChild(textnode);
	document.getElementById("resultList").appendChild(node);

	console.log(w);
}
/*
* Called when page is loaded to call all test cases
*/
function main(){
	printResult("Output of max(20,10) should be "+max(20,10)+". So, "+isSucceded(max(20,10),20));
	printResult("Output of maxOfThree(20,100,5) should be "+maxOfThree(20,100,5)+". So, "+isSucceded(maxOfThree(20,100,5),100));
	printResult("Output of isVowel('I') should be "+isVowel('I')+". So, "+isSucceded(isVowel('I'),true));
	printResult("Output of sum([1,2,3,4]) should be "+sum([1,2,3,4])+". So, "+isSucceded(sum([1,2,3,4]),10));
	printResult("Output of multiply([1,2,3,4]) should be "+multiply([1,2,3,4])+". So, "+isSucceded(multiply([1,2,3,4]),24));
	printResult("Output of reverse(\"jag testar\") should be "+reverse("jag testar")+". So, "+isSucceded(reverse("jag testar"),"ratset gaj"));
	printResult("Output of findLongestWord([\"ali\",\"canx\",\"ozer\"]) should be "+findLongestWord(["ali","xcanx","ozer"])+". So, "+isSucceded(findLongestWord(["ali","xcanx","ozer"]),"xcanx"));
	printResult("Output of filterLongWords([\"and\", \"describe\", \"something\", \"that\", \"you\"], 4) should be "+filterLongWords(["and", "describe", "something", "that", "you"], 4)+". So, "+isSucceded(filterLongWords(["and", "describe", "something", "that", "you"], 4),["describe", "something"]));


	const a = [1,3,5,3,3]; 
	const b = a.map(function(elem, i, array) {
		return elem * 10;
	})
	printResult("Output of b is " +b);



	const c = a.filter(function(elem, i, array){
		return elem === 3;});
	printResult("Output of c is " +c);



	const d = a.reduce(function(prevValue, elem, i, array){
		return prevValue * elem;
	});
	printResult("Output of d is " +d);

}







