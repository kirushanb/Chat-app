import React from 'react'
import { firebase, auth} from '../config/firebase'
function SignIn() {

    const handleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    
        return (
            <div>
                <button onClick={handleSignIn}>Sign in with Google</button>
            </div>
        )
    
   
}

export default SignIn
