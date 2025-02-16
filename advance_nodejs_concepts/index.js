const express = require('express');
const app = express();
const { Worker } = require('worker_threads');
const PORT = 3001;




app.get('/blocking', async (req, res) => {
    console.log(`Worker ${process.pid} handling /blocking request`);
    const worker = new Worker('./worker_thread.js');

    worker.on('message', (data) => {
        console.log(`Worker ${process.pid} received message from worker thread`);
        res.status(200).json({ result: data });
    });

    worker.on('error', (err) => {
        console.log(`Worker ${process.pid} encountered error: ${err.message}`);
        res.status(500).json({ error: err.message });
    });
});

app.use('/health', (req, res) => {
    console.log(`Worker ${process.pid} handling /health request`);
    res.status(200).json({ message: 'server is running fine' });
});

 app.get('/non-blocking', (req, res) => {
    
  res.status(200).json({ message: 'non blocking request' });
    
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
