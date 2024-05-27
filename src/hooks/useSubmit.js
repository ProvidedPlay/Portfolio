import {useState} from "react";
import {exampleCreds} from "../exampleCreds.js"
import emailjs from '@emailjs/browser'

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);



  const submit = async (url, data) => {
    setLoading(true);
    let attemptSucceeded = false;
    try {
      const credentialFile = require("../creds.js")
      const credentials = credentialFile !== 'null' && credentialFile !== 'undefined'? credentialFile.creds : exampleCreds

      await wait (150);
      
      emailjs.send(credentials.serviceID, credentials.templateID, data,{publicKey: credentials.publicKey} )
            .then((result) => {
                attemptSucceeded=true
                console.log(result.text)
            }, (error) => {
                attemptSucceeded=false
                console.log(error.text)
            })
      await wait(2000);
      if (!attemptSucceeded) {
        throw new Error("Something went wrong");
      }
      setResponse({
        type: 'success',
        message: `Thanks for your submission ${data.user_name}, we will get back to you shortly!`,
      })
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      })
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
}

export default useSubmit;
