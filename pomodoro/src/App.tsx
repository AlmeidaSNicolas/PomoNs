import './styles/theme.css';
import './styles/global.css';
import Heading from './components/Heading';
import { TimerIcon } from 'lucide-react';


export default function Card() {
    return (

        <>
            <Heading>
                PecasPomo
                 <button> <TimerIcon /> </button>
            </Heading>
              
            <p>LoremLorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam inventore nisi eos tenetur qui vitae commodi porro unde accusamus, eaque repellendus quasi, explicabo facere assumenda. Fugiat hic quos laboriosam reiciendis!</p>

            </>
    )
}

