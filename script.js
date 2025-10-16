// Bootstrap form validation
(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
          event.preventDefault();
          alert("Thank you for contacting me!");
          form.reset();
        }
        form.classList.add('was-validated')
      }, false)
    })
})();

    // JavaScript to ensure only one video plays at a time
    const videos = document.querySelectorAll('video');

    videos.forEach((video) => {
      video.addEventListener('play', () => {
        // Pause all other videos
        videos.forEach((otherVideo) => {
          if (otherVideo !== video) {
            otherVideo.pause();
          }
        });
      });
    });

// DOM ready extras: typing effect, reveal-on-scroll, animated skill bars
document.addEventListener('DOMContentLoaded', () => {
  // Typing effect simple implementation
  const typingEl = document.querySelector('.typing');
  if (typingEl) {
    const wordsAttr = typingEl.getAttribute('data-words');
    try {
      const words = JSON.parse(wordsAttr);
      let idx = 0;
      let char = 0;
      let deleting = false;
      const typeSpeed = 80;

      function tick() {
        const current = words[idx % words.length];
        if (!deleting) {
          typingEl.textContent = current.slice(0, char + 1);
          char++;
          if (char === current.length) {
            deleting = true;
            setTimeout(tick, 900);
            return;
          }
        } else {
          typingEl.textContent = current.slice(0, char - 1);
          char--;
          if (char === 0) {
            deleting = false;
            idx++;
          }
        }
        setTimeout(tick, deleting ? typeSpeed / 2 : typeSpeed);
      }

      tick();
    } catch (e) {
      // ignore
    }
  }

  // Reveal on scroll for elements with .reveal
  const revealables = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealables.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealables.forEach(el => io.observe(el));
  } else {
    // fallback: show all
    revealables.forEach(el => el.classList.add('show'));
  }

  // Animate skills progress bars when in view
  const progressBars = document.querySelectorAll('.progress-bar[data-target]');
  if ('IntersectionObserver' in window && progressBars.length) {
    const pbObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const target = parseInt(bar.getAttribute('data-target'), 10) || parseInt(bar.getAttribute('aria-valuenow'), 10) || 0;
          // animate the bar
          bar.style.width = target + '%';
          bar.setAttribute('aria-valuenow', target);
          bar.textContent = `${target}%`;
          pbObserver.unobserve(bar);
          console.debug('Progress bar animated:', bar.id || '(no id)', target);
        }
      });
    }, { threshold: 0.25 });

    // helper to check if element is already visible enough
    function isVisibleEnough(el, threshold) {
      const rect = el.getBoundingClientRect();
      const viewHeight = window.innerHeight || document.documentElement.clientHeight;
      // visible if top is before bottom of viewport and at least threshold portion is within
      const visibleHeight = Math.min(rect.bottom, viewHeight) - Math.max(rect.top, 0);
      return visibleHeight > 0 && (visibleHeight / rect.height) >= threshold;
    }

    // Observe or animate immediately if already visible
    progressBars.forEach(bar => {
      try {
        if (isVisibleEnough(bar, 0.25)) {
          const target = parseInt(bar.getAttribute('data-target'), 10) || parseInt(bar.getAttribute('aria-valuenow'), 10) || 0;
          bar.style.width = target + '%';
          bar.setAttribute('aria-valuenow', target);
          bar.textContent = `${target}%`;
          console.debug('Progress bar animated immediately:', bar.id || '(no id)', target);
        } else {
          pbObserver.observe(bar);
        }
      } catch (err) {
        console.error('Error animating progress bar', err);
      }
    });
  } else {
    // Fallback: set widths immediately
    progressBars.forEach(p => {
      const t = parseInt(p.getAttribute('data-target'), 10) || parseInt(p.getAttribute('aria-valuenow'), 10) || 0;
      p.style.width = t + '%';
      p.setAttribute('aria-valuenow', t);
      p.textContent = `${t}%`;
    });
  }
});

