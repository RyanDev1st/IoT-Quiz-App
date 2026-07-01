import re

# 1. Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

old_header = """    <div class="session-sidebar-header">
      <h2>Sessions</h2>
      <button id="btn-new-session" class="nav-btn"><i class="fa-solid fa-plus"></i></button>
    </div>"""

new_header = """    <div class="session-sidebar-header">
      <h2>Sessions</h2>
      <div style="display: flex; gap: 0.5rem;">
        <button id="btn-new-session" class="nav-btn" title="New Session"><i class="fa-solid fa-plus"></i></button>
        <button id="btn-toggle-sidebar" class="nav-btn" title="Collapse"><i class="fa-solid fa-chevron-left"></i></button>
      </div>
    </div>"""

if old_header in html:
    html = html.replace(old_header, new_header)

old_sidebar_tag = '<aside class="session-sidebar">'
new_sidebar_tag = '<aside class="session-sidebar" id="session-sidebar">'
if old_sidebar_tag in html:
    html = html.replace(old_sidebar_tag, new_sidebar_tag)

if 'id="btn-open-sidebar"' not in html:
    html = html.replace('<div id="app">', '<button id="btn-open-sidebar" class="nav-btn hidden" style="position: fixed; left: 1rem; top: 1.5rem; z-index: 50;" title="Open Sessions"><i class="fa-solid fa-bars"></i></button>\n  <div id="app">')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)


# 2. Update style.css
with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

css_addition = """
/* Sidebar Collapse Logic */
.session-sidebar {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.session-sidebar.collapsed {
  transform: translateX(-100%);
}
body {
  transition: padding-left 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
body.sidebar-collapsed {
  padding-left: 0;
}
#btn-open-sidebar {
  transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s;
}
"""
if "Sidebar Collapse Logic" not in css:
    with open('style.css', 'a', encoding='utf-8') as f:
        f.write(css_addition)


# 3. Update app.js
with open('app.js', 'r', encoding='utf-8') as f:
    js = f.read()

if 'btnToggleSidebar: document.getElementById(\'btn-toggle-sidebar\')' not in js:
    # Add elements
    js = js.replace("btnNewSession: document.getElementById('btn-new-session')",
                    "btnNewSession: document.getElementById('btn-new-session'),\n  btnToggleSidebar: document.getElementById('btn-toggle-sidebar'),\n  btnOpenSidebar: document.getElementById('btn-open-sidebar'),\n  sessionSidebar: document.getElementById('session-sidebar')")

    # Add listeners in init()
    collapse_logic = """
  if (elements.btnToggleSidebar) {
      elements.btnToggleSidebar.addEventListener('click', () => {
          elements.sessionSidebar.classList.add('collapsed');
          document.body.classList.add('sidebar-collapsed');
          elements.btnOpenSidebar.classList.remove('hidden');
      });
  }
  if (elements.btnOpenSidebar) {
      elements.btnOpenSidebar.addEventListener('click', () => {
          elements.sessionSidebar.classList.remove('collapsed');
          document.body.classList.remove('sidebar-collapsed');
          elements.btnOpenSidebar.classList.add('hidden');
      });
  }
"""
    js = js.replace("elements.btnNewSession.addEventListener('click'", collapse_logic + "\n  elements.btnNewSession.addEventListener('click'")

    with open('app.js', 'w', encoding='utf-8') as f:
        f.write(js)

print("Applied collapsible sidebar feature")
