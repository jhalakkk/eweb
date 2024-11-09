import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button"; // Import your Button styled component
import { NavLink } from "react-router-dom";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <Wrapper>
            <section className="contact-short">
                <div className="grid grid-two-column">
                    <div>
                        <h3>Ready to get Started?</h3>
                        <h3>Talk to us Today!</h3>
                    </div>

                    <div>
                        <Button className="btn hireme-btn">
                            <NavLink to="/"> Get Started </NavLink>
                        </Button>
                    </div>
                </div>
            </section>

            {/* main footer section */}

            <footer>
                <div className="container grid grid-four-column">
                    <div className="footer-about">
                        <h3>GemStore</h3>
                        <p>Our store, our passion.</p>
                    </div>
                    <div className="footer-subscribe">
                        <h3>Subscribe to get important updates</h3>
                        <form action="#">
                            <input type="email" placeholder="YOUR E-MAIL" />

                            <input type="submit" value="subscribe" /> {/* Use Button styled component for the submit button */}
                        </form>
                    </div>

                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <div className="footer-social--icons">
                            <div>
                                <FaInstagram className="icons" />
                            </div>
                            <div>
                                <a href="link" target="_blank" rel="noopener noreferrer">
                                    <FaYoutube className="icons" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-contact">
                        <h3>Call Us</h3>
                        <a href="tel:1234567890">+91 1234567890</a>
                    </div>
                </div>

                {/* bottom footer */}
                <div className="footer-bottom--section">
                    <hr />
                    <div className="container grid grid-two-column">
                        <p>
                            © {new Date().getFullYear()} GemStore. All Rights Reserved
                        </p>
                        <div>
                            <p>PRIVACY POLICY</p>
                            <p>TERMS AND CONDITIONS</p>
                        </div>
                    </div>
                </div>
            </footer>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }

    p {
      color: ${({ theme }) => theme.colors.white};
    }

    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          cursor: pointer;
        }
      }
    }

    .footer-contact {
      h3, a {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }

    .grid-two-column {
      display: flex;
      justify-content: space-between;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
