// // #include <bits/stdc++.h>
// // using namespace std;

// // // public,private: access modifier : chi dinh truy cap
// // // *private: chi class cua chinh no moi truy cap bang phuong thuc ( ke ca ke thua cung k dc truy cap )
// // // * protected : ham ke thua co the truy cap vao duoc

// // // Tinh da hinh : cung 1 phuong thuc , nhung voi lop class khac nhau -> khac nhau (dinh nghia lai phuong thuc)
// // // Neu khai bao contro quan li class cha nhung doi tuong dc tao ra la ke thua
// // // Ex:
// // // Human *chuong = new man("Chuong",19);
// // // -> mac dinh thi tinh da hinh se la class cha
// // // -> fixed : virtual truoc ham da hinh(tra ve dung thuoc tinh cho object man)
// // // * Do tinh da hinh: man, fun() no co chuc nang khac , Human fun() co chuc nang khac
// // // neu khai bao con tro kieu cha nhung doi tuong duoc tao ra la class con ke thua cha,
// // // nen mac dinh fun() class con se ko dc thuc thi ma thuc thi fun() class cha,
// // // nen phai them virtual truoc ham fun() class cha de ham fun() class con dc thuc thi

// // class Human
// // {
// // public:
// //     int age;
// //     string name;
// //     // function
// //     void fun() {
// //         cout <<"Day la function\n";
// //     }
// //     // Constructor
// //     Human()
// //     {
// //         cout << "Day la constructor\n";
// //     }
// //     // const data_type &name : ko lam thay doi du lieu goc , tang toc do truy cap doi tuong
// //     Human(const string &name_n, int age_n = 0)
// //         : name(name_n), age(age_n)
// //     {
// //         name = name_n;
// //         age = age_n;
// //     }
// //     // ham huy de huy doi tuong Destructor
// //     ~Human()
// //     {
// //         cout << "Day la ham huy\n";
// //     }
// //     string New_address(string address)
// //     {
// //         return " ";
// //     }
// //     // ham de truy cap thuoc tinh private
// //     void get_phoneNum()
// //     {
// //         cout <<phone_num<<endl;
// //     }

// // private:
// //     int phone_num = 123566789;
// // };

// // // ke thua kieu public(ke thua tat ca phuong thuc,ham nhung ko ke thua constructor hay destructor)
// // class man : public Human{
// //     public:
// //     // constructor
// //     man(const string &name_man, int age_man=0)
// //       :Human(name,age)
// //       {}

// // };

// // class female : public Human{
// //     public:
// //     // constructor
// //     female(const string &name_man, int age_man=0)
// //       :Human(name,age)
// //       {}

// // };

// // // da ke thua

// // class lgbt : public man, public female
// // {

// // };

// // int main()
// // {
// //     // // khai bao tinh
// //     // Human man;
// //     // khai bao con tro quan li class Human ( sd tat ca properties cua class)
// //     // neu ko truyen age = 19 -> mac dinh age = 0
// //     man *Chuong = new man("Minh chuong", 19);
// //     Chuong->name = "Minh Chuong";
// //     Chuong->New_address("Quang Ngai");
// //     Chuong->get_phoneNum();
// //     Chuong->fun();
// // delete Chuong;
// //     return 0;
// // }

// // #2 Class & Object
// // B5
// // #include<bits/stdc++.h>
// // using namespace std;

// // class Human{
// //     public:
// //     Human(){};
// //     int age;
// //     string name;
// //     string address;
// //     string get_phone()
// //     {
// //         return phone_num;
// //     }
// //     void set_phone(string new_phone) {
// //         phone_num = new_phone;
// //     }
// //     private:
// //     string phone_num = "111";
// // };

// // int main() {
// //     Human *new_human = new Human;
// //     new_human->age = 19;
// //     new_human->name = "CHuong MInh IT";
// //     new_human->set_phone("113");
// //     cout <<"So dt da thay doi la: "<<new_human->get_phone()<<endl;
// // delete new_human;

// // }

// // B6 : properties
// // khai bao tinh -> dung . de truy cap thuoc tinh cua doi tuong
// // khao bao dong(*ptr) -> dung -> //
// // class: default access modifier private; struct: default public

// // #include<bits/stdc++.h>
// // using namespace std;

// // struct Bodysize{
// //     int bodysize[3];
// //     // vector<int> bodysie;
// //     float weight;
// // };
// // class Woman {
// //     public:
// //     string fullname;
// //     float weight;
// //     Bodysize bodysize;
// // };

// // int main() {
// //     Woman *new_woman = new Woman;
// //     new_woman->bodysize.weight = 65.6;
// //     new_woman->fullname = "";
// // delete new_woman;

// // }

// // B7 function

// // #include <bits/stdc++.h>
// // using namespace std;

// // class human
// // {
// // public:
// //     string fullname;
// //     int age;
// //     // Neu ko truyen thi tham so mac dinh theo khoi tao
// //     string introduce(string language, bool isFull = true)
// //     {
// //         string msg;
// //         if (language == "Viet Nam")
// //         msg = "Toi la nguoi Viet Nam\n";
// //         if (isFull)
// //             cout << "Hello\n";
// //         else{
// //             cout << "I am Vietnamese\n";
// //         }
// //         return msg;
// //     }

// // private:
// //     int phone_num;
// // };

// // int main()
// // {
// //     human *chuong = new human;
// //     chuong->fullname = "Pham Han Minh Chuong";
// //     string msg = chuong->introduce("Viet Nam");
// //     cout <<msg<<endl;
// // delete chuong;

// // }

// // *Ham cung ten && ham chua struct/class cua object nho hon
// // class message{
// //     public:
// //      string content;
// //      string sender;
// //      string address;
// // };

