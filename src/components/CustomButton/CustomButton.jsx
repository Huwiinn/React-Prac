function CustomButton(props) {
        const {color, onClick, children} = props
        if (color) {
        return (
        <button style={{backgroundColor : color, color:"white", padding:10, borderRadius : 5}}
        onClick={onClick}>{children}</button>
        )
        }
        return (
            <button onClick={onClick}>{children}</button>
        );
    } 
export default CustomButton