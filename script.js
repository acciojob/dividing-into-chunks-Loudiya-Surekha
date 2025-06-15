const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
		let result =[];
	    let sum=0;
	    let chunk=[];
	for(var i=0; i<arr.length; i++){
		let x=arr[i];
		if(sum+x<=n){
			chunk.push(x);
			sum=sum+x;
		}
		else{
			result.push(chunk);
			chunk=[x];
			sum=x;
		}
	}
	if(chunk.length>0){
		result.push(chunk);
	}  
	return  result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
