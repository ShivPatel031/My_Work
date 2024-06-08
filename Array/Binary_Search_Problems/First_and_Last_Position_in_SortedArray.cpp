// Find First and Last Position of Element in Sorted Array

vector<int> searchRange(vector<int>& nums, int target) {

        int l =0,r=nums.size()-1;
        vector<int> result(2,-1);

        while(l<=r){
            int m = l + (r -l)/2;

            if(nums[m] == target){
                result[0] = m;
                r = m-1;
            }
            else if(target > nums[m]){
                l=m+1;
            }
            else{
                r = m-1;
            }
        }

        l=0,r=nums.size()-1;
        while(l<=r){
            int m = l + (r -l)/2;

            if(nums[m] == target){
                result[1] = m;
                l = m+1;
            }
            else if(target > nums[m]){
                l=m+1;
            }
            else{
                r = m-1;
            }
        }

        return result;
        
    }
