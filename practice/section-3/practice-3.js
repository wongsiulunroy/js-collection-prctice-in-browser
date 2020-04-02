'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var CollectionC =[];
	var minus = 1;
	var count = 0;
	var x;
	var y;
	var temp=[];

	for(x in collectionA){
		if(!temp.includes(collectionA[x])){
			temp[count] = collectionA[x];
			count++;
		}
	}
	for(x in temp){
		count = 0;
		for (y in collectionA){
			if (temp[x]===collectionA[y]){
				count++;
			}
		}
		CollectionC[x] = {key:temp[x], count:count};
	}
	for (var x in CollectionC){
		for (var y in objectB.value){
			if (CollectionC[x].key===objectB.value[y]){
				CollectionC[x].count -= minus;
				minus ++;
				if (minus>3){
					minus=1;
				}
			}
		}
	}






 return CollectionC;
  //return 'Implement the practice require, and begin changing code in this row';
}
