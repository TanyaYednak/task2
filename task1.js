
let students = [
    {
        FName: 'Oleg',
        LName:  'Batun',
        estimate:   '60'
    },
    {
        FName: 'Yulia',
        LName:  'Boichyk',
        estimate: '90'
    },
   
    {
        FName: 'Nazar',
        LName:  'Bohnak',
        estimate: '75',
    },

    {
        FName: 'Tetyana',
        LName:  'Yednak',
        estimate: '96',
    },

    {
        FName: 'Tetyana',
        LName:  'Palianytsa',
        estimate: '92',
    },
    {
        FName: 'Nastya',
        LName:  'Nagirnska',
        estimate: '83',
    },
    {
        FName: 'Ivan',
        LName:  'Melnichuk',
        estimate: '84',
    },
    {
        FName: 'Maxum',
        LName:  'Romanyuk',
        estimate: '76',
    },
    {
        FName: 'Tetyana',
        LName:  'Romanyuk',
        estimate: '94',
    },
    {
        FName: 'Bohdan',
        LName:  'Timchishin',
        estimate: '79',
    }
];
const sortObject = (arr, prop) => {
    let compare = (a, b) => a[prop] > b[prop] ? 1 : a[prop] == b[prop] ? 0 : -1; 
    arr.sort(compare);
}
sortObject(students, 'FName'); 
 console.log(students); 
 console.log('\n')
 sortObject(students, 'LName'); 
 console.log(students);
 console.log('\n')
 sortObject(students, 'estimate');
 console.log(students);
 
 console.log('\n');

    const compare = (arr, key, callback) => arr.reduce((prev, curr) => 
    (callback(prev[key], curr[key]) ? prev : curr), {})[key];

    const AvgMark = avg();
    const MinMark = compare(students, 'estimate', (a, b) => a < b); 
    const MaxMark = compare(students, 'estimate', (a, b) => a > b); 
    function avg () { 
    let sum=0;
    for (const key in students){
        sum += +students[key].estimate;
         
       };
    let avg = Math.ceil(sum/students.length);
    return avg.toString();
    }

 console.log('Max, Min and avarage value'+'\n'+`Min value: ${MinMark}, max value: ${MaxMark}, avg value:${AvgMark}`); 
 
 console.log(students.find(x => x.estimate === MinMark));  
 console.log(students.find(x => x.estimate === MaxMark));  
 console.log(students.find(x => x.estimate === AvgMark));    
            
 //Task3


    rate();
    console.log('\n'+'Add field  rate: ')
    function rate (){ 
        for (const key in students) {
         let value;
          value = Math.round(((MaxMark/students[key].estimate)*100)-100);
          students[key].rate = value; 
            }
        }
    console.log(students);
//task 4
    function password_generator( len , isPunctuation, isNumeric ) {
        const length = (len)?(len):(10);
        const string = "abcdefghijklmnopqrstuvwxyz";
        const numeric = '0123456789';
        const punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
        let password = "";
        let character = "";
    
        while( password.length<length ) {
            valueString = Math.floor(Math.random()*string.length);
            hold = string.charAt( valueString );
            hold = (valueString%2==0)?(hold.toUpperCase()):(hold); 
            character += hold;
            if(isNumeric){
            valueNumeric = Math.floor(numeric.length * Math.random()*Math.random());
            character += numeric.charAt( valueNumeric );
            }
            if(isPunctuation){
            valuePunctuation = Math.floor(punctuation.length * Math.random()*Math.random());
            character += punctuation.charAt( valuePunctuation );
            }
            password = character;
        }
        return password;
    }
   
    console.log( "Random password is:" , password_generator(5, false, true));


