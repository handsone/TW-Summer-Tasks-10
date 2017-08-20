'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
	let ObjectA = [] ;
	let words = [] ;
	let ret ;
	collectionA.forEach((item) => {
		ret = words.indexOf(item[0]);
		if(ret === -1){
			words.push(item[0]);
			if (item.length === 1){
				ObjectA.push({key:item, count:1});
			}
			else{
				ObjectA.push({key:item[0], count:Number(item.match(/\d+/))});
			}
		}
		else{
			if (item.length === 1){
				ObjectA[ret].count ++ ;
			}
			else {
				ObjectA[ret].count += Number(item.match(/\d+/));
			}
		}
	});
	ObjectA.forEach((item) => {
		if (objectB.value.includes(item.key)){
			item.count -= Math.floor(item.count / 3) ;
		}
	});
	return ObjectA;
};
