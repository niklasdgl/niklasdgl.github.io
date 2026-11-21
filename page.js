/* live London clock in the header */
(() => {
  const el = document.getElementById("clock");
  if (!el) return;
  const tick = () => { el.textContent = new Date().toLocaleTimeString("en-GB", { timeZone: "Europe/London" }); };
  tick(); setInterval(tick, 1000);
})();
