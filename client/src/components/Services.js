import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
    return (
      <Wrapper>
        <div className="container">
            <div className="grid grid-three-column">
                <div className="services-1">
                    <div>
                        <TbTruckDelivery className="icon" />
                        <h3>Super Fast and Free Delivery</h3>
                    </div>
                </div>

                <div className="services-2">
                  <div className="services-column-2">
                    <div>
                        <MdSecurity className="icon" />
                        <h3>Non-contact Shipping</h3>
                    </div>
                  </div>
                  <div className="services-column-2">
                    <div>
                        <GiReceiveMoney className="icon" />
                        <h3>Money-back Guaranteed</h3>
                    </div>
                  </div>
                </div>

                <div className="services-3">
                    <div>
                        <RiSecurePaymentLine className="icon" />
                        <h3>Super Secure Payment System</h3>
                    </div>
                </div>
            </div>
        </div>
      </Wrapper>
    );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .grid {
    gap: 4.8rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: ${({ theme }) => theme.colors.bg || "#f9f9f9"};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border: 1px solid #ccc;
    transition: all 0.3s ease-in-out; /* Smooth transition for hover effect */
  }

  .services-1:hover,
  .services-2:hover,
  .services-3:hover {
    transform: scale(1.05);  /* Slightly scale up the box */
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;  /* Darker shadow on hover */
    background-color: ${({ theme }) => theme.colors.primary || "#e0e0e0"}; /* Change background on hover */
  }

  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;

    .services-column-2 {
      background: ${({ theme }) => theme.colors.bg || "#fff"};
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
      border: 1px solid #ccc;
      transition: all 0.3s ease-in-out;

      div {
        display: flex;
        flex-direction: row;
        justify-items: center;
        align-items: center;
        gap: 1rem;
      }
    }

    .services-column-2:hover {
      transform: scale(1.05);
      box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
      background-color: ${({ theme }) => theme.colors.primary || "#e0e0e0"};
    }
  }

  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }

  .icon {
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }
`;

export default Services;
