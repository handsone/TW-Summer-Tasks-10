module.exports = function summarySameElements(collection) {
	let words = [];
	let answer = [] ;
	let ret ;
	collection.forEach((item) => {
		let word = item[0] ;
		ret = words.indexOf(word);
		if (  ret === -1){
			words.push(item);
			if (item.length === 1){
				answer.push({name:item, summary:1});
			}
			else {
				answer.push({name:word, summary:Number(item.match(/\d+/))});
			}
		}
		else {
			if(item.length === 1){
				answer[ret].summary ++;
			}
			else {
				answer[ret].summary += Number(item.match(/\d+/));
			}
	       	}
	});
	return answer ;
};
