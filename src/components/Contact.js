import React, {useState} from 'react';

function Contact(props) {
    const [close,setClose]=useState(true);

    return (

        close ? <div id="contact_block">
            <i onClick={()=> setClose(false)} className="fa fa-times" aria-hidden="true"></i>
            <div className="contact_box">
                <div className="contact_form">
                    <span className="fs-2 text-white">Contact Us</span>
                    <p>Lorem ipsum dolor site amet, consectetur adipiscing elit. Aliquam interdum, nisl sed
                        faucibus tempor,
                        massa velit laoreet ipsum, et faucibus sapien magna at enim. Suspendisse a dictum
                        tortor, vel rhoncus libero.
                    </p>
                    <div className="contact_box_inputs">
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Email"/>
                    </div>
                    <textarea>Message</textarea>
                    <button>Submit</button>
                </div>
            </div>
        </div>
            :null
    );
}

export default Contact;