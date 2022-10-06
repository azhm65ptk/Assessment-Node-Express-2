
const HOURS = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six',
'seven', 'eight', 'nine', 'ten', 'eleven'];

const ONES = ['', 'one', 'two', 'three', 'four', 'five', 'six',
'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
'eighteen', 'nineteen'];

const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty'];

function timeWord(time){

if (time === '00:00') return 'midnight';

if (time === '12:00') return 'noon';

let [hours, minutes ]= time.split(':');
let hour = Number(hours);
let minute = Number(minutes);

out = HOURS[hour % 12] + ' ';
let format;

if (hour<12 ) format="am";
if (hour >=12 ) format="pm"



if (minute >= 20)
return out+= TENS[parseInt(minute /10)]+" "+ONES[minute%10]+ " "+format;

else if (minute >= 10)
return out += ONES[minute]+ " "+format

else if (minute > 0)
return out += 'oh ' + ONES[minute]+ " "+format;

else  return out +="o'clock"+ " "+format;
}

console.log(timeWord("00:00")+"-----"+"midnight");
console.log(timeWord("00:12")+"-----"+"twelve twelve am");
console.log(timeWord("01:00")+"-----"+"one oclock am");
console.log(timeWord("02:00")+"-----"+"two oclock am");
console.log(timeWord("03:00")+"-----"+"three oclock am");
console.log(timeWord("04:00")+"-----"+"four oclock am");
console.log(timeWord("06:01")+"-----"+"six oh one am");
console.log(timeWord("06:18")+"-----"+"six eighteen am");
console.log(timeWord("06:30")+"-----"+"six thirty am");
console.log(timeWord("10:34")+"-----"+"ten thirty four am");
console.log(timeWord("12:00")+"-----"+"noon");
console.log(timeWord("12:09")+"-----"+"twelve oh nine pm");
console.log(timeWord("23:23")+"-----"+"eleven twenty three pm");
console.log(timeWord("14:20"));


/**
* Input	Expected Output
00:00	midnight
00:12	twelve twelve am
01:00	one o’clock am
06:01	six oh one am
06:10	six ten am
06:18	six eighteen am
06:30	six thirty am
10:34	ten thirty four am
12:00	noon
12:09	twelve oh nine pm
23:23	eleven twenty three pm
*/







