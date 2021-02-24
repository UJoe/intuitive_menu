var visible = false;
const m = document.getElementById("menu");
const qw = window.matchMedia("(max-width: 920px)");
const qh = window.matchMedia("(max-height: 420px)");
shrink(qw, qh);
qw.addListener(shrink);
qh.addListener(shrink);

function popup() {
  if (visible) {
    m.style.opacity = "0";
    m.style.height = "0";
    visible = false;
  
  } else {
    m.innerHTML = `<a href="#top" class="menuitem">Top</a>
    <a href="#paradise" class="menuitem">First impressions</a>
    <a href="#coral" class="menuitem">The sea</a>
    <a href="#party" class="menuitem">Parties</a>`;
    m.style.opacity = "1";
    visible = true;
    m.style.fontSize = "1.1em";
    m.style.flexDirection = "column"
    m.style.width = "fit-content";
    m.style.height = "256px";
    m.style.backgroundColor = "#f8ffb8";
    
    if (qw.matches) {
      m.style.fontSize = "1.3em";
      m.style.flexDirection = "column"
      m.style.height = "272px";
      m.style.width = "425px";
      m.style.maxHeight = "fit-content";
      m.style.backgroundColor = "#d42000";
    } 
    if (qh.matches) {
      m.style.fontSize = "1em";
      m.style.flexDirection = "row";
      m.style.height = "56px";
      m.style.width = "424px";
      m.style.maxHeight = "fit-content";
      m.style.backgroundColor = "#d42000";
    }
  }
}

function shrink(qw, qh) {
  if (qw.matches || qh.matches) {
    visible = true; popup()
  }
}


