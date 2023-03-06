import PagesSCSS from './Pages.module.scss';


const HomePage = () => {
    return (
        <main>
            <section className={PagesSCSS.section}>
                <h1 className={PagesSCSS.header}>&#9742; This is your PhoneBook</h1>
                <p className={PagesSCSS.text}>Please, Sign In or Sign Up  to have access to the PhoneBook!</p>
            </section>
        </main>
    )
};

export default HomePage;