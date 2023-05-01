import React, {useState} from 'react';
import Carousel from "nuka-carousel";
import ReactSimplyCarousel from 'react-simply-carousel';

function Work(props) {
    const [close, setClose] = useState(true);

    return (

        close ? <div id="work_block">
                <i onClick={() => setClose(false)} className="fa fa-times" aria-hidden="true"></i>
                <div className={'work_box'}>
                    <div className={'work_text'}>
                        <span className="fs-2 text-white">Our Work</span>
                        <p className={'text-white'}>Aliquam interdum, nisl sed faucibus tempor, massa velit laoreet ipsum,
                            et faucibus sapien magna at enim. Suspendisse a dictum tortor, vel
                            rhoncus libero. Integer at lacus velit. Nullam dapibus venenatis placerat.
                        </p>
                    </div>
                    <div className={"work_carousel_block"}>
                        <Carousel className={'work_carousel'}
                                  wrapAround={true}
                                  slidesToScroll={2}
                                  slidesToShow={4}
                                  autoplay={true}
                                  autoplayInterval={2000}
                                  defaultControlsConfig={{
                                      containerClassName:'containerClassName',
                                      nextButtonText: '>',
                                      prevButtonText: '<',
                                      nextButtonClassName: 'next_btn',
                                      prevButtonClassName: 'prev_btn',
                                      pagingDotsStyle: {
                                          fill: '#CACACC',
                                          fontSize:'25px'
                                      }
                                  }}
                        >
                                <img src="img/work_img1.jpg"/>
                                <img src="img/work_img2.jpg"/>
                                <img src="img/work_img3.jpg"/>
                                <img src="img/work_img4.jpg"/>
                        </Carousel>

                    </div>
                </div>
            </div>
            : null
    );
}

export default Work;