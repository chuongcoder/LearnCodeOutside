// #include <bits/stdc++.h>
// using namespace std;

// class sinhvien
// {
// public:
//     string hoten, gioitinh, namsinh, diachi, masv, lop;
//     float tin1, tin2, tin3, tin4, anh1, anh2, DTB;

//     void nhap();
//     void hienthi() const;
//     friend istream &operator>>(istream &in, sinhvien &sv);
//     friend ostream &operator<<(ostream &out, const sinhvien &sv);
//     bool operator<(const sinhvien &sv) const
//     {
//         return this->DTB < sv.DTB;
//     }
//     bool operator>(const sinhvien &sv) const
//     {
//         return this->DTB > sv.DTB;
//     }
// };

// void sinhvien::nhap()
// {
//     cin.ignore();
//     cout << "Nhap ho ten: ";
//     getline(cin, hoten);
//     cout << "Nhap gioi tinh: ";
//     getline(cin, gioitinh);
//     cout << "Nhap nam sinh: ";
//     getline(cin, namsinh);
//     cout << "Nhap dia chi: ";
//     getline(cin, diachi);
//     cout << "Nhap ma sinh vien: ";
//     getline(cin, masv);
//     cout << "Nhap lop: ";
//     getline(cin, lop);
//     cout << "Nhap diem tin 1: ";
//     cin >> tin1;
//     cout << "Nhap diem tin 2: ";
//     cin >> tin2;
//     cout << "Nhap diem tin 3: ";
//     cin >> tin3;
//     cout << "Nhap diem tin 4: ";
//     cin >> tin4;
//     cout << "Nhap diem anh 1: ";
//     cin >> anh1;
//     cout << "Nhap diem anh 2: ";
//     cin >> anh2;
//     cout << endl;
//     DTB = (tin1 + tin2 + tin3 + tin4 + anh1 + anh2) / 6;
// }

// void sinhvien::hienthi() const
// {
//     cout << left << setw(15) << hoten << setw(10) << gioitinh << setw(10) << namsinh
//          << setw(15) << diachi << setw(15) << masv << setw(10) << lop
//          << setw(8) << tin1 << setw(8) << tin2 << setw(8) << tin3 << setw(8) << tin4
//          << setw(8) << anh1 << setw(8) << anh2 << setw(10) << fixed << setprecision(2) << DTB;

//     if (DTB >= 8)
//     {
//         cout << setw(12) << "Gioi";
//     }
//     else if (DTB >= 7)
//     {
//         cout << setw(12) << "Kha";
//     }
//     else if (DTB >= 5)
//     {
//         cout << setw(12) << "TB";
//     }
//     else
//     {
//         cout << setw(12) << "Yeu";
//     }
//     cout << endl;
// }

// istream &operator>>(istream &in, sinhvien &sv)
// {
//     sv.nhap();
//     return in;
// }

// ostream &operator<<(ostream &out, const sinhvien &sv)
// {
//     sv.hienthi();
//     return out;
// }

// class quanlysv
// {
// public:
//     vector<sinhvien> sv;
//     void nhap();
//     void hienthi() const;
//     void xeploaiHL() const;
//     void dssvDTBtd();
//     void dssvDTBgd();
//     void timsvDTBMAX() const;
//     void timkiemsv() const;
// };

// void quanlysv::nhap()
// {
//     int n;
//     cout << "Nhap so luong sinh vien: ";
//     cin >> n;
//     sv.resize(n);
//     for (int i = 0; i < n; ++i)
//     {
//         cout << "\nSinh vien thu: " << i + 1 << "\n";
//         cin >> sv[i];
//     }
// }

// void quanlysv::hienthi() const
// {
//     cout << left << setw(15) << "Ho Ten" << setw(10) << "Gioi Tinh" << setw(10) << "Nam Sinh"
//          << setw(15) << "Dia Chi" << setw(15) << "Ma Sinh Vien" << setw(10) << "Lop"
//          << setw(8) << "Tin1" << setw(8) << "Tin2" << setw(8) << "Tin3" << setw(8) << "Tin4"
//          << setw(8) << "Anh1" << setw(8) << "Anh2" << setw(10) << "DTB" << setw(12) << "Xep Loai" << endl;
//     for (const auto &s : sv)
//     {
//         cout << s;
//     }
// }

