import React, { Component } from 'react'


export default class SidebarMenu extends Component {
    render(){
        return (
            <div className='sidebar'>
                <div className='gadget'>
                    <h2 className='star'><span>Sidebar</span> Menu</h2>
                    <div className='clr'></div>
                    <ul className='sb_menu'>
                        <li><a href='/'>Home</a></li>
                        <li><a href='#'>Menu 1</a></li>
                        <li><a href='#'>Menu 2</a></li>
                        <li><a href='#'>Menu 3</a></li>
                        <li><a href='#'>Menu 4</a></li>
                        <li><a href='#'>Menu 5</a></li>
                    </ul>
                </div>
                <div className='gadget'>
                    <h2 className='star'><span>Popular</span></h2>
                    <div className='clr'></div>
                    <ul className='ex_menu'>
                        <li>
                            <a href='#'>Lorem ipsum dolor</a>
                            <br />
                            Donec libero. Suspendisse bibendum
                        </li>
                        <li>
                            <a href='#'>Dui pede condimentum</a>
                            <br />
                            Phasellus suscipit, leo a pharetra
                        </li>
                        <li>
                            <a href='#'>Condimentum lorem</a>
                            <br />
                            Tellus eleifend magna eget
                        </li>
                        <li>
                            <a href='#'>Fringilla velit magna</a>
                            <br />
                            Curabitur vel urna in tristique
                        </li>
                        <li>
                            <a href='#'>Suspendisse bibendum</a>
                            <br />
                            Cras id urna orbi tincidunt orci ac
                        </li>
                        <li>
                            <a href='#'>Donec mattis</a>
                            <br />
                            purus nec placerat bibendum
                        </li>
                    </ul>
                </div>
            </div>
        )

    }
}
