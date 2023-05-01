import React, {useState} from 'react';

function Welcome(props) {
    const [close, setClose] = useState(true)

    return (
            close ? <div id="welcome_block">
                <i onClick={() => setClose(false)} className="fa fa-times" aria-hidden="true"></i>
                <div className="welcome_box">
                    <div className="welcome_title">
                        <span className="fs-2 text-white">Welcome to Pop Design</span>
                    </div>
                    <div className="welcome_texts">
                        <div className="welcome_text">
                            <img alt="" src="img/welcome_1.jpg"/>
                            <p className="text-white">You are allowed to download, modify and use this
                                template for your commercial
                                or business websites.</p>
                            <p className="text-white">Please tell your friends about Tooplate. That will be
                                very helpful for us.
                                Thank you.</p>
                        </div>
                        <div className="welcome_text">
                            <p className="text-white">You are NOT allowed to put this template ZIP file for a
                                download purpose on any template collection website.</p>
                            <p className="text-white">If you have any kind of question or comment, please feel
                                free to contact us. You are welcome.</p>
                            <img alt="" src="img/welcome_2.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
         :null
    );
}

export default Welcome;