'use strict'
document.addEventListener("DOMContentLoaded",IniciarPagina);
function IniciarPagina(){
    let felinos = [
        {
         "Raza": "Abisinio",
         "Inteligencia": 45,
         "Poder":50,
         "Defensa":15,
         "Agilidad":95,
         "Puntos_de_vida":15,
         "Sigilo":50,   
        },
    ];
    const STAT_LIMITE = 90;    
    MostrarTabla();//Muestra los objetos precargados.

    let felinos_random =["American","Bombay","Himalayan","Mestizo","Siamese",
    "Persian","Savannah","Munchkin","Somali"]//Arreglo de Strings para raza de gatos.

    function AgregarRandom(event){//Agrega 3 veces los objetos(gatos) random generados.
        event.preventDefault();
        console.log("ENTRO");
        let max = 3;
        while(max > 0){
            let j = Math.floor(Math.random() * felinos_random.length);
            console.log("III",j);
            let felino_random = generarRandom(j);
            console.log("RANDOM_FELINO",felino_random)
            felinos.push(felino_random);
            console.log(felinos);
            MostrarTabla();
            max--;
        }
    }
    function generarRandom(j) {//Genera un objeto(gato) random.
        return {            
            "Raza": felinos_random[j],
            "Inteligencia":((Math.floor(Math.random()*100))),
            "Poder":((Math.floor(Math.random()*100))),
            "Defensa":((Math.floor(Math.random()*100))),
            "Agilidad":((Math.floor(Math.random()*100))),
            "Puntos_de_vida":((Math.floor(Math.random()*100))),
            "Sigilo":((Math.floor(Math.random()*100))),   
            };
    }

    function Agregar(event){ //Agrego nuevos objetos al arreglo, leidos desde los input. 
        event.preventDefault();
            let felino ={
                "Raza": document.getElementById("raza").value,
                "Inteligencia": document.getElementById("stats-int").value,
                "Poder": document.getElementById("stats-poder").value,
                "Defensa": document.getElementById("stats-def").value,
                "Agilidad": document.getElementById("stats-agi").value,
                "Puntos_de_vida": document.getElementById("stats-pv").value,
                "Sigilo": document.getElementById("stats-sigilo").value,
            };
        felinos.push(felino);
        console.log(felinos);
        MostrarTabla();
    }
    function Borrar(indice){//Borro los objetos del arreglo, y muestro la tabla sin ese objeto.
        felinos.splice(indice,1);
        MostrarTabla();
        console.log(felinos);
    }
    function AgregarEventoBorrar(){ //Selecciono los botones generados y les agrego la funcion borrar.
        let buttons = document.querySelectorAll(".btnborra");
        for(let k=0; k < buttons.length; k++){
            buttons[k].addEventListener("click",function(){Borrar(k)});
        }
    }
    function MostrarTabla(){//Genero una nueva row(tr) y una nueva fila del objeto ingresado a la tabla.
        let tabla = document.getElementById("table"); 
        tabla.innerHTML='';       

        for(let i=0; i < felinos.length; i++){//Pregunto por la condicion para agregar resaltado o no.
            if (algunStatMayorALimite(i)){
            tabla.innerHTML += `<tr> <td class="resaltrow">${felinos[i].Raza}</td>
                                     <td class="resaltrow">${felinos[i].Inteligencia}</td>
                                     <td class="resaltrow">${felinos[i].Poder}</td>
                                     <td class="resaltrow">${felinos[i].Defensa}</td>
                                     <td class="resaltrow">${felinos[i].Agilidad}</td>
                                     <td class="resaltrow">${felinos[i].Puntos_de_vida}</td>
                                     <td class="resaltrow">${felinos[i].Sigilo}</td>
                                     <td><button class="btnborra">X</button></tr>`
            } 
            else {
            tabla.innerHTML += `<tr> <td>${felinos[i].Raza}</td>
                                     <td>${felinos[i].Inteligencia}</td>
                                     <td>${felinos[i].Poder}</td>
                                     <td>${felinos[i].Defensa}</td>
                                     <td>${felinos[i].Agilidad}</td>
                                     <td>${felinos[i].Puntos_de_vida}</td>
                                     <td>${felinos[i].Sigilo}</td>
                                     <td><button class="btnborra">X</button></tr>`;
                                    }            
                                }
    AgregarEventoBorrar(); 
    }
    function algunStatMayorALimite(i){
        return ((felinos[i].Inteligencia) > STAT_LIMITE)||((felinos[i].Poder) > STAT_LIMITE)||((felinos[i].Defensa) > STAT_LIMITE)||
            ((felinos[i].Agilidad) > STAT_LIMITE)||((felinos[i].Puntos_de_vida) > STAT_LIMITE)||((felinos[i].Sigilo) > STAT_LIMITE);
    }

    let btnAgrega = document.getElementById("btnAgregar");
    btnAgrega.addEventListener("click",Agregar);

    let btnRandom = document.getElementById("btnAgregaRandom");
    btnRandom.addEventListener("click", AgregarRandom);

}
