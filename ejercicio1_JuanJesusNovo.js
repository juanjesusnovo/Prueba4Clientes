//Creamos el objeto con los valores determinados por el enunciado (nombre, apellidos, nivel y puntuación)

const Jugador1 = {
    Nombre: "Pepe",
    Apellidos: "Fernandez",
    Nivel: 1,
    Puntuacion: 1,

//El método sumarPuntuación aumenta la puntuación del usuario en 1 punto cada vez que se ejecute, en este caso se ejecutará cuando matemos un zombie,
//cuando la puntuación alcance 10 puntos, el nivel del jugador aumentará en 1 punto
    sumarPuntuacion(){
        this.Puntuacion += 1;
        if(this.Puntuacion % 10 == 0){
            this.Nivel += 1;
        }
    },

//El método restarPuntuación reduce la puntuación del usuario en un punto cada vez que se ejecute, en este caso se ejecutará cuando recibamos un golpe,
//cuando la puntuación de nuestro jugador baje hasta 0 puntos, el jugador se reseteará a los valores del principio. Se notificará el reseteo de puntuación
//mediante un alert
    restarPuntuacion(){
        this.Puntuacion -= 1;
        if(this.Puntuacion == 0){
            alert("Tu jugador ha sido reseteado, su puntuación ha llegado a 0 Puntos.");
            this.resetearJugador();
        }
    }, 

//El método resetearJugador resetea al jugador a los valores iniciales    
    resetearJugador(){
        this.Nivel = 1;
        this.Puntuacion = 1;
    }
}

const Jugador2 = {
    Nombre: "Maria",
    Apellidos: "Perez",
    Nivel: 1,
    Puntuacion: 1,

    sumarPuntuacion(){
        this.Puntuacion += 1;
        if(this.Puntuacion % 10 == 0){
            this.Nivel += 1;
        }
    },
    restarPuntuacion(){
        this.Puntuacion -= 1;
        if(this.Puntuacion == 0){
            alert("Tu jugador ha sido reseteado, su puntuación ha llegado a 0 Puntos.");
            this.resetearJugador();
        }
    },
    resetearJugador(){
        this.Nivel = 1;
        this.Puntuacion = 1;
    }
}

const jugadores = [Jugador1,Jugador2];
Jugador1.sumarPuntuacion();
Jugador1.sumarPuntuacion();
Jugador1.sumarPuntuacion();
Jugador1.sumarPuntuacion();
Jugador1.sumarPuntuacion();
Jugador1.sumarPuntuacion();
Jugador1.sumarPuntuacion();
Jugador1.sumarPuntuacion();
Jugador1.sumarPuntuacion();
Jugador1.sumarPuntuacion();
Jugador1.sumarPuntuacion();
Jugador1.resetearJugador();


console.log(jugadores);