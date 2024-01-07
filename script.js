

const detailsElements = document.querySelectorAll('details');

detailsElements.forEach(details => {
  details.addEventListener('toggle', function () {
    if (details.open) toggleDetails(details)
  })
})


function toggleDetails (toggleDetail) {
  detailsElements.forEach((detail) => {
    if (detail !== toggleDetail) {
      detail.open = false
    }
  })
}