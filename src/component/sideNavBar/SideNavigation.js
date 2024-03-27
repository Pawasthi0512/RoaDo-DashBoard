import styled from "@emotion/styled";
import { SIDE_NAVIGATION_ICONS } from "./Constan";

const StyledSideNav = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '65px',
    backgroundColor: '#FFFFFF',
    padding: '10px 5px'
})

const StyledIcon = styled('div')({
    height: '24px',
    width: '24px',
    margin: '15px auto',

})

function SideNavigation(){

    return (
        <StyledSideNav>
            {SIDE_NAVIGATION_ICONS.map((icons) => 
                <StyledIcon>
                    {icons.icon}
                </StyledIcon>
            )}
        </StyledSideNav>
    )
};

export default SideNavigation;