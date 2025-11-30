# Manual Testing Checklist
**Website:** CodeKids Technologies  
**Date:** $(Get-Date -Format "yyyy-MM-dd")

---

## 🎯 Overview

This checklist covers all manual testing that needs to be performed on the CodeKids Technologies website before production deployment.

---

## 📋 Testing Checklist

### 1. Forms Testing

#### 1.1 Contact Form (/contact)

**Test Case 1.1.1: Empty Form Submission**
- [ ] Navigate to /contact
- [ ] Click "Send Message" without filling any fields
- [ ] Verify: All required fields show validation errors
- [ ] Verify: Error messages are clear and helpful

**Test Case 1.1.2: Invalid Email Format**
- [ ] Enter name: "John Doe"
- [ ] Enter email: "invalid-email"
- [ ] Click submit
- [ ] Verify: Email field shows format error
- [ ] Verify: Error message says "Please enter a valid email address"

**Test Case 1.1.3: Invalid Phone Number**
- [ ] Enter phone: "12345"
- [ ] Click submit
- [ ] Verify: Phone field shows format error (if phone is required)
- [ ] Verify: Error message says "Please enter a valid 10-digit phone number"

**Test Case 1.1.4: Valid Form Submission**
- [ ] Fill all required fields correctly
- [ ] Click "Send Message"
- [ ] Verify: Loading spinner appears
- [ ] Verify: Success message appears after submission
- [ ] Verify: Form resets after successful submission
- [ ] Verify: Success message disappears after 5 seconds

**Test Case 1.1.5: Character Limits**
- [ ] Enter message with > 1000 characters
- [ ] Verify: Character counter shows correct count
- [ ] Verify: Submission shows error if limit exceeded

#### 1.2 Pricing Request Form (/codekids-jr/pricing)

**Test Case 1.2.1: Required Fields Validation**
- [ ] Navigate to pricing form
- [ ] Try to submit without required fields
- [ ] Verify: All required fields show errors
- [ ] Verify: Error messages are specific to each field

**Test Case 1.2.2: Role Selection**
- [ ] Select "Parent" from role dropdown
- [ ] Verify: Form fields adjust appropriately
- [ ] Test all role options (Parent, Student, Principal, School Owner)

**Test Case 1.2.3: Mode Selection**
- [ ] Select different modes (Online, Offline, Both)
- [ ] Verify: Form accepts all options
- [ ] Verify: Submission includes selected mode

**Test Case 1.2.4: Phone Number Formatting**
- [ ] Enter phone: "9876543210"
- [ ] Verify: Phone number auto-formats correctly
- [ ] Verify: Only digits are accepted

**Test Case 1.2.5: Complete Submission**
- [ ] Fill all fields correctly
- [ ] Submit form
- [ ] Verify: Success message appears
- [ ] Verify: Email sent to codekidstech2025@gmail.com (check inbox)

---

### 2. Navigation Testing

#### 2.1 Main Navigation

**Test Case 2.1.1: Navbar Links**
- [ ] Click "Home" link
- [ ] Verify: Navigates to homepage (/)
- [ ] Click "About" link
- [ ] Verify: Navigates to /about
- [ ] Click "Contact" link
- [ ] Verify: Navigates to /contact
- [ ] Test all main navigation links

**Test Case 2.1.2: Mobile Menu**
- [ ] Open website on mobile/tablet
- [ ] Click hamburger menu
- [ ] Verify: Menu opens smoothly
- [ ] Click menu items
- [ ] Verify: Navigation works correctly
- [ ] Verify: Menu closes after navigation

#### 2.2 Internal Links & Anchor Scrolling

**Test Case 2.2.1: Smooth Scrolling**
- [ ] Click anchor link (e.g., "#pricing")
- [ ] Verify: Smooth scroll to section
- [ ] Verify: Section is visible in viewport
- [ ] Verify: URL updates with hash

**Test Case 2.2.2: Program Links**
- [ ] Click "CodeKids Jr" link
- [ ] Verify: Navigates to /codekids-jr
- [ ] Click "CodeKids Pro" link
- [ ] Verify: Navigates to /codekids-pro

#### 2.3 Footer Links

**Test Case 2.3.1: Footer Navigation**
- [ ] Scroll to footer
- [ ] Click all footer links
- [ ] Verify: Links navigate correctly
- [ ] Verify: External links open in new tab
- [ ] Verify: Social media links work

---

### 3. Component Functionality

#### 3.1 Trust Signals Component

**Test Case 3.1.1: Display**
- [ ] Load any page
- [ ] Verify: Trust signals component appears (desktop bottom-right)
- [ ] Verify: Component shows correct statistics (1,250+ Students, 4.9/5, 20+ Schools)
- [ ] Verify: Icons display correctly

**Test Case 3.1.2: Hide Functionality**
- [ ] Click X button on trust signals
- [ ] Verify: Component hides smoothly
- [ ] Refresh page
- [ ] Verify: Component remains hidden
- [ ] Clear localStorage
- [ ] Refresh page
- [ ] Verify: Component reappears

**Test Case 3.1.3: Mobile Version**
- [ ] View on mobile device
- [ ] Verify: Mobile version of trust signals displays
- [ ] Verify: Can hide mobile version
- [ ] Verify: Preference persists

#### 3.2 Website Loader

**Test Case 3.2.1: Loader Display**
- [ ] Open website in new tab/incognito
- [ ] Verify: Loader appears immediately
- [ ] Verify: Progress bar animates
- [ ] Verify: Loading messages rotate
- [ ] Verify: Animations are smooth

**Test Case 3.2.2: Loader Completion**
- [ ] Wait for loader to complete
- [ ] Verify: Loader fades out smoothly
- [ ] Verify: Website content appears
- [ ] Verify: No layout shift

#### 3.3 Chatbot

**Test Case 3.3.1: Chatbot Display**
- [ ] Verify: Chatbot icon appears (bottom-right)
- [ ] Click chatbot icon
- [ ] Verify: Chatbot window opens
- [ ] Verify: Chatbot interface displays correctly

**Test Case 3.3.2: Chatbot Functionality**
- [ ] Send a test message
- [ ] Verify: Message appears in chat
- [ ] Verify: Response is appropriate
- [ ] Test quick reply buttons
- [ ] Verify: Quick replies work

**Test Case 3.3.3: WhatsApp Integration**
- [ ] Click "Contact via WhatsApp" option
- [ ] Verify: WhatsApp link opens correctly
- [ ] Verify: Pre-filled message includes contact number
- [ ] Verify: Opens in new tab/window

#### 3.4 CRO Optimizer Components

**Test Case 3.4.1: Exit Intent Popup**
- [ ] Navigate to homepage
- [ ] Move mouse quickly to top of window (simulate exit)
- [ ] Verify: Exit intent popup appears
- [ ] Verify: Popup has correct content
- [ ] Click "Chat on WhatsApp"
- [ ] Verify: WhatsApp opens
- [ ] Close popup
- [ ] Verify: Popup doesn't reappear on same session

**Test Case 3.4.2: Urgency Banner**
- [ ] Verify: Urgency banner appears at top
- [ ] Verify: Timer counts down correctly
- [ ] Click X to close banner
- [ ] Verify: Banner closes
- [ ] Refresh page
- [ ] Verify: Banner reappears (unless preference saved)

---

### 4. Responsive Design Testing

#### 4.1 Mobile (320px - 768px)

**Test Case 4.1.1: Homepage Mobile**
- [ ] View homepage on mobile device
- [ ] Verify: Layout adapts correctly
- [ ] Verify: Text is readable
- [ ] Verify: Images scale properly
- [ ] Verify: Navigation menu works
- [ ] Verify: Forms are usable
- [ ] Verify: No horizontal scrolling

**Test Case 4.1.2: Contact Page Mobile**
- [ ] Navigate to /contact on mobile
- [ ] Verify: Form is fully visible
- [ ] Verify: Input fields are large enough
- [ ] Verify: Submit button is accessible
- [ ] Test form submission

**Test Case 4.1.3: Pricing Page Mobile**
- [ ] Navigate to pricing page on mobile
- [ ] Verify: Pricing cards stack vertically
- [ ] Verify: Content is readable
- [ ] Verify: Forms work correctly

#### 4.2 Tablet (768px - 1024px)

**Test Case 4.2.1: Tablet Layout**
- [ ] View on tablet device
- [ ] Verify: Layout is optimized for tablet
- [ ] Verify: Navigation works
- [ ] Verify: Forms are accessible

#### 4.3 Desktop (1024px+)

**Test Case 4.3.1: Desktop Layout**
- [ ] View on desktop (1920px)
- [ ] Verify: Layout uses full width appropriately
- [ ] Verify: Content is well-spaced
- [ ] Verify: No excessive white space

---

### 5. Browser Compatibility

#### 5.1 Chrome (Latest)
- [ ] Test all major features
- [ ] Verify: Everything works correctly
- [ ] Note any issues

#### 5.2 Firefox (Latest)
- [ ] Test all major features
- [ ] Verify: Everything works correctly
- [ ] Note any issues

#### 5.3 Safari (Latest)
- [ ] Test all major features
- [ ] Verify: Everything works correctly
- [ ] Verify: Animations work
- [ ] Note any issues

#### 5.4 Edge (Latest)
- [ ] Test all major features
- [ ] Verify: Everything works correctly
- [ ] Note any issues

#### 5.5 Mobile Safari (iOS)
- [ ] Test on iPhone
- [ ] Verify: Touch interactions work
- [ ] Verify: Forms work
- [ ] Verify: Smooth scrolling

