const btn = document.getElementById("get-color-btn")
const seedColor = document.getElementById("seed-color")
const colorScheme = document.getElementById("color-scheme")
const url = "https://www.thecolorapi.com"

btn.addEventListener("click", () => {
  const hexColor = seedColor.value.substring(1)
  const color = colorScheme.value
  fetch(`${url}/scheme?hex=${hexColor}&mode=${color}`)
    .then(res => res.json())
    .then(data => {
      renderColors(data.colors)
    })
})

function renderColors(colors) {
  for (let i = 0; i < colors.length; i++) {
    const hexColorProvided = colors[i].name.closest_named_hex
    document.getElementById(`schemes-${i + 1}`).style.backgroundColor = hexColorProvided
    document.getElementById(`hex-${i + 1}`).textContent = hexColorProvided
  }
}