const PORT = 8000
const express = require('express')
const { MongoClient } = require('mongodb')
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cors = require('cors')

const uri = 'mongodb+srv://andrew9ca:cNV1D24q7UyhIH9x@cluster0.jy1qe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json('Hello World!')
})

app.post('/signup', async (req, res) => {
    const client = new MongoClient(uri)

    const genUserID = uuidv4()
    const { username, password } = req.body // data from front-end to back-end
    const encrypted_pass = await bcrypt.hash(password, 10)
    
    try {

        await client.connect()
        const database = client.db('app-data')
        const users = database.collection('users')

        const existingUser = await users.findOne({username});

        if(existingUser) {
            return res.status(409).send('User already exists')
        }

        const user_obj = {
            user_id: genUserID,
            pass_hash: encrypted_pass
        }
        const secret_key = '1a3f3c5ea04760fdc973283e2e98db631fcbb82364a4d566332e6926d5a57cdc3357c279d47bf46105dd8964b69edef512475da2c7c9e0718f195e78fcaa3e22546d46ff6d523e964a69916bfabaadc93cc90358277bb0ceaf314878e67f02e470ce19b73455dfa30b060d3a22308680b4c2d9954f4ca8b5c1c87245aee4c50924040a3d2c4d23783cd4794d93e437ac2e1f553c48e80bc66ea7ab4e8857721bbb983adae3bbcf6b36b0abaefa2f9161b05c913bb8ef0cfa0d68c9cac17bfdd9784a073cc3c3e56516e9a4dbd0654ec017debec0e1d5bdd97b5020b7479806f8a6f061b46f08f6cf9f9c625d38eec11ab3aa91d681cec70fafd82c04953da1a0'
        await users.insertOne(user_obj)
        const token = jwt.sign({ user_id: genUserID },secret_key, {expiresIn: 1440}) // secret key addition? 2:56:00

        res.status(201).json({ token, user_id: genUserID })

    } catch(err) {
        console.log(err)
    }
})

app.get('/users', async (req, res) => {
    const client = new MongoClient(uri)

    try {
        await client.connect()
        const database = client.db('app-data')
        const users = database.collection('users')

        const returnedUsers = await users.find().toArray()
        res.send(returnedUsers)
    } catch(err) {
        console.log(err);
    } finally {
        await client.close()
    }
})

app.listen(PORT, () => console.log('Server running on PORT ' + PORT))
