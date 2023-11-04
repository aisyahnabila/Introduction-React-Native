// Class Component
class Practice1 extends React.Component {
    render() {
        return <h3>Practice: ReactJS</h3>
    }
}
let myElement = <Practice1 />;

// Props in Class Component
class Practice2 extends React.Component {
    render() {
        return <h3>Practice: {this.props.topic}</h3>
    }
}
myElement = <Practice2 topic="ReactJS" />;

// Props in Class Component
class Practice2 extends React.Component {
    render() {
        return <h3>Practice: {this.props.topic}</h3>
    }
}
myElement = <Practice2 topic="ReactJS" />;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);