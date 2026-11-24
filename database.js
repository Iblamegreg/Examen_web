import mongoose from "mongoose"

const conectarDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/tada")
        console.log("MongoDB conectado correctamente")

    } catch (error) {
        console.log("Error al conectar MongoDB:", error)
    }
}

const usuarioSchema = new mongoose.Schema({
    imagen: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    celular: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    fechaNacimiento: {
        type: Date,
        default: Date.now
    }
})

const Usuario = mongoose.model("Usuario", usuarioSchema);

export {conectarDB, Usuario}