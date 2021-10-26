function ContactUs(){

    function ContactForm(){
        return (
            
            <div className="contact-container">
                <div class="center">
                 <div class="row">
                   
                    
                    
                    <div class="column">
                    
                            <form className="contact-form">
                            
                            <img src="https://pbs.twimg.com/media/FCP8HSzWEAAiNmw?format=jpg&name=small" className="propic"/>
                                <label for="fname">First Name</label>
                                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                                <label for="lname">Last Name</label>
                                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                                <label for="lname">Email or Phone Number</label>
                                <input type="text" placeholder="Your contact info here..."/>
                                <label for="subject">Please tell us more about your event:</label>
                                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                                <input type="submit" value="Submit"/>
                                
                            </form>
                           
                            </div>
                     </div>
                     </div>
                     </div>
                     
        )
    }

    return(
        <>
        
        {/* <h1>Hello</h1> */}
        {ContactForm()}
        


        </>
    )
}

export default ContactUs;