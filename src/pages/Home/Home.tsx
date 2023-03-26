import Layout from '../../layout/Layout';
import MainPageContent from '../../components/MainPageContent/MainPageContent';
import "./Home.css"

const Home = () => {
    return (
        <Layout>
            <div className='home-page'>
                <div className='home-logo'>
                    Лучшие фильмы
                </div>
                <div className='home-content-box'>
                    <MainPageContent data={['мама мия', 'сваты', 'вау']}/>
                </div>
            </div>
        </Layout>
    );
}

export default Home;