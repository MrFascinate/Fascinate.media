/* ==========================================================================
   Mr. Fascinate — Productions
   ========================================================================== */

(function () {
  'use strict';

  /* ─── Production Data ─── */
  var productions = [
    {
      id: 'curiosity-theory',
      title: 'Curiosity Theory',
      partner: 'Fascinate Media',
      description: 'An educational science podcast where co-hosts Dr. Dakotah Tyler and Justin Shaifer talk space, science, the future, and culture.',
      category: 'Series',
      externalUrl: 'https://curiositytheorypod.com',
      gifUrl: 'gifs/curiosity theory.gif'
    },
    {
      id: 'chevy-ev',
      title: "What's Cool About Electric",
      partner: 'Chevrolet',
      description: 'Justin hosts a car commercial for Chevy\'s EV, describing "What\'s Cool About Electric" and how sustainable energy sources can empower communities of color.',
      category: 'Branded Content',
      videoUrl: 'https://player.vimeo.com/video/787496100',
      gifUrl: 'gifs/CHEVY DTU.gif'
    },
    {
      id: 'why-am-i-like-this',
      title: 'Why am I Like This?',
      partner: 'PBS Digital Studios',
      description: 'Justin executive produced an 8 episode series about biology and anthropology starring Dr. Tina Lasisi. His cameo appearances can be found on YouTube!',
      category: 'Series',
      gifUrl: 'gifs/WHYA.gif'
    },
    {
      id: 'ai-agents-everyday',
      title: 'AI Agents for Everyday Professionals',
      partner: 'LinkedIn Learning',
      description: 'In this course, Justin Shaifer introduces beginner-friendly AI agent platform n8n, explores practical use cases for automating everyday work, and shares key ethical considerations for responsible AI agent use.',
      category: 'Education',
      externalUrl: 'https://www.linkedin.com/learning/ai-agents-for-everyday-professionals-simple-automations-to-speed-up-your-work-no-code-required/when-to-use-and-not-use-an-ai-agent',
      gifUrl: 'gifs/linkedin learning n8n.gif'
    },
    {
      id: 'intuit-ideas',
      title: 'Intuit IDEAS',
      partner: 'Intuit',
      description: 'A branded content series capturing the progress of business owners as they use Intuit\'s financial technology products such as TurboTax, Mailchimp, and more.',
      category: 'Branded Content',
      gifUrl: 'gifs/Intuit Teaser.gif'
    },
    {
      id: 'attn-mgm',
      title: 'Your Brain on Vegas',
      partner: 'ATTN',
      description: 'Justin partners with ATTN and travels across MGM resorts in Las Vegas, discussing how each experience heightens and reduces specific neurotransmitters.',
      category: 'Branded Content',
      videoUrl: 'https://player.vimeo.com/video/787494350',
      gifUrl: 'gifs/mgm-attn.gif'
    },
    {
      id: 'second-home',
      title: 'A Second Home',
      partner: 'Fascinate Media',
      description: 'Justin breaks down how he used a virtual production workflow to create A Second Home, an immersive educational series hosted by an astrophysicist imagining life on exoplanets.',
      category: 'Series',
      videoUrl: 'https://player.vimeo.com/video/787498544',
      gifUrl: 'gifs/ASecondHome2.gif'
    },
    {
      id: 'day-on-mars',
      title: 'Day On Mars',
      partner: 'Fascinate Media',
      description: 'Day On Mars is a 3D-Animated short-form series produced in Unreal Engine that showcases how future residents might spend their day on Mars.',
      category: 'Series',
      gifUrl: 'gifs/DayOnMars4k_7_6_24_1(2).gif'
    },
    {
      id: 'metaverse',
      title: 'On The Verge',
      partner: 'Al Roker Entertainment',
      description: 'A proof of concept for a series produced by Al Roker Entertainment about the Metaverse and its implications, hosted and co-produced by Justin "Mr. Fascinate" Shaifer.',
      category: 'Series',
      videoUrl: 'https://player.vimeo.com/video/787497906',
      gifUrl: 'gifs/metaverse.gif'
    },
    {
      id: 'wedu-pbs',
      title: 'Climate Impact Reduction',
      partner: 'WEDU PBS',
      description: 'Justin works with WEDU PBS in Tampa, FL to discuss innovations for local climate impact reduction. This was filmed immediately before Hurricane Ian made landfall nearby.',
      category: 'Broadcast',
      videoUrl: 'https://player.vimeo.com/video/787495541',
      gifUrl: 'gifs/WEDU.gif'
    },
    {
      id: 'purecycle',
      title: 'Everyday Science',
      partner: 'PureCycle / Intuitive Content',
      description: 'Justin works with MythBusters star Kari Byron and Jenny Buccos to host a show about the past, present, and future of plastics.',
      category: 'Series',
      videoUrl: 'https://player.vimeo.com/video/787496645',
      gifUrl: 'gifs/purecycle.gif'
    },
    {
      id: 'al-roker-space',
      title: 'Forging the Future',
      partner: 'Al Roker Entertainment',
      description: 'Justin works with Al Roker Entertainment to host an episode of a dynamic show where he explores the possibility of human-led expeditions to the moon and Mars.',
      category: 'Series',
      videoUrl: 'https://player.vimeo.com/video/787497321',
      gifUrl: 'gifs/Forging the Future.gif'
    },
    {
      id: 'linkedin-learning',
      title: 'Chat with AI',
      partner: 'LinkedIn',
      description: 'Justin works with LinkedIn Learning to engage in a dynamic conversation with an AI about the Future of Work.',
      category: 'Branded Content',
      videoUrl: 'https://player.vimeo.com/video/787493637',
      gifUrl: 'gifs/LinkedIn Learning.gif'
    },
    {
      id: 'soul-of-a-nation',
      title: 'Soul of a Nation',
      partner: 'ABC News',
      description: 'Justin weighs in on the importance of STEM with ABC News on Prime Time TV in their 6-part series Soul of a Nation. Justin\'s feature in episode 2 is now available on Hulu.',
      category: 'Broadcast',
      gifUrl: 'gifs/abc.gif'
    },
    {
      id: 'ai-agents-browser',
      title: 'AI Agents in your Browser: Boosting Productivity with Gemini in Chrome',
      partner: 'LinkedIn Learning',
      description: 'This course unpacks the capabilities of Agentic Browsers, and shows users how to speed up their work using Gemini in Chrome.',
      category: 'Education',
      externalUrl: 'https://www.linkedin.com/learning/ai-agents-in-your-browser-boosting-productivity-with-gemini-in-chrome/what-is-an-agentic-browser-and-why-should-you-care?autoSkip=true&resume=false',
      gifUrl: 'gifs/linkedin learning gemini.gif'
    },
    {
      id: 'hood-science',
      title: 'Hood Science',
      partner: 'Fascinate Media',
      description: 'An animated series that explains educational concepts like environmental justice and food deserts.',
      category: 'Series',
      gifUrl: 'gifs/HOOD SCIENCE.gif'
    },
    {
      id: 'nsf-icorps',
      title: 'NSF iCorps',
      partner: 'NSF / USC',
      description: 'A series of educational explainer videos describing the impact of NSF\'s iCorps program at USC.',
      category: 'Education',
      gifUrl: 'gifs/NSF+ICorps.gif'
    },
    {
      id: 'stem-success-summit',
      title: 'STEM Success Summit',
      partner: 'STEMedia',
      description: 'Justin co-produced an educational summit with STEMedia for thousands of STEM professionals featuring popular STEM leaders and figures across the globe.',
      category: 'Live Events',
      externalUrl: 'https://www.stemedia.com/experience/stem-success-summit',
      gifUrl: 'gifs/stem success trailer.gif'
    },
    {
      id: 'usa-science-fest',
      title: 'USA Science Festival',
      partner: 'USA Science & Engineering Festival',
      description: 'Justin served as official host and MC for 5 large-scale USA Science Fest Events, engaging thousands of attendees with interactive STEM demonstrations.',
      category: 'Live Events',
      gifUrl: 'gifs/USA Science Fest.gif'
    },
    {
      id: 'ai-cool-things',
      title: '3 Cool Things You Can Do with AI Today',
      partner: 'Fascinate Media',
      description: 'Justin shares three practical and exciting things you can do with AI right now.',
      category: 'Education',
      videoUrl: 'https://player.vimeo.com/video/1075550647',
      thumbnailUrl: 'https://vumbnail.com/1075550647.jpg'
    },
    {
      id: 'ai-assistants',
      title: 'AI Assistants and How They Can Help',
      partner: 'Fascinate Media',
      description: 'A breakdown of how AI assistants work and the ways they can boost your productivity.',
      category: 'Education',
      videoUrl: 'https://player.vimeo.com/video/1097189159',
      thumbnailUrl: 'https://vumbnail.com/1097189159.jpg'
    },
    {
      id: 'ai-agents',
      title: 'What Are AI Agents?',
      partner: 'Fascinate Media',
      description: 'Justin explains what AI agents are and why they matter for the future of work.',
      category: 'Education',
      videoUrl: 'https://player.vimeo.com/video/1074161713',
      thumbnailUrl: 'https://vumbnail.com/1074161713.jpg'
    },
    {
      id: 'ai-headshots',
      title: 'Are AI Headshots Good Enough Today?',
      partner: 'Fascinate Media',
      description: 'Testing whether AI-generated headshots are ready to replace professional photography.',
      category: 'Education',
      videoUrl: 'https://player.vimeo.com/video/1154892061',
      thumbnailUrl: 'https://vumbnail.com/1154892061.jpg'
    },
    {
      id: 'ai-social-clips',
      title: 'AI Can Edit Your Social Media Clips',
      partner: 'Fascinate Media',
      description: 'How AI tools can automatically edit and optimize your social media video content.',
      category: 'Education',
      videoUrl: 'https://player.vimeo.com/video/1154892200',
      thumbnailUrl: 'https://vumbnail.com/1154892200.jpg'
    },
    {
      id: 'ai-agents-replacing',
      title: 'AI Agents Replacing Assistants',
      partner: 'Fascinate Media',
      description: 'Exploring how AI agents are evolving beyond simple assistants into autonomous workers.',
      category: 'Education',
      videoUrl: 'https://player.vimeo.com/video/1154892514',
      thumbnailUrl: 'https://vumbnail.com/1154892514.jpg'
    },
    {
      id: 'ai-jobs-future',
      title: 'AI Enabled Jobs of the Future',
      partner: 'Fascinate Media',
      description: 'A look at the new careers and roles that AI is creating across industries.',
      category: 'Education',
      videoUrl: 'https://player.vimeo.com/video/1154892579',
      thumbnailUrl: 'https://vumbnail.com/1154892579.jpg'
    },
    {
      id: 'ai-context-eng',
      title: 'What Is Context Engineering?',
      partner: 'Fascinate Media',
      description: 'Justin breaks down the emerging discipline of context engineering for AI systems.',
      category: 'Education',
      videoUrl: 'https://player.vimeo.com/video/1154892831',
      thumbnailUrl: 'https://vumbnail.com/1154892831.jpg'
    },
    {
      id: 'ai-background',
      title: 'Replacing Any Background with AI',
      partner: 'Fascinate Media',
      description: 'How to use AI to seamlessly replace backgrounds in photos and videos.',
      category: 'Education',
      videoUrl: 'https://player.vimeo.com/video/1154892954',
      thumbnailUrl: 'https://vumbnail.com/1154892954.jpg'
    },
    {
      id: 'ai-face-upload',
      title: 'Watch This Before Uploading Your Face with AI Tools',
      partner: 'Fascinate Media',
      description: 'Important privacy and safety considerations before using AI face tools.',
      category: 'Education',
      videoUrl: 'https://player.vimeo.com/video/1154893086',
      thumbnailUrl: 'https://vumbnail.com/1154893086.jpg'
    },
    {
      id: 'ai-prompt-importance',
      title: "How Does AI Know What's Most Important in Your Prompt?",
      partner: 'Fascinate Media',
      description: 'Understanding how AI models parse and prioritize different parts of your prompts.',
      category: 'Education',
      videoUrl: 'https://player.vimeo.com/video/1154893202',
      thumbnailUrl: 'https://vumbnail.com/1154893202.jpg'
    }
  ];

  var categories = ['All', 'Series', 'Education', 'Branded Content', 'Broadcast', 'Live Events'];
  var currentCategory = 'All';

  /* ─── Render Productions Grid ─── */
  function renderProductions(cat) {
    var grid = document.getElementById('productions-grid');
    if (!grid) return;

    var filtered = cat === 'All' ? productions : productions.filter(function (p) {
      return p.category === cat;
    });

    grid.innerHTML = '';

    filtered.forEach(function (p) {
      var card = document.createElement('div');
      card.className = 'card animate-in';
      card.setAttribute('data-id', p.id);

      var imgSrc = p.gifUrl || p.thumbnailUrl || '';
      var mediaHTML;
      if (imgSrc) {
        mediaHTML = '<img src="' + imgSrc + '" alt="' + escapeHTML(p.title) + '" loading="lazy">';
      } else {
        mediaHTML = '<div class="card-placeholder"><span>' + escapeHTML(p.title) + '</span></div>';
      }

      var playHTML = '';
      if (p.videoUrl) {
        playHTML = '<div class="card-play"><div class="card-play-btn"><svg viewBox="0 0 24 24"><polygon points="8,5 19,12 8,19"/></svg></div></div>';
      }

      card.innerHTML =
        '<div class="card-media">' +
          mediaHTML +
          '<div class="card-overlay"></div>' +
          playHTML +
          '<span class="card-badge glass">' + escapeHTML(p.category) + '</span>' +
        '</div>' +
        '<div class="card-info">' +
          '<h3 class="card-title">' + escapeHTML(p.title) + '</h3>' +
          '<p class="card-partner">' + escapeHTML(p.partner) + '</p>' +
          '<p class="card-desc line-clamp-3">' + escapeHTML(p.description) + '</p>' +
        '</div>';

      card.addEventListener('click', function () {
        if (p.externalUrl) {
          window.open(p.externalUrl, '_blank', 'noopener,noreferrer');
        } else if (p.videoUrl) {
          openVideoModal(p);
        }
      });

      grid.appendChild(card);
    });

    // Trigger scroll reveal for new cards
    requestAnimationFrame(function () {
      revealOnScroll();
    });
  }

  function escapeHTML(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  /* ─── Category Filters ─── */
  function initFilters() {
    var container = document.getElementById('category-filters');
    if (!container) return;

    container.innerHTML = '';
    categories.forEach(function (c) {
      var btn = document.createElement('button');
      btn.className = 'category-btn' + (c === currentCategory ? ' is-active' : '');
      btn.textContent = c;
      btn.addEventListener('click', function () {
        currentCategory = c;
        // Update active state
        container.querySelectorAll('.category-btn').forEach(function (b) {
          b.classList.toggle('is-active', b.textContent === c);
        });
        renderProductions(c);
      });
      container.appendChild(btn);
    });
  }

  /* ─── Video Modal ─── */
  function openVideoModal(production) {
    var modal = document.getElementById('video-modal');
    var player = document.getElementById('video-player');
    var title = document.getElementById('video-modal-title');
    var partner = document.getElementById('video-modal-partner');

    title.textContent = production.title;
    partner.textContent = production.partner;
    player.innerHTML = '<iframe src="' + production.videoUrl + '?autoplay=1&title=0&byline=0&portrait=0" allow="autoplay; fullscreen; picture-in-picture" title="' + escapeHTML(production.title) + '"></iframe>';
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeVideoModal() {
    var modal = document.getElementById('video-modal');
    var player = document.getElementById('video-player');
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    setTimeout(function () { player.innerHTML = ''; }, 300);
  }

  /* ─── Reel Modal ─── */
  function openReel() {
    var modal = document.getElementById('reel-modal');
    var player = document.getElementById('reel-player');
    player.innerHTML = '<iframe src="https://player.vimeo.com/video/810371279?autoplay=1&title=0&byline=0&portrait=0" allow="autoplay; fullscreen; picture-in-picture" title="Production Reel"></iframe>';
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeReel() {
    var modal = document.getElementById('reel-modal');
    var player = document.getElementById('reel-player');
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    setTimeout(function () { player.innerHTML = ''; }, 300);
  }

  /* ─── Contact Modal ─── */
  function openContact() {
    var modal = document.getElementById('contact-modal');
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeContact() {
    var modal = document.getElementById('contact-modal');
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  /* ─── Scroll Reveal ─── */
  function revealOnScroll() {
    var elements = document.querySelectorAll('.animate-in');
    var windowHeight = window.innerHeight;
    elements.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < windowHeight * 0.88) {
        el.classList.add('is-visible');
      }
    });
  }

  var scrollTicking = false;
  window.addEventListener('scroll', function () {
    if (!scrollTicking) {
      window.requestAnimationFrame(function () {
        revealOnScroll();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  });

  /* ─── Mobile Nav ─── */
  function initMobileNav() {
    var toggle = document.getElementById('navbar-toggle');
    var mobile = document.getElementById('navbar-mobile');
    if (!toggle || !mobile) return;

    toggle.addEventListener('click', function () {
      var isOpen = mobile.classList.toggle('is-open');
      // Swap icon
      toggle.innerHTML = isOpen
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
    });

    mobile.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobile.classList.remove('is-open');
        toggle.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
      });
    });
  }

  /* ─── Init ─── */
  function init() {
    initFilters();
    renderProductions('All');
    initMobileNav();
    revealOnScroll();

    // Video modal close
    var videoModal = document.getElementById('video-modal');
    if (videoModal) {
      videoModal.addEventListener('click', function (e) {
        if (e.target === videoModal) closeVideoModal();
      });
    }
    var videoClose = document.getElementById('video-modal-close');
    if (videoClose) {
      videoClose.addEventListener('click', closeVideoModal);
    }

    // Reel modal
    var reelBtn = document.getElementById('watch-reel');
    if (reelBtn) reelBtn.addEventListener('click', openReel);

    var reelModal = document.getElementById('reel-modal');
    if (reelModal) {
      reelModal.addEventListener('click', function (e) {
        if (e.target === reelModal) closeReel();
      });
    }
    var reelClose = document.getElementById('reel-modal-close');
    if (reelClose) reelClose.addEventListener('click', closeReel);

    // Contact modal
    var contactBtn = document.getElementById('contact-btn');
    if (contactBtn) contactBtn.addEventListener('click', openContact);

    var contactModal = document.getElementById('contact-modal');
    if (contactModal) {
      contactModal.addEventListener('click', function (e) {
        if (e.target === contactModal) closeContact();
      });
    }
    var contactClose = document.getElementById('contact-modal-close');
    if (contactClose) contactClose.addEventListener('click', closeContact);

    // Escape key closes any open modal
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeVideoModal();
        closeReel();
        closeContact();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
