import React from "react";
import "./App.css";
function Extradetail(props) {
  const previousPage = () => props.history.push("/Bk");
  return (
    <div>
      <h1 className="Et">Extra Details</h1>
      <hr></hr>
      <h2 className="Ea">Skills/Languages</h2>
      <div class="row">
        <div class="col-4">
          <form>
            <div class="form-row">
              <label for="validationDefault01"></label>
              <input
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="Skill 1"
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
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="Skill 2"
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
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="Skill 3"
                required
              />
            </div>
          </form>
        </div>
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
                placeholder="Skill 4"
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
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="Skill 5"
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
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="Skill 6"
                required
              />
            </div>
          </form>
        </div>
      </div>
      <br></br>
      <h2 className="Ea">Interest</h2>
      <div class="row">
        <div class="col-4">
          <form>
            <div class="form-row">
              <label for="validationDefault01"></label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                placeholder="Interest 1"
                required
              />
            </div>
          </form>
        </div>
        <div class="col-4">
          <form>
            <div class="form-row">
              <label for="validationDefault01" className="Za"></label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                placeholder="Interest 2"
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
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="Interest 3"
                required
              />
            </div>
          </form>
        </div>
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
                placeholder="Interest 4"
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
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="Interest 5"
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
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="Interest 6"
                required
              />
            </div>
          </form>
        </div>
      </div>
      <div className="abcd">
        <button type="button" className="a" onClick={previousPage}>
          Back
        </button>
      </div>
      <div className="ab">
        <button type="button" className="baa">
          Next
        </button>
      </div>
    </div>
  );
}

export default Extradetail;
