import json

theme = {
  "colors": {
    "inverse-surface": "#e3e2e7",
    "error": "#ffb4ab",
    "surface-tint": "#e9c349",
    "background": "#121317",
    "inverse-on-surface": "#2f3034",
    "on-tertiary": "#2e3037",
    "on-error-container": "#ffdad6",
    "on-background": "#e3e2e7",
    "on-tertiary-container": "#43454c",
    "on-primary-container": "#554300",
    "error-container": "#93000a",
    "on-secondary-fixed": "#1a1b20",
    "tertiary-fixed": "#e2e2eb",
    "on-secondary-fixed-variant": "#46464b",
    "on-primary-fixed-variant": "#574500",
    "on-tertiary-fixed-variant": "#45464e",
    "outline": "#99907c",
    "on-primary-fixed": "#241a00",
    "secondary": "#c7c6cb",
    "primary-fixed-dim": "#e9c349",
    "surface-container-highest": "#343539",
    "surface-variant": "#343539",
    "tertiary": "#cdced7",
    "primary": "#f2ca50",
    "surface": "#121317",
    "primary-fixed": "#ffe088",
    "primary-container": "#d4af37",
    "surface-container-lowest": "#0d0e12",
    "tertiary-fixed-dim": "#c5c6cf",
    "outline-variant": "#4d4635",
    "surface-container-high": "#292a2e",
    "secondary-container": "#46464b",
    "on-surface-variant": "#d0c5af",
    "on-secondary": "#2f3035",
    "secondary-fixed-dim": "#c7c6cb",
    "on-tertiary-fixed": "#191b22",
    "surface-bright": "#38393d",
    "secondary-fixed": "#e3e2e8",
    "on-primary": "#3c2f00",
    "on-error": "#690005",
    "surface-container": "#1e1f23",
    "surface-container-low": "#1a1b1f",
    "tertiary-container": "#b1b2bb",
    "surface-dim": "#121317",
    "on-surface": "#e3e2e7",
    "inverse-primary": "#735c00",
    "on-secondary-container": "#b5b4ba"
  },
  "borderRadius": {
    "DEFAULT": "0.125rem",
    "lg": "0.25rem",
    "xl": "0.5rem",
    "full": "0.75rem"
  },
  "spacing": {
    "section-gap": "80px",
    "unit": "8px",
    "element-gap": "12px",
    "gutter": "16px",
    "container-padding": "24px"
  }
}

css_lines = ["@import \"tailwindcss\";", "", "@theme {"]

for name, color in theme["colors"].items():
    css_lines.append(f"  --color-{name}: {color};")
    
for name, val in theme["spacing"].items():
    css_lines.append(f"  --spacing-{name}: {val};")

for name, val in theme["borderRadius"].items():
    # In v4, default is often empty suffix or just --radius
    # but let's just use standard format
    if name == "DEFAULT":
        css_lines.append(f"  --radius: {val};")
    else:
        css_lines.append(f"  --radius-{name}: {val};")

css_lines.extend([
    "  --font-display-xl: var(--font-outfit);",
    "  --font-headline-lg: var(--font-outfit);",
    "  --font-headline-md: var(--font-outfit);",
    "  --font-body-lg: var(--font-inter);",
    "  --font-body-md: var(--font-inter);",
    "  --font-label-sm: var(--font-inter);",
    "}"
])

# Add custom classes
custom_css = """
body { 
    background-color: var(--color-background);
    color: var(--color-on-background);
}
.glass-card {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(20px);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
}
.gold-shimmer:hover, .shimmer-effect:hover {
    background: linear-gradient(90deg, #D4AF37 0%, #f2ca50 50%, #D4AF37 100%);
    background-size: 200% auto;
    animation: shimmer 1.5s linear infinite;
}
@keyframes shimmer { to { background-position: 200% center; } }
.scroll-track {
    width: 1px;
    height: 100px;
    background: rgba(255,255,255,0.1);
    position: relative;
}
.scroll-thumb {
    width: 1px;
    height: 40px;
    background: #D4AF37;
    position: absolute;
    top: 0;
}
"""

css_lines.append(custom_css)

with open("/Users/nguyenvu/Documents/Skill/stitch-skills/skills/nguyenvu-mobile-nextjs/src/app/globals.css", "w") as f:
    f.write("\n".join(css_lines))

print("Created globals.css")
