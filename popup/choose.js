/**
 * Listen for clicks on the buttons, and send the appropriate message to
 * the content script in the page.
 */
function listenForClicks() {
  document.addEventListener("click", (e) => {

    function prefill(tabs) {
        browser.tabs.sendMessage(tabs[0].id, {
          command: "fill",
          language: e.target.textContent
      });
    }

    if (e.target.tagName !== "BUTTON" || !e.target.closest("#popup-content")) {
      return;
    } 
    browser.tabs.query({active: true, currentWindow: true})
      .then(prefill);
  });
}


/**
 * When the popup loads, inject a content script into the active tab,
 * and add a click handler.
 * If we couldn't inject the script, handle the error.
 */
browser.tabs.executeScript({file: "/content_scripts/prefill.js"})
.then(listenForClicks);
