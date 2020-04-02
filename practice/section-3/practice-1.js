'use strict';

function createUpdatedCollection(collectionA, objectB) {
 for (var x in collectionA){
 	for (var y in objectB.value){
 		if (collectionA[x].key===objectB.value[y]){
 			collectionA[x].count = collectionA[x].count-1;
 		}
 	}
 }

return collectionA;



  //return 'Implement the practice require, and begin changing code in this row';
}
