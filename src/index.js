import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const API_URL = `http://vcbodapi.azurewebsites.net/api/user/login`
class LoginPage extends React.Component {
    render() {
        // const TODOS = ["buy food", "make food", "eat food"];
        return (<div><HeaderComponent />
            <BodyComponent />
            <FooterComponent /></div>);
    }
}

class HeaderComponent extends React.Component {
    render() {
        return (<main className="Page"><div className="page__header">
            <div className="page__header__left">
                <h1 className="page__header__title">Login</h1>
                <p className="page__header__caption">Setting up your profile</p>
            </div>
            <div className="page__header__left"></div>
        </div></main >)
    }
}

class BodyComponent extends React.Component {
    render() {
        return (<div className="page__content">
            <div className="alert alert--danger">
                <div className="alert__close"></div>
                <p className="alert__text">Your email and/or password isn’t correct</p>

            </div>
            <FormComponent />
        </div>)
    }
}

class FormComponent extends React.Component {
    constructor() {
        super();
        this.state = { name: '', password: '' };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleNameChange(e) {
        this.setState({ name: e.target.vale })
    }
    handlePasswordChange(e) {
        this.setState({ password: e.target.vale })
    }
    validateData(event) {

        event.preventDefault(event);
        const obj = { EmailId: this.state.name, Password: this.state.password }
        
        const opts = { method: 'post', body:obj };
        fetch(API_URL, opts).then(data => console.log("Value", data)).catch(e => console.error('error', e));
     

    }
    render() {
        return (<div>
            <form onSubmit={this.validateData.bind(this)} className="form">
                <div className="form__item">
                    <label className="form__label">Email</label>
                    <input type="email" className="form__input" placeholder="Enter your email address" value={this.state.name} onChange={this.handleNameChange} />
                </div>
                <div className="form__item form__item--2">
                    <label className="form__label">Password</label>

                    <div className="positionRelative">
                        <input type="password" className="form__input form__input--right" placeholder="" value={this.state.password} onChange={this.handlePasswordChange} />
                        <div className="form__show">
                            <button className="btn btn--text">show</button>
                        </div>
                    </div>
                </div>
                <div className="form__item">
                    <button className="btn btn--primary btn--block btn--lg" type="submit">Login</button>
                </div>
                <div className="form__item textCenter">
                    <a href="" className="link">New Member? Sign up</a>
                </div>
            </form>
        </div>
        )

    }
}

class FooterComponent extends React.Component {
    render() {
        return (<footer className="footer"><div>
            <FooterTopComponent />
            <FooterBottomComponent />
            <FooterCopyrightComponent />
        </div>
        </footer>)
    }
}

class FooterTopComponent extends React.Component {
    render() {
        return (<div className="footer__top">
            <p className="footer__text">Reach out to us here <br /> 08147826643</p>
        </div>)
    }
}

class FooterBottomComponent extends React.Component {
    render() {
        return (<div className="footer__bottom">
            <div className="footer__item">
                <div className="footer__item__title">Company</div>
                <a href="" className="footer__item__links">About</a>
                <a href="" className="footer__item__links">Contact</a>
            </div>
            <div className="footer__item">
                <div className="footer__item__title">Resource</div>
                <a href="" className="footer__item__links">Our Guides</a>
                <a href="" className="footer__item__links">FAQ</a>
            </div>
        </div>)
    }
}

class FooterCopyrightComponent extends React.Component {
    render() {
        return (<div className="footer__copyright">
            <p>© Copyright  2018 VConnect Glabal Serviecs Ltd.</p>
        </div>)
    }
}

ReactDOM.render(<LoginPage />, document.getElementById('root'));