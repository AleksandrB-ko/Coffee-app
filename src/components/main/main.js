
import Header from '../header/header';
import Divider from '../divider/divider';

import './main.scss';

const Main = () => {
    return (
        <section className="main">
            <Header />
            <div className="container">
                <div className="main__body">
                    <h1 className="main__title">Everything You Love About Coffee</h1>
                    <Divider white={true} />
                    <div>
                        <h2 className="main__subtitle">We makes every day full of energy and taste</h2>
                        <h2 className="main__subtitle">Want to try our beans?</h2>
                    </div>
                    <div  className="main__link">More</div>
                </div>
            </div>
        </section>
    );
}

export default Main;