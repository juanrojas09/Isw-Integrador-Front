//llamo a las tablas con jquery
//web-dev-server --open --watch
$(document).ready(function () {
    
    //funcion que se accione al dar click en el boton
    $("#btn-buscar").click(function () {
        //llamo a la funcion que me trae los datos
        BuscarSuscriptor();
    }
    );

    $("#btn-buscar2").click(function () {
        GetAll();
    });

        $(document).ready(function () {
            //funcion que se accione al dar click en el boton
            $("#btn-buscar").click(function () {
                //llamo a la funcion que me trae los datos
                //GetAlumnosByName();
                
            }
            );
        }
        );
    }
);

   

console.log("hola");

async function GetAll(){

    (async () => {
        const rawResponse = await fetch('https://isw3-integrador-production.up.railway.app/All'  , {
            method: 'GET',
            
            
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',


            }



        });
        const resp = await rawResponse.json();

        let tabla='';
        for(let i=0;i<resp.length;i++){
            let html='<tr><td>'+resp[i].name+'</td><td>'+resp[i].age+'</td></tr>';
            tabla=tabla+html;
        }
        document.querySelector("#tabla tbody").outerHTML =  tabla;
    })();

}







async function GetAlumnosByName() {

    const nombre = document.getElementById("myInput").value;
  
    console.log("hola"+nombre);




   (async () => {
        const rawResponse = await fetch('https://isw3-integrador-production.up.railway.app/' + nombre , {
            method: 'GET',
            //deshabilitar cors
            
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',


            }

        });


        
        
        const resp = await rawResponse.json();
       
     
     
        //let html='<tr>''<td type="text" style="width: 140px;"  id="nombre" class="form-control" placeholder="'+resp.name+'" /><td type="text" style="width: 140px;"  id="nombre" class="form-control" placeholder="'+resp.age+'" /></tr>';
     debugger
        let tabla='';
        //recorrer el json y guarddar en tabla html
        for (let i = 0; i < resp.length; i++) {
            
            if(nombre==resp[i].name){
            let html = '<tr><td>' + resp[i].name + '</td><td>' + resp[i].age + '</td></tr>';
            
            
            tabla=tabla+html;
            }
            document.querySelector("#tabla tbody").outerHTML =  tabla;
        }
        
      
       
        console.log(JSON.parse(resp));

        






    })();
}






 


/*

const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

//@type {CodeceptJS.MainConfig} 
exports.config = {
    tests: './*_test.js',
    output: './output',
    helpers: {
      WebDriver: {
        url: 'https://isw3-integrador-production.up.railway.app/',
        browser: 'chrome',
        onRequest: () => {
              }
      }
    },
    include: {
      I: './steps_file.js'
    },
    name: 'IT',
    mocha:  {
      "reporterOptions": {
        "codeceptjs-cli-reporter": {
          "stdout": "-",
          "options": {
            "steps": true,
          }
        },
        "mocha-junit-reporter": {
          "stdout": "./output/console.log",
          "options": {
            "mochaFile": "./output/result.xml"
          },
          "attachments": true //add screenshot for a failed test
          }
        }
      }
    
  }

*/

/*

Feature('netcore');

const expect = require('chai').expect;
const {I} = inject();

Scenario('Verify a successful call', async () => {
	const res = await I.sendGetRequest('/');
	expect(res.status).to.eql(200);
});

Scenario('Verify return value', async () => {
	const res = await I.sendGetRequest('/');
	//console.log(res);
	expect(res.data.message).to.eql('Ruta default del proyecto integrador de ISW3');
});

Scenario('Verify return data', async () => {
	const res = await I.sendGetRequest('/juan');
	//console.log(res);
	expect(res.status).to.eql(200);
});
*/ 