// // class Human{
// //     public:
// //      string fullname;
// //      int age;
// //      message* Introduce(string language,string address) {
// //         // new : yeu cau vung nho heaf cung cap bo nho
// //         message *new_mes = new message;
// //         if(language=="Vietnam") {
// //             new_mes->address = address;
// //             new_mes->content = "Xin chao, Toi la nguoi Viet Nam\n";
// //             new_mes->sender = "Minh Chuong\n";
// //         }
// //         else {
// //             new_mes->content = "Helo, I am from Viet Nam\n";
// //             new_mes->sender = "Mr.Chuong\n";
// //         }
// //         return new_mes;
// //      }
// //     //  ham cung ten nhung khac tham so truyen vao
// //      message* Introduce(int count){
// //             message *new_mes = new message;
// //         for (int i=0;i<count;i++) {
// //             new_mes->content+= "Hello" + to_string(i) + "\n";
// //         }
// //         return new_mes;
// //      }
// //     private:
// //      int phone_num;
// // };

// // int main() {
// //     Human *new_human = new Human;
// //     // tao contro kieu message quan li con tro tra ve cua ham Introcude
// //     message *new_Mes = new_human->Introduce("Vietnam","QuangNgai");
// //    cout << new_Mes->content<<" "<<new_Mes->address<<" "<<new_Mes->sender<<endl;
// //    message *newMes = new_human->Introduce(4);
// //    cout <<newMes->content<<endl;
// // delete new_human;

// // }

// // B8: Properties and Function

// // #include<iostream>
// // #include<string>

// // // variable global
// // int x;

// // // ham thanh vien co the truy cap truc tiep properties of private cua class do

// // void var_scope(){
// //     int y;
// // }

// // B9 Constructor : ham khoi tao (provide default value for object)
// // Co 3 cach trinh bay :
// // * cach 1 : Regular Constructor (constructor thong thuong co tham so )
// // #include <bits/stdc++.h>
// // using namespace std;

// // class Human{
// //     public:
// //      int age;
// //      string fullname;
// //     Human(string fn,int a) {
// //         // cung cap  cac gia tri ban dau cho bien => khoi tao dc nhieu Object
// //         fullname = fn;
// //         age = a;
// //         cout <<"Day la Regular constructor  co tham so\n";
// //     }
// //     // Constructor cung ten nhung khac tham so
// //     Human() {
// //         cout <<"Day la  constructor khong co tham so\n";
// //     }
// //     void Introduce(string fullname) {
// //         cout <<"Day la "<<fullname<<endl;
// //     }
// //     private:
// //      int num;
// // };
// // int main() {
// //     // cap phat tinh
// //     // Human("Minh Chuong",19);
// //     // cap phat dong  dung pointer quan li
// //     // Human x;
// //     // =>Day la constructor khong co tham so
// //     Human *new_human1 = new Human("Minh Chuong",19);
// //     new_human1->Introduce("Minh Chuong");
// //     Human *new_human2 = new Human("Minh Chuong Pham",19);
// //     new_human1->Introduce("Minh Chuong Pham");
// //     delete new_human1;
// //     delete new_human2;

// // }

// // *cach 2 : Constructor Overloading : Nap chong constructor
// // class Human{
// //     public:
// //      int age;
// //      string fullname;
// //     Human(string fn,int a) {
// //         // cung cap  cac gia tri ban dau cho bien => khoi tao dc nhieu Object
// //         this->fullname = fn;
// //         this->age = a;
// //     }

// // };

// // * cach 3:
// // // Copy Constructor
// //     Human(const Human &other) {
// //         fullname = other.fullname;
// //         age = other.age;
// //     }

// // *cach 4: Ket hop
// // #include <bits/stdc++.h>
// // using namespace std;

// // class Human{
// //     public:
// //      string fullname;
// //      int age;
// //      Human(string fn = "",int a=0) : fullname(fn), age(a) {};
// // };

// // int main() {
// //     Human *new_human = new Human("Minh CHuong",19);
// //     cout <<new_human->fullname<<" "<<new_human->age<<endl;
// //     delete new_human;
// //     return 0;
// // }

// // B10: Destructor

// // #include <iostream>
// // using namespace std;

// // class Message{
// //     int content;
// // };
// // class human{
// //     public:
// //      int age;
// //      string fullname;
// //     //  Neu thuoc tinh trong mot object la mot con tro(tro den vung nho dong)-> delete trong ham huy
// //      Message *new_mes;
// //      human() {
// //         cout <<"Create a default object\n";
// //      }
// //      ~human() {
// //         cout <<"Da xoa doi tuong \n";
// //         delete new_mes;
// //      }
// // };

// // void Capphattinh() {
// //     human newhuman;
// // }

// // void Capphatdong() {
// //     human *new_human = new human;
// //     // delete new_human;
// // }
// // int main() {
// //     Capphattinh();
// //     // Create a default object
// //     // Da xoa doi tuong
// //     Capphatdong();
// //     // cap phat tinh , neu doi tuong dc tao ben ngoai scope main -> tu dong xoa doi tuong
// //     // cap phat dong : not auto delete , ma phai tac dong len de xoa : delete name_object

// // }

// // *Vùng nhớ động (dynamic memory) là vùng bộ nhớ được phân bổ trong thời gian
// // chạy của chương trình, khi chương trình yêu cầu một lượng bộ nhớ
// // cụ thể mà không biết trước kích thước cần thiết trong thời gian biên dịch.
// // #include <iostream>

// // int main() {
// //     // Phân bổ vùng nhớ động cho một số nguyên
// //     int* p = new int;
// //     *p = 10;

// //     std::cout << "Gia tri cua p: " << *p << std::endl;

// //     // Giải phóng bộ nhớ
// //     delete p;

// //     return 0;
// // }

// // B11 : Static: ham tinh -> ko phu thuoc Object , chi can co class
// // bien toan cuc trong class -> them tu khoa static
// // Trong lập trình hướng đối tượng (OOP), một hàm tĩnh (static function)
// //  là một hàm được khai báo với từ khóa static. Hàm tĩnh thuộc về lớp (class)
// //  chứ không phải đối tượng (object) cụ thể nào. Điều này có nghĩa là bạn có thể
// //  gọi hàm tĩnh mà không cần tạo một thể hiện (instance) của lớp

// // #include <iostream> // Bao gồm thư viện iostream
// // #include <string> // Bao gồm thư viện string

// // using namespace std;

// // // khai bao bien o phan vi class Human -> bien static === bien global

// // class Human{
// // public:
// //     string fullname;
// //     int age;
// //     static string name(string fullname) {
// //          return fullname;
// //     }
// //     Human(string fn,int a){
// //     fullname = fn;
// //     age = a;
// //     num_human++;
// //     }
// //     static int num_human;
// // private:
// //     int num;
// // };

