import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search-movies"
export default class extends Controller {
  static targets = ["form", "input", "list"]

  connect() {
    // console.log(this.formTarget);
    // console.log(this.inputTarget);
    // console.log(this.listTarget);
  }

  update() {
    // console.log("Send AJAX request");
    // console.log(this.formTarget.action);
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`
    fetch(url, {headers: { "Accept": "text/plain" }})
      .then(response => response.text())
      .then((data) => {
        // console.log(data);
        this.listTarget.outerHTML = data
      })
  }
}
