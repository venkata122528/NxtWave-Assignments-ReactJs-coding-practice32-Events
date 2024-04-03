// Write your code here
import {Component} from 'react'
import './index.css'

class ActiveEventRegistrationDetails extends Component {
  getInitialData = () => (
    <div className="activeEventRegistrationDetailsContainer">
      <p className="initialText">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  getYetToRegisterData = () => (
    <div className="activeEventRegistrationDetailsContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yetToRegisterImage"
      />
      <p className="yetToRegisterText">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button">Register Here</button>
    </div>
  )

  getRegisteredData = () => (
    <div className="activeEventRegistrationDetailsContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registeredImage"
      />
      <h1 className="registeredText">
        You have already registered for the event
      </h1>
    </div>
  )

  getRegistrationsClosed = () => (
    <div className="activeEventRegistrationDetailsContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrationsClosedImage"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p className="registeredText">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  render() {
    const {status, registrationStatusApi} = this.props

    switch (status) {
      case registrationStatusApi.initial:
        return this.getInitialData()
      case registrationStatusApi.yetToRegister:
        return this.getYetToRegisterData()
      case registrationStatusApi.registered:
        return this.getRegisteredData()
      case registrationStatusApi.registrationsClosed:
        return this.getRegistrationsClosed()
      default:
        return null
    }
  }
}

export default ActiveEventRegistrationDetails
