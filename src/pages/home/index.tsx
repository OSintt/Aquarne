import ServerCard from "./ServerCard";
import "../styles/css/home.css";

export function Home() {
  return (
    <div className="home-container container">
      <div className="home-wrapper">
        <div className="info-container">
          <h1>Aquarne</h1>
          <p>
            Aquarne es el mejor lugar para jugar a Minecraft en español. Una
            gran network llena de gente de diversos lugares y con gran cantidad
            de jugadores con los que divertirse en una gran cantidad de modos de
            juego. Una comunidad hecha por y para jugadores.
          </p>
          <p>
            <a href="#">More</a>
          </p>
        </div>
        <div className="servers-container flex">
          <ServerCard
            title="Server Anarquico"
            description="Este servidor tiene un objetivo que el 90% de los jugadores veteranos tienen en común: hacer la vida imposible para nuevos jugadores. Esto provoca que, cuando hay un boom de popularidad del servidor,los jugadores se organizan para asesinar los nuevos cometidos al infierno de la anarquía."
            ip="192.68.0.1"
          />
          <ServerCard
            title="Server Survival"
            description="En este servidor los jugadores tienen como objetivo recoger recursos, construir su hogar, acabar con las criaturas y explorar la tierra con la intención de sobrevivir."
            ip="192.68.0.3"
          />
          <ServerCard
            title="Server PVP"
            description="Es un lobby desde donde eliges una modalidad de pvp. Todo son duelos 1 vs 1 o 2 vs 2 en los que ambos jugadores tenéis los mismos objetos y gana el que más habilidad tenga."
            ip="192.68.0.4"
          />
        </div>
      </div>
    </div>
  );
}
