import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Staff from './pages/Staff';
import Events from './pages/Events';
import Junior from './pages/Junior';
import Middle from './pages/Middle';
import Senior from './pages/Senior';
import Preparatory from './pages/Preparatory';
import Primary from './pages/Primary';
import Prices from './pages/Prices';
import Contacts from './pages/Contacts';

function Main() {
    return (
        <main className="main">
            <div className='container'>
                    <div className='main__content'>
                        <Routes>
					        <Route path="/nursary_primary_school/" element={<Home />} />
					        <Route path="/about/staff/" element={<Staff />} />
					        <Route path="/about/events/" element={<Events />} />
					        <Route path="/nursary/junior/" element={<Junior />} />
					        <Route path="/nursary/middle/" element={<Middle />} />
					        <Route path="/nursary/senior/" element={<Senior />} />
					        <Route path="/school/preparatory/" element={<Preparatory />} />
					        <Route path="/school/primary/" element={<Primary />} />
					        <Route path="/prices/" element={<Prices />} />
					        <Route path="/contacts/" element={<Contacts />} />
				        </Routes>
                    </div>
            </div>
        </main>
    );
}

export default Main;