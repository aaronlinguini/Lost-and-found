document.addEventListener("DOMContentLoaded", function () {
    // Scroll to the top of the page when it loads
    window.scrollTo(0, 0);
  
    // Get the current page from the URL
    const currentPage = window.location.pathname.split("/").pop();
  
    // Only create the home button on non-index pages
    if (currentPage !== "index.html") {
        // Create the home button
        if (!document.querySelector('.home-navigation')) {
            let homeDiv = document.createElement("div");
            homeDiv.className = "home-navigation";
  
            let homeButton = document.createElement("a");
            homeButton.href = "index.html";
            homeButton.title = "Home";
            homeButton.innerHTML = "&#x2302;";
            homeButton.className = "nav-button home-button"; // Add the specific class for styling
            homeDiv.appendChild(homeButton);
  
            document.body.appendChild(homeDiv);
        }
  
        // Check if the color picker has already been added
        if (!document.getElementById("colorPickerDiv")) {
            // Get the main content wrapper
            const mainContentWrapper = document.querySelector('.main-content-wrapper');
  
            // Create a container for the controls
            let controlsContainer = document.createElement("div");
            controlsContainer.className = "controls-navigation";
  
            // Create Previous Page button
            if (currentPage.match(/page(\d+)\.html/)) {
                const currentPageNumber = parseInt(currentPage.match(/page(\d+)\.html/)[1]);
                const maxPages = 6; // UPDATE THIS CALUE TO MATCH YOUR MAXIMUM NUMBER OF PAGES
  
                if (currentPageNumber > 1) {
                    let prevButton = document.createElement("a");
                    prevButton.href = `page${currentPageNumber - 1}.html`;
                    prevButton.title = "Previous Page";
                    prevButton.innerHTML = "&larr;";
                    prevButton.className = "nav-button prev-button"; // Add specific class for styling
                    controlsContainer.appendChild(prevButton);
                }
  
                // Create Color Picker Input and Button for Changing Background
                let colorPickerDiv = document.createElement("div");
                colorPickerDiv.id = "colorPickerDiv";
  
                let colorPickerLabel = document.createElement("label");
                colorPickerLabel.htmlFor = "bgColorPicker";
                colorPickerLabel.className = "color-picker-label"; // Add specific class for styling
                colorPickerLabel.textContent = "Change Background Colour:";
  
                let colorPicker = document.createElement("input");
                colorPicker.type = "color";
                colorPicker.id = "bgColorPicker";
                colorPicker.className = "color-picker"; // Add specific class for styling
                colorPicker.oninput = function () {
                    document.body.style.backgroundColor = this.value;
                };
  
                colorPickerDiv.appendChild(colorPickerLabel);
                colorPickerDiv.appendChild(colorPicker);
  
                controlsContainer.appendChild(colorPickerDiv);
  
                // Create Next Page button if there is a next page
                if (currentPageNumber < maxPages) {
                    let nextButton = document.createElement("a");
                    nextButton.href = `page${currentPageNumber + 1}.html`;
                    nextButton.title = "Next Page";
                    nextButton.innerHTML = "&rarr;";
                    nextButton.className = "nav-button next-button"; // Add specific class for styling
                    controlsContainer.appendChild(nextButton);
                }
            }
  
            // Insert controls at the top of the main content wrapper
            mainContentWrapper.insertBefore(controlsContainer, mainContentWrapper.firstChild);
        }
    }
  });
  