# Send OTP in verification email (no link)

Use this in your **backend** so the verification email contains the **OTP code** only (no "Verify Your Email" link).

## 1. Replace `sendVerificationEmail` in `email.util.ts` (or wherever you send the verification email)

Make sure this is the **only** function that sends the registration verification email, and that it sends **OTP in the body**, not a link:

```ts
import nodemailer from 'nodemailer';

export const sendVerificationEmail = async (email: string, otp: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Lumeart Studio" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Email Verification – Your OTP Code',
    // Plain text: OTP only, no link
    text: `Thank you for registering with Lumeart Studio.\n\nYour email verification code (OTP) is: ${otp}\n\nThis code will expire in 10 minutes. Enter this code on the website to verify your email.\n\nDo not share this code with anyone.`,
    // Optional HTML: same message, OTP highlighted, no button/link
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 500px;">
        <h2>Email Verification</h2>
        <p>Thank you for registering with Lumeart Studio.</p>
        <p>To complete your registration, use the <strong>OTP code</strong> below:</p>
        <p style="font-size: 24px; letter-spacing: 4px; font-weight: bold; color: #6dc7d1;">${otp}</p>
        <p>This code will expire in <strong>10 minutes</strong>. Enter it on the verification page.</p>
        <p>Do not share this code with anyone.</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};
```

## 2. Find and remove the “link” email

You’re currently receiving an email with a **“Verify Your Email” button/link**. That comes from somewhere else. Search your backend for:

- `Verify Your Email` or `Verify your email`
- `verificationToken` or `token` used in a URL (e.g. `https://.../verify?token=`)
- Any HTML template that has a link/button for verification

Then either:

- Replace that flow with the OTP flow above (register sends OTP, user enters it on your site), and delete or stop using the link-based template, or  
- If you want to keep link verification for something else, make sure **registration** only calls the `sendVerificationEmail(email, otp)` that sends the OTP (no link).

## 3. Ensure registration uses OTP only

In `user.service.ts` you already have:

```ts
const otp = generateOTP();
// ...
user.verificationToken = otp;
// ...
await sendVerificationEmail(user.email, otp);
```

So registration is correct. The only fix is: the `sendVerificationEmail` that’s **actually** being used at runtime must be the one that sends the OTP in the body (like the code above), and no other code should send a verification **link** for the same registration flow.

After deploying this, new registration emails should contain only the OTP code, not a link.
