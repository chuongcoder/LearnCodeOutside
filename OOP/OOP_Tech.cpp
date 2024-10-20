// #include <bits/stdc++.h>
// #include <algorithm>
// using namespace std;
 
// // cong 2 so phuc 
// class sophuc{
//     private:
//     int thuc,ao;
//     public:
//     friend istream& operator >> (istream& in, sophuc &x);
//     friend ostream& operator << (ostream& os, sophuc x);
//     // cong
//     sophuc operator + (sophuc another);
// };

// istream& operator >> (istream& in , sophuc &x) {
//     in>>x.thuc>>x.ao;
//     return in;
// }

// ostream& operator << (ostream& os, sophuc x) {
//     os<<x.thuc<<" "<<x.ao<<endl;
//     return os;
// }

// sophuc sophuc::operator + (sophuc another) {
//      sophuc sum ;
//      sum.thuc = this->thuc + another.thuc;
//      sum.ao = this->ao + another.ao;
//      return sum;
// }

// // rut gon , tinh sum 2 phan so 

// class phanso{
//     private:
//     int tu,mau;
//     public:
//     // constructor
//     // phanso (int tu, int mau);
//     // nap chong
//     friend istream& operator >> (istream&in , phanso&x) ;
//     friend ostream& operator << (ostream&os , phanso x);
//     // method rut gon
//     void rutgon(phanso &x);
//     // quy dong
//     phanso quydong();
//     // sum phan so (nap chong)
//     friend phanso operator + (phanso a, phanso b);
// };


// // nhap 
//  istream& operator >> (istream& in ,phanso &x) {
//     cout <<"Nhap tu vs mau: ";
//     in>>x.tu>>x.mau;
//     return in;
//  }
//  // xuat
//  ostream& operator << (ostream& os, phanso x) {
//     os<<"Kq: "<<x.tu<<" "<<x.mau<<endl;
//     return os;
// }
// // constructor
// // phanso::phanso(int tu, int mau){
// //     this->tu = tu ;
// //     this->mau = mau;
// // }
// int gcd(int a,int b) {
//     if(b) {
//         return gcd(b,a%b);
//     } 
//     return a;
// }
// int lcm(int a,int b) {
//     return (a*b)/gcd(a,b);
// }
// // rut gon
// void phanso::rutgon(phanso &x){
//    int uc = gcd(x.tu,x.mau);
//    x.tu = x.tu/uc;
//    x.mau = x.mau/uc;
// }
 
// // quy dong
// // phanso phanso::quydong() {
// //     phanso x;phanso y;
// //     int bc = lcm(x.tu,x.mau);
// //     x.tu = x.tu*(bc/x.mau);
// //     y.tu = y.tu*(bc/y.mau);
// //     x.mau = bc ; y.mau = bc;
// //     return x,y;
// // }
// phanso operator + (phanso a,phanso b) {
//    phanso sum;
//    sum.tu = a.tu*b.mau + b.tu*a.mau;
//    sum.mau = a.mau*b.mau;
//    return sum;
// }
// // phanso operator + (phanso a, phanso b) {
// //     phanso sum;
// //     sum.quydong(a,b);
// //     sum.tu = a.tu + b.tu ;
// //     sum.mau =a.mau;
// //     return sum;
// // }

// void sum(){
//     system("cls");
//     phanso a,b,c;
//     cin>>a>>b;
//     c=a+b;
//     c.rutgon(c);
//     cout <<c;

// }
// // calss sinh vien 1
// class sinhvien1{
//  private:
//     string ma,ten,ns; 
//     float gpa;
//  public:
//     // constructor 
//     sinhvien1(){};
//     sinhvien1(string ten,string ns,string ma,float gpa){
//         this->ns = ns;
//         this->ten = ten;
//         this->gpa = gpa;
//         this->ma = ma;
//     }
//     // ham nhap vs xuat 
//     // ham ban voi class 
//     friend void nhap(sinhvien1 &x);
//     friend void xuat(sinhvien1 x);
//     friend void chuanhoa(sinhvien1 &x);
// };

// void nhap(sinhvien1 &x) {
//     x.ma = "B2CN203NS";
//     cout <<"Nhap name: ";
//     getline(cin,x.ten);
//     cout <<"Nhap ns";
//     cin>>x.ns;
//     cout <<"Nhap gpa: ";
//     cin>>x.gpa;
// }

