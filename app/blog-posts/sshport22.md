That's an excellent and very common question! You're right, a determined attacker running a full port scan (`nmap -p-`) _will_ eventually find your SSH service, regardless of which port it's running on.

So, why do people still recommend changing the default SSH port (22)? The reasoning boils down to **reducing noise and deterring low-effort automated attacks**, not providing foolproof security against a targeted attack.

Here's the breakdown:

1.  **Security Through Obscurity (Minor Benefit):** Changing the port is a form of "security through obscurity." It relies on hiding the service rather than fundamentally securing it. True security comes from strong authentication, firewalls, etc. Obscurity alone is weak.

2.  **Massively Reduces Automated Scans and Brute-Force Attempts:** This is the **primary and most practical reason**.

    - The vast majority of malicious internet traffic targeting SSH consists of automated bots (often part of botnets) scanning _only_ port 22 across huge IP ranges.
    - These bots are looking for the "low-hanging fruit" – servers with default settings and weak passwords on the standard port.
    - By moving SSH off port 22, you instantly become invisible to probably 99%+ of these low-effort, automated attacks.
    - **Result:** Your server logs (`/var/log/auth.log` or similar) become _significantly_ cleaner. Instead of seeing hundreds or thousands of failed login attempts per day from random bots, you'll see very few, if any. This makes it much easier to spot actual suspicious activity or legitimate login issues.

3.  **Slightly Raises the Bar (Minimal Benefit):** While a targeted attacker _will_ find the port, it forces them to perform an extra step (a full port scan) instead of just assuming port 22. It's a tiny hurdle, but it deviates from the simplest attack path.

**Why it's NOT a Silver Bullet:**

- **Doesn't Stop Targeted Attacks:** Anyone specifically interested in _your_ server will simply scan all ports. Changing the port number offers zero protection against this.
- **Doesn't Fix Weak Security:** If you have weak passwords or aren't using SSH keys, an attacker who finds your new SSH port will still be able to brute-force their way in just as easily.
- **Can Cause Minor Inconvenience:** You and any legitimate users have to remember to specify the custom port when connecting (e.g., `ssh user@your_vps_ip -p <NEW_PORT>`).

**Conclusion:**

Changing the SSH port away from 22 is **not a primary security measure**, but rather a **highly effective log noise reduction technique**.

- **Do it primarily to stop the flood of automated bots hammering port 22.** This makes your logs usable and reduces trivial load on your server.
- **Do NOT rely on it for real security.**
- **ALWAYS combine it with _actual_ security best practices:**
  - **Use SSH Key Authentication ONLY** (disable password authentication). This is the single most important SSH security step.
  - Use strong passphrases for your SSH keys.
  - Keep your system and SSH server updated.
  - Use a firewall (like `ufw` or `firewalld`) to restrict access, potentially only allowing connections from specific trusted IP addresses if possible.
  - Consider using tools like `fail2ban` to automatically block IPs that make repeated failed login attempts (even on your custom port).

So, yes, a port scan will find the new port, but changing it still serves the useful purpose of filtering out the vast majority of automated garbage traffic, making your life as an administrator easier and your logs cleaner.
