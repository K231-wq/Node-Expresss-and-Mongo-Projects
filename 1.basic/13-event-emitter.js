const event = require('events');
const eventemitter = new event.EventEmitter();

const greeting = (name) => {
    console.log(`Hello ${name}`);
}

eventemitter.on('greeting', () => greeting('Min thet khaing'));

eventemitter.on('Calculate', (num1, num2) => console.log(`The sum: ${num1+num2}`));

eventemitter.on('BMI', (name, weight_kg, height_m) => {
    const bmi = parseFloat(weight_kg/ (height_m * height_m));
    if(bmi >= "40.0"){
        console.log(`${name} is Obese`);
    }else if(bmi >= 25.0 && bmi <= 39.9){
        console.log(`${name} is OverWeight`);
    }else if(bmi >= 18.5 && bmi <= 24.9){
        console.log(`${name} is Normal`);
    }else if (bmi <= 18.4){
        console.log(`${name} is Underweight`);
    }else{
        console.log("Invalid~~");
    }

})

eventemitter.emit('greeting');
eventemitter.emit('Calculate', 2, 2);
eventemitter.emit('BMI', 'Min Thet Khaing', 80, 1.89);
