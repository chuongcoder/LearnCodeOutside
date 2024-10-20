///*
// * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
// */
//
//package com.mycompany.oopjava;
//
///**
// *
// * @author chuongit
// */
//public class OOPJava {
//
//    public static void main(String[] args) {
////        Student studentA = new Student("Minh Chuong ", "231103B ", "03/02/2005");
////        System.out.println("Check: " + studentA.name + studentA.classSection + studentA.dateOfBirth);
////        studentA.printInfoStudent();
//        
//        Student studentB = new Student();
//        studentB.setName("DiLi");
//        studentB.setDateOfBirth("12/02/2005");
//        studentB.setClass("23162A");
//        studentB.printInfoStudent();
//    }
//}
//class Student {
//    instance variable 
//    String name;
//    String classSection;
//    String dateOfBirth;
//    constructor method
//    public Student(String name, String classSection, String dateOfBirth) {
//        this.name = name;
//        this.classSection = classSection;
//        this.dateOfBirth = dateOfBirth;
//    }
//    public void printInfoStudent() {
//        System.out.print("Name: " + this.name);
//        System.out.print(" Class: " + this.classSection);
//        System.out.print(" date of birth: " + this.dateOfBirth);
//    }
//
//    public String getName() {
//        return this.name;
//    }
//
//    public void setDateOfBirth(String newDateOfBirth) {
//        this.dateOfBirth = newDateOfBirth;
//    }
//
//    public void setClass (String newClass) {
//        this.classSection = newClass;
//    }
//
//    public void setName(String newName) {
//        this.name = newName;
//    }
//}
//* Inheritance(ke thua)
//Inheritance is a fundamental concept in Object-Oriented Programming (OOP) in Java.
//It allows one class to inherit properties and methods from another class, promoting 
//code reuse and establishing a natural hierarchy between classes
//* Main key concept:
//1.Base Class (Super Class):Parent class 
//2.Derived Class (Sub Class):Sub class 
//3.Inheritance Types: 
//Single Inheritance: A class inherits from one superclass.
//Multilevel Inheritance: A class inherits from a superclass, which in turn inherits from another superclass. (A <- B <- C .. )
//Hierarchical Inheritance: Multiple classes inherit from the same superclass(D).(A,B,C -> D)
//Multiple Inheritance (through Interfaces): Java does not support multiple inheritance with classes but supports it through interfaces.
//4.extends Keyword:
//-> Used to declare inheritance in Java. A subclass uses the extends keyword to inherit from a superclass.
//Ex: 
//public class SuperClass {
//    // Superclass fields and methods
//}
//
//public class SubClass extends SuperClass {
//    // Subclass fields and methods
//}
//Ex: Single Inheritance 
/*
package com.mycompany.oopjava;

public class OOPJava {
     public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();
        dog.bark();
    } 
}

//Super class 
class Animal {
    public void eat() {
        System.out.print("The animals eat food");
    }
}

class Dog extends Animal {
    public void bark() {
        System.out.print("The dog barks");
    }
}
 */
//Ex:  Multilevel Inheritance
/* 
package com.mycompany.oopjava;

public class OOPJava {
     public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();
        dog.bark();
        dog.breathe();
    } 
}

//Grandparent class 
class Animal {
    public void eat() {
        System.out.print("The animals eat food \n");
    }
}

// Parent class
class Mammal extends Animal {
    public void breathe() {
        System.out.println("This mammal breathes air. \n");
    }
}

//child class
class Dog extends Mammal {
    public void bark() {
        System.out.print("The dog barks");
    }
}
 */
//Ex: Hierarchical Inheritance 
/*
package com.mycompany.oopjava;

public class OOPJava {

    public static void main(String[] args) {
        Car myCar = new Car("255",20);
        Motorcycle myMotorcycle = new Motorcycle("123",12);

        myCar.start();    // Method inherited from Vehicle
        myCar.drive();    // Method defined in Car

        myMotorcycle.start(); // Method inherited from Vehicle
        myMotorcycle.ride();  // Method defined in Motorcycle
    }
}

// Superclass
class Vehicle {
    String enginePower;
    int age;
    
//    constructor 
    public Vehicle(String enginePower, int age) {
        this.enginePower = enginePower;
        this.age = age;
    }

    public void start() {
        System.out.println("Vehicle starts.");
    }
}

// Subclass 1
class Car extends Vehicle {

    public void drive() {
        System.out.println("Car drives.");
    }
    public Car (String enginePower, int age) {
//        ke thua constructor 
        super(enginePower,age);
    }
}

// Subclass 2
class Motorcycle extends Vehicle {

    public void ride() {
        System.out.println("Motorcycle rides.");
    }
     public Motorcycle (String enginePower, int age) {
//        ke thua constructor 
        super(enginePower,age);
    }
}
*/


//Ex: Multiple Inheritance Using Interfaces 