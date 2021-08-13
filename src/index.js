const express = require('express')
const app = express()
const port = 3000

const TGtoken = ""; // Add your bot token that you get from the bot father on Telegram
const telegramUrl = "https://api.telegram.org/bot" + TGtoken;

// The event data we're posting to snapshot
const proposalID = ""; // This is the proposal ID we need
const snapshotSpace = ""; // This is the snapshot space you want to get data from (eg: yam.eth)
const snapshotExpire = ""; // Expiry something idk
const snapshotEvent = ""; // This is the event type we want

const telegramWebdata = {
  id: proposalID,
  event: "proposal/created",
  space: snapshotSpace,
  expire: snapshotExpire
};

app.post('/api/telegram', function (req, res) {
    req.send('')
    res.send('Got a POST request')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

getVotes()