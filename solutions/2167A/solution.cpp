#include <iostream>
using namespace std;

int main() {
    int testCases;
    cin >> testCases;

    while(testCases--){
        int arr[4];
        for(int i = 0; i < 4; i++){
            cin >> arr[i];
        }

        if(arr[0] == arr[1] && arr[1] == arr[2] && arr[2] == arr[3]){
            cout << "YES\n";
        } else {
            cout << "NO\n";
        }
    }

    return 0;
}
