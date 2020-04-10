import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/userActions'

import Header from './components/header/Header'
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shoppage/ShopPage'
import Authenticate from './pages/authenticate/Authenticate'
import { auth, createUserDocument } from "./firebase/firebaseUtils";

class App extends Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }

      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    const { currentUser } = this.props
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/auth" render={() => currentUser ? <Redirect to='/' /> : <Authenticate />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
