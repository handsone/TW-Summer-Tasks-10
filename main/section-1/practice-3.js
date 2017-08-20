'use strict';


module.exports = function collectSameElements(collectionA, objectB) {
	let collectionOfobjectB = objectB.value;
	return collectionA.filter((item) => collectionOfobjectB.includes(item));
};
