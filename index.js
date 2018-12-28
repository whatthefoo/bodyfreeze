export default {
  scrollTop: 10,
  start: function() {
    this.scrollTop =
      window.scrollY ||
      window.scrollTop ||
      document.getElementsByTagName("html")[0].scrollTop;
    // Disable body
    document.body.style.position = "fixed";
    document.body.style.overflow = "hidden";
    document.body.style.top = `-${this.scrollTop}px`;
    document.body.style.width = "100vw";
  },
  stop: function() {
    // Save scroll position
    document.body.style.position = "relative";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.overflow = "";
    window.scrollTo(0, this.scrollTop);
  }
};
