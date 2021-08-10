const fetch = require('node-fetch');

const query = `
query Votes {
    votes (
      first: 1000
      skip: 0
      where: {
        proposal: "QmPvbwguLfcVryzBRrbY4Pb9bCtxURagdv1XjhtFLf3wHj"
      }
      orderBy: "created",
      orderDirection: desc
    ) {
      id
      voter
      created
      proposal {
        id
      }
      choice
      space {
        id
      }
    }
  }
`;
const url = "https://hub.snapshot.page/graphql";
const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query })
};
fetch(url, opts)
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);