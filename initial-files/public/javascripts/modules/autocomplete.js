function autocomplete(input, latInput, lngInput) {
  if (!input) return; // skip this from running if there s not input on the page
  const dropdown = new google.maps.places.Autocomplete(input);

    dropdown.addListener("place_changed", () => {
      const place = dropdown.getPlace();
      latInput.value = place.geometry.location.lat();
      lngInput.value = place.geometry.location.lng();
    });

    // if someone hits enter dont submit the form//on means add event listener// each key has a number so 13 is enter

    input.on('keydown', (e) => {
        if (e.keyCode === 13) e.preventDefault();
    })
}

export default autocomplete;
