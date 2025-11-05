# ⚡ Quick Fix - 2 Minutes

## Your Error:
```
PERMISSION_DENIED: Permission denied
```

## The Fix:

### 1. Open This Link:
https://console.firebase.google.com/project/ari-site-main/database/ari-site-main-default-rtdb/rules

### 2. Delete Everything You See

### 3. Paste This:
```json
{
  "rules": {
    "leads": {
      ".read": false,
      ".write": true
    }
  }
}
```

### 4. Click "Publish" Button (Top Right)

### 5. Test Your Form Again

✅ **Done!** Your form will work now.

---

## Visual Steps:

**Step 1: You'll see this:**
```
Firebase Console → ari-site-main → Realtime Database → Rules
```

**Step 2: Current rules look like:**
```json
{
  "rules": {
    ".read": false,
    ".write": false  // ← This is blocking your form
  }
}
```

**Step 3: Change to:**
```json
{
  "rules": {
    "leads": {
      ".read": false,
      ".write": true  // ← This allows your form to save
    }
  }
}
```

**Step 4: Click Publish**

---

## Test:

1. Go to: http://localhost:3000
2. Click: "Get Instant Access"
3. Fill form:
   - Name: Test
   - Email: test@test.com
   - Phone: 5551234567
4. Click: "Continue to Checkout"
5. Should work! ✅

---

## Verify Data Saved:

Go back to Firebase Console:
- Click **Data** tab
- Look for **leads** node
- See your test data inside

---

**That's it!** The issue is ONLY the Firebase rules. Nothing wrong with your code.
