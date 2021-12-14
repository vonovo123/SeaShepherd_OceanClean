export default class CurLocMaker extends google.maps.OverlayView {
  position;
  containerDiv;
  content;
  constructor(position, content) {
    super();
    this.position = position;
    const bubbleAnchor = document.createElement('div');
    bubbleAnchor.classList.add('custom-marker-anchor');
    bubbleAnchor.appendChild(content);
    this.containerDiv = document.createElement('div');
    this.containerDiv.classList.add('custom-marker-container');
    this.containerDiv.appendChild(bubbleAnchor);
    this.content = content;
    CurLocMaker.preventMapHitsAndGesturesFrom(this.containerDiv);
  }
  addClickEvent(cb) {
    this.content.addEventListener('click', e => {
      cb();
    });
  }
  onAdd() {
    this.getPanes().floatPane.appendChild(this.containerDiv);
  }
  onRemove() {
    if (this.containerDiv.parentElement) {
      this.containerDiv.parentElement.removeChild(this.containerDiv);
    }
  }
  draw() {
    const divPosition = this.getProjection().fromLatLngToDivPixel(
      this.position
    );
    const display =
      Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
        ? 'block'
        : 'none';
    if (display === 'block') {
      this.containerDiv.style.left = divPosition.x + 'px';
      this.containerDiv.style.top = divPosition.y + 'px';
    }

    if (this.containerDiv.style.display !== display) {
      this.containerDiv.style.display = display;
    }
  }
}
