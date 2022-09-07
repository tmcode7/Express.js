const express = require('express')
const app = express()
const PORT = 8000


//a simple API to be displayed with the GET requests
const topScorer = {
    '2021':{
        'goals': 20,
        'player': 'Mohammed Salah',
        'team': 'Liverpool F.C'
    },

    '2020':{
        'goals': 25,
        'player': 'Harry Kane',
        'team': 'Spurs F.C'
    },

    'unknown':{
        'goals': 0,
        'player': 'Unknown',
        'team': 'Unknown'
    },
    
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res)=>{
    const requestScorer = req.params.name.toLowerCase()
    if(topScorer[requestScorer]){
       res.json(topScorer[requestScorer])
    }else{res.json(topScorer['unknown'])}
})

app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}!`)
})