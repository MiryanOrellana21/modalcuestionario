import React, { Component } from "react";
// import "./select.css";
export default class select extends Component {
    constructor(props){
        super(props)
        this.state={
            expanded: false,
            style: ""
        }
    }
  abrir = () => {
      console.log('a');
      

    //   $(this).closest('div').find('.js-msds').slideToggle();
    // document.getElementsByClassName('js-msds').slideToggle()
  };
//   var expanded = false;

showCheckboxes() {
  var expanded = false;

  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    // checkboxes.style.display = "block";
    expanded = true;
    this.setState({
        style: "block"
    })
  } else {
    // checkboxes.style.display = "none";
    expanded = false;
    
    this.setState({
        // expanded: false,
        style: "none"
    })
  }
}
  render() {
    return (
      <div className="container">
        <div className="msd">
          <label onClick={this.abrir} className="msd_label js-msd">
            Select colour <i className="msd_label_icon fas fa-chevron-down"></i>
          </label>
          <div style={{display: 'block'}} className="msd_options_container js-msds">
            <div className="msd_options">
              <label htmlFor="tomato" className="msd_options_option">
                Tomato
                <input
                  id="tomato"
                  type="checkbox"
                  name="colour[]"
                  value="Tomato"
                  className="msd_options_checkbox js-msdCheck"
                />
              </label>
              <label htmlFor="orange" className="msd_options_option">
                Orange
                <input
                  id="orange"
                  type="checkbox"
                  name="colour[]"
                  value="Orange"
                  className="msd_options_checkbox js-msdCheck"
                />
              </label>
              <label htmlFor="dodgerblue" className="msd_options_option">
                DodgerBlue
                <input
                  id="dodgerblue"
                  type="checkbox"
                  name="colour[]"
                  value="DodgerBlue"
                  className="msd_options_checkbox js-msdCheck"
                />
              </label>
              <label htmlFor="mediumseagreen" className="msd_options_option">
                MediumSeaGreen
                <input
                  id="mediumseagreen"
                  type="checkbox"
                  name="colour[]"
                  value="MediumSeaGreen"
                  className="msd_options_checkbox js-msdCheck"
                />
              </label>
              <label htmlFor="gray" className="msd_options_option">
                Gray
                <input
                  id="gray"
                  type="checkbox"
                  name="colour[]"
                  value="Gray"
                  className="msd_options_checkbox js-msdCheck"
                />
              </label>
              <label htmlFor="slateblue" className="msd_options_option">
                SlateBlue
                <input
                  id="slateblue"
                  type="checkbox"
                  name="colour[]"
                  value="SlateBlue"
                  className="msd_options_checkbox js-msdCheck"
                />
              </label>
              <label htmlFor="violet" className="msd_options_option">
                Violet
                <input
                  id="violet"
                  type="checkbox"
                  name="colour[]"
                  value="Violet"
                  className="msd_options_checkbox js-msdCheck"
                />
              </label>
              <label htmlFor="lightgray" className="msd_options_option">
                LightGray
                <input
                  id="lightgray"
                  type="checkbox"
                  name="colour[]"
                  value="LightGray"
                  className="msd_options_checkbox js-msdCheck"
                />
              </label>
            </div>
          </div>
        </div>

        <form>
  <div class="multiselect">
    <div class="selectBox" onclick={()=>this.showCheckboxes()}>
      <select>
        <option>Select an option</option>
      </select>
      <div class="overSelect"></div>
    </div>
    <div id="checkboxes" style={{display: `block`}}>
      <label for="one">
        <input type="checkbox" id="one" />First checkbox</label>
      <label for="two">
        <input type="checkbox" id="two" />Second checkbox</label>
      <label for="three">
        <input type="checkbox" id="three" />Third checkbox</label>
    </div>
  </div>
</form>
        {/* <select name="hola" id="">
            <option value=""><input type="checkbox" name="d" id="hola"/> <label htmlFor="hola">primer</label> </option>
        </select> */}
      </div>
    );
  }
}
