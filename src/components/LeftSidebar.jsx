import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faHouse, faCode, faScissors, faTerminal } from '@fortawesome/free-solid-svg-icons';     



import { Link } from 'react-router-dom';


import { dividerClasses } from '@mui/material';

const LeftSidebar = () => {

    const [ collapsed, setCollapsed ] = useState(false);

    const handleClick = () => {
        const toggle = collapsed ? false : true;  
        setCollapsed(toggle);
    }

    return (
        <div>
            <Sidebar
                style={{height: "100vh", minHeight: "400px"}}
                collapsed={collapsed}
                toggleed={toggled}
                onToggle={handleToggleSidebar}
                breakPoint="md">
                <Menu>
                    <MenuItem
                        icon={<MenuOutlinedIcon />}
                        onClick={handleClick}
                    >Menu</MenuItem>
                    <MenuItem
                        icon={<FontAwesomeIcon icon={faHouse}  />}
                        component={<Link to="/" />}>
                            Home
                    </MenuItem>
                    <MenuItem
                        icon={<FontAwesomeIcon icon={faCode}  />}
                        component={<Link to="/Code" /> }>
                            Code
                    </MenuItem>
                    <MenuItem
                        icon={<FontAwesomeIcon icon={faDatabase}  />}
                        component={<Link to="/database" />}>
                            Database
                    </MenuItem>
                    <MenuItem
                        icon={<FontAwesomeIcon icon={faScissors}  />}
                        component={<Link to="/Snippets" />}>
                            Code Snippets
                    </MenuItem>
                    <MenuItem
                        icon={<FontAwesomeIcon icon={faTerminal}  />}
                        component={<Link to="/OSCmd" />}>
                            OS Commandline
                    </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    )
}

export default LeftSidebar;
