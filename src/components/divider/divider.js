import './divider.scss';

const Divider = (props) => {
    const { white } = props;
    let classNames = 'divider__img';
    if (white) {
        classNames += ' divider__img_white';
    }
    return (
        <div className="divider">
            <div className={classNames}></div>
        </div>
    );
}

export default Divider;