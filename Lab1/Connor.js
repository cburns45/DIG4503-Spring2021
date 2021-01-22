/**
 * Create a class using your first name (for example, mine would be "Dan.js") with the following:
Should extend the Person class
Should use super() in its own constructor() to pass the arguments to what it is extending
Should import the "Person.js" file.
 */

 import Person from './Person.js';

 class Connor extends Person{
     constructor(){
         super( "#00FFFF", "Connor" );

         
     }
 }

 export default Connor;


