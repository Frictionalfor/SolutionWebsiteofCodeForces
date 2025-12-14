#include <iostream>
using namespace std;

int main(){
    int testCase;
    cin>>testCase;

    while(testCase--){
        long long a, b, n;
        cin>>a>>b>>n;

        if((long long) b*n <= a || b >= a) {       
            cout<<"1"<<endl;
        }

        else {
            cout<<"2"<<endl;
        }
    }
    return 0;
}