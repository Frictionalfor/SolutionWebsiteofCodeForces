#include <iostream>
using namespace std;

int main(){

    long long num;
    cin>>num;

    if(num % 2 == 0) cout<<num/2;
    else cout<<-(num/2 + 1);

    return 0;
}
