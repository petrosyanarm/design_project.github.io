import React, {useRef, useState} from 'react';

function Team(props) {
    const [close,setClose]=useState(true)

    const handleClose=()=>{
        setClose(false)

    }
    return (

       close ? <div id="team_block">
            <i onClick={handleClose} className="fa fa-times" aria-hidden="true"></i>
            <div className="team_box">
                <div className="team_title">
                    <span className="fs-2 text-white">Background of Our Team</span>
                </div>
                <div className="team_texts">
                    <div className="team_text">
                        <p>Vestibulum aliquet, arcu accumsan lobortis bibendum, justo velit efficitur lorem,
                            at pulvinar mi justo nec lacus. Nullam et libero aliquet, luctus nunc sit amet,
                            tincidunt ligula. Sed finibus ante sed tortor cursus, nec malesuada lectus
                            interdum.
                        </p>
                        <p>Sed ex turpis, vulputate in efficitur id, lobortis eget nibh. Pellentesque
                            maximus
                            ipsum eget velit imperdiet sodales. Suspendisse in blandit mi.
                        </p>
                        <p>Pellentesque finibus felis risus, ut malesuada felis viverra at. Quisque accumsan
                            in mi non hendrerit.</p>
                        <button>Read More</button>
                    </div>
                    <div className="team_img">
                        <img alt="" src="img/team.jpg"/>
                    </div>
                </div>
            </div>
        </div>
           : null
    );
}

export default Team;