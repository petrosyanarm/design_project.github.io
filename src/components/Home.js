import React, {Component} from 'react';
import Welcome from "./Welcome";
import Team from "./Team";
import Work from "./Work";
import Contact from "./Contact";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            show1:false,
            show2:false,
            show3:false,
            show4:false,

        }
    }
    handleShowWel=()=>{
        const {show1}=this.state
        this.setState({show1:!show1})
    }
    handleShowTeam=()=>{
        const {show2}=this.state
        this.setState({show2:!show2})
    }
    handleShowWork=()=>{
        const {show3}=this.state
        this.setState({show3:!show3})
    }
    handleShowContact=()=>{
        const {show4}=this.state
        this.setState({show4:!show4})
    }
    render() {
        const {show1,show2,show3,show4}=this.state
        return (
                <div className="bg_image">
                    <div className="container home_part1">
                        <div className="row mt-5 justify-content-center align-items-center">
                            <div className="col-xl-6 text-end col-md-6 col-sm-12 home_part1_text">
                                <div className="part1_text">
                                    <span className="text-end mb-5">POP design</span>
                                    <img alt="" className="mt-5" src="img/underline.png"/>
                                        <p className="text-end fs-5 mt-3">New HTML Template with pop up pages<br/> and
                                            use this layout for your
                                            website</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6 col-sm-12 home_part1_menu">
                                <div className="text-end part1_menu">
                                    <div onClick={this.handleShowWel} id="part_welcome" className="part1_menu_welcome">
                                        <i className="fa fa-home" aria-hidden="true"></i>
                                        <span className="fs-5">Welcome</span>
                                    </div>
                                    <div onClick={this.handleShowTeam} id="part_team" className="part1_menu_welcome">
                                        <i className="fa fa-users" aria-hidden="true"></i>
                                        <span className="fs-5">Our Team</span>
                                    </div>
                                    <div onClick={this.handleShowWork} id="part_work" className="part1_menu_welcome">
                                        <i className="fa fa-handshake-o" aria-hidden="true"></i>
                                        <span className="fs-5">Our Work</span>
                                    </div>
                                    <div onClick={this.handleShowContact} id="part_contact" className="part1_menu_welcome">
                                        <i className="fa fa-comments" aria-hidden="true"></i>
                                        <span className="fs-5">Contact</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {show1 ? <Welcome/>
                    : null}
                    {show2 ? <Team/>
                    : null}

                    {show3 ? <Work/>
                        : null}
                    {show4 ? <Contact/>
                        : null}

                </div>


        );
    }
}

export default Home;