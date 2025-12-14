#include <iostream>
#include <string>
using namespace std;

bool isBeautiful(int year) {
    string s = to_string(year);
    return (s[0] != s[1]) && (s[0] != s[2]) && (s[0] != s[3]) &&
           (s[1] != s[2]) && (s[1] != s[3]) && (s[2] != s[3]);
}

int main(){
    int year;

    cin>>year;

    while(true){
        year++;

        if(isBeautiful(year)){
            cout<<year<<endl;
            break;
        }
    }
    return 0;
}
