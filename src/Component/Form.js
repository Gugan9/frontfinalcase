import React from "react";
import "./App.css";

function Form(props) {
  const nextPage = () => props.history.push("/Education");
  return (
    <div>
      <h1 className="Fa">Personal Details</h1>
      <hr></hr>
      <div class="row">
        <div class="col-6">
          <form>
            <div class="form-row">
              <label for="validationDefault01"></label>
              <input
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="First Name*"
                required
              />
            </div>
          </form>
        </div>
        <div class="col-6">
          <form>
            <div class="form-row">
              <label for="validationDefault01"></label>
              <input
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="Last Name*"
                required
              />
            </div>
          </form>
        </div>
        <div class="col-6">
          <form>
            <div class="form-row">
              <label for="validationDefault01"></label>
              <input
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="Email*"
                required
              />
            </div>
          </form>
        </div>
        <div class="col-6">
          <form>
            <div class="form-row">
              <label for="validationDefault01"></label>
              <input
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="Phone Number*"
                required
              />
            </div>
          </form>
        </div>
        <div class="col-6">
          <form>
            <div class="form-row">
              <label for="validationDefault01"></label>
              <input
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="Your website"
                required
              />
            </div>
          </form>
        </div>
        <div class="col-6">
          <form>
            <div class="form-row">
              <label for="validationDefault01"></label>
              <input
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="Github"
                required
              />
            </div>
          </form>
        </div>
        <div class="col-6">
          <form>
            <div class="form-row">
              <label for="validationDefault01"></label>
              <input
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="Linked in"
                required
              />
            </div>
          </form>
        </div>
        <div class="col-6">
          <form>
            <div class="form-row">
              <label for="validationDefault01"></label>
              <input
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="Twitter"
                required
              />
            </div>
          </form>
        </div>
        <div class="col-6">
          <form>
            <div class="form-row">
              <label for="validationDefault01"></label>
              <input
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="Facebook"
                required
              />
            </div>
          </form>
        </div>
        <div class="col-6">
          <form>
            <div class="form-row">
              <label for="validationDefault01"></label>
              <input
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="Instagram"
                required
              />
            </div>
          </form>
        </div>
      </div>
      <div className="aa">
        <button type="button" className="a" onClick={nextPage}>
          Next
        </button>
      </div>
      <div className="ab">
        <button type="button" className="ac">
          Back
        </button>
      </div>
    </div>
  );
}
export default Form;
