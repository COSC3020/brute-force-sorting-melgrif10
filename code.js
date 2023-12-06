function permutationSort(a) {
    const aSorted = [...a].sort((a, b)=>a-b);   //Sort the given array
    let permTried = 0;  //Initialize permTried as 0, keeps track of permutations tried

    function swap(i, j){    //Function to swap elements position in array
        const temp = a[i];  
        a[i] = a[j];       
        a[j] = temp;        
    }

    function permute(index){    //Recursive function to go through permutations and count tries
        if(index == a.length){  //If the index is equal to the length of the array a permutation has occured
            permTried++;        //Increase the variable permTried to keep track
            if(JSON.stringify(a) == JSON.stringify(aSorted)){   //Check if current permutation matches the sorted array
                return true;    //A permutation has been "discovered"
            }
        }

    for(let i=index; i<a.length; i++){      //Loop through the array 
        swap(index, i);         //Swap elements if needed
        if(permute(index+1)){   //Recursive permute call
            return true;        //If a permutation is discovered, no need for further recursion, stop
        }
        swap(index, i);         //Back track and swap elements again
    }
        return false;           //The current loop did not lead to a sorted permutation       
    }
permute(0);                     //Start looking for permutations with an initial index of 0
return permTried;               //Return how many permutations were tried
}
