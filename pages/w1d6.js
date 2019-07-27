
/*
* Returns sum of all elements in given array
*/
function sum(array){
	return array.reduce(function(prevValue, elem){
		return prevValue + elem;
	});
}
/*
* Returns multiply of all elements in given array
*/
function multiply(array){
	return array.reduce(function(prevValue, elem){
		return prevValue * elem;
	});
}
/*
* Returns reverse of given string
*/
function reverse(str){
	return str.split('').reduce(function(prevValue, elem){
		return  elem+prevValue;
	});
}

/*
* Returns array of words that length is greater than given integer l
*/
function filterLongWords(words, l){
	return words.filter(function(elem){
		if (elem.length>l)
			return elem;
	});
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
	printResult("Output of sum([1,2,3,4]) should be "+sum([1,2,3,4])+". So, "+isSucceded(sum([1,2,3,4]),10));
	printResult("Output of multiply([1,2,3,4]) should be "+multiply([1,2,3,4])+". So, "+isSucceded(multiply([1,2,3,4]),24));
	printResult("Output of reverse(\"jag testar\") should be "+reverse("jag testar")+". So, "+isSucceded(reverse("jag testar"),"ratset gaj"));
	printResult("Output of filterLongWords([\"and\", \"describe\", \"something\", \"that\", \"you\"], 4) should be "+filterLongWords(["and", "describe", "something", "that", "you"], 4)+". So, "+isSucceded(filterLongWords(["and", "describe", "something", "that", "you"], 4),["describe", "something"]));

}







