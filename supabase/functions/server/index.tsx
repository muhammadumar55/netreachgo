import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-659f52ae/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form endpoint
app.post("/make-server-659f52ae/contact", async (c) => {
  try {
    const { name, email, message } = await c.req.json();

    // Validate inputs
    if (!name || !email || !message) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    // Store in KV store with timestamp as key
    const timestamp = Date.now();
    const key = 'contact_' + timestamp + '_' + email.split('@')[0];

    await kv.set(key, {
      name,
      email,
      message,
      submittedAt: new Date().toISOString(),
      timestamp: timestamp
    });

    console.log('Contact form data stored with key:', key);

    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (!resendApiKey) {
      console.error("RESEND_API_KEY environment variable is not set");
      return c.json({
        success: true,
        message: "Form data saved but email notification failed",
        warning: "Email service not configured"
      });
    }

    // Send email using Resend API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "NetReachGo Contact <onboarding@resend.dev>",
        to: "netreachgo@gmail.com",
        reply_to: email,
        subject: `New Contact Form Submission from ${name}`,
        html: [
          '<h2>New Contact Form Submission</h2>',
          '<p><strong>Name:</strong> ' + name + '</p>',
          '<p><strong>Email:</strong> ' + email + '</p>',
          '<p><strong>Message:</strong></p>',
          '<p>' + message.split('\n').join('<br>') + '</p>'
        ].join(''),
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Error sending email via Resend:", result);
      return c.json({
        success: true,
        message: "Form data saved but email notification failed",
        emailError: result
      });
    }

    console.log("Email sent successfully:", result);
    return c.json({ success: true, message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    return c.json({ error: "Internal server error", details: error.message }, 500);
  }
});

// Discovery form endpoint
app.post("/make-server-659f52ae/discovery", async (c) => {
  try {
    const formData = await c.req.json();

    // Validate required fields
    if (!formData.businessName || !formData.industry || !formData.contactName || !formData.email) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    // Store in KV store with timestamp as key
    const timestamp = Date.now();
    const key = 'discovery_' + timestamp + '_' + formData.email.split('@')[0];

    await kv.set(key, {
      ...formData,
      submittedAt: new Date().toISOString(),
      timestamp: timestamp
    });

    console.log('Discovery form data stored with key:', key);

    // Send email notification
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (!resendApiKey) {
      console.error("RESEND_API_KEY environment variable is not set");
      return c.json({
        success: true,
        message: "Form data saved but email notification failed",
        warning: "Email service not configured"
      });
    }

    // Format project types and features as lists
    const projectTypes = Array.isArray(formData.projectType)
      ? formData.projectType.join(', ')
      : formData.projectType;
    const features = Array.isArray(formData.features)
      ? formData.features.join(', ')
      : formData.features;

    // Send email using Resend API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "NetReachGo Discovery <onboarding@resend.dev>",
        to: "netreachgo@gmail.com",
        reply_to: formData.email,
        subject: `New Discovery Form: ${formData.businessName}`,
        html: [
          '<h2>New Project Discovery Submission</h2>',
          '<h3>Business Information</h3>',
          '<p><strong>Business Name:</strong> ' + formData.businessName + '</p>',
          '<p><strong>Industry:</strong> ' + formData.industry + '</p>',
          '<p><strong>Project Type:</strong> ' + projectTypes + '</p>',
          '<h3>Project Details</h3>',
          '<p><strong>Budget:</strong> ' + formData.budget + '</p>',
          '<p><strong>Timeline:</strong> ' + formData.timeline + '</p>',
          '<p><strong>Features Needed:</strong> ' + features + '</p>',
          '<p><strong>Goals:</strong></p>',
          '<p>' + formData.goals.split('\n').join('<br>') + '</p>',
          '<h3>Contact Information</h3>',
          '<p><strong>Name:</strong> ' + formData.contactName + '</p>',
          '<p><strong>Email:</strong> ' + formData.email + '</p>',
          '<p><strong>Phone:</strong> ' + (formData.phone || 'Not provided') + '</p>',
        ].join(''),
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Error sending discovery email via Resend:", result);
      return c.json({
        success: true,
        message: "Form data saved but email notification failed",
        emailError: result
      });
    }

    console.log("Discovery email sent successfully:", result);
    return c.json({ success: true, message: "Discovery form submitted successfully" });
  } catch (error) {
    console.error("Discovery form error:", error);
    return c.json({ error: "Internal server error", details: error.message }, 500);
  }
});

