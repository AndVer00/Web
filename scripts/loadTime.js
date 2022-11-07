(() => {
    const startTime = Date.now();
    window.addEventListener("load", () => {
        const endTime = Date.now();
        document.getElementById("load").innerText = `Page load time is ${endTime - startTime} ms`;
    });
})();