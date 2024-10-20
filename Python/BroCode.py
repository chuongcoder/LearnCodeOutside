# 2. Var 
# name = "Chuong"
# print(name+ " Minh")
# print(type(name))
# => str ,int, boolean (check = True/False)
# check = True
# print("You are human:"+ str(check))
# *gan nhieu bien : a = b = c = 1

# 4. String method : 
# name = "minh chuong"
# name2 = "C"
# print(len(name))
# print(name.find("C"))
# print(name.capitalize()) => chuan hoa : Minh chuong (auto upper chu cai dau )
# print(name.upper()) 
# print(name.lower())
# print(name2.isalpha()) => true 
# print(name.isdigit())
# print(name.count("o"))
# print(name.replace("o","a"))
# print(name*3) => x3 lan str 

# 5.Type casting : convert the data type of a value to another data type
# x = 1
# y = 2.0
# print(int(y))=> 2


# 6.use input 
# name = input("What is ur name?:  ")
# age = int(input("How old are you?: "))
# age = age + 1
# print("Your name is: " + name + " and you "+str(age) +" years old")

# 7.Math function 
# import math
# pi = 3.14
# print(max(x,y,z))
# print(min(x,y,z))
# print(abs(pi))
# print(pow(pi,2))
# print(math.sqrt(pi))
# # auto 
# print(round(pi)) 
# # auto up 
# print(math.ceil(pi)) 
# # auto down
# print(math.floor(pi))
# abs


# 8.String slicing 
# name = "M CHuong"

# # syn: str[idx_start:idx_end+1]
# name2 = name[2:8]
# print(name2)
# # => Chuong

# # syn: str[idx]
# name3 = name[4]
# print(name3)
# # => u 

# # syn :str[start:stop:step] 
# # syn :str[0:end:step] == str[::step] 
# new_name = name[0:8:2]
# print(new_name)
# # => MCun 

# # syn: str[:idx] => auto str[0:idx]  
# name4 = name[:3]
# print(name4)
# # => M C 

# # syn: str[idx:] => auto str[idx:end]
# name5 = name[4:]
# print(name5)
# # => uong

# # syn: str[::-1] == str[0:end:-1] => reverse 
# name_rev = name[::-1]
# print(name_rev)
# # => gnouHC M 

# # syn: slice(idx_start,idex_end+1)
# website = "http://google.com"
# slice1 = slice(7,-4) 
# slice2 = slice(7,13)
# print(website[slice2])
# # => google (slice1 == slice2)

# 9_10. if statements & logic
# syn : if(not) dk1 and/or dk2 : code
#  elif(not) dk : code

# Ex: 
# age = int(input("Input your age here: "))
# if age>=0 and age==21 : print("You are 21 years old") 
# elif not age!=21 : print("You aren't 21 years old")
# el : print("ya u are young")



name = input("Nhap name: ")
print(name)