//* Data entry in java 
//Ex: 
//package com.mycompany.TheoryJava;
//import java.util.Scanner;
//
//public class Theory {
//    public static void main(String[] args) {
//        Scanner scanner = new Scanner(System.in);
//        System.out.print("Enter your name: ");
//        String name = scanner.nextLine();
//        System.out.print("Enter your age: ");
//        int age = scanner.nextInt();
//        System.out.print("Enter your GPA: ");
//        float gpa = scanner.nextFloat();
        
//        System.out.println("Hello " + name + ", Age: " + age + ", GPA: " + gpa);
//        scanner.close();
//    }
//}
//*MENU : Ctr + F: [Key word]
//I -  DATA TYPE 
//II - CONDITION 
//III - LOOP  
//IV - OPERATOR 
//V - METHOD 
//VI - ARRAY





//I -  DATA TYPE 
//1. Primitive Data Type Variables: Boolean, character, integer(Byte, Short,Int,Long), floating
//int: Holds an integer value (e.g., int age = 25;).
//double: Holds a double-precision floating-point value (e.g., double luongCoBan = 45000.50;).
//char: Holds a single character (e.g., char grade = 'A';).
//boolean: Holds a value of true or false (e.g., boolean isPassed = true;).
//byte: Holds a small integer value (e.g., byte b = 10;).
//short: Holds a small integer value (e.g., short s = 10000;).
//long: Holds a large integer value (e.g., long distance = 100000L;).
//float: Holds a single-precision floating-point value (e.g., float price = 19.99f;).
//2. Reference Data Type Variables
//These variables hold references to objects, rather than the data itself.
//String: Holds a sequence of characters (e.g., String name = "Alice";).
//Array: Holds multiple values of the same type (e.g., int[] numbers = {1, 2, 3};).
//Class Types: Holds references to objects of classes (e.g., Dog myDog = new Dog();).
//* Format code: Alt + Shift + F 
//Variable Naming Rules
//Variable names are case-sensitive.
//The name must start with a letter, underscore (_), or dollar sign ($).
//Subsequent characters can include letters, digits, underscores, or dollar signs.
//Variable names cannot be a Java keyword (e.g., int, class, public).
//public class Theory {
//
//    public static void main(String[] args) {
//        // Declaring and initializing an int variable
//        int age = 25;
//
//// Declaring a double variable without initializing
//        double luongCoBan;
//  
//// Initializing the double variable later
//        luongCoBan = 45000.50;
//
//// Declaring multiple variables of the same type
//        int x = 5, y = 10, z = 15;
//
//    }
//}
//Scope of Variables
//The scope of a variable defines where it can be accessed within a program:
//
//1. Local Variables
//Declared inside a method, constructor, or block.
//Only accessible within the block where it’s declared.
//They are not initialized by default; you must initialize them before use.
//
//Ex: 
//package com.mycompany.TheoryJava;
//
//public class Theory {
//   public static void main(String[] args) {
//        calculate();
//    }
//    public static void calculate() {
//        int result = 0;
//        result += 5;
//        System.out.println(result);
//    }
//}
//II - Condition Statement 
//if (condition1) {
//    // Code to execute if condition1 is true
//} else if (condition2) {
//    // Code to execute if condition1 is false and condition2 is true
//} else if (condition3) {
//    // Code to execute if condition1 and condition2 are false, and condition3 is true
//} else {
//    // Code to execute if all the above conditions are false
//}
//Ex: 
//package com.mycompany.TheoryJava;
//
//import java.util.Scanner;
//
//public class Theory {
//
//    public static void main(String[] args) {
//        Scanner scanner = new Scanner(System.in);
//        System.out.print("Enter your age: ");
//        int age = scanner.nextInt();
//        boolean hasPermission = true;
//        if (age >= 18) {
//            if (hasPermission) {
//                System.out.println("You can enter the event.");
//            } else {
//                System.out.println("You cannot enter the event without permission.");
//            }
//        } else {
//            System.out.println("You are too young to enter the event.");
//        }
//    }
//}


//* Switch - case; 
//switch (expression) {
//    case value1:
//        // code block for value1
//        break;
//    case value2:
//        // code block for value2
//        break;
//    // add more cases as needed
//    default:
//        // code block if none of the cases match
//}

