function trackButtonClick() {
  alert("Button Clicked!");

  // Send event to Google Analytics
  gtag("event", "button_click", {
    event_category: "interaction",
    event_label: "click_me_button",
  });
}
