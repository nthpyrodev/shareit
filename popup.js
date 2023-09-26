// Define an array of TinyURL API keys
const apiKeys = [
  "oQZXGd8UM13VzNauSA8rl0tCd6MX1PvmxiAUCpWiwbSOT7yQjGi5uR1E0wuO",
  "h2egBN2hkgv5ZdMYYbE2vJP0edDHVDDPO4a6xnkvXrGgnUSeq1PNLR03oMP9",
  "VXVVwDwgTnu2cSboURI2kuK6gfwM5wv96pwG1FOI75zPlr60pwrpR6wxqh1v",
  "6w7kUimq5gEZjKzdTN2j4qDfFtXx0HMY6eA9qCcBox1p6Sg3DUkZTHa99AFb"
];






// Function to translate text to Morse code
function textToMorse(text) {
    const morseCode = {
      A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.", G: "--.", H: "....", I: "..",
      J: ".---", K: "-.-", L: ".-..", M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.",
      S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-", Y: "-.--", Z: "--..",
      "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....",
      "6": "-....", "7": "--...", "8": "---..", "9": "----.",
      ".": ".-.-.-", ",": "--..--", "?": "..--..", "'": ".----.", "!": "-.-.--", "/": "-..-.",
      "(": "-.--.", ")": "-.--.-", "&": ".-...", ":": "---...", ";": "-.-.-.", "=": "-...-",
      "+": ".-.-.", "-": "-....-", "_": "..--.-", "\"": ".-..-.", "$": "...-..-", "@": ".--.-."
    };
  
    text = text.toUpperCase();
    let morseText = "";
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (morseCode[char]) {
        morseText += morseCode[char] + " ";
      } else {
        morseText += "   "; // Add three spaces for word separation
      }
    }
    return morseText;
  }







// Get the current tab's URL and set up the image click event
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    const shareLink = currentTab.url;
  
    const image = document.getElementById("image");
    image.addEventListener("click", () => {
      navigator.clipboard.writeText(shareLink);
      const statusText = document.getElementById("statusText");
      statusText.textContent = "Link Copied!";
      setTimeout(() => {
        statusText.textContent = "";
      }, 3000);
    });
 
  
  // Set up image click event for sharing on X
  const xImage = document.getElementById("xImage");
  xImage.addEventListener("click", () => {
    const xUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareLink)}`;
    window.open(xUrl, "_blank");
  });


  // Set up image click event for sharing on Reddit
  const redditImage = document.getElementById("redditImage");
  redditImage.addEventListener("click", () => {
    const redditUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(shareLink)}`;
    window.open(redditUrl, "_blank");
  });


    // Set up image click event for sharing on Facebook
    const facebookImage = document.getElementById("facebookImage");
    facebookImage.addEventListener("click", () => {
      const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}`;
      window.open(facebookUrl, "_blank");
    });


  // Set up image click event for sharing on Tumblr
  const tumblrImage = document.getElementById("tumblrImage");
  tumblrImage.addEventListener("click", () => {
    const tumblrUrl = `http://tumblr.com/widgets/share/tool?canonicalUrl=${encodeURIComponent(shareLink)}`;
    window.open(tumblrUrl, "_blank");
  });



  // Set up image click event for sharing on Pinterest
  const pinterestImage = document.getElementById("pinterestImage");
  pinterestImage.addEventListener("click", () => {
    const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareLink)}`;
    window.open(pinterestUrl, "_blank");
  });

    // Set up image click event for sharing on LinkedIn
    const linkedinImage = document.getElementById("linkedinImage");
    linkedinImage.addEventListener("click", () => {
      const linkedinUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(shareLink)}`;
      window.open(linkedinUrl, "_blank");
    });
  
    // Set up image click event for sharing on WhatsApp
    const whatsappImage = document.getElementById("whatsappImage");
    whatsappImage.addEventListener("click", () => {
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareLink)}`;
      window.open(whatsappUrl, "_blank");
    });
    
  // Set up image click event for sharing on MySpace
  const myspaceImage = document.getElementById("myspaceImage");
  myspaceImage.addEventListener("click", () => {
    const myspaceUrl = `https://myspace.com/post?u=${encodeURIComponent(shareLink)}`;
    window.open(myspaceUrl, "_blank");
  });

  // Set up image click event for sharing on Vkontakte
  const vkontakteImage = document.getElementById("vkontakteImage");
  vkontakteImage.addEventListener("click", () => {
    const vkontakteUrl = `https://vk.com/share.php?url=${encodeURIComponent(shareLink)}`;
    window.open(vkontakteUrl, "_blank");
  });

  // Set up image click event for sharing on Skype
