import express from 'express';  // Asegúrate de usar la sintaxis ESModules
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('home'); 
});

app.get('/acercaNosotros', (req, res) => {
    res.render('acercaNosotros'); 
});

app.get('/precios', (req, res) => {
    res.render('precios'); 
});

app.get('/contactanos', (req, res) => {
    res.render('contactanos'); 
});

app.get('/dashboard', (req, res) => {
    const content = req.query.content || 'main'; // Si no hay "content", carga "main.ejs"
    res.render('dashboard', { content });
});


app.get('/dashboard/:component', (req, res) => {
    const { component } = req.params;
    res.render(`components/dsh-components/${component}`);
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/reg', (req, res) => {
    res.render('register');
});

app.get('/cen', (req, res) => {
    res.render('centroT');
});


// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
