#include <iostream>
using namespace std;

int main(){
    int testcase;
    cin>>testcase;

    while (testcase--){
        int a, b, c;
        cin>>a>>b>>c;

        if(a + b == c || b + c == a || c + a == b){
            cout<<"YES"<<endl;
        }
        else{
            cout<<"NO"<<endl;
        }
    }
    return 0;
}
