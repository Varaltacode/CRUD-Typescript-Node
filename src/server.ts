import {db} from '../src/db/db'
import { router } from "./routes/routes"

const express = require('express')
const app = express()

app.use(express.json())
app.use(router)

app.listen(3000, async ()=>{
  await db.sync(),
  console.log('running...')
})