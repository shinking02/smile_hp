import styled from "styled-components";

const HeaderDiv = styled.div`
    height: 110px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    padding: 20px;
    justify-content: space-between;
    position: fixed;
`;
const Logo = styled.div`
    width: 200px;
`
const Header = () => {
    return(
        <HeaderDiv>
            <Logo>
                <img src="public/img/logo.svg"></img>
            </Logo>
        </HeaderDiv>    
    )
}

export default Header;