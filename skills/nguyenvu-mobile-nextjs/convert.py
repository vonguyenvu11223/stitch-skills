import os
import re

source_dir = "/Users/nguyenvu/Documents/Skill/stitch-skills/skills/nguyenvu-mobile/site/public"
target_dir = "/Users/nguyenvu/Documents/Skill/stitch-skills/skills/nguyenvu-mobile-nextjs/src/app"

def html_to_jsx(html):
    # Change class to className
    jsx = html.replace('class=', 'className=')
    # Change any other common HTML attributes
    jsx = jsx.replace('autocomplete=', 'autoComplete=')
    jsx = jsx.replace('for=', 'htmlFor=')
    
    # Close img and input tags if they are not closed
    jsx = re.sub(r'(<img[^>]*?)(?<!/)>', r'\1 />', jsx)
    jsx = re.sub(r'(<input[^>]*?)(?<!/)>', r'\1 />', jsx)
    jsx = re.sub(r'(<br[^>]*?)(?<!/)>', r'\1 />', jsx)
    jsx = re.sub(r'(<hr[^>]*?)(?<!/)>', r'\1 />', jsx)
    
    # Quick fix for style attributes if any simple ones exist
    # (very basic regex, won't handle complex styles but usually it's style="display:none" etc)
    # Actually most of these use tailwind so style is rare.
    return jsx

files_to_process = [
    ("index.html", ""),
    ("iphone.html", "iphone"),
    ("samsung.html", "samsung"),
    ("vertu.html", "vertu"),
    ("used-phones.html", "used-phones"),
    ("installment.html", "installment"),
    ("contact.html", "contact")
]

for filename, route in files_to_process:
    filepath = os.path.join(source_dir, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Extract main content
    # For index.html, it's between <!-- Hero Section --> and <!-- Footer -->
    # For others, it's between <main> and </main>
    if "<main" in content:
        main_match = re.search(r'<main[^>]*>(.*?)</main>', content, re.DOTALL)
        if main_match:
            body_content = main_match.group(1)
        else:
            body_content = ""
    else:
        # Fallback for index.html which might not have <main>
        body_content = ""
        lines = content.splitlines()
        capturing = False
        captured_lines = []
        for line in lines:
            if '<!-- Hero Section -->' in line or '<section' in line and not capturing:
                capturing = True
            if '<!-- Footer -->' in line or '<footer' in line:
                capturing = False
            if capturing:
                captured_lines.append(line)
        body_content = "\n".join(captured_lines)

    jsx_content = html_to_jsx(body_content)
    
    page_dir = os.path.join(target_dir, route)
    os.makedirs(page_dir, exist_ok=True)
    
    page_content = f"""export default function Page() {{
  return (
    <>
      {jsx_content}
    </>
  );
}}
"""
    
    with open(os.path.join(page_dir, "page.tsx"), "w", encoding="utf-8") as f:
        f.write(page_content)
    
    print(f"Created {route}/page.tsx")
