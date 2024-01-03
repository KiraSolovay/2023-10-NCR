export default function ConditionalClasses(props) {
    const Modal = ({ isVisible, children }) => {
        return (
            <div className={isVisible ? "active" : "off"}>
                {children}
            </div>
        );
    };

    return (
        <div>
            <Modal isVisible={props.isVisible}> TEST!
            </Modal>
        </div>
    );
}