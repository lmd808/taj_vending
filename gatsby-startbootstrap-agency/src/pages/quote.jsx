import React from 'react'


const quote = () => {
    return (
        <div>
            <form name="contact" method="POST" data-netlify="true" contentType= 'application/x-www-form-urlencoded'>
                <p>
                    <label htmlFor='name'>Your Name: <input id='name' type="text" name="name" /></label>   
                </p>
                <p>
                    <label htmlFor='email'>Your Email: <input id='email' type="email" name="email" /></label>
                </p>
                <p>
                    <label htmlFor='role'>Your Role: <select name="role[]" multiple>
                    <option value="leader">Leader</option>
                    <option value="follower">Follower</option>
                    </select></label>
                </p>
                <p>
                    <label htmlFor='message'>Message: <textarea id='message' name="message"/></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
            
        </div>
    )
}


export default quote