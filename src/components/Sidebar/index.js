import React from 'react'
import SigninPage from '../../pages/signin';

import { SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute } from './SidebarElements';
const Sidebar = ({isOpen,toggle}) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>

			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="about" onClick={toggle}>Resident</SidebarLink>
					<SidebarLink to="admin" onClick={toggle}>Admin</SidebarLink>
					<SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>

				</SidebarMenu>
				
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;