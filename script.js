console.log("Flowly Landing Page Loaded");

// 1. Generic click tracker for anchor links
const buttons = document.querySelectorAll("a");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Button clicked");
  });
});

// 2. IMPRESSIVE CHANGE: Live Dashboard Entrance Animation
document.addEventListener("DOMContentLoaded", () => {
  const visualSection = document.querySelector(".hero-visual");
  if (!visualSection) return;

  // Track if we have already run the animation to prevent loops
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
      
      // Force layout recalculation so the browser registers 0% width
      fill.getBoundingClientRect(); 
      
      // Apply transition style and restore target width for a flawless CSS grow
      fill.style.transition = "width 1.5s cubic-bezier(0.16, 1, 0.3, 1)";
      fill.style.width = targetWidth;
    });

    