#### 5.6 Chrome Mobile (Android)
- [ ] Test on Android device
- [ ] Verify: Touch interactions work
- [ ] Verify: Forms work
- [ ] Verify: Smooth scrolling

---

### 6. Performance Testing

#### 6.1 Page Load Speed

**Test Case 6.1.1: Homepage Load**
- [ ] Open homepage in new tab
- [ ] Measure load time
- [ ] Target: < 3 seconds
- [ ] Verify: Images load progressively
- [ ] Verify: No layout shifts

**Test Case 6.1.2: Other Pages**
- [ ] Test load time for /about
- [ ] Test load time for /contact
- [ ] Test load time for /codekids-jr
- [ ] All should load < 3 seconds

#### 6.2 Image Loading

**Test Case 6.2.1: Image Optimization**
- [ ] Check network tab
- [ ] Verify: Images use WebP/AVIF format
- [ ] Verify: Images are properly sized
- [ ] Verify: Lazy loading works
- [ ] Verify: Images load as you scroll

---

### 7. Accessibility Testing

#### 7.1 Keyboard Navigation

**Test Case 7.1.1: Tab Navigation**
- [ ] Tab through entire homepage
- [ ] Verify: All interactive elements are accessible
- [ ] Verify: Focus indicators are visible
- [ ] Verify: Tab order is logical

**Test Case 7.1.2: Form Navigation**
- [ ] Navigate to contact form
- [ ] Tab through form fields
- [ ] Verify: Labels are announced
- [ ] Verify: Errors are announced
- [ ] Verify: Can submit with Enter key

#### 7.2 Screen Reader

**Test Case 7.2.1: NVDA/JAWS Testing**
- [ ] Test with screen reader
- [ ] Verify: Form labels read correctly
- [ ] Verify: Error messages are announced
- [ ] Verify: Navigation is clear
- [ ] Verify: Headings structure is logical

#### 7.3 Color Contrast

**Test Case 7.3.1: Text Contrast**
- [ ] Use contrast checker tool
- [ ] Verify: All text meets WCAG AA (4.5:1)
- [ ] Verify: Important text meets WCAG AAA (7:1)
- [ ] Fix any low-contrast issues

---

### 8. Error Handling Testing

#### 8.1 Form Errors

**Test Case 8.1.1: Network Error**
- [ ] Disable network
- [ ] Submit form
- [ ] Verify: Error message appears
- [ ] Verify: Message is helpful
- [ ] Re-enable network
- [ ] Verify: Can retry submission

**Test Case 8.1.2: API Error**
- [ ] Submit form (with API down)
- [ ] Verify: Error message appears
- [ ] Verify: User can retry
- [ ] Verify: Form data is preserved

#### 8.2 Image Errors

**Test Case 8.2.1: Broken Images**
- [ ] Verify: Broken images have fallback
- [ ] Verify: Alt text displays
- [ ] Verify: Layout doesn't break

---

### 9. SEO & Meta Testing

#### 9.1 Meta Tags

**Test Case 9.1.1: Homepage Meta**
- [ ] View page source
- [ ] Verify: Title tag is present
- [ ] Verify: Meta description is present
- [ ] Verify: Open Graph tags present
- [ ] Verify: Twitter cards present

**Test Case 9.1.2: All Pages Meta**
- [ ] Check all pages have unique titles
- [ ] Check all pages have unique descriptions
- [ ] Verify: Canonical URLs are correct

#### 9.2 Structured Data

**Test Case 9.2.1: Schema Markup**
- [ ] Use Google Rich Results Test
- [ ] Verify: Organization schema valid
- [ ] Verify: Breadcrumb schema valid
- [ ] Verify: No errors

---

### 10. Security Testing

#### 10.1 Form Security

**Test Case 10.1.1: XSS Prevention**
- [ ] Enter: `<script>alert('XSS')</script>` in name field
- [ ] Submit form
- [ ] Verify: Script is escaped/not executed
- [ ] Verify: Special characters handled safely

**Test Case 10.1.2: SQL Injection**
- [ ] Enter: `'; DROP TABLE users; --` in form fields
- [ ] Verify: Input is sanitized
- [ ] Verify: No database errors

---

## ✅ Sign-Off Checklist

- [ ] All critical test cases passed
- [ ] All forms tested and working
- [ ] All navigation tested
- [ ] Responsive design verified
- [ ] Browser compatibility confirmed
- [ ] Performance acceptable
- [ ] Accessibility verified
- [ ] Security tested
- [ ] Ready for production

---

**Tester Name:** _________________  
**Date:** _________________  
**Signature:** _________________

---

## 📝 Notes Section

Use this space to document any issues found during testing:

---

**Issue #1:**
- Description:
- Steps to Reproduce:
- Expected Result:
- Actual Result:
- Priority: High/Medium/Low
- Status: Open/Resolved

---

