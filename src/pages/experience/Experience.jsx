import React from "react";
import './Experience.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdSchool , MdWork} from 'react-icons/md';

function Experience(){
    return(
        <div>
            <VerticalTimeline>
            <VerticalTimelineElement
                className="vte--school"
                contentStyle={{background:"#fff", color:"black"}}
                contentArrowStyle={{borderRight: "7px solid rgb(33, 150, 243)"}}
                date= "2024- Current"
                dateClassName= "date"
                iconStyle={{ background:" rgb(33,150,243)" , color:"#fff"}}
                icon={<MdSchool/>}
                position={'right'}
                >
                    <h3 className="vte-title"> Coursera</h3>
                    <h4 className="vte-subtitle"> Cybersecurity Analytics</h4>
                    <p>
                        This is an online course through google. It is a self-taught, self-paced program that focuses on the basics of cyber security. 
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                className="vte--work"
                contentStyle={{background:"#fff", color:"black"}}
                contentArrowStyle={{borderRight: "7px solid rgb(33, 150, 243)"}}
                date= "2020 - Current"
                dateClassName= "date"
                iconStyle={{ background:" rgb(33,150,243)" , color:"#fff"}}
                icon={<MdWork/>}
                position={"left"}
                >
                    <h3 className="vte-title">Cultivate Kitchen</h3>
                    <h4 className=" vte-subtitle"> Prep Chef</h4>
                    <p>
                        I work with a team to give and teach a cullinary experience to private parties.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                className="vte--school"
                contentStyle={{background:"#fff", color:"black"}}
                contentArrowStyle={{borderRight: "7px solid rgb(33, 150, 243)"}}
                date= "October 2023"
                dateClassName= "date"
                iconStyle={{ background:" rgb(33,150,243)" , color:"#fff"}}
                icon={<MdSchool/>}
                position={'right'}
                >
                    <h3 className="vte-title"> Fullstack Academy</h3>
                    <h4 className="vte-subtitle">San Jose State University</h4>
                    <p>
                        A private course taught through the univeristy to teach what a full stack engieneer is. I learned how to use databases, react and javascript. 
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                className="vte--work"
                contentStyle={{background:"#fff", color:"black"}}
                contentArrowStyle={{borderRight: "7px solid rgb(33, 150, 243)"}}
                date= "2018 - 2023"
                dateClassName= "date"
                iconStyle={{ background:" rgb(33,150,243)" , color:"#fff"}}
                icon={<MdWork/>}
                position={"left"}
                >
                    <h3 className="vte-title"> Costco</h3>
                    <h4 className="vte-subtitle">Receiving Clerk / Forklift Operator</h4>
                    <p>
                    Optimizing floor configuration and displays to create revenue and surpass quota. Managing a team of peers to meet floor plans in a timely matter. Operation of forklift to load and unload product from trailers and the sales floor. Scheduling deliveries of product from various warehouse distribution centers. Checking then entering, quantity, quality and price of shipment sent to warehouse.  
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                className="vte--work"
                contentStyle={{background:"#fff", color:"black"}}
                contentArrowStyle={{borderRight: "7px solid rgb(33, 150, 243)"}}
                date= "2018 - 2023"
                dateClassName= "date"
                iconStyle={{ background:" rgb(33,150,243)" , color:"#fff"}}
                icon={<MdWork/>}
                position={"left"}
                >
                    <h3 className="vte-title"> Target </h3>
                    <h4 className="vte-subtitle">Barista / Stocker</h4>
                    <p>
                        I worked night shift while working at costco in the morning. I doubled as a barista and a stocker.  
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                className="vte--work"
                contentStyle={{background:"#fff", color:"black"}}
                contentArrowStyle={{borderRight: "7px solid rgb(33, 150, 243)"}}
                date= "2015 - 2018"
                dateClassName= "date"
                iconStyle={{ background:" rgb(33,150,243)" , color:"#fff"}}
                icon={<MdWork/>}
                position={"left"}
                >
                    <h3 className="vte-title"> Peet's Coffee & Tea</h3>
                    <h4 className="vte-subtitle">Shift Lead</h4>
                    <p>
                        Closing shift lead at the Rose Garden location. In charge of money handling, closing the store & preparation for the next day. 
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                className="vte--School"
                contentStyle={{background:"#fff", color:"black"}}
                contentArrowStyle={{borderRight: "7px solid rgb(33, 150, 243)"}}
                date= "Decemeber 2015"
                dateClassName= "date"
                iconStyle={{ background:" rgb(33,150,243)" , color:"#fff"}}
                icon={<MdSchool/>}
                position={"right"}
                >
                    <h3 className="vte-title"> Evergreen Community College</h3>
                    <h4 className="vte-subtitle"> Associate of Science in Mathmatics</h4>
                    <p>
                        I completed my general education and studied mathmatics so I could transfer to a four year college. I took my first computer science here and learned java and python. 
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                className="vte--work"
                contentStyle={{background:"#fff" , color:"black"}}
                contentArrowStyle={{borderRight: "7px solid rgb(33, 150, 243)"}}
                date="2012 - 2015"
                dateClassName="date"
                iconStyle={{ background:" rgb(33, 150, 243)" , color:"#fff"}}
                icon={<MdWork/>}
                position={"left"}
                >
                    <h3 className="vte-title"> Zumiez </h3>
                    <h4 className="vte-subtitle">Assistant Store Manager</h4>
                    <p>
                    Hired at the Valley-fair location and promoted twice. I was transferred to the Eastridge location to help the store make year. The store made the next two years in sales. In charge of opening operations, closing operations & money handling. 
                    </p>    
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )

};

export default Experience;