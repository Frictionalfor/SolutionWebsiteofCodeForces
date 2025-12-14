#include <bits/stdc++.h>
using namespace std;

int main(){
    int testCase;
    cin >> testCase;

    while(testCase--){
        int numberOfElements;
        cin >> numberOfElements;

        long long arr[numberOfElements];
        for(int i = 0; i < numberOfElements; i++){
            cin >> arr[i];
        }

        if(arr[0] == -1 && arr[numberOfElements-1] == -1){
            arr[0] = 0;
            arr[numberOfElements-1] = 0;
        }
        else if(arr[0] == -1){
            arr[0] = arr[numberOfElements-1];
        }
        else if(arr[numberOfElements-1] == -1){
            arr[numberOfElements-1] = arr[0];
        }

        for(int i = 1; i < numberOfElements - 1; i++){
            if(arr[i] == -1){
                arr[i] = 0;
            }
        }

        long long answer = llabs(arr[numberOfElements-1] - arr[0]);
        cout << answer << "\n";

        for(int i = 0; i < numberOfElements; i++){
            cout << arr[i] << " ";
        }
        cout << "\n";
    }
    return 0;
}