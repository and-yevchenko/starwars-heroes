import { Title } from '../../components/Title/Title';
import './ErrorPage.css';

export const ErorrPage = () => {

    return (
        <main className='error-page'>
            <Title />
            <p className='error-page-404'>404</p>
            <p className='error-page-message'>This page doesn't exist!</p>
        </main>
    )
}