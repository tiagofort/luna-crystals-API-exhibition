require('dotenv').config();
const app = require('./server')
const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Ouvindo porta: ${port}`)
})