import React, { PropTypes } from 'react';


class CoursesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: "",
            title:""
        };// if bind(this) is mentioned in the constructor it loads only once and will not load
        //each time the event (clicking the button or changing the title) occurs.
        this.onTitleChange = this.onTitleChange.bind(this);
    }

    onTitleChange(event) {
        
        this.setState({ course: event.target.value });
    }

    onClickSave = () => {
        this.setState({title:this.state.course});
        }

    render() {
        return (
            <div>
                <input type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course} />
                <input type="submit"
                    value="save"
                    onClick={this.onClickSave} />
                <h1>{this.state.title}</h1>                        


            </div>
        );
    }
}



export default CoursesPage;