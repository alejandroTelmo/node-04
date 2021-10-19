const inquirer=require('inquirer');
const colors=require('colors');//tambien podemos usarla sin asignarla a una const
//require('colors') esta funciona igualgit status


const menu=[// aca tenemos que ir a inquirer para saber que tipo de parametros necesita
    //en esta parte estamos definiendo el menu que va a tener nuestra aplicacion
    //lo que nos permite crear este menu es inquirer
    {
        type:'list',
        name:'option',
        message:'what do you want to do ?',
        choices:[
            {
                value:1,
                name: `${'1-'.blue} Create Task`
            },
            {
                value:2,
                name: `${'2-'.blue} Get Task`
            },
            {
                value:3,
                name: `${'3-'.blue} Delete Task`
            },
            {
                value:4,
                name: `${'4-'.blue} Update Task`
            },
            {
                value:5,
                name: `${'5-'.blue} Exit`
            }
        ]
    }
]
const inquirerMenu=async ()=>{
    console.log("=================================================".blue);
    console.log("Select a option".white);
    console.log("=================================================".blue);

    const {option}=await inquirer.prompt(menu);
    return option;


}
const inquirerInput =async(message)=>{
    const question =[

    
        {
            type:'input',
            name:'description',
            message
        }
    ];
    const {description }= await inquirer.prompt(question);
    return description;
}

module.exports={
    inquirerMenu,
    inquirerInput
}