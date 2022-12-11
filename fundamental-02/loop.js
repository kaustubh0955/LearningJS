/*
//For loop keeps running while condition is True
for(let rep=1;rep<=10;rep++)
{
    console.log('Lifting weights repetition',+rep);
}


//Looping Arrays,Breaking and Continuing

const kaustubh=[
    'Kaustubh',
    'Rai',
    2023-2002,
    'student',
    ['hehsa','chaitanya','kshitij','akinchay'],
    true
];
const types=[];
for(let i=0;i<kaustubh.length;i++)
{
    //Reading from kaustubh array
    console.log(kaustubh[i],typeof kaustubh[i]);

    //Filling types array
    //types[i]=typeof kaustubh[i];
    //another method
    types.push(typeof kaustubh[i]);
}
console.log(types);


const years=[2002,2004,2003,2003,2005];
const ages=[];
for(let i=0;i<=years.length;i++)
{
    ages.push(2023-years[i]);
}
console.log(ages);

console.log('_____Only Strings_____');
///continue and break
const kaustubh=[
    'Kaustubh',
    'Rai',
    2023-2002,
    'student',
    ['hehsa','chaitanya','kshitij','akinchay'],
    true
];
const types=[];
for(let i=0;i<kaustubh.length;i++)
{
    if(typeof kaustubh[i]!=='string')continue;

    console.log(kaustubh[i],typeof kaustubh[i]);
}

console.log('____Only Number____');
for(let i=0;i<kaustubh.length;i++)
{
    if(typeof kaustubh[i]!=='number')break;

    console.log(kaustubh[i],typeof kaustubh[i]);
}


//Looping backwards and loop and loop

const kaustubh=[
    'Kaustubh',
    'Rai',
    2023-2002,
    'student',
    ['hehsa','chaitanya','kshitij','akinchay'],
    true
];
for(let i=kaustubh.length-1;i>=0;i--)
{
    console.log(i,kaustubh[i]);
}

for(let exercise=1;exercise<=4;exercise++)
{
    console.log('___Starting exercise___',+exercise);

    for(let rep=1;rep<=6;rep++)
    {
        console.log('Lifting weight repetition',+rep);
    }
}


//while loop

let rep=1;
whil (rep<=10)
{
    console.log('While: Lifting weights repetition',+rep);
    rep++;
}


let dice=Math.trunc(Math.random()*6)+1;

while(dice!=6)
{
    console.log('You rolled a ',+dice);
    dice=Math.trunc(Math.random()*6)+1;
    if(dice===6)console.log('Loop is about to end');
}
*/

//Coding Challenge 4

const calcTip=function(bill)
{
    return bill>=50 && bill<=300?bill*0.15:bill*0.2;
}
const bills=[22,3,44,555,67,4,5,43,54,69];
const tips=[];
const totals=[];

for(let i=0;i<bills.length;i++)
{
    const tip=calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip+bills[i]);
}
console.log(bills,tips,totals);

const calcAverage=function(arr)
{
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
    }
    return sum/arr.length;
}
console.log(calcAverage([2,3,7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));