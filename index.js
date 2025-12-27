(async function iife() {
    var UNSUBSCRIBE_DELAY_TIME = 2000; // Delay between each unsubscribe
    /**
    * Delay runner. Wraps `setTimeout` so it can be `await`ed on.
    * u/param {Function} fn
    * u/param {number} delay
    */
    var wait = (delay) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, delay);
        });
    
    // Get the channel list; this can be considered a row in the page.
    var channels = Array.from(
        document.querySelectorAll(
            "ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button"
        )
    );
    console.log(`${channels.length} channels found.`);
    
    var ctr = 0;
    for (const channel of channels) {
        try {
            // Get the subsribe button and trigger a "click"
            channel.click();
            await wait(100);
            document.querySelector("#items > ytd-menu-service-item-renderer:nth-child(4)").click();
            await wait(800);
            document.querySelector("#confirm-button > yt-button-shape > button > yt-touch-feedback-shape").click();
            await wait(UNSUBSCRIBE_DELAY_TIME);
            console.log(`Unsubsribed ${ctr + 1}/${channels.length}`);
            ctr++;
        } catch (e) {
            console.error(e);
        }
    }
})();