// // int Human::num_human = 0;

// // int main() {
// //     // Human *new_human = new Human("Minh Chuong",19);
// //     // Human *new_human2 = new Human("Minh Chuong 2",19);
// //     // cout <<Human::num_human;
// //     // // => 2

// //     // string Fn = Human::name("M Chuong");
// //     // cout <<Fn<<endl;
// //     return 0;
// // }
// // *GPT
// // ko co static -> khoi tao doi tuong
// // #include <iostream>

// // class Math {
// // public:
// //     // Hàm tĩnh để tính bình phương
// //      int square(int x) {
// //         return x * x;
// //     }
// // };

// // int main() {
// //     // Gọi hàm tĩnh mà không cần tạo đối tượng của lớp
// //     Math *math = new Math;
// //     int result = math->square(5);
// //     std::cout << "Binh phuong cua 5 la: " << result << std::endl;
// // delete math;

// //     return 0;
// // }

// // // ham co static
// // #include <iostream>

// // class Math {
// // public:
// //     // Hàm tĩnh để tính bình phương
// //     static int square(int x) {
// //         return x * x;
// //     }
// // };

// // int main() {
// //     // Gọi hàm tĩnh mà không cần tạo đối tượng của lớp
// //     int result = Math::square(5);
// //     std::cout << "Binh phuong cua 5 la: " << result << std::endl;

// //     return 0;
// // }

// // *Nap chong
// // struct sp{
// // nap chong : datatype_return operator math_operator (para)
// //     friend istream& operator >> (sp &s, istream &in);
// //     friend ostream& operator << (sp &s, ostream &os);
// // };

// // B12: Encapsulation : tinh dong goi (set__/get__)
// // => cac phuong thuc, thuoc tinh doi tuong dc dong goi (private)
// // =>Tính đóng gói đảm bảo rằng trạng thái bên trong của một đối tượng
// // (các thuộc tính của nó) được bảo vệ khỏi sự can thiệp và sử dụng từ
// //  bên ngoài, chỉ cho phép truy cập và sửa đổi thông qua các phương thức
// //   được cung cấp bởi đối tượng đó. Điều này giúp kiểm soát cách dữ liệu
// //   được truy cập và sửa đổi, đồng thời bảo vệ tính toàn vẹn của dữ liệu.

// // Ex:
// // #include <bits/stdc++.h>
// // using namespace std;

// // class User{
// //     private:
// //      string name,email,pass;
// //     public:
// //      User(const string& userEmail,const string& userName,const string& userPass)
// //      : name(userName) ,email(userEmail), pass(userPass){}
// //     //  const truoc ham => fun ko thay doi trang thai doi tuong
// //      string getEmail() const{
// //         return email;
// //      }
// //      void setPass(const string& new_pass) {
// //         if(new_pass.length()>=8) {
// //             pass = new_pass;
// //         }
// //         else{
// //             cerr<<"Pass weak!";
// //         }
// //      }

// // };
// // int main() {
// //     User user("minhchuong@gmail.com","minhchuong","passStrong");
// //     cout << user.getEmail();
// //     user.setPass("New_pass_strong");
// // }

// // Ex1:
// // #include<bits/stdc++.h>
// // using namespace std;

// // struct Contact{
// //     string email;
// //     string phone;
// //     int array[3];
// // };

// // class human{
// //     public:
// //      human(string fn, int a,string new_email,string new_phone) {
// //         this->fullname = fn;
// //         this->age = a;
// //         // new_ct.array[0] = 1;
// //         newContact->email = new_email;
// //         newContact->phone = new_phone;
// //      }
// //     //  cach 2
// //     //   Human(string fn, int a, string new_email, string new_phone) : fullname(fn), age(a) {
// //     //     newContact = new Contact; // Allocate memory for newContact
// //     //     newContact->email = new_email;
// //     //     newContact->phone = new_phone;
// //     // }

// //       void display() const {
// //         cout << "Full Name: " << fullname << endl;
// //         cout << "Age: " << age << endl;
// //         cout << "Phone: " << newContact->phone << endl;
// //         cout << "Email: " << newContact->email << endl;
// //     }
// //     ~human() {
// //         // khi khai bao mot du lieu cap phat dong -> delete
// //         delete newContact;
// //     }
// //     private:
// //      int age;
// //      string fullname;
// //     //  khai bao dong con tro quan li cac thuoc tinh trong struct Contact
// //      Contact *newContact = new Contact;

// // };
// // //  "Chuongmin@gmail.com";
// // //  093803024";
// // int main() {
// //     human *new_human = new human("Minh CHuong",19,"Chuongmin@gmail.com","093803024");
// //     new_human->display();
// //     delete new_human;
// //     return 0;
// // }

// // Ex2:
// // #include<bits/stdc++.h>
// // using namespace std;

// // class Account{
// //     private:
// //      double balance;
// //     public:
// //      Account(double initialBalance) {
// //         if(initialBalance >= 0) {
// //             balance = initialBalance;
// //         }
// //         else {
// //             balance = 0;
// //             cerr<<"Initialbalance invalid\n";
// //         }
// //      }
// //      // Phuong thuc nap tien
// //      void deposit(double amount) {
// //         if(amount > 0) {
// //             balance += amount;
// //         }
// //         else {
// //             cerr<<"Deposit amount must be positive\n";
// //         }
// //      }
// //      // Phương thức rút tiền từ tài khoản
// //     void withdraw(double amount) {
// //         if(amount > 0 && amount <= balance) {
// //             balance -= amount;
// //         } else {
// //             std::cerr << "Invalid withdraw amount." << std::endl;
// //         }
// //     }

// //     // Phương thức lấy số dư tài khoản
// //     double getBalance() const {
// //         return balance;
// //     }
// // };

// // int main() {
// //     Account *new_acc = new Account(197.01);
// //     new_acc->deposit(100);
// //     new_acc->withdraw(200);
// //     cout << new_acc->getBalance();
// // }

// // *GPT
// // #include <iostream>
// // #include <string>

// // using namespace std;

