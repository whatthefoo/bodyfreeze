export default {
  scrollTop: 0,
  start: function() {
    // Check if body is already freezed
    const isFreezed = document.body.getAttribute("freezed");
    if (isFreezed) return;

    // Save scroll position
    this.scrollTop =
      window.scrollY ||
      window.scrollTop ||
      document.getElementsByTagName("html")[0].scrollTop;

    document.body.style.position = "fixed";
    document.body.style.overflow = "hidden";
    document.body.style.top = `-${this.scrollTop}px`;
    document.body.style.width = "100vw";

    document.body.setAttribute("freezed", "");
  },
  stop: function() {
    // Check if body is already unfreezed
    const isFreezed = document.body.hasAttribute("freezed");
    if (!isFreezed) return;

    // Enable scrolling again
    document.body.style.position = "relative";
    document.body.style.top = null;
    document.body.style.width = null;
    document.body.style.overflow = null;
    window.scrollTo(0, this.scrollTop);

    document.body.removeAttribute("freezed");
  }
};
