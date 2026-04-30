import os
from bs4 import BeautifulSoup

public_dir = '/Users/nguyenvu/Documents/Skill/stitch-skills/skills/nguyenvu-mobile/site/public'
link_mapping = {
    'iPhone': 'iphone.html',
    'Samsung': 'samsung.html',
    'Vertu': 'vertu.html',
    'Máy cũ': 'used-phones.html',
    'Trả góp': 'installment.html',
    'Liên hệ': 'contact.html',
    'Collections': 'used-phones.html', # fallback if "Collections" is used instead of "Máy cũ"
    'Contact': 'contact.html'
}

for filename in os.listdir(public_dir):
    if filename.endswith('.html'):
        filepath = os.path.join(public_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        soup = BeautifulSoup(content, 'html.parser')
        
        # Find all <a> tags
        for a_tag in soup.find_all('a'):
            text = a_tag.get_text(strip=True)
            if text in link_mapping:
                a_tag['href'] = link_mapping[text]
                
        # For Logo (it might be a div or a tags without href, let's wrap or update href)
        # NGUYENVU Mobile logo
        # In index.html: <div class="text-2xl font-light tracking-tighter text-[#D4AF37]">NGUYENVU Mobile</div>
        # Find elements containing NGUYENVU Mobile that look like logos
        for div in soup.find_all('div', string=lambda t: t and 'NGUYENVU Mobile' in t):
            if 'text-2xl' in div.get('class', []) or 'text-xl' in div.get('class', []):
                # Wrap it in <a> tag pointing to index.html if it's not already
                if not div.find_parent('a'):
                    new_a = soup.new_tag('a', href='index.html')
                    div.wrap(new_a)
        
        # Write back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(str(soup))
        print(f"Updated {filename}")
