const axios = require('axios').default
module.exports = async(interaction, res) => {
  const word = interaction.data.options[0].value
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  const def = await axios({
    method: 'GET',
    url
  })
  res.send({
    type: 4,
    data: {
      content: `**${word}:** ${def.data[0].meanings[0].definitions[0].definition}`
    }
  })
}