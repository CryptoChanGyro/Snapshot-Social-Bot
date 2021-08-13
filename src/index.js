const express = require('express')
const app = express()
const port = 3000

var TGtoken = ""; // Add your bot token that you get from the bot father on Telegram
var telegramUrl = "https://api.telegram.org/bot" + TGtoken;

const getVotes = () =>{
    app.post('/api/telegram', function (req, res) {
        req.send('')
        res.send('Got a POST request')
      })
}



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

getVotes()