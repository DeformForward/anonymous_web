"use strict";

for (const gallery of document.querySelectorAll("[data-gallery]")) {
  const picker = gallery.querySelector(".picker");
  const select = picker.querySelector("select");
  const clips = gallery.querySelectorAll(".clip");

  function showSelection() {
    for (const clip of clips) {
      const active = clip.dataset.clip === select.value;
      if (!active) clip.querySelector("video").pause();
      clip.hidden = !active;
      clip.open = active;
    }
  }

  picker.hidden = false;
  gallery.classList.add("enhanced");
  select.addEventListener("change", showSelection);
  showSelection();
}
