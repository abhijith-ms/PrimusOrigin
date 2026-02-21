# Founders Section - Setup Guide

## 📸 Adding Founder Photos

### Step 1: Prepare Photos
1. Take professional photos of both founders
2. Recommended specifications:
   - **Format**: JPG or PNG
   - **Size**: 800x800 pixels (square)
   - **Background**: Plain or professional setting
   - **Quality**: High resolution, well-lit
   - **Style**: Professional business attire

### Step 2: Add Photos to Project
1. Save photos in: `src/assets/images/`
2. Name them:
   - `founder1.jpg` (or .png)
   - `founder2.jpg` (or .png)

### Step 3: Update the Code

Open `src/components/About.jsx` and find the Founders Section.

#### For Founder 1:
Replace this section:
```jsx
<div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
    <div className="text-center">
        <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <span className="text-6xl">👤</span>
        </div>
        <p className="text-sm text-text/50 italic">Add founder photo here</p>
    </div>
</div>
```

With:
```jsx
<div className="aspect-square rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
    <img 
        src={founder1Image} 
        alt="[Founder Name]" 
        className="w-full h-full object-cover"
    />
</div>
```

And add at the top of the file:
```jsx
import founder1Image from '../assets/images/founder1.jpg';
import founder2Image from '../assets/images/founder2.jpg';
```

#### For Founder 2:
Do the same replacement with `founder2Image`

---

## ✍️ Adding Founder Information

### What to Include:

#### Founder Name
Replace `[Founder Name]` with actual name

#### Position/Title Examples:
- Co-Founder & CEO
- Co-Founder & Managing Director
- Co-Founder & Chief Operating Officer
- Co-Founder & Director of Operations
- Co-Founder & Head of Business Development
- Founder & Export Director

#### Bio Content (150-200 words)
Include:
1. **Background**: Education, previous experience
2. **Expertise**: Specific skills relevant to export business
3. **Role**: What they handle in PrimusOrigin
4. **Vision**: Their goals for the company

### Example Bio Template:

```
[Name] brings over [X] years of experience in [industry/field]. 
With a background in [education/previous role], [he/she] specializes 
in [specific expertise like international trade, supply chain, quality 
management, etc.].

At PrimusOrigin, [Name] oversees [specific responsibilities like 
operations, business development, quality control, etc.], ensuring 
that every product meets international standards and client expectations.

[His/Her] vision is to [specific goal for the company], making 
PrimusOrigin a trusted name in global export markets.
```

---

## 📝 Current Placeholders to Replace

In `src/components/About.jsx`, find and replace:

### Founder 1:
```jsx
<h3 className="text-2xl font-serif font-bold text-primary mb-2">
    [Founder Name]  // ← Replace with actual name
</h3>
<p className="text-accent font-semibold mb-4 text-sm uppercase tracking-wider">
    [Position/Title]  // ← Replace with position
</p>
<p className="text-text/70 text-sm md:text-base leading-relaxed">
    [Add founder bio here...]  // ← Replace with bio
</p>
```

### Founder 2:
Same structure, different content

---

## 🎨 Styling Options

### If you want circular photos instead of square:
Change `rounded-2xl` to `rounded-full` in the image container

### If you want different gradient backgrounds:
Adjust the gradient colors:
- Founder 1: `from-primary/20 to-accent/20`
- Founder 2: `from-secondary/20 to-accent/20`

---

## ✅ Quick Checklist

- [ ] Professional photos taken
- [ ] Photos saved in `src/assets/images/`
- [ ] Photos imported in About.jsx
- [ ] Founder 1 name added
- [ ] Founder 1 position added
- [ ] Founder 1 bio written
- [ ] Founder 2 name added
- [ ] Founder 2 position added
- [ ] Founder 2 bio written
- [ ] Preview on website
- [ ] Test mobile responsiveness

---

## 💡 Tips

1. **Keep bios concise**: 150-200 words is ideal
2. **Be professional**: Focus on business credentials
3. **Show personality**: Add a touch of personal vision
4. **Update regularly**: Keep information current
5. **Consistent tone**: Both bios should match in style

---

## 🔄 Need Help?

If you need assistance with:
- Writing the bios
- Choosing positions/titles
- Photo editing
- Code implementation

Just let me know and I'll help you customize it!
