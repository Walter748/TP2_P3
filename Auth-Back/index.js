import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';

const app = express();



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto: ${PORT}`));