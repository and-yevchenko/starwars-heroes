import { HeroesList } from '../../components/HeroesList/HeroesList';
import { Title } from '../../components/Title/Title';
import './Home.css';

export const Home = () => {
    return (
        <main className="home">
            <Title />
            <HeroesList />
        </main>
    );
};
