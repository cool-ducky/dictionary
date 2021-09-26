const axios = require('axios').default 
// Use axios to make api requests
module.exports = async(interaction, res) => {
  const url = `https://api.datamuse.com/words?sp=${interaction.data.options[0].value}*`
  //using api to find words that start with the interaction
  const results = await axios({
    method: 'GET',
    url
  })
  let choices = []
  for(const result of results.data) { 
    // Making the results into choices
    if (choices.length == 20) break;
    let obj = {
      name: result.word,
      value: result.word.toLowerCase()
    }
    choices.push(obj)
  }
  res.send({
    type: 8,
    data: {
      choices
    }
  })
}