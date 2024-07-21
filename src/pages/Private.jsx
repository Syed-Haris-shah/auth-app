import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'



function Private() {

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {alert('Signed Out Successfully!')})
      .catch(error => {
        console.log(error)
        alert(error.message)
      })

  }

  return (
    <div>
      <header>
        <h1>Welcome the the Dashboard</h1>
      </header>
      <main>
        <h2>Your Profile</h2>
        <p>Welcome to the Private dashboard. Here you can manage your settings and performence.</p>
      </main>
      <footer>

        <button onClick={handleSignOut}>SignOut</button>

      </footer>

    </div>
  )
}

export default Private
