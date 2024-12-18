const slides = [
    `<div class="ticket ticket--one-day">
        <p class=" ticket__text ticket__text--small">one day
        </p>
        <p class="ticket__title">One-Day Pass /
            <span class="ticket__price"> $275
            </span>
        </p>
        <p class="ticket__description">You can choose any of the two days of the TechCon conference.
        </p>
        <ul class="ticket-prices__features">
            <li class="ticket__feature">
                <span class="ticket__icon">
                    <svg width="24" height="20" xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;max-width:100%" xml:space="preserve" height="100%"><switch style="" fill="currentColor"><foreignObject requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/" x="0" y="0" width="1" height="1" style="" fill="currentColor"></foreignObject><g i:extraneous="self" style="" fill="currentColor"><g style="" fill="currentColor"><path d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4     c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1z      M5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z" style="" fill="currentColor"></path><path d="M5268.4,2410.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H5268.4z" style="" fill="currentColor"></path><path d="M5272.7,2413.7h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2414.1,5273.3,2413.7,5272.7,2413.7z" style="" fill="currentColor"></path><path d="M5272.7,2417h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2417.5,5273.3,2417,5272.7,2417z" style="" fill="currentColor"></path></g><path d="M86.2,2.5H13.8C7.6,2.5,2.5,7.6,2.5,13.8v72.4c0,6.2,5.1,11.3,11.3,11.3h72.4c6.2,0,11.3-5.1,11.3-11.3V13.8    C97.5,7.6,92.4,2.5,86.2,2.5z M73.4,36.9L47.5,67.6l-3.3,3.9c-0.9,1.1-2.6,1.1-3.5,0l-3.3-3.9L26.7,54.7c-0.8-0.9-0.7-2.3,0.2-3.1    l5.7-5.2c0.9-0.8,2.3-0.8,3.1,0.1l6.9,6.9L66,30.1c0.9-0.9,2.2-0.9,3.1-0.1l4.1,3.8C74.1,34.6,74.2,36,73.4,36.9z" style="" fill="currentColor"></path></g></switch>
                    </svg>
                </span>
                <span class="ticket__option">
                    <em>Admission for one day only;</em>
                </span><br>
            </li>
            <li class="ticket__feature">
                <span class="ticket__icon">
                    <svg width="24" height="20" xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;max-width:100%" xml:space="preserve" height="100%"><switch style="" fill="currentColor"><foreignObject requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/" x="0" y="0" width="1" height="1" style="" fill="currentColor"></foreignObject><g i:extraneous="self" style="" fill="currentColor"><g style="" fill="currentColor"><path d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4     c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1z      M5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z" style="" fill="currentColor"></path><path d="M5268.4,2410.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H5268.4z" style="" fill="currentColor"></path><path d="M5272.7,2413.7h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2414.1,5273.3,2413.7,5272.7,2413.7z" style="" fill="currentColor"></path><path d="M5272.7,2417h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2417.5,5273.3,2417,5272.7,2417z" style="" fill="currentColor"></path></g><path d="M86.2,2.5H13.8C7.6,2.5,2.5,7.6,2.5,13.8v72.4c0,6.2,5.1,11.3,11.3,11.3h72.4c6.2,0,11.3-5.1,11.3-11.3V13.8    C97.5,7.6,92.4,2.5,86.2,2.5z M73.4,36.9L47.5,67.6l-3.3,3.9c-0.9,1.1-2.6,1.1-3.5,0l-3.3-3.9L26.7,54.7c-0.8-0.9-0.7-2.3,0.2-3.1    l5.7-5.2c0.9-0.8,2.3-0.8,3.1,0.1l6.9,6.9L66,30.1c0.9-0.9,2.2-0.9,3.1-0.1l4.1,3.8C74.1,34.6,74.2,36,73.4,36.9z" style="" fill="currentColor"></path></g></switch>
                    </svg>
                </span>
                <span class="ticket__option">
                    <em>Access to all stages;</em>
                </span><br>
            </li>
            <li class="ticket__feature">
                <span class="ticket__icon">
                    <svg width="24" height="20" xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;max-width:100%" xml:space="preserve" height="100%"><switch style="" fill="currentColor"><foreignObject requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/" x="0" y="0" width="1" height="1" style="" fill="currentColor"></foreignObject><g i:extraneous="self" style="" fill="currentColor"><g style="" fill="currentColor"><path d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4     c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1z      M5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z" style="" fill="currentColor"></path><path d="M5268.4,2410.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H5268.4z" style="" fill="currentColor"></path><path d="M5272.7,2413.7h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2414.1,5273.3,2413.7,5272.7,2413.7z" style="" fill="currentColor"></path><path d="M5272.7,2417h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2417.5,5273.3,2417,5272.7,2417z" style="" fill="currentColor"></path></g><path d="M86.2,2.5H13.8C7.6,2.5,2.5,7.6,2.5,13.8v72.4c0,6.2,5.1,11.3,11.3,11.3h72.4c6.2,0,11.3-5.1,11.3-11.3V13.8    C97.5,7.6,92.4,2.5,86.2,2.5z M73.4,36.9L47.5,67.6l-3.3,3.9c-0.9,1.1-2.6,1.1-3.5,0l-3.3-3.9L26.7,54.7c-0.8-0.9-0.7-2.3,0.2-3.1    l5.7-5.2c0.9-0.8,2.3-0.8,3.1,0.1l6.9,6.9L66,30.1c0.9-0.9,2.2-0.9,3.1-0.1l4.1,3.8C74.1,34.6,74.2,36,73.4,36.9z" style="" fill="currentColor"></path></g></switch>
                    </svg>
                </span>
                <span class="ticket__option">
                    <em>Lunch and coffee break</em>.
                </span><br>
            </li>
        </ul>
        <a href="#about-conference">
            <button class="ticket__button">Buy ticket now
            </button>
        </a>
    </div>`,
    `<div class="ticket ticket--fullpass">
        <p class="ticket__text ticket__text--small">all days
        </p>
        <p class="ticket__title">Full Pass (<del><span class="text--line-through">early</span></del>) /
            <span class="ticket__price"> 620$
            </span>
        </p>
        <p class="ticket__description">Enjoy two days of the conference by purchasing the full ticket.
        </p>
        <ul class="ticket-prices__features">
            <li class="ticket__feature">
                <span class="ticket__icon">
                    <svg width="24" height="20" xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;max-width:100%" xml:space="preserve" height="100%"><switch style="" fill="currentColor"><foreignObject requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/" x="0" y="0" width="1" height="1" style="" fill="currentColor"></foreignObject><g i:extraneous="self" style="" fill="currentColor"><g style="" fill="currentColor"><path d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4     c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1z      M5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z" style="" fill="currentColor"></path><path d="M5268.4,2410.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H5268.4z" style="" fill="currentColor"></path><path d="M5272.7,2413.7h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2414.1,5273.3,2413.7,5272.7,2413.7z" style="" fill="currentColor"></path><path d="M5272.7,2417h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2417.5,5273.3,2417,5272.7,2417z" style="" fill="currentColor"></path></g><path d="M86.2,2.5H13.8C7.6,2.5,2.5,7.6,2.5,13.8v72.4c0,6.2,5.1,11.3,11.3,11.3h72.4c6.2,0,11.3-5.1,11.3-11.3V13.8    C97.5,7.6,92.4,2.5,86.2,2.5z M73.4,36.9L47.5,67.6l-3.3,3.9c-0.9,1.1-2.6,1.1-3.5,0l-3.3-3.9L26.7,54.7c-0.8-0.9-0.7-2.3,0.2-3.1    l5.7-5.2c0.9-0.8,2.3-0.8,3.1,0.1l6.9,6.9L66,30.1c0.9-0.9,2.2-0.9,3.1-0.1l4.1,3.8C74.1,34.6,74.2,36,73.4,36.9z" style="" fill="currentColor"></path></g></switch>
                    </svg>
                </span>
                <span class="ticket__option"><em>Admission for two days;</em>
                </span><br>
            </li>
            <li class="ticket__feature">
                <span class="ticket__icon">
                    <svg width="24" height="20" xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;max-width:100%" xml:space="preserve" height="100%"><switch style="" fill="currentColor"><foreignObject requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/" x="0" y="0" width="1" height="1" style="" fill="currentColor"></foreignObject><g i:extraneous="self" style="" fill="currentColor"><g style="" fill="currentColor"><path d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4     c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1z      M5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z" style="" fill="currentColor"></path><path d="M5268.4,2410.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H5268.4z" style="" fill="currentColor"></path><path d="M5272.7,2413.7h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2414.1,5273.3,2413.7,5272.7,2413.7z" style="" fill="currentColor"></path><path d="M5272.7,2417h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2417.5,5273.3,2417,5272.7,2417z" style="" fill="currentColor"></path></g><path d="M86.2,2.5H13.8C7.6,2.5,2.5,7.6,2.5,13.8v72.4c0,6.2,5.1,11.3,11.3,11.3h72.4c6.2,0,11.3-5.1,11.3-11.3V13.8    C97.5,7.6,92.4,2.5,86.2,2.5z M73.4,36.9L47.5,67.6l-3.3,3.9c-0.9,1.1-2.6,1.1-3.5,0l-3.3-3.9L26.7,54.7c-0.8-0.9-0.7-2.3,0.2-3.1    l5.7-5.2c0.9-0.8,2.3-0.8,3.1,0.1l6.9,6.9L66,30.1c0.9-0.9,2.2-0.9,3.1-0.1l4.1,3.8C74.1,34.6,74.2,36,73.4,36.9z" style="" fill="currentColor"></path></g></switch>
                    </svg>
                </span>
                <span class="ticket__option"><em>Access to all stages;</em>
                </span><br>
            </li>
            <li class="ticket__feature">
                <span class="ticket__icon">
                    <svg width="24" height="20" xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;max-width:100%" xml:space="preserve" height="100%"><switch style="" fill="currentColor"><foreignObject requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/" x="0" y="0" width="1" height="1" style="" fill="currentColor"></foreignObject><g i:extraneous="self" style="" fill="currentColor"><g style="" fill="currentColor"><path d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4     c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1z      M5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z" style="" fill="currentColor"></path><path d="M5268.4,2410.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H5268.4z" style="" fill="currentColor"></path><path d="M5272.7,2413.7h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2414.1,5273.3,2413.7,5272.7,2413.7z" style="" fill="currentColor"></path><path d="M5272.7,2417h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2417.5,5273.3,2417,5272.7,2417z" style="" fill="currentColor"></path></g><path d="M86.2,2.5H13.8C7.6,2.5,2.5,7.6,2.5,13.8v72.4c0,6.2,5.1,11.3,11.3,11.3h72.4c6.2,0,11.3-5.1,11.3-11.3V13.8    C97.5,7.6,92.4,2.5,86.2,2.5z M73.4,36.9L47.5,67.6l-3.3,3.9c-0.9,1.1-2.6,1.1-3.5,0l-3.3-3.9L26.7,54.7c-0.8-0.9-0.7-2.3,0.2-3.1    l5.7-5.2c0.9-0.8,2.3-0.8,3.1,0.1l6.9,6.9L66,30.1c0.9-0.9,2.2-0.9,3.1-0.1l4.1,3.8C74.1,34.6,74.2,36,73.4,36.9z" style="" fill="currentColor"></path></g></switch>
                    </svg>
                </span>
                <span><em class="ticket__option">Lunch, coffee and afterparty.</em>
                </span><br>
            </li>
        </ul>
        <a href="#about-conference">
            <button class="ticket__button">Buy ticket now
            </button>
        </a>    
    </div>`,
    `<div class="ticket ticket--earlybird">
        <p class="ticket__text ticket__text--small">all days
        </p>
        <p class="ticket__title">Early-Bird Pass /
            <span class="ticket__price"> 550$
            </span>
        </p>
        <p class="ticket__description">The price is available from the day the sale starts and 2 weeks after.
        </p>
        <ul class="ticket-prices__features">
            <li class="ticket__feature">
                <span class="ticket__icon">
                    <svg width="24" height="20" xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;max-width:100%" xml:space="preserve" height="100%"><switch style="" fill="currentColor"><foreignObject requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/" x="0" y="0" width="1" height="1" style="" fill="currentColor"></foreignObject><g i:extraneous="self" style="" fill="currentColor"><g style="" fill="currentColor"><path d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4     c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1z      M5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z" style="" fill="currentColor"></path><path d="M5268.4,2410.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H5268.4z" style="" fill="currentColor"></path><path d="M5272.7,2413.7h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2414.1,5273.3,2413.7,5272.7,2413.7z" style="" fill="currentColor"></path><path d="M5272.7,2417h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2417.5,5273.3,2417,5272.7,2417z" style="" fill="currentColor"></path></g><path d="M86.2,2.5H13.8C7.6,2.5,2.5,7.6,2.5,13.8v72.4c0,6.2,5.1,11.3,11.3,11.3h72.4c6.2,0,11.3-5.1,11.3-11.3V13.8    C97.5,7.6,92.4,2.5,86.2,2.5z M73.4,36.9L47.5,67.6l-3.3,3.9c-0.9,1.1-2.6,1.1-3.5,0l-3.3-3.9L26.7,54.7c-0.8-0.9-0.7-2.3,0.2-3.1    l5.7-5.2c0.9-0.8,2.3-0.8,3.1,0.1l6.9,6.9L66,30.1c0.9-0.9,2.2-0.9,3.1-0.1l4.1,3.8C74.1,34.6,74.2,36,73.4,36.9z" style="" fill="currentColor"></path></g></switch>
                    </svg>
                </span>
                <span class="ticket__option"><em>Admission for two days;</em>
                </span><br>
            </li>
            <li class="ticket__feature">
                <span class="ticket__icon">
                    <svg width="24" height="20" xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;max-width:100%" xml:space="preserve" height="100%"><switch style="" fill="currentColor"><foreignObject requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/" x="0" y="0" width="1" height="1" style="" fill="currentColor"></foreignObject><g i:extraneous="self" style="" fill="currentColor"><g style="" fill="currentColor"><path d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4     c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1z      M5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z" style="" fill="currentColor"></path><path d="M5268.4,2410.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H5268.4z" style="" fill="currentColor"></path><path d="M5272.7,2413.7h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2414.1,5273.3,2413.7,5272.7,2413.7z" style="" fill="currentColor"></path><path d="M5272.7,2417h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2417.5,5273.3,2417,5272.7,2417z" style="" fill="currentColor"></path></g><path d="M86.2,2.5H13.8C7.6,2.5,2.5,7.6,2.5,13.8v72.4c0,6.2,5.1,11.3,11.3,11.3h72.4c6.2,0,11.3-5.1,11.3-11.3V13.8    C97.5,7.6,92.4,2.5,86.2,2.5z M73.4,36.9L47.5,67.6l-3.3,3.9c-0.9,1.1-2.6,1.1-3.5,0l-3.3-3.9L26.7,54.7c-0.8-0.9-0.7-2.3,0.2-3.1    l5.7-5.2c0.9-0.8,2.3-0.8,3.1,0.1l6.9,6.9L66,30.1c0.9-0.9,2.2-0.9,3.1-0.1l4.1,3.8C74.1,34.6,74.2,36,73.4,36.9z" style="" fill="currentColor"></path></g></switch>
                    </svg>
                </span>
                <span class="ticket__option"><em>Access to all stages;</em>
                </span><br>
            </li>
            <li class="ticket__feature">
                <span class="ticket__icon">
                    <svg width="24" height="20" xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;max-width:100%" xml:space="preserve" height="100%"><switch style="" fill="currentColor"><foreignObject requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/" x="0" y="0" width="1" height="1" style="" fill="currentColor"></foreignObject><g i:extraneous="self" style="" fill="currentColor"><g style="" fill="currentColor"><path d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4     c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1z      M5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z" style="" fill="currentColor"></path><path d="M5268.4,2410.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H5268.4z" style="" fill="currentColor"></path><path d="M5272.7,2413.7h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2414.1,5273.3,2413.7,5272.7,2413.7z" style="" fill="currentColor"></path><path d="M5272.7,2417h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2417.5,5273.3,2417,5272.7,2417z" style="" fill="currentColor"></path></g><path d="M86.2,2.5H13.8C7.6,2.5,2.5,7.6,2.5,13.8v72.4c0,6.2,5.1,11.3,11.3,11.3h72.4c6.2,0,11.3-5.1,11.3-11.3V13.8    C97.5,7.6,92.4,2.5,86.2,2.5z M73.4,36.9L47.5,67.6l-3.3,3.9c-0.9,1.1-2.6,1.1-3.5,0l-3.3-3.9L26.7,54.7c-0.8-0.9-0.7-2.3,0.2-3.1    l5.7-5.2c0.9-0.8,2.3-0.8,3.1,0.1l6.9,6.9L66,30.1c0.9-0.9,2.2-0.9,3.1-0.1l4.1,3.8C74.1,34.6,74.2,36,73.4,36.9z" style="" fill="currentColor"></path></g></switch>
                    </svg>
                    </span>
                <span class="ticket__option"><em>Lunch, coffee and afterparty.</em>
                </span><br>
            </li>
        </ul>
        <a href="#about-conference">
            <button class="ticket__button">Buy ticket now
            </button>
        </a>
    </div>`,
    `<div class="ticket ticket--one-day-early">
            <p class="ticket__text ticket__text--small">one day
            </p>
            <p class="ticket__title">One Day (<del><span class="text--line-through">early</span></del>) /
                <span class="ticket__price"> 310$
                </span>
            </p>
            <p class="ticket__description">This price is valid for a one-day ticket on any of the two days.
            </p>
            <ul class="ticket-prices__features">
                <li class="ticket__feature">
                    <span class="ticket__icon">
                        <svg width="24" height="20" xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;max-width:100%" xml:space="preserve" height="100%"><switch style="" fill="currentColor"><foreignObject requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/" x="0" y="0" width="1" height="1" style="" fill="currentColor"></foreignObject><g i:extraneous="self" style="" fill="currentColor"><g style="" fill="currentColor"><path d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4     c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1z      M5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z" style="" fill="currentColor"></path><path d="M5268.4,2410.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H5268.4z" style="" fill="currentColor"></path><path d="M5272.7,2413.7h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2414.1,5273.3,2413.7,5272.7,2413.7z" style="" fill="currentColor"></path><path d="M5272.7,2417h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2417.5,5273.3,2417,5272.7,2417z" style="" fill="currentColor"></path></g><path d="M86.2,2.5H13.8C7.6,2.5,2.5,7.6,2.5,13.8v72.4c0,6.2,5.1,11.3,11.3,11.3h72.4c6.2,0,11.3-5.1,11.3-11.3V13.8    C97.5,7.6,92.4,2.5,86.2,2.5z M73.4,36.9L47.5,67.6l-3.3,3.9c-0.9,1.1-2.6,1.1-3.5,0l-3.3-3.9L26.7,54.7c-0.8-0.9-0.7-2.3,0.2-3.1    l5.7-5.2c0.9-0.8,2.3-0.8,3.1,0.1l6.9,6.9L66,30.1c0.9-0.9,2.2-0.9,3.1-0.1l4.1,3.8C74.1,34.6,74.2,36,73.4,36.9z" style="" fill="currentColor"></path></g></switch>
                        </svg>
                    </span>
                    <span class="ticket__option"><em>Admission for day only; </em>
                    </span><br>
                </li>
                <li class="ticket__feature">
                    <span class="ticket__icon">
                        <svg width="24" height="20" xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;max-width:100%" xml:space="preserve" height="100%"><switch style="" fill="currentColor"><foreignObject requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/" x="0" y="0" width="1" height="1" style="" fill="currentColor"></foreignObject><g i:extraneous="self" style="" fill="currentColor"><g style="" fill="currentColor"><path d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4     c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1z      M5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z" style="" fill="currentColor"></path><path d="M5268.4,2410.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H5268.4z" style="" fill="currentColor"></path><path d="M5272.7,2413.7h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2414.1,5273.3,2413.7,5272.7,2413.7z" style="" fill="currentColor"></path><path d="M5272.7,2417h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2417.5,5273.3,2417,5272.7,2417z" style="" fill="currentColor"></path></g><path d="M86.2,2.5H13.8C7.6,2.5,2.5,7.6,2.5,13.8v72.4c0,6.2,5.1,11.3,11.3,11.3h72.4c6.2,0,11.3-5.1,11.3-11.3V13.8    C97.5,7.6,92.4,2.5,86.2,2.5z M73.4,36.9L47.5,67.6l-3.3,3.9c-0.9,1.1-2.6,1.1-3.5,0l-3.3-3.9L26.7,54.7c-0.8-0.9-0.7-2.3,0.2-3.1    l5.7-5.2c0.9-0.8,2.3-0.8,3.1,0.1l6.9,6.9L66,30.1c0.9-0.9,2.2-0.9,3.1-0.1l4.1,3.8C74.1,34.6,74.2,36,73.4,36.9z" style="" fill="currentColor"></path></g></switch>
                        </svg>
                    </span>
                    <span class="ticket__option"><em>Access to all stages;</em>
                    </span><br>
                </li>
                <li class="ticket__feature">
                    <span class="ticket__icon">
                        <svg width="24" height="20" xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;max-width:100%" xml:space="preserve" height="100%"><switch style="" fill="currentColor"><foreignObject requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/" x="0" y="0" width="1" height="1" style="" fill="currentColor"></foreignObject><g i:extraneous="self" style="" fill="currentColor"><g style="" fill="currentColor"><path d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4     c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1z      M5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z" style="" fill="currentColor"></path><path d="M5268.4,2410.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H5268.4z" style="" fill="currentColor"></path><path d="M5272.7,2413.7h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2414.1,5273.3,2413.7,5272.7,2413.7z" style="" fill="currentColor"></path><path d="M5272.7,2417h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2417.5,5273.3,2417,5272.7,2417z" style="" fill="currentColor"></path></g><path d="M86.2,2.5H13.8C7.6,2.5,2.5,7.6,2.5,13.8v72.4c0,6.2,5.1,11.3,11.3,11.3h72.4c6.2,0,11.3-5.1,11.3-11.3V13.8    C97.5,7.6,92.4,2.5,86.2,2.5z M73.4,36.9L47.5,67.6l-3.3,3.9c-0.9,1.1-2.6,1.1-3.5,0l-3.3-3.9L26.7,54.7c-0.8-0.9-0.7-2.3,0.2-3.1    l5.7-5.2c0.9-0.8,2.3-0.8,3.1,0.1l6.9,6.9L66,30.1c0.9-0.9,2.2-0.9,3.1-0.1l4.1,3.8C74.1,34.6,74.2,36,73.4,36.9z" style="" fill="currentColor"></path></g></switch>
                        </svg>
                    </span>
                    <span class="ticket__option"><em>Lunch and coffee break.</em>
                    </span><br>
                </li>
            </ul>
        <a href="#about-conference">
            <button class="ticket__button">Buy ticket now
            </button>
        </a>
    </div>`,
];

let currIdx = 0;

function renderCarousel() {
  const slidesContainer = document.querySelector(".carousel__slides");
  slidesContainer.innerHTML = slides[currIdx];
  if (window.matchMedia("(min-width: 770px)").matches) {
    const secondSlideIdx = currIdx + 1 >= slides.length ? 0 : currIdx + 1;
    slidesContainer.innerHTML += slides[secondSlideIdx];
    if (window.matchMedia("(min-width: 1024px)").matches) {
      const thirdSlideIdx =
        secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
      slidesContainer.innerHTML += slides[thirdSlideIdx];
    }
  }
}

function nextSlide() {
  currIdx = currIdx + 1 >= slides.length ? 0 : currIdx + 1;
  renderCarousel();
}

function prevSlide() {
  currIdx = currIdx - 1 < 0 ? slides.length - 1 : currIdx - 1;
  renderCarousel();
}

// setInterval(nextSlide, 3000);

renderCarousel();

const btnNext = document.querySelector(".carousel__arrow-control--next");
btnNext.addEventListener("click", nextSlide);

const btnPrev = document.querySelector(".carousel__arrow-control--prev");
btnPrev.addEventListener("click", prevSlide);

window.addEventListener("resize", renderCarousel);
