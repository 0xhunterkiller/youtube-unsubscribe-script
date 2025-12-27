# youtube-unsubscribe-script
Helps you unsubscribe from all youtube channels

CREDITS: https://www.reddit.com/user/Due-Switch-442/

# ⚠️ Disclaimer

This repository is for educational and experimental purposes only.
It demonstrates browser automation techniques such as DOM interaction, delays, and scripted user flows.

Automating interactions with third-party platforms may violate their Terms of Service.
The author does not encourage or endorse misuse, and users are solely responsible for how they use this code.

# How to use the script

1. Login to your YouTube Account
2. Go to https://www.youtube.com/feed/channels
3. Open Developer Console (`Ctrl` + `Shift` + `i`) > In the top, click on `Console` 
4. Type `allow pasting` and hit `Enter`
5. Paste the script given in `index.js` (tweak UNSUBSCRIBE DELAY TIME, according to your needs - 2 seconds by default)
6. Hit `Enter`, and watch it work its magic :)

# Important note on safety (read this)

* To keep things smooth and avoid rate-limits:
  * Use a proper time delay between actions
  * 7–10 seconds per unsubscribe is the safest range
  * Large subscription lists (> 200 channels) should be cleared in multiple sessions
  * With reasonable throttling, this behaves much closer to normal user interaction.

