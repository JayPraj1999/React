import React from 'react';
import styled from 'styled-components';

// Styled components for Header
const HeaderWrapper = styled.header`
  background-color: #ececf0;
  color: #fff;
  padding: 20px;

`;

const Logo = styled.h1`
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  margin-left: 50px;
`;

// Styled components for Hero section
const HeroSection = styled.section`
  background-image: url('../img/img2.png');
  background-color: #ececf0;
  height: 80vh;
  background-repeat: no-repeat;
  background-position: right;
  color: #fff;
  text-align: lrft;
  padding: 100px 0;
`;

const HeroHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  padding-left: 30px;
`;

const HeroText = styled.p`
  font-size: 4.5rem;
  color: green;
  padding-left: 30px;
  font-weight: bold;
`;

//Seacrch bar

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 30px;
  margin-top: 60px;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
  outline: none;
`;

const SearchButton = styled.button`
  background-color: black;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  outline: none;
`;

// card

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  width: 130px;
  height: 200px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Featured = styled.div`
margin-top: 50px;
    text-align: center;
    margin-bottom: 30px;
    line-height: 70px;
    font-weight: bold;
    font-size: 20px;
`;

// Data for the cards (urls for images)
const cardImages = [
    '../img/1.png',
    '../img/2.png',
    '../img/3.jpg',
    '../img/4.png',
    '../img/5.png',
    '../img/1.png',
    '../img/2.png',
    '../img/3.jpg',
    '../img/4.png',
    '../img/5.png',
];

const Header = () => {
    return (
        <HeaderWrapper>
            <Logo>
                <img src="../img/logo.png" alt="logo" />
            </Logo>
            <Nav>
                <NavLink href="#">Home</NavLink>
                <NavLink href="#">About</NavLink>
                <NavLink href="#">Vegetabl</NavLink>
                <NavLink href="#">Fruits</NavLink>
                <NavLink href="#">Contact</NavLink>
                <NavLink href="#">Blog</NavLink>
                <NavLink href="#">Cart</NavLink>
            </Nav>
        </HeaderWrapper>
    );
};

const Hero = () => {
    return (
        <>
            <HeroSection>
                <HeroHeading>Welcome to Shree</HeroHeading>
                <HeroText>Vegetable Shop</HeroText>
                <SearchBarWrapper>
                    <SearchInput type="text" placeholder="Search..." />
                    <SearchButton>Search</SearchButton>
                </SearchBarWrapper>
            </HeroSection>
        
                <Featured>
                <h2>Featured Categories</h2>
   
                <NavLink href="#">Home</NavLink>
                <NavLink href="#">About</NavLink>
                <NavLink href="#">Vegetabl</NavLink>
                <NavLink href="#">Fruits</NavLink>
                <NavLink href="#">Contact</NavLink>
                <NavLink href="#">Blog</NavLink>
                <NavLink href="#">Cart</NavLink>
                </Featured>

            <CardContainer>
                {cardImages.map((imageUrl, index) => (
                    <Card key={index}>
                        <CardImage src={imageUrl} alt={`Card ${index + 1}`} />
                    </Card>
                ))}
            </CardContainer>
        </>
    );
};

const App = () => {
    return (
        <>
            <Header />
            <Hero />
        </>
    );
};

export default App;