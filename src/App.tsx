import styled from "@emotion/styled";
import fonts from "./styles/fonts";
import "./App.css";
import color from "./styles/colors";
import SVG from "./assets/SVG";

function App() {
  return (
    <Holder>
      <div className="navbar">
        <div className="logo">EduFlex.</div>
        <div className="center-links">
          <div className="nav-link">Course</div>
          <div className="nav-link">Pricing</div>
          <div className="nav-link">Tutor</div>
          <div className="nav-link">Admission</div>
          <div className="nav-link">About</div>
        </div>
        <div className="end-button">Contact</div>
      </div>
      <div className="center-content">
        <div className="left-content">
          <div className="title">A new way to learn & get knowledge</div>
          <div className="text">
            EduFlex is here for you with various courses & materials from
            skilled tutors all around the world
          </div>
          <div className="buttons">
            <div className="join-button">Join the Class</div>
            <div className="learn-button">Learn more</div>
          </div>
          <div className="stats">
            <div className="stat">
              <div className="stat-number">15,2K</div>
              <div className="stat-text">Active students</div>
            </div>
            <div className="vl"></div>
            <div className="stat">
              <div className="stat-number">4,5K</div>
              <div className="stat-text">Tutors</div>
            </div>
            <div className="vl"></div>
            <div className="stat">
              <div className="stat-number">
                <SVG.Icons.infinity />
              </div>
              <div className="stat-text">Resources</div>
            </div>
          </div>
        </div>
        <div className="right-content">
          <SVG.Icons.sideImage />
        </div>
      </div>
    </Holder>
  );
}

const Holder = styled.div`
  margin-top: 3em;
  margin-inline: 10em;

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4em;

    .logo {
      ${fonts.Primary}
      color: ${color.purple};
      font-size: 2em;
      font-weight: bold;
    }

    .center-links {
      ${fonts.Secondary}
      display: flex;
      justify-content: center;
      gap: 3em;
      font-size: 1.4em;
    }

    .end-button {
      ${fonts.SecondaryMed}
      border: 0.1em solid;
      border-radius: 2em;
      padding: 0.5em 0em;
      font-size: 1.4em;
      width: 8em;
      display: flex;
      justify-content: center;
    }
  }

  .center-content {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    ${fonts.Primary}

    .left-content {
      padding-top: 4em;

      .title {
        font-size: 5em;
        font-weight: 500;
        margin-bottom: 3rem;
      }

      .text {
        font-size: 1.6em;
        width: 23em;
        margin-bottom: 3rem;
      }

      .buttons {
        display: flex;
        align-items: center;
        ${fonts.SecondaryMed}
        gap: 1.5em;
        margin-bottom: 6rem;

        .join-button {
          border: 0.1em solid ${color.purple};
          border-radius: 2em;
          padding: 0.4em 0em;
          background-color: ${color.purple};
          font-size: 1.4em;
          color: white;
          width: 9em;
          display: flex;
          justify-content: center;
        }
        .learn-button {
          border: 0.1em solid;
          border-radius: 2em;
          padding: 0.4em 0em;
          font-size: 1.4em;
          width: 9em;
          display: flex;
          justify-content: center;
        }
      }

      .stats {
        display: grid;
        grid-template-columns: 11em 2px 11em 2px 11em;
        align-items: center;
        ${fonts.Primary}

        .stat {
          display: grid;
          grid-row: auto;
          justify-content: center;
          align-items: center;

          .stat-number {
            font-size: 2.5em;
            font-weight: 500;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .stat-text {
            display: flex;
            justify-content: center;
            align-self: flex-end;
            color: ${color.silver};
            font-size: 1.3em;
          }
        }

        .vl {
          border-left: 2px solid ${color.gray};
          display: flex;
          height: 80%;
        }
      }
    }

    .right-content {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default App;
