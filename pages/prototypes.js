/*jshint esversion: 6 */
window.onload = function () {
    "use strict";
    /**
     *  Exercise 1:
     */

    console.log("### Exercise 1 ###");
    String.prototype.filter = function (w) {
        return this.split(' ').filter(function (elem) {
            if (!w.includes(elem)) {
                return elem;
            }
        }).join(' ');
    };
    let inputSentence = "This house is not nice but bad designed!";
    let filterWords = ['not', 'bad'];
    console.log("input sentence:" + inputSentence);
    console.log("filter:" + filterWords);
    console.log("output: " + inputSentence.filter(filterWords));

    /**
     *  Exercise 2:
     */

    console.log("### Exercise 2 ###");
    Array.prototype.bubbleSort = function () {
        for (let i = 0; i < this.length; i++) {
            for (let j = 0; j < (this.length - i - 1); j++) {
                if (this[j] > this[j + 1]) {
                    let temp = this[j + 1];
                    this[j + 1] = this[j];
                    this[j] = temp;
                }
            }
        }

        return this;
    };
    let numbers = [6, 4, 0, 3, -2, 1];
    console.log("input array: " + numbers);
    console.log("output array:" + numbers.bubbleSort());

    /**
     *  Exercise 3:
     */

    console.log("### Exercise 3.a ###");

    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.species = "homo sapien";
        this.favouriteHobby = function(){
            console.log("My name is "+this.name+" and my hobby is [somePerson.hobby]");
        };
    }

    function Teacher(subject) {
        Person.call(this);
        this.subject = subject;
    }

    Teacher.prototype.teach = function () {
        console.log("Teacher; " + this.name + " is teaching now " + this.subject);
    };

    let t1 = new Teacher("Algo");
    t1.name = "teacher1";
    t1.age = 25;
    t1.teach();

    const t2 = new Teacher("WAP");
    t2.name = "teacher2";
    t2.age = 35;
    t2.teach();

    /******************************/
    console.log("### Exercise 3.b ###");
    const teacher = {
        name: "Default",
        teach: function (subject) {
            console.log("teacher; " + this.name + " is teaching now " + subject);
        }
    };

    const t3 = Object.create(teacher);
    t3.name = "Alican";
    t3.teach("Algorithms");

    /**
     *  Exercise 4:
     */

      console.log("### Exercise 4 ###  PART 1 ###");

      let person1 = {
          name: 'PERSON1',
          age: 123,
          greeting: function () {
              console.log("person1;Greetings, my name is " + this.name + " and I am " + this.age + " years old.");
          },
          salute: function () {
              console.log("person1;Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
          },

      };

      let student1 = Object.create(person1);
      student1.major = "MAJOR";
      student1.greeting = function () {
          console.log("student1;Hey, my name is " + this.name + " and I am studying " + this.major + ".");
      };

      let professor1 = Object.create(person1);
      professor1.department = "DEPARTMENT";
      professor1.salute = function () {
          console.log("professor1;Good day, my name is " + this.name + " and I am in the " + this.department + " department.");
      };

      student1.greeting();
      student1.salute();

      professor1.greeting();
      professor1.salute();


    console.log("### Exercise 4 ###  PART 2 ###");

    function Person2(name, age) {
        this.name = name;
        this.age = age;

    }

    Person2.prototype.greeting = function () {
        console.log("Person2;Greetings, my name is " + this.name + " and I am " + this.age + " years old.");
    };
    Person2.prototype.salute = function () {
        console.log("Person2;Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
    };

    function Student2(name, age, major) {
        Person2.call(this, name, age);
        this.major = major;
    }

    Student2.prototype = Object.create(Person2.prototype);
    Student2.prototype.greeting = function () {
        console.log("student2;Hey, my name is " + this.name + " and I am studying " + this.major + ".");
    };

    function Professor2(name, age, department) {
        Person2.call(this, name, age);
        this.department = department;
    }

    Professor2.prototype = Object.create(Person2.prototype);
    Professor2.prototype.salute = function () {
        console.log("professor2;Good day, my name is " + this.name + " and I am in the " + this.department + " department.");
    };

    let student2 = new Student2("Student", 111, "MBA");
    student2.greeting();
    student2.salute();

    let professor2 = new Professor2("Professor", 222, "MSD");
    professor2.greeting();
    professor2.salute();

};