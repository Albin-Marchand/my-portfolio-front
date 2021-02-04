import styled from "styled-components";

const Navbar = () => {
  return (
    <header>
      <NavBar>
        <MainTitle>Portfolio.</MainTitle>
        <Menu>
          <p>About</p>
          <p>Work</p>
          <p>Contact</p>
        </Menu>
      </NavBar>
    </header>
  );
};

const MainTitle = styled.p`
  font-family: var(--first-font);
  font-size: var(--first-size);
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  /* position: absolute; */
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
`;

export default Navbar;
