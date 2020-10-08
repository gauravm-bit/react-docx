import React from 'react';

class EssayForm extends React.Component {

    state = { value: 'Enter your favourite essay' }

    handleChange = (event) => {
        this.setState({
            value: event.target.value

        })
    }

    handleSubmit = (event) => {
        alert('An essay was submitted ' + this.state.value)
        event.preventDefault()
    }

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    }
}

export default EssayForm;