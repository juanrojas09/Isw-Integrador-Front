//llamo a las tablas con jquery
//web-dev-server --open --watch
$(document).ready(function () {
    //funcion que se accione al dar click en el boton
    $("#btn-buscar").click(function () {
        //llamo a la funcion que me trae los datos
        BuscarSuscriptor();
    }
    );

    

    

        $(document).ready(function () {
            //funcion que se accione al dar click en el boton
            $("#btn-buscar").click(function () {
                //llamo a la funcion que me trae los datos
                GetAlumnosByName();
            }
            );
        }
        );
    }
);

   










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






 


