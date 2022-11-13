const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();

const client = require("@mailchimp/mailchimp_marketing");

const MailList = process.env.MAILCHIMP_LIST_ID;

client.setConfig({
    apiKey: process.env.MAILCHIMP_API_TOKEN,
    server: process.env.MAILCHIMP_SERVER,
});

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/member-count', async (req, res) => {
    try {
        const data = await client.lists.getListMembersInfo(MailList)

        res.json({ count: data.total_items });
    } catch (e) {
        res.status(500).json({error: e})
    }
});

app.post('/add-member', async (req, res) => {
    const data = req.body

    try {
        await client.lists.addListMember(MailList, data);

        res.status(200).json({ data: 'success' });
    } catch(e) {
    res.status(500).json({error: e})
    }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});

