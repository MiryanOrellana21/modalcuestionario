import React, { Component } from "react";
import "../select.css";
export default class Multiple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estilo: "none",
      expanded: false,
      teachers: [
        {
          nombre: "Maartin",
        },
        {
          nombre: "Jose",
        },
        {
          nombre: "Carlos",
        },
        {
          nombre: "Fatima",
        },
        {
          nombre: "Julia",
        },
        {
          nombre: "Auron",
        },
        {
          nombre: "Staxx",
        },
        {
          nombre: "Lolito",
        },
        {
            nombre: "Fatima",
          },
          {
            nombre: "Julia",
          },
          {
            nombre: "Auron",
          },
          {
            nombre: "Staxx",
          },
          {
            nombre: "Lolito",
          },
          {
            nombre: "Fatima",
          },
          {
            nombre: "Julia",
          },
          {
            nombre: "Auron",
          },
          {
            nombre: "Staxx",
          },
          {
            nombre: "Lolito",
          },
          {
            nombre: "Fatima",
          },
          {
            nombre: "Julia",
          },
          {
            nombre: "Auron",
          },
          {
            nombre: "Staxx",
          },
          {
            nombre: "Lolito",
          },
      ],
      search: "",
    };
  }
  showCheckboxes = () => {
    console.log("estile");
    if (!this.state.expanded) {
      this.setState({
        estilo: "block",
        expanded: true,
      });
    } else {
      this.setState({
        estilo: "none",
        expanded: false,
      });
    }
  };
  buscarProfesor = (e) => {
    console.log(e.target.value);
    this.setState({
      search: e.target.value,
    });
  };
  render() {
    let employees = this.state.teachers,
      searchString = this.state.search.trim().toLowerCase();

    if (searchString.length > 0) {
      // We are searching. Filter the results.
      employees = employees.filter((e) =>
        e.nombre.toLowerCase().match(searchString)
      );
    }
    return (
      <div>
        <div class="multiselect">
          <input
            type="text"
            autoComplete="no"
            onChange={this.buscarProfesor}
            name="name"
            id=""
          />
          <div class="selectBox" onClick={() => this.showCheckboxes()}>
            <select>
              <option>Select an option</option>
            </select>
            <div class="overSelect"></div>
          </div>
          <div id="checkboxes" style={{ display: `${this.state.estilo}` }}>
            {employees.map((profesor, id) => {
              return (
                <label key={id} for={id}>
                  <input type="checkbox" id={id} />
                  {profesor.nombre}
                </label>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
