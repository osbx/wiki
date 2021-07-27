function get_theme() {
    var theme;
    try { theme = localStorage.getItem('mdbook-theme'); } catch (e) { }
    if (theme === null || theme === undefined) {
        return default_theme;
    } else {
        return theme;
    }
}

var curr_theme = get_theme();

function set_img(color) {
  var logo_url = "url('res/light_logo.png')";
  if (color === "light") {
    logo_url = "url('res/dark_logo.png')";
  }

  document.documentElement.style.setProperty('--logo_url', logo_url);
}

set_img(curr_theme);

function logo_loop() {
  setTimeout(function() {
    let theme = get_theme();
    if (theme != curr_theme) {
      set_img(theme);
      curr_theme = theme;
    }
    logo_loop();
  }, 30);
}

logo_loop();
