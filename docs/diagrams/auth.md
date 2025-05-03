# 🚀 Productivity Hub — Authentication Flow Overview

```mermaid
flowchart TD
  A1[User initiates login] --> A2[Frontend calls Firebase Authentication]
  A2 --> A3[Firebase authenticates user]
  A3 --> A4[Firebase issues Access Token + Refresh Token]
  A4 --> A5[Frontend stores tokens securely]
  A5 --> A6[Frontend sends Access Token with API request]
  A6 --> A7[Backend verifies Access Token]
  A7 --> A8[Backend authorizes user access]
  A8 --> A11[Frontend receives protected response]

  %% Branch for Refresh Token Flow
  A7 -. Token expired .-> A9[Frontend uses Refresh Token to get new Access Token]
  A9 --> A10[Firebase issues new Access Token]
  A10 --> A5
```

## 📖 Notes

- **Login Flow:** User initiates login via the frontend, which authenticates with Firebase Authentication.
- **Token Issuance:** Firebase returns a short-lived Access Token and a long-lived Refresh Token.
- **Token Storage:** The frontend stores tokens securely.
- **Access Token Usage:** Sent with API requests via the `Authorization` header.
- **Token Validation:** Backend verifies Access Token validity using the Firebase Admin SDK.
- **Authorization:** Once verified, backend authorizes user access to protected endpoints.
- **Refresh Flow:** When the Access Token expires, the frontend uses the Refresh Token to obtain a new Access Token from Firebase without requiring user interaction.

This overview defines the modular authentication flow designed to support secure, token-based session management across frontend and backend.
