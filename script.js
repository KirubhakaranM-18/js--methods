//Currying & Uncurrying 

//1
function sum(a){
  return function(b){
    return function (c){
      console.log(a + b + c);
    }
  }
}
sum (20)(30)(40);

//2
function details(name){
  return function (department){
    return function (salary){
      console.log("name:",name , "department:",department, "salary:",salary);
    }
  }
}
details("krish")("fullstack devp")("55000");

//3
function sum1(a){
  return function(b){
    return function (c){
      console.log(a * b * c);
    }
  }
}
sum1 (20)(30)(40);

//4 
//curried func
function curr(a){
  return function(b){
    return function(c){
      console.log(a+b+c);
    }
  }
}
curr(10)(20)(30);
//uncurried func
function uncurr(a,b,c){
  console.log(a+b+c);
}
uncurr(10,20,30);

//5
function curr(a){
  return function(b){
    return function(c){
      return function(d){
      console.log(a+b+c+d);
      }
    }
  }
}
curr(10)(20)(30)(40);
//uncurried func
function uncurr(a,b,c,d){
  console.log(a+b+c+d);
}
uncurr(10,20,30,40);

//Spread Operator

//6
let num1=[10,20,30,40,50];
let num2=[60,70,80,90,100];

let arr=[...num1,...num2]
console.log(arr);

//7
let nam1=["krish"];
let nam2=["prince"];

let arr1=[...nam1,...nam2]
console.log(arr1)

//8
let num3=[10,20,30];
let arr2=[...num3,50,60,70,80];
console.log(arr2)

//9
let employee1= {
  name :"krish",
  degree:"BA"
}
let employee2={
  city: "rasipuram",
  job :"full stack developer"
}
let employee={...employee1,...employee2};
console.log(employee)

//10
let emp={
  name : "krish",
  department : "full stack developer",
  city:"rasipuram"
}
let emp1={
  ...emp,degree :"BA"
}
console.log(emp1);

//11
let obj1= {
  name :"krish",
  degree:"BA"
}
let obj2={
  city: "rasipuram",
  job :"full stack developer"
}
let employedetails={...obj1,...obj2};
console.log(employedetails);

//12
let array1 = [10, 20, 30,40, 50];
let array2 = [ 60,70,80,90,100];

let res = [...array2.reverse(), ...array1.reverse()];
console.log(res);

// Rest Operator in Functions

//13
function values(a, b, ...remaining) {
  console.log("A:", a);
  console.log("B:", b);
  console.log("Remaining:", remaining);
}

values(10, 20, 30, 40, 50);

//14
function student(name,department,...marks){
  console.log("name:",name),
    console.log("department:",department)
  console.log("marks:",...marks)
}
student("krish","full stack developer",92,88,90,85);

//15
function value(a,b,...add){
  console.log("firstvalue:",a)
  console.log("secondvalue:",b)
  console.log("extravalue:",...add)
}
value(10,20,40,60,80,100);

//16
function numval(...nums){
  console.log(nums[4])
}
numval(10,20,30,40,50,60,70,80,);

//17
function prod(product,price,...dis){
  console.log("product:",product)
  console.log("price:",price)
  console.log("details:",...dis)
}
prod("rc car","2500","iconic jeep,","wireless remote,","typec charging");

//18
function values1(a, b, ...remaining) {
  console.log("A:", a);
  console.log("B:", b);
  console.log("Remaining:", remaining);
}

values1(100, 200, 300, 400, 500,600,700,800,900,1000);

//Array Destructuring

//19
let numvalue = [10, 20, 30, 40];

let [a, b, c, d] = numvalue;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

//20
let studdet=["krish","fullstack developer","55000"];
let [name3,role,salary]=studdet;

console.log(name3);
console.log(role);
console.log(salary);

//21
let arrnumb = [ 10,20,30,40,50,60 ];
let [ e, , , h] = arrnumb;

console.log(e);
console.log(h);

//22
let arrnest =[10,[20,30,40]];
let [a1,[b1,c1,d1]]= arrnest;

console.log(a1);
console.log(b1);
console.log(c1);
console.log(d1);

//23
let nest3=[10,20,[30,40,[50,60]]]
let [a2,b2,[c2,d2,[e2,f2]]]=nest3;

console.log(a2);
console.log(b2);
console.log(c2);
console.log(d2);
console.log(e2);
console.log(f2);

