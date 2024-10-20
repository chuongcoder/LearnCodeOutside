# theory of python

# Variable
#c1
# name = input ("what is your name? ") -> input: chuong 
# print ("hello " +name) -> hello chuong
#c2
# print ("helo " + input()) -> helo chuong

# Receiving input
#c1
# birth_of_year = input ("What year are you born?  ")
# age = 2023 - int(birth_of_year)
# print ("your age is : ") 
# print(age) -> 18
#c2
# print ( "Your age is: " +str(int(2023) - int(input("Input your birth year: ")))) -> 18
# Ep kieu : data_type(parameter(thamso));

# Type conversion (chuyen doi kieu data)
# c1
# number1= input ("Number1: ")
# number2=input("NUmber2: ")
# (result)=float(number1) + float(number2)
# print(result) -> 30.1
# c2
# print ("Result is: " + str(float(input("number1: "))+float(input("number2: "))))-> 30,1

# String
# newstring = 'Pham han minh chuong'
# print(newstring.find('c')) -> index of character
# print(newstring[0]) -> character
# print(newstring.upper()) -> Uppercase all character
# print(newstring.count('a')) -> value : count of charater in string
# print(newstring.replace('chuong','Chuong')) -> replace
# print('chuong' in newstring) -> bolean: true / false
# print(newstring.find('chuong')) -> index of first character of 'chuong' -> 14

# Arithmetic Operators (toan tu so)
# print(10 + 3) -> 13
# print(10/3) -> 3.3333333
# print(10//3) -> 3
# print(10&3)-> 1
# print(10**3) -> 1000

# Operator Precedence (thu tu uu tien trong toan tu so)
# print((10+3)*2) -> 26
# print (10+3*2) -> 16

# Comparison Operators( toan tu ss) 
# print(3>2) -> true
# == , >=,<= ,!=

# Logical Operators (toan tu logic)
# price=25
# print (price >10 and price <50) -> true
# print (price <10 or price <50) -> true
# print (not price <10 ) -> true (not : toan tu phu dinh bolean)

# If statements
# temperature = int(input ("Temperature : "))
# if(temperature > 30) :print("> 30") 
# elif temperature > 20 :print(" (20,30]")
# elif temperature >10:print(" (10,20]") 
# else : print("it is cold")

# Exercises: 
# weight = float(input("Weight: "))
# temp = input("(K)g or (L)bs: ")
# if(temp =="k" or temp =="K"  ) :print ("Weight in kg: " + str(float(weight/1000))) 
# elif temp =="L" or temp == "l": print ("Weight in bs: " + str(float((weight/1000)/0.45359237))) 
# else : print ("Error ! ")

#c2
# weight = float(input("Weight: "))
# unit = input("(K)kg or (L)bs: ")
# if unit.upper() == "K": print  ( " weight in Kgs: "  + str(weight * 0.45) )   unit.upper() == "Uper_character" ->return true for all lower or upper of this character
# else : print ( "weight in Lbs: " + str(weight / 0.45) )

# while loop
# i=1
# while i<=5 :
#     print (i*'*')
#     i+=1
# output:
# *
# **
# ***
# ****
# *****

#Lists
# newlist = [ "Pham","Han","Minh","Chuong"] 
# index : 0, 1, 2,.. n-1 / -n,-n+1,-n+2,...-1
# newlist[1] = "Hoang" -> Han => Hoang
# print(newlist[3]) -> Chuong
# print(newlist)  -> Pham Han Minh Chuong
# print (newlist[0:3]) -> Pham Han Minh ([index:count(0,1,2)])

#Lists Method
# number = [1,2,3,4,5]
# number.append(6) -> add in the end of List
# number.insert(0,-1) -> (index,value) :insert
# number.remove(3) -> remove value 3
# del number[index] -> remove
# print(len(number)) -> length of List
# number.clear() ->  []

# print(number)

# Concatenating lists
# list1 = [1, 2, 3]
# list2 = ['a', 'b', 'c']
# combined_list = list1 + list2
# print(combined_list)  # Output: [1, 2, 3, 'a', 'b', 'c']

# # Repetition
# repeated_list = [1] * 3
# print(repeated_list)  # Output: [1, 1, 1]

#For loop
# Numbers=[1,2,3,4,5]
# Syntax: For name_of_var in name_of_list : code
# for item in Numbers : print (item) 
# i=0 
# -> 1 2 3 4 5
# while (i<len(Numbers)) : print (Numbers[i]) ; i+=1
# -> 1 2 3 4 5

#The range() Function
# Syntax : range ([start],stop,[step]) (value < stop ) stop : bat buoc co
# for number in range(1,10,2) : print (number) -> 1,3,5,7,9
# for number in range (5) : print (number) -> 0 1 2 3 4

#Tuples
# Creating a tuple
# my_tuple = (1, 2, 3, 'a', 'b')

# # Accessing elements in a tuple ( truy cap)
# print(my_tuple[0])  # Output: 1
# print(my_tuple[3])  # Output: 'a'

# # Slicing a tuple (cat)
# print(my_tuple[1:4])  # Output: (2, 3, 'a')

# # Tuple with a single element 
# single_element_tuple = (4,)  # Note the comma
# print(single_element_tuple)  # Output: (4,)

# # Nested tuples
# nested_tuple = ((1, 2), ('a', 'b'))
# print(nested_tuple)  # Output: ((1, 2), ('a', 'b'))

# # Tuple unpacking
# x, y, z = my_tuple[:3]
# print(x, y, z)  # Output: 1 2 3
