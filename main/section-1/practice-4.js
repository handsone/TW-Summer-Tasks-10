'use strict';


module.exports = function collectSameElements(collectionA, objectB) {
	let collectionOfobjectB = objectB.value ;
	let collectionOfA_sValues = collectionA.reduce((acc, cur) => [...acc, ...cur.key] , [] );
	return collectionOfA_sValues.filter((item) => collectionOfobjectB.includes(item)) ;
};