// // // Định nghĩa struct ContactInfo để lưu thông tin liên lạc
// // struct ContactInfo {
// //     string phone;
// //     string email;

// //     // Constructor để khởi tạo các giá trị
// //     ContactInfo(string p = "", string e = "") : phone(p), email(e) {}
// // };

// // // Định nghĩa lớp human
// // class human {
// // public:
// //     string fullname;
// //     int age;
// //     ContactInfo contact; // Thêm thuộc tính contact kiểu struct ContactInfo
// //     //  syntax: name_object (data_type_1 name1 = default_value,...) : properties(name1),...{};
// //     // Constructor để khởi tạo giá trị cho fullname, age và contact
// //     human(string fn, int a, ContactInfo ci) : fullname(fn), age(a), contact(ci) {}

// //     // Setter cho age
// //     void set_age(int new_age) {
// //         age = new_age;
// //     }

// //     // Getter cho age
// //     int get_age() const {
// //         return age;
// //     }

// //     // Setter cho contact
// //     void set_contact(const ContactInfo& new_contact) {
// //         contact = new_contact;
// //     }

// //     // Getter cho contact
// //     ContactInfo get_contact() const {
// //         return contact;
// //     }

// //     // Hiển thị thông tin của đối tượng
// //     void display() const {
// //         cout << "Full Name: " << fullname << endl;
// //         cout << "Age: " << age << endl;
// //         cout << "Phone: " << contact.phone << endl;
// //         cout << "Email: " << contact.email << endl;
// //     }

// // private:
// //     int num; // Thuộc tính private không sử dụng trong ví dụ này
// // };

// // int main() {
// //     // Tạo đối tượng ContactInfo mới
// //     ContactInfo ci("123-456-7890", "minhchuong@example.com");

// //     // Tạo đối tượng human mới với thông tin liên lạc
// //     human* new_human = new human("Minh Chuong", 18, ci);

// //     // Thay đổi giá trị age thông qua setter
// //     new_human->set_age(19);

// //     // Hiển thị thông tin của đối tượng
// //     new_human->display();

// //     // Giải phóng bộ nhớ đã cấp phát
// //     delete new_human;

// //     return 0;
// // }

// // * Phuong thuc ao (VIRTUAL_FUN) :
// // Phương thức ảo (virtual method) thường được sử dụng để tạo một giao diện chung cho các lớp (lớp con kế thừa)
// // và cho phép đa hình (polymorphism) và kế thừa. Phương thức thông thường được sử dụng để cung
// // cấp triển khai cụ thể cho lớp hiện tại mà không cần sự tham gia của các lớp con.
// // Ex1:
// // class PaymentMethod {
// // public:
// //     virtual void pay(double amount) const = 0; // Phương thức thuần ảo
// //     virtual ~PaymentMethod() = default; // Destructor ảo mặc định
// // };

// // class CreditCard : public PaymentMethod {
// // public:
// //     void pay(double amount) const override { // Ghi đè phương thức pay từ lớp cơ sở và không thay đổi đối tượng
// //         std::cout << "Paying " << amount << " using Credit Card." << std::endl;
// //     }
// // };

// // B13 :Abstraction( tính trừu tượng )
// // => , tính trừu tượng được sử dụng để che giấu những chi tiết phức tạp
// // và chỉ hiển thị những tính năng cần thiết của một đối tượng đối với người sử dụng.
// // =>Tính trừu tượng trong lập trình hướng đối tượng (OOP) cho phép lập trình viên
// // tập trung vào những gì một đối tượng có thể làm thay vì cách nó làm điều đó.
// //  Điều này có nghĩa là mỗi hàm của đối tượng sẽ thực hiện một chức năng riêng,
// //   và lập trình viên sử dụng đối tượng không cần quan tâm đến chi tiết cách thức
// //    hoạt động của hàm đó. Họ chỉ cần biết giao diện (interface) của hàm và cách sử dụng nó.

// // Ex:
// // #include <iostream>
// // #include <vector>
// // #include <memory>

// // // Các lớp đã được định nghĩa như trên

// // class PaymentMethod {
// // public:
// //     virtual void pay(double amount) const = 0;
// //     virtual ~PaymentMethod() = default;
// // };

// // class ShoppingCart {
// // public:
// //     void addPaymentMethod(std::unique_ptr<PaymentMethod> method) {
// //         paymentMethods.push_back(std::move(method));
// //     }

// //     void checkout(double amount) {
// //         for (const auto& method : paymentMethods) {
// //             method->pay(amount);
// //         }
// //     }

// // private:
// //     std::vector<std::unique_ptr<PaymentMethod>> paymentMethods;
// // };
// // class CreditCard : public PaymentMethod {
// // public:
// //     void pay(double amount) const override {
// //         // Logic thanh toán bằng thẻ tín dụng
// //         std::cout << "Paying " << amount << " using Credit Card." << std::endl;
// //     }
// // };

// // class PayPal : public PaymentMethod {
// // public:
// //     void pay(double amount) const override {
// //         // Logic thanh toán bằng PayPal
// //         std::cout << "Paying " << amount << " using PayPal." << std::endl;
// //     }
// // };

// // class BankTransfer : public PaymentMethod {
// // public:
// //     void pay(double amount) const override {
// //         // Logic thanh toán bằng chuyển khoản ngân hàng
// //         std::cout << "Paying " << amount << " using Bank Transfer." << std::endl;
// //     }
// // };

// // int main() {
// //     ShoppingCart cart;

// //     // Thêm các phương thức thanh toán vào giỏ hàng
// //     cart.addPaymentMethod(std::make_unique<CreditCard>());
// //     cart.addPaymentMethod(std::make_unique<PayPal>());
// //     cart.addPaymentMethod(std::make_unique<BankTransfer>());

// //     // Thanh toán tổng số tiền
// //     cart.checkout(150.0);

// //     return 0;
// // }

// // Ex2
// // #include<bits/stdc++.h>
// // using namespace std;

// // class Human{
// //     public:
// //     Human(const string& n, int a, float w, float h)
// //     : name(n), age(a), weight(w), height(h) {}
// //     // Human(string n, int a, float w) {
// //     //     name = n;
// //     //     age = a;
// //     //     weight = w;
// //     //     height = h;
// //     // }
// //      float getWeight(){
// //         return weight;
// //      }
// //      float getHeight() {
// //         return height;
// //      }
// //     private:
// //      int age;
// //      string name;
// //      float weight;
// //      float height;
// // };

