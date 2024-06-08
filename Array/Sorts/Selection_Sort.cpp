// selection sort

vector<int> Selection_Sort(vector<int> array)
{
    bool check = false;

    for (int i = 0; i < array.size() - 1; i++)
    {
        for (int j = i + 1; j < array.size(); j++)
        {
            if (array[i] > array[j])
            {
                int temp = array[i];
                array[i] = array[j];
                array[j] = temp;

                if (i==0 && !check){
                    check=true;
                }
            }
        }

        if(check){
            break;
        }

    }

    return array;
}