// void xuat(sinhvien1 x) {
//     cout <<x.ma<<" "<<x.ten<<" "<<x.ns<<" "<<x.gpa<<endl;
// }
//  void chuanhoa(sinhvien1 &x) {
//     if(x.ns[2]!='/') x.ns="0"+x.ns;
//     if(x.ns[5]!='/') x.ns.insert(3,"0"); 
//  }
// //    sinhvien1 x;
// //   nhap(x);
// //   chuanhoa(x);
// //   xuat(x);
//  // nap chong sinhvien2
//  class sinhvien2{
//     private:
//      string name,address;
//      float gpa;
//     public:
//      friend istream& operator >> (istream& in,sinhvien2 &x);
//      friend ostream& operator << (ostream& os,sinhvien2 x);
//  };

//  istream& operator >> (istream& in,sinhvien2 &x) {
//     cout <<"Name: ";
//     getline(in,x.name);
//     cout <<"Address: ";
//     getline(in,x.address);
//     cout <<"gpa: ";
//     in>>x.gpa;
//     // if(x.ns[2]!='/') x.ns="0"+x.ns;
//     // if(x.ns[5]!='/') x.ns.insert(3,"0");
//     return in;

//  }
//  ostream& operator << (ostream& os,sinhvien2 x) {
//     os<<"Name: "<<x.name<<" "<<x.address<<" "<<x.gpa;
//     return os;
//  }
//  // sap xep sv theo lop tang dan theo thu tu tu dien
//  // c1 : dung operator
//  class sv{
//     private:
//      string name_class;
//     public:
//      friend istream& operator >> (istream&in ,sv &x);
//      friend ostream& operator << (ostream&os ,sv x);
//      bool operator < (sv another);
//      string get_nameclass(){
//         return name_class;
//      }
//  };
//  istream& operator >> (istream& in, sv &x) {
//     cout <<"Nhap lop: ";
//     in.ignore();
//     getline(in,x.name_class);
//     return in;
//  }
//  ostream& operator << (ostream& os,sv x) {
//     os<<x.name_class;
//     return os;
//  }
// bool sv::operator < (sv another) {
//     return this->name_class < another.name_class;
// }

// void solve(){
//     sv a[3];
//     for (auto&x:a) cin>>x;
//     sort(a,a+3);
//     for (auto&x:a) cout <<x<<endl;
// }
// // c2 dung ham
// bool cmp(sv a, sv b){
//     return a.get_nameclass()<b.get_nameclass();
// }

// // in sv theo lop  
// class students {
//     private: 
//      string name,clas,gmail,ma;
//      float gpa;
//     public:
//     // constructor
//     students (){};
//      // nap chong
//      friend istream& operator >> (istream& in, students &x);
//      friend ostream& operator << (ostream& os, students x);
//      //input
//      void input_students(students *arr,int &size);
//      //ouput
//      void output_students(students *arr,int &size);
//      // ham lay ra info sv theo lop
//      //c1
//      void InFo_stu(students *arr, int &size,string class_find);   
//      // getclass_student
//      string GetClass(){
//         return clas;
//      }  
//      // c2 dung map
//      void InFo_stu_2(students *arr,int &size);
//      // tim ma
//      //c1
//      void Search_ma(students *arr,int &size,string khoa_find);
//      // getma_student
//      string Get_ma(){
//         return ma;
//      }
// };

// istream& operator >> (istream& in, students &x){
//     cout <<"Input name: ";
//      in.ignore();
//      getline(in,x.name);
//      cout <<"Input ma: ";
//      in>>x.ma;
//      cout <<"Input class: ";
//      in>>x.clas;
//      in.ignore();
//      cout <<"Input gmai: ";
//      in>>x.gmail;
//      cout <<"Input gpa: ";
//      in>>x.gpa;
//      return in;
// }

// ostream& operator << (ostream& os,students x) {
//    os<<"Name: "<<x.name<<endl;
//    os<<"Clas: "<<x.clas<<endl;
//    os<<"gmail: "<<x.gmail<<endl;
//    os<<"gpa: "<<x.gpa<<endl;
//    os<<"ma: "<<x.ma<<endl;
//    return os;
// }

