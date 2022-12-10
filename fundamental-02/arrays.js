/*
const friends=['Kaustubh','Hesha','Akinchay','Kshitij'];
console.log(friends);

const year=new Array(2002,2004,2003,2004);
console.log(year);

console.log(friends[0]);
console.log(year[0]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2]='Praharsh';
console.log(friends);

const kaustubh=['Kaustubh','Rai', 2022-2002,'student and coder',friends];
console.log(kaustubh);

//Exercise

const calcAge=function(birthYear)
{
    return 2037-birthYear;
}
const years=[2002,2004,2003,2005,2006];
const age1=calcAge(years[0]);
const age2=calcAge(years[1]);
const age3=calcAge(years[years.length-1]);
console.log(age1,age2,age3);


//Basic Array Operations(Methods)
//Add elements method
const friends=['Kaustubh','Hesha','Akinchay','Kshitij'];
//push is a function or method which adds elements to an array
friends.push('Chaitanya');
console.log(friends);

friends.unshift('Dishan');
//unshift method put the element at position 1
console.log(friends);

//Remove elements method
friends.pop();
const popped=friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
//shift delete the first element
console.log(friends);

//indexOf method
console.log(friends.indexOf('Akinchay'));
console.log(friends.indexOf('Bob'));

//includes method
console.log(friends.includes('Dishan'));
console.log(friends.includes('Hesha'));

//Coding Challenge 2

const calcTip=function(bill)
{
    return bill>=50 && bill<=300?bill*0.15:bill*0.2;
}
const bills=[125,555,44];
const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
const total=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
console.log(bills,tips,total);


//Objects

const kaustubhArray=[
    'Kaustubh',
    'Rai',
    20223-2002,
    'student',
    'coder',
    ['Chaitanya','Billa','Akinchay','Hesha']
];


const kaustubh={
    firstName:'Kaustubh',
    lastName:'Rai',
    age:2023-2002,
    job:'student',
    friends:['Chaitanya','Billa','Akinchay','Hesha']
};
console.log(kaustubh);
console.log(kaustubh.lastName);

const nameKey='Name';
console.log(kaustubh['first'+nameKey]);
console.log(kaustubh['last'+nameKey]);
const job='student';
const age=2023-2002;
const firstName='Kaustubh';
const lastName='Rai';
const friends=['Chaitanya','Billa','Akinchay','Hesha'];
const Interestedin=prompt('What do you want to know about Kaustubh? Choose between firstName,lastName,age,job and friends');
console.log(Interestedin);
if(kaustubh[Interestedin])
{
    console.log(kaustubh[Interestedin]);
}
else
{
    console.log('Wrong Request');
}
kaustubh.location='Allahabad';
kaustubh['twitter']='@kaustubh0955';
console.log(kaustubh);
*/
//my method
/*if(Interestedin==="job")
{
    console.log(job);
}
else if(Interestedin=="firstName")
{
    console.log(firstName);
}
else if(Interestedin=="lastName")
{
    console.log(lastName);
}
else if(Interestedin=="age")
{
    console.log(Number(age));
}
else if(Interestedin=="friends")
{
    console.log(friends);
}
else
{
    console.log('No such Information available');
}
*/

const kaustubh={
    firstName:'Kaustubh',
    lastName:'Rai',
    age:2023-2002,
    job:'student',
    friends:['Chaitanya','Billa','Akinchay','Hesha'],
    hasDriversLicense: true,

    calcAge: function()
    {
        this.birthYear=2037-this.age;
        return this.birthYear;
    },
    
};
console.log(kaustubh.calcAge());
console.log(kaustubh.birthYear);