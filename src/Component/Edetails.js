import React from "react";
import "./App.css";
import App from "../App";
function Edetails(props) {
  const nextPage = () => props.history.push("/Edu");
  const previousPage = () => props.history.push("/Back");
  return (
    <div>
      <h1 className="Ed">Education Details</h1>
      <hr></hr>
      <div class="row">
        <div class="col-4">
          <form>
            <div class="form-row">
              <label for="validationDefault01"></label>
              <input
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="College/University*"
                required
              />
            </div>
          </form>
        </div>
        <div class="col-4">
          <form>
            <div class="form-row">
              <label for="validationDefault01"></label>
              <input
                type="date"
                class="form-control"
                id="validationDefault01"
                required
              />
            </div>
          </form>
        </div>
        <div class="col-4">
          <form>
            <div class="form-row">
              <label for="validationDefault01"></label>
              <input
                type="date"
                class="form-control"
                id="validationDefault01"
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
                  type="text"
                  class="form-control"
                  id="validationDefault01"
                  placeholder="Qualification*"
                  required
                />
              </div>
            </form>
          </div>
          <div class="col-8">
            <form>
              <div class="form-row">
                <label for="validationDefault01"></label>
                <input
                  type="text"
                  class="form-control"
                  id="validationDefault01"
                  placeholder="Description*"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr></hr>
      <div class="row">
        <div class="col-4">
          <form>
            <div class="form-row">
              <label for="validationDefault01"></label>
              <input
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="School*"
                required
              />
            </div>
          </form>
        </div>
        <div class="col-4">
          <form>
            <div class="form-row">
              <label for="validationDefault01"></label>
              <input
                type="date"
                class="form-control"
                id="validationDefault01"
                required
              />
            </div>
          </form>
        </div>
        <div class="col-4">
          <form>
            <div class="form-row">
              <label for="validationDefault01"></label>
              <input
                type="date"
                class="form-control"
                id="validationDefault01"
                placeholder="Position*"
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
                  type="text"
                  class="form-control"
                  id="validationDefault01"
                  placeholder="Qualification*"
                  required
                />
              </div>
            </form>
          </div>
          <div class="col-8">
            <form>
              <div class="form-row">
                <label for="validationDefault01"></label>
                <input
                  type="text"
                  class="form-control"
                  id="validationDefault01"
                  placeholder="Description*"
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

export default Edetails;
