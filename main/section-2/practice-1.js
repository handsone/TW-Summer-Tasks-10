
module.exports = function countSameElements(collection) {
	let words = [];
	let answer = [] ;
	let ret ;
	collection.forEach((item) => {
		ret = words.indexOf(item);
		if (  ret === -1){
			words.push(item);
			answer.push({key:item, count:1});
		}
		else {
			answer[ret].count ++;
		}
	});
	return answer ;
};
