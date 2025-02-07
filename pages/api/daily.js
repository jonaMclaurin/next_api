
import nextConnect from 'next-connect';
import middleware from '../../middleware/database';


const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {

    let doc = await req.db.collection('daily').findOne()
    console.log(doc);
    res.json(doc);
    console.log(process.env.DB_HOST)
});

export default handler;