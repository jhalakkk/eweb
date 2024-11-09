import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="text"],
          input[type="email"],
          textarea {
            padding: 1.2rem;
            border: 1px solid #ccc;
            border-radius: 0.5rem;
            transition: all 0.3s ease;

            &:hover,
            &:focus {
              border-color: ${({ theme }) => theme.colors.btn || "#5138ee"};
              box-shadow: 0 0 5px rgba(81, 56, 238, 0.5);
            }
          }

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn || "#5138ee"};
              color: ${({ theme }) => theme.colors.btn || "#5138ee"};
              transform: scale(0.95);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h1>Contact Page</h1>
      <div className="container">
        <div className="contact-form">
          <form action="" method="POST" className="contact-inputs">
            <input
              type="text"
              placeholder="Username"
              name="username"
              required
              autoComplete="off"
              value=""
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
              value=""
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter your Message"
            ></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
