// #include <bits/stdc++.h>
// using namespace std;

// class sinhvien
// {
// public:
//     string hoten, gioitinh;
//     string namsinh, diachi;
//     string masv, lop;
//     float tin1, tin2, tin3, tin4, anh1, anh2, DTB;

//     void nhap();
//     void hienthi();
// };

// // :: toan tu pham vi
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
// }

// void sinhvien::hienthi()
// {
//     // Tính điểm trung bình
//     DTB = (tin1 + tin2 + tin3 + tin4 + anh1 + anh2) / 6;
//     // Hiển thị thông tin sinh viên với định dạng cột
//     cout << left << setw(15) << hoten << setw(10) << gioitinh << setw(10) << namsinh
//          << setw(15) << diachi << setw(15) << masv << setw(10) << lop
//          << setw(8) << tin1 << setw(8) << tin2 << setw(8) << tin3 << setw(8) << tin4
//          << setw(8) << anh1 << setw(8) << anh2 << setw(10) << fixed << setprecision(2) << DTB;

//     // Xếp loại học lực
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

// class quanlysv : public sinhvien
// {
// public:
//     sinhvien sv[100];
//     int n;

//     void nhap();
//     void hienthi();
//     void xeploaiHL();
//     void dssvDTBtd();
//     void dssvDTBgd();
//     void timsvDTBMAX();
//     void timkiemsv();
// };

// void quanlysv::nhap()
// {
//     cout << "Nhap so luong sinh vien: ";
//     cin >> n;
//     for (int i = 0; i < n; i++)
//     {
//         cout << "\nSinh vien thu: " << i + 1 << "\n";
//         sv[i].nhap();
//     }
// }

// void quanlysv::hienthi()
// {
//     cout << left << setw(15) << "Ho Ten" << setw(10) << "Gioi Tinh" << setw(10) << "Nam Sinh"
//          << setw(15) << "Dia Chi" << setw(15) << "Ma Sinh Vien" << setw(10) << "Lop"
//          << setw(8) << "Tin1" << setw(8) << "Tin2" << setw(8) << "Tin3" << setw(8) << "Tin4"
//          << setw(8) << "Anh1" << setw(8) << "Anh2" << setw(10) << "DTB" << setw(12) << "Xep Loai" << endl;
//     for (int i = 0; i < n; i++)
//     {
//         sv[i].hienthi();
//     }
// }

// void quanlysv::xeploaiHL()
// {
//     cout << "\n---Sinh vien xep loai hoc luc gioi---" << endl;
//     for (int i = 0; i < n; i++)
//     {
//         if (sv[i].DTB >= 8)
//         {
//             sv[i].hienthi();
//         }
//     }

//     cout << "\n---Sinh vien xep loai hoc luc yeu---" << endl;
//     for (int i = 0; i < n; i++)
//     {
//         if (sv[i].DTB < 5)
//         {
//             sv[i].hienthi();
//         }
//     }
// }

// void quanlysv::dssvDTBtd()
// {
//     cout << "\n---Danh sach sinh vien co diem trung binh tang dan---\n";
//     sort(sv, sv + n, [](sinhvien a, sinhvien b)
//          { return a.DTB < b.DTB; });

//     for (int i = 0; i < n; i++)
//     {
//         sv[i].hienthi();
//     }
// }

// void quanlysv::dssvDTBgd()
// {
//     cout << "\n---Danh sach sinh vien co diem trung binh giam dan---\n";
//     sort(sv, sv + n, [](sinhvien a, sinhvien b)
//          { return a.DTB > b.DTB; });

//     for (int i = 0; i < n; i++)
//     {
//         sv[i].hienthi();
//     }
// }

// void quanlysv::timsvDTBMAX()
// {
//     cout << "\n---Danh sach sinh vien co diem trung binh cao nhat---\n";
//     float maxDTB = -1;
//     for (int i = 0; i < n; i++)
//     {
//         if (sv[i].DTB > maxDTB)
//         {
//             maxDTB = sv[i].DTB;
//         }
//     }
//     for (int i = 0; i < n; i++)
//     {
//         if (sv[i].DTB == maxDTB)
//         {
//             sv[i].hienthi();
//         }
//     }
// }

// void quanlysv::timkiemsv()
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

//     for (int i = 0; i < n; i++)
//     {
//         if (sv[i].masv == msv)
//         {
//             sv[i].hienthi();
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