import React, { useReducer } from 'react'
import uuid from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types'

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Dwight Schrute',
        email: 'dwight@gmail.com',
        phone: '111-111-111',
        type: 'personal'
      },
      {
        id: 2,
        name: 'John Doe',
        email: 'john@gmail.com',
        phone: '222-222-222',
        type: 'professional'
      },
      {
        id: 3,
        name: 'Barack Obama',
        email: 'obamacare@gmail.com',
        phone: '333-333-333',
        type: 'professional'
      }
    ]
  }

  const [state, dispatch] = useReducer(contactReducer, initialState)

  // Add contact

  // Delete contact

  // Set current contact

  // Clear current contact

  // Update contact

  // Filter contacts

  //Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState
