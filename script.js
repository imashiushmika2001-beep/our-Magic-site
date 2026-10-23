/* ================================================================
   IMASHI & MEEDUM · THE ENCHANTED INVITATION
   Vanilla JavaScript (no libraries, no backend, GitHub Pages-ready)
   ================================================================ */
(() => {
  "use strict";
  const cfg = window.WEDDING_CONFIG || {};
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const put = (selector, value) => $$(selector).forEach((el) => { el.textContent = String(value ?? ""); });
  const SVG_OPEN = '<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round">';
  const SVG_CLOSE = '</svg>';
  const ornament = '<path d="M18 83 Q50 65 82 83" stroke="#a88351" stroke-width="1.7"/><path d="M28 79 Q20 68 22 58 M72 79 Q80 68 78 58" stroke="#84926c" stroke-width="2"/><circle cx="26" cy="73" r="3.5" fill="#d5a0a5"/><circle cx="74" cy="73" r="3.5" fill="#d5a0a5"/>';
  const stroke = 'stroke="#7c845a" stroke-width="2.3"';
  // Original miniature line illustrations, one for each moment in the winding timeline.
  const icons = {
    welcome: `${SVG_OPEN}<path d="M18 75 V35 Q50 2 82 35 V75" ${stroke}/><path d="M28 75 V38 Q50 17 72 38 V75 M15 78 H85" stroke="#ae8555" stroke-width="2.8"/><path d="M12 40 Q28 14 47 23 M88 40 Q72 14 53 23" stroke="#8b9770" stroke-width="4"/><path d="M40 60 Q50 48 60 60 M40 60 Q50 70 60 60" stroke="#c49c8c" stroke-width="2"/>${ornament}${SVG_CLOSE}`,
    ceremony: `${SVG_OPEN}<path d="M14 80 V43 Q50 -1 86 43 V80" stroke="#b18a59" stroke-width="3"/><path d="M22 80 V43 Q50 12 78 43 V80" stroke="#75875e" stroke-width="2"/><path d="M14 44 Q25 21 40 25 Q53 11 65 25 Q79 25 87 45" stroke="#6e8457" stroke-width="7"/><path d="M10 80 H90 M27 76 Q50 63 73 76" stroke="#bc9d65" stroke-width="2.2"/><path d="M27 35 Q18 18 36 19 Q47 26 29 35 M70 32 Q83 16 89 32 Q86 46 70 32" fill="#d6a0a8" stroke="#a67e86" stroke-width="1.5"/><circle cx="50" cy="24" r="6" fill="#e7b5ba"/><circle cx="25" cy="45" r="5" fill="#f3d4bf"/><circle cx="78" cy="47" r="4.5" fill="#e5afb8"/>${ornament}${SVG_CLOSE}`,
    cocktail: `${SVG_OPEN}<path d="M20 20 L40 20 Q40 41 30 49 Q20 41 20 20 Z M60 20 H80 Q80 41 70 49 Q60 41 60 20 Z" fill="#ecd7ad80" stroke="#a17e4f" stroke-width="2"/><path d="M30 49 V72 M70 49 V72 M17 75 H43 M57 75 H83 M30 25 L35 32 M70 25 L65 32" stroke="#967245" stroke-width="2.4"/><path d="M23 12 Q31 5 39 13 M59 13 Q67 4 78 12" stroke="#889673" stroke-width="2.3"/>${ornament}${SVG_CLOSE}`,
    reception: `${SVG_OPEN}<path d="M12 48 L50 17 L88 48 V78 H12 Z" fill="#e8d6c184" stroke="#82916f" stroke-width="2"/><path d="M8 48 L50 12 L92 48 M50 17 V78 M12 48 L50 34 L88 48" stroke="#ae8957" stroke-width="2.4"/><path d="M24 49 Q32 59 40 49 Q48 59 56 49 Q64 59 76 49" stroke="#cfaa67" stroke-width="1.7"/><circle cx="30" cy="50" r="2.7" fill="#d7ad68"/><circle cx="50" cy="48" r="2.7" fill="#d7ad68"/><circle cx="70" cy="50" r="2.7" fill="#d7ad68"/>${ornament}${SVG_CLOSE}`,
    dinner: `${SVG_OPEN}<ellipse cx="50" cy="56" rx="37" ry="17" fill="#f7e8d6" stroke="#ae8a58" stroke-width="2"/><ellipse cx="50" cy="56" rx="22" ry="10" stroke="#abb28f" stroke-width="2"/><path d="M17 20 V61 M11 28 H22 M82 18 V64 M86 18 V30 M78 18 V30" stroke="#9b7e57" stroke-width="2.2"/><path d="M43 39 L39 28 L46 24 L50 28 L54 21 L61 28 L57 39" fill="#c9a4a6" stroke="#9b7758" stroke-width="1.5"/>${ornament}${SVG_CLOSE}`,
    dance: `${SVG_OPEN}<path d="M50 8 V22 M28 26 L19 17 M72 26 L81 17" stroke="#a98656" stroke-width="2"/><circle cx="50" cy="42" r="21" fill="#faf0db" stroke="#a7855c" stroke-width="2.2"/><path d="M29 42 H71 M34 29 H66 M34 55 H66 M43 22 V62 M57 22 V62" stroke="#b7a6a4" stroke-width="1"/><path d="M16 50 L21 53 L16 56 L11 53 Z M82 57 L87 60 L82 63 L77 60 Z M27 13 L30 16 L27 19 L24 16 Z" fill="#c69c66"/>${ornament}${SVG_CLOSE}`,
    farewell: `${SVG_OPEN}<path d="M18 60 L27 42 H73 L83 60 V74 H18 Z" fill="#9ea98d" stroke="#687853" stroke-width="2"/><path d="M31 43 L40 27 H62 L71 43 Z" fill="#ded9c4" stroke="#697758" stroke-width="2"/><path d="M35 43 L42 31 H60 L66 43 Z" fill="#bed2cd"/><circle cx="30" cy="76" r="8" fill="#f4e9d7" stroke="#6a6b58" stroke-width="3"/><circle cx="70" cy="76" r="8" fill="#f4e9d7" stroke="#6a6b58" stroke-width="3"/><path d="M18 57 H83 M49 46 V58" stroke="#b89462" stroke-width="2"/><path d="M48 55 Q53 47 58 55" stroke="#d6a0a7" stroke-width="3"/>${SVG_CLOSE}`
  };

  function textContent() {
    const one = cfg.bride || "Imashi";
    const two = cfg.groom || "Meedum";
    put('[data-one]', one);
    put('[data-two]', two);
    put('[data-names]', `${one} & ${two}`);
    put('[data-initials]', `${one[0]?.toUpperCase() || 'I'} & ${two[0]?.toUpperCase() || 'M'}`);
    const date = /^\d{4}-\d{2}-\d{2}$/.test(cfg.weddingDate || "") ? cfg.weddingDate : "2027-01-01";
    const [year, month, day] = date.split('-').map(Number);
    // Use UTC to avoid the viewer's local timezone changing the displayed day.
    const readable = new Intl.DateTimeFormat('en-GB', { day:'2-digit', month:'long', year:'numeric', timeZone:'UTC' }).format(new Date(Date.UTC(year,month-1,day)));
    put('[data-date]', readable);
    put('[data-year]', year);
    put('[data-message]', cfg.loveMessage || "Our favourite chapter begins together.");
    put('[data-ceremony-time]', cfg.ceremonyTime || "Time to be confirmed");
    put('[data-ceremony-venue]', cfg.ceremonyVenue || "Venue to be announced");
    put('[data-ceremony-address]', cfg.ceremonyAddress || "");
    put('[data-reception-time]', cfg.receptionTime || "Time to be confirmed");
    put('[data-reception-venue]', cfg.receptionVenue || "Venue to be announced");
    put('[data-reception-address]', cfg.receptionAddress || "");
    put('[data-dress-code]', cfg.dressCode || "Garden Formal");
    put('[data-dress-note]', cfg.dressNote || "Your presence is our loveliest gift.");
    const confirmed = Boolean(cfg.dateConfirmed);
    $$('[data-tentative]').forEach(el => el.hidden = confirmed);
    $$('[data-confirmed]').forEach(el => el.hidden = !confirmed);
    put('[data-count-note]', confirmed ? 'A little closer to forever, every single second ♡' : 'A magical countdown to our tentative date ♡');
    put('[data-details-note]', confirmed ? 'We cannot wait to celebrate with you.' : 'Times and venues shown are samples and will be updated once confirmed.');
    const map = $('#mapButton');
    if (map && /^https:\/\//i.test(cfg.googleMapsLink || '')) { map.href = cfg.googleMapsLink; map.hidden = false; }
    const music = $('#musicButton');
    const audio = $('#weddingAudio');
    if (music && audio && typeof cfg.musicFile === 'string' && cfg.musicFile.trim()) {
      audio.src = cfg.musicFile.trim(); music.hidden = false;
      music.addEventListener('click', async () => {
        if (audio.paused) {
          try { await audio.play(); music.setAttribute('aria-pressed', 'true'); $('#musicLabel').textContent = 'Pause'; }
          catch (error) { showToast('Add a playable audio file to assets/our-song.mp3 first.'); }
        } else { audio.pause(); music.setAttribute('aria-pressed', 'false'); $('#musicLabel').textContent = 'Music'; }
      });
    }
  }

  function particles() {
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;
    const petals = $('#petalField');
    const fireflies = $('#fireflyField');
    for (let i = 0; i < 23; i++) {
      const petal = document.createElement('span');
      petal.className = 'petal';
      petal.style.setProperty('--x', `${(i * 43 + i * i * 13) % 100}%`);
      petal.style.setProperty('--s', `${8 + i % 8 * 2}px`);
      petal.style.setProperty('--duration', `${13 + i % 8 * 2}s`);
      petal.style.setProperty('--delay', `${-2 * i % 22}s`);
      petal.style.setProperty('--drift', `${(i % 2 ? 1 : -1) * (80 + 9 * i)}px`);
      petal.style.setProperty('--rotate', `${i % 2 ? 560 : -740}deg`);
      petals.appendChild(petal);
    }
    for (let i=0;i<20;i++) {
      const firefly=document.createElement('span'); firefly.className='firefly';
      firefly.style.setProperty('--x', `${(i * 29 + 17) % 96}%`);
      firefly.style.setProperty('--y', `${(i * 31 + 23) % 90}%`);
      firefly.style.setProperty('--s', `${2 + i % 3 * 1.6}px`);
      firefly.style.setProperty('--duration', `${3 + i % 6}s`);
      firefly.style.setProperty('--delay', `${-(i % 9)}s`);
      fireflies.appendChild(firefly);
    }
  }

  let notificationTimeout;
  function showToast(message) {
    const toast=$('#toast');
    toast.textContent=message; toast.classList.add('show'); clearTimeout(notificationTimeout);
    notificationTimeout=setTimeout(() => toast.classList.remove('show'), 3500);
  }

  function openAnimation() {
    const opening=$('#opening');
    let opened=false;
    const reveal = () => {
      if (opened) return; opened=true;
      opening.classList.add('is-opening'); document.body.classList.remove('locked');
      setTimeout(() => { opening.hidden=true; opening.setAttribute('aria-hidden','true'); $('#pageTop a')?.focus({preventScroll:true}); }, 2050);
    };
    $('#openButton').addEventListener('click', reveal);
    // Accessible Escape shortcut (the button remains the primary interaction).
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !opened) reveal(); });
  }

  function createTimeline() {
    const parent=$('#journeyStops');
    const items=Array.isArray(cfg.timeline) ? cfg.timeline : [];
    parent.replaceChildren();
    for (let i=0; i<items.length; i++) {
      const data=items[i];
      const item=document.createElement('article'); item.className='journey-stop reveal';
      const bloom=document.createElement('div'); bloom.className='journey-stop__flower';bloom.setAttribute('aria-hidden','true');
      const iconWrap=document.createElement('div'); iconWrap.className='journey-stop__ornament'; iconWrap.setAttribute('aria-hidden','true');
      const icon=document.createElement('span'); icon.className='journey-stop__icon'; icon.innerHTML=icons[data.illustration] || icons.welcome; iconWrap.appendChild(icon);
      const body=document.createElement('div');body.className='journey-stop__body';
      const time=document.createElement('div');time.className='journey-stop__time';time.textContent=data.time || 'TBA';
      const title=document.createElement('h3');title.className='journey-stop__title';title.textContent=data.name || 'A beautiful moment';
      const desc=document.createElement('p');desc.className='journey-stop__description';desc.textContent=data.description || '';
      body.append(time,title,desc);item.append(bloom,body,iconWrap);parent.appendChild(item);
    }
  }

  let routeLength=0;
  function drawRoute() {
    const journey=$('#journey'); const svg=$('#journeyRoute'); const stops=$$('.journey-stop__ornament');
    if (stops.length < 2) return;
    const root=journey.getBoundingClientRect();
    const points=stops.map(stop => {const r=stop.getBoundingClientRect();return {x:r.left+r.width/2-root.left,y:r.top+r.height/2-root.top};});
    svg.setAttribute('viewBox',`0 0 ${root.width} ${root.height}`);
    let path=`M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)} `;
    for(let i=1;i<points.length;i++){
      const a=points[i-1],b=points[i]; const h=(b.y-a.y);
      // Curving, looping wedding-ribbon path: from one floral seal to the next.
      const c1x=a.x+(i%2?105:-105);const c2x=b.x+(i%2?-105:105);
      path+=`C ${c1x.toFixed(1)} ${(a.y+h*.38).toFixed(1)} ${c2x.toFixed(1)} ${(b.y-h*.38).toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)} `;
    }
    ['#journeyRouteGlow','#journeyRouteBase','#journeyRouteProgress'].forEach(s => $(s).setAttribute('d',path));
    const progress=$('#journeyRouteProgress'); routeLength=progress.getTotalLength(); progress.style.strokeDasharray=`${routeLength} ${routeLength}`;
    advanceRoute();
  }
  let routeScheduled=false;
  function advanceRoute() {
    const journey=$('#journey');if(!journey || !routeLength)return;
    const r=journey.getBoundingClientRect();
    const progress=Math.min(1,Math.max(0,(window.innerHeight*.68-r.top)/(r.height)));
    $('#journeyRouteProgress').style.strokeDashoffset=`${routeLength*(1-progress)}`;
  }
  function handleScroll() {
    const header=$('.site-header');header.classList.toggle('scrolled',window.scrollY>80);
    if(routeScheduled)return;routeScheduled=true;
    requestAnimationFrame(() => {advanceRoute();routeScheduled=false;});
  }

  function intersectionAnimations() {
    const sections=$$('.reveal');
    if (!('IntersectionObserver' in window)) {sections.forEach(el=>el.classList.add('visible'));return;}
    const observer=new IntersectionObserver((entries,io)=>{
      entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target);}});
    },{rootMargin:'0px 0px -20px 0px',threshold:.07});
    sections.forEach((el,i)=>{const siblings=el.parentElement?.querySelectorAll(':scope > .reveal');if(siblings&&siblings.length>1)el.style.transitionDelay=`${Math.min([...siblings].indexOf(el),4)*.095}s`;observer.observe(el);});
  }

  function countdown() {
    const date=cfg.weddingDate || '2027-01-01';
    const time=cfg.weddingTime24 || '17:00';
    const tz=cfg.timeZone || '+05:30';
    const target=new Date(`${date}T${time}:00${tz}`).getTime();
    function tick() {
      if(!Number.isFinite(target))return;
      const remaining=Math.max(0,Math.floor((target-Date.now())/1000));
      const d=Math.floor(remaining/86400),h=Math.floor(remaining%86400/3600),m=Math.floor(remaining%3600/60),s=remaining%60;
      $('#countDays').textContent=d;
      $('#countHours').textContent=String(h).padStart(2,'0');
      $('#countMinutes').textContent=String(m).padStart(2,'0');
      $('#countSeconds').textContent=String(s).padStart(2,'0');
      if(remaining===0 && cfg.dateConfirmed) put('[data-count-note]', 'Today is our beautiful day! ♡');
    }
    tick();setInterval(tick,1000);
  }
  function downloadCalendar() {
    const date=(cfg.weddingDate || '2027-01-01').replaceAll('-','');
    const time=(cfg.weddingTime24 || '17:00').replace(':','')+'00';
    const title=cfg.dateConfirmed ? `Wedding of ${cfg.bride} & ${cfg.groom}` : `Tentative Save the Date: ${cfg.bride} & ${cfg.groom}`;
    const description=cfg.dateConfirmed ? 'We cannot wait to celebrate with you!' : 'TENTATIVE DATE & TIME ONLY. Final details will be confirmed later.';
    const lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Our Enchanted Wedding//EN','BEGIN:VEVENT',`UID:${date}-${time}-imashi-meedum@example.invalid`,`DTSTAMP:${new Date().toISOString().replaceAll('-','').replaceAll(':','').replace(/\.\d{3}/,'')}`,
      `DTSTART:${date}T${time}`,`SUMMARY:${title}`,`DESCRIPTION:${description}`,'DURATION:PT4H','END:VEVENT','END:VCALENDAR'];
    const blob=new Blob([lines.join('\r\n')],{type:'text/calendar;charset=utf-8'});
    const url=URL.createObjectURL(blob); const link=document.createElement('a');link.href=url;link.download='Imashi-Meedum-Save-The-Date.ics';document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);
    showToast(cfg.dateConfirmed ? 'Save the date downloaded ♡' : 'Tentative date downloaded — remember to update it later ♡');
  }

  function init() {
    textContent();particles();createTimeline();openAnimation();intersectionAnimations();countdown();drawRoute();handleScroll();
    window.addEventListener('scroll',handleScroll,{passive:true});window.addEventListener('resize',drawRoute,{passive:true});
    window.addEventListener('load',drawRoute);document.fonts?.ready.then(drawRoute);
    $('#calendarButton').addEventListener('click',downloadCalendar);
    $('#backToTop').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
    // Avoid horizontal overflow on narrow devices, even with floral decor.
  }
  document.addEventListener('DOMContentLoaded',init);
})();
