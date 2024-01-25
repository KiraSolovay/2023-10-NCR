const React = require('react')
class Show extends React.Component{
    render () {
        const fruit = this.props.fruit
        return (
            <div>
                The {fruit.name} is {fruit.color}. 
            </div>
        );
    }
}
module.exports = Show;