// // class HealthCheck{
// //     public:
// //      void check(Human *human) {
// //         weight = human->getWeight();
// //         height = human->getHeight();
// //         bloodPress = 130;
// //         heartBeat = 80;
// //      }
// //      string getResult () {
// //         float bmi = weight/(height*height);
// //         if(bmi>= 18.5 && bmi <=24.9 && bloodPress >=100 && heartBeat <=100) {
// //             return "Normal";
// //         }
// //         return "Abnormal";
// //      }
// //     private:
// //      float weight;
// //      float height;
// //      int bloodPress;
// //      int heartBeat;
// // };

// // int main() {
// //     Human *new_human = new Human("Minh Chuong",19,55.4,168.8);
// //     HealthCheck *check_new_human = new HealthCheck;
// //     // khong can bt ham check hd ntn -> chi goi ra va sd (1 project : nhieu ng lam )
// //     check_new_human->check(new_human);
// //     string Result = check_new_human->getResult();
// //     cout <<Result<<endl;

// // }

// // B15,16,17 Ke thua: Inheritance
// // *overriding: Ta define mot phuong thuc o lop cha , lop con goi lai (co the chinh sua)
// // * Single Inheritance:lop con ke thua mot lop cha duy nhat
// // * Multilevel Inheritance:Một lớp con có thể kế thừa từ một lớp cha,
// // *Polymorphism(Kế thừa Đa Hình) :Lớp con có thể thay thế (override) các phương thức của lớp cha.
// // *Multiple Inheritance(Kế thừa Đa Hướng):Một lớp con có thể kế thừa từ nhiều lớp cha.
// //  Điều này có thể dẫn đến các vấn đề về mâu thuẫn nếu các lớp cha có các phương thức
// //   hoặc thuộc tính trùng tên.
// //  và lớp cha đó lại kế thừa từ một lớp cha khác
// // Ex:
// // class Duck : public CanFly, public CanSwim {
// // };
// #include <iostream>
// #include <string>

// using namespace std;

// class Vehicle
// {
// public:
//     Vehicle(const string &new_model, const int &new_version)
//         : modelName(new_model), version(new_version) {}

//     string getModelName() const
//     {
//         return modelName;
//     }

//     void setModelName(const string &name)
//     {
//         modelName = name;
//     }

//     int getVersion() const
//     {
//         return version;
//     }

//     void setVersion(int v)
//     {
//         version = v;
//     }

//     // Phương thức virtual cho phép lớp con ghi đè phương thức này
//     //  void run() const
//     // {
//     //     cout << "A vehicle is running!\n";
//     // }
//     // Phương thức ảo thuần túy
//     virtual void speak() const = 0;

// protected:
//     void run()
//     {
//         cout << "A ve is running...\n";
//     }

// private:
//     string modelName;
//     int version;
// };

// class Taxi : public Vehicle
// {
// public:
//     // constructor lop con
//     Taxi(const string &new_model, const int &new_version)
//         : Vehicle(new_model, new_version) {}

//     // Overriding: ghi đè hàm run(co the chinh sua)
//     void start()
//     {
//         // Vehicle::run();
//         // lop con co the goi ham run(protected) / ben ngoai ko truy cap dc
//         run();
//         // cout << "A taxi is running\n";
//     }
//     // Phương thức ảo thuần túy: Được khai báo với = 0, nghĩa là nó không có triển khai
//     // trong lớp cơ sở và các lớp con phải cung cấp triển khai của riêng chúng.
//     void speak() const override
//     {
//         cout << "Beef!" << endl;
//     }
//     // run co t/s != run ko co t/s
//     // void run(int km)
//     // {
//     //     kmCounter = km;
//     // }
//     // int calculate()
//     // {
//     //     return kmCounter * 1000;
//     // }

// private:
//     int kmCounter;
// };

// int main()
// {
//     Taxi *tx = new Taxi("8_AB", 342);
//     cout << tx->getModelName() << endl; // Output: 8_AB
//     cout << tx->getVersion() << endl;   // Output: 342

//     tx->start(); // Output: A taxi is running
//                // 8_AB
//                // 342
//                // A vehicle is running!
//                // A taxi is running
//     // tx->run(10);
//     // cout << tx->calculate() << endl;
//     delete tx; // Giải phóng bộ nhớ
//     return 0;
// }

// B18: Access modifier in inheritance -> class con luon truy cap dc public/protected
// // access scope in class(pham vi truy cap)   in         out         inheritance (ke thua)
// //               public                       1          1              1
// //               private                      1          0              0
// //               protect                      1          0              1
// Ex:
// #include<bits/stdc++.h>
// using namespace std;

// class human{
//     public:
//      void run1(){
//         cout <<"run1\n";
//      }
//     protected:
//      void run2() {
//         cout <<"run2\n";
//      }
//     private:
//      void run3() {
//         cout <<"run3\n";
//      }
// };

// // *class man: public(quy dinh ham sau khi class con ke thua se la public/protected/private) human
// class man: public human{
//     public:
//      void Run(){
//         run1();
//         run2();
//      }

// };

// int main() {
//     man *new_man = new man;
//     new_man->Run();
// }

// Bài 19. Tính kế thừa - Phần 5. Constructor trong quan hệ kế thừa
// * Khoi tao lop cha -> lop con
// * Class cha se khoi tao truoc -> ham con khoi tao (constructor cha van se dc goi)

// Ex: Constructor ko co tham so
// #include <bits/stdc++.h>
// using namespace std;

// class vehicle
// {
// public:
//     vehicle()
//     {
//         cout << "Create a vehicle\n";
//     }
// };

// class taxi : public vehicle
// {
// public:
//     taxi()
//     {
//         cout << "Create a taxi\n";
//     }
// };

// int main()
// {
//     taxi *new_taxi = new taxi();
//     // Create a vehicle
//     // Create a taxi
//      return 0;
// }

// Ex: Constructor co tham so
// #include <bits/stdc++.h>
// using namespace std;

