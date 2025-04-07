import express from 'express'

const app = express()
app.use(express.json())

const users = []

app.get('/usuarios', (req, res) => {
    

    res.status(200).json(users)
})

app.post('/usuarios', (req, res) => {
    users.push(req.body)

    res.status(201).json({message:"Usuário criado com sucesso"})
})

app.listen(3000)
// req - requisição
// res - resposta
// http://localhost:3000