// // input
// void students::input_students(students *arr, int &size) {
//     cout <<"Nhap thong tin sinh vien: "<<endl;
//     for (int i=0;i<size;i++) cin>>arr[i];
// }
// //output
// void students::output_students(students *arr,int &size){
//   for (int i=0;i<size;i++) cout <<arr[i]<<endl;
// }
// // c1 tim kiem info sv theo lop
// void students::InFo_stu(students *arr,int &size,string class_find) {
//       int flag = false;
//       for (int i=0;i<size;i++){
//         if(arr[i].GetClass()==class_find) {cout <<arr[i]<<endl;flag = true;}
//       }
//       if(!flag) cout <<"Not Found!";
       
// }
// //c2 dung map
// void solve_problem_7_c2(){
//     students a;
//     system("cls");
//     int size;cout <<"Input counts of students: ";cin>>size;
//     map<string,vector<students>> mp;
//     for (int i=0;i<size;i++){
//         students tmp;cin>>tmp;
//         mp[tmp.GetClass()].push_back(tmp);
//     }
//     cout <<"Input class_find: ";
//     string class_find ; cin>>class_find;
//     // in ra info student co class = class_find
//     for (students x : mp[class_find]) {
//         cout <<x;
//     }
// }

// void solve_problem_7(){
//     students a;
//     system("cls");
//     int size;
//     cout <<"input count of_student: ";cin>>size;
//     students *student = new students[size];
//     a.input_students(student,size);
//     cout <<"Input class_find: ";
//     string class_find;
//     cin>>class_find;
//     a.InFo_stu(student,size,class_find);
// }
// // in sv thong qua khoa thong qua ma :(ma) 23CNTTN2 -> khoa 23
// // c1
// void students::Search_ma(students *arr,int &size,string khoa_find) {
//     bool flag = false;
//     for(int i=0;i<size;i++) {
//      if(arr[i].Get_ma().substr(0,2) == khoa_find) {
//         cout <<arr[i]<<endl;
//         flag = true;
//      }
//     }
//     if(!flag) cout <<"Not Found! ";
// }
// void solve_problem_8(){
//     students a;
//     system("cls");
//     int size;
//     cout <<"Input counts of students: ";cin>>size;
//     students *student = new students[size];
//     a.input_students(student,size);
//     cout <<"Input khoa can tim: ";
//     string khoa_find;cin>>khoa_find;
//     a.Search_ma(student,size,khoa_find);
// }
// // c2
// void solve_problem_8_c2() {
//     students a;
//     map<string,vector<students>> mp;
//     int size;cout <<"Input counts of students: "; cin>>size;
//     cout <<"Nhap info sv: "<<endl;
//     for (int i=0;i<size;i++){
//        students tmp; cin>>tmp;
//        // tim khoa trong ma(lay 2 ki tu dau cua ma)
//        // push sv vao value of map (key : ma)
//        mp[tmp.Get_ma().substr(0,2)].push_back(tmp);
//     }     
//     cout <<"Input khoa can tim: ";
//     string khoa_find;
//     cin>>khoa_find;
//     cout <<"Danh sach sinh vien khoa "<<khoa_find<<" "<<endl;
//     for (students x : mp[khoa_find])  {
//         cout <<x<<endl;
//     }
// }
// // liet ke danh sach sinh vien theo nghanh
// // DCCN23K16 -> CN -> IT (cong nghe thong tin)
// // DCKT23K17 -> KT -> (ke toan)
// class Students{
//     private:
//      string ma,name,gmail;
//     public:
//     // constructor de duyet ham
//     Students a(){};
//      friend istream& operator >> (istream& in,Students &x) ;
//      friend ostream& operator << (ostream& os,Students x);
//     // ham lay 2 ki tu dau cua input tim nghanh 
//     string convert(string field_study);
//     // get_ma
//     string Get_ma(){
//         return this->ma;
//     }
// };

