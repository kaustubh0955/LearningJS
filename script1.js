/*
let js='amazing';     
console.log(40+10+50-95);
console.log('Kaustubh');
console.log(23);
let firstName="Kaustubh";
console.log(firstName);
 
let javaScriptisFun=true;
console.log(javaScriptisFun);

console.log(typeof true);

javaScriptisFun='Yes!';
console.log(typeof javaScriptisFun);

let year;
console.log(year);
console.log(typeof year);

year=1991;
console.log(typeof year);
console.log(year);

const birthYear=2002;
console.log(birthYear);

//Mathematical operators
const birthYear=2002;
const ageKaustubh=2038-birthYear;
console.log(ageKaustubh);
const birthYearH=2004;
const ageHesha=2038-birthYearH;
console.log(ageHesha);

const firstName='Kaustubh';
const lastName='Rai';
console.log(firstName+' '+lastName);

//Assignment operators
let x=10+5;
x+=15;// x=x+15
x*=4;// x=x*4
console.log(x);

//Comparison Operator
console.log(ageKaustubh>ageHesha);
console.log(ageKaustubh==ageHesha);
console.log(ageKaustubh<ageHesha);
console.log(ageKaustubh<=ageHesha);
console.log(ageKaustubh>=ageHesha);


//Coding Challenge1
//data1

const massMark=78;
const massJohn=92;
const heightMark=1.69;
const heightJohn=1.95;

const markBmi=massMark/heightMark **2;
const johnBmi=massJohn/heightJohn **2;
const markHigherBMI= markBmi>johnBmi;
console.log(markHigherBMI);

//data2
const massMark=95;
const massJohn=85;
const heightMark=1.88;
const heightJohn=1.76;

const markBmi=massMark/heightMark **2;
const johnBmi=massJohn/heightJohn **2;
const markHigherBMI= markBmi>johnBmi;
console.log(markHigherBMI);

//Strings
const name='Kaustubh';
const job='coder';
const birthYear=2002;
const year=2022;

const information="I'm"+" " + name + ', a' +" "+(year- birthYear) + " " + "year old "+" "+job;
console.log(information);


//TakingSDecisions-if/else statements
const age=15;
const isOldEnough=age>=18;
if(isOldEnough)
{
    console.log("Hesha can start driving");
}
else
{
    const yearsLeft=18-age;
    console.log("Years left to get driving licence:"+yearsLeft+" "+"years");
}

const birthYear=2002;
let century;
if(birthYear<=2000)
{
    century=20;
}
else
{
    century=21;
}
console.log(century);

//Coding Challenge 2
const massMark=78;
const massJohn=92;
const heightMark=1.69;
const heightJohn=1.95;

const markBmi=massMark/heightMark **2;
const johnBmi=massJohn/heightJohn **2;
console.log(markBmi);
console.log(johnBmi);
const HigherBMI= markBmi>johnBmi;
if(HigherBMI)
{
    console.log("Marks's BMI "+(markBmi)+ " "+"is higher than John's BMI"+" "+(johnBmi));
}
else
{
    console.log("John's BMI is higher than Marks's BMI");
}

//Type Conversion 
const inputYear='1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(String(231));

//Type coercion
console.log('I am ' + 20 +' years old');


//Truthy and falsy values
//5 falsy values: 0, '', undefined,null,NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Kaustubh'));


//Equality Operators

const age=18;
if(age===18)
console.log('You just became an adult');//strict equality operator...it only returns true if both given numbers are exactly the same..

const favourite =Number(prompt("what's your favourite number"));
console.log(favourite);
console.log(typeof favourite);

if(favourite===2705)
{
    console.log('Cool! 2705 is an amazing number');
}
else if(favourite ===7)
{
    console.log('7 is a cool number');
}
else
{
    console.log('Number is not 7 or 2705');
}


//Logical Operators

const hasDriverLicense=true;
const hasGoodVision=false;

console.log(hasDriverLicense && hasGoodVision)
console.log(hasDriverLicense || hasGoodVision)
console.log(hasDriverLicense);
const shouldDrive=hasDriverLicense && hasGoodVision;

if(shouldDrive)
{
    console.log('Sarah is able to drive');
}
else
{
    console.log('Someone else shouls drive');
}


//Coding Challenge 3

const scoreDolphins=(96+108+89)/3;
const scoreKoalas=(88+91+110)/3
console.log(scoreDolphins,scoreKoalas);
if(scoreDolphins>scoreKoalas)
{
    console.log('Dolphins win the trophy');
}
else if(scoreKoalas>scoreDolphins)
{
    console.log('Koalas win the trophy');
}
else
{
    console.log('Both share the trophy');
}


//Bonus 1
const scoreDolphins=(97+113+101)/3;
const scoreKoalas=(109+95+123)/3
console.log(scoreDolphins,scoreKoalas);
if(scoreDolphins>scoreKoalas && scoreDolphins>=100)
{
    console.log('Dolphins win the trophy');
}
else if(scoreKoalas>scoreDolphins && scoreKoalas>=100)
{
    console.log('Koalas win the trophy');
}
else
{
    console.log('Both share the trophy');
}


//Switch Statement

const day='monday';
switch(day)
{
    case 'monday':
        console.log('Study javascript and attend classes');
        break;
    case 'tuesday':
        console.log('Study Nodejs and attend classes');
        break;
    case 'wednesday':
        console.log('Study ml and attend classes');
        break;
    case 'thursday':
        console.log('Study python and attend classes');
        break;
    case 'friday':
        console.log('Have a chill day out with hesha');
        break;
        defaukt:
        console.log('Not a valid day');
}
if(day=== 'monday')
{
    console.log('Study javascript and attend classes');
}
else if(day ==='tuesday')
{
    console.log('Study Nodejs and attend classes');
}
else if(day==='wednesday')
{
    console.log('Study ml and attend classes');
}
else if(day==='thursday')
{
    console.log('Study python and attend classes');
}
else if(day ==='friday')
{
    console.log('Have achill day out with hesha');
}
else if(day==='saturday' || day==='sunday')
{
    console.log('Chill day');
}
else
{
    console.log('Not a valid day');
}


//Conditional Operator

const age=23;
age>=18 ? console.log('I like drink tropicana juice'): console.log('I like to drink water');
*/

//Coding Challenge 4

const bill=275;
const tip= bill>=50 && bill<=300 ? bill*0.15:bill*0.2;
console.log(' The bill was $'+bill, 'the tip  was $'+tip, 'and the total value $'+ (bill+tip));