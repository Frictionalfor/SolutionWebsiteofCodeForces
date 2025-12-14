#include <iostream>
using namespace std;

int main(){

    int testCase;
    cin>>testCase;

    while (testCase--){
        int num;
        cin>>num;

        int digit1 = num % 10;
        int digit2 = num / 10;
        cout<<digit1 + digit2<<endl;
    }
    
    return 0;
}