// Get all form submissions
app.get("/make-server-659f52ae/submissions", async (c) => {
  try {
    // Get all contact form submissions
    const contactSubmissions = await kv.getByPrefix('contact_');

    // Get all discovery form submissions
    const discoverySubmissions = await kv.getByPrefix('discovery_');

    return c.json({
      success: true,
      data: {
        contactForms: contactSubmissions || [],
        discoveryForms: discoverySubmissions || [],
        total: (contactSubmissions?.length || 0) + (discoverySubmissions?.length || 0)
      }
    });
  } catch (error) {
    console.error("Error retrieving submissions:", error);
    return c.json({ error: "Failed to retrieve submissions", details: error.message }, 500);
  }
});

// Email all past submissions
app.post("/make-server-659f52ae/email-past-submissions", async (c) => {
  try {
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (!resendApiKey) {
      console.error("RESEND_API_KEY environment variable is not set");
      return c.json({ error: "Email service not configured. Please add RESEND_API_KEY to Supabase secrets." }, 500);
    }

    // Get all submissions
    const contactSubmissions = await kv.getByPrefix('contact_') || [];
    const discoverySubmissions = await kv.getByPrefix('discovery_') || [];

    if (contactSubmissions.length === 0 && discoverySubmissions.length === 0) {
      return c.json({ success: true, message: "No submissions found to email" });
    }

    // Build comprehensive email
    let htmlContent = '<h1>All Form Submissions</h1>';

    // Contact forms section
    if (contactSubmissions.length > 0) {
      htmlContent += '<h2>Contact Form Submissions (' + contactSubmissions.length + ')</h2>';
      contactSubmissions.forEach((sub, index) => {
        htmlContent += '<div style="margin-bottom: 30px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">';
        htmlContent += '<h3>Contact #' + (index + 1) + '</h3>';
        htmlContent += '<p><strong>Submitted:</strong> ' + (sub.submittedAt || 'Unknown') + '</p>';
        htmlContent += '<p><strong>Name:</strong> ' + (sub.name || 'N/A') + '</p>';
        htmlContent += '<p><strong>Email:</strong> ' + (sub.email || 'N/A') + '</p>';
        htmlContent += '<p><strong>Message:</strong></p>';
        htmlContent += '<p>' + (sub.message || 'N/A').split('\n').join('<br>') + '</p>';
        htmlContent += '</div>';
      });
    }

    // Discovery forms section
    if (discoverySubmissions.length > 0) {
      htmlContent += '<h2>Discovery Form Submissions (' + discoverySubmissions.length + ')</h2>';
      discoverySubmissions.forEach((sub, index) => {
        const projectTypes = Array.isArray(sub.projectType) ? sub.projectType.join(', ') : sub.projectType;
        const features = Array.isArray(sub.features) ? sub.features.join(', ') : sub.features;

        htmlContent += '<div style="margin-bottom: 30px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">';
        htmlContent += '<h3>Discovery #' + (index + 1) + '</h3>';
        htmlContent += '<p><strong>Submitted:</strong> ' + (sub.submittedAt || 'Unknown') + '</p>';
        htmlContent += '<h4>Business Information</h4>';
        htmlContent += '<p><strong>Business Name:</strong> ' + (sub.businessName || 'N/A') + '</p>';
        htmlContent += '<p><strong>Industry:</strong> ' + (sub.industry || 'N/A') + '</p>';
        htmlContent += '<p><strong>Project Type:</strong> ' + (projectTypes || 'N/A') + '</p>';
        htmlContent += '<h4>Project Details</h4>';
        htmlContent += '<p><strong>Budget:</strong> ' + (sub.budget || 'N/A') + '</p>';
        htmlContent += '<p><strong>Timeline:</strong> ' + (sub.timeline || 'N/A') + '</p>';
        htmlContent += '<p><strong>Features Needed:</strong> ' + (features || 'N/A') + '</p>';
        htmlContent += '<p><strong>Goals:</strong></p>';
        htmlContent += '<p>' + (sub.goals || 'N/A').split('\n').join('<br>') + '</p>';
        htmlContent += '<h4>Contact Information</h4>';
        htmlContent += '<p><strong>Name:</strong> ' + (sub.contactName || 'N/A') + '</p>';
        htmlContent += '<p><strong>Email:</strong> ' + (sub.email || 'N/A') + '</p>';
        htmlContent += '<p><strong>Phone:</strong> ' + (sub.phone || 'Not provided') + '</p>';
        htmlContent += '</div>';
      });
    }

    // Send email
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "NetReachGo Forms <onboarding@resend.dev>",
        to: "netreachgo@gmail.com",
        subject: `All Form Submissions - ${contactSubmissions.length} Contact + ${discoverySubmissions.length} Discovery`,
        html: htmlContent,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Error sending submissions email via Resend:", result);
      return c.json({ error: "Failed to send email", details: result }, 500);
    }

    console.log("Submissions email sent successfully:", result);
    return c.json({
      success: true,
      message: "All submissions emailed successfully",
      count: {
        contact: contactSubmissions.length,
        discovery: discoverySubmissions.length,
        total: contactSubmissions.length + discoverySubmissions.length
      }
    });
  } catch (error) {
    console.error("Error emailing past submissions:", error);
    return c.json({ error: "Internal server error", details: error.message }, 500);
  }
});

