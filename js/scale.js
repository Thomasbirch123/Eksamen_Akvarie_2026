function resizeScene() {
    const scene = document.querySelector(".scene");

    const scale = Math.min(
        window.innerWidth / 1440,
        window.innerHeight / 900
    );

    scene.style.transform =
        `translate(-50%, -50%) scale(${scale})`;
}

window.addEventListener("resize", resizeScene);
window.addEventListener("load", resizeScene);