// istream& operator >> (istream& in,Students &x) {
//     in.ignore();
//     in>>x.ma;
//     in.ignore();
//     getline(in,x.name);
//     in.ignore();
//     in>>x.gmail;
//     return in;
// }
// ostream& operator << (ostream& os,Students x) {
//     os<<"ma: "<<x.ma<<endl;
//     os<<"name: "<<x.name<<endl;
//     os<<"gmail: "<<x.gmail<<endl;
//     return os;
// }
// // convert cong nghe thong tin -> CN
// string Students::convert(string field_study) {
//     string res="",token="";
//     vector<string> v;
//     stringstream ss(field_study);
//     while(ss>>token) {
//               v.push_back(token);
//     }
//     for (int i=0;i<2;i++){
//         // lay 2 ki tu dau cua 2 tu dau va viet hoa (ke toan -> KT)
//         res+=toupper(v[i][0]);
//     }
//     return res;
// }

// void solve_problem_9(){
//     Students a;
//     cout <<"input counts of students: ";
//     int size;cin>>size;
//     map<string,vector<Students>> mp;
//     for (int i=0;i<size;i++){
//         Students tmp; cin>>tmp;
//         // push sv co ma XX vao map
//         mp[tmp.Get_ma().substr(5,2)].push_back(tmp); 
//     }
//     cin.ignore();
//     cout <<"Nhap nganh can tim: ";
//     string field_study;
//     getline(cin,field_study);
//     string temp = a.convert(field_study); 
//     cout <<temp<<endl;
//     cout <<"Danh sach sv nganh: "<<field_study<<"\n";
//     for (Students x : mp[temp]) {
//         cout <<x<<endl;
//     }
// }
// // sap xep doanh nghiep co soluong nhan sinh vien giam dan
// // neu cung so luong thi in theo ma giam dan
// class Business{
//     private:
//       string id,name;
//       int count;
//     public:
//      friend istream& operator >> (istream& in,Business &x);
//      friend ostream& operator << (ostream& os,Business x);
//      // nap chong ss count
//      bool operator < (Business another);
//      // get_count
//      int get_count(){
//         return this->count;
//      }
//      //get_id
//      string get_id(){
//         return this->id;
//      }
// };

// istream& operator >> (istream& in,Business &x) {
//     cout <<"Input id: ";
//     in.ignore();
//     in>>x.id;
//     in.ignore();
//     cout <<"Input name: ";
//     in>>x.name;
//     cout <<"Input count: ";
//     in>>x.count;
//     return in;
// }
// ostream& operator << (ostream& os, Business x) {
//    os<<"Name: "<<x.name<<endl;
//    os<<"id: "<<x.id<<endl;
//    os<<"count: "<<x.count<<endl;
//    return os;
// }
// bool Business::operator < (Business another){
//     if(this->get_count()!=another.get_count()){
//     return this->get_count() > another.get_count();
//     }
//     else 
//     // cung count 
//     return this->get_id() < another.get_id();
// }
// void solve_problem_10(){
//     int size;cout <<"Input counts of business: ";cin>>size;
//     Business busi[size];
//     cout <<"Input info busi: "<<"\n";
//     for (int i=0;i<size;i++) {
//         cin>>busi[i];
//     }
//     sort(busi,busi+size);
//     cout <<"DANH SACH DOANH NGHIEP GIAM DAN THEO SO LUONG SINH VIEN NHAN THUC TAP: "<<"\n";
//     for (Business info_busi : busi){
//         cout <<info_busi<<endl;
//     } 
// }
// // liet ke cac doanh nghiep co count trong khoang a b cho truoc 
// void solve_problem_11(){
//     int size;cout <<"Input counts of business: ";cin>>size;
//     Business busi[size];
//     cout <<"Input info busi: "<<"\n";
//     for (int i=0;i<size;i++) {
//         cin>>busi[i];
//     }
//     sort(busi,busi+size);
//     int x,y;
//     cout <<"Nhap khoang x y : "; cin>>x>>y;
//     cout <<"DANH SACH DOANH NGHIEP NHAN SINH VIEN THUC TAP TU "<<x<<" DEN "<<y<<"\n";
//     cout <<endl;
//     for (Business info_busi : busi){
//     if(info_busi.get_count() >= x && info_busi.get_count()<=y) cout <<info_busi<<endl;
//     } 
// }


