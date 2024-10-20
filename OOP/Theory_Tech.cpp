
// // Theory
// // class nameclass { dinh nghia cac thuoc tinh va phuong thuc };
// // Attribute  thuoc tinh
// // Method, behavior
// // Object 

// // tinh chat oop
// // Encapsulation : dong goi
// // - Private (Thuoc tinh thuong de private : dau data ko cho phuong thuc ben ngoai truy cap truc tiep vao cac thuoc tinh trong class)
// // - Public ( Phuong thuc thuong de Public)
// // - Protected
// // setter getter
// // this pointer

// #include <bits/stdc++.h>
// using namespace std;

// class sinhvien {

//   private:
//   string id,name;
//   double age,gpa;

//   public:
//   // constructor (ham khoi tao)
//   sinhvien();
//   sinhvien(string,string,double,double);
//   void nhap();
//   void in();  
//   // lay data cua 1 attribbute private
//   string getName();
//   // lay ra data va change it (attributes private)
//   void setALL(string,string,double,double);
//   // ham huy (defconstructor)
//   ~sinhvien();

// };

// //constructor ko co tham so
// sinhvien::sinhvien(){
//     cout <<"con structor ko co tham so\n";
//     id=name="";
//     age=gpa=0;
// }
// // sinhvien x;
// // -> constructor ko co tham so

// //constructor co tham so
// sinhvien::sinhvien(string id,string name,double age,double gpa){
//     cout <<"Day la mot constructor co paramater\n";
//     this->id=id;
//     this->name=name;
//     this->age=age;
//     this->gpa=gpa;
// }
// //  sinhvien x{"23110187","chuong",18,3.5};
// //     x.in();
// //->Day la mot constructor co paramater
// //-> id:23110187 name:chuong age:18 gpa:3.5





// //    int n;cout <<"Nhap so luong sv: ";
// //     cin>>n;
// //    sinhvien a[n] ;
// //    cout <<"Nhap thong tin sv: \n";
// //    for (auto&x:a) x.nhap();
// //    cout <<"thong tin sv: \n";
// //    for (auto &x:a) x.in();
// // -> in ra info cua tung sv




// // lay data attributes private [kieutrave tenclass toantuphamvi tenham]
// string sinhvien::getName() {
//     return this->name;
// }

// // sap xep ten theo thu tu anpla
// bool sortname(sinhvien a,sinhvien b) {
//     return a.getName()<b.getName();// lay name cua tung sinh vien thong qua ham getname do tinh private 
// }
// //   int n;cout <<"Nhap so luong sv: ";cin>>n;
// //    sinhvien a[n]; coi sinhvien nhu mot kieu datatype
// //    cout <<"Nhap info sv: \n";
// //    for (auto &x:a) x.nhap();
// //    sort (a,a+n,sortname); ham sx theo sortname
// //    cout <<"Info sv duoc sx: \n";
// //    for (auto &x:a) x.in();
// // -> sx ten sv theo bang chu cai



// // lay va setting data attributes private  [void tenclass toantuphamvi tenham(paramater)]
// void sinhvien::setALL(string name,string id,double age,double gpa){
//     this->name=name;
//     this->id=id;
//     this->age=age;
//     this->gpa=gpa;
// }
// // thay doi du lieu
// //  sinhvien x{"CHuong","23110188",19,4};
// //  x.setALL("Minh Chuong","23110187",18,3.6);
// //  x.in();
// // -> id:23110187 name:Minh Chuong age:18 gpa:3.6


// void sinhvien::nhap() {
//    cout <<"Nhap id: ";
//    cin>>id;
//    cin.ignore();
//    cout <<"Nhap ten: ";
//    getline(cin,name);
//    cout <<"Nhap tuoi: ";
//    cin>>age;
//    cout <<"Nhap GPA: ";
//    cin>>gpa;

// }
// void sinhvien::in(){
//     cout <<"id:"<<id<<" "<<"name:"<<name<<" "<<"age:"<<age<<" "<<"gpa:"<<gpa<<"\n";
// }

// // sinhvien x;
// // x.nhap();
// // sinhvien y=x;
// // y.in();
// // -> data x = data y


// // defconstructor :ham huy

// sinhvien::~sinhvien(){
//     cout << "day la ham huy\n";
// }
// // sinhvien x;
// //-> con structor ko co tham so
// //-> day la ham huy


// // bien static

// class sinhvien1{
//     private:

//     string id,name;    
//     double gpa,age;
//     static int dem;

//     public:

//     void tang_dem();
//     int in_dem();
//     void nhap();
//     void in();
//     string getName();
   
// };


