"use strict";(self.webpackChunkprogramming_basics=self.webpackChunkprogramming_basics||[]).push([[337],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),h=s,d=p["".concat(l,".").concat(h)]||p[h]||m[h]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:s,i[1]=r;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(7462),s=(n(7294),n(3905));const o={},i="Substitution",r={unversionedId:"substitution",id:"substitution",title:"Substitution",description:"Substitutability is an important concept in Object-Oriented Programming (OOP)",source:"@site/docs/substitution.mdx",sourceDirName:".",slug:"/substitution",permalink:"/programming-basics/docs/substitution",draft:!1,editUrl:"https://github.com/alexkmj/programming-basics/tree/master/docs/docs/substitution.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Generics",permalink:"/programming-basics/docs/generics"}},l={},c=[{value:"Polymorphism",id:"polymorphism",level:2},{value:"Static polymorphism",id:"static-polymorphism",level:3},{value:"Dynamic polymorphism",id:"dynamic-polymorphism",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"substitution"},"Substitution"),(0,s.kt)("p",null,"Substitutability is an important concept in Object-Oriented Programming (OOP)\nthat refers to the ability of a derived class or subclass to be used in place of\nits base class or superclass without causing errors or unexpected behavior in\nthe program."),(0,s.kt)("p",null,"In OOP, inheritance allows a class to inherit the properties and behaviors of\nits parent class. A subclass can override or add to the functionality of the\nparent class, but it must also be able to be used in place of the parent class."),(0,s.kt)("p",null,"Substitutability ensures that any code written for the parent class can also\nwork seamlessly with objects of the subclass. This is important for writing\nmodular and reusable code, as it allows different classes to be substituted for\neach other without requiring any changes to the code that uses them."),(0,s.kt)("p",null,"For example, consider a program that has a class called Animal, with a method\ncalled ",(0,s.kt)("inlineCode",{parentName:"p"},"makeSound()"),". The program also has two subclasses, Cat and Dog, that\ninherit from Animal and override the ",(0,s.kt)("inlineCode",{parentName:"p"},"makeSound()")," method to produce the sound\nof a cat or dog, respectively."),(0,s.kt)("p",null,"If the program has a function that takes an Animal object as a parameter, any\ninstance of Cat or Dog can be passed to that function, as they are both Animal\nobjects and can be substituted for each other without causing any issues."),(0,s.kt)("p",null,"Substitutability is closely related to the Liskov substitution principle, which\nstates that if a program is using a base class, it should be able to use any of\nits derived classes without knowing it. This principle helps ensure that the\nderived classes adhere to the same contract as the base class, and that they do\nnot introduce new requirements or behaviors that could cause issues when\nsubstituted for the base class."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'// Base class\nclass Animal {\n    public void eat() {\n        System.out.println("Eating...");\n    }\n}\n\n// Derived class\nclass Dog extends Animal {\n    public void bark() {\n        System.out.println("Barking...");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Dog dog = new Dog();\n        dog.eat();\n        dog.bark();\n    }\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"Dog husky = new Dog();\nAnimal anotherHusky = husky;\nhusky.bark();\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"Animal husky = new Dog();\nDog anotherHusky = (Dog) husky;\nhusky.bark();\n\nAnimal poodle = new Animal();\n// This will error\nDog anotherPoodle = (Dog) poodle;\n// Exception java.lang.ClassCastException: class REPL.$JShell$11$Animal cannot be cast to class REPL.$JShell$12$Dog (REPL.$JShell$11$Animal and REPL.$JShell$12$Dog are in unnamed module of loader jdk.jshell.execution.DefaultLoaderDelegate$RemoteClassLoader @3cd1a2f1)\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"jshell> Dog husky = new Dog();\nhusky ==> Dog@484b61fc\n\njshell> Animal anotherHusky = husky;\nanotherHusky ==> Dog@484b61fc\n\njshell> Animal anotherHusky = (Animal) husky;\nanotherHusky ==> Dog@484b61fc\n")),(0,s.kt)("h1",{id:"typesub-type-consistency"},"Type/Sub-type Consistency"),(0,s.kt)("p",null,"Type/subtype consistency is an important concept in object-oriented programming (OOP) that deals with how subtypes relate to their supertypes. It refers to the ability of a subtype to be used in the same way as its supertype, without breaking the program's correctness."),(0,s.kt)("p",null,"In OOP, a subclass or subtype is a class that inherits from a superclass or supertype. The subclass inherits all the properties and behaviors of the superclass and can also define its own properties and behaviors. Type/subtype consistency requires that the properties and behaviors of the subclass should not contradict or violate the properties and behaviors of the superclass."),(0,s.kt)("p",null,"For example, consider a class hierarchy where we have a superclass Animal and a subclass Dog. The Dog class inherits properties and behaviors from the Animal class, such as eat() and sleep(). We can use a Dog object in the same way we use an Animal object, since a Dog is an Animal. This is because Dog is a subtype of Animal and has the same properties and behaviors as its supertype, plus its own unique properties and behaviors."),(0,s.kt)("p",null,"Type/subtype consistency is important because it allows code to be written in a modular and reusable way. If a subclass is consistent with its supertype, then any code that works with the supertype should work with the subclass as well. This allows for greater flexibility and scalability in software design."),(0,s.kt)("p",null,"In summary, type/subtype consistency is the property of a subtype to be used in the same way as its supertype, without breaking the program's correctness. It is an important concept in OOP that allows for modular and reusable code."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'public class Animal {\n    public void makeSound() {\n        System.out.println("Animal is making a sound.");\n    }\n}\n\npublic class Dog extends Animal {\n    @Override\n    public void makeSound() {\n        System.out.println("Dog is barking.");\n    }\n}\n\npublic class Cat extends Animal {\n    @Override\n    public void makeSound() {\n        System.out.println("Cat is meowing.");\n    }\n}\n\npublic class AnimalSoundMaker {\n    public void makeAnimalSound(Animal animal) {\n        animal.makeSound();\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        AnimalSoundMaker soundMaker = new AnimalSoundMaker();\n        Animal dog = new Dog();\n        Animal cat = new Cat();\n        soundMaker.makeAnimalSound(dog); // Outputs "Dog is barking."\n        soundMaker.makeAnimalSound(cat); // Outputs "Cat is meowing."\n    }\n}\n')),(0,s.kt)("h2",{id:"polymorphism"},"Polymorphism"),(0,s.kt)("p",null,"Polymorphism is a concept in object-oriented programming that allows objects of different classes to be treated as if they were objects of the same class. In other words, it allows objects to take on multiple forms. There are two main types of polymorphism: static (or compile-time) polymorphism and dynamic (or run-time) polymorphism."),(0,s.kt)("h3",{id:"static-polymorphism"},"Static polymorphism"),(0,s.kt)("p",null,"Static polymorphism is achieved through method overloading, where multiple methods can have the same name but different parameters, allowing the appropriate method to be called based on the types of arguments passed."),(0,s.kt)("h3",{id:"dynamic-polymorphism"},"Dynamic polymorphism"),(0,s.kt)("p",null,"Dynamic polymorphism is achieved through method overriding, where a subclass provides its own implementation of a method that is already defined in its superclass. This allows the subclass to use the method of the superclass as is or override it with its own implementation."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'public class Animal {\n    public void makeSound() {\n        System.out.println("The animal makes a sound");\n    }\n}\n\npublic class Dog extends Animal {\n    public void makeSound() {\n        System.out.println("The dog barks");\n    }\n}\n\npublic class Cat extends Animal {\n    public void makeSound() {\n        System.out.println("The cat meows");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal animal1 = new Dog();\n        Animal animal2 = new Cat();\n        \n        animal1.makeSound(); // Output: The dog barks\n        animal2.makeSound(); // Output: The cat meows\n    }\n}\n')),(0,s.kt)("p",null,"In this example, Animal is the superclass, and Dog and Cat are subclasses. Each subclass overrides the makeSound() method of the Animal class with its own implementation. In the Main class, animal1 is an instance of the Dog class and animal2 is an instance of the Cat class. Even though they are of different classes, they can both be treated as Animal objects and the makeSound() method will output the appropriate sound for each object. This is an example of polymorphism in action."))}m.isMDXComponent=!0}}]);