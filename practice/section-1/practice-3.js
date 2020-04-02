'use strict';

function collectSameElements(collectionA, objectB) {
 var result = [];
 //var sub=collectionB[0]
 var x;
 var y;
 var count = 0;
 for (x in collectionA){
 	for (y in objectB.value) {
 		if (collectionA[x]===objectB.value[y]){
 			result[count]= collectionA[x];
 			count++;
 		}
 	}
 }
return result





  //return 'Implement the practice require, and begin changing code in this row';
}
