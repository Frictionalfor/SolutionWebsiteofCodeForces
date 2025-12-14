#include <iostream>
#include <algorithm>
using namespace std;

int main(){

    int a, b, c;
    cin>>a>>b>>c;

    int arr[3] = {a, b, c};
    sort(arr, arr + 3);

    int minimumDistance = arr[2] - arr[0];
    
    cout<<minimumDistance<<endl;
    
    return 0;
}
