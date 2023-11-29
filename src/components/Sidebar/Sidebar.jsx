import React from 'react'
import { SideBar } from './styledSidebar'
function Sidebar() {
    return (
        <SideBar>
            <div>
                <ul>
                    <li className='active'><i className="fa-solid fa-bus"></i><span className='text'>Bus</span></li>
                    <li><i className="fa-solid fa-plane"></i><span className='text'>Flights</span></li>
                    <li><i className="fa-solid fa-train"></i><span className='text'>Trains</span></li>
                    <li><i className="fa-solid fa-hotel"></i><span className='text'>Hotels</span></li>
                    <li><i className="fa-solid fa-video"></i><span className='text'>Movie</span></li>

                </ul>
            </div>
        </SideBar>
    )
}

export default Sidebar