//Ex:
//int day = 3;
//switch (day) {
//    case 1:
//        System.out.println("Sunday");
//        break;
//    case 2:
//        System.out.println("Monday");
//        break;
//    case 3:
//        System.out.println("Tuesday");
//        break;
//    default:
//        System.out.println("Invalid day");
//}


//

//III - LOOP  
//for (int i = 0; i < 10; i++) {
//    System.out.println("Iteration: " + i);
//}
//int i = 0;
//while (i < 10) {
//    System.out.println("Iteration: " + i);
//    i++;
//}
//int i = 0;
//do {
//    System.out.println("Iteration: " + i);
//    i++;
//} while (i < 10);
//
//for (int i = 0; i < 10; i++) {
//    if (i == 5) {
//        break;
//    }
//    System.out.println("Iteration: " + i);
//}
//for (int i = 0; i < 10; i++) {
//    if (i % 2 == 0) {
//        continue;
//    }
//    System.out.println("Odd number: " + i);
//}
//IV - OPERATOR 
//1. Arithmetic Operators: +,-,*,/,%
//2. Relational Operators: ==, != , >= , <=
//3. Logical Operators: && , || , ! , >, <
//4. Assignment Operators: +=,-=,/=,%=,*=
//5. Increment and Decrement Operators 
//int a = 5;
//a++;  // a is now 6
//int a = 5;
//a--;  // a is now 4
//6. Ternary Operator 
//int a = 5;
//int b = (a > 3) ? 10 : 20;  // b is 10 if a > 3, otherwise b is 20
//7. Bitwise Operators
//Used for bit-level operations.
//
//& (Bitwise AND)
//| (Bitwise OR)
//^ (Bitwise XOR)
//~ (Bitwise NOT)
//<< (Left shift)
//>> (Right shift)
//>>> (Unsigned right shift)
//8. Instanceof Operator
//object instanceof ClassName
//String str = "Hello";
//boolean result = (str instanceof String);  // result is true
//V - METHOD 
//- sync : 
//modifyAccess returnType methodName(parameters) {
//    // Method body
//}
//modifyAccess: public, private, protected 
//returnType: The type of value the method returns (e.g., int, double, String). Use void if the method does not return a value.
//methodName: The name of the method. It should be descriptive of what the method does.
//parameters: A comma-separated list of input values the method can accept. Each parameter has a type and a name.
//Ex: 
//package com.mycompany.TheoryJava;
//
//public class Theory {
//
//    //Method to add two number 
//    public int add(int a, int b) {
//        return a + b;
//    }
//
//    // Method with no return value 
//    public void printGreeting() {
//        System.out.println("Hello World!");
//    }
//    // Main method to test the other methods
//
//    public static void main(String[] args) {
//        Theory theory = new Theory();
//
//        int result = theory.add(3, 4);
//        System.out.println("Sum: " + result);
//
//        theory.printGreeting();
//    }
//}
//V.1/ Types of Methods
//a. Instance Methods :  Instance methods are methods that belong to a specific instance of a class.
//They operate on the instance's data and can modify or use instance(the hien)
//Belong to(thuoc ve) an instance of a class.
//Can access and modify(sua doi) instance variables.
//Require an instance to be invoked(duoc goi).
//Use the this keyword to refer(tham chieu) to the current instance.

//Ex1: 
//import java.util.Scanner;
//public class Theory {
//
//    int value;
//    public static void main(String[] args) {
//        Scanner s = new Scanner(System.in);
//        System.out.print("Input value: ");
//        int value = s.nextInt();
//        
//        Theory theory = new Theory();
//        theory.setValue(value);
//        
//        System.out.println("The value is: " + theory.getValue());
//        
//        s.close();
//    }
//
//    public void setValue(int value) {
//        this.value = value;
//    }
//    // Create an instance of Theory to call non-static methods
//
//    public int getValue() {
//        return value;
//    }
//}

//Ex2: 
//public class Person {
//    // Static variable
//    private static int count = 0;
//    // Instance variables 
//    private String name;
//    private int age;
//
//    // Instance method
//    public void setName(String name) {
//        this.name = name;  // 'this' refers to the current instance
//    }
//
//    // Instance method
//    public String getName() {
//        return this.name;  // 'this' refers to the current instance
//    }
//
//    // Instance method
//    public void celebrateBirthday() {
//        this.age++;  // Increment the age of this specific instance
//    }
//
//    public static void main(String[] args) {
//        Person person = new Person();  // Create an instance of Person
//        person.setName("Alice");  // Call instance method
//        person.celebrateBirthday();  // Call instance method
//        System.out.println(person.getName() + " is now " + person.age + " years old.");
//    }
//}