// // sap xep nhan vien tu gia den tre
// class staff{
//     private:
//      string ten,gt,ns,dc,mst,hd;
//      int ma;
//     public:
//     static int cnt;
//      friend istream& operator >> (istream& in,staff &a){
//         cnt++;
//         a.ma = cnt;
//         in.ignore();
//         getline(in,a.ten);
//         in>>a.gt>>a.ns;
//         in.ignore();
//         in>>a.mst>>a.hd;
//         return in;
//      }
//      friend ostream& operator << (ostream& out, staff a){
//         // dien so 0 vao cho du size = 5
//         out <<setfill('0')<<setw(5)<<a.ma<<" "<<
//         a.ten<<" "<<a.gt<<" "<<a.ns<<" "<<a.dc<<" "<<a.mst<<" "<<a.hd<<endl;
//      }
//      friend bool operator < (staff a, staff b) {
//         string s1 = a.ns,s2 = b.ns;
//         int t1 = (s1[0]-'0') + (s1[1]-'0') ,ng1 = (s1[3]-'0') + (s1[4]-'0'),n1 = stoi(s1.substr(6));
//         int t2 = (s2[0]-'0') + (s2[1]-'0') ,ng2 = (s2[3]-'0') + (s2[4]-'0'),n2 = stoi(s2.substr(6));
//         if(n1!=n2) return n1<n2 ;
//         if(t1!=t2) return t1<t2;
//         return ng1<ng2;
//      }
// };
// int staff::cnt = 0;
// void sort(staff a[],int size) {
//     sort(a,a+size);
// }
// void Solve(){
//     staff ds[50];
//     int N,i;
//     cin>>N;
//     for (i=0;i<N;i++) cin>>ds[i];
//     sort(ds,N);
//     for (int i=0;i<N;i++)  cout <<ds[i];
//     return ;
// }

// // // chuan hoa ngay sinh
// // friend istream& operator >> (istream& in, staff &x) {
// //     ++cnt;
// //     string tmp = to_string(cnt);
// //     tmp = string(3-tmp.size(),'0') + tmp ; // 001,002,..
// //     a.ma = "BCD23" + tmp // BCD23001
// //     in.ignore();
// //     getline(in,x.ten);
// //     in>>x.lop>>x.ns>>x.gpa;
// //     if(x.ns[2]!='/') x.ns = "0" +x.ns;
// //     if(x.ns[5]!='/') x.ns.insert(3,"0"); 
// //     return in
// // }
// // chuan hoa ten

// // UTE :))
// // sap xep sinh vien theo diem gpa , chuan hoa lai ngay sinh , ten
// int cnt=0;
// class sinhvien{
//    private:
//     string id,name,ns;
//     float gpa;
//    public:
//    // constructor
//    sinhvien student(){}; // truy cap ham
//     friend istream& operator >> (istream& in,sinhvien &x);
//     friend ostream& operator << (ostream& out,sinhvien x);

//     // chuan hoa ten
//       void standardized_name(sinhvien &x);
//     // chuan hoa ns
//       void standardized_birth(sinhvien &x);
//     // sap xep gpa 
//     bool operator < (sinhvien another);
// };

// istream& operator >> (istream& in,sinhvien &x) {
//     ++cnt;
//     string tmp = to_string(cnt);
//     tmp = string(3-tmp.size(),'0') + tmp;
//     x.id = "UTE_IT" + tmp;
//     in.ignore();
//     cout<<"Nhap ten: ";
//     getline(in,x.name);
//     cout <<"Nhap ns: ";
//     in>>x.ns;
//     cout <<"Nhap gpa: ";
//     in>>x.gpa;
//     return in;
// }

// ostream& operator << (ostream& out,sinhvien x) {
//     out<<"id:"<<x.id<<" | "<<"Nick_Name:"<<x.name<<" | "<<"Birth_day:"<<x.ns<<" | "<<"GPA:"<<x.gpa<<endl;
//     return out;
// }
// // name
// void sinhvien::standardized_name(sinhvien &x){
//         string res="";
//         stringstream ss(x.name);
//         vector <string> v;
//         string token="";
//         while(ss>>token){
//             v.push_back(token);
//         }
//         res+= v[v.size()-1];
//         res[0] = toupper(res[0]);
//         for (int i=1;i<res.size();i++){
//             res[i] = tolower(res[i]);               
//         }
//         res+=" IT";
//         x.name = res;
// }
// //ns
// void sinhvien::standardized_birth(sinhvien &x){
//      if(x.ns[2]!='/') x.ns = "0" + x.ns;
//      if(x.ns[5]!='/') x.ns.insert(3,"0");
// }