const skypeImage = document.getElementById("skypeImage");
skypeImage.addEventListener("click", () => {
  const skypeUrl = `https://web.skype.com/share?url=${encodeURIComponent(shareLink)}`;
  window.open(skypeUrl, "_blank");
});

// Set up image click event for sharing on Mastodon
const mastodonImage = document.getElementById("mastodonImage");
mastodonImage.addEventListener("click", () => {
  const mastodonUrl = `https://mastodonshare.com/share?url=${encodeURIComponent(shareLink)}`;
  window.open(mastodonUrl, "_blank");
});


  // Set up image click event for sharing on Telegram
  const telegramImage = document.getElementById("telegramImage");
  telegramImage.addEventListener("click", () => {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(shareLink)}`;
    window.open(telegramUrl, "_blank");
  });

  
    // Set up image click event for sharing on LINE
    const lineImage = document.getElementById("lineImage");
    lineImage.addEventListener("click", () => {
      const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareLink)}`;
      window.open(lineUrl, "_blank");
    });
    

    // Set up image click event for sharing on Facebook Messenger
    const fbMessengerImage = document.getElementById("fbMessengerImage");
    fbMessengerImage.addEventListener("click", () => {
      const fbMessengerUrl = `https://www.facebook.com/dialog/send?link=${encodeURIComponent(shareLink)}`;
      window.open(fbMessengerUrl, "_blank");
    });

      // Set up image click event for sharing on Blogger
  const bloggerImage = document.getElementById("bloggerImage");
  bloggerImage.addEventListener("click", () => {
    const bloggerUrl = `https://www.blogger.com/blog-this.g?u=${encodeURIComponent(shareLink)}`;
    window.open(bloggerUrl, "_blank");
  });

    // Set up image click event for sharing via Gmail
    const gmailImage = document.getElementById("gmailImage");
    gmailImage.addEventListener("click", () => {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&to=&su=${encodeURIComponent("Check out this link")}&body=${encodeURIComponent(shareLink)}`;
      window.open(gmailUrl, "_blank");
    });

      // Set up image click event for sharing via email
  const emailImage = document.getElementById("emailImage");
  emailImage.addEventListener("click", () => {
    const subject = encodeURIComponent("Check out this link");
    const body = encodeURIComponent(`I thought you might find this interesting:\n${shareLink}`);
    const emailUrl = `mailto:?subject=${subject}&body=${body}`;
    window.open(emailUrl, "_blank");
  });


      // Set up image click event for taking a screenshot
  const screenshotImage = document.getElementById("screenshotImage");
  screenshotImage.addEventListener("click", () => {
    chrome.tabs.captureVisibleTab(null, { format: "png" }, (screenshotUrl) => {
      const screenshotImg = new Image();
      screenshotImg.src = screenshotUrl;
      document.body.appendChild(screenshotImg);
          // Open a new tab to display the screenshot image
    chrome.tabs.create({ url: screenshotUrl });
    });
  });


      // Set up image click event for translating link to Morse code
  const morseImage = document.getElementById("morseImage");
  morseImage.addEventListener("click", () => {
    const morseText = textToMorse(shareLink);
    navigator.clipboard.writeText(morseText);
    const statusText = document.getElementById("statusText");
    statusText.textContent = "Link Translated to Morse Code and Copied!";
    setTimeout(() => {
      statusText.textContent = "";
    }, 3000);
  });


  // Set up image click event for generating and showing the QR code
  const qrCodeImage = document.getElementById("qrCodeImage");
  qrCodeImage.addEventListener("click", () => {
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(shareLink)}`;
    window.open(qrCodeUrl, "_blank");
  });




  // Function to get a random API key from the array
  function getRandomApiKey() {
    const randomIndex = Math.floor(Math.random() * apiKeys.length);
    return apiKeys[randomIndex];
  }

  // Set up image click event for copying the link
  const copyImage = document.getElementById("shortenImage");
  copyImage.addEventListener("click", () => {
    navigator.clipboard.writeText(shareLink);
    const statusText = document.getElementById("statusText");
    statusText.textContent = "Link Copied!";
    setTimeout(() => {
      statusText.textContent = "";
    }, 3000);
  });

  // Set up image click event for shortening the link with a random API key
  const shortenImage = document.getElementById("shortenImage");
  shortenImage.addEventListener("click", () => {
    const apiKey = getRandomApiKey();
    const apiUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(shareLink)}&apikey=${apiKey}`;

    // Fetch the shortened URL from the TinyURL API
    fetch(apiUrl)
      .then((response) => response.text())
      .then((shortenedUrl) => {
        navigator.clipboard.writeText(shortenedUrl);
        const statusText = document.getElementById("statusText");
        statusText.textContent = "Link Shortened and Copied!";
        setTimeout(() => {
          statusText.textContent = "";
        }, 3000);
      })
      .catch((error) => {
        console.error("Error shortening the link:", error);
        const statusText = document.getElementById("statusText");
        statusText.textContent = "Error Shortening Link";
        setTimeout(() => {
          statusText.textContent = "";
        }, 3000);
      });
  });











    // Set up image click event for lengthening the link
    const lengthenImage = document.getElementById("lengthenImage");
    lengthenImage.addEventListener("click", () => {
      const randomItems = [
        "&apple", "&banana", "&cherry", "&grape", "&orange", "&lemon", "&lime", "&kiwi", "&watermelon", "&strawberry",
      "&blueberry", "&raspberry", "&blackberry", "&pineapple", "&peach", "&pear", "&plum", "&apricot", "&mango", "&pomegranate",
      "&cranberry", "&coconut", "&fig", "&nectarine", "&guava", "&dragonfruit", "&kiwifruit", "&passionfruit", "&tangerine", "&cantaloupe",
      "&honeydew", "&date", "&mulberry", "&papaya", "&persimmon", "&quince", "&loganberry", "&lychee", "&avocado", "&elderberry",
      "&pumpkin", "&squash", "&zucchini", "&eggplant", "&tomato", "&cucumber", "&bellpepper", "&broccoli", "&cauliflower", "&carrot",
      "&celery", "&asparagus", "&potato", "&sweetpotato", "&spinach", "&kale", "&lettuce", "&cabbage", "&onion", "&garlic",
      "&leek", "&radish", "&turnip", "&beet", "&rutabaga", "&artichoke", "&brusselsprout", "&mushroom", "&pea", "&bean",
      "&lentil", "&chickpea", "&soybean", "&blackbean", "&kidneybean", "&limabean", "&navybean", "&pinto", "&azuki", "&mungbean",
      "&adzuki", "&cocoa", "&coffee", "&tea", "&chocolate", "&vanilla", "&cinnamon", "&nutmeg", "&pepper", "&thyme",
      "&oregano", "&basil", "&sage", "&rosemary", "&parsley", "&dill", "&coriander", "&mint", "&paprika", "&saffron",
      "#mountain", "#river", "#ocean", "#desert", "#forest", "#valley", "#canyon", "#island", "#volcano", "#cave",
      "#waterfall", "#glacier", "#lake", "#beach", "#jungle", "#plain", "#plateau", "#tundra", "#swamp", "#wetland",
      "#grassland", "#mesa", "#hill", "#dune", "#cliff", "#garden", "#orchard", "#vineyard", "#pasture", "#field",
      "#meadow", "#marsh", "#stream", "#lagoon", "#pond", "#reservoir", "#delta", "#estuary", "#fjord", "#cove",
      "#bush", "#savanna", "#oasis", "#atoll", "#peninsula", "#archipelago", "#canal", "#creek", "#basin", "#crag",
      "#butte", "#badlands", "#sinkhole", "#sink", "#floodplain", "#gulch", "#gorge", "#rim", "#moor", "#sound",
      "#strait", "#channel", "#pass", "#ledge", "#knoll", "#glen", "#ridge", "#dell", "#bluff", "#barrier",
      "#flood", "#rapids", "#ravine", "#tide", "#inlet", "#lagoon", "#outlet", "#isthmus", "#gully", "#bight",
      "#narrows", "#divide", "#cleft", "#firth", "#headland", "#spit", "#stretch", "#lowland", "#highland", "#foothill",
      "#crest", "#uptrend", "#downtrend", "#peak", "#promontory", "#rise", "#slope", "#knoll", "#sink", "#depression",
      "=car", "=bicycle", "=motorcycle", "=bus", "=train", "=subway", "=truck", "=boat", "=airplane", "=helicopter",
    "=scooter", "=skateboard", "=hoverboard", "=tricycle", "=segway", "=sailboat", "=yacht", "=cruise ship", "=hot air balloon", "=rocket",
    "=tractor", "=ambulance", "=firetruck", "=police car", "=taxi", "=minivan", "=convertible", "=van", "=limousine", "=RV",
    "=snowmobile", "=jet ski", "=golf cart", "=moped", "=tuk-tuk", "=bulldozer", "=forklift", "=garbage truck", "=ice cream truck", "=monster truck",
    "=amphibious vehicle", "=dune buggy", "=horse carriage", "=hang glider", "=paraglider", "=hang glider", "=paraglider", "=jetpack", "=spaceship", "=trailer",
    "=trolley", "=sled", "=canoe", "=kayak", "=rickshaw", "=wheelchair", "=roller skates", "=ski", "=sledgehammer", "=gondola",
    "=sedan", "=pickup truck", "=motorhome", "=sailboat", "=jetliner", "=helicopter", "=ambulance", "=fire engine", "=police car", "=cab",
    "=bike", "=trike", "=segway", "=cart", "=glider", "=raft", "=skis", "=catamaran", "=caravan", "=locomotive",
    "=sailplane", "=zeppelin", "=aerostat", "=monorail", "=rickshaw", "=bobsleigh", "=dolly", "=hovercraft", "=lifeboat", "=parasail",
    "_dog", "_cat", "_horse", "_elephant", "_lion", "_tiger", "_giraffe", "_zebra", "_kangaroo", "_koala",
    "_panda", "_bear", "_monkey", "_gorilla", "_rhinoceros", "_hippopotamus", "_gazelle", "_cheetah", "_jaguar", "_leopard",
    "_camel", "_llama", "_alpaca", "_dolphin", "_whale", "_shark", "_octopus", "_seahorse", "_starfish", "_jellyfish",
    "_penguin", "_polar bear", "_seal", "_walrus", "_otter", "_sloth", "_armadillo", "_hedgehog", "_porcupine", "_platypus",
    "_crocodile", "_alligator", "_turtle", "_tortoise", "_snake", "_python", "_lizard", "_chameleon", "_iguana", "_gecko",
    "_parrot", "_eagle", "_hawk", "_owl", "_peacock", "_pigeon", "_penguin", "_sparrow", "_flamingo", "_swan",
    "_ostrich", "_robin", "_woodpecker", "_hummingbird", "_pelican", "_raven", "_crow", "_vulture", "_canary", "_mockingbird",
    "_bee", "_ant", "_spider", "_butterfly", "_mosquito", "_dragonfly", "_ladybug", "_grasshopper", "_firefly", "_caterpillar",
    "_scorpion", "_centipede", "_millipede", "_cricket", "_crab", "_lobster", "_shrimp", "_clam", "_oyster", "_snail",
    "_slug", "_starfish", "_jellyfish", "_coral", "_seashell", "_conch", "_urchin", "_anemone", "_seagull", "_seahorse",
    "+planet", "+star", "+galaxy", "+comet", "+asteroid", "+nebula", "+black hole", "+quasar", "+constellation", "+supernova",
"+moon", "+satellite", "+telescope", "+spaceship", "+astronaut", "+alien", "+space station", "+meteor", "+cosmos", "+celestial body",
"+sunspot", "+spacecraft", "+meteorite", "+orbit", "+interstellar", "+gravity", "+spacewalk", "+universe", "+probe", "+astrophysics",
"+stellar", "+milky way", "+exoplanet", "+solar system", "+observatory", "+cosmic", "+intergalactic", "+cosmonaut", "+stardust", "+interplanetary",
"+extraterrestrial", "+nebular", "+interstellar medium", "+pulsar", "+red giant", "+white dwarf", "+wormhole", "+event horizon", "+redshift", "+blueshift",
"+gamma-ray burst", "+dark matter", "+dark energy", "+singularity", "+light-year", "+neutrino", "+gravitational wave", "+cosmic microwave background", "+radiation", "+astronomy",
"+astrolabe", "+heliocentric", "+geocentric", "+geostationary", "+zenith", "+nadir", "+eclipse", "+equinox", "+solstice", "+parallax", "+orbital",
"+atmosphere", "+atmospheric", "+cosmonogy", "+telemetry", "+hyperspace", "+rocketry", "+rover", "+celestial mechanics", "+solar wind", "+stellar nursery", 
      ];
  
      const numRandomItems = 100; // Change this to the number of items you want to add
      const addedItems = [];
  
      for (let i = 0; i < numRandomItems; i++) {
        const randomIndex = Math.floor(Math.random() * randomItems.length);
        addedItems.push(randomItems[randomIndex]);
      }
  
      const newUrl = shareLink + "?" + addedItems.join("-");
  
      navigator.clipboard.writeText(newUrl);
      const statusText = document.getElementById("statusText");
      statusText.textContent = "Link Lengthened and Copied!";
      setTimeout(() => {
        statusText.textContent = "";
      }, 3000);
    });




});

