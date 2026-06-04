/* Satellite Delight — vertical funnel content (US internet/TV/phone). Easy questions first,
   ZIP for serviceability, contact last. Edit freely. */
(function(){
  var AVAIL = "Plans, pricing, speeds, channel lineups, and availability are set by the providers, vary by address, and are subject to change. Confirm details directly with the provider before ordering.";
  var GENERAL = [
    {q:"Is Satellite Delight free to use?", a:"Yes. Comparing offers and getting matched is completely free, with no obligation to order anything."},
    {q:"Are you an internet, TV, or phone company?", a:"No. Satellite Delight is an independent comparison and referral service. We help you compare offers from providers in your area; any agreement is between you and the provider you choose."},
    {q:"Why do you need my ZIP code or address?", a:"Internet, TV, and phone availability and pricing are set by address. Your ZIP lets us show the providers and offers that actually serve your location."},
    {q:"How soon can I get connected?", a:"It varies by provider and address — many offer self-install or next-available scheduling. Tell us your timing and we'll match you accordingly."}
  ];
  var ZIP = {id:"zip", type:"zip", q:"What's your ZIP code?", sub:"We use it to find the providers and offers available at your address — never shared publicly."};
  var CURRENT = {id:"current", type:"single", q:"Who's your current provider?", options:["Xfinity","Spectrum","AT&T","Verizon / Fios","T-Mobile","I'm moving / new address","Other / not sure"]};
  var TIMING = {id:"timing", type:"single", q:"When do you want service?", options:["As soon as possible","Within 2 weeks","Just comparing for now"]};
  var CONTACT = {id:"contact", type:"contact", q:"Where should we send your matched offers?", sub:"Your information is secure & confidential."};

  window.SITE_VERTICALS = {
    internet:{
      name:"Home Internet", word:"internet", title:"Compare Home Internet Providers & Deals — Satellite Delight",
      headline:"Compare home internet providers in your area",
      sub:"See the internet plans, speeds, and deals available at your address — free and no obligation.",
      benefitsHead:"A smarter way to shop for home internet",
      steps:[
        {id:"use", type:"single", q:"What do you mainly use your internet for?", options:["Streaming & TV","Working from home","Online gaming","Browsing & email","A busy household"]},
        {id:"household", type:"single", q:"How many people & devices share it?", options:["Just me","2–3","4–6","7 or more"]},
        ZIP, CURRENT, TIMING, CONTACT
      ],
      faqs:[
        {q:"How much does home internet cost?", a:"Introductory plans often start around $30–$60/mo depending on speed and provider, and prices vary by address. Comparing local offers is the best way to see real pricing. "+AVAIL},
        {q:"Fiber vs. cable vs. 5G — which is best?", a:"Fiber is fastest and most consistent where available; cable is widely available with fast download speeds; 5G/fixed-wireless can be a great no-contract option. We'll show what's available at your address."},
        {q:"Can I get internet without a contract?", a:"Yes — several providers offer no-annual-contract plans. Tell us your preference and we'll prioritize matching offers."}
      ].concat(GENERAL),
      seo:{
        label:"Home internet guide", heading:"How to choose home internet (and not overpay)",
        factorsHead:"What drives your internet price & speed",
        typesHead:"Internet connection types, compared",
        lead:[
          "The right internet plan starts with what's actually wired to your address — fiber, cable, and 5G home internet aren't available everywhere, and two homes on the same street can have very different options. After availability, it comes down to the speed your household really needs to stream, work, and game.",
          "The catch in home internet is the promo-price cliff: a low intro rate that jumps after about 12 months, plus equipment rental and one-time install or activation fees. Comparing the real, all-in offers available at your address in {area} side by side is the only way to see what you'll actually pay — and Satellite Delight does it free."
        ],
        factors:[
          {h:"Promo vs. regular price", p:"Intro rates often rise after ~12 months — check the price after the promo, not just month one."},
          {h:"Speed for your use", p:"Match Mbps to how your household streams and works — not to the biggest tier."},
          {h:"Equipment & fees", p:"Modem/router rental, install, and activation fees add up; some plans let you use your own gear."},
          {h:"Contract & data caps", p:"Some plans add contracts or monthly data caps — no-contract and unlimited options exist."}
        ],
        types:[
          {h:"Fiber", p:"Fastest and most consistent, with symmetrical uploads — where it's available."},
          {h:"Cable", p:"Widely available with fast downloads; the all-rounder for most homes."},
          {h:"5G / fixed-wireless", p:"No-contract home internet over the cellular network, expanding fast."},
          {h:"DSL / satellite", p:"Coverage for rural and harder-to-reach addresses."}
        ]
      },
      gallery:["Home WiFi, set up fast","Fiber-fast speeds","Whole-home coverage","Work-from-home ready","Streaming without buffering","Simple self-install"]
    },

    "cable-tv":{
      name:"Cable & Satellite TV", word:"TV", title:"Compare Cable & Satellite TV Providers & Deals — Satellite Delight",
      headline:"Find TV packages & deals in your area",
      sub:"Compare cable and satellite TV providers, channel lineups, and offers available at your address.",
      benefitsHead:"Compare TV packages with confidence",
      steps:[
        {id:"watch", type:"single", q:"What do you watch most?", options:["Live TV & local channels","Sports","Movies & premium channels","Everything / family"]},
        {id:"withinternet", type:"single", q:"Want to bundle internet and save?", options:["Yes — bundle & save","Just TV for now","Not sure"]},
        ZIP, CURRENT, CONTACT
      ],
      faqs:[
        {q:"How much does cable or satellite TV cost?", a:"It depends on the channel package, add-ons like sports or premium channels, and whether you bundle. Comparing local offers shows real pricing. "+AVAIL},
        {q:"Should I bundle TV with internet?", a:"Bundling often lowers the combined monthly cost and simplifies billing. Tell us if you want internet too and we'll match bundle offers."},
        {q:"Can I get the sports or premium channels I want?", a:"Channel lineups vary by provider and package. Tell us what you watch and we'll prioritize matching packages."}
      ].concat(GENERAL),
      seo:{
        label:"TV guide", heading:"Finding a TV package worth paying for",
        factorsHead:"What shapes your TV bill",
        typesHead:"Ways to get the channels you want",
        lead:[
          "TV pricing is rarely just the package price. Regional sports fees, broadcast-TV surcharges, and receiver or DVR rental all move the real number — and the channels in each lineup differ by provider and by address.",
          "Start from the channels you actually watch — local and live TV, sports, or premium movies — and whether bundling with internet lowers the total. Satellite Delight compares the cable and satellite TV offers available at your address in {area}, free and with no obligation."
        ],
        factors:[
          {h:"Channel lineup", p:"Local, sports, news, and premium channels vary by package — pay for what you watch."},
          {h:"Hidden fees", p:"Regional sports and broadcast-TV surcharges plus DVR/receiver rental inflate the bill."},
          {h:"Bundle vs. standalone", p:"Adding TV to internet usually beats a standalone TV price."},
          {h:"Contract & promo", p:"Many TV deals are promo-priced for a term — know the post-promo rate."}
        ],
        types:[
          {h:"Cable TV", p:"Broad channel selection, easy to bundle with internet."},
          {h:"Satellite TV", p:"Wide coverage with strong sports and rural availability."},
          {h:"TV + internet bundle", p:"One bill and usually the lowest combined price."},
          {h:"Live-TV streaming", p:"Skinnier, no-box channel bundles delivered over your internet."}
        ]
      },
      gallery:["The big-screen experience","Live TV & local channels","Game day, covered","Movies & premium picks","Family-friendly lineups","Bundle TV + internet"]
    },

    bundle:{
      name:"Internet, TV & Phone Bundles", word:"bundle", title:"Compare Internet, TV & Phone Bundles — Satellite Delight",
      headline:"Bundle internet, TV & phone — and save",
      sub:"Compare bundle offers available at your address. One provider, one bill, usually a lower price.",
      benefitsHead:"Bundle and save the smart way",
      steps:[
        {id:"bundle", type:"single", q:"Which bundle are you after?", options:["Internet + TV","Internet + TV + Phone","Internet + Phone","Not sure — show me options"]},
        {id:"tvs", type:"single", q:"How many TVs do you need?", options:["1","2–3","4 or more","No TV needed"]},
        ZIP, CURRENT, CONTACT
      ],
      faqs:[
        {q:"Do bundles really save money?", a:"Often yes — providers discount the combined price and you get one bill. We compare bundle offers available at your address so you can see the real savings. "+AVAIL},
        {q:"Can I customize a bundle?", a:"Most providers let you pick your internet speed, TV package, and whether to add phone. Tell us what you want and we'll match accordingly."},
        {q:"What if I only want two of the three services?", a:"That's fine — internet+TV and internet+phone bundles are common. Pick the combination you want above."}
      ].concat(GENERAL),
      seo:{
        label:"Bundle guide", heading:"Bundling internet, TV & phone — when it actually saves",
        factorsHead:"What changes a bundle's price",
        typesHead:"Popular bundle combinations",
        lead:[
          "Bundling usually lowers your combined monthly cost and puts internet, TV, and home phone on one bill — but the savings depend on the internet speed you pick, the size of the TV package, and whether the discount is promo-priced for a term. Autopay and paperless billing often shave a little more.",
          "The right bundle is the smallest one that covers what you use. Satellite Delight compares the bundle offers available at your address in {area} so you can see the real combined price — free and with no obligation."
        ],
        factors:[
          {h:"Services included", p:"Internet + TV (+ phone) combinations each change the price."},
          {h:"Internet speed tier", p:"Higher speeds raise the bundle price — match it to your household."},
          {h:"TV package size", p:"More channels and premium add-ons cost more; trim to what you watch."},
          {h:"Promo term & autopay", p:"Bundle discounts often run for a promo period; autopay/paperless can lower it further."}
        ],
        types:[
          {h:"Internet + TV", p:"The most popular combo for most households."},
          {h:"Triple play", p:"Internet + TV + home phone on a single bill."},
          {h:"Internet + phone", p:"Connectivity plus a reliable home line, no TV."},
          {h:"Custom bundle", p:"Mix speed, channels, and add-ons to fit how you live."}
        ]
      },
      gallery:["One bill, every service","A fully connected home","Internet + TV together","Save by bundling","Built for busy households","Compare bundle offers"]
    },

    "home-phone":{
      name:"Home Phone", word:"home phone", title:"Compare Home Phone Service & Deals — Satellite Delight",
      headline:"Reliable home phone service — compare & save",
      sub:"Compare home phone plans available at your address, on their own or bundled with internet and TV.",
      benefitsHead:"Find the right home phone plan",
      steps:[
        {id:"type", type:"single", q:"What kind of home phone service?", options:["Bundle with internet/TV","Standalone landline","Internet-based (VoIP)","Not sure"]},
        {id:"features", type:"multi", q:"Any features you want?", sub:"Select all that apply — or skip.", options:["Unlimited local & long distance","Voicemail","Caller ID","International calling"]},
        ZIP, CONTACT
      ],
      faqs:[
        {q:"How much does home phone service cost?", a:"Home phone is often inexpensive, especially bundled with internet or TV. Standalone and VoIP options vary. We'll compare what's available at your address. "+AVAIL},
        {q:"Is a landline or internet-based (VoIP) phone better?", a:"Traditional landlines work during power and internet outages; VoIP is usually cheaper and feature-rich. We'll match options based on your preference."},
        {q:"Can I keep my current phone number?", a:"In most cases yes — number transfer (porting) is common. Confirm details with the provider you choose."}
      ].concat(GENERAL),
      seo:{
        label:"Home phone guide", heading:"Does a home phone still make sense?",
        factorsHead:"What to weigh in a home phone",
        typesHead:"Home phone options",
        lead:[
          "A home phone still earns its place for reliable calling, households that want a dedicated line, and anyone who wants service that keeps working in an outage. The main choice is technology: a traditional landline that works during power and internet outages, or a cheaper internet-based (VoIP) line loaded with features.",
          "Adding a line to an existing internet or TV plan is usually the cheapest route, and in most cases you can keep your current number. Satellite Delight compares the home phone options available at your address in {area} — free and with no obligation."
        ],
        factors:[
          {h:"Landline vs. VoIP", p:"Landlines work in power/internet outages; VoIP is cheaper and feature-rich."},
          {h:"Bundling", p:"Adding phone to internet/TV is usually the lowest-cost way to get a line."},
          {h:"Calling features", p:"Voicemail, caller ID, and unlimited long-distance vary by plan."},
          {h:"Keep your number", p:"Number transfer (porting) from your old provider is usually possible."}
        ],
        types:[
          {h:"Bundled home phone", p:"A low-cost add-on line on your internet/TV plan."},
          {h:"Standalone landline", p:"A dedicated, outage-resilient home line."},
          {h:"VoIP / digital phone", p:"Internet-based calling with the most features for less."},
          {h:"Unlimited calling", p:"Local and long-distance with no per-minute charges."}
        ]
      },
      gallery:["A reliable home line","Keep your number","Crystal-clear calling","Bundle phone & save","Voicemail & caller ID","Compare phone plans"]
    },

    mobile:{
      name:"Mobile Phone Plans", word:"mobile plan", title:"Compare Mobile Phone Plans & Carriers — Satellite Delight",
      headline:"Compare mobile phone plans & carriers",
      sub:"See cell phone plans and offers from top carriers — free and no obligation to switch.",
      benefitsHead:"Find the right mobile plan",
      steps:[
        {id:"lines", type:"single", q:"How many lines do you need?", options:["1 line","2 lines","3–4 lines","5 or more"]},
        {id:"want", type:"single", q:"What matters most to you?", options:["Lowest price","Unlimited data","Best coverage","A new phone deal"]},
        ZIP, CURRENT, CONTACT
      ],
      faqs:[
        {q:"Can I keep my phone and number if I switch?", a:"Usually yes — most carriers support bringing your own device and porting your number. We'll match plans based on your needs."},
        {q:"How much can I save by switching carriers?", a:"Savings depend on lines, data needs, and current plan. Comparing offers across carriers is the fastest way to see. "+AVAIL},
        {q:"Are there family or multi-line discounts?", a:"Yes — per-line pricing usually drops as you add lines. Tell us how many lines you need above."}
      ].concat(GENERAL),
      seo:{
        label:"Mobile plan guide", heading:"Getting the right mobile plan for less",
        factorsHead:"What drives your mobile cost",
        typesHead:"Plan types, compared",
        lead:[
          "Mobile is one of the easiest bills to overpay. The major carriers, their prepaid brands, and budget MVNOs often run on the same networks — so similar coverage and data can cost very differently depending on the plan, the number of lines, and whether you're financing a phone.",
          "Per-line pricing usually drops as you add lines, and bringing your own phone avoids a new device payment. Satellite Delight compares mobile plans and carrier offers for {area} so you can find the right fit — free and with no obligation."
        ],
        factors:[
          {h:"Number of lines", p:"Per-line cost usually falls as you add lines — family plans win."},
          {h:"Data needs", p:"Unlimited vs. capped, and premium vs. standard data, change the price."},
          {h:"Carrier vs. MVNO", p:"Budget carriers often use the big networks for much less."},
          {h:"Phone financing", p:"A 'free' phone is usually a 24–36 month bill commitment — separate it out."}
        ],
        types:[
          {h:"Unlimited plans", p:"No overage worries for heavy data users."},
          {h:"Family / multi-line", p:"Shared plans with per-line discounts."},
          {h:"Prepaid / MVNO", p:"No-contract, lower-cost plans on major networks."},
          {h:"Bring your own phone", p:"Keep your device and just switch the plan."}
        ]
      },
      gallery:["Plans for every budget","Unlimited data options","Coverage that keeps up","Family & multi-line deals","Bring your own phone","Switch & save"]
    },

    movers:{
      name:"Moving? Set Up Service", word:"moving", title:"Set Up Internet, TV & Phone for Your New Home — Satellite Delight",
      headline:"Moving? Set up internet, TV & phone at your new place",
      sub:"Compare what's available at your new address and get connected by move-in day — free and no obligation.",
      benefitsHead:"Get connected at your new home",
      steps:[
        {id:"services", type:"multi", q:"What do you need at the new place?", sub:"Select all that apply.", options:["Internet","TV","Home phone","Mobile"]},
        {id:"when", type:"single", q:"When's your move?", options:["This week","Within 2 weeks","This month","Just planning ahead"]},
        {id:"newzip", type:"zip", q:"What's the ZIP of your new address?", sub:"We'll show the providers and offers available at your new home."},
        CONTACT
      ],
      faqs:[
        {q:"How early should I set up service before moving?", a:"Aim for 1–2 weeks before move-in so installation or self-install kits arrive in time. Tell us your move date and we'll prioritize accordingly."},
        {q:"Will my current provider be available at the new address?", a:"Not always — availability is set by address. We'll show which providers and offers serve your new home. "+AVAIL},
        {q:"Can I get everything connected by move-in day?", a:"Often yes, especially with self-install. The earlier you start, the better the options."}
      ].concat(GENERAL),
      seo:{
        label:"Moving guide", heading:"Setting up internet, TV & phone for a move",
        factorsHead:"What to plan when you move",
        typesHead:"Ways to get connected at the new place",
        lead:[
          "Moving resets your options: availability, providers, and new-customer offers all change at the new address, so the plan you have now may not be the best — or even available — where you're headed. Starting one to two weeks ahead means you're connected by move-in day instead of scrambling.",
          "Watch for overlap so you're not paying two providers at once, and decide whether to transfer your service or start fresh on a better local offer. Satellite Delight shows what's available at your new address in {area} and lines up the providers — free and with no obligation."
        ],
        factors:[
          {h:"New-address availability", p:"Providers and speeds differ at every address — your current plan may not transfer."},
          {h:"Timing", p:"Start 1–2 weeks ahead so install or a self-install kit arrives in time."},
          {h:"Transfer vs. new account", p:"Transferring is easy, but a new-customer offer is often cheaper."},
          {h:"Avoid double-billing", p:"Line up the start/stop dates so you're not paying two providers at once."}
        ],
        types:[
          {h:"New-home internet", p:"Get online by move-in day."},
          {h:"Transfer or switch", p:"Move your service or grab a better local offer."},
          {h:"Bundle for the move", p:"Set up internet, TV, and phone in one go."},
          {h:"Self-install", p:"Skip the technician wait with a self-install kit where available."}
        ]
      },
      gallery:["Connected by move-in day","New home, new setup","One stop for the move","Internet ready on day one","Transfer or switch easily","Compare your new address"]
    }
  };

  /* Gallery images — free, commercially-licensed Unsplash photos (Unsplash License). */
  window.SITE_IMAGES = {
    internet:["https://images.unsplash.com/photo-1681383064412-171e5bee5f6e","https://images.unsplash.com/photo-1733810763720-4c83af0668ea","https://images.unsplash.com/photo-1745847768408-b7b83796cae6","https://images.unsplash.com/photo-1770393698717-fbbebdeccd5d","https://images.unsplash.com/photo-1750712263185-edde9f359e33","https://images.unsplash.com/photo-1750710583720-8b3bdd0f658a"],
    "cable-tv":["https://images.unsplash.com/photo-1646861039459-fd9e3aabf3fb","https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9","https://images.unsplash.com/photo-1584280795027-321f4d68e77b","https://images.unsplash.com/photo-1692188071339-2825a8a997f1","https://images.unsplash.com/photo-1631679893114-7957e44879db","https://images.unsplash.com/photo-1593784991188-c899ca07263b"],
    bundle:["https://images.unsplash.com/photo-1564078516393-cf04bd966897","https://images.unsplash.com/photo-1554995207-c18c203602cb","https://images.unsplash.com/photo-1550581190-9c1c48d21d6c","https://images.unsplash.com/photo-1560185007-5f0bb1866cab","https://images.unsplash.com/photo-1617228133035-2347f159e755","https://images.unsplash.com/photo-1704040686510-b747ff423ebb"],
    "home-phone":["https://images.unsplash.com/photo-1671797069008-d02b371a6493","https://images.unsplash.com/photo-1652690527717-6614de5e55fc","https://images.unsplash.com/photo-1587043150462-4675e68c7665","https://images.unsplash.com/photo-1655432370508-4add959671d8","https://images.unsplash.com/photo-1626962075337-c6ebe71d7220","https://images.unsplash.com/photo-1498582801152-3ebe4158143e"],
    mobile:["https://images.unsplash.com/photo-1592890288564-76628a30a657","https://images.unsplash.com/photo-1512428559087-560fa5ceab42","https://images.unsplash.com/photo-1570101945621-945409a6370f","https://images.unsplash.com/photo-1423784346385-c1d4dac9893a","https://images.unsplash.com/photo-1572016047668-5b5e909e1605","https://images.unsplash.com/photo-1488509082528-cefbba5ad692"],
    movers:["https://images.unsplash.com/photo-1600725935160-f67ee4f6084a","https://images.unsplash.com/photo-1614926781997-9ca2e6d2785a","https://images.unsplash.com/photo-1580451299338-3658f5b11930","https://images.unsplash.com/photo-1758523671637-5a39ea2c129b","https://images.unsplash.com/photo-1758523671391-c510afb87d19","https://images.unsplash.com/photo-1758523671893-0ba21cf4260f"]
  };
})();
