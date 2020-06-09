import * as React from "react";
import "./Layout.css";
import HomeComponent from "./Home.component";
import CoursesComponent from "./Courses.component";
import AcadamicsComponent from "./Acadamics.component";
import TimmingsComponent from "./Timming.component";
import ContactComponent from "./Contact.component";
class LayoutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  render() {
    return (
      <div style={{ margin: "auto" }}>
        <HomeComponent />
        <CoursesComponent />
        <AcadamicsComponent />
        <TimmingsComponent />
        <ContactComponent />
      </div>
    );
  }
}

// ReactDOM.render(<Example/>, app);
export default LayoutComponent;