//b.Static Methods: : Static methods belong to the class itself rather than to any particular instance of the class. 
//They can be called without creating an instance of the class.

//Belong to the class itself.
//Can access and modify static variables.
//Can be invoked(dc goi) without creating an instance(thay the).
//Cannot use the this keyword.

//Ex1: 
//package com.mycompany.TheoryJava;
//public class Theory {
//
//    // Method to add two numbers
//    public int add(int a, int b) {
//        return a + b;
//    }
//
//    public static void main(String[] args) {
//        Theory theory = new Theory();
//        // Output the result
//        System.out.println("The sum: " + theory.add(5,3));
//    }
//}

//Ex2: 
//package com.mycompany.TheoryJava;
//public class Theory {
//    // Static variable
//    private static int count = 0;
//
//    // Constructor
//    public Theory() {
//        count++;  // Increment the static variable
//    }
//
//    // Static method to get the value of the static variable
//    public static int getCount() {
//        return count;
//    }
//
//    public static void main(String[] args) {
//        Theory c1 = new Theory();
//        Theory c2 = new Theory();
//        Theory c3 = new Theory();
//
//        System.out.println("Total number of Counter objects created: " + Theory.getCount());
//    }
//}


//c.Special Types 
//- Constructor Method: A special method that is called when an object is instantiated. It is used to initialize objects.
//public MyClass() {
//    System.out.println("Constructor called!");
//}
//
//- Abstract(truu tuong) Method: A method that is declared without an implementation(Thuc hien). It must be implemented in a subclass.
//abstract class MyAbstractClass {
//    abstract void abstractMethod();
//}
//
//- Final Method: A method that cannot be overridden by subclasses.
//public final void display() {
//    System.out.println("This method cannot be overridden.");
//}
//- Synchronized Method: A method that is synchronized(dong bo), meaning it can be accessed by only one thread at a time.
//public synchronized void syncMethod() {
//    // code that requires synchronization
//}

//- Method Overloading:When a class has multiple methods with the same name but different parameter lists.
//public void display(int a) {
//    System.out.println(a);
//}
//
//public void display(String a) {
//    System.out.println(a);
//}

//- Recursive Method 
//Recursive Method: A method that calls itself in order to solve a problem.
//public int factorial(int n) {
//    if (n == 1) {
//        return 1;
//    }
//    return n * factorial(n - 1);
//}


//VI - ARRAY
//1. Declaration : 
//int[] numbers;  // Declaration of an integer array
//String[] names; // Declaration of a String array

//2. Instantiation:
//numbers = new int[5];  // Creates an integer array with 5 elements
//names = new String[3]; // Creates a String array with 3 elements
//int[] numbers = {1, 2, 3, 4, 5}; // Array initialized with values

//3. Access: 
//int firstNumber = numbers[0]; // Access the first element
//numbers[2] = 10;              // Modify the third element

//Ex: 
//package com.mycompany.TheoryJava;
//
//public class Theory {
//    public static void main(String[] args) {
//        int[] numbers = {1,2,3,4,5};
//        
//        System.out.println("First element: " + numbers[0]);
//        
//        numbers[2] = 10;
//        
//        for (int i = 0; i < numbers.length; i++) {
//            System.out.print(numbers[i] + " ");
//        }
//        
//        for (int x : nmbers) {
//            System.out.print(x + " ");
//        }
//    }
//}


//Ex2 
//public class TwoDArrayExample {
//    public static void main(String[] args) {
//        // Declare and initialize a 2D array
//        int[][] matrix = {
//            {1, 2, 3},
//            {4, 5, 6},
//            {7, 8, 9}
//        };
//
//        // Access and print elements of a 2D array
//        System.out.println("Element at row 1, column 2: " + matrix[1][2]);
//
//        // Iterate over the 2D array
//        System.out.println("2D Array elements:");
//        for (int i = 0; i < matrix.length; i++) {
//            for (int j = 0; j < matrix[i].length; j++) {
//                System.out.print(matrix[i][j] + " ");
//            }
//            System.out.println();
//        }
//    }
//}
//



