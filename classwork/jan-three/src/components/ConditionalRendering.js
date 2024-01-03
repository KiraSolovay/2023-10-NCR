export default function ConditionalRendering (props) {
    const IsEven = (number) => {
        if (number % 2 === 0) {
            return (<h1>It is even</h1>)
        }
        else {
            return(<h1> It is not even</h1>)
        }
    }
    return(
        <div>
            Conditional Rendering
            {(IsEven(props.number))}
        </div>
    )
}