// class vehicle
// {
// public:
//     vehicle() {
//         cout <<"Constructor of class Cha\n";
//     }
//     vehicle(string name)
//     {
//         Fullname = name;
//         cout << "Constructor with paramater name: "<<Fullname<<'\n';
//     }
// private:
//  string Fullname;
// };

// class taxi : public vehicle
// {
// public:
// // constructor ke thua tu class cha
//     taxi(string name):vehicle(name)
//     {
//         cout << "Constructor of class con\n";
//     }
// };

// int main()
// {
//     taxi *new_taxi = new taxi("New name1");
//     taxi *new_taxi2 = new taxi("New name2");
// // Constructor with paramater name: New name1
// // Constructor of class con
// // Constructor with paramater name: New name2
// // Constructor of class con
//      return 0;
// }

// cach2 :
// #include <bits/stdc++.h>
// using namespace std;

// class vehicle
// {
// public:
//     vehicle() {
//         cout <<"Constructor of class Cha\n";
//     }
//     vehicle(string name)
//     {
//         Fullname = name;
//         cout << "Constructor with paramater name: "<<Fullname<<'\n';
//     }
// private:
//  string Fullname;
// };

// class taxi : public vehicle
// {
// public:
//     taxi()
//     {
//         cout << "Constructor of class con\n";
//     }
// };

// int main()
// {
//     taxi *new_taxi = new taxi();
//     // Constructor of class Cha
//    // Constructor of class con
//      return 0;
// }

// Bài 20. Tính kế thừa - Phần 6. Destructor trong quan hệ kế thừa
// *Xoa tu lop con -> lop cha
// #include<bits/stdc++.h>
// using namespace std;

// class vehicle{
//     public:
//      ~vehicle() {
//         cout <<"Da xoa vehicle\n";
//      }
//     private:
//     string name;
// };

// class taxi : public vehicle{
//     public:
//      ~taxi() {
//         cout <<"Da xoa taxi\n";
//      }
// };

// int main() {
//     taxi *new_taxi = new taxi();
//     delete new_taxi;
//     // Da xoa taxi
//    // Da xoa vehicle
//     return 0;
// }

// Bài 21. Phần 7 - Multiple inheritance (Đa kế thừa)
// * Nhieu class ke thua nhau -> tuan tu
// Bài 21.1 Phần 7 - Đa kế thừa (Muti Inheritance).
// * Lop con duoc ke thua tu nhiu cha
// * Syn: class con : public cha1, public cha2
// * error ambigious : khi lop con goi toi ham  trung ten cua 2 lop cha

// B22,23 : Khai niem da hinh (polymorphism)
// *Up-casting: ep kieu
// Up-casting là quá trình chuyển đổi từ một con trỏ hoặc tham chiếu của lớp dẫn xuất(con)
//  sang lớp cơ sở(cha) tương ứng của nó. Nó là an toàn vì mối quan hệ IS-A trong kế thừa:
//   một đối tượng của lớp dẫn xuất(con) cũng là một đối tượng của lớp cơ sở(cha).
// => Khi ep kieu lop con-> cha thi tat ca thuoc tinh cua lop cha thì lớp con đều truy cập được

// Ex:Ví dụ, giả sử có một lớp cơ sở Animal và một lớp dẫn xuất Dog
// #include <iostream>
// using namespace std;
// class Base {
// public:
//      void show() {
//         cout << "Base class show function" << std::endl;
//     }
// };

// class Derived : public Base {
// public:
//     void show()  {
//         cout << "Derived class show function" << std::endl;
//     }
// };

// int main() {
//     Derived *derived = new Derived;
//     ((Base*)derived)->show();
// }

// *Down-casting: Down-casting là quá trình chuyển đổi từ một con trỏ hoặc tham chiếu
// của lớp cơ sở(cha) sang lớp dẫn xuất(con) tương ứng của nó. Điều này có thể không an toàn nếu
//  không chắc chắn rằng đối tượng thực sự là một đối tượng của lớp dẫn xuất. Down-casting
//  cần phải được thực hiện cẩn thận và có thể cần phải kiểm tra sự an toàn của nó.
// => Khi ep cha sang con -> co the co mot vai thuoc tinh cua lop con ma lop cha ko truy cap dc

// #include <iostream>

// class Base {
// public:
//     virtual void show() {
//         std::cout << "Base class show function" << std::endl;
//     }
// };

// class Derived : public Base {
// public:
//     void show() override {
//         std::cout << "Derived class show function" << std::endl;
//     }

//     void specificFunction() {
//         std::cout << "Derived class specific function" << std::endl;
//     }
// };

// int main() {
//     Base* b = new Derived();// (up-casting)
//     Derived* d = dynamic_cast<Derived*>(b);  // Down-casting an toàn
// // dynamic_cast kiểm tra tại runtime để đảm bảo rằng đối tượng được trỏ tới bởi b
// // thực sự là một đối tượng của lớp Derived(con).Nếu không phải, dynamic_cast sẽ trả về nullptr.
//     if (d != nullptr) {
//         d->specificFunction();  // Gọi hàm specificFunction() của lớp Derived
//     } else {
//         std::cout << "Down-casting failed" << std::endl;
//     }
//     // *Khi ta goi thuoc tinh lop con(ma lop cha ko co)-> loi runtime(xay ra khi thuc thi ct)

//     delete b;
//     return 0;
// }

// B24: Virtual Function
// *override(ghide) , nhung them tu khoa virtual -> no se goi ham ghi de theo dung lop con
// #include <bits/stdc++.h>
// using namespace std;

// class Vehicle{
//   public:
//   //  Vehicle() {
//   //   cout <<"vehicle is running!\n";
//   //  }
//    virtual void run(){
//     cout <<"vehicle is running\n";
//    }

// };

// class Taxi : public Vehicle{
//   public:
//   void run() {
//     cout <<"taxi is running\n";
//   }

// };

// class Truck : public Vehicle{
//   public:
//    void run() {
//     cout <<"truck is running\n";
//   }
// };

// int main() {
//   // int x = 5.5
//   Vehicle *taxi = new Taxi();
//   Vehicle *truck = new Truck();
//   Vehicle *vehicle_list[2];
//   vehicle_list[0]=taxi;
//   vehicle_list[1]=truck;
//   for (int i=0;i<2;i++) {
//     vehicle_list[i]->run();
//   }
// }

