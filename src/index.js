let bodyParser = require('body-parser')
const express = require('express')
const app = express()
const fetch = require('node-fetch');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(express.json({
  type: "application/json" // optional, only if you want to be sure that everything is parset as JSON. Wouldn't reccomend
}));

const TGtoken = "1985626201:AAFuMPNY3sBH8njCVkbXqqZdH6kvpgXWa-8"; // Add your bot token that you get from the bot father on Telegram
const TGGroupName = "@MeekuTest"; // Add your group name, for ex: @CryptoChan

const sendMessageURL = `https://api.telegram.org/bot${TGtoken}/sendMessage`


// Get posted data from the URL link
app.post('/api/telegram', function (req, res) {
  console.log(req.body)
  const postPromise = fetch(sendMessageURL, {
    method: 'post',
    body: JSON.stringify({
      chat_id: TGGroupName, // Add in the variable for the group chat name
      text: `Your proposal ID is: ${req.body.id}` // Todo: Add proposalID
    }),
    headers: { 'Content-Type': 'application/json' },
  })
  console.log("We're logging the promise, y u so sexy tho?")
  console.log(postPromise)

  postPromise.then((response) => {
    console.log("inside .then")
    console.log(response)
    res.send(`Done sending to telegram: ${response.body}`)
  })

  postPromise.catch((err) => {
    console.log("Logs the error, if there is one")
    console.log(err)
    res.error("Fucked!");
  })

})

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})