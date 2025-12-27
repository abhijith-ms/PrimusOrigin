# Web3Forms Setup Guide

## Quick Setup Steps

1. **Get Your Access Key**
   - Visit: https://web3forms.com/
   - Click "Create Form" or "Get Started"
   - Enter your email address (primusoriginbusiness@gmail.com)
   - You'll receive an access key via email

2. **Update Your Contact Form**
   - Open `src/components/Contact.jsx`
   - Find line with: `formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");`
   - Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key

3. **Test Your Form**
   - Run your development server: `npm run dev`
   - Navigate to the contact section
   - Fill out and submit the form
   - Check your email for the submission

## Features You Get (Free)

✅ **Unlimited form submissions**
✅ **Spam protection**
✅ **Email notifications**
✅ **File uploads support**
✅ **Custom redirect after submission**
✅ **No monthly limits**

## Email Format

When someone submits your form, you'll receive an email with:
- **Subject**: "New Business Enquiry from PrimusOrigin Website"
- **From**: The person's email address
- **Content**: All form fields (name, email, company, country, message)

## Optional Enhancements

You can add these hidden fields to your form for better organization:

```html
<!-- Add these as hidden inputs in your form -->
<input type="hidden" name="redirect" value="https://yourwebsite.com/thank-you">
<input type="hidden" name="subject" value="New Business Enquiry from PrimusOrigin Website">
<input type="hidden" name="from_name" value="PrimusOrigin Contact Form">
```

## Troubleshooting

- **Not receiving emails?** Check your spam folder
- **Form not submitting?** Verify your access key is correct
- **Need help?** Web3Forms has excellent documentation at https://docs.web3forms.com/

---

**Next Steps**: Get your access key and update the Contact.jsx file!