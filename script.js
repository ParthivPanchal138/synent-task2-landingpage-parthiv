console.log("Flowly Landing Page Loaded");


const buttons = document.querySelectorAll("a");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Button clicked");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const visualSection = document.querySelector(".hero-visual");
  if (!visualSection) return;

  let animated = false;

  const startDashboardAnimation = () => {
    if (animated) return;
    animated = true;

    // A. Animate Progress Bars smoothly
    const progressFills = document.querySelectorAll(".prog-fill");
    progressFills.forEach((fill) => {
      // Temporarily drop width to 0, then force a reflow and set target width
      const targetWidth = fill.style.width;
      fill.style.width = "0";