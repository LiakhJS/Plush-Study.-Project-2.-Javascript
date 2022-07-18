const colors = ['#FFFFFF', '#FFFFF0', '#E0FFFF', '#FFF0F5',
    '#FFFACD', '#FAFAD2', '#EEE8AA', '#F0E68C',
    '#FFC0CB', '#FFB6C1', '#FF69B4', '#FF1493', '#DB7093', '#C71585',
    '#F08080', '#CD5C5C', '#DC143C', '#FF0000', '#B22222', '#8B0000',
    '#DAA520', '#B8860B', '#CD853F', '#8B4513', '#A0522D', '#A52A2A', '#800000',
    '#FFFF00', '#FFD700',
    '#FFA500', '#FF8C00', '#FF7F50', '#FF4500', '#FF6347',
    '#98FB98', '#00FA9A', '#00FF7F', '#9ACD32', '#7FFF00', '#32CD32', '#3CB371', '#2E8B57', '#008000',
    '#00CED1', '#00FFFF', '#00BFFF', '#87CEFA', '#4682B4', '#0000FF', '	#0000CD', '#00008B',
    '#6A5ACD', '#8A2BE2', '#9932CC', '#4B0082',
    '#DCDCDC', '#C0C0C0', '#A9A9A9', '#808080', '#696969', '#778899', '#2F4F4F', '#2F4F4F', '#000000'
];

function renderColorPalette() {
    const paletteContainer = document.querySelector(".palette");
    const colorsItems = colors
        .map(color => {
            return `<button
              style="background-color: ${color}"
              class="palette-button"></button>`;
        })
        .join("");
    paletteContainer.innerHTML = colorsItems;
}

function handleClickOnColor(event) {
    const button = event.target.closest(".palette-button");
    if (!button) return;
    const oldActiveButton = document.querySelector('.palette-button-active');
    if (oldActiveButton) {
        oldActiveButton.classList.remove("palette-button-active");
    }
    button.classList.add("palette-button-active");
}

function setEventsOnFilledElements() {
    function handleMouseEnter() {
        this.classList.add("selected");
    }

    function handleMouseLeave() {
        this.classList.remove("selected");
    }

    function handleClick() {
        const currentColor = document.querySelector(".palette-button-active");
        if (!currentColor) {
            alert("Цвет не выбран");
            return;
        }
        this.style.fill = currentColor.style.backgroundColor;
    }
    const elements = document.querySelectorAll("*[fill]");
    elements.forEach(element => {
        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);
        element.addEventListener("click", handleClick);
    });
}

document.addEventListener("DOMContentLoaded", renderColorPalette);
document.addEventListener("click", handleClickOnColor);
document.addEventListener("DOMContentLoaded", setEventsOnFilledElements);

const paintRestart = document.querySelector('.paint-restart');
paintRestart.addEventListener('click', () => {
    window.location.reload();
});