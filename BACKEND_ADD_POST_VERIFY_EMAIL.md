# Backend: Add POST /verify-email for OTP

The frontend calls **POST** `http://localhost:3000/api/verify-email` with body `{ email, otp }`.  
You currently only have **GET** `/verify-email?token=...`. Add the following in **BookCoverBackend**.

---

## 1. Router (e.g. `routes/user.routes.ts` or `routes/auth.routes.ts`)

Add a **POST** route for verify-email (keep your existing GET if you still use the link):

```ts
// For OTP verification (frontend modal)
router.post('/verify-email', verifyEmailWithOTP);

// Existing link verification (optional)
router.get('/verify-email', verifyEmail);
```

---

## 2. Controller (e.g. `controllers/user.controller.ts`)

Add a new controller function:

```ts
export const verifyEmailWithOTP = async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        message: 'Email and OTP are required',
      });
    }

    const user = await verifyUserEmailByOTP(email, otp);

    return res.status(200).json({
      message: 'Email verified successfully',
      user: {
        userId: user.userId,
        email: user.email,
        role: user.role,
        isVerified: user.isVerified,
      },
    });
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({
      message: error.message || 'Email verification failed',
    });
  }
};
```

---

## 3. Service (e.g. `services/user.service.ts`)

Add a function that verifies by **email + OTP** (not by token). If you already have this, reuse it; otherwise add:

```ts
export const verifyUserEmailByOTP = async (email: string, otp: string): Promise<IUser> => {
  const user = await User.findOne({
    email,
    verificationToken: otp,
  });

  if (!user) {
    throw new ErrorHandler(404, 'Invalid OTP or user not found');
  }

  if (!user.verificationTokenExpiry || user.verificationTokenExpiry < new Date()) {
    throw new ErrorHandler(400, 'OTP has expired');
  }

  user.isVerified = true;
  user.verificationToken = '';
  user.verificationTokenExpiry = undefined;
  await user.save();

  return user;
};
```

---

## 4. Register flow must send OTP (not JWT link)

In `registerUser`, use OTP and pass it to the email:

- `const otp = generateOTP();`
- `verificationToken: otp`
- `verificationTokenExpiry: new Date(Date.now() + 10 * 60 * 1000)`
- `await sendVerificationEmail(user.email, otp);`

And `sendVerificationEmail(email, otp)` must send the **OTP in the email body** (e.g. "Your code is: 1234"), not a link.

---

After adding **POST** `/verify-email` and the OTP verify logic, the frontend’s `verifyEmailWithOTP(email, otp)` call will work and the 404 will go away.
