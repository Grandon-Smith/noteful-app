import React from 'react';

class RenderError extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false,

        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true}
    }
    render() {
        if(this.state.hasError) {
            return (
                <h2>Looks like someone stole your notes!</h2>
            )
        }
        return this.props.children
    }
}

export default RenderError