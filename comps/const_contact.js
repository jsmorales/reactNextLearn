import React from 'react'

class ContactComp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            password: 'swordfish',
            authorized: false
        };
        this.authorize = this.authorize.bind(this);
    }

    authorize(e) {
        const password = e.target.querySelector('input[type="password"]').value;
        const auth = password === this.state.password;
        this.setState({
            authorized: auth
        });
    }

    render() {

        let validation= (
            <div>
                <h1>Contact</h1>
                <ul>
                    <li>
                        client@example.com
                    </li>
                    <li>
                        555.555.5555
                    </li>
                </ul>
            </div>);

        let login = (
            <form action="#" onSubmit={this.authorize}>
                <h1>Enter the password</h1>
                <input type="password" placeholder="password"/>
                <input type="submit" />
            </form>
        );

        console.log(this.props);

        return (
            <div id="authorization">
                {this.state.authorized ? validation : login}
            </div>
        );
    }
}

export default ContactComp