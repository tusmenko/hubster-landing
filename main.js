(function () {
	function initNav() {
		var headerNav = document.querySelector("header .wp-block-navigation");
		if (!headerNav) return;
		var openBtn = headerNav.querySelector(".wp-block-navigation__responsive-container-open");
		var closeBtn = headerNav.querySelector(".wp-block-navigation__responsive-container-close");
		var panel = headerNav.querySelector(".wp-block-navigation__responsive-container");
		if (!openBtn || !closeBtn || !panel) return;

		function setOpen(open) {
			panel.classList.toggle("is-menu-open", open);
			document.documentElement.classList.toggle("has-modal-open", open);
			openBtn.setAttribute("aria-expanded", String(open));
			if (open) {
				closeBtn.focus();
			} else {
				openBtn.focus();
			}
		}

		openBtn.addEventListener("click", function () {
			setOpen(!panel.classList.contains("is-menu-open"));
		});
		closeBtn.addEventListener("click", function () {
			setOpen(false);
		});
		document.addEventListener("keydown", function (e) {
			if (e.key === "Escape" && panel.classList.contains("is-menu-open")) {
				setOpen(false);
			}
		});
		headerNav.querySelectorAll('a[href^="#"]').forEach(function (a) {
			a.addEventListener("click", function () {
				setOpen(false);
			});
		});
	}

	function initForm() {
		var form = document.getElementById("contact-form");
		if (!form) return;
		var statusEl = document.getElementById("contact-form-status");
		var nameInput = document.getElementById("contact-name");
		var emailInput = document.getElementById("contact-email");
		var messageInput = document.getElementById("contact-message");
		var nameErr = document.getElementById("contact-name-error");
		var emailErr = document.getElementById("contact-email-error");
		var messageErr = document.getElementById("contact-message-error");

		function emailOk(v) {
			return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v).trim());
		}

		function clearErrors() {
			[nameErr, emailErr, messageErr].forEach(function (el) {
				el.textContent = "";
			});
			[nameInput, emailInput, messageInput].forEach(function (el) {
				el.removeAttribute("aria-invalid");
			});
		}

		form.addEventListener("submit", function (e) {
			e.preventDefault();
			statusEl.textContent = "";
			clearErrors();
			var ok = true;
			if (!nameInput.value.trim()) {
				nameErr.textContent = "Please enter your name.";
				nameInput.setAttribute("aria-invalid", "true");
				ok = false;
			}
			if (!emailOk(emailInput.value)) {
				emailErr.textContent = "Please enter a valid email address.";
				emailInput.setAttribute("aria-invalid", "true");
				ok = false;
			}
			if (!messageInput.value.trim()) {
				messageErr.textContent = "Please enter a message.";
				messageInput.setAttribute("aria-invalid", "true");
				ok = false;
			}
			if (!ok) return;
			statusEl.textContent =
				"Thank you — your message has been received. We will get back to you soon.";
			form.reset();
			statusEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
		});
	}

	function run() {
		initNav();
		initForm();
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", run);
	} else {
		run();
	}
})();
