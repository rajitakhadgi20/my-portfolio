import React, { useState, useEffect, useRef } from "react";


/* ── ASSETS ─────────────────────────────────────────────────── */
const A = {
  logoDark:    "/image/Black bg logo.png",
  logoLight:   "/image/White Bg Logo.png",
  heroBg:      "/image/Hero Section  bg (Black).png",
  heroBgLight: "/image/Hero Section bg (white).png",
  portrait:    "/image/Hero section my image.png",
  aboutFront:  "/image/About us front image.png",
  aboutFlip:   "/image/About us front image ( while flip).png",
  linkedin:    "https://www.figma.com/api/mcp/asset/d7d9ef5d-370c-42f7-bb37-cba7da5fb195",
  instagram:   "https://www.figma.com/api/mcp/asset/77437e6a-f26d-41ef-ab5c-238015ec5cef",
  dribbble:    "https://www.figma.com/api/mcp/asset/6a94ac26-b6df-43f5-bcb7-cae1bb2061b3",
  certL:       "/image/Basic of UI.png",
  certR:       "/image/Intro to UI.png",
  certC:       "/image/Web Studio.png",
  skFig:       "/image/Figma (B).png",
  skSkt:       "/image/Sketch (B).png",
  skRes:       "/image/User Rearch (B).png",
  skPro:       "/image/Prototype (B).png",
  skWeb:       "/image/Web Design (B).png",
  skWir:       "/image/Wireframing (B).png",
  skDes:       "/image/Design System (B).png",
  skHtm:       "/image/HTML & CSS (B).png",
  pGrn:  "/image/Before Greenhub.png",
  pHot:  "/image/Before Hotel booking.png",
  pThu:  "/image/Before Thulo help.png",
  pTrp:  "/image/Before trip.png",
  pDay:  "/image/Before daily ui.png",
  pNews: "/image/Before news.png",
  pPos:  "/image/Before Pos.png",
  pEco:  "/image/Before ecommerce.png",
  pHyd:  "/image/Before Hydropower.png",
  pHim:  "/image/Before Himalayan.png",
};

/* ── FIGMA LINKS ─────────────────────────────────────────────── */
const FIGMA = {
  greenhub:   "https://www.figma.com/design/6P680q8duatdA5w56fOmL8/GreenHub-Organic-Website?node-id=0-1&t=UceY262qTV3WHTHo-1",
  hotel:      "https://www.figma.com/design/aP6SP3iJAVSH3rA4JznvgU/Hotel-Booking?node-id=0-1&t=QSJxFgJNn4G727Nt-1",
  thulo:      "https://www.figma.com/design/uLdYPPUuHOT8UtyQlnLm88/Thulo-Help?node-id=0-1&t=xANCGXNWzgqFMHkr-1",
  trip:       "https://www.figma.com/design/r8sWLMJGL3hcd1qsn6Qvhe/Trips-Land-Travel-website?node-id=0-1&t=MTdbmC34F9PkMbWD-1",
  dailyui:    "https://www.figma.com/design/WJIQ1oMWyiSVe9pN5tQ1oQ/Daily-UI-Challenges?node-id=0-1&t=BkbzZ9rsSNnQQcqN-1",
  news:       "https://www.figma.com/design/eDGxaYVUycDTsq6eQU2JV5/News-Website?node-id=0-1&t=FDlqUKoWLyvarOsO-1",
  pos:        "https://www.figma.com/design/GaVancyImH68InsNg8LjoZ/Restaurant-Pos?node-id=0-1&t=uJpSpQkgz1s6YZPj-1",
  ecommerce:  "https://www.figma.com/design/6xhZWfV6TZS8qBjkBsZhOH/Ecommerce-Clothing--Cool-?node-id=0-1&t=OYeKz2NWxGfDnO2M-1",
  hydropower: "https://www.figma.com/design/Sqq5BgS33QWvblT5uQl3O3/Hydropower-Website?node-id=188-272&t=BkbzZ9rsSNnQQcqN-1",
  himalayan:  "https://www.figma.com/design/3nMOF4NZ55Cwggla5SHhe3/Redesign-Task?node-id=0-1&t=BkbzZ9rsSNnQQcqN-1",
};

/* ── THEME TOKENS ────────────────────────────────────────────── */
const DARK = {
  bg:           "#0b0013",
  bgSection:    "#0b0013",
  bgAlt:        "#0b0013",
  navBg:        "rgba(11,0,19,.92)",
  navBorder:    "rgba(255,255,255,.06)",
  navLink:      "#fff",
  navLinkHover: "#dbbbf2",
  navUnderline: "#F6E9FF",
  mobileMenu:   "rgba(11,0,19,.97)",
  mobileBorder: "#555",
  heroGreeting: "#BCBCBC",
  heroName:     "#F6E9FF",
  heroSub:      "#DADADA",
  heroDesc:     "#DADADA",
  heroSocial:   "#DBBBF2",
  sectionTitle: "#CEA4EB",
  accentTitle:  "#CEA4EB",
  bodyText:     "#fff",
  bodyTextAlt:  "#fff",
  statNum:      "#A65FD7",
  statLabel:    "#fff",
  divider:      "rgba(246,233,255,0.1)",
  cardBg:       "#1e1e1e",
  cardBorder:   "#555",
  cardTitle:    "#fff",
  cardDesc:     "#dadada",
  cardLink:     "#DBBBF2",
  cardLinkHover:"#fff",
  cardShadow:   "rgba(187,114,239,0.30)",
  skillBg:      "#1e1e1e",
  skillBgHov:   "#8b31ca",
  skillIconBg:  "#292929",
  skillName:    "#fff",
  skillSub:     "#818181",
  skillSubHov:  "#fbfbfb",
  skillAccent:  "#cea4eb",
  tickerBg:     "#0b0013",
  tickerText:   "#fff",
  certText:     "#fff",
  certTickStroke:"#A65FD7",
  contactText:  "#fff",
  contactLbl:   "#fbfbfb",
  contactInp:   "#272522",
  contactInpBorder:"#3d3a38",
  contactInpText:"#727272",
  sbBg:         "#1a1714",
  sbBorder:     "#555",
  sbText:       "#e9e9e9",
  sbBgHov:      "#2a2420",
  footerBorder: "rgba(238,238,238,.15)",
  footerText:   "#a2a2a2",
  footerIcon:   "#a2a2a2",
  breadcrumb:   "white",
  breadcrumbDot:"white",
  toggleBg:     "rgba(255,255,255,0.10)",
  toggleIcon:   "#ffffff",
  toggleBorder: "rgba(255,255,255,0.18)",
  moonIcon:     false,
  portraitBorder: "#ffffff",
  aboutBorder:    "#ffffff",
};

const LIGHT = {
  bg:           "#ffffff",
  bgSection:    "#ffffff",
  bgAlt:        "#FBF9FC",
  navBg:        "rgba(255,255,255,0.95)",
  navBorder:    "rgba(0,0,0,.06)",
  navLink:      "#18222E",
  navLinkHover: "#8B31CA",
  navUnderline: "#8B31CA",
  mobileMenu:   "rgba(255,255,255,.97)",
  mobileBorder: "#ddd",
  heroGreeting: "#464646",
  heroName:     "#0B0013",
  heroSub:      "#464646",
  heroDesc:     "#464646",
  heroSocial:   "#A65FD7",
  sectionTitle: "#7003BD",
  accentTitle:  "#7003BD",
  bodyText:     "#1E2A3A",
  bodyTextAlt:  "#1E2A3A",
  statNum:      "#7003BD",
  statLabel:    "#1E2A3A",
  divider:      "rgba(159,159,159,0.1)",
  cardBg:       "#FBFBFB",
  cardBorder:   "#E1E1E1",
  cardTitle:    "#464646",
  cardDesc:     "#727272",
  cardLink:     "#8B31CA",
  cardLinkHover:"#5a0297",
  cardTag:      "#E9D2F8",
  cardTagText:  "#5a0297",
  cardShadow:   "rgba(0,0,0,0.08)",
  skillBg:      "#F8F8F8",
  skillBgHov:   "#8b31ca",
  skillIconBg:  "#F0F0F0",
  skillName:    "#464646",
  skillSub:     "#727272",
  skillSubHov:  "#ffffff",
  skillAccent:  "#A65FD7",
  tickerBg:     "#fff",
  tickerText:   "#430271",
  certText:     "#1E2A3A",
  certTickStroke:"#430271",
  contactText:  "#1E2A3A",
  contactLbl:   "#0B0013",
  contactInp:   "#ffffff",
  contactInpBorder:"#BCBCBC",
  contactInpText:"#727272",
  sbBg:         "#ffffff",
  sbBorder:     "#BCBCBC",
  sbText:       "#1E2A3A",
  sbBgHov:      "#f3e8ff",
  footerBorder: "#BCBCBC",
  footerText:   "#646464",
  footerIcon:   "#646464",
  breadcrumb:   "#18222E",
  breadcrumbDot:"#18222E",
  toggleBg:     "rgba(178,175,175,0.20)",
  toggleIcon:   "#000000",
  toggleBorder: "rgba(75,75,75,0.24)",
  moonIcon:     true,
  portraitBorder: "#A65FD7",
  aboutBorder:    "#A65FD7",
};

