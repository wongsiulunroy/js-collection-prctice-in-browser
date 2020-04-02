'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var convertCol=[];
	var CollectionC =[];
	var minus = 1;
	var count = 0;
	var x;
	var y;
	var temp=[];
	var result=[];

	//for(x in collectionA){
	//	if(!temp.includes(collectionA[x])){
	//		temp[count] = collectionA[x];
	//		count++;
	//	}
	//}
	for (x in collectionA) {
		if (collectionA[x].length==1){
			convertCol.push(collectionA[x]);
		}	else {
			var temp = collectionA[x].split(collectionA[x].charAt(1))
			var tempcount = parseInt(temp[1]);
			for (var i = 0; i<tempcount; i++){
				convertCol.push(temp[0]);
			}
		}
	}
	for(x in convertCol){
		if(!temp.includes(convertCol[x])){
			temp[count] = convertCol[x];
			count++;
		}
	}

	for(x in temp){
		count=0;
		for(y in convertCol){
			if (temp[x]===convertCol[y]){
				count++
			}
		}
		CollectionC[x]= {key: temp[x], count: count};
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
