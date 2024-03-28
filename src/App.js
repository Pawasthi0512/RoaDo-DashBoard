import styled from "@emotion/styled";
import SideNavigation from "./component/sideNavBar/SideNavigation";
import Dashboard from "./component/dashboard/Dashboard";
import ActivitySection from "./component/activityDetails/Index";

const StyledDiv = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: 'grey',
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  marginLeft: '-8px',
  marginTop: '-8px',
})

function App() {
  return (
    <StyledDiv>
      <SideNavigation/>
      <Dashboard />
      <ActivitySection />
    </StyledDiv>
  );
}

export default App;
