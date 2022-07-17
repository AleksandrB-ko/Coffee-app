

import './logo.scss';

const Logo = (props) => {
    const {  white } = props;
    let classNames = white ? 'logo logo_white' : 'logo';
    return <div  className={classNames}>Coffee house</div>;
}

export default Logo;