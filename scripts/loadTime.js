(() => {
    const startTime = Date.now();
    window.addEventListener("load", () => {
        const endTime = Date.now();
        document.getElementById("load_test").innerText = `Current page load time is ${endTime - startTime} ms`;
    });
})();