const { response } = require('express')
const express = require('express')
const app = express()
const fetch = require ('cross-fetch')




app.get('/alunos/todos', (req,res)=>{  
    res.json({alunos:[{nome: 'Francisco'}, {nome: 'Pedro'}, {nome: 'Gabriel'}, {nome: 'Renan'}, {nome: 'Joaquim'}]})
    })

app.get('/moeda/:valor_real',(req,res)=>{
    let url = 'https://economia.awesomeapi.com.br/last/USD-BRL'
    fetch(url).then(function(response){
    response.json().then(function(result){
        let cotacao=parseFloat(result.USDBRL.bid)
        let conversao =parseFloat(req.params.valor_real)/cotacao
        res.json({conv: conversao})
       /* console.log(cotacao)
        console.log(conversao) */
    })
       
    })

})    
app.listen(3000,()=>{console.log('iniciado')})