// Support form endpoint
app.post("/make-server-659f52ae/support", async (c) => {
  try {
    const formData = await c.req.json();

    // Validate required fields
    if (!formData.fullName || !formData.companyName || !formData.email || !formData.phone || !formData.issueType || !formData.priority || !formData.description) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    // Store in KV store with timestamp as key
    const timestamp = Date.now();
    const key = 'support_' + timestamp + '_' + formData.email.split('@')[0];

    await kv.set(key, {
      ...formData,
      submittedAt: new Date().toISOString(),
      timestamp: timestamp
    });

    console.log('Support form data stored with key:', key);

    // Send email notification
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (!resendApiKey) {
      console.error("RESEND_API_KEY environment variable is not set");
      return c.json({
        success: true,
        message: "Form data saved but email notification failed",
        warning: "Email service not configured"
      });
    }

    // Send email using Resend API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "NetReachGo Support <onboarding@resend.dev>",
        to: "netreachgo@gmail.com",
        reply_to: formData.email,
        subject: `[${formData.priority}] Support Request: ${formData.issueType} - ${formData.companyName}`,
        html: [
          '<h2 style="color: #dc2626;">Support Request Received</h2>',
          '<div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">',
          '<p style="margin: 0;"><strong>Priority:</strong> <span style="color: ' + (formData.priority === 'Emergency' ? '#dc2626' : formData.priority === 'High' ? '#ea580c' : '#3b82f6') + ';">' + formData.priority + '</span></p>',
          '<p style="margin: 5px 0 0 0;"><strong>Submitted:</strong> ' + new Date().toLocaleString() + '</p>',
          '</div>',
          '<h3>Contact Information</h3>',
          '<p><strong>Name:</strong> ' + formData.fullName + '</p>',
          '<p><strong>Company:</strong> ' + formData.companyName + '</p>',
          '<p><strong>Email:</strong> ' + formData.email + '</p>',
          '<p><strong>Phone:</strong> ' + formData.phone + '</p>',
          '<h3>Issue Details</h3>',
          '<p><strong>Issue Type:</strong> ' + formData.issueType + '</p>',
          '<p><strong>Description:</strong></p>',
          '<div style="background: #f9fafb; padding: 15px; border-left: 4px solid #3b82f6; margin: 10px 0;">',
          '<p style="margin: 0;">' + formData.description.split('\n').join('<br>') + '</p>',
          '</div>',
          formData.loomUrl ? '<h3>Loom Video</h3><p><a href="' + formData.loomUrl + '" style="color: #3b82f6;">' + formData.loomUrl + '</a></p>' : '',
          '<hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">',
          '<p style="color: #6b7280; font-size: 14px;">This is an automated notification from NetReachGo Support System</p>',
        ].join(''),
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Error sending support email via Resend:", result);
      return c.json({
        success: true,
        message: "Form data saved but email notification failed",
        emailError: result
      });
    }

    console.log("Support email sent successfully:", result);
    return c.json({ success: true, message: "Support request submitted successfully" });
  } catch (error) {
    console.error("Support form error:", error);
    return c.json({ error: "Internal server error", details: error.message }, 500);
  }
});

Deno.serve(app.fetch);