const navLinks = [
  { label: "Variable Data Printing", href: "/departments" },
  { label: "Flexible Packaging Solution", href: "/products" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Industries", href: "/industries" },
  { label: "Vision", href: "/vision-mission" },
  { label: "Contact Us", href: "/contact" },
];

function buildNavbar() {
  const currentPath = window.location.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/';

  const desktopItems = navLinks.map((link) => {
    const linkPath = link.href;
    const isActive = currentPath === linkPath || currentPath.endsWith(linkPath.slice(1));
    return `<li class="flex items-stretch">
      <a href="${link.href}" class="flex items-center px-4 text-sm font-medium transition-all duration-300 relative border-b-2
        ${isActive
        ? "text-orange-500 border-orange-500"
        : "text-gray-600 border-transparent hover:text-blue-700 hover:border-orange-300"}">
        ${link.label}
      </a>
    </li>`;
  }).join("");

  const mobileItems = navLinks.map((link) => {
    const linkPath = link.href;
    const isActive = currentPath === linkPath || currentPath.endsWith(linkPath.slice(1));
    return `<li>
      <a href="${link.href}" class="flex items-center gap-3 px-5 py-3.5 text-sm font-medium border-b border-white/10 transition-all duration-200
        ${isActive ? "text-orange-500 bg-orange-500/10" : "text-gray-700 hover:bg-white/40 hover:text-blue-700"}">
        ${isActive ? '<span class="w-1 h-4 bg-orange-500 rounded-full"></span>' : '<span class="w-1 h-4"></span>'}
        ${link.label}
      </a>
    </li>`;
  }).join("");

  return `
    <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="mainNav">
      <div class="h-[3px] bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500"></div>
      <div class="backdrop-blur-xl bg-white/70 border-b border-white/30 shadow-lg shadow-black/5">
        <div class="max-w-6xl mx-auto px-6 flex items-stretch justify-between h-[62px]">

          <a href="/" class="flex items-center gap-3 py-3">
            <img src="./images/logo2png-bg.png" alt="Kiran Logo" class="h-9 w-auto" />
            <div class="leading-none">
              <div class="text-[14px] font-bold text-blue-800">Kiran Business Forms</div>
              <div class="text-[10px] font-semibold text-orange-500 tracking-widest uppercase mt-1">Print Pvt Ltd</div>
            </div>
          </a>

          <ul class="hidden md:flex items-stretch gap-0">
            ${desktopItems}
          </ul>

          <button id="mobileMenuBtn" class="md:hidden flex items-center justify-center w-9 h-9 self-center rounded-lg text-gray-600 hover:bg-white/50 transition-colors">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>

      <div id="mobileMenu" class="hidden md:hidden backdrop-blur-xl bg-white/80 border-b border-white/30 shadow-lg">
        <ul>${mobileItems}</ul>
      </div>
    </nav>
    <div class="h-[65px]"></div>`;
}

function buildFooter() {
  return `
    <footer class="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div class="h-[3px] bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500"></div>
      <div class="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <img src="./images/logo2png-bg.png" alt="Logo" class="h-14 mb-5" />
          <p class="text-gray-200 text-sm font-semibold">Kiran Business Forms Print Pvt Ltd</p>
          <p class="text-gray-400 text-xs mt-1.5">ISO 9001:2015 &nbsp;&middot;&nbsp; Est. 1993</p>
          <div class="mt-3 space-y-1">
            <p class="text-gray-500 text-xs">CIN: U22219MH1993PTC073547</p>
            <p class="text-gray-500 text-xs">GST: 27AAACK3274BIZW</p>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-orange-400 uppercase tracking-widest mb-5">Quick Links</p>
          <ul class="space-y-2.5">
            ${[
              { label: "Home", href: "/" },
              ...navLinks
            ].map(l => `<li><a href="${l.href}" class="text-gray-400 text-sm hover:text-orange-400 transition-colors duration-200">${l.label}</a></li>`).join("")}
          </ul>
        </div>
        <div>
          <p class="text-xs font-semibold text-orange-400 uppercase tracking-widest mb-5">Contact</p>
          <ul class="space-y-3 text-sm text-gray-400">
            <li class="flex gap-3 items-start">
              <i class="fa-solid fa-location-dot text-orange-400 mt-1 text-xs w-3 shrink-0"></i>
              <span>W-165 E, TTC Industrial Area,<br/>MIDC Pawane, Navi Mumbai - 400 709</span>
            </li>
            <li class="flex gap-3 items-center">
              <i class="fa-solid fa-phone text-orange-400 text-xs w-3 shrink-0"></i>
              <a href="tel:02220872939" class="hover:text-orange-400 transition-colors duration-200">022-20872939</a>
            </li>
            <li class="flex gap-3 items-center">
              <i class="fa-brands fa-whatsapp text-orange-400 text-xs w-3 shrink-0"></i>
              <a href="https://wa.me/919820393070" target="_blank" class="hover:text-orange-400 transition-colors duration-200">9820393070</a>
            </li>
            <li class="flex gap-3 items-center">
              <i class="fa-solid fa-envelope text-orange-400 text-xs w-3 shrink-0"></i>
              <a href="mailto:karan@kiranbusiness.in" class="hover:text-orange-400 transition-colors duration-200">karan@kiranbusiness.in</a>
            </li>
            <li class="flex gap-3 items-center">
              <i class="fa-solid fa-globe text-orange-400 text-xs w-3 shrink-0"></i>
              <a href="https://www.kiranbusiness.in" target="_blank" class="hover:text-orange-400 transition-colors duration-200">www.kiranbusiness.in</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-800 py-5 px-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-3 max-w-6xl mx-auto">
          <p class="text-gray-500 text-xs">&copy; 1993&ndash;2025 Kiran Business Forms Print Pvt Ltd. All rights reserved.</p>
          <div class="flex items-center gap-2 text-gray-500">
            <span class="text-[11px]">Designed &amp; Developed by</span>
            <a href="https://www.linkedin.com/in/ayush-kumar-singh-677388250/" target="_blank"
              class="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-500/10 to-orange-400/10 border border-orange-500/20 text-orange-400 hover:text-orange-300 hover:border-orange-400/40 px-3 py-1 rounded-full text-[11px] font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
              <i class="fa-brands fa-linkedin text-[13px]"></i> Ayush Kumar Singh
            </a>
          </div>
        </div>
      </div>
    </footer>`;
}

document.addEventListener("DOMContentLoaded", function () {
  const navEl = document.getElementById("navbar-placeholder");
  if (navEl) navEl.innerHTML = buildNavbar();

  const footEl = document.getElementById("footer-placeholder");
  if (footEl) footEl.innerHTML = buildFooter();

  document.addEventListener("click", function (e) {
    const btn = document.getElementById("mobileMenuBtn");
    const menu = document.getElementById("mobileMenu");
    if (!btn || !menu) return;
    if (btn.contains(e.target)) menu.classList.toggle("hidden");
    else if (!menu.contains(e.target)) menu.classList.add("hidden");
  });
});
