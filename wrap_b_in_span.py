from bs4 import BeautifulSoup

# Load the HTML file
with open("to-modify.html", "r", encoding="utf-8") as file:
    soup = BeautifulSoup(file, "html.parser")

# Find all <b> tags and wrap each one in a <span> tag
for b_tag in soup.find_all("b"):
    new_span = soup.new_tag("span")
    b_tag.wrap(new_span)

# Save the modified HTML to a new file
with open("modified_output.html", "w", encoding="utf-8") as file:
    file.write(str(soup))

print("Modification complete: each <b> element is now wrapped in a <span> element.")
