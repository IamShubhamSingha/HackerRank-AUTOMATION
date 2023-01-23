module.exports = {
    answers: [`
    #include <bits/stdc++.h>
            using namespace std;
            
            int main(){
                int number_of_elements;
                cin >> number_of_elements;
                vector <int> array(number_of_elements);
                int sum_of_array = 0;
                
                for(int i = 0; i < number_of_elements; i++){
                   cin >> array[i];
                   sum_of_array += array[i];
                }
                
                cout << sum_of_array;
                return 0;
            }
    `,` #include <map>
    #include <set>
    #include <list>
    #include <cmath>
    #include <ctime>
    #include <deque>
    #include <queue>
    #include <stack>
    #include <string>
    #include <bitset>
    #include <cstdio>
    #include <limits>
    #include <vector>
    #include <climits>
    #include <cstring>
    #include <cstdlib>
    #include <fstream>
    #include <numeric>
    #include <sstream>
    #include <iostream>
    #include <algorithm>
    #include <unordered_map>
    
    using namespace std;
    
    
    int main(){
        int a0;
        int a1;
        int a2;
        cin >> a0 >> a1 >> a2;
        int b0;
        int b1;
        int a = 0, b = 0;
        int b2;
        cin >> b0 >> b1 >> b2;
        if (a0 > b0) a++;
        if (a0 < b0) b++;
        
        if (a1 > b1) a++;
        if (a1 < b1) b++;
        
        if (a2 > b2) a++;
        if (a2 < b2) b++;
        
        cout << a << " " << b << endl;
        
        return 0;
    }    
    `,`#include <cmath>
    #include <cstdio>
    #include <vector>
    #include <iostream>
    #include <algorithm>
    using namespace std;
    int main() {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
        long long sum=0;
        int n;
        cin>>n;
        int data;
        for(int i=0;i<n;i++) {
            cin>>data;
            sum+=data;
        }
        cout<<sum<<endl;
        return 0;
    }
    `,`
    #include <iostream>
    using namespace std;
    int main() {
        int n;
        cin >> n;
        int arr[n][n];
        long long int d1=0; //First Diagonal
        long long int d2=0; //Second Diagonal
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                cin >> arr[i][j];
                if (i == j) d1 += arr[i][j];
                if (i == n - j - 1) d2 += arr[i][j];
            }
        }
        cout << abs(d1 - d2) << endl; //Absolute difference of the sums across the diagonals
        return 0;
    }
    `,`#include <cmath>
    #include <cstdio>
    #include <vector>
    #include <iostream>
    #include <algorithm>
    #include <iomanip>
    using namespace std;
    int main() {
        int N, ival, pos = 0, neg = 0, zero = 0;
        cin >> N;
        for (int i = 0; i < N; i++) {
            cin >> ival;
            if (ival == 0) {
                zero += 1;
            }
            else if (ival > 0) {
                pos += 1;
            }
            else {
                neg += 1;
            }
        }
        cout << fixed << setprecision(3) << double(pos) / N << endl;
        cout << fixed << setprecision(3) << double(neg) / N << endl;
        cout << fixed << setprecision(3) << double(zero) / N << endl; 
        return 0;
    }    
    `,`#include <cmath>
    #include <cstdio>
    #include <vector>
    #include <iostream>
    #include <algorithm>
    using namespace std;
    
    
    int main() {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT */
        int n;
        cin >> n;
        string str(n, ' ');
            
        for (int i = 1; i <= n; ++i) {
            str[n-i] = '#';
            cout << str << endl;
        }
        return 0;
    }
    `,`#include <bits/stdc++.h>
    typedef long long LL;
    using namespace std;
    int main(){
        LL s[5];
        LL d = 0;
        for(int i = 0; i < 5; i++){
            cin >> s[i];
            d += s[i];
        }
        sort(s,s+5);
        cout << d-s[4] << " " << d-s[0] << endl;
    }
    `,`#include<bits/stdc++.h>
    using namespace std;
    typedef long long ll;
    typedef vector<int> vi;
    typedef pair<int,int> pii;
    typedef pair<ll,ll> pll;
    typedef vector<pii> vpii;
    typedef unsigned long long llu;
    #define author ayushtomar
    #define rf freopen("in.txt", "r", stdin)
    #define wf freopen("out.txt", "w", stdout)
    #define debug(x) cerr<<#x<<" "<<x<<endl;
    #define f first
    #define s second
    #define mp make_pair
    #define pb push_back
    map < int ,int > ma;
    int main()
    {
        int n;
        cin>>n;
        int ans=-1;
        for(int i=0;i<n;i++) {
                int x;
            cin>>x;
            ma[x]++;
            ans=max(ans,x);
        }
        cout<<ma[ans];
    return 0;
    }
    `,`#include <cmath>
    #include <cstdio>
    #include <vector>
    #include <iostream>
    #include <algorithm>
    using namespace std;
    int main() {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
        string s;
        string h;
        int hr;
        cin>>s;
        hr = ((s[0]-'0')*10)+(s[1]-'0');
        if(s[8]=='P'&&s[9]=='M'&& hr ==12) cout<<to_string(hr);
        else if(s[8]=='P'&&s[9]=='M') cout<<to_string(hr+12);
        else if(s[8]=='A'&&s[9]=='M'&&hr==12) cout<<"00";
        
        else cout<< s[0]<<s[1];
        
       
        for(int i =2;i<8;i++)
            cout<<s[i];
        cout<<endl;
        return 0;
    }
    `]
}