// void quanlysv::xeploaiHL() const
// {
//     cout << "\n---Sinh vien xep loai hoc luc gioi---" << endl;
//     for (const auto &s : sv)
//     {
//         if (s.DTB >= 8)
//         {
//             cout << s;
//         }
//     }

//     cout << "\n---Sinh vien xep loai hoc luc yeu---" << endl;
//     for (const auto &s : sv)
//     {
//         if (s.DTB < 5)
//         {
//             cout << s;
//         }
//     }
// }

// void quanlysv::dssvDTBtd()
// {
//     cout << "\n---Danh sach sinh vien co diem trung binh tang dan---\n";
//     sort(sv.begin(), sv.end());

//     for (const auto &s : sv)
//     {
//         cout << s;
//     }
// }

// void quanlysv::dssvDTBgd()
// {
//     cout << "\n---Danh sach sinh vien co diem trung binh giam dan---\n";
//     sort(sv.rbegin(), sv.rend());

//     for (const auto &s : sv)
//     {
//         cout << s;
//     }
// }

// void quanlysv::timsvDTBMAX() const
// {
//     cout << "\n---Danh sach sinh vien co diem trung binh cao nhat---\n";
//     auto max_it = max_element(sv.begin(), sv.end(), [](const sinhvien &a, const sinhvien &b)
//                               { return a.DTB < b.DTB; });
//     // max_it: doi tuong co DTB cao nhat
//     for (const auto &s : sv)
//     {
//         if (s.DTB == max_it->DTB)
//         {
//             cout << s;
//         }
//     }
// }

// void quanlysv::timkiemsv() const
// {
//     string msv;
//     cout << "\nNhap ma sinh vien can tim: ";
//     cin >> msv;
//     int count = 0;
//     cout << "\n---Thong tin sinh vien---\n";
//     cout << left << setw(15) << "Ho Ten" << setw(10) << "Gioi Tinh" << setw(10) << "Nam Sinh"
//          << setw(15) << "Dia Chi" << setw(15) << "Ma Sinh Vien" << setw(10) << "Lop"
//          << setw(8) << "Tin1" << setw(8) << "Tin2" << setw(8) << "Tin3" << setw(8) << "Tin4"
//          << setw(8) << "Anh1" << setw(8) << "Anh2" << setw(10) << "DTB" << setw(12) << "Xep Loai" << endl;

//     for (const auto &s : sv)
//     {
//         if (s.masv == msv)
//         {
//             cout << s;
//             count++;
//         }
//     }
//     if (count == 0)
//     {
//         cout << "\nKhong tim thay thong tin sinh vien\n";
//     }
// }

// void menu() {
//     quanlysv QLSV;
//     int choice;
//     do {
//         cout << "\n===== Menu =====\n";
//         cout << "1. Nhap thong tin sinh vien\n";
//         cout << "2. Hien thi thong tin sinh vien\n";
//         cout << "3. Xep loai hoc luc\n";
//         cout << "4. Sap xep sinh vien theo DTB tang dan\n";
//         cout << "5. Sap xep sinh vien theo DTB giam dan\n";
//         cout << "6. Tim sinh vien co DTB cao nhat\n";
//         cout << "7. Tim sinh vien theo ma sinh vien\n";
//         cout << "0. Thoat\n";
//         cout << "Nhap lua chon: "; cin >> choice;

//         switch (choice) {
//         case 1:
//             QLSV.nhap();
//             break;
//         case 2:
//             QLSV.hienthi();
//             break;
//         case 3:
//             QLSV.xeploaiHL();
//             break;
//         case 4:
//             QLSV.dssvDTBtd();
//             break;
//         case 5:
//             QLSV.dssvDTBgd();
//             break;
//         case 6:
//             QLSV.timsvDTBMAX();
//             break;
//         case 7:
//             QLSV.timkiemsv();
//             break;
//         case 0:
//             cout << "Thoat chuong trinh.\n";
//             break;
//         default:
//             cout << "Lua chon khong hop le. Vui long chon lai.\n";
//             break;
//         }
//     } while (choice != 0);
// }

// int main() {
//     menu();
//     return 0;
// }