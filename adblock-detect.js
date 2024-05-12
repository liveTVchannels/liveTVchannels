const fetchAdsScript = async () => {
    try {
        const response = await fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', {
            method: 'HEAD',
            cache: 'no-cache',
            credentials: 'same-origin'
        });
 
        if (!response.ok) {
            return false;
        }
 
        const contentLength = response.headers.get('Content-Length');
        if (!contentLength) {
            return false;
        }
 
        return true;
    } catch (error) {
        return false;
    }
 };
 
 // After page load complete
 window.addEventListener('load', async () => {
    const fetchStatus = await fetchAdsScript();
    if (!fetchStatus) {
        console.log(`We use Ads to keep our website running. Please support us by disabling your AD blocker.`);
    }
 });
