// ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।

const number = 1234;
let value = 12343;
value = 546;

// console.log(value);

// ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও।

const day = 'Friday';
const company = {
    name: 'STD Company',
    amploye_number: 3889,
    salary: 10000,
    location: 'Chittagong'
}

const templateString = `I do not going to university
Because I have not remember 
that 
Today is my class.
I remeber that this is ${day}
I do the job ${company.name}
I got the salary ${company.salary} every months five day .
`
// console.log(templateString);

// ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 
const numberDivisionByFive = number => console.log(number / 5);
numberDivisionByFive(100);

// ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো
const twoParameterMultiplication = (number1, number2) => (number1 + 2) * (number2 + 2);
// console.log(twoParameterMultiplication(10, 20));

// ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 

const numberMultiplication = (num1, num2, num3) => { return (num1 * num2 * num3) };
const total = numberMultiplication(2, 3, 4);
// console.log(total);

// ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 

const numbersSumAndMultiplycation = (num1, num2) => {
    const addNum1 = num1 + 2;
    const addNum2 = num2 + 2;
    const multiply = addNum1 * addNum2;
    return multiply;
}
// console.log(numbersSumAndMultiplycation(3, 5));

// ৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো।

// ৪.৫. জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি?

// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
const numbers = [3, 1, 4, 6, 5];
const newNumbers = console.log(numbers.map(num => num * 5));
// console.log(newNumbers);

// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 
const oddNumbers = numbers.filter(num => num % 2 != 0);
// console.log(oddNumbers);

// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 
const houses = [
    { name: 'White House', price: 1000000, location: 'America' },
    { name: 'Mini White House', price: 500000, location: 'Chittagong' },
    { name: 'Tasmohol', price: 2000000, location: 'India' },
    { name: 'mina cotze', price: 5000, location: 'kahgrasori' }
]
const findPrice = houses.find(h => h.price === 5000);
console.log(findPrice);

//8. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 

// const obj = { a: 1, b: { c: 2 } };
// const { a } = obj;
// console.log(obj.b);

const { age, name } = { name: 'hiru', age: 24 };
console.log(age);

// ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 
const Variable = [1, 2, 3, 4, 5];
const [first, second, three] = [1, 2, 3, 4, 5];
console.log(three);

// ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 
const defult = (num1, num2, num3 = 30) => {
    const sum = num1 + num2 + num3;
    return sum;
}
console.log(defult(10, 10));

// ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )

const products = {
    name: 'silk',
    id: 01201,
    design: 'smart',
    catagorie: {
        catagorie1: {
            name: 'lax', price: 30, sales: 'hand_to_hand', address: [{
                address1: 'rajarhat'

            },
            { address2: 'West_khurushia' }
            ]
        },
        catagorie2: { name: 'wasing_powder', price: 10000, sales: 'hand_to_hand', address: 'Razarhat' },
        catagorie2: { name: 'wasing_powder', price: 2000, sales: 'hand_to_hand', address: 'Razarhat' },
        catagorie2: { name: 'wasing_powder', price: 100, sales: 'hand_to_hand', address: 'Razarhat' },
        catagorie2: { name: 'wasing_powder', price: 5000, sales: 'hand_to_hand', address: 'Razarhat' },

    }
}
console.log(products.catagorie.catagorie2?.price);

const user = {
    id: 5001,
    name: 'Thomas alba edison',
    address: {
        street: {
            first: '35/A kochua barodi',
            second: 'third floor',
            third: 'right side'
        },

        postoffice: 'cantonment',
        city: 'Dhaka'
    }

}
const userFloor = user.address.street.second;
console.log(userFloor);