// B25: Pure Virtual Function và Abstract Class
// *Nếu bạn muốn lớp cơ sở(cha) không cung cấp triển khai cho hàm ảo mà buộc các
// lớp dẫn xuất(con) phải ghi đè, bạn có thể sử dụng pure virtual function.
// Một lớp chứa ít nhất một pure virtual function được gọi là abstract class
// và không thể tạo đối tượng của lớp này.
// Ex:
// #include <iostream>
// // class co pure virtual function -> abstract class
// class AbstractBase {
// public:
//     virtual void show() = 0; // Hàm ảo thuần túy (pure virtual function)
// };

// class ConcreteDerived : public AbstractBase {
// public:
//     void show() override {
//         std::cout << "ConcreteDerived class show function" << std::endl;
//     }
// };

// int main() {
//     // AbstractBase ab; // Không thể tạo đối tượng của abstract class
//     ConcreteDerived cd;
//     AbstractBase* ab = &cd;

//     ab->show(); // Gọi hàm show() của lớp ConcreteDerived

//     return 0;
// }

// B26 interface: Tất cả các hàm trừ constructor đều là pure virtual function

// *Tinh da hinh (Polymorphism) GPT
// Tính đa hình cho phép các đối tượng thuộc các lớp khác nhau có thể được xử lý
// thông qua cùng một giao diện.

// Trong C++, tính đa hình có hai loại chính:

// *Đa hình tĩnh (Compile-time Polymorphism): Còn gọi là đa hình sớm hoặc đa hình
//  trong quá trình biên dịch. Điều này bao gồm nạp chồng hàm (function overloading)
//  và nạp chồng toán tử (operator overloading).
// *Đa hình động (Runtime Polymorphism): Còn gọi là đa hình muộn hoặc đa hình tại
//  thời gian chạy. Điều này đạt được thông qua việc sử dụng virtual function.

// I/ Đa hình tĩnh (Compile-time Polymorphism)
// 1. Nạp chồng hàm (Function Overloading): Cho phép nhiều hàm có cùng tên nhưng khác nhau về kiểu hoặc số lượng tham số.
//  Ex:
//  #include <iostream>

// class Math {
// public:
//     int add(int a, int b) {
//         return a + b;
//     }

//     double add(double a, double b) {
//         return a + b;
//     }
// };

// int main() {
//     Math math;
//     std::cout << math.add(5, 3) << std::endl;        // Output: 8
//     std::cout << math.add(5.5, 3.3) << std::endl;    // Output: 8.8
//     return 0;
// }

// 2.Nạp chồng toán tử (Operator Overloading): Cho phép các toán tử như +, -, *, vv.
// hoạt động trên các đối tượng người dùng định nghĩa.
// #include <iostream>

// class Complex {
// private:
//     double real, imag;
// public:
//     Complex(double r, double i) : real(r), imag(i) {}

//     Complex operator + (const Complex& other) {
//         return Complex(real + other.real, imag + other.imag);
//     }

//     void display() {
//         std::cout << real << " + " << imag << "i" << std::endl;
//     }
// };

// int main() {
//     Complex c1(3.0, 4.0), c2(1.0, 2.0);
//     Complex c3 = c1 + c2;
//     c3.display();  // Output: 4.0 + 6.0i
//     return 0;
// }

// II/Đa hình động (Runtime Polymorphism)
// *Virtual Function: Được sử dụng để ghi đè (override) hàm trong lớp dẫn xuất,
//  cho phép hàm phù hợp của lớp dẫn xuất được gọi thông qua con trỏ hoặc tham
//  chiếu của lớp cơ sở.
// Ex:
// #include <iostream>

// class Base {
// public:
//     virtual void show() {
//         std::cout << "Base class" << std::endl;
//     }
// };

// class Derived : public Base {
// public:
//     void show() override {
//         std::cout << "Derived class" << std::endl;
//     }
// };

// int main() {
//     Base* b;
//     Derived d;
//     b = &d;

//     b->show();  // Output: Derived class
//     return 0;
// }

// => Tính đa hình cho phép các đối tượng từ các lớp khác nhau có thể được xử lý thông qua
//  cùng một giao diện, tạo điều kiện cho sự linh hoạt và mở rộng của mã nguồn. Đa hình tĩnh
//   xảy ra tại thời gian biên dịch và bao gồm nạp chồng hàm và toán tử, trong khi
// đa hình động xảy ra tại thời gian chạy và được thực hiện thông qua virtual function.

// Part 8 :NN mo hinh hoa
// B27,28 : ULM
// => app.diagrams.net: ban thiet ke
// - Extand: ke thua
// - dau :+ public , - private, #protected
// - Composotion: tinh bao ham ( vd: class person co chua class car ): dau hinh thoi gan vao class to hon

//moi quan he giua vehicle va check: lien ket(class nao goi class nao thi huong mui ten ve class do)
// moi quan he giau Person va vehicle: bao ham(composition)-2class doc lap-(hinh thoi rong)
// moi quan he giua person voi engine(dong co):so huu(hinh thoi dac) : quan he manh(2 class gan ket)

// 0..* : co tu 0-> vo han 
// #include <bits/stdc++.h>
// using namespace std;

// class checker;
// class Vehicle;
// class engine;
// class car;

// class checker
// {
// public:
//     void check() {
//         // Implement the check logic
//     }

//     bool getResult() {
//         // Implement the result retrieval logic(trien khai lo gic)
//         return true; // Placeholder
//     }
// };
// class Vehicle
// {
// public:
//     string getModelName() { return modelName; }
//     void setModelName(string name)
//     {
//         modelName = name;
//     }
//     virtual void run()
//     {
//         cout << "Vehicle is running\n";
//     }
//     bool isValid(){
//         bool result = false;
//         checker *che;
//         che->check();
//         result = che->getResult();
//         delete che;
//         return result;
//     }

// protected:
//     string modelName;
// };

// class car : public Vehicle
// {
// public:
//     car()
//     {
//     }
//     ~car()
//     {
//     }
//     void run() override
//     {
//         cout << "The car is running\n";
//     }

