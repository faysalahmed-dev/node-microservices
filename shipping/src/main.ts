import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: '1mb', extended: true }));

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(8003, () => {
    console.log(`shipping server listening on 8003`);
}).on('error', err => {
    console.log('error ', err);
    process.exit(1);
});
