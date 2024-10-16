const PORT = 8000
const express = require('express')
const { MongoClient } = require('mongodb')
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cors = require('cors')

const uri = 'mongodb+srv://andrew9ca:cNV1D24q7UyhIH9x@cluster0.jy1qe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const app = express()
app.use(cors(), express.json())

app.post('/signup', async (req, res) => {
    const client = new MongoClient(uri)

    const genUserID = uuidv4()
    const { username, password } = req.body // data from front-end to back-end
    const encrypted_pass = await bcrypt.hash(password, 10)
    
    try {

        await client.connect()
        const users = client.db('app-data').collection('users')
        
        const potentialUser = await users.findOne({ user_name: username }) // Ensure no duplicate users
        if (potentialUser) {
            return res.status(409).json({ message: 'Username already exists, please choose another username.' })
        }

        const secret_key = '1a3f3c5ea04760fdc973283e2e98db631fcbb82364a4d566332e6926d5a57cdc3357c279d47bf46105dd8964b69edef512475da2c7c9e0718f195e78fcaa3e22546d46ff6d523e964a69916bfabaadc93cc90358277bb0ceaf314878e67f02e470ce19b73455dfa30b060d3a22308680b4c2d9954f4ca8b5c1c87245aee4c50924040a3d2c4d23783cd4794d93e437ac2e1f553c48e80bc66ea7ab4e8857721bbb983adae3bbcf6b36b0abaefa2f9161b05c913bb8ef0cfa0d68c9cac17bfdd9784a073cc3c3e56516e9a4dbd0654ec017debec0e1d5bdd97b5020b7479806f8a6f061b46f08f6cf9f9c625d38eec11ab3aa91d681cec70fafd82c04953da1a0' // Temporary for testing purposes only

        await users.insertOne({ // Insert a new user
            user_id: genUserID,
            user_name: username,
            pass_hash: encrypted_pass
        })

        const token = jwt.sign({ user_id: genUserID }, secret_key, {expiresIn: 1440}) // Secure user authentication using JSON Web Token

        res.status(201).json({ token, userId: genUserID }) // Server response

    } catch(err) {
        console.log(err)
    } finally {
        await client.close()
    }

})

app.post('/login', async (req, res) => {
    const client = new MongoClient(uri)
    const { username, password } = req.body

    try {
        await client.connect()
        const users = client.db('app-data').collection('users')
        const user = await users.findOne({ user_name: username })
        const validPass = await bcrypt.compare(password, user.pass_hash)

        const secret_key = '31ddbf1585242c7f11c4083af72ec79fc0a726179e609b467b8e8cfef54bff5ff77a7e2be96e154ab0d6d36ce9811c9b2bffc690404e2bd5ba4733300189ef1c2a449f390ba5b33cd145f9a406c90f26d421b4e2232dbe12bc33261e4da6c7fe90204c5a03cadd3f7148e35e6705c808e20cf5ac3a9903d8c6eae6c705c5be10d1cf505a4eb0a0aca5afc8b14f78d6dacb9947b207bbc25abf324e3ff222136d1f9e74698f7418550123251cee62de9b6a263410aa4448f0650cb9c06cd17c6a7eb3f01e57c38522f27fb44ffba75cb081781d8f63dcd3bdbbb193c30596a9f4243f268f7533e8c08942a7cf84b928da2cbe99b1ba5125bf038e64346f8b925a' // Temporary for testing purposes only

        if (user && validPass) {
            const token = jwt.sign(user, secret_key, {expiresIn: 1440})
            res.status(201).json({ token, userId: user.user_id })
        }
        res.status(400).send('Invalid Username or Password!')

    } catch(err) {
        console.log(err)
    } finally {
        await client.close()
    }

});

app.get('/users', async (req, res) => { // What does this do?
    const client = new MongoClient(uri)

    try {
        await client.connect()
        const users = client.db('app-data').collection('users')
        const returnedUsers = await users.find().toArray()
        res.send(returnedUsers)
    } catch(err) {
        console.log(err);
    } finally {
        await client.close()
    }
})

app.put('/user', async (req, res) => {
    const client = new MongoClient(uri)
    const formData = req.body.formData

    try {
        await client.connect()
        const users = client.db('app-data').collection('users')

        const query = { user_id: formData.user_id }
        const updatedUser = {
            $set: {
                first_name: formData.first_name,
                last_name: formData.last_name,
                email: formData.email,
                dob_day: formData.dob_day,
                dob_month: formData.dob_month,
                dob_year: formData.dob_year,
                gender: formData.gender,
                github_url: formData.github_url,
                linkedin_url: formData.linkedin_url,
                portfolio_url: formData.portfolio_url,
                location: formData.location,
                profile_url: formData.profile_url,
                coder_name: formData.coder_name,
                bio: formData.bio,
                goals: formData.goals,
                languages: formData.languages,
                frameworks: formData.frameworks,
                dev_tools: formData.dev_tools,
                areas_of_interest: formData.areas_of_interest,
                hear_about_us: formData.hear_about_us,
                coder_pals: formData.coder_pals
            }
        }

        const insertedUser = await users.updateOne(query, updatedUser)
        res.send(insertedUser)

    } catch (err) {
        console.log(err)
    } finally {
        await client.close()
    }
})

app.listen(PORT, () => console.log('Server running on PORT ' + PORT))
