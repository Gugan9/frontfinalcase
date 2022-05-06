import React from "react";
import "./App.css";
function Project(props) {
  const nextPage = () => props.history.push("/Ede");
  const previousPage = () => props.history.push("/Bac");
  return (
    <div>
      <h1 className="Ed">Projects Developed</h1>
      <hr></hr>
      <h2 className="EE">Project 1</h2>
      <div class="row">
        <div class="col-4">
          <form>
            <div class="form-row">
              <label for="validationDefault01"></label>
              <input
                className="Pr"
                type="text"
                id="validationDefault01"
                placeholder="Title*"
                required
              />
            </div>
          </form>
        </div>
        <div class="row">
          <div class="col-4">
            <form>
              <div class="form-row">
                <label for="validationDefault01"></label>
                <input
                  className="Pr"
                  type="text"
                  id="validationDefault01"
                  placeholder="Link*"
                  required
                />
              </div>
            </form>
          </div>
          <div class="row">
            <div class="col-4">
              <form>
                <div class="form-row">
                  <label for="validationDefault01"></label>
                  <input
                    className="Pr"
                    type="text"
                    id="validationDefault01"
                    placeholder="Description*"
                    required
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <h2 className="EE">Project 2</h2>
      <div class="row">
        <div class="col-4">
          <form>
            <div class="form-row">
              <label for="validationDefault01"></label>
              <input
                className="Pr"
                type="text"
                id="validationDefault01"
                placeholder="Title*"
                required
              />
            </div>
          </form>
        </div>

        <div class="row">
          <div class="col-4">
            <form>
              <div class="form-row">
                <label for="validationDefault01"></label>
                <input
                  className="Pr"
                  type="text"
                  id="validationDefault01"
                  placeholder="Link*"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="aa">
        <button type="button" className="a" onClick={nextPage}>
          Next
        </button>
      </div>
      <div className="ab">
        <button type="button" className="ac" onClick={previousPage}>
          Back
        </button>
      </div>
    </div>
  );
}

export default Project;
