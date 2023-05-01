import { c as createAstro, a as createComponent, r as renderTemplate, b as renderSlot, d as renderHead, e as addAttribute, f as renderComponent, u as unescapeHTML, F as Fragment, m as maybeRenderHead } from '../astro.5a3d08b4.mjs';
/* empty css                           */
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const { description } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n	<head>\n		<meta charset="UTF-8">\n		<meta name="viewport" content="width=device-width, initial-scale=1.0">\n		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\n		<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">\n		<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">\n		<link rel="manifest" href="/site.webmanifest">\n		<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">\n		<meta name="msapplication-TileColor" content="#5bbad5">\n		<meta name="theme-color" content="#ffffff">\n		<meta name="generator"', '>\n		<script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-CZ6633SFWZ">\n		<\/script>\n		<script type="text/partytown">\n			window.dataLayer = window.dataLayer || [];\n			function gtag() {\n				dataLayer.push(arguments);\n			}\n			gtag("js", new Date());\n			gtag("config", "G-CZ6633SFWZ");\n		<\/script>\n\n		<meta name="twitter:card" content="summary">\n		<meta name="twitter:site" content="@andre0x0">\n		<meta name="twitter:creator" content="@andre0x0">\n		<meta property="og:url" content="https://aandre.gg">\n		<meta property="og:title"', '>\n		<meta property="og:description"', '>\n		<meta property="og:image" content="/android-chrome-512x512.png">\n\n		<title>', "</title>\n	", "</head>\n	<body>\n		", "\n	</body></html>"])), addAttribute(Astro2.generator, "content"), addAttribute(title, "content"), addAttribute(description, "content"), title, renderHead($$result), renderSlot($$result, $$slots["default"]));
}, "/Users/relieh/Projects/aandre.gg/src/layouts/Layout.astro");

const $$Astro$1 = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Icon;
  const { icon, ...attributes } = Astro2.props;
  function addAttributesToInnerHTMLString(innerHTML2, attributes2) {
    const attributesString = Object.entries(attributes2).map(([key, value]) => `${key}="${value}"`).join(" ");
    return innerHTML2.replace(/^<svg/, `<svg ${attributesString}`);
  }
  const { default: svg } = await import(`/public/svg/${icon}.svg?raw`);
  const innerHTML = addAttributesToInnerHTMLString(svg, attributes);
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(innerHTML)}` })}`;
}, "/Users/relieh/Projects/aandre.gg/src/components/icon.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const genRandomPrettyColor = () => `hsl(${randomInt(0, 360)},${randomInt(42, 98)}%,${randomInt(40, 90)}%)`;
  const textGradient = `45deg, ${genRandomPrettyColor()} -20%, ${genRandomPrettyColor()} 50%`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "React Typescript Senior Web Developer | aandre.gg", "description": "Hello, I am Andre, always happy to help with any interesting projects!, let me know", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<main class="astro-J7PV25F6">
		<div class="outter astro-J7PV25F6">
			<div class="astro-J7PV25F6">
				<div class="logo-container astro-J7PV25F6"${addAttribute({ background: `linear-gradient(${textGradient})` }, "style")}>
					<img class="logo astro-J7PV25F6" src="/logo-type.svg" alt="logo-type" width="40px" height="40px">
				</div>
				<p class="astro-J7PV25F6">Hi, I'm</p>
				<h1 class="astro-J7PV25F6">Andre <br class="astro-J7PV25F6"> Kuzac</h1>
				<p class="astro-J7PV25F6">I write code and think about solutions.  👋</p>
			</div>
			<div class="inner-links astro-J7PV25F6">
				<a href="/Andre_Kuznetcov_resume_2023.pdf" class="resume-link astro-J7PV25F6" download>📖 My resume</a>
				<div class="astro-J7PV25F6">
					<a href="https://www.linkedin.com/in/andrewebdev" rel="noreferrer noopener" title="Link to my linkedin" class="astro-J7PV25F6">
						${renderComponent($$result2, "Icon", $$Icon, { "icon": "linkedin", "class": "astro-J7PV25F6" })}
					</a>
					<a href="https://github.com/KatFishSnake" rel="noreferrer noopener" title="Link to my github" class="astro-J7PV25F6">
						${renderComponent($$result2, "Icon", $$Icon, { "icon": "github", "class": "astro-J7PV25F6" })}
					</a>
				</div>
				<!-- <a href = "mailto: abc@example.com">Send Email</a> -->
			</div>
		</div>
	</main>
` })}`;
}, "/Users/relieh/Projects/aandre.gg/src/pages/index.astro");

const $$file = "/Users/relieh/Projects/aandre.gg/src/pages/index.astro";
const $$url = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _ };
