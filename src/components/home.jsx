import { useState } from 'react';
import data from '../assets/veteranos.json';
import '../pages/index.css';
import VeteranosCard from './veteranosCard';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const veteranos = data.veteranos;

  // Filter veterans based on the search term
  const normalizeString = (str) => 
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();

  // Filter veterans based on normalized search term
  const filteredVeteranos = veteranos.filter((veterano) =>
    normalizeString(veterano.nombre).includes(normalizeString(searchTerm)) ||
    normalizeString(veterano.grado).includes(normalizeString(searchTerm))
  );

  return (
    <div className="home">
      <header className="home_header">
        <h1>Veteranos</h1>
        <input
          className="home_input"
          type="text"
          placeholder='Busca acá'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>
      <main className="home_main">
        <div className={filteredVeteranos.length > 0 ? "home_maingrid" : "home_maingridcenter"}>
          {filteredVeteranos.length > 0 ? (
            <VeteranosCard veteranos={filteredVeteranos} />
          ) : (
            <div className="no-results">
               No se encontró ningún veterano.
            </div>
          )}
        </div>
      </main>

    </div>
  );
}

export default Home;