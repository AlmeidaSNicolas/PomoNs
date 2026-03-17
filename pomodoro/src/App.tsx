import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/theme.css';
import './styles/global.css';

// Importando seus componentes
import Notfound from './components/NotFound'; 
import Heading from './components/Heading';
import { TimerIcon } from 'lucide-react';
import Botoes from './components/botoes';


const Home = () => (
    <>
        <Heading>
            PecasPomo
            <button> <TimerIcon /> </button>
        </Heading>

        
    </>
);

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rota da sua página principal */}
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Botoes />}

                {/* Aqui entra o seu componente Notfound! 
                    O path="*" captura qualquer link que não seja o "/"
                */},
                <Route path="*" element={<Notfound />} />
            </Routes>
        </BrowserRouter>
    );
}