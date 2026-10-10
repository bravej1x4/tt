import { TextMorph } from "https://cdn.jsdelivr.net/npm/torph@0.1.0/+esm";

for (const element of document.querySelectorAll("[data-torph-title]")) {
    const shortText = element.textContent.trim();
    const fullText = element.dataset.torphTitle || shortText;

    const morph = new TextMorph({
        element,
        ease: { stiffness: 200, damping: 20 },
    });

    morph.update(shortText);

    element.addEventListener("pointerenter", () => morph.update(fullText));
    element.addEventListener("pointerleave", () => morph.update(shortText));
}
