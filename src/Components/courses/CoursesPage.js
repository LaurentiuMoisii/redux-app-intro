import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../Redux/Actions/courseActions';
import PropTypes from 'prop-types';
class CoursesPage extends React.Component {
        state = {
            course: {
                title: ''
            }
        };

    handleChange = (e) => {
        const course = { ...this.state.course, title: e.target.value }
        this.setState({ course })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(courseActions.createCourse(this.state.course))
        // you have to dispatch an action
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <h2>Course</h2>
                <h3>Add Course</h3>
                <input 
                    type='text' 
                    onChange={this.handleChange} 
                    value ={this.state.course.title}
                />
                <input 
                    type='submit' 
                    value='save' 
                />
                {this.props.courses.map(course => (
                    <div key={course.title}>{course.title}</div>
                ))}
            </form>
        )
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) { // what state is passed to our component
    return {
        courses: state.courses // be specific about the data to render only the component or data not the whole store ! 
    }
}


export default connect(mapStateToProps)(CoursesPage);
// no need for the 2nd parameter, we import actions 