// Object Destructuring

//24
let empdetail={
  names:"krish",
  role1:"fullstack developer",
  salary:"55000"}
let {names,role1,salary1}= empdetail;
console.log(names);
console.log(role1);
console.log(salary1);

//25
let stddetail={
  stdname:"krish",
  department:"BA",
  percentage:"95%"}
let {stdname,department,percentage}= stddetail;

console.log(stdname);
console.log(department);
console.log(percentage);

//26
let toys = {
  pr1:"rccar",
  pr2:"ben 10 watch",
  pr3:"rc excavator",
  pr4:"machine gun",
  pr5:"anime idole"
}
let{pr1,pr3,pr5}=toys

console.log(pr1);
console.log(pr3);
console.log(pr5);

//27
let company = {
  employee: {
    emplname: "Krish"
  },
  team: {
    members: ["thina", "barath", "kishwar"]
  }
};

let {
  employee: { emplname },
  team: { members }
} = company;

console.log(emplname);
console.log(members);

let comp = {
  department: {
    employee: {
      emname: "Krish"
    }
  }
};

let {
  department: {
    employee: { emname }
  }
} = comp;

console.log(emname);

// Array Manipulation 

//29
let fruits=["apple","orange","pineapple","kiwi"];
fruits.push("watermelon","grapes","dragonfruit","custar apple")

console.log(fruits);

//30
let numbfive=[1,2,3,4,5,6];
numbfive.pop();
console.log(numbfive);

//31
let studnames=["karan","krish","prince","thina","maganth",];
studnames.shift();
console.log(studnames)

//32
let numfour=[3,4,5,6];
numfour.unshift(1,2);
console.log(numfour);

//33
let rmv=[10,20,30,40,50];
rmv.splice(2,1,300);
console.log(rmv);

//34
let rmnum=[10,20,30,40,50,60];
rmnum.splice(3,2);
console.log(rmnum);

//35
let rmv1=[10,20,60,70,80];
rmv1.splice(2,0,30,40,50);
console.log(rmv1);

//36
let rmv2=[10,2,3,50,60];
rmv2.splice(1,2,20,30,40);
console.log(rmv2);

//37
let stdlist=["krish","prince","karan","thina"];
stdlist.splice(2,1);
console.log(stdlist);

//38
let cart=["rc car","monitor","mobile","tv",];

cart.push("decors");
console.log(cart);

cart.pop();
console.log(cart);

cart.shift();
console.log(cart);

cart.unshift("shirt");
console.log(cart);


//Array Merge & Extraction Methods

//39
let ar1=[1,2,3];
let ar2=[4,5,6];
let ar= ar1.concat(ar2)
console.log(ar);

//40
let a4=[1,2,3];
let b4=[4,5,6];
let c4=[7,8,9];
let abc= a4.concat(b4,c4);
console.log(abc);

//41
let ara = [10, 20, 30, 40, 50, 60, 70, 80];

let result2 = ara.slice(2, 6);

console.log(result2);

//42
let namestd=["krish","prince","maganth","thina"];
let result3= namestd.slice(0,3);
console.log(result3);

//43
let numbers4 = [10, [20, [30, [40, 50]]]];
let result4 = numbers4.flat(2);

console.log(result4);

//44
let numbers5 = [10, [20, [30, [40, 50]]]];
let result5 = numbers5.flat(Infinity);

console.log(result5);

//45
//slice
let arr4 = [10, 20, 30, 40, 50];
let result6 = arr4.slice(1, 4);

console.log(result6);
console.log(arr4);
//splice
let arr6 = [10, 20, 30, 40, 50];
let result7 = arr6.splice(1, 3);

console.log(result7);
console.log(arr6);

//Search & Other Array Methods

//46
let numbers8 = [10, 20, 30, 40, 50];

console.log(numbers8.includes(50));

//47
let numbers9 = [10, 20, 30, 20, 40, 20];

console.log(numbers9.indexOf(20));

//48
let numbers6 = [10, 20, 30, 20, 40, 20,40];

console.log(numbers6.lastIndexOf(20));

//49
let numbers7= [50, 10, 40, 20, 30];

numbers7.sort((a, b) => a - b);

console.log(numbers7);

//50
let numbers10 = [10, 20, 30, 40, 50];

numbers10.reverse();

console.log(numbers10);