import "dotenv/config"
import express from "express"


const PORT = process.env.PORT

const app = express()

app.use(express.urlencoded({extended: true})) //Para trabalhar com as imagens
app.use(express.json()) // Para trabalhar com texto

//Importação da Conexão com Banco de Dados
import conn from "./src/config/conn.js"

// Importação dos Módulos (models)
import "./src/models/palestranteModel.js"

//Importação das Rotas (routes)
import palestranteRoutes from "./src/routes/palestranteRoute.js"

// Utilização das rotas
// https://localhost:3000
app.use("/eventos", palestranteRoutes)

app.get("/", (request, response) => {
    response.send("Olá, Mundo!")
})

app.listen(PORT, () => {
    console.log("Servidor on port" + PORT)
})