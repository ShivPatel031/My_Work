// Kth Missing Positive Number

// Example 1:

// Input: arr = [2,3,4,7,11], k = 5
// Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
// Example 2:

// Input: arr = [1,2,3,4], k = 2
// Output: 6
// Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.

// optimize solution 

 int findKthPositive(vector<int>& arr, int k) {

        int start = 0, end =arr.size()-1,mid,ans=arr.size();


        while (start<=end){

            mid = start + (end-start)/2;

            if(arr[mid]-mid-1 >= k)
            {
                ans=mid;
                end=mid-1;
            }
            else{
                start=mid+1;
            }
        }

        return ans+k;
}



// how i take out solution

// int findKthPositive(vector<int>& arr, int k) {

//         int n = arr.size()-1;

//         if((arr[n] - n-1) != 0){

//             if(k <= arr[n]-n-1){
//                 int l = 0,first = 0,last=n;
//                 while(l<=n){
//                     int m = l + (n-l)/2;

//                     if(k > arr[m]-m-1){
//                         first=m;
//                         l=m+1;
//                     }else{
//                         last=m;
//                         n=m-1;
//                     }
//                 }

//                 cout<<n<<last;

//                 if(first == 0 && k < arr[first]){
//                     return k; 
//                 }
//                 else if(last == n){
//                     return arr[last] + (arr[last]-last);
//                 }
//                 else{
//                     return arr[first] + (k - (arr[first] - first - 1));
//                 }

//             }else{
//                 return arr[n] + (k - (arr[n] - n - 1));
//             }

//         }
//         else{
//             return arr[n] + k;
//         }
        
//         return -1;
//     }
