
module.exports = function countSameElements(collection) {
	let words = [];
	let answer = [] ;
	let ret ;
	collection.forEach((item) => {
		ret = words.indexOf(item);
		if (  ret === -1){
			words.push(item);
			if (item.length === 1){
			answer.push({key:item, count:1});
			}
			else {
				answer.push({key:item[0], count:Number(item.match(/\d+/))});
			}
		}
		else {
			if(item.length === 1){
			answer[ret].count ++;
			}
			else {
				answer[ret].count += Number(item.match(/\d+/));
			}
		}
	});
	return answer ;
};
