// Attendr — one-page site interactions
// 1) Mobile nav toggle
// 2) Attendance/Learning flow tab switch
// 3) Demo form (front-end only — see README for wiring a real endpoint)

(function () {
  "use strict";

  // ---- Mobile nav ----
  var navToggle = document.getElementById("navToggle");
  var primaryNav = document.getElementById("primaryNav");

  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = primaryNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    primaryNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        primaryNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---- Flow tabs (Attendance / Learning) ----
  var tabs = [
    { btn: document.getElementById("tab-attendance"), panel: document.getElementById("panel-attendance") },
    { btn: document.getElementById("tab-learning"), panel: document.getElementById("panel-learning") }
  ];

  function activateTab(index) {
    tabs.forEach(function (t, i) {
      if (!t.btn || !t.panel) return;
      var active = i === index;
      t.btn.classList.toggle("is-active", active);
      t.btn.setAttribute("aria-selected", String(active));
      t.btn.tabIndex = active ? 0 : -1;
      t.panel.hidden = !active;
    });
  }

  tabs.forEach(function (t, i) {
    if (!t.btn) return;
    t.btn.addEventListener("click", function () {
      activateTab(i);
    });
    t.btn.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        var next = e.key === "ArrowRight" ? (i + 1) % tabs.length : (i - 1 + tabs.length) % tabs.length;
        tabs[next].btn.focus();
        activateTab(next);
      }
    });
  });

  // ---- Demo form ----
  // No backend is wired up. On submit, this just confirms receipt in the UI.
  // Replace this handler with a real fetch() call to your form endpoint,
  // CRM, or booking tool when one is available. See README.md.
  var form = document.getElementById("demoForm");
  var note = document.getElementById("formNote");

  if (form && note) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var option = document.getElementById("option");
      var label = option && option.value === "pilot" ? "pilot request" : "demo request";
      note.textContent = "Thanks — your " + label + " has been noted. We'll follow up by email shortly.";
      form.reset();
    });
  }
})();
