class Card extends HTMLElement {
  user: string = "";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["user"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(
      `Attribute changed: ${name}, Old value: ${oldValue}, New value: ${newValue}`
    );
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    if (!this.shadowRoot) return;
    const user = this.getAttribute("user") || "Unknown";
    console.log("User attribute:", this.getAttribute("user"));
    this.shadowRoot.innerHTML = `
      <div>
        <h2>Card (Web Component)</h2>
        <p>User: ${user}</p>
      </div>
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("component-card", Card);

export default Card;
