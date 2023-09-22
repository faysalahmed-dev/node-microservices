import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: '1mb', extended: true }));

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(8002, () => {
    console.log(`products server listening on 8002`);
}).on('error', err => {
    console.log('error ', err);
    process.exit(1);
});
