import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="edit-movie"
export default class extends Controller {
  static targets = ["infos", "form", "card"]

  connect() {
    // console.log(this.infosTarget);
    // console.log(this.formTarget);
  }

  displayForm() {
    this.formTarget.classList.toggle("d-none")
    this.infosTarget.classList.toggle("d-none")
  }

  update(event) {
    event.preventDefault()
    // make an ajax request to form action route
    const url = this.formTarget.action
    fetch(url, {
      method: "PATCH",
      headers: { "Accept": "text/plain"},
      body: new FormData(this.formTarget)
    })
      .then(response => response.text())
      .then((data) => {
        // console.log(data);
        this.cardTarget.outerHTML = data
      })
  }
}
