const el = element => document.querySelector(element);

// const addClass = ()
el("#closeMenu").onclick = () => (el("#main-menu").style.display = "none");
el("#menuNav").onclick = () => (el("#main-menu").style.display = "block");
