'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
	let arrC = collectionB.reduce((acc, cur) => acc.concat(cur));
	return collectionA.filter((item) => arrC.includes(item));
};
