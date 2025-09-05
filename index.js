// node index.js  Se debe dejar ejecutado en la terminal para verlo en la web.
// ctrl + c , sirve para detener la terminar
const express = require('express')
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send('Hola mundito desde mi primera API en Node.js')
})

app.listen(port,()=>{
    console.log(`API escuchando en http://localhost:${port}`);
});

app.get("/register",(req,res)=>{
    res.json({
        Nombre1: "",
        Nombre2: "",
        Apellido1: "",
        Apellido2: "",
        Correo_electronico: "",
        Telefono: "",
        Fecha_nac: Date,
        Sexo: "",
        Ocupacion: "",
    })
})

app.get("/login",(req,res)=>{
    res.send("Aca va el inicio")
})

app.get("/perfil",(req,res)=>{
    res.send("Aca va el perfil")
})

app.get("/configuracion",(req,res)=>{
    res.send("Aca va la configuracion")
})

app.get("/notificaciones",(req,res)=>{
    res.send("Aca va las notificaciones")
})

app.get("/match",(req,res)=>{
    res.send("Aca va el match")
})

app.get("/membresias",(req,res)=>{
    res.send("Aca va la membresia")
})

app.get("/feed",(req,res)=>{
    res.send("Aca va el feed")
})

app.get("/feed/publicacion",(req,res)=>{
    res.send("Aca va las publicaciones del feed")
})

app.get("/feed/publicacion/comentario",(req,res)=>{
    res.send("Aca van los comentarios de la publicacion")
})

app.get("/lugares",(req,res)=>{
    res.send("Aca van los lugares turisticos")
})

app.get("/lugar/caracteristicas",(req,res)=>{
    res.send("Aca van las caracteristicas de un lugar")
})

app.get("/lugar/calificacion",(req,res)=>{
    res.send("Aca van las calificaciones de un lugar")
})

app.get("/codigo",(req,res)=>{
    res.send("Aca van los codigos de premio")
})

app.get("/codigo/canjear_codigo",(req,res)=>{
    res.send("Aca va la zona para canjear los codigos")
})

app.get("/chats",(req,res)=>{
    res.send("Aca van los chats")
})

app.get("/viajes",(req,res)=>{
    res.send("Aca van los viajes realizados")
})

app.get("/viajes/historial",(req,res)=>{
    res.send("Historial de viajes")
})

app.get("/viajes/invitaciones",(req,res)=>{
    res.send("Invitacion a un viaje")
})