// //gpa
// bool sinhvien::operator < (sinhvien another) {
//     if(this->gpa != another.gpa) {
//         return this->gpa > another.gpa;
//     }
//     return this->name < another.name;
// }
// void solve_student(){
//     sinhvien student;
//     cout <<"Nhap so luong sv: ";int size;cin>>size;
//     sinhvien ds[size];
//     cout <<"Nhap thong tin sinh vien: \n";
//     for (int i=0;i<size;i++){ 
//         cin>>ds[i];
//         student.standardized_name(ds[i]);
//         student.standardized_birth(ds[i]);
//         }
//     sort(ds,ds+size);
//     for (int i=0;i<size;i++) cout <<ds[i]; 
// }
// // Nguyen Hai Son 
// // cong nghe pham mem 
// // -> GV01 Nguyen Hai Son CNPM
// class lecture{
//  private:
//     string ten,bm,ma;
//     static int cnt;
//  public:
//    void nhap();
//    void in();
//    string getTen(){
//     return ten;
//    }
//    string getMa(){
//     return ma;
//    }
//    string getBM(){
//     return bm;
//    }
// };

// // ham lay ki tu dau va viet hoa cua moi tu : cong nghe thong tin -> CNTT
// string chuan(string s) {
//     string token="",res="";
//     stringstream ss(s);
//     while(ss>>token) {
//     res+= toupper(token[0]);
//     }
//     return res;
// }
// // ham chi lay ten
// string getname(string s) {
//     string token="",res="";
//     stringstream ss(s);
//     while(ss>>token) {
//         res = token;
//     }
//     return res;
// }
// int lecture::cnt = 0;
// void lecture::nhap(){
//     ++cnt;
//     string tmp = to_string(cnt);
//     if(tmp.size()<2) tmp = "0"+tmp;
//     ma = "GV"+ tmp;
//     getline(cin,ten);
//     getline(cin,bm);
// }
// void lecture::in(){
//     cout <<ma<<" "<<ten<<" "<<chuan(bm)<<endl;
// }
// bool cmp(lecture a, lecture b) {
//         // ss ten 
//     if(getname(a.getTen())!=getname(b.getTen())) {
//         return a.getTen()<b.getTen();
//     }
//     return a.getMa()<b.getMa();
// }
// // ham in info gv khi biet bo mon
// void print_lecture(){
//     int size; cout<<"Nhap so luong giang vien: ";
//     cin>>size;
//     lecture ds[size];
//     for (int i=0;i<size;i++){
//           ds[i].nhap();
//     }
//     sort(ds,ds+size);
//     cout <<"Nhap bo mon can tim lecture: ";
//     string bmon; cin>>bmon;
//     bool flag = false;
//     for (int i=0;i<size;i++){
//         if(chuan(ds[i].getBM()).find(bmon)!=string::npos)
//        {ds[i].in();flag =true; }
//     }
//     if(!flag) cout <<"Not Found!";
//     return;    
// }
// //c2 dug map 
// void print_lecture_2(){
//     int size; cout <<"Nhap so luong gv: ";cin>>size;
//     map <string,vector<lecture>> mp;
//     cout <<"Nhap info gv: ";
//     for (int i=0;i<size;i++) {
//         lecture tmp;
//         // luu key : bm da dc chuan hoa, value: ds lecture co bo mon do
//         tmp.nhap();
//         mp[chuan(tmp.getBM())].push_back(tmp);
//     }
//     int q; cout <<"Nhap so truy van: ";cin>>q;
//     while(q--) {
//         string s;
//         cout <<"Nhap mon can tim gv: ";
//         getline(cin,s);
//         cout <<"DANH SACH LECTURE OF "<<s<<" \n";
//         for (lecture x : mp[s]) {
//             x.in();
//         }
//     }

// }
// // in theo mau
// // Nguyen Hai Son 
// // cong nghe pham mem 
// // -> GV01 Nguyen Hai Son CNPM
// void solve_problem_12(){
//     int size; cout<<"Nhap so luong giang vien: ";
//     cin>>size;
//     lecture ds[size];
//     for (int i=0;i<size;i++){
//           ds[i].nhap();
//     }
//     sort(ds,ds+size);
//     for (int i=0;i<size;i++) {
//         ds[i].in();
//     }
//     return;

// }
// int main(){
//     system("cls");
//     solve_student();
// }

