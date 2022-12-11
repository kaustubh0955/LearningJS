//'use strict';
/*
console.log('Hello');

let hasDriversLicense=false;
const passTest=true;

if (passTest) hasDriversLicense=true;
if(hasDriversLicense) console.log('I can drive');

//const interface='Audio';
//const private=534;


//Functions

function logger(){
    console.log('My name is Kaustubh');
}
//calling/running/invoking function
logger();
logger();
logger();


function fruitProcessor(apples,oranges)
{
    console.log(apples,oranges);
    const juice=("Juice with ",+ apples +'apples and ' ,+oranges +'oranges.');
    return juice;
}

const appleJuice=fruitProcessor(5,8);
console.log(appleJuice);

const appleOrangeJuice=fruitProcessor(2,4);
console.log(appleOrangeJuice);

//Function Declaration vs expression

function calAge1(birthYear)
{
    //const age=2037-birthYear;
    return 2037-birthYear;
}
const age1=calAge1(2002);
console.log(age1);

//Function expression

const calcAge2=function(birthYear)
{
    return 2037-birthYear;
}
const age2=calcAge2(2002);
console.log(age1,age2);


//Arrow Function

const calcAge3=birthYear=>2037-birthYear;
const age3=calcAge3(2002);
console.log(age3);

const yearsuntilRetirement=(birthYear,firstName)=>
{
    const age=2037-birthYear;
    const retirement=65-age;
    return (firstName +('retires in'),+retirement+'years');
}
console.log(yearsuntilRetirement(2002,'Kaustubh'));


//Functions calling other functions


function cutFruitPieces(fruit)
{
    return fruit*4;
};
function fruitProcessor(apples,oranges)
{
    const applePieces=cutFruitPieces(apples);
    const orangePieces=cutFruitPieces(oranges);

    console.log(apples,oranges);
    const juice=(applePieces ,orangePieces);
    return juice;
};
console.log(fruitProcessor(2,3));
*/

//Fumction Reference

const calcAverage=(a,b,c)=>(a-+b+c)/3;
console.log(calcAverage(3,4,5));

const scoreDolphins=calcAverage(44,23,71);
const scoreKoalas=calcAverage(65,54,49);
console.log(scoreDolphins,scoreKoalas);

//Coding Challenge 1

const calcAverage=(a,b,c)=>(a-+b+c)/3;
console.log(calcAverage(3,4,5));

const scoreDolphins=calcAverage(44,23,71);
const scoreKoalas=calcAverage(65,54,49);

console.log(scoreDolphins,scoreKoalas);
const checkWinner=function(avgDolphins,avgKoalas)
{
    if(avgDolphins>=2*avgKoalas)
    {
        console.log('Dolphins win '+ avgDolphins);
    }
    else if(avgKoalas >=2*avgDolphins)
    {
        console.log('Koalas win'+avgKoalas);
    }
    else{
        console.log('No team wins');
    }
}
checkWinner(scoreDolphins,scoreKoalas);
checkWinner(576,111);