// // in ra mot attributes private trong class
// string sinhvien1::getName(){
//  return this-> name;
// }

// void info(sinhvien1 a){
//     cout <<a.getName();
// }

// //  sinhvien1 x;
// //   x.nhap();
// //   info(x); (chi lay data name cua sinhvien a)
// //   -> minh chuong


// int sinhvien1::dem=0; // khoi tao bien dem static =0;
// void sinhvien1::tang_dem(){
//     dem++;
// }
// int sinhvien1::in_dem(){
//     return dem;
// }
// // sinhvien1 x;
// // x.tang_dem();
// // x.tang_dem();
// // sinhvien1 y;
// // sinhvien1 z;
// // y.tang_dem(); 
// // cout <<z.in_dem()<<" "<<x.in_dem()<<" "<<y.in_dem();
// // -> 3 3 3 (bien static dem chung cho tat ca doi tuong x,y,z trong class)

// void sinhvien1::nhap() {
//    dem++;
// //    string(a,'c') -> chuyen a ki tu c thanh mot chuoi ccc 
//    this->id= "SV" + string(3-to_string(dem).length(),'0') + to_string(dem); 
//    cout <<"Nhap ten: ";
//    getline(cin,this->name);
//    cout <<"Nhap tuoi: ";
//    cin>>this->age;
//    cout <<"Nhap gpa:  ";
//    cin>>this->gpa;
//    cin.ignore();// xoa dau enter thuc thi sv tiep theo
// }
// void sinhvien1::in(){
//     cout <<id<<" "<<name<<" "<<age<<" "<<gpa<<"\n";
// }

// // int n;cout <<"Nhap sl sv: ";cin>>n;
// // cin.ignore(); 
// // sinhvien1 a[n];
// // cout <<"Nhap thong tin sv: \n";
// // for (auto&x:a) x.nhap();
// // cout <<"Info sv: \n";
// // for (auto &x:a) x.in();
// // -> SV001 ..
// // -> SV002 ..


// // ham ban (friend) -> co ham ko thuoc class la mot ham thanh vien cua class
// class sinhvien2{
//     private:

//     string id,name;
//     double gpa,age;

//     public:
//     void nhap();
//     void in();
//      // ham ban -> cho phep in ra cac attributes private tu 1 ham khac khong thuoc class sinh vien
//     friend void hamban(sinhvien2);
// };


// void hamban(sinhvien2 a){
//     cout <<a.id<<" "<<a.name;
// }
// //  sinhvien2 x;
// //  x.nhap();
// //  inthongtin(x);
// //  -> 1 minhchuong
// // lay data tu mot attributes private

// void sinhvien2::nhap() {
//  cout <<"Nhap id: ";
//  cin>>id;
//  cin.ignore();
//    cout <<"Nhap ten: ";
//    getline(cin,this->name);
//    cout <<"Nhap tuoi: ";
//    cin>>this->age;
//    cout <<"Nhap gpa:  ";
//    cin>>this->gpa;
//    cin.ignore();// xoa dau enter thuc thi sv tiep theo
// }
// void sinhvien2::in(){
//     cout <<id<<" "<<name<<" "<<age<<" "<<gpa<<"\n";
// }
// // bai tap chuan hoa ten cua mot sinh vien thuoc truong du lieu class dung ham ban 
// class sinhvien3{
//     private:

//     string id,name;
//     double gpa,age;

//     public:
//     void nhap();
//     void in();
//      // ham ban -> cho phep in ra cac attributes private tu 1 ham khac khong thuoc class sinh vien
//     friend void hamban(sinhvien3&);
// };

// // truyen tham chieu de khi ta goi ham va truyen mot doi tuong (x) vao thi moi thay doi tren ham cung tac dong len x
// void hamban(sinhvien3 &a){
//     stringstream ss (a.name);
//     string res="";
//     string token;
//     while(ss>>token){
//         res+=toupper(token[0]);
//         for (int i=1;i<token.length();i++) {
//             res+=tolower(token[i]);
//         }
//         res+=" ";
//     }
//     res.erase(res.length()-1); // truyen index -> tu dong xoa 1 ki tu
//     a.name=res;

// }
// //  sinhvien3 x;
// //  x.nhap();
// //  inthongtin(x);
// //  -> 1 minhchuong
// // lay data tu mot attributes private

// void sinhvien3::nhap() {
//  cout <<"Nhap id: ";
//  cin>>id;
//  cin.ignore();
//    cout <<"Nhap ten: ";
//    getline(cin,this->name);
//    cout <<"Nhap tuoi: ";
//    cin>>this->age;
//    cout <<"Nhap gpa:  ";
//    cin>>this->gpa;
//    cin.ignore();// xoa dau enter thuc thi sv tiep theo
// }
// void sinhvien3::in(){
//     cout <<id<<" "<<name<<" "<<age<<" "<<gpa<<"\n";
// }

