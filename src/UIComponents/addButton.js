import styles from '../styles';

function AddButton(props) {
    let style = { background: styles.find(element =>
        element.name === props.theme
    ).background };
    
    return (
        <button
            onClick={() => props.addRootTab()}
            className="addBig"
            style={style}
        >
            +
        </button>
    );
}

export default AddButton;