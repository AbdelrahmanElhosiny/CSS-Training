import styled from "@emotion/styled";
import fonts from "./styles/fonts";
import "./App.css";
import color from "./styles/colors";

function App() {
  return (
    <Holder>
      <div className="navbar">
        <div className="logo">EduFlex.</div>
        <div className="center-buttons">
          <div className="center-button">Course</div>
          <div className="center-button">Pricing</div>
          <div className="center-button">Tutor</div>
          <div className="center-button">Admission</div>
          <div className="center-button">About</div>
        </div>
        <div className="end-button">Contact</div>
      </div>
      <div className="center-content">
        <div className="left-content">
          <div className="title">A new wat to learn & get knowledge</div>
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
            <div className="stat">
              <div className="stat-number">4,5K</div>
              <div className="stat-text">Tutors</div>
            </div>
            <div className="stat">
              <div className="stat-number">Image</div>
              <div className="stat-text">Resources</div>
            </div>
          </div>
        </div>
        <div className="right-content"></div>
      </div>
    </Holder>
  );
}

const Holder = styled.div`
  margin-top: 3em;
  margin-inline: 5em;

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${fonts.Primary}

    .logo {
      color: ${color.purple};
      font-size: 1.3em;
    }

    .center-buttons {
      display: flex;
      justify-content: center;
      gap: 3em;

      .center-button {
      }
    }

    .end-button {
      border: 0.1em solid;
      border-radius: 2em;
      padding: 0.5em 2em;
    }
  }
`;

export default App;
