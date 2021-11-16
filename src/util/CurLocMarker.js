export default class CurLocMaker extends google.maps.OverlayView {
  position;
  containerDiv;
  constructor(position, content) {
    super();
    this.position = position;
    content.classList.add('popup-bubble');
    const bubbleAnchor = document.createElement('div');
    bubbleAnchor.classList.add('popup-bubble-anchor');
    bubbleAnchor.appendChild(content);
    this.containerDiv = document.createElement('div');
    this.containerDiv.classList.add('popup-container');
    this.containerDiv.appendChild(bubbleAnchor);
    CurLocMaker.preventMapHitsAndGesturesFrom(this.containerDiv);
  }
  addClickEvent(cb) {
    this.containerDiv.addEventListener('click', () => {
      cb();
    });
  }
  onAdd() {
    this.getPanes().floatPane.appendChild(this.containerDiv);
  }
  /** Called when the popup is removed from the map. */
  onRemove() {
    if (this.containerDiv.parentElement) {
      this.containerDiv.parentElement.removeChild(this.containerDiv);
    }
  }
  /** Called each frame when the popup needs to draw itself. */
  draw() {
    const divPosition = this.getProjection().fromLatLngToDivPixel(
      this.position
    );
    console.log('draw x ', divPosition.x);
    console.log('draw y ', divPosition.y);
    // Hide the popup when it is far out of view.
    const display =
      Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
        ? 'block'
        : 'none';
    console.log(display);
    if (display === 'block') {
      this.containerDiv.style.left = divPosition.x + 'px';
      this.containerDiv.style.top = divPosition.y + 'px';
    }

    if (this.containerDiv.style.display !== display) {
      this.containerDiv.style.display = display;
    }
  }
}
