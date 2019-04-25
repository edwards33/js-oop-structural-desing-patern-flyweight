let instance = null;

class Honda {
    constructor(type, transmission, color) {
        if (!instance) {
            this.type = type;
            this.transmission = transmission;
            this.color = color;
            instance = this;
        } else {
            return instance;
        }
        
    }
}

const newCarHonda = new Honda('Sport', 'automatic', 'white');
const greyOrWhiteHonda = new Honda('Sport', 'automatic', 'grey');

console.log(newCarHonda);
console.log(greyOrWhiteHonda);
