import chalk from 'chalk';

class Person {
    constructor(name, favoriteColor){
        this.name = name;
        this.favoriteColor = favoriteColor;
    }

    speak(){
        console.log(chalk.hex(this.name)(this.favoriteColor));
    }
}

export default Person;