// private:
//     string onerName;
//     Engine engine;
// };
// class Person
// {
// public:
//     void setVehicle(Vehicle *V)
//     {
//         vehicle = V;
//     }

// private:
//     Vehicle *vehicle;
//     string name;
// };

// // dong co
// class Engine
// {
// };


// int main()
// {
//     Vehicle *vehicle = new car();

//     Person *person = new Person;
//     person->setVehicle(vehicle);
// }

// B29: initializer_lists -> danh sach khoi tao
// #include<bits/stdc++.h>
// using namespace std;

// class Person;
// class vehicle;

// class vehicle{
// public:
//     vehicle(string name,int year,Person &person) 
//     :modelName(name), 
//     nanufactureYear(year),
//     owner(person),
//     frameSize{2.2,3.2,4.2} {}
// protected:
//     const string modelName;
//     int nanufactureYear;
//     Person &owner;
//     float frameSize[3];
// };

// class Person{

// };

// B30 Copy constructor - deep copy - shallow copy 
// #include<bits/stdc++.h>
// using namespace std;

// class vehicle{
// public:
//     vehicle(string name) : modelName(name){
//         cout <<"Create a "<<name<<endl;
//     }
//     virtual void run() {
//         cout <<modelName << " is running\n";
//     }
//     // Co the tao ham khoi tao cho object copy 
//     // vehicle(vehicle &otherVehicle) {
//     //     cout <<"Clone "<< otherVehicle.getModelName()<<" success\n";
//     //     // dinh nghia lai thuoc tinh cho doi tuong moi 
//     //     modelName = otherVehicle.getModelName();
//     // }
//     string getModelName() { return modelName; }
// protected:
//     string modelName;
// };


// int main() {
//     vehicle *new_ve1 = new vehicle("Kia morning");
//     // *new_ve1: toan tu giai tham chieu -> truy cap vao vung nho new_ve1 gan data cho new_ve2 
//     vehicle *new_ve2 = new vehicle(*new_ve1);
//     new_ve1->run();
//     new_ve2->run();
// }


// Deep copy / shallow copy 
// #include<bits/stdc++.h>
// using namespace std;

// class Person{
// public: 
//     Person(string name) : fullname(name){}
//     void setFullname(string name) { fullname = name;}
//     string getFullname() { return fullname;}
// private:
//   string fullname;
    
// };

// class vehicle{
// public:
//     vehicle(string name) : modelName(name){
//         cout <<"Create a "<<name<<endl;
//     }
//     virtual void run() {
//         cout <<modelName << " is running\n";
//     }
//     // Deep Copy in the Copy Constructor: copy properties / object /..
//     // Co the tao ham khoi tao cho object copy ( doi so la mot reference-> tham chieu)
//     vehicle(vehicle *&otherVehicle) {
//         cout <<"Clone "<< otherVehicle->getModelName()<<" success\n";
//         // dinh nghia lai thuoc tinh cho doi tuong moi 
//         modelName = otherVehicle->getModelName();
//         owner = new Person(otherVehicle->getOwner()->getFullname());
//     }


//     void setOwner(Person *person) { owner = person; }
//     Person *getOwner() { return owner; }
//     string getModelName() { return modelName; }
// protected:
//     string modelName;
//     Person *owner; // tao mot doi tuong co lien quan den class Person
// };

// int main() {
//     Person * person = new Person("Minh Chuong");
//     vehicle *vehicle1 =  new vehicle("Kia morning");
//     vehicle1->setOwner(person);
    
//     // shallow copy  (copy pointer)
//     vehicle * vehicle2 = new vehicle(*vehicle1);

//     // khi vehicle1 đc set Person , thì cả vehicle 1,2 đêù tham chiếu đến 1 đối tường Person 
//     // -> setFullname cho cả 2 . (copy pointer)
//     vehicle2->getOwner()->setFullname("Pham Minh Chuong");
//     cout << vehicle2->getOwner()->getFullname()<<endl;
//     cout << vehicle1->getOwner()->getFullname()<<endl;
    
//     // Create a Kia morning
//     // Clone Kia morning success
//     // Pham Minh Chuong
//     // Pham Minh Chuong


//     // -> Fix: Ta cần tạo một deep copy : Create a newPerson object for the ownew :
//     //  vehicle(vehicle &otherVehicle) {
//     //     cout <<"Clone "<< otherVehicle.getModelName()<<" success\n";
//     //     // dinh nghia lai thuoc tinh cho doi tuong moi 
//     //     modelName = otherVehicle.getModelName();
//     //     owner = new Person(otherVehicle.getOwner()->getFullname());
//     // }

//     // Create a Kia morning
//     // Clone Kia morning success
//     // Pham Minh Chuong
//     // Minh Chuong
    
// }

// Pass by value/reference/pointer 
// Bài 31. const reference of pointer parameter
// * reference : mot ten khac cho bien cu (copy dia chia doi so truyen vao cho tham so)
// truyen dang tham chieu( thay doi thuoc tinh cua du lieu ta truyen vao)
// Ex : RegisterInfo& info == RegisterInfo& info = infoChu (doi so truyen)
// * const : ko lam thay doi du lieu truyen vao 
#include<bits/stdc++.h>
using namespace std;

struct RegisterInfo{
    RegisterInfo() {}
    RegisterInfo(RegisterInfo& otherInfo) {
        cout <<"Clone a register info\n";
    }
    string license;
    string ownerName;
};

class Vehicle{
public:
     Vehicle(string name, RegisterInfo info)
    //  Vehicle(const string &name,const RegisterInfo &info) 
     : modelName(name),
     ownerName(info.ownerName),
     license(info.license)
     {}

     virtual void run() {cout <<"A vehicle is running \n";}

protected:
     string modelName;
     string ownerName;
     string license;
};

int main() {
    RegisterInfo infoChu;
    infoChu.ownerName = "Chu";
    infoChu.license = "28A_32";
    Vehicle * taxi = new Vehicle("Kia morning",infoChu);
    taxi->run();
// Neu ko truyen doi so kieu reference const 
// Clone a register info
// A vehicle is running 

// Neu truyen doi so cho constructor la reference const () -> no se ko goi ham khoi tao register 
// A Vehicle is running 
}