//     int main(){
//   sinhvien3 x;
//   x.nhap();
//   hamban(x);
//   x.in();
  
// }

// // *Part 2:
// #include <bits/stdc++.h>
// using namespace std;

// // tinh dong goi
// class persons{
//   string name;
//   int age;
 
//   // dong goi
//   private: 
//     string address;
//     string phonenumber;
//   public:
//   // set
//     void set_address(string _address){
//          address=_address; // gan data ben ngoai cho properties ben trong
//     }
//     void set_phonenumber(string _phonenumber){
//          phonenumber=_phonenumber;
//     }
//     // print
//     string print_address(){
//         return address;
//     }
// };

// void part1(){
//     persons person;
//     person.set_address("Quang Ngai");
//     person.set_phonenumber("0977692690");
//     // print
//     cout<<person.print_address(); 
//     //-> Quang Ngai
// }
// // con tro va object
// class Dog{
//     private:
//     string name;
//     int age;
//     public:
//     Dog(string name, int _age)
//      {
//     this-> name = name; // or
//     age=_age;
//      }
//      // print
//      string get_name(){
//         return name;
//      }
//      int get_age(){
//         return age;
//      }
    
// };

// void part2(){
//     Dog *dog = new Dog("No",2); // Dog dog("No",2);
//     cout <<"Name: "<<dog->get_name()<<" ,age: "<<dog->get_age();
// }
// // tinh ke thua
// class animal
// {
//   public:
//    float weight;
//    void run(){
//     cout <<"cat is running....";
//    }
// };
// // ke thua : class con:Dog -> ke thua class cha : animal
// // giam thieu bien trung nhau (dung chung bien)
// class Cat : public animal 
// {
//   public:
//     string name;
//     void eat(){
//         "cat is eating...";
//     }
// };
// void part3(){
//     Cat cat;
//     cat.weight=30.3;
//     cat.name="No";
//     cout <<cat.name<<endl;
//     cout <<cat.weight<<endl;// ke thua
//     cat.run(); // ke thua

// }
// // access scope in class(pham vi truy cap)   in         out         inheritance (ke thua)     
// //               public                       1          1              1
// //               private                      1          0              0
// //               protect                      1          0              1


// // protect
// class Human{
//  public:
//     string address;
//     void Hi(){
//         cout <<"Hi";
//     }

// };

// class Person : public Human {
 
//   protected:
//     int age;
//     string phonenumber;

//   public:
//   Person(){
//     cout <<"Day la ham khoi tao";
//   }
//   Person(string name , string phonenumber, int age){
//     this -> name = name ;
//     this -> phonenumber = phonenumber ;
//     this -> age = age;
//   }
//     string name;
//     // set
//     void set_age(int age) {
//         this -> age = age; // age=_age
//     }
//     void set_phonenumber(string _phonenumber){
//        phonenumber = _phonenumber; 
//     }
//     // print
//     int print_age() {return age;}
//     string print_phonenumber() {return phonenumber;}
// };

// void part4(){
//     Person *person = new Person("chuong","0977692690",18);
//     // properties thuoc protected -> dung ham de set va print
//     cout <<person->name<<" "<<person->print_phonenumber()<<" "<<person->print_age()<<endl;
//     person->Hi(); // ke thua kieu public 
    
// }
// // class_cha {};
// // <syntax heritance> class class_con : heritance_type class_cha {};
// // Classification of heritance type ( phan loai kieu ke thua )

// // 1.Public heritance: tat ca pro/fun trong public/protected cua lop cha -> pro/fun trong public/protected thanh vien cua lop con
// // Moi thuoc tinh (hay ham) trong public(protected) cua class cha tro thanh thuoc tinh (hay ham) thanh vien public(protected) cua lop con

// // muon goi/chinh sua function or properties trong protected hay private -> tao ham trong public lam trung gian de goi hay chinh sua 
// // Ex:
// class Humans{ 
//     public :
//       string name;
//       void Helo(){
//         cout <<"Hello public";
//       }
//     protected:
//      string address;
//      void Hi(){
//         cout <<"Hi protected";
//      }
// };

// class Peoples : public Humans {
//     // tat ca pro/fun public lop cha deu la thanh vien pro/fun public lop con
//  public :
//     int age;
//     float weight;
//     void helo(){
//         cout <<"Helo";
//     }
//     Peoples(string other_name,string address, int age,float weight,float height){
//         this -> other_name = other_name;
//         this -> age = age;
//         this -> weight = weight;
//         this -> height = height;
//         this -> address = address;
//     }
//     // set properties protected cua lop cha
//     void set_address(string address) {
//          this -> address = address; //address=_address;
//     }
//     // print
//     string print_address() {
//         return address;
//     }
//     // print function protected
//     void print_fun(){
//         hi(); // ham protected cua lop con
//         cout <<endl;
//         Hi(); //  ham protected cua lop cha
//         cout <<endl;
//     }
//     // tat ca pro/fun protected lop cha deu la thanh pro/fun protected lop con
//  protected :
//     string other_name;
//     float height;
//     void hi(){
//         cout <<"Hi ";
//     }   
    
// };
// void Public_heritance_type(){
//     Peoples *people = new Peoples("Saclo","Quang Nam",18,54.0,170.0); // People people(); . <=> ->
//     cout <<people->print_address()<<endl; 
//     people->set_address("Quang Ngai");
//     cout <<people->print_address()<<endl;
//     people->print_fun(); 
//     people->Helo();    
// }

// // 2.Protected heritance : Tat ca pro/fun trong public va protected cua lop cha tro thanh pro/fun thanh vien trong protected cua lop con
// class Student{
//  public :
//   string name;
//   int age;
//   void fun(){
//     cout <<"Lop cha";
//   }
//  protected :
//   string address;
//   float GPA;
// };  

// class Students : protected Student {
//  public :
//   float height;
//   float weight;
//   Students(string name ,string address,int age, string clas, string MSV) {
//     this -> name = name ;
//     this -> address = address; 
//     this -> clas = clas;
//     this -> MSV = MSV;
//   }
//   //ham lay 1 thuoc tinh protected tu lop cha
//   string print_address(){
//     return address;
//   }
//   // ham lay ra 1 ham public trong lop cha
//   void print_Fun(){
//     fun();
//   }
//   // tat ca pro / fun lop cha deu la thanh vien trong protected con
//  protected :
//   string clas;
//   string MSV;
//   void Fun(){
//     cout <<"Lop con";
//   }
// };
// void Protected_heritance_type(){
//     Students *stu = new Students("Chuong","QN",18,"23110","231103B");
//    cout <<stu->print_address()<<endl;
//    stu->print_Fun();
// }

// // 3. Private heritance : tat ca pro/fun trong public/protected cua lop cha -> pro/fun thanh vien trong private cua lop con

// // Tinh da hinh (cho thi chay , ca boi) : Nap chong(ham,toan tu),Ghi de, Phuong thuc ao
// // -Nap chong 
// // + Ham : ham cung ten nhung para khac nhau -> logic thuc hien khac nhau  hay constructor cung la 1 dang nap chong ham
// class calculator{
//     public:
//      int add(int a, int b) {
//         return a+b;
//      }
//      float add(float a, float b) {
//         return a+b;
//      }
// };
// // + Toan tu : 
// class point{
//     public:
//       int x,y;
//       point(){}
//       point (int x , int y ){
//         this -> x= x;
//         this -> y= y;
//       }
    
// //  friend point operator + (point p1, point p2) {
// //         point p3;
// //         p3.x=p1.x+p2.x;
// //         p3.y=p1.y+p2.y;
// //         return p3;
// //       }
// point operator + (point other) {
//     point p;
//     p.x = x + other.x; // p1.x + p2.x
//     p.y = y + other.y;
//     return p;//p3
// }
// };
// void Operator(){
//     point p1(1,2) ,p2(2,3);
//     point p3 = p1 + p2;
//     cout<< p3.x<<" "<<p3.y;
// }
// // - Ghi de
// class Animal {
// public:
//     void move() {
//         cout << "animal move!" << endl;
//     }
// };

// class Lion : public Animal {
// public:
//     void move() {
//         cout << "lion move!" << endl;
//     }

//     // calling the base class's move function
//     void parent_move() {
//         Animal::move();
//     }
// };

// void ghide() {
//     Animal anima;
//     Lion lion;
//     lion.move();       // lion move takes precedence over the base class move
//     lion.parent_move(); // calling the base class's move function from Lion
// }


// // -Phuong thuc ao
// class Animals{
//   public: 
//   void move(){
//     cout <<"Animal move!";
//   }
// };
// class DOG : public Animals {
//   public:
//   void move(){
//     cout <<"DOg is moving!";
//   }
// };
// void phuongthucao(){
//   Animals *animal = new DOG;
//   animal->move();
// }
// int main() {
//     phuongthucao();
//     return 0;
// }
