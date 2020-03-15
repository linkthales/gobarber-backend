import app from './app';

const port = process.env.PORT;

app.listen(port);

console.info(`Server is listening on 127.0.0.1:${port}`);
