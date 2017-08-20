'use strict';
module.exports = function createUpdatedCollection(collectionA, objectB) {
	let ObjectA = [] ;
	let words = [] ;
	let ret ;
	collectionA.forEach((item) => {
		ret = words.indexOf(item);
		if(ret === -1){
			words.push(item);
			ObjectA.push({key:item, count:1});
		}
		else{
			ObjectA[ret].count ++ ;
		}
	});
	ObjectA.forEach((item) => {
		if (objectB.value.includes(item.key)){
			item.count -= Math.floor(item.count / 3) ;
		}
	});
	return ObjectA;
};
