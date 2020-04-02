'use strict';

function collectSameElements(collectionA, collectionB) {
 var result = [];
 var sub=collectionB[0]
 var x;
 var y;
 var count = 0;
 for (x in collectionA){
 	for (y in sub) {
 		if (collectionA[x]===sub[y]){
 			result[count]= collectionA[x];
 			count++;
 		}
 	}
 }
return result




  //return 'Implement the practice require, and begin changing code in this row';


}