// --- Simple i18n (English / Myanmar) ---
const translations = {
  en: {
    name: 'Myo Kyaw Thu',
    nav_home: 'Home',
    nav_about: 'About',
    nav_projects: 'Projects',
    nav_education: 'Education',
    nav_blog: 'Blog',
    nav_video: 'Video',
    nav_contact: 'Contact',
    profile_label: 'Profile:',
    education_label: 'Education:',
    other_skill_label: 'Other Skill:',
    address_label: 'Address:',
    about_heading: 'About Me',
    about_paragraph: 'Hello, I am currently a Fourth-year student majoring in Computer Science. I am excited about applying my skills in a junior developer role.This opportunity would allow me to further develop my capabilities, I am eager to make valuable contributions as a junior developer.',
    projects_heading: 'Projects',
    open_demo: 'Open Demo',
    more_projects: 'More Projects',
  download_cv: 'Download CV',
    education_heading: 'Education',
    skills_heading: 'Skills',
    blog_heading: 'Blog',
    blog_p: 'Click the button below to go to the blog',
    blog_coming: 'Coming soon!',
    video_heading: 'Video',
    contact_heading: 'Contact',
    contact_paragraph: 'Click the button below to provide contact information',
    contact_button: 'Click Here',
    footer_text: 'My Portfolio | Created by'
  },
  mm: {
    nav_home: 'မူလစာမျက်နှာ',
    nav_about: 'အကြောင်း',
    nav_projects: 'ပရောဂျက်များ',
    nav_education: 'ပညာရေး',
    nav_blog: 'ဘလော့ဂ်',
    nav_video: 'ဗီဒီယို',
    nav_contact: 'ဆက်သွယ်ရန်',
    profile_label: 'ကိုယ်ရေးအကျဥ်း:',
    education_label: 'ပညာရေး:',
    other_skill_label: 'အခြားကျွမ်းကျင်မှုများ:',
    address_label: 'လိပ်စာ:',
    name: 'မျိုးကျော်သူ',
    about_heading: 'ကျွန်ုပ်အကြောင်း',
    about_paragraph: 'မင်္ဂလာပါ၊ ကျွန်ုတော်သည် ကွန်ပျူတာသိပ္ပံကို အဓိကထား၍ ပညာသင်ယူနေသော တက္ကသိုလ်ကျောင်းသားတစ်ဦးဖြစ်သည်။ ကျောင်းမှာအဖွဲ့အစည်းများနှင့်အလုပ်တွဲလုပ်ရာတွင်စိတ်ပါဝင်စားစွာတွဲလုပ်ပါသည်။ တိုးတက်နေသောနည်းပညာများကိုလဲလေ့လာနေပါသည်',
    projects_heading: 'ပရောဂျက်များ',
    open_demo: 'နမူနာ ဖွင့်ရန်',
    more_projects: 'ပရောဂျက်များ ပိုမိုကြည့်ရန်',
  download_cv: 'CV ယူရန်',
    education_heading: 'ပညာရေး',
    skills_heading: 'ကျွမ်းကျင်မှုများ',
    blog_heading: 'ဘလော့ဂ်',
    blog_p: 'ဘလော့ဂ်သိုသွားရန် အောက်ပါbuttonကို နှိပ်ပါ။',
    blog_coming: 'မကြာခင်တွင် ရနိုင်ပါပြီ။',
    video_heading: 'ဗီဒီယို',
    contact_heading: 'ဆက်သွယ်ရန်',
    contact_paragraph: 'ကျွန်တော်ကိုအကြံပြုစာပေးပို့ရန် အတွက်အောက်ကbutton ကိုနိပ်ပေးပါ',
    contact_button: 'စာပို့ရန် နှိပ်ပါ',
    footer_text: 'ကိုယ့် ပေါ့ဖိုလီယို | ဖန်တီးသူ -'
  }
};

function setLanguage(lang) {
  try {
    const map = translations[lang] || translations.en;
    // map text by IDs or data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (map[key]) el.textContent = map[key];
    });

    // special labeled nav items by id if present
    const langLabel = document.getElementById('lang-label');
    const langFlag = document.getElementById('lang-flag');
    if (langLabel) langLabel.textContent = (lang === 'mm') ? 'မြန်မာ' : 'EN';
    if (langFlag) {
      // use bootstrap icons classes for flags/globe
      if (lang === 'mm') {
        langFlag.className = 'bi bi-flag-fill me-1';
      } else {
        langFlag.className = 'bi bi-globe2 me-1';
      }
    }

    localStorage.setItem('site_lang', lang);
  } catch (e) {
    console.error('i18n setLanguage error', e);
  }
}

// toggle handler
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('lang-toggle');
  const current = localStorage.getItem('site_lang') || 'mm';
  setLanguage(current);
  // attach dropdown selection handlers
  document.querySelectorAll('.lang-select').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
      // close bootstrap dropdown if available
      try {
        const dd = bootstrap.Dropdown.getInstance(toggle) || new bootstrap.Dropdown(toggle);
        dd.hide();
      } catch (err) {
        // ignore if bootstrap not present
      }
    });
  });
});

// Diagnostic summary to help debug runtime issues — view in browser console
(function runtimeDiagnostics() {
  try {
    const langSelectCount = document.querySelectorAll('.lang-select').length;
    const langToggle = !!document.getElementById('lang-toggle');
    const progressBars = document.querySelectorAll('.progress-bar[data-target]').length;
    const revealCount = document.querySelectorAll('.reveal').length;
    const cvLink = !!document.getElementById('cv-download');
    const siteLang = localStorage.getItem('site_lang') || '(not set)';
    console.info('Diagnostics: langSelects=%d, langToggle=%s, progressBars=%d, revealItems=%d, cvLink=%s, site_lang=%s',
      langSelectCount, langToggle, progressBars, revealCount, cvLink, siteLang);
  } catch (e) {
    console.error('Diagnostics failed', e);
  }
})();