import React from "react";
import "./App.css";
function Expdetail(props) {
  const nextPage = () => props.history.push("/Ed");
  const previousPage = () => props.history.push("/Ba");
  return (
    <div>
      <h1 className="Ed">Experience Details</h1>
      <hr></hr>
      <h2 className="Ex">Experience 1</h2>
      <div class="row">
        <div class="col-4">
          <form>
            <div class="form-row">
              <label for="validationDefault01"></label>
              <input
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="Institution/Organisation*"
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
                placeholder="Position*"
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
                placeholder="Duration*"
                required
              />
            </div>
          </form>
        </div>
        <div class="row">
          <div class="col-12">
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
      <h2 className="Ex">Experience 2</h2>
      <div class="row">
        <div class="col-4">
          <form>
            <div class="form-row">
              <label for="validationDefault01"></label>
              <input
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="Institution/Organisation*"
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
                placeholder="Position*"
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
                placeholder="Duration*"
                required
              />
            </div>
          </form>
        </div>
        <div class="row">
          <div class="col-12">
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

export default Expdetail;