/* ── ALL PROJECTS DATA ───────────────────────────────────────── */
const ALL_PROJECTS = [
  { title:"Greenhub Organic Website",    tags:["WEBSITE"],           desc:"An e-commerce platform promoting fresh organic products with a clean and sustainable shopping experience.", img:A.pGrn,  figma:FIGMA.greenhub   },
  { title:"Hotel Booking App",           tags:["MOBILE APP"],        desc:"A user-friendly hotel reservation app with smart filters, secure payments, and booking management.",        img:A.pHot,  figma:FIGMA.hotel      },
  { title:"Thulo Help App",              tags:["MOBILE APP"],        desc:"A service marketplace connecting customers with trusted local professionals for easy booking.",             img:A.pThu,  figma:FIGMA.thulo      },
  { title:"Trip Land Travel Website",    tags:["WEBSITE"],           desc:"A modern travel booking platform for exploring destinations, planning trips, and managing reservations.",    img:A.pTrp,  figma:FIGMA.trip       },
  { title:"Daily UI Challenges",         tags:["WEBSITE"],           desc:"A collection of modern UI design exercises focused on improving visual hierarchy and interface skills.",     img:A.pDay,  figma:FIGMA.dailyui    },
  { title:"News Website",                tags:["WEBSITE"],           desc:"A responsive digital news platform delivering categorized stories with clear navigation.",                  img:A.pNews, figma:FIGMA.news       },
  { title:"Restaurant POS System",       tags:["POS"],               desc:"An intuitive point-of-sale system for managing orders, payments, inventory, and sales efficiently.",        img:A.pPos,  figma:FIGMA.pos        },
  { title:"Ecommerce Clothing Website",  tags:["WEBSITE"],           desc:"Stylish online store with smart filters, product options, secure checkout, and bold streetwear design.",   img:A.pEco,  figma:FIGMA.ecommerce  },
  { title:"Hydropower Website",          tags:["WEBSITE"],           desc:"A clean industrial website highlighting hydropower products, electrical solutions, and major infrastructure.", img:A.pHyd, figma:FIGMA.hydropower },
  { title:"Himalayan Travel Website",    tags:["WEBSITE","REDESIGN"],desc:"A trekking website redesign enhancing user experience and booking flow with a clean, immersive interface.", img:A.pHim,  figma:FIGMA.himalayan  },
];

