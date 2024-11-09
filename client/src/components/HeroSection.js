import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  const { name } = myData;

  return  (
    <Wrapper>
        <div className="container"> 
            <div className="hero-section-data">
              <p className="intro-data">Welcome to</p>
              <h1>{name}</h1>
              <p>
                  Explore our amazing Products and Services designed just for you!
              </p>
              <NavLink to="/shop">
                <Button>Shop Now</Button>
              </NavLink>
            </div>
        </div>
     </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 12rem 0;
  background-image: url("https://img.freepik.com/premium-photo/gemstones-background-hd-8k-wallpaper-stock-photographic-image_890746-49240.jpg?w=1060"); /* Add your background image path */
  background-size: cover; /* Ensures the image covers the entire section */
  background-position: center; /* Centers the background image */
  background-repeat: no-repeat; /* Ensures the image doesnt repeat */
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero-section-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  @media(max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
  }
`;

export default HeroSection;
