#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    
    int n;
    if (!(cin >> n)) return 0;
    double sum = 0.0;
    for (int i = 0; i < n; ++i) {
        double p;
        cin >> p;
        sum += p;
    }
    double ans = sum / n;
    cout.setf(std::ios::fixed);
    cout << setprecision(12) << ans << '\n';
    return 0;
}