/* ── GLOBAL CSS ──────────────────────────────────────────────── */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Poppins:wght@500;700&family=Inter:wght@400;500;600&family=Roboto:wght@400;500&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{font-family:Inter,sans-serif;overflow-x:hidden;-webkit-font-smoothing:antialiased;}
img{display:block;max-width:100%;}
a{text-decoration:none;color:inherit;}
button{cursor:pointer;border:none;background:none;font:inherit;}
ul{list-style:none;padding:0;margin:0;}
.pf-root{width:100%;min-height:100vh;transition:background .4s ease;}
.pf-inner{width:100%;max-width:1440px;margin:0 auto;padding:0 80px;}
@keyframes tick{0%{transform:translateX(-50%);}100%{transform:translateX(0);}}
.tt{animation:tick 28s linear infinite;will-change:transform;}
.tt:hover{animation-play-state:paused;}
.rv{opacity:0;transform:translateY(36px);transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1);}
.rv.on{opacity:1;transform:none;}
.rl{opacity:0;transform:translateX(-40px);transition:opacity .75s cubic-bezier(.22,1,.36,1),transform .75s cubic-bezier(.22,1,.36,1);}
.rl.on{opacity:1;transform:none;}
.rr{opacity:0;transform:translateX(40px);transition:opacity .75s cubic-bezier(.22,1,.36,1) .15s,transform .75s cubic-bezier(.22,1,.36,1) .15s;}
.rr.on{opacity:1;transform:none;}
.bh{display:flex;align-items:center;justify-content:center;width:92px;height:32px;background:#8b31ca;border-radius:8px;overflow:hidden;position:relative;color:#fff;font-family:Inter,sans-serif;font-size:16px;font-weight:500;line-height:22px;transition:color .35s ease,transform .2s;flex-shrink:0;text-decoration:none;}
.bh span{position:relative;z-index:1;}
.bh::before{content:'';position:absolute;width:72px;height:72px;left:0;top:-20px;background:linear-gradient(90deg,#B3ABFF 0%,#C0B2FF 31%,#D7BCFF 70%,#F1C9FE 100%);border-radius:9999px;pointer-events:none;z-index:0;transform:translateX(-110%);transition:transform .4s ease,width .4s ease,height .4s ease;}
.bh:hover::before{transform:translateX(-12%);width:160px;height:72px;}
.bh:hover{color:#464646;transform:translateY(-1px);}
.bs{display:inline-flex;align-items:center;justify-content:center;height:32px;padding:5px 12px;background:#8b31ca;border-radius:8px;color:#fff;font-family:Inter,sans-serif;font-size:16px;font-weight:500;line-height:22px;flex-shrink:0;position:relative;text-decoration:none;overflow:hidden;width:104px;transition:width .4s cubic-bezier(.22,1,.36,1),transform .2s;}
.bs:hover{width:68px;transform:translateY(-1px);}
.bs .bs-inner{display:inline-flex;align-items:center;gap:8px;transition:transform .4s cubic-bezier(.22,1,.36,1),opacity .3s ease;transform:translateX(0);opacity:1;white-space:nowrap;}
.bs:hover .bs-inner{transform:translateX(130%);opacity:0;}
.bs .bs-outside-arr{position:absolute;left:50%;top:50%;transform:translate(calc(-50% - 80px),-50%);display:inline-flex;align-items:center;justify-content:center;transition:transform .4s cubic-bezier(.22,1,.36,1);}
.bs:hover .bs-outside-arr{transform:translate(-50%,-50%);}
.bsub{display:flex;align-items:center;justify-content:center;width:100%;height:40px;background:#8b31ca;border-radius:12px;border:none;cursor:pointer;color:#fff;font-family:Roboto,sans-serif;font-size:16px;font-weight:500;line-height:20px;position:relative;overflow:hidden;transition:color .35s ease,transform .2s;}
.bsub::before{content:'';position:absolute;width:72px;height:72px;left:0;top:-16px;background:linear-gradient(90deg,#B3ABFF 0%,#C0B2FF 31%,#D7BCFF 70%,#F1C9FE 100%);border-radius:9999px;pointer-events:none;transform:translateX(-110%);transition:transform .4s ease,width .4s ease,height .4s ease;z-index:0;}
.bsub span{position:relative;z-index:1;}
.bsub:hover::before{transform:translateX(-12%);width:608px;height:72px;}
.bsub:hover{color:#464646;transform:translateY(-1px);}
.btn-dlcv{position:relative;overflow:hidden;transition:color .35s ease,transform .2s;}
.btn-dlcv::before{content:'';position:absolute;width:72px;height:72px;left:0;top:-15px;background:linear-gradient(90deg,#B3ABFF 0%,#C0B2FF 31%,#D7BCFF 70%,#F1C9FE 100%);border-radius:9999px;pointer-events:none;transform:translateX(-110%);transition:transform .35s ease,width .35s ease,height .35s ease;z-index:0;}
.btn-dlcv span{position:relative;z-index:1;}
.btn-dlcv svg{position:relative;z-index:1;}
.btn-dlcv:hover::before{transform:translateX(-25%);width:283px;height:72px;}
.btn-dlcv:hover{color:#464646!important;}
.pc{transition:transform .3s cubic-bezier(.22,1,.36,1),box-shadow .3s ease,border-color .3s ease;}
.pc:hover{transform:translateY(-6px);}
.ham{display:none;flex-direction:column;justify-content:center;align-items:center;gap:5px;width:36px;height:36px;cursor:pointer;background:none;border:none;padding:4px;flex-shrink:0;}
.ham span{display:block;width:22px;height:2px;border-radius:2px;transition:transform .3s,opacity .3s;}
.flip-card{perspective:1000px;}
.flip-card-inner{width:100%;height:100%;position:relative;transform-style:preserve-3d;transition:transform 0.7s cubic-bezier(.22,1,.36,1);}
.flip-card:hover .flip-card-inner{transform:rotateY(180deg);}
.flip-front,.flip-back{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:12px;overflow:hidden;}
.flip-back{transform:rotateY(180deg);}
.about-g{display:grid;grid-template-columns:337px 1fr;gap:63px;align-items:start;}
.about-ph{width:337px;height:452px;}
.prow{display:flex;gap:25px;}
.pcard{flex:1 1 0;min-width:0;}
.ap-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:25px;}
.srow{display:flex;gap:33px;align-items:stretch;overflow-x:auto;overflow-y:visible;}
.srow::-webkit-scrollbar{display:none;}
.sk-row1{justify-content:center;width:100%;}
.sk-row2{justify-content:flex-start;}
.scard{flex:0 0 230px!important;width:230px!important;min-width:230px!important;max-width:230px!important;height:180px!important;min-height:180px!important;max-height:180px!important;border-radius:12px;overflow:hidden!important;cursor:pointer;box-sizing:border-box!important;}
.cert-g{display:grid;grid-template-columns:1fr 1fr;gap:53px;align-items:center;}
.cont-g{display:grid;grid-template-columns:55% 1fr;gap:60px;align-items:start;}
@media(max-width:1200px){.pf-inner{padding:0 40px;}.nav-ml{margin-left:60px!important;}.about-g{grid-template-columns:260px 1fr!important;gap:40px!important;}.about-ph{width:260px!important;height:350px!important;}.cont-g{grid-template-columns:1fr 1fr!important;gap:40px!important;}.cert-g{grid-template-columns:1fr 1fr!important;gap:30px!important;}.ap-grid{grid-template-columns:repeat(3,1fr)!important;}}
@media(max-width:1024px){.dnav{display:none!important;}.ham{display:flex!important;}.mmenu{display:flex!important;}.prow{flex-wrap:wrap!important;}.pcard{flex:0 0 calc(50% - 13px)!important;}.ap-grid{grid-template-columns:repeat(2,1fr)!important;}.srow{gap:20px!important;}.scard{flex:0 0 200px!important;width:200px!important;min-width:200px!important;max-width:200px!important;}}
@media(min-width:1025px){.ham{display:none!important;}.mmenu{display:none!important;}}
@media(max-width:900px){.pf-inner{padding:0 24px;}.about-g{grid-template-columns:1fr!important;}.about-ph{width:100%!important;height:280px!important;}.prow{flex-direction:column!important;align-items:stretch!important;}.pcard{flex:none!important;max-width:400px!important;margin:0 auto!important;}.cert-g{grid-template-columns:1fr!important;}.cert-v{display:none!important;}.cont-g{grid-template-columns:1fr!important;gap:40px!important;}.frow{flex-direction:column!important;}.skills-gap{gap:20px!important;}.scard{flex:0 0 180px!important;width:180px!important;}}
@media(max-width:768px){.ap-grid{grid-template-columns:repeat(2,1fr)!important;gap:16px!important;}.scard{flex:0 0 160px!important;width:160px!important;height:180px!important;}}
@media(max-width:600px){.pf-inner{padding:0 20px;}.prow{gap:16px!important;}.pcard{max-width:100%!important;}.ap-grid{grid-template-columns:1fr!important;}.scard{flex:0 0 150px!important;width:150px!important;height:180px!important;}}
`;

/* ── HOOKS ───────────────────────────────────────────────────── */
function useReveal(cls) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.classList.add(cls);
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("on"); obs.unobserve(el); } },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ── SVGs ────────────────────────────────────────────────────── */
const ArrowRight = ({ color }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink:0 }}>
    <path d="M3 8h10M9 4l4 4-4 4" stroke={color||"currentColor"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const SunSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/>
    <line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/>
    <line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/>
    <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
    <line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/><line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/>
  </svg>
);
const MoonSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);
const CopyrightIcon = ({ color }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="8.5" stroke={color||"#a2a2a2"} strokeWidth="1.2"/>
    <path d="M12.5 8a3 3 0 1 0 0 4" stroke={color||"#a2a2a2"} strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);
const TickIcon = ({ color }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink:0 }}>
    <circle cx="9" cy="9" r="8" stroke={color||"#A65FD7"} strokeWidth="1.5"/>
    <path d="M5.5 9.5l2.5 2.5 4.5-5" stroke={color||"#A65FD7"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ── THEME TOGGLE BUTTON ─────────────────────────────────────── */
function ThemeToggleBtn({ tk, toggleTheme, className="" }) {
  const [hov, setHov] = useState(false);
  const isLight = tk.moonIcon;
  return (
    <button aria-label="Toggle theme" className={className}
      onClick={toggleTheme}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        width:32, height:32, borderRadius:"50%",
        background: tk.toggleBg,
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        display:"flex", alignItems:"center", justifyContent:"center",
        border:`1px solid ${tk.toggleBorder}`, cursor:"pointer", flexShrink:0,
        position:"relative", overflow:"hidden",
        transform: hov ? "scale(1.08) rotate(18deg)" : "scale(1) rotate(0deg)",
        transition:"transform .3s ease, background .3s ease",
        color: tk.toggleIcon,
      }}>
      <span style={{ position:"relative", zIndex:1, width:20, height:20, display:"flex", alignItems:"center", justifyContent:"center" }}>
        {isLight ? <MoonSVG/> : <SunSVG/>}
      </span>
    </button>
  );
}

/* ── NAVBAR ──────────────────────────────────────────────────── */
function Navbar({ open, setOpen, page, setPage, tk, toggleTheme }) {
  const [pastHero, setPastHero] = useState(false);
  const [activeSection, setActive] = useState("home");
  const [ind, setInd] = useState({ left:0, width:0, ready:false });
  const navRef = useRef(null);
  const linkRefs = useRef({});

  const LINKS = [
    { label:"Home",        href:"#home",         id:"home" },
    { label:"About",       href:"#about",        id:"about" },
    { label:"Projects",    href:"#projects",     id:"projects" },
    { label:"Skills",      href:"#skills",       id:"skills" },
    { label:"Certificate", href:"#certificates", id:"certificates" },
    { label:"Contact",     href:"#contact",      id:"contact" },
  ];

  useEffect(() => {
    const fn = () => setPastHero(window.scrollY > 680);
    window.addEventListener("scroll", fn, { passive:true }); fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (page === "projects") { setActive("projects"); return; }
    const ids = LINKS.map(l => l.id);
    const update = () => {
      const y = window.scrollY + 80; let cur = ids[0];
      for (const id of ids) { const el = document.getElementById(id); if (el && el.offsetTop <= y) cur = id; }
      setActive(cur);
    };
    window.addEventListener("scroll", update, { passive:true }); update();
    return () => window.removeEventListener("scroll", update);
  }, [page]);

  useEffect(() => {
    const nav = navRef.current; const link = linkRefs.current[activeSection];
    if (!nav || !link) return;
    const nr = nav.getBoundingClientRect(); const lr = link.getBoundingClientRect();
    setInd({ left: lr.left - nr.left + (lr.width - 49) / 2, width:49, ready:true });
  }, [activeSection, pastHero]);

  const showNav = page === "projects" ? true : pastHero;

  return (
    <>
      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:1000,
        opacity: showNav ? 1 : 0,
        pointerEvents: showNav ? "auto" : "none",
        transition:"opacity 400ms ease, background .4s ease",
        height:55, display:"flex", alignItems:"center", justifyContent:"space-between",
        padding:"0 80px",
        background: tk.navBg,
        backdropFilter:"blur(12px)", WebkitBackdropFilter:"blur(12px)",
        boxShadow:`0 1px 0 ${tk.navBorder}`,
      }}>
        <div style={{ display:"flex", alignItems:"center" }}>
          <a href="#home" aria-label="Home" onClick={() => setPage("home")}
            style={{ width:63, height:40, overflow:"hidden", flexShrink:0, display:"block" }}>
            <img src={tk.moonIcon ? A.logoLight : A.logoDark} alt="RK" style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
          </a>
          <div ref={navRef} className="dnav nav-ml"
            style={{ display:"flex", alignItems:"center", marginLeft:255, position:"relative" }}>
            {LINKS.map(l => (
              <a key={l.label} href={l.href}
                ref={el => { linkRefs.current[l.id] = el; }}
                onClick={() => { if (l.id !== "projects") setPage("home"); }}
                style={{
                  position:"relative", display:"flex", alignItems:"center", justifyContent:"center",
                  padding:"7px 17.756px", height:36, color: tk.navLink,
                  fontFamily:"Inter,sans-serif", fontSize:16, fontWeight:400, lineHeight:"22px",
                  whiteSpace:"nowrap", transition:"color .2s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = tk.navLinkHover}
                onMouseLeave={e => e.currentTarget.style.color = tk.navLink}
              >{l.label}</a>
            ))}
            <span style={{
              position:"absolute", bottom:1, left:ind.left, width:ind.width, height:2,
              background: tk.navUnderline, borderRadius:3,
              opacity: ind.ready ? 1 : 0,
              transition: ind.ready ? "left 500ms cubic-bezier(.34,1.1,.64,1), opacity 300ms ease" : "none",
              pointerEvents:"none",
            }}/>
          </div>
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:16 }}>
          <ThemeToggleBtn tk={tk} toggleTheme={toggleTheme} className="dnav"/>
          <a href="#contact" className="bh dnav" onClick={() => setPage("home")}><span>Hire Me</span></a>
          <button className="ham" onClick={() => setOpen(o => !o)}
            aria-expanded={open} aria-controls="mmenu" aria-label="Menu">
            <span style={{ background:tk.navLink, transform: open ? "translateY(7px) rotate(45deg)" : "none" }}/>
            <span style={{ background:tk.navLink, opacity: open ? 0 : 1 }}/>
            <span style={{ background:tk.navLink, transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }}/>
          </button>
        </div>
      </nav>
      <div id="mmenu" className="mmenu" style={{
        position:"fixed", top:55, left:0, right:0, zIndex:999,
        background: tk.mobileMenu, backdropFilter:"blur(12px)",
        borderTop:`1px solid ${tk.mobileMenuBorder||tk.cardBorder}`, flexDirection:"column",
        maxHeight: open ? 400 : 0, overflow:"hidden",
        padding: open ? "16px 24px" : "0 24px",
        transition:"max-height .3s, padding .3s", display:"flex", gap:4,
      }}>
        {[...LINKS, { label:"Hire Me", href:"#contact", id:"hire" }].map((l) => (
          <a key={l.label} href={l.href}
            onClick={() => { setOpen(false); if (l.id !== "projects") setPage("home"); }}
            style={{
              display:"block", padding:"12px 0", fontSize:16,
              color: l.id === "hire" ? "#8B31CA" : activeSection === l.id ? "#8B31CA" : tk.navLink,
              borderBottom: l.id === "hire" ? "none" : `1px solid ${tk.divider}`,
              marginTop: l.id === "hire" ? 8 : 0,
              fontWeight: activeSection === l.id ? 500 : 400,
              transition:"color .2s",
            }}>{l.label}</a>
        ))}
      </div>
    </>
  );
}

/* ── PHOTO CARD ──────────────────────────────────────────────── */
function PhotoCard({ isV2, T, tk }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const onMouseMove = (e) => {
    const card = cardRef.current; if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    card.style.transform = `perspective(900px) rotateX(${-(y-0.5)*10}deg) rotateY(${(x-0.5)*10}deg) scale(1.02)`;
    if (glowRef.current) glowRef.current.style.background =
      `radial-gradient(180px circle at ${x*100}% ${y*100}%, rgba(215,188,255,0.55) 0%, transparent 70%)`;
  };
  const onMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
    if (glowRef.current) glowRef.current.style.background = "transparent";
    setHovered(false);
  };

  return (
    <div style={{ position:"absolute", left:924, top:184, width:308, height:413,
      opacity: isV2?1:0, transform: isV2?"translateX(0)":"translateX(60px) scale(0.95)",
      transition:`opacity ${T}, transform ${T}`, transitionDelay:"150ms", zIndex:5 }}>
      <div ref={cardRef} onMouseMove={onMouseMove} onMouseEnter={() => setHovered(true)} onMouseLeave={onMouseLeave}
        style={{
          width:"100%", height:"100%", borderRadius:16,
          border:`4px solid ${tk.portraitBorder}`,
          overflow:"hidden", position:"relative", cursor:"default",
          transition:"transform 0.2s ease-out, border-color .4s ease", transformStyle:"preserve-3d", willChange:"transform"
        }}>
        <img src={A.portrait} alt="Rajita Khadgi" style={{ width:"100%",height:"100%",objectFit:"cover",display:"block" }}/>
        <div style={{ position:"absolute",inset:0,background:"rgba(0,0,0,0.22)",pointerEvents:"none" }}/>
        <div ref={glowRef} style={{ position:"absolute",inset:0,background:"transparent",pointerEvents:"none",
          transition: hovered?"background 0.05s linear":"background 0.4s ease", zIndex:2,mixBlendMode:"screen" }}/>
        <div style={{ position:"absolute",inset:0,borderRadius:14,
          boxShadow: hovered?"inset 0 0 0 1px rgba(215,188,255,0.5), 0 0 40px rgba(166,95,215,0.4)":"none",
          pointerEvents:"none", transition:"box-shadow 0.3s ease", zIndex:3 }}/>
        <div style={{ position:"absolute",left:15,top:334,width:279,padding:"10px 12px",
          background:"rgba(255,255,255,0.14)",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",
          borderRadius:8,border:"1px solid rgba(255,255,255,0.12)",
          display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:4 }}>
          <div style={{ display:"flex",alignItems:"center",gap:9 }}>
            <div style={{ width:33,height:33,borderRadius:"50%",background:"linear-gradient(135deg,#a65fd7,#5a0297)",flexShrink:0,overflow:"hidden" }}>
              <img src={A.portrait} alt="" style={{ width:"100%",height:"100%",objectFit:"cover" }}/>
            </div>
            <div style={{ display:"flex",flexDirection:"column",gap:3 }}>
              <p style={{ fontFamily:"Inter",fontSize:12,fontWeight:600,lineHeight:"16px",color:"#FBFBFB",letterSpacing:"0.3px" }}>RAJITA KHADGI</p>
              <div style={{ display:"flex",alignItems:"center",gap:4 }}>
                <div style={{ width:6,height:6,borderRadius:"50%",background:"#4ade80",flexShrink:0 }}/>
                <p style={{ fontFamily:"Inter",fontSize:10,fontWeight:400,lineHeight:"14px",color:"#E1E1E1" }}>Online</p>
              </div>
            </div>
          </div>
          <a href="#contact" style={{ height:28,padding:"4px 10px",background:"rgba(255,255,255,0.20)",borderRadius:7,display:"flex",alignItems:"center",cursor:"pointer",textDecoration:"none" }}>
            <p style={{ fontFamily:"Inter",fontSize:11,fontWeight:600,lineHeight:"18px",color:"white",whiteSpace:"nowrap" }}>Contact Me</p>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── HERO SOCIAL ICONS ───────────────────────────────────────── */
const LinkedInSVG = ({size=28}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/></svg>;
const DribbbleSVG = ({size=28}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.424 25.424 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.814 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.686 8.686 0 0 1 12 3.475zm-3.633.803a53.9 53.9 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 0 1-2.19-5.705zM12 20.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.32 35.32 0 0 1 1.823 6.475 8.4 8.4 0 0 1-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 0 1-3.655 5.715z"/></svg>;
const InstagramSVG = ({size=28}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2A5.8 5.8 0 0 1 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2M7.6 4A3.6 3.6 0 0 0 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4A3.6 3.6 0 0 0 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6M17.25 5.5A1.25 1.25 0 0 1 18.5 6.75A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75A1.25 1.25 0 0 1 17.25 5.5M12 7A5 5 0 0 1 17 12A5 5 0 0 1 12 17A5 5 0 0 1 7 12A5 5 0 0 1 12 7M12 9A3 3 0 0 0 9 12A3 3 0 0 0 12 15A3 3 0 0 0 15 12A3 3 0 0 0 12 9Z"/></svg>;

function HeroSocialIcon({ label, Icon, color, url }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display:"flex",alignItems:"center",justifyContent:"center",width:40,height:40,flexShrink:0,
        color: hov ? (color==="light" ? "#5a0297" : "#ffffff") : (color==="light" ? "#A65FD7" : "#DBBBF2"),
        transform: hov ? "translateY(-3px)" : "translateY(0)",
        transition:"color .2s ease, transform .2s ease" }}>
      <Icon size={28}/>
    </a>
  );
}

/* ── HERO ────────────────────────────────────────────────────── */
function Hero({ setPage, skipAnimation, onAnimDone, tk, toggleTheme }) {
  const [v, setV] = useState(skipAnimation ? 2 : 1);
  useEffect(() => {
    if (skipAnimation) return;
    const t = setTimeout(() => { setV(2); onAnimDone?.(); }, 1000);
    return () => clearTimeout(t);
  }, [skipAnimation]);

  const isV2 = v === 2;
  const T = "1000ms cubic-bezier(0.37, 0, 0.63, 1)";
  const V1_TOP = "calc(50% - 137px)";
  const V1_LEFT = 143;
  const isLight = tk.moonIcon;

  return (
    <section id="home" style={{ position:"relative",height:724,overflow:"hidden",
      background: isLight ? "#ffffff" : "#160126" }}>
      {!isLight && <img src={A.heroBg} alt="" style={{ position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",pointerEvents:"none" }}/>}
      {isLight && <img src={A.heroBgLight} alt="" style={{ position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",pointerEvents:"none" }}/>}

      <div style={{
        position:"absolute",top:20,left:0,right:0,height:55,
        display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 80px",
        opacity: isV2?1:0, transform: isV2?"translateY(0)":"translateY(-16px)",
        transition:`opacity ${T}, transform ${T}`, transitionDelay:"200ms",
        pointerEvents: isV2?"auto":"none", zIndex:10,
      }}>
        <div style={{ display:"flex",alignItems:"center",gap:300 }}>
          <a href="#home" style={{ width:63,height:40,display:"block",flexShrink:0,overflow:"hidden" }}>
            <img src={tk.moonIcon ? A.logoLight : A.logoDark} alt="RK" style={{ width:"100%",height:"100%",objectFit:"cover" }}/>
          </a>
          <div style={{ display:"flex",alignItems:"center" }}>
            {["Home","About","Projects","Skills","Certificate","Contact"].map((l,i) => (
              <a key={l} href={`#${l.toLowerCase()}`} style={{
                position:"relative",display:"flex",alignItems:"center",justifyContent:"center",
                padding:"8px 16px",height:36,color:tk.navLink,
                fontFamily:"Inter,sans-serif",fontSize:16,fontWeight:400,lineHeight:"22px",
                whiteSpace:"nowrap",textDecoration:"none",
              }}>
                {l}
                {i===0 && <span style={{ position:"absolute",bottom:1,left:"50%",transform:"translateX(-50%)",width:49,height:2,background:tk.navUnderline,borderRadius:3 }}/>}
              </a>
            ))}
          </div>
        </div>
        <div style={{ display:"flex",alignItems:"center",gap:16 }}>
          <ThemeToggleBtn tk={tk} toggleTheme={toggleTheme}/>
          <a href="#contact" className="bh"><span style={{ position:"relative",zIndex:1 }}>Hire Me</span></a>
        </div>
      </div>

      <p style={{
        position:"absolute",left:V1_LEFT,
        top: isV2 ? 268 : V1_TOP,
        fontFamily:"'Cormorant Garamond',serif",fontWeight:700,
        fontSize: isV2?32:56, lineHeight: isV2?"42px":"68px",
        letterSpacing: isV2?"1.5px":"0px",
        color: tk.heroGreeting,
        transition:`top ${T}, font-size ${T}, line-height ${T}, letter-spacing ${T}`,
        zIndex:5,pointerEvents:"none",willChange:"top,font-size",
      }}>Hello, I&apos;m</p>

      <p style={{
        position:"absolute",left:V1_LEFT,
        top: isV2 ? 310 : `calc(${V1_TOP} + 68px)`,
        fontFamily:"'Poppins',sans-serif",fontWeight:700,
        fontSize: isV2?46:84, lineHeight: isV2?"54px":"91px",
        color: tk.heroName,
        transition:`top ${T}, font-size ${T}, line-height ${T}`,
        zIndex:5,pointerEvents:"none",willChange:"top,font-size",
      }}>RAJITA KHADGI</p>

      <p style={{
        position:"absolute",left:V1_LEFT,top:`calc(${V1_TOP} + 68px + 91px)`,
        width:"min(945px, calc(100vw - 163px))",
        fontFamily:"'Cormorant Garamond',serif",fontWeight:700,
        fontSize:68,lineHeight:"88px",
        color: isLight ? "#464646" : "#DADADA",
        opacity: isV2?0:1, transform: isV2?"translateY(-8px)":"translateY(0)",
        transition:`opacity ${T}, transform ${T}`,
        zIndex:5,pointerEvents:"none",
      }}>Welcome to my Portfolio Website</p>

      <div style={{
        position:"absolute",left:V1_LEFT,top:376,width:615,
        display:"flex",flexDirection:"column",alignItems:"flex-start",
        opacity: isV2?1:0, transform: isV2?"translateY(0)":"translateY(18px)",
        transition:`opacity ${T}, transform ${T}`, transitionDelay:"350ms",
        zIndex:5,pointerEvents: isV2?"auto":"none",
      }}>
        <p style={{ color:tk.heroSub,fontSize:22,fontFamily:"'Poppins',sans-serif",fontWeight:700,lineHeight:"26px",letterSpacing:"0.5px",marginBottom:20 }}>UI/UX Designer</p>
        <p style={{ width:615,color:tk.heroDesc,fontSize:16,fontFamily:"Inter,sans-serif",fontWeight:400,lineHeight:"22px",marginBottom:22 }}>
          Crafting seamless user experiences through thoughtful design, visual precision, and user-centered thinking to create intuitive, impactful interfaces.
        </p>
        <div style={{ display:"flex",alignItems:"center",gap:4,marginBottom:28 }}>
          {[
            ["LinkedIn",  LinkedInSVG,  "https://www.linkedin.com/in/rajita-khadgi-bbb16b30b"],
            ["Dribble",   DribbbleSVG,  "https://dribbble.com/Raajiii"],
            ["Instagram", InstagramSVG, "https://www.instagram.com/rajita_shahi?igsh=czhuNm5oaWd3MXZ2"],
          ].map(([label,Icon,url]) => (
            <HeroSocialIcon key={label} label={label} Icon={Icon} color={isLight?"light":"dark"} url={url}/>
          ))}
        </div>
        <a href="/image/Rajita Khadgi_Resume.pdf" download="Rajita Khadgi_Resume.pdf" className="btn-dlcv" style={{
          width:178,height:40,background:"#8b31ca",borderRadius:8,
          display:"inline-flex",alignItems:"center",paddingLeft:20,gap:10,
          color:"white",fontFamily:"Inter,sans-serif",fontSize:16,fontWeight:500,
          textDecoration:"none",flexShrink:0,
        }}
        onMouseOver={e => e.currentTarget.style.transform="translateY(-1px)"}
        onMouseOut={e => e.currentTarget.style.transform="none"}>
          <span style={{ position:"relative",zIndex:1 }}>Download CV</span>
          <svg style={{ position:"relative",zIndex:1,flexShrink:0 }} width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 3v13M7 11l5 5 5-5M3 21h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      <PhotoCard isV2={isV2} T={T} tk={tk}/>
    </section>
  );
}

/* ── TICKER ──────────────────────────────────────────────────── */
const TICKS = ["WEB DESIGN","MOBILE APP DESIGN","PRODUCT DESIGN","DASHBOARD  DESIGN","INTERACTIVE  DESIGN"];
function Ticker({ tk }) {
  const items = [...TICKS, ...TICKS];
  return (
    <div style={{ overflow:"hidden",width:"100%",background:tk.tickerBg,height:77,display:"flex",alignItems:"center",transition:"background .4s ease" }}>
      <div className="tt" style={{ display:"flex",gap:32,alignItems:"center",whiteSpace:"nowrap",width:"max-content" }}>
        {items.map((t,i) => (
          <React.Fragment key={i}>
            <span style={{ fontFamily:"'Cormorant Garamond',serif",fontWeight:700,fontSize:22,lineHeight:"26px",letterSpacing:"0.5px",color:tk.tickerText,flexShrink:0,transition:"color .4s" }}>{t}</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink:0 }}>
              <path d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z" fill={tk.tickerText} opacity="0.7"/>
            </svg>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/* ── ABOUT ───────────────────────────────────────────────────── */
const STATS = [
  { num:1, suffix:"+", label:"YEARS OF EXPERIENCE" },
  { num:8, suffix:"+", label:"PROJECTS COMPLETED" },
  { num:4, suffix:"+", label:"SATISFIED CLIENTS" },
];

function About({ tk }) {
  const photo = useReveal("rl");
  const content = useReveal("rr");
  const statsRef = useRef(null);
  const [counts, setCounts] = useState([0,0,0]);

  useEffect(() => {
    const el = statsRef.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; obs.unobserve(el);
      const targets = STATS.map(s => s.num);
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / 1800, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setCounts(targets.map(t => Math.floor(ease * t)));
        if (p < 1) requestAnimationFrame(tick); else setCounts(targets);
      };
      requestAnimationFrame(tick);
    }, { threshold:0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" style={{ background:tk.bgAlt,overflow:"hidden",padding:"100px 0 120px",transition:"background .4s ease" }}>
      <div className="pf-inner">
        <div className="about-g">
          <div ref={photo} className="about-ph flip-card" style={{ flexShrink:0 }}>
            <div className="flip-card-inner">
              <div className="flip-front" style={{ border:`4px solid ${tk.aboutBorder}`, transition:"border-color .4s" }}>
                <img src={A.aboutFront} alt="Rajita Khadgi" style={{ width:"100%",height:"100%",objectFit:"cover" }}/>
              </div>
              <div className="flip-back" style={{ border:`4px solid ${tk.aboutBorder}`, transition:"border-color .4s" }}>
                <img src={A.aboutFlip} alt="Rajita Khadgi" style={{ width:"100%",height:"100%",objectFit:"cover" }}/>
                <div style={{ position:"absolute",inset:0,background:"rgba(0,0,0,0.20)" }}/>
              </div>
            </div>
          </div>
          <div ref={content} style={{ display:"flex",flexDirection:"column",gap:32,alignItems:"flex-end" }}>
            <div style={{ width:"100%",display:"flex",flexDirection:"column",gap:24 }}>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontWeight:700,fontSize:32,lineHeight:"42px",letterSpacing:"1.5px",color:tk.sectionTitle,alignSelf:"stretch",transition:"color .4s" }}>ABOUT ME</h2>
              <div style={{ display:"flex",flexDirection:"column",gap:18 }}>
                <p style={{ fontFamily:"Inter,sans-serif",fontSize:17,fontWeight:400,lineHeight:"28px",color:tk.bodyText,alignSelf:"stretch",transition:"color .4s" }}>Hello, I am Rajita Khadgi, a UI/UX designer and Computer Science student based in Kathmandu, Nepal. With hands-on experience through internships and traineeships, I have developed a strong foundation in designing intuitive, user-centered digital experiences. I enjoy transforming ideas into structured, visually polished interfaces that balance usability and aesthetics.</p>
                <p style={{ fontFamily:"Inter,sans-serif",fontSize:17,fontWeight:400,lineHeight:"28px",color:tk.bodyText,alignSelf:"stretch",transition:"color .4s" }}>Through projects such as service-based applications, booking platforms, and web interfaces, I have gained practical experience in wireframing, prototyping, and solving real-world design challenges using Figma. I am passionate about leveraging technology to create meaningful solutions, continuously improving my skills, and contributing to impactful digital products.</p>
              </div>
            </div>
            <div style={{ width:"100%",height:0,outline:`0.1px solid ${tk.divider}` }}/>
            <div ref={statsRef} style={{ width:"100%",display:"flex",justifyContent:"flex-start",alignItems:"center",gap:143 }}>
              {STATS.map((s,i) => (
                <div key={s.label} style={{ display:"flex",flexDirection:"column",gap:2,alignItems:"flex-start" }}>
                  <span style={{ fontFamily:"'Poppins',sans-serif",fontWeight:500,fontSize:40,lineHeight:"50px",color:tk.statNum,transition:"color .4s" }}>{counts[i]}{s.suffix}</span>
                  <span style={{ fontFamily:"Inter,sans-serif",fontSize:14,fontWeight:400,lineHeight:"20px",color:tk.statLabel,transition:"color .4s" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── PROJECT CARD ────────────────────────────────────────────── */
function ProjectCard({ title, tags, tag, desc, img, figma, delay=0, animate=true, tk }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const resolvedTags = tags || (tag ? [tag] : []);

  useEffect(() => {
    if (!animate) return;
    const el = ref.current; if (!el) return;
    el.classList.add("rv");
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("on"); obs.unobserve(el); } },
      { threshold:0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [animate]);

  return (
    <a
      ref={ref}
      href={figma}
      target="_blank"
      rel="noopener noreferrer"
      className="pc pcard"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:tk.cardBg, border:`1px solid ${hovered ? "#A65FD7" : tk.cardBorder}`, borderRadius:10,
        padding:"16px 10px", display:"flex", flexDirection:"column", gap:16,
        transitionDelay:`${delay}s`,
        boxShadow: hovered ? `-4px -4px 10px rgba(187,114,239,0.30), 4px 4px 10px rgba(187,114,239,0.30)` : tk.moonIcon ? `2px 2px 8px ${tk.cardShadow}` : "none",
        transform: hovered ? "translateY(-6px)" : "none",
        transition:"transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease, border-color .3s ease, background .4s",
        textDecoration:"none",
        cursor:"pointer",
      }}>
      <div style={{ height:183, borderRadius:10, overflow:"hidden", position:"relative", flexShrink:0, background:tk.cardBg }}>
        <div style={{
          position:"absolute", inset:0,
          background: tk.moonIcon
            ? "linear-gradient(135deg, #f0e8f8 0%, #e2d0f0 100%)"
            : "linear-gradient(135deg, #1a0a2e 0%, #2d1050 100%)",
          display:"flex", alignItems:"center", justifyContent:"center",
          zIndex:0,
        }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" opacity="0.3">
            <rect x="3" y="3" width="18" height="18" rx="3" stroke={tk.moonIcon?"#8B31CA":"#CEA4EB"} strokeWidth="1.5"/>
            <circle cx="8.5" cy="8.5" r="1.5" fill={tk.moonIcon?"#8B31CA":"#CEA4EB"}/>
            <path d="M3 15l5-4 4 3 3-2.5 6 5.5" stroke={tk.moonIcon?"#8B31CA":"#CEA4EB"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <img
          src={img}
          alt={title}
          style={{
            position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover",
            transform: hovered ? "scale(1.08)" : "scale(1)",
            transition:"transform .5s cubic-bezier(.22,1,.36,1)",
            zIndex:1,
          }}
        />
      </div>
      <div style={{ display:"flex", flexDirection:"column", gap:9, padding:"0 6px" }}>
        <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
          {resolvedTags.map(t => (
            <span key={t} style={{ display:"inline-flex", alignItems:"center", height:19, padding:"4px 12px",
              background:tk.cardTag, borderRadius:16,
              fontFamily:"Inter,sans-serif", fontSize:10, fontWeight:600, lineHeight:"20px",
              color:tk.cardTagText, whiteSpace:"nowrap", transition:"background .4s" }}>{t}</span>
          ))}
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
          <p style={{ fontFamily:"Inter,sans-serif", fontSize:16, fontWeight:500, lineHeight:"22px", color:tk.cardTitle, transition:"color .4s" }}>{title}</p>
          <p style={{ fontFamily:"Inter,sans-serif", fontSize:14, fontWeight:400, lineHeight:"20px", color:tk.cardDesc, transition:"color .4s" }}>{desc}</p>
        </div>
      </div>
      <div style={{ borderTop:`1px solid ${tk.cardBorder}`, padding:"8px 6px 6px", display:"flex", alignItems:"center", gap:8 }}>
        <span style={{
          fontFamily:"Inter,sans-serif", fontSize:14, fontWeight:600, lineHeight:"20px",
          color: hovered ? tk.cardLinkHover : tk.cardLink,
          display:"flex", alignItems:"center", gap:8,
          transition:"color .2s",
        }}>
          Figma Link <ArrowRight color={hovered ? tk.cardLinkHover : tk.cardLink}/>
        </span>
      </div>
    </a>
  );
}

/* ── HOME PROJECTS ───────────────────────────────────────────── */
const HOME_PROJECTS = ALL_PROJECTS.slice(0, 8);

function Projects({ setPage, setSkipAnim, tk }) {
  const hdr = useReveal("rv");
  return (
    <section id="projects" style={{ background:tk.bgSection,overflow:"hidden",padding:"100px 0 120px",transition:"background .4s ease" }}>
      <div className="pf-inner">
        <div ref={hdr} style={{ display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:57 }}>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontWeight:700,fontSize:32,lineHeight:"42px",letterSpacing:"1.5px",color:tk.accentTitle,transition:"color .4s" }}>LATEST PROJECT</h2>
          <button onClick={() => { setSkipAnim(true); setPage("projects"); window.scrollTo({top:0,behavior:"smooth"}); }} className="bs" style={{ cursor:"pointer" }}>
            <span className="bs-outside-arr"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            <span className="bs-inner">See All<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
          </button>
        </div>
        <div style={{ display:"flex",flexDirection:"column",gap:30 }}>
          <div className="prow">{HOME_PROJECTS.slice(0,4).map((p,i) => <ProjectCard key={p.title} {...p} delay={i*0.08} tk={tk}/>)}</div>
          <div className="prow">{HOME_PROJECTS.slice(4,8).map((p,i) => <ProjectCard key={p.title} {...p} delay={i*0.08} tk={tk}/>)}</div>
        </div>
      </div>
    </section>
  );
}

/* ── ALL PROJECTS PAGE ───────────────────────────────────────── */
function AllProjectsPage({ setPage, setSkipAnim, tk }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 60); return () => clearTimeout(t); }, []);

  return (
    <div style={{ background:tk.bg,minHeight:"100vh",paddingTop:55,transition:"background .4s ease" }}>
      <div className="pf-inner" style={{ paddingTop:32 }}>
        <div style={{
          display:"inline-flex",justifyContent:"space-between",alignItems:"center",width:"100%",
          opacity: mounted?1:0, transform: mounted?"translateY(0)":"translateY(-10px)",
          transition:"opacity .5s ease, transform .5s ease",
        }}>
          <div style={{ display:"flex",justifyContent:"flex-start",alignItems:"center",gap:6 }}>
            <span
              onClick={() => { setSkipAnim(true); setPage("home"); setTimeout(() => window.scrollTo({top:0,behavior:"smooth"}),50); }}
              style={{ color:tk.breadcrumb,fontSize:16,fontFamily:"Inter",fontWeight:400,lineHeight:"22px",cursor:"pointer",transition:"color .2s,opacity .2s" }}
              onMouseEnter={e => e.currentTarget.style.opacity="0.6"}
              onMouseLeave={e => e.currentTarget.style.opacity="1"}
            >Home</span>
            <div style={{ width:4,height:4,background:tk.breadcrumbDot,borderRadius:9999 }}/>
            <span style={{ color:tk.breadcrumb,fontSize:16,fontFamily:"Inter",fontWeight:400,lineHeight:"22px" }}>Projects</span>
          </div>
        </div>
      </div>
      <div style={{ padding:"48px 0 120px" }}>
        <div className="pf-inner">
          <div className="ap-grid">
            {ALL_PROJECTS.map((p,i) => (
              <div key={p.title} style={{
                opacity: mounted?1:0,
                transform: mounted?"translateY(0)":"translateY(28px)",
                transition:`opacity .6s ease ${0.08+i*0.07}s, transform .6s ease ${0.08+i*0.07}s`,
              }}>
                <ProjectCard {...p} animate={false} tk={tk}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── SKILL CARD ──────────────────────────────────────────────── */
function SkillCard({ name, sub, icon, delay=0, tk, isFirst=false }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.classList.add("rv");
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("on"); obs.unobserve(el); } }, { threshold:0.06 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const T = ".5s cubic-bezier(.22,1,.36,1)";
  const lCardBg    = isFirst ? "#F8F8F8"           : "#FBFBFB";
  const lOutline   = isFirst ? "1px #BCBCBC solid" : "1px rgba(188,188,188,0.80) solid";
  const lIconBoxBg = isFirst ? "#F0F0F0"           : "#F1EBF5";
  return (
    <div ref={ref} className="scard"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        transitionDelay:`${delay}s`,
        background: tk.moonIcon ? lCardBg : tk.skillBg,
        borderRadius:12,
        cursor:"pointer",
        outline: tk.moonIcon ? lOutline : "none",
        outlineOffset:"-1px",
        boxSizing:"border-box",
        position:"relative", overflow:"hidden",
        transition:`background ${T}`,
      }}>
      <div style={{ position:"absolute",inset:0,background:"#8b31ca",borderRadius:12,transform:hovered?"translate(0,0)":"translate(102%,102%)",transition:`transform ${T}`,zIndex:0,pointerEvents:"none" }}/>
      <div style={{ width:63,height:63,left:16,top:16,position:"absolute",background:hovered?"rgba(255,255,255,0.15)":(tk.moonIcon?lIconBoxBg:tk.skillIconBg),borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",zIndex:2,transition:`background ${T}` }}>
        <img src={icon} alt={name} style={{ width:36,height:36,objectFit:"contain",filter:hovered?"brightness(0) invert(1)":tk.moonIcon?"invert(43%) sepia(55%) saturate(700%) hue-rotate(253deg) brightness(92%) contrast(95%)":"none",transition:`filter ${T}` }}/>
      </div>
      <div style={{ width:198,left:16,top:91,position:"absolute",display:"inline-flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",gap:5,zIndex:2 }}>
        <p style={{ margin:0,alignSelf:"stretch",color:hovered?"#fff":tk.skillName,fontSize:18,fontFamily:"Inter,sans-serif",fontWeight:500,lineHeight:"28px",wordWrap:"break-word",transition:`color ${T}` }}>{name}</p>
        <p style={{ margin:0,alignSelf:"stretch",color:hovered?"rgba(255,255,255,0.80)":tk.skillSub,fontSize:14,fontFamily:"Inter,sans-serif",fontWeight:400,lineHeight:"20px",wordWrap:"break-word",transition:`color ${T}` }}>{sub}</p>
      </div>
      <div style={{ width:100,height:100,left:231,top:154,position:"absolute",background:hovered?"rgba(255,255,255,0.15)":(tk.moonIcon?(isFirst?"#A65FD7":"#8B31CA"):"#CEA4EB"),borderRadius:8,zIndex:1,transition:`background ${T}` }}/>
    </div>
  );
}

const SKILLS = [
  { name:"Figma",         sub:"UI Design & Component Systems",              icon:A.skFig },
  { name:"Sketch",        sub:"Symbol-Based Layout & Interface Creation",   icon:A.skSkt },
  { name:"User Research", sub:"Insights Gathering & Usability Evaluation",  icon:A.skRes },
  { name:"Prototype",     sub:"Interactive Flows & Experience Validation",  icon:A.skPro },
  { name:"Web Design",    sub:"Responsive Layout & Visual Structure",       icon:A.skWeb },
  { name:"Wireframing",   sub:"Scalable Interface & Structured Components", icon:A.skWir },
  { name:"Design System", sub:"Visual Standards & Reusable Components",     icon:A.skDes },
  { name:"HTML & CSS",    sub:"Structured Markup & Responsive Styling",     icon:A.skHtm },
];

function Skills({ tk }) {
  const hdr = useReveal("rv");
  return (
    <section id="skills" style={{ background:tk.bgAlt, overflow:"hidden", padding:"100px 0 120px", transition:"background .4s ease" }}>
      <div className="pf-inner" style={{ boxSizing:"border-box" }}>
        <h2 ref={hdr} style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:700, fontSize:32, lineHeight:"42px", letterSpacing:"1.5px", color:tk.sectionTitle, transition:"color .4s" }}>TOOLS &amp; SKILLS</h2>
        <div style={{ display:"flex", flexDirection:"column", gap:40, marginTop:57, width:"100%" }}>
          <div className="srow sk-row1">{SKILLS.slice(0,5).map((s,i) => <SkillCard key={s.name} {...s} delay={i*0.07} tk={tk} isFirst={i===0}/>)}</div>
          <div className="srow sk-row2">{SKILLS.slice(5,8).map((s,i) => <SkillCard key={s.name} {...s} delay={i*0.07} tk={tk}/>)}</div>
        </div>
      </div>
    </section>
  );
}

/* ── CERTIFICATES ────────────────────────────────────────────── */
const CERTS = [
  "Completion of UI/UX Internship at Yoddha lab Studio.",
  "Completion of UI/UX Traineeship at Web Studio Nepal.",
  "Certificate of Completion of Intro to UI/UX Design.",
  "Certificate of Completion of Basics of UI UX Strategy.",
];

function Certificates({ tk }) {
  const hdr = useReveal("rv");
  const lst = useReveal("rl");
  const vis = useReveal("rr");
  const [hovered, setHovered] = useState(false);
  const T = "transform .5s cubic-bezier(.22,1,.36,1), left .5s cubic-bezier(.22,1,.36,1), top .5s cubic-bezier(.22,1,.36,1)";
  return (
    <section id="certificates" style={{ background:tk.bgSection,overflow:"hidden",padding:"100px 0 120px",transition:"background .4s ease" }}>
      <div className="pf-inner">
        <h2 ref={hdr} style={{ fontFamily:"'Cormorant Garamond',serif",fontWeight:700,fontSize:32,lineHeight:"42px",letterSpacing:"1.5px",color:tk.sectionTitle,marginBottom:20,transition:"color .4s" }}>Certificates</h2>
        <div className="cert-g">
          <ul ref={lst} style={{ display:"flex",flexDirection:"column",gap:28 }}>
            {CERTS.map((t,i) => (
              <li key={i} style={{ display:"flex",gap:12,alignItems:"center" }}>
                <TickIcon color={tk.certTickStroke}/>
                <p style={{ fontFamily:"Inter,sans-serif",fontSize:18,fontWeight:400,lineHeight:"28px",color:tk.certText,transition:"color .4s" }}>{t}</p>
              </li>
            ))}
          </ul>
          <div className="cert-v" ref={vis}
            onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
            style={{ width:"100%",maxWidth:720,height:287.64,overflowX:hovered?"scroll":"hidden",overflowY:"hidden",position:"relative",borderRadius:4 }}>
            <div style={{ position:"relative",width:800,height:"100%" }}>
<img src={A.certR} alt="" style={{ position:"absolute",width:hovered?269:220,height:hovered?193:150,left:hovered?491:480,top:hovered?101:60,transform:hovered?"rotate(0deg)":"rotate(12deg)",transformOrigin:"top left",borderRadius:6,objectFit:"cover",transition:T }}/>
<img src={A.certL} alt="" style={{ position:"absolute",width:hovered?276:220,height:hovered?195:150,left:hovered?-33:-20,top:hovered?101:60,transform:hovered?"rotate(0deg)":"rotate(-12deg)",transformOrigin:"top left",borderRadius:6,objectFit:"cover",transition:T }}/>
<img src={A.certC} alt="" style={{ position:"absolute",width:hovered?220:300,height:hovered?320:400,left:230,top:hovered?32:-60,borderRadius:6,objectFit:"cover",transition:T }}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── EMAILJS CONFIG ──────────────────────────────────────────── */
const EJS = {
  serviceId:  "service_e09ixq6",
  templateId: "template_pnygifo",
  publicKey:  "veNHpPNY5hT1BfvSX",
};

/* ── CONTACT ─────────────────────────────────────────────────── */
function Contact({ tk }) {
  const hdr = useReveal("rv");
  const lft = useReveal("rl");
  const rgt = useReveal("rr");
  const formRef = useRef(null);

  const [form, setF]     = useState({ fn:"", ln:"", email:"", subject:"", msg:"" });
  const [status, setSt]  = useState("idle");

  const ch = e => setF(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    const { fn, ln, email, subject, msg } = form;
    if (!fn || !email || !msg) {
      setSt("error");
      setTimeout(() => setSt("idle"), 3500);
      return;
    }
    setSt("sending");
    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id:  EJS.serviceId,
          template_id: EJS.templateId,
          user_id:     EJS.publicKey,
          template_params: {
            from_name:  `${fn} ${ln}`.trim(),
            from_email: email,
            subject:    subject,
            message:    msg,
          },
        }),
      });
      if (!res.ok) {
        const errText = await res.text();
        console.error("EmailJS error:", errText);
        throw new Error(errText);
      }
      setSt("success");
      setF({ fn:"", ln:"", email:"", subject:"", msg:"" });
      setTimeout(() => setSt("idle"), 5000);
    } catch {
      setSt("error");
      setTimeout(() => setSt("idle"), 4000);
    }
  };

  const inp = {
    background:tk.contactInp, border:`1px solid ${tk.contactInpBorder}`,
    borderRadius:8, padding:"6px 12px",
    fontFamily:"Roboto,sans-serif", fontSize:14, fontWeight:400, lineHeight:"24px",
    color:tk.contactInpText, width:"100%", outline:"none",
    transition:"background .4s, border-color .4s",
  };
  const lbl = { fontFamily:"Roboto,sans-serif",fontSize:14,fontWeight:400,lineHeight:"normal",color:tk.contactLbl,transition:"color .4s" };

  const btnLabel = status === "sending" ? "Sending…" : status === "success" ? "Message Sent ✓" : "Submit Message";
  const btnBg    = status === "success" ? "#22c55e" : status === "error" ? "#ef4444" : "#8b31ca";

  return (
    <section id="contact" style={{ background:tk.bgAlt,overflow:"hidden",padding:"100px 0 120px",transition:"background .4s ease" }}>
      <div className="pf-inner">
        <h2 ref={hdr} style={{ fontFamily:"'Cormorant Garamond',serif",fontWeight:700,fontSize:32,lineHeight:"42px",letterSpacing:"1.5px",color:tk.sectionTitle,transition:"color .4s" }}>GET IN TOUCH</h2>
        <div className="cont-g" style={{ marginTop:62 }}>
          <div ref={lft} style={{ display:"flex",flexDirection:"column",gap:18 }}>
            <p style={{ fontFamily:"Inter,sans-serif",fontSize:17,fontWeight:400,lineHeight:"28px",color:tk.contactText,transition:"color .4s" }}>If you have a project idea, a question, or simply want to connect, feel free to reach out. I'm currently available for freelance work and open to full-time opportunities.</p>
            <p style={{ fontFamily:"Inter,sans-serif",fontSize:17,fontWeight:400,lineHeight:"28px",color:tk.contactText,transition:"color .4s" }}>You can expect a response within 24 hours.</p>
            <div style={{ display:"flex",gap:16,alignItems:"center",marginTop:28,flexWrap:"wrap" }}>
              {[
                ["Linkedin",  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/></svg>,  "https://www.linkedin.com/in/rajita-khadgi-bbb16b30b"],
                ["Instagram", <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2A5.8 5.8 0 0 1 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2M7.6 4A3.6 3.6 0 0 0 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4A3.6 3.6 0 0 0 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6M17.25 5.5A1.25 1.25 0 0 1 18.5 6.75A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75A1.25 1.25 0 0 1 17.25 5.5M12 7A5 5 0 0 1 17 12A5 5 0 0 1 12 17A5 5 0 0 1 7 12A5 5 0 0 1 12 7M12 9A3 3 0 0 0 9 12A3 3 0 0 0 12 15A3 3 0 0 0 15 12A3 3 0 0 0 12 9Z"/></svg>, "https://www.instagram.com/rajita_shahi?igsh=czhuNm5oaWd3MXZ2"],
                ["WhatsApp",  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.31C14.13 13.56 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.33 8.7 7.33 8.53 7.33Z"/></svg>, "https://wa.me/9779811052414"],
              ].map(([l, icon, href]) => (
                <a key={l} href={href} target="_blank" rel="noopener noreferrer" aria-label={l} style={{
                  display:"flex", alignItems:"center", gap:8, padding:"9px 14px",
                  background:tk.sbBg, border:`1px solid ${tk.sbBorder}`, borderRadius:24,
                  width:129, color:tk.sbText,
                  fontFamily:"Inter,sans-serif", fontSize:14, fontWeight:400, lineHeight:"20px",
                  transition:"background .2s, border-color .2s, transform .2s, color .4s", flexShrink:0,
                }}
                onMouseEnter={e => { e.currentTarget.style.background=tk.sbBgHov; e.currentTarget.style.borderColor="#a65fd7"; e.currentTarget.style.transform="translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background=tk.sbBg; e.currentTarget.style.borderColor=tk.sbBorder; e.currentTarget.style.transform="none"; }}
                >
                  <span style={{ display:"flex", alignItems:"center", color: tk.moonIcon ? "#000" : tk.sbText, flexShrink:0 }}>{icon}</span>{l}
                </a>
              ))}
            </div>
          </div>

          <div ref={rgt} style={{ display:"flex",flexDirection:"column",gap:14 }}>
            <div className="frow" style={{ display:"flex",gap:22 }}>
              {[["fn","First Name","Name","given-name"],["ln","Last Name","Name","family-name"]].map(([n,l,ph,ac]) => (
                <div key={n} style={{ display:"flex",flexDirection:"column",gap:8,flex:1 }}>
                  <label style={lbl}>{l}</label>
                  <input name={n} type="text" placeholder={ph} autoComplete={ac} value={form[n]} onChange={ch} style={{ ...inp, color:form[n]?tk.contactLbl:tk.contactInpText }}/>
                </div>
              ))}
            </div>
            {[["email","Email","Enter your email","email"],["subject","Subject","Enter the subject","off"]].map(([n,l,ph,ac]) => (
              <div key={n} style={{ display:"flex",flexDirection:"column",gap:8 }}>
                <label style={lbl}>{l}</label>
                <input name={n} type={n==="email"?"email":"text"} placeholder={ph} autoComplete={ac} value={form[n]} onChange={ch} style={{ ...inp, color:form[n]?tk.contactLbl:tk.contactInpText }}/>
              </div>
            ))}
            <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
              <label style={lbl}>Message</label>
              <textarea name="msg" placeholder="Type something....." value={form.msg} onChange={ch} style={{ ...inp,height:102,resize:"none",color:form.msg?tk.contactLbl:tk.contactInpText }}/>
            </div>
            {status === "error" && (
              <p style={{ fontFamily:"Inter,sans-serif",fontSize:13,color:"#ef4444",marginTop:-4 }}>
                {!form.fn || !form.email || !form.msg ? "Please fill in First Name, Email and Message." : "Something went wrong. Please try again."}
              </p>
            )}
            <button
              onClick={handleSubmit}
              disabled={status === "sending"}
              className="bsub"
              style={{ background:btnBg, transition:"background .3s ease, transform .2s", opacity: status==="sending" ? 0.8 : 1 }}
            >
              <span>{btnLabel}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ──────────────────────────────────────────────────── */
function Footer({ tk }) {
  return (
    <footer style={{ background:tk.bg,borderTop:`0.3px solid ${tk.footerBorder}`,height:55,display:"flex",alignItems:"center",padding:"0 80px",transition:"background .4s ease, border-color .4s" }}>
      <div style={{ display:"flex",alignItems:"center",gap:6 }}>
        <CopyrightIcon color={tk.footerIcon}/>
        <span style={{ fontFamily:"Inter,sans-serif",fontSize:14,fontWeight:400,lineHeight:"20px",color:tk.footerText,transition:"color .4s" }}>2026 Rajita. All rights reserved.</span>
      </div>
    </footer>
  );
}

/* ── ROOT ────────────────────────────────────────────────────── */
export default function Portfolio() {
  const [open, setOpen]         = useState(false);
  const [page, setPage]         = useState("home");
  const [skipAnim, setSkipAnim] = useState(false);
  const [isDark, setIsDark]     = useState(true);

  const tk = isDark ? DARK : LIGHT;
  const toggleTheme = () => setIsDark(d => !d);

  useEffect(() => {
    const id = "pf-css";
    if (!document.getElementById(id)) {
      const s = document.createElement("style");
      s.id = id; s.textContent = CSS;
      document.head.appendChild(s);
    }
    return () => document.getElementById("pf-css")?.remove();
  }, []);

  useEffect(() => {
    document.body.style.background = tk.bg;
  }, [isDark]);

  useEffect(() => {
    const h = e => { if (!e.target.closest(".ham") && !e.target.closest("#mmenu")) setOpen(false); };
    document.addEventListener("click", h);
    return () => document.removeEventListener("click", h);
  }, []);

  useEffect(() => {
    if (page === "projects") window.scrollTo({ top:0 });
  }, [page]);

  return (
    <div className="pf-root" style={{ background:tk.bg }}>
      <Navbar open={open} setOpen={setOpen} page={page} setPage={setPage} tk={tk} toggleTheme={toggleTheme}/>

      {page === "projects" ? (
        <>
          <AllProjectsPage setPage={setPage} setSkipAnim={setSkipAnim} tk={tk}/>
          <Footer tk={tk}/>
        </>
      ) : (
        <>
          <Hero setPage={setPage} skipAnimation={skipAnim} onAnimDone={() => setSkipAnim(true)} tk={tk} toggleTheme={toggleTheme}/>
          <Ticker tk={tk}/>
          <About tk={tk}/>
          <Projects setPage={setPage} setSkipAnim={setSkipAnim} tk={tk}/>
          <Skills tk={tk}/>
          <Certificates tk={tk}/>
          <Contact tk={tk}/>
          <Footer tk={tk}/>
        </>
      )}
    </div>
  );
}