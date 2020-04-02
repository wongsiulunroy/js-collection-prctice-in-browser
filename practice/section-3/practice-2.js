'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var minus = 1;
	
   for (var x in collectionA){
 	for (var y in objectB.value){
 		if (collectionA[x].key===objectB.value[y]){
 			collectionA[x].count = collectionA[x].count-minus;
 			minus++;
 			if(minus>3){
 				minus = 1;
 			}
 		}
 	}
 }

return collectionA;



  //return 'Implement the practice require, and begin changing code in this row';
}
