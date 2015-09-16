var normDist = function(mean, std, low, high) {
	
	var x1, x2, w, y1, y2;
  
	do {
    	x1 = Math.random() * 2 - 1;
    	x2 = Math.random() * 2 - 1;
    	w = x1 * x1 + x2 * x2;
  	} while (w >= 1);
  		
  	w = Math.sqrt(-2 * Math.log(w) / w); // Box-Muller transform

  	y1 = mean + (x1 * w) * std; 
  	y2 = mean + (x2 * w) * std; 
  
  	//return y1; // throw away extra sample y * c

  	if (low <= y1 && y1 <= high) {
  		return y1;
  	}
  	else if (low <= y2 && y2 <= high) {
  		return y2;
  	}
  	else {
  		return Math.random()*(high-low)+low;
  	}

}

// Run uniform random and this 10 times each calculate average and present in meeting