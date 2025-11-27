import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  location: string;
  date: string;
  rating: number;
  occasion: string;
  guestCount: string;
  discoverySource: string;
  review: string;
}

const TESTIMONIALS_ROW1: Testimonial[] = [
  {
    name: 'Sarah & Michael',
    location: 'Seminyak',
    date: 'Oct 2025',
    rating: 5,
    occasion: 'Anniversary Dinner',
    guestCount: '2',
    discoverySource: 'Villa recommendation',
    review: `Our villa host suggested myCHEF when we mentioned wanting something special for our 10th anniversary. We were celebrating a decade together and wanted an intimate dinner on our villa terrace without the hassle of going out. The team was absolutely incredible from start to finish. During menu planning, they asked about our favorite meals from the past ten years and incorporated elements from each into a custom 5-course tasting menu. They arranged for a portable sound system and played a curated jazz playlist that perfectly set the mood. The chef arrived two hours early to prep and brought a server who handled everything so we could just focus on each other. The meal itself was stunning - starting with seared scallops with passionfruit butter, moving through a perfectly cooked duck breast, and ending with a deconstructed tiramisu that had us both speechless. Our server made sure our wine glasses were always full and timing between courses was perfect. After we finished, the team cleaned everything so thoroughly you would never know they had been there. They even left a handwritten anniversary card. This dinner reminded us why we fell in love with each other and with traveling together. Worth every single rupiah and then some.`,
  },
  {
    name: 'Wei Zhang',
    location: 'Canggu',
    date: 'Oct 2025',
    rating: 5,
    occasion: 'Birthday Party',
    guestCount: '12',
    discoverySource: 'Instagram',
    review: `Found myCHEF through Instagram ads while planning my 30th birthday bash in Bali. I wanted to celebrate this milestone with close friends who flew in from different countries, so the food had to be memorable. We booked an authentic Indonesian rijsttafel feast that would showcase real Balinese flavors. The planning process was so easy - they sent me a detailed menu proposal within hours and were happy to adjust spice levels since some friends cannot handle too much heat. For the party, they rented us a beautiful long table, traditional serving platters, and even brought a portable grill for fresh satay. The chef coordinated with two helpers who kept everything flowing smoothly. They set up a small speaker for background music and the whole ambiance felt like we were at an upscale warung. When the food started arriving, my friends went absolutely crazy. The rendang was fall-apart tender with layers of flavor, the ayam betutu was aromatic and juicy, and the sambal matah was so fresh and vibrant. People kept going back for seconds and thirds. After dinner, the staff handled all cleanup while we moved to the pool, and within thirty minutes everything was spotless. Several friends have already asked me for the contact info because they want to book myCHEF for their own Bali trips. Absolutely made my birthday unforgettable.`,
  },
  {
    name: 'Budi & Dewi',
    location: 'Ubud',
    date: 'Sep 2025',
    rating: 5,
    occasion: 'Family Reunion',
    guestCount: '20',
    discoverySource: 'Google search',
    review: `Searched "private chef Ubud family dinner" on Google and myCHEF came up with great reviews. We were organizing our first extended family reunion in five years with relatives aged 5 to 75, so we needed someone who could handle a big group with very different tastes. This was important because getting everyone together is rare and we wanted the meals to be a highlight, not a stress point. The myCHEF team absolutely delivered. They designed a BBQ menu that had options for everyone - grilled fish, chicken satay, beef ribs, plus vegetarian options for my sister and her kids. They brought their own professional grill, a large serving station setup, and even rented extra tables and chairs that matched our villa aesthetic. A chef and three helpers arrived early afternoon to prep and they coordinated everything like a well-oiled machine. They set up a beautiful buffet-style presentation and kept everything stocked throughout the evening. The kids loved the chicken skewers and corn on the cob, while the adults raved about the perfectly cooked steaks and the homemade peanut sauce. My mom, who is very particular, said it was the best BBQ she has had outside of home. The team stayed until everything was cleaned, packed, and our kitchen looked untouched. The whole experience brought our family together over incredible food and we are already talking about booking them again next year.`,
  },
  {
    name: 'Mark T.',
    location: 'Nusa Dua',
    date: 'Aug 2025',
    rating: 5,
    occasion: 'Corporate Retreat',
    guestCount: '15',
    discoverySource: 'Wedding planner recommendation',
    review: `Our event planner in Singapore recommended myCHEF when I mentioned we were doing a team retreat in Bali. We had fifteen team members coming from across Asia for three days of strategy sessions and I wanted our final dinner to be special and foster real connection beyond work talk. The challenge was we had dietary restrictions - two vegetarians, one vegan, three people avoiding gluten, and one shellfish allergy. During our planning call, the myCHEF coordinator took detailed notes and designed a customized tasting menu where every single person would have safe, delicious options for each course. They arranged table settings, rented proper glassware for wine service, and brought a subtle sound system for soft background music that did not overpower conversation. The chef and two servers arrived early to set up and were incredibly professional throughout. The meal was exceptional - think seared tuna with gluten-free soy, coconut curry risotto, beef tenderloin with chimichurri, and individual pavlovas for dessert. Every dietary need was met without anyone feeling left out or having a "lesser" meal. My colleagues were genuinely impressed and it sparked great conversations about food, culture, and travel. The service was discreet but attentive, and cleanup happened seamlessly while we moved to the lounge for drinks. This dinner absolutely contributed to the retreat success and team bonding. Several colleagues mentioned it was a highlight of the whole trip.`,
  },
  {
    name: 'Lisa & Tom',
    location: 'Canggu',
    date: 'Aug 2025',
    rating: 5,
    occasion: 'Anniversary',
    guestCount: '2',
    discoverySource: 'Friend referral',
    review: `Our best friends used myCHEF for their Bali wedding last year and could not stop raving, so we knew who to call for our anniversary. We have been together for eight years and wanted a romantic Italian dinner without having to leave our beautiful villa. The menu consultation felt like talking to a friend - they asked about our favorite Italian restaurants back home and recreated those vibes with a Bali twist. They planned a four-course menu focused on handmade pasta, which is my absolute weakness. For the setup, they brought candles, a small Bluetooth speaker for Italian music, and beautiful linens that elevated our villa dining table. The chef arrived and started making fresh pasta right in our kitchen - we could smell the basil and garlic and it built so much anticipation. The server was friendly but gave us privacy, appearing only when needed. We started with burrata and heirloom tomatoes, moved to cacio e pepe that was silky and perfect, then a truffle risotto that Tom declared the best he has ever had. The tiramisu for dessert was light and boozy in all the right ways. Between courses we could relax, chat, and just be present with each other - no rushing, no noise, just us and amazing food. After we finished, cleanup was quick and quiet. Walking into a spotless kitchen after such an incredible meal felt like magic. This experience reminded us why we love travel and good food, and we are already planning to book myCHEF again on our next Bali trip.`,
  },
  {
    name: 'Sari Wijaya',
    location: 'Seminyak',
    date: 'Jul 2025',
    rating: 5,
    occasion: 'Baby Shower',
    guestCount: '14',
    discoverySource: 'Instagram',
    review: `I discovered myCHEF through Instagram reels showing their beautiful party setups, perfect timing since I was planning a surprise baby shower for my sister. She was seven months pregnant and visiting Bali for a babymoon, and I wanted to throw her something special with her close friends who live here. We planned a lovely brunch-to-lunch event with fresh, light food since she had been dealing with some food aversions. The myCHEF team helped design a menu that was pregnancy-safe, beautiful, and delicious for everyone. They brought decorations, arranged a dessert table with a small baby-themed cake, rented high-top cocktail tables for mingling, and even set up a mocktail station with fresh tropical juices. A chef and two helpers coordinated everything while keeping it a surprise. The food was absolutely gorgeous - think smoked salmon on blinis, mini quiches, fresh fruit platters, quinoa salad bowls, and the cutest baby-themed desserts including klepon cake balls and pandan panna cotta. My sister was completely surprised and burst into happy tears when she walked into the setup. All the guests loved the food and kept asking who catered it. The team stayed through service, refreshed platters, and managed everything so I could actually enjoy the party instead of stressing. After everyone left, they packed up, cleaned, and removed all traces within twenty minutes. My sister said it was the most thoughtful celebration she could have imagined and she felt so loved. Highly recommend for anyone wanting to create special moments without the planning headache.`,
  },
  {
    name: 'Chris & Jenny',
    location: 'Uluwatu',
    date: 'Jul 2025',
    rating: 5,
    occasion: 'Vow Renewal',
    guestCount: '8',
    discoverySource: 'Wedding planner suggestion',
    review: `Our wedding planner suggested myCHEF when we decided to renew our vows in Uluwatu for our fifth anniversary. We had a small ceremony at sunset with just our closest friends and wanted the dinner afterward to feel intimate and intentional. This vow renewal meant everything to us after navigating some tough years, so the celebration needed to be perfect. The myCHEF team worked closely with our planner to design a menu that reflected our journey - incorporating dishes from our wedding, our honeymoon in Italy, and our current life in Australia. They handled all coordination for table setup on our villa terrace, brought elegant place settings, rented proper wine glasses, and set up string lights and candles for ambiance. The chef and server arrived early and worked seamlessly with our photographer to time everything perfectly. We started with champagne and oysters as the sun set, moved into a beautiful seafood risotto, then perfectly cooked lamb racks with herb crust. Each course was timed so we could savor the moment and the conversation. Our friends kept commenting on how restaurant-quality everything was. The flourless chocolate cake with gold leaf for dessert was a beautiful touch. After dinner, the staff quietly cleared everything while we sat under the stars with our friends. The next morning our kitchen was spotless and they had even left a sweet note. This dinner was the perfect way to celebrate our love and commitment, and several of our friends said it was the most meaningful meal they had experienced. We will treasure this memory forever.`,
  },
  {
    name: 'Priya Sharma',
    location: 'Sanur',
    date: 'Jun 2025',
    rating: 5,
    occasion: 'Family Dinner',
    guestCount: '16',
    discoverySource: 'Villa recommendation',
    review: `The property manager at our Sanur villa recommended myCHEF when I mentioned we were three generations traveling together. We had grandparents visiting from Jakarta, my family from Singapore, and my brother's family from the US - everyone wanted different things and I was stressed about finding food that would make everyone happy. This was the first time we had all been together in three years, so meals needed to be a gathering point, not a source of tension. The myCHEF coordinator spent thirty minutes on the phone understanding everyone's preferences and designed a brilliant split menu - traditional Padang-style Indonesian on one side, Western comfort food on the other. They rented a long dining table, brought serving platters and warmers, and arranged for three staff to help with service. The team arrived midday to start the slow-cooked rendang and other traditional dishes. By dinner time, the house smelled absolutely incredible. My grandmother, who is extremely particular about Indonesian food, tasted the rendang and literally closed her eyes in happiness - she said it was as good as what her mother used to make. The ayam gulai, sambal ijo, and beef ribs were all authentic and perfectly spiced. Meanwhile the kids happily ate grilled chicken and fries. My teenage nephew tried the beef rendang and asked for seconds. Everyone found something they loved and we actually sat together for two hours just eating, talking, and laughing. The staff kept everything stocked and flowing without being intrusive. Cleanup was handled entirely by the team. The next morning my mom said it was the best family dinner we have had in years. That alone made it priceless.`,
  },
  {
    name: 'Sophie L.',
    location: 'Canggu',
    date: 'May 2025',
    rating: 5,
    occasion: 'Business Dinner',
    guestCount: '6',
    discoverySource: 'Google search',
    review: `I Googled "private chef Canggu fine dining" because I needed to host an important client dinner and restaurants felt too impersonal. We were closing a significant partnership deal and I wanted the setting to feel exclusive, thoughtful, and impressive without being over the top. The clients were flying in from Australia and this dinner was the final touchpoint before contracts were signed. The myCHEF team understood the assignment immediately. They designed an elegant eight-course tasting menu with wine pairings that showcased both local Indonesian ingredients and international techniques. They arranged premium tableware, proper wine glasses, fresh flowers for the table, and even brought a small sound system for subtle jazz. The chef and sommelier arrived early to prep and set up. Every course was perfectly timed - we never felt rushed but there were no awkward gaps. The presentation was Michelin-level: think tuna tartare with caviar, duck confit with tamarind glaze, wagyu with black garlic, and a stunning coconut panna cotta with palm sugar. My clients were genuinely impressed and kept asking if I had hired a restaurant team. The service was polished and professional but warm enough to keep conversation flowing. The sommelier's wine selections were spot-on and added another layer of sophistication. After the final course, we moved to the lounge while staff discreetly handled cleanup. The next day, my client messaged saying it was one of the best business dinners he had ever attended. We signed the deal that afternoon. myCHEF absolutely helped seal this partnership and I will use them for every important client dinner going forward.`,
  },
  {
    name: 'Kenji & Yuki',
    location: 'Seminyak',
    date: 'May 2025',
    rating: 5,
    occasion: 'Honeymoon',
    guestCount: '2',
    discoverySource: 'Friend referral',
    review: `Our friends who honeymooned in Bali last year told us we had to book myCHEF, and honestly it was the best recommendation we got. We were spending two weeks in Seminyak for our honeymoon and wanted at least one truly special dinner that felt romantic and indulgent. As newlyweds, we wanted something that would become a core memory from this trip. During the planning call, they asked about our love story and favorite date night meals, then designed a custom beachside setup at our villa. They coordinated with the villa to set up a candlelit table on the sand, brought string lights, lanterns, and even arranged for a portable speaker playing acoustic covers of our favorite songs. The chef and server arrived at sunset to start preparing. Watching the chef work while the sun went down was part of the magic. We started with champagne and fresh oysters, moved into perfectly seared scallops with passionfruit beurre blanc, then a surf and turf with lobster tail and beef tenderloin that was cooked to absolute perfection. Everything was plated like art. The server kept our glasses filled, cleared plates quietly, and gave us space to just be together. For dessert they surprised us with a small celebration cake with "Mr. & Mrs." written in chocolate. We sat there under the stars, full and happy and so in love. The team cleaned up while we walked on the beach, and when we came back everything was pristine. This dinner is one of our favorite memories from the entire honeymoon. We are already talking about coming back to Bali for our anniversary and booking myCHEF again.`,
  },
  {
    name: 'Min-jae & Soo-jin',
    location: 'Canggu',
    date: 'Apr 2025',
    rating: 5,
    occasion: 'Birthday',
    guestCount: '2',
    discoverySource: 'Instagram',
    review: `I found myCHEF on Instagram while planning a surprise 40th birthday for my wife. She is obsessed with Japanese food and I wanted to give her an omakase experience at our villa without the stress of a crowded restaurant. Her 40th felt like a big milestone and I wanted it to be intimate, special, and totally focused on her. The myCHEF team helped me design a ten-course omakase journey featuring her favorite fish and flavors. They brought a portable sushi counter setup, premium sake, Japanese tableware, and even played traditional koto music softly in the background. The sushi chef arrived two hours before service to prep the fish and set up his station. Watching him work was like watching an artist - every cut was precise, every plate was perfect. We started with delicate sashimi, moved through nigiri with fish I had never heard of, had a mind-blowing toro handroll, then a miso black cod that melted in our mouths. Each piece was explained and presented with care. My wife was absolutely glowing - she kept saying she could not believe this was happening at our villa. Around course seven she actually started crying happy tears because she felt so seen and celebrated. The chef's passion and skill were evident in every bite. After the final course, a matcha tiramisu, we sat there in stunned, happy silence. The chef and his assistant cleaned everything while we soaked it all in. My wife said it was the best birthday she has ever had and the most thoughtful gift I have ever given her. Totally worth every bit of planning and every rupiah. If you want to make someone feel incredibly special, book myCHEF.`,
  },
  {
    name: 'Jackson & Lily',
    location: 'Nusa Dua',
    date: 'Mar 2025',
    rating: 5,
    occasion: 'Family Vacation',
    guestCount: '5',
    discoverySource: 'Google search',
    review: `Searched "family-friendly private chef Bali" before our first family trip to Indonesia with three young kids. We were nervous about finding food the kids would actually eat while also wanting to try authentic local cuisine ourselves. This vacation was a big deal for us - our first international trip as a family of five - and we did not want meal stress to ruin it. The myCHEF team was incredibly understanding and designed kid-friendly versions of traditional dishes alongside authentic adult meals. Over the week we booked them for three dinners. They brought coloring sheets and crayons for the kids, set up a beautiful family-style table, and even made the presentation fun for children. The chef made chicken satay skewers that looked like little animals, mild nasi goreng the kids devoured, and simple grilled fish with fries. Meanwhile, my wife and I got to enjoy real beef rendang, spicy sambal, and rich curries. The staff was patient and kind with our kids, even bringing out the desserts with little sparklers that made their night. Between courses, the kids could play while we actually talked and enjoyed our meal - something that never happens at restaurants. Cleanup was handled entirely by the team, which meant we could go straight to bedtime routines instead of dealing with dishes. Our six-year-old still talks about the "chef who came to our house" and asks if we can do it again. For traveling parents, this is an absolute game-changer. We actually got to enjoy authentic Balinese food while the kids were happy and fed. Will definitely book them on every future Bali trip.`,
  },
  {
    name: 'Made & Putri',
    location: 'Canggu',
    date: 'Feb 2025',
    rating: 5,
    occasion: 'Anniversary',
    guestCount: '2',
    discoverySource: 'Villa recommendation',
    review: `Our villa concierge recommended myCHEF when we mentioned our fifteenth wedding anniversary. We have been through so much together over these years and wanted a dinner that honored our journey and felt deeply romantic. The myCHEF coordinator asked us to share stories from our fifteen years together, and then designed a seven-course French menu with wine pairings that reflected different chapters of our relationship. They brought candles, flowers, elegant table linens, and set up a playlist that included our wedding song and other meaningful tracks. The chef and sommelier arrived early and worked quietly while we got ready. Each course told a story - starting with French onion soup like we had on our first date in Paris, moving through courses that referenced our honeymoon, our move to New York, and our current life. The chef even recreated a dish from the restaurant where I proposed. The sommelier paired each course with a perfect wine and shared little stories about the vineyards. Everything was cooked to perfection - the duck breast was crispy-skinned and tender, the bouillabaisse was aromatic and rich, the soufflé rose perfectly. Between courses we reminisced, laughed, and even got a little teary. The whole experience felt like a love letter to our marriage. After dessert, the chef played our wedding song and we slow-danced in the dining room while the team discreetly cleaned up. When we finally sat down again, the kitchen was spotless and there was a handwritten note thanking us for letting them be part of our celebration. It was hands down the most romantic and meaningful dinner we have ever had. We will remember this night forever.`,
  },
  {
    name: 'Lucas & Aria',
    location: 'Ubud',
    date: 'Jan 2025',
    rating: 5,
    occasion: 'Proposal',
    guestCount: '2',
    discoverySource: 'Friend referral',
    review: `My best friend proposed to his girlfriend using myCHEF last year and told me I had to do the same. I was planning to propose to my girlfriend during our Ubud trip and wanted everything to be perfect - this is a once-in-a-lifetime moment and I could not afford for anything to go wrong. The myCHEF team understood how high the stakes were and helped me plan every detail. We arranged a private dinner on the villa terrace overlooking rice fields at sunset, complete with candles, flowers, and romantic music. They even coordinated with a photographer to secretly capture the proposal moment. The chef designed a beautiful four-course menu with my girlfriend's favorite dishes - starting with burrata and heirloom tomatoes, moving into truffle pasta, then sea bass with saffron sauce. They timed everything so that dessert would arrive right at sunset. I had arranged for the ring to be presented on the dessert plate under a silver cloche. When the server brought it out and lifted the cover, my girlfriend saw the ring and immediately started crying. I got down on one knee right there with the rice fields and sunset behind me and she said yes. The whole team quietly celebrated with us - it felt like they were genuinely invested in our happiness. After the proposal, they brought out champagne and we toasted while the photographer captured everything. The chef even surprised us with a congratulations cake. The staff handled cleanup while we called our families with the news. Looking back at the photos, everything was absolutely perfect. This proposal dinner set the tone for our engagement and eventual marriage. Could not have asked for a better experience.`,
  },
  {
    name: 'Wei & Li Chen',
    location: 'Seminyak',
    date: 'Dec 2024',
    rating: 5,
    occasion: 'Babymoon',
    guestCount: '2',
    discoverySource: 'Instagram',
    review: `Found myCHEF through Instagram while researching pregnancy-safe dining options for our babymoon. We were seven months pregnant and wanted one last special trip before our lives changed forever, but I was nervous about food safety and what I could actually eat. This trip was really important to us - our last chance to focus on just the two of us - and good food was a big part of that. During our consultation, the chef asked detailed questions about my pregnancy restrictions and designed a menu that was completely safe but also creative and delicious. They planned pregnancy-safe sushi alternatives using cooked fish and vegetables that were absolutely gorgeous. They brought everything needed including a small sound system for calming music. The chef arrived early to prep and walked us through each dish, explaining what was in it and why it was safe for pregnancy. We had cooked salmon rolls with cream cheese and cucumber, tempura vegetable rolls, miso-glazed black cod, and a beautiful poke bowl with seared tuna. Everything was fresh, flavorful, and honestly better than most sushi restaurants I have been to. My husband had traditional sushi and kept offering me bites of his rolls before remembering I could not have them - we laughed about that. The server was attentive and kept my ginger tea filled throughout the meal. For dessert, they made a coconut mango sticky rice that was light and perfect. We felt so taken care of and safe, which is huge when you are pregnant and traveling. The team cleaned everything and left our villa spotless. This meal let us feel special and indulged during an important moment in our lives. We are already planning to book myCHEF when we come back to Bali with our baby.`,
  },
  {
    name: 'Benjamin & Scarlett',
    location: 'Uluwatu',
    date: 'Nov 2024',
    rating: 5,
    occasion: 'Anniversary',
    guestCount: '2',
    discoverySource: 'Wedding planner suggestion',
    review: `Our wedding planner from two years ago suggested myCHEF when we told her we were returning to Bali for our anniversary. We got married in Uluwatu and wanted to recreate some of that magic with a romantic cliff-top dinner at our villa. This anniversary was meaningful because our first two years of marriage had been challenging with work stress and long distance, so we really needed this reconnection time. The myCHEF team designed a sunset tasting menu that was creative, romantic, and absolutely stunning. They set up our villa terrace with candles, lanterns, flowing linens, and even brought a small speaker for a curated playlist. The chef and server arrived early to coordinate timing with the sunset. We started with champagne and canapés as the sky turned pink, then moved through courses that were as beautiful as they were delicious - tuna tartare with edible flowers, lobster bisque, duck confit with fig reduction, and a chocolate lava cake that oozed perfectly. Each dish was plated like a work of art and tasted incredible. The timing was perfect - we finished the main course right as the sun fully set and the stars came out. The whole experience felt cinematic and deeply romantic. We held hands between courses, talked about our dreams for the future, and remembered why we chose each other. The staff was professional but warm, and cleanup happened so smoothly we barely noticed. When we woke up the next morning, everything was pristine. This dinner helped us reconnect and recommit to each other. It was worth every rupiah and created a memory we will hold onto forever. Highly recommend for couples needing a special moment.`,
  },
  {
    name: 'James & Kate',
    location: 'Ubud',
    date: 'Oct 2024',
    rating: 5,
    occasion: 'Honeymoon',
    guestCount: '2',
    discoverySource: 'Google search',
    review: `I searched for "romantic private chef Ubud honeymoon" and myCHEF had the best reviews and portfolio. We had just gotten married and were spending ten days in Bali for our honeymoon - we wanted at least one over-the-top romantic dinner to celebrate becoming husband and wife. This was our first big trip as a married couple and we wanted it to feel special and indulgent. The team helped us plan a seven-course candlelit tasting menu on our villa balcony overlooking the jungle. They brought dozens of candles, elegant table settings, rose petals, and set up string lights that made everything feel magical. A chef and server arrived at sunset to begin preparation. Each course was a surprise - we told them our favorite flavors and let them design the journey. We were blown away by every single dish: scallop crudo with yuzu, truffle pasta, short rib that fell apart with a fork, and a white chocolate raspberry dessert that was almost too pretty to eat. The presentation was Michelin-level and tasted even better than it looked. The server kept our champagne flowing and timed everything perfectly so we never felt rushed. Between courses we would just look out at the jungle and pinch ourselves that this was our life now. For the final course they surprised us with a small cake that said "Just Married" in gold icing. We felt so celebrated and special. After dinner, the team cleaned everything while we sat on the balcony under the stars. This dinner was the highlight of our entire honeymoon and set the tone for our marriage - we want to prioritize experiences, romance, and good food together. Already planning to come back for our first anniversary.`,
  },
  {
    name: 'Andrew M.',
    location: 'Jimbaran',
    date: 'Sep 2024',
    rating: 5,
    occasion: 'Birthday',
    guestCount: '18',
    discoverySource: 'Friend referral',
    review: `A friend who lives in Bali told me I had to use myCHEF for my 50th birthday celebration. I was turning fifty and wanted to throw a proper party with close friends who flew in from all over the world - this felt like a significant milestone and I wanted the food to match the importance of the moment. We planned a fresh seafood BBQ since our villa was near Jimbaran beach, famous for its fish market. The myCHEF team took this idea and ran with it. They coordinated for the chef to go to Jimbaran market at 5am the morning of the party to hand-select the freshest fish, prawns, lobster, and squid. They brought a professional grill setup, serving stations, tiki torches for ambiance, and a sound system for a beach party playlist. A chef and three helpers arrived early afternoon to prep and set up. By evening, the whole villa smelled incredible - charcoal smoke and grilled seafood. The food was absolutely spectacular: whole grilled snapper with sambal matah, giant tiger prawns, calamari that was tender not rubbery, lobster tails with garlic butter, and sides like grilled corn and Indonesian salads. Everything was so fresh you could taste the ocean. My friends could not stop eating - people were going back for thirds. The staff kept everything stocked, grilled fresh batches, and made sure drinks stayed cold. The whole vibe was relaxed and fun, exactly what I wanted. After dinner, they handled all cleanup while we moved the party to the pool. The next morning there was zero trace of the event. So many friends told me it was one of the best birthday parties they had ever been to. Turning fifty felt like a celebration, not something to dread, and this party made it unforgettable.`,
  },
  {
    name: 'Kevin T.',
    location: 'Seminyak',
    date: 'Aug 2024',
    rating: 5,
    occasion: 'Guys Weekend',
    guestCount: '8',
    discoverySource: 'Google search',
    review: `Searched "private chef BBQ Seminyak" while planning a guys weekend in Bali. Eight of us rented a villa for a long weekend to surf, relax, and catch up - we have been friends since college and this annual trip is sacred to us. We wanted one big epic BBQ night with tons of meat, cold beer, and zero cleanup responsibility. The myCHEF team understood the assignment perfectly. They designed a massive BBQ spread with steaks, lamb ribs, pork belly, chicken satay, and all the sides. They brought a huge professional grill, rented a beer cooler, and set up a proper outdoor dining area. The chef and his helper arrived midday to start prepping and marinading. By evening the smell was making us all hungry. Dinner was an absolute feast - perfectly cooked ribeyes with chimichurri, fall-off-the-bone ribs with sweet glaze, crispy pork belly, and endless chicken satay with peanut sauce. The sides were great too - grilled vegetables, fries, coleslaw, fresh sambal. Everything was cooked exactly right and there was so much food we all went back for seconds. The helper kept beer flowing and made sure the grill stayed stocked. We sat around the table for hours just eating, drinking, and telling stories. It felt like the best backyard BBQ but we did not have to do any of the work. After we finished, the team cleaned the entire outdoor area, packed up the grill, and left everything spotless. The next morning we woke up to a clean villa and just had to deal with our own hangovers. All eight of us agreed it was the highlight of the trip and we are definitely booking myCHEF for next year's guys weekend. Worth every single rupiah.`,
  },
  {
    name: 'Daniel & Amy',
    location: 'Ubud',
    date: 'Jul 2024',
    rating: 5,
    occasion: 'Retreat',
    guestCount: '10',
    discoverySource: 'Instagram',
    review: `I found myCHEF on Instagram while planning a wellness retreat for ten clients. I run a holistic health coaching business and wanted to offer my clients a week-long retreat in Ubud that included daily healthy meals that were actually delicious, not just "healthy." Food is such a crucial part of wellness and I needed a chef team who understood nutrition and flavor. The myCHEF team was phenomenal to work with. They designed daily menus that were organic, plant-based, mostly local, and absolutely packed with flavor and nutrition. They coordinated all grocery sourcing from local markets and farms. For the week, they provided breakfast, lunch, and dinner each day - everything from smoothie bowls and chia pudding to tempeh satay, gado-gado, coconut curries, and raw desserts. They brought beautiful serving platters and made presentation a priority. A chef and assistant came twice daily to prep and serve meals. Every single dish was Instagram-worthy and tasted incredible. My clients, who came from different countries and had varying levels of experience with plant-based eating, were completely blown away. Several people said it was the best food they had ever eaten, period. The chef was happy to explain ingredients and cooking methods, which added an educational component. The team handled all cleanup, composting, and even packed us healthy snacks for day trips. By the end of the week, my clients felt nourished, energized, and inspired to continue eating this way at home. Three of them have already asked for the recipes. This partnership with myCHEF elevated my retreat from good to exceptional and I have already booked them for my next two retreats. If you are planning any kind of wellness program, I cannot recommend them enough.`,
  },
];

const TESTIMONIALS_ROW2: Testimonial[] = [
  {
    name: 'Mei Lin',
    location: 'Seminyak',
    date: 'Sep 2025',
    rating: 5,
    occasion: 'Girls Trip',
    guestCount: '5',
    discoverySource: 'Friend referral',
    review: `My best friend used myCHEF last year and told me I absolutely had to book them for our girls trip. Five of us were renting a villa in Seminyak for a long weekend to celebrate my recent promotion and we wanted at least one really special dinner together. We had been planning this trip for months and the food needed to be a highlight, not just an afterthought. The myCHEF team designed a beautiful seafood feast using fresh fish from Jimbaran market. During planning, they asked about our preferences and dietary needs - one friend does not eat shellfish and another is gluten-free, both easily accommodated. They brought elegant serving platters, rented wine glasses, and set up a speaker for a fun girls-night playlist. The chef and helper arrived early evening to prep and the energy was so positive and fun. Dinner was absolutely stunning - whole grilled snapper with sambal matah, garlic butter prawns, seared scallops, calamari that was perfectly tender, and sides like grilled vegetables and coconut rice. Everything was so fresh and flavorful. We sat around the table for hours eating, drinking wine, laughing, and just being present with each other. The staff kept everything flowing - refilling platters, clearing plates, making sure we had everything we needed. After we finished, they cleaned the entire dining area and kitchen while we moved to the pool with our wine. The next morning, zero mess. All five of us agreed it was the best meal of the trip and the highlight of the weekend. Two of my friends have already booked myCHEF for their own upcoming Bali trips. Could not recommend them more highly.`,
  },
  {
    name: 'Robert & Michelle',
    location: 'Seminyak',
    date: 'Jun 2025',
    rating: 5,
    occasion: 'Pool Party',
    guestCount: '25',
    discoverySource: 'Google search',
    review: `I searched "private chef large party Bali" when planning a big pool party for my wife's birthday. We had twenty-five friends coming to our villa and I wanted the food to be amazing without us having to stress about anything. This was a milestone birthday and Michelle deserved a proper celebration with all our Bali friends together. The myCHEF team was incredibly organized and confident handling a group this size. They designed a BBQ and live cooking station setup with endless options - beef satay, chicken skewers, grilled prawns, pork ribs, plus vegetarian skewers for our plant-based friends. They brought two massive professional grills, a full serving station, coolers for drinks, and even tiki torches for ambiance. A chef and four helpers arrived midday to set up and start prep. By party time, everything looked and smelled incredible. The live satay grilling station was a huge hit - guests could watch the chef grill fresh skewers to order and the whole area smelled amazing. The BBQ spread was endless - perfectly cooked meats, fresh sambals, grilled corn, Indonesian salads, and a whole table of sides. People were going back for more all night. The staff kept everything stocked, grilled fresh batches continuously, and managed the whole operation flawlessly. Even with twenty-five people, service never slowed down. Michelle was able to fully enjoy her party instead of worrying about food or hosting. After the party wound down, the team cleaned and packed everything while guests were still swimming. By the time everyone left, the villa was completely clean. So many friends asked who catered and said it was the best party food they had ever had. Worth every rupiah and made Michelle's birthday absolutely perfect.`,
  },
  {
    name: 'Anjali Patel',
    location: 'Ubud',
    date: 'Apr 2025',
    rating: 5,
    occasion: 'Wellness Retreat',
    guestCount: '18',
    discoverySource: 'Instagram',
    review: `I discovered myCHEF through Instagram while researching catering options for my wellness retreat business. I lead plant-based wellness retreats in Ubud and needed a chef team who could provide daily meals for eighteen guests that were healthy, delicious, and beautifully presented. Nutrition and food quality are core to my brand and I could not compromise on either. The myCHEF team completely understood my vision and elevated it beyond what I imagined. They designed daily menus featuring creative plant-based Indonesian cuisine using organic local ingredients. Over the seven-day retreat, they provided three meals per day - everything from tropical smoothie bowls and chia puddings to tempeh rendang, jackfruit satay, gado-gado with cashew sauce, coconut curries, and raw cacao desserts. They sourced ingredients from local organic farms and the Ubud market daily. Two chefs came twice daily to prepare and serve meals, and presentation was always gorgeous - think beautiful platters, edible flowers, and Instagram-worthy plating. My retreat guests came from six different countries with varying levels of experience with plant-based eating, and every single person raved about the food. Several people said it was the best food they had ever eaten, plant-based or otherwise. One guest, who was skeptical about vegan food, asked for recipes to take home. The chefs were happy to explain cooking techniques and ingredients, adding an educational component that my guests loved. The team handled all cleanup, composting, and even packed us healthy snacks for our day trips. By the end of the week, my guests felt truly nourished and many said the food was a retreat highlight. I have now booked myCHEF for all my upcoming retreats and recommend them to other retreat leaders constantly.`,
  },
  {
    name: 'Ava M.',
    location: 'Seminyak',
    date: 'Mar 2025',
    rating: 5,
    occasion: 'Bridal Shower',
    guestCount: '12',
    discoverySource: 'Villa recommendation',
    review: `Our villa manager recommended myCHEF when I mentioned planning a surprise bridal shower for my best friend. She was getting married in two months and I wanted to throw her something elegant and memorable with our close girlfriends before the wedding chaos took over. This was important because she had been so stressed with planning and deserved a beautiful, relaxing celebration. The myCHEF team helped me plan a stunning high tea with an Indonesian twist that felt special and unique. They brought beautiful tiered serving trays, rented elegant china and teacups, arranged fresh flowers for the tables, and set up a gorgeous dessert display. A chef and server arrived early to prep and set up while keeping everything a surprise. The food was absolutely exquisite - think finger sandwiches with local twists, mini quiches, scones with kaya and coconut jam, fresh fruit, and the most incredible Indonesian-inspired desserts including klepon cake balls, pandan panna cotta, and coconut macarons. They even made a small bridal-themed cake decorated with edible flowers. When my friend walked in and saw the setup, she burst into happy tears. All twelve of us spent the afternoon eating, sipping tea and mocktails, playing games, and celebrating her. The staff kept tea flowing, refreshed platters, and captured photos for us throughout the event. Everything felt elegant but relaxed - exactly what I wanted. After everyone left, the team packed up and cleaned in under twenty minutes, leaving zero trace. My friend said it was the most thoughtful and beautiful bridal shower she could have imagined and she felt so celebrated and loved. Multiple guests asked for myCHEF's contact info for their own events. I am so grateful I found them for this special day.`,
  },
  {
    name: 'Isabella T.',
    location: 'Uluwatu',
    date: 'Feb 2025',
    rating: 5,
    occasion: 'Graduation',
    guestCount: '8',
    discoverySource: 'Google search',
    review: `I searched "private chef celebration dinner Uluwatu" while planning my graduation celebration dinner. I had just finished my master's degree and my parents flew all the way from Italy to Bali to celebrate with me and my close friends. This was a huge milestone after years of hard work and I wanted the dinner to feel special and reflect how far I had come. The myCHEF team designed a beautiful Mediterranean feast that honored my Italian roots while incorporating Indonesian ingredients. During menu planning, they asked about my favorite dishes from home and created a fusion menu that was creative and delicious. They set up our villa terrace with candles, brought beautiful linens and proper wine glasses, and played Mediterranean music softly in the background. The chef and server arrived early and were so warm and professional. Dinner was absolutely incredible - we started with burrata with local tomatoes and basil, moved into seafood risotto with Jimbaran prawns, then lamb chops with herb crust and roasted vegetables. Every dish reminded me of home but with a fresh Balinese twist. My parents, who are very particular about Italian food, were genuinely impressed. My friends loved everything and kept saying it felt like dining at a high-end restaurant in Mykonos. The pacing was perfect - we could savor each course and actually talk and celebrate together. For dessert, they surprised me with a graduation cake decorated with gold foil. After dinner, the team cleaned everything while we sat on the terrace looking at the stars and reflecting on this chapter of my life. My parents said it was one of the most special dinners they had experienced. This celebration dinner felt like the perfect way to close one chapter and begin the next. I will remember this meal forever.`,
  },
  {
    name: 'Rizki Putra',
    location: 'Seminyak',
    date: 'Jan 2025',
    rating: 5,
    occasion: 'Engagement Party',
    guestCount: '14',
    discoverySource: 'Friend referral',
    review: `My cousin used myCHEF for her wedding and insisted I book them for my engagement party in Bali. My fiancée and I got engaged three months ago and wanted to celebrate properly with our closest friends - fourteen people flying in from Jakarta, Surabaya, and Singapore. We wanted this party to feel festive and special, marking the beginning of our journey to marriage. The myCHEF team understood exactly what we wanted and made the planning process effortless. They designed a beautiful Indonesian feast with modern presentation that honored our heritage while feeling sophisticated. They decorated our villa with tropical flowers and traditional textiles, rented elegant serving platters, brought proper glassware for toasting, and set up a sound system for our celebration playlist. A chef and two helpers arrived early to prepare everything. The food was absolutely spectacular - starting with a grazing table of Indonesian appetizers, moving into shared platters of bebek betutu, iga bakar, seafood curry, tempeh goreng, and all the traditional sides and sambals we love. Everything was beautifully presented and tasted incredible - authentic flavors but elevated presentation. Our friends kept commenting on how restaurant-quality everything was. The staff managed service perfectly, keeping platters stocked and making sure everyone's glasses stayed full for toasting. We gave speeches, shared stories, laughed and celebrated late into the night. For dessert, they surprised us with a small engagement cake decorated with gold leaf and our initials. After everyone moved to the pool area, the team cleaned everything completely. The next morning, our villa was spotless and we could just enjoy breakfast with our friends. Multiple people told us it was the best engagement party they had attended and several asked for myCHEF's contact. This celebration was the perfect way to begin our wedding journey surrounded by love and incredible food. We are already planning to book them for more wedding events.`,
  },
  {
    name: 'Mia R.',
    location: 'Sanur',
    date: 'Dec 2024',
    rating: 5,
    occasion: 'New Years Eve',
    guestCount: '16',
    discoverySource: 'Instagram',
    review: `Found myCHEF through Instagram reels showing their New Year's Eve setups and knew immediately they were perfect for our family celebration. We had sixteen family members spanning four generations gathered in Sanur to ring in the new year together, and I wanted the countdown dinner to be special and festive. This was the first time our whole extended family had celebrated New Year together in over a decade, so it had to be memorable. The myCHEF team designed an elegant countdown dinner with champagne service timed perfectly for midnight. They decorated our villa dining area with gold and silver accents, brought proper champagne flutes for everyone, rented a long dining table so we could all sit together, and set up a sound system for music and the countdown. A chef and three servers arrived early afternoon to prep for the multi-course dinner. The menu was sophisticated but family-friendly - starting with canapés and champagne, moving through courses of seared scallops, beef tenderloin with truffle butter, and ending with a chocolate lava cake with gold leaf. Everything was beautifully plated and tasted restaurant-quality. The staff coordinated timing so we finished the main course right before midnight. At 11:58, they brought out champagne for everyone and we counted down together as a family. After midnight, they served dessert and coffee while we toasted the new year. The energy was so joyful and the food was a huge part of that. My mom said it was the best New Year celebration she could remember. After we moved to the living room for more champagne and conversation, the team cleaned everything. The next morning, our villa was spotless and we started the new year without any mess or stress. This celebration set the perfect tone for 2025 and brought our family closer together. Worth every rupiah.`,
  },
  {
    name: 'Haruka Tanaka',
    location: 'Canggu',
    date: 'Nov 2024',
    rating: 5,
    occasion: 'Yoga Retreat',
    guestCount: '12',
    discoverySource: 'Google search',
    review: `I searched "organic chef yoga retreat Bali" while planning my first-ever yoga retreat as a newly certified instructor. I had twelve guests coming and I was terrified about the food logistics - I needed healthy, organic meals three times a day for a week but had no catering experience. Food quality was crucial because it would directly impact how my guests felt during yoga and meditation. The myCHEF team completely took this stress off my shoulders. They designed daily menus that were organic, mostly locally sourced, plant-based, and absolutely delicious. Over the seven days, they handled breakfast, lunch, and dinner, plus healthy snacks. Think overnight oats with dragon fruit, smoothie bowls, tempeh and veggie rice bowls, coconut curries, fresh salads with peanut dressing, and raw desserts sweetened with dates. They sourced ingredients from organic farms around Canggu and Ubud, which aligned perfectly with my retreat values. A chef and helper came morning and evening to prepare and serve meals. The food was consistently beautiful, nourishing, and full of flavor - nothing bland or boring. My retreat guests came from five different countries and everyone raved about how good the food was. Several people said they normally struggle with plant-based eating but felt satisfied and energized throughout the week. The chefs were also wonderful about explaining ingredients and sharing recipes when guests asked. Cleanup was always handled completely and the kitchen stayed organized throughout the week. By the end of the retreat, my guests said the food was one of the highlights and several asked for myCHEF's contact info. This partnership made my first retreat a huge success and I have already booked them for my next three retreats. They made something I was stressed about into an absolute strength.`,
  },
  {
    name: 'Ploy Siriporn',
    location: 'Seminyak',
    date: 'Oct 2024',
    rating: 5,
    occasion: 'Birthday',
    guestCount: '10',
    discoverySource: 'Instagram',
    review: `I discovered myCHEF through Instagram ads and fell in love with their party setups, perfect timing since my 28th birthday was coming up. I wanted to host a fun dinner party for my closest friends in Bali with good food, great vibes, and a theme that felt unique. My birthday had fallen on a random weeknight the past few years, so this felt like my chance to actually celebrate properly. The myCHEF team helped me design a "tropical fusion" themed menu with colorful cocktails and dishes from across Asia. They decorated our villa dining area with tropical flowers, brought a cocktail station with fresh ingredients, rented colorful glassware, and set up a great sound system for a upbeat party playlist. The chef, bartender, and server arrived early and the energy was immediately fun. The cocktails were amazing - think passion fruit mojitos, lychee martinis, and a signature "birthday girl" cocktail with edible flowers. The food was creative and delicious - Thai fish cakes, Vietnamese summer rolls, Korean fried chicken, pad thai, and a massive tropical fruit platter for dessert. Everything was beautifully presented and tasted incredible. My friends could not stop raving about how good everything was. The bartender kept cocktails flowing and was super fun and engaging. The whole vibe was exactly what I wanted - relaxed but festive, delicious but not pretentious. We danced, ate, laughed, and celebrated for hours. The team handled everything so I could actually enjoy my own party. After everyone left, they cleaned everything and even took out trash. The next morning my villa was spotless. So many friends messaged the next day saying it was one of the best birthday parties they had been to. This party made me feel so celebrated and loved. Best birthday I have ever had.`,
  },
  {
    name: 'Arjun Singh',
    location: 'Seminyak',
    date: 'Sep 2024',
    rating: 5,
    occasion: 'Farewell Dinner',
    guestCount: '8',
    discoverySource: 'Friend referral',
    review: `My neighbor recommended myCHEF when I mentioned wanting to host a farewell dinner before leaving Bali. I had been living in Seminyak for six months on a work assignment and wanted to celebrate with the close friends I had made before heading back to Canada. This group had become like family and I wanted our last meal together to be special and memorable. The myCHEF team helped me plan a traditional Balinese feast that honored the time I had spent here. During planning, I told them I wanted authentic, home-style Balinese food, not tourist versions. They designed a menu featuring dishes I had fallen in love with during my six months here. They brought traditional serving platters, decorated with local flowers, and played gamelan music softly in the background. The chef and helper arrived early to start the slow-cooked dishes. By dinner time, my villa smelled absolutely incredible - that mix of lemongrass, turmeric, and spices that I will forever associate with Bali. The meal was extraordinary - ayam betutu that was the best I had in all my time here, babi guling with crispy skin, lawar, sate lilit, sambal matah, and traditional Balinese desserts. Everything was authentic and perfectly spiced. My Balinese friends at the table confirmed these were the real versions of these dishes, not watered down. We sat together for hours eating, sharing stories, laughing, and some of us tearing up knowing this chapter was ending. The food sparked so many memories and conversations about our favorite Bali moments. After dinner, the team quietly cleaned while we moved outside to watch the sunset one last time together. The next morning, everything was spotless. This dinner gave me the closure and celebration I needed before leaving. It was the perfect goodbye to this incredible six months and to these wonderful people. I will never forget this meal or this night.`,
  },
  {
    name: 'Melissa & John',
    location: 'Canggu',
    date: 'Aug 2024',
    rating: 5,
    occasion: 'Engagement',
    guestCount: '12',
    discoverySource: 'Villa recommendation',
    review: `Our villa host recommended myCHEF when we mentioned celebrating our recent engagement with Bali friends. We had gotten engaged a week earlier on the beach and wanted to host a proper celebration dinner with the friends we had made during our three months living in Canggu. This engagement felt like the start of our next chapter and we wanted to celebrate it properly with our community here. The myCHEF team was so excited for us and helped plan a beautiful celebration dinner. They designed a menu with our favorite dishes, decorated our villa with flowers and candles, and even coordinated a special engagement cake as a surprise. They brought elegant table settings, rented champagne flutes, and set up romantic lighting. The chef and two servers arrived early and were genuinely happy to be part of our celebration. Dinner was fantastic - we had a mix of Western and Asian dishes including seared tuna, duck breast with cherry sauce, truffle risotto, and beautiful salads. Everything was restaurant-quality and perfectly timed. Before dessert, the team brought out champagne for toasts and our friends shared the sweetest speeches about our relationship. Then they surprised us with a two-tier engagement cake decorated with gold foil and fresh flowers - we had no idea they were planning this. Everyone cheered and we cut the cake together while someone captured photos. The whole night felt magical and intimate. Our friends kept saying how special and well-organized everything was. After dinner, the team cleaned everything while we sat outside with friends under the stars. The next day, multiple people messaged saying it was one of the most beautiful celebrations they had attended. This dinner made our engagement feel real and celebrated, and we are already planning to use myCHEF for our wedding events when we come back to Bali next year.`,
  },
  {
    name: 'Laura & Steve',
    location: 'Ubud',
    date: 'Jul 2024',
    rating: 5,
    occasion: 'Babymoon',
    guestCount: '2',
    discoverySource: 'Google search',
    review: `I searched "pregnancy-safe private chef Ubud" while planning our babymoon. We were six months pregnant with our first baby and wanted one last special trip together before our lives changed forever, but I was nervous about food safety and what I could eat in Bali. This trip was really important to us - our last chance to focus on just the two of us - and we did not want food anxiety to ruin it. The myCHEF team was incredibly knowledgeable and thoughtful about pregnancy restrictions. During our consultation, the chef asked detailed questions about what I was craving, what made me nauseous, and what foods I was avoiding. They designed a custom menu that accommodated all my restrictions while still being exciting and delicious. They planned dishes that were safe - fully cooked proteins, pasteurized dairy, lots of fresh vegetables and fruits. They brought everything needed including a small speaker for relaxing music. The chef arrived early and walked me through every ingredient and cooking method so I felt completely safe. We had grilled chicken with mango salsa, fully cooked salmon with ginger glaze, vegetable noodles, fresh fruit platters, and coconut panna cotta for dessert. Everything was fresh, flavorful, and made me feel nourished. My husband had some spicier versions of dishes and we both felt satisfied. The chef even made me a special ginger tea that helped with some lingering nausea. Throughout the meal, I felt completely taken care of and safe - something I had been stressed about for this whole trip. The server was attentive and kept checking if I needed anything. After dinner, they cleaned everything and left encouraging notes wishing us well with the baby. This meal let us feel special and pampered during this precious time. We felt so cared for and it took away all the stress we had about eating safely while traveling pregnant. We are already planning to book myCHEF when we come back to Bali with our baby.`,
  },
  {
    name: 'Olivia P.',
    location: 'Nusa Dua',
    date: 'Jun 2024',
    rating: 5,
    occasion: 'Mom & Daughters',
    guestCount: '3',
    discoverySource: 'Friend referral',
    review: `My best friend used myCHEF for her family trip and told me I had to book them for my weekend with my mom and sister. The three of us were spending a long weekend together in Nusa Dua - something we had not done in years with everyone living in different countries. We wanted at least one really special dinner that felt indulgent and fun. During planning, I mentioned we all love Italian food and wanted something interactive. The myCHEF team suggested a pasta-making experience combined with a full Italian dinner, which sounded perfect. They brought all the equipment for fresh pasta making, set up a cooking station, and planned to teach us before serving the full meal. The chef arrived early afternoon and was so warm and engaging. She set up a beautiful cooking station and walked us through making fresh fettuccine and ravioli from scratch. We were laughing, flour-covered, and having so much fun. She taught us tricks and techniques while sharing stories about Italian cooking. After we finished making pasta, she took over and prepared the full meal while we relaxed with wine. Dinner was absolutely incredible - starting with bruschetta and burrata, moving into the fresh pasta we made with different sauces, then a beautiful caprese salad, and ending with homemade tiramisu. Everything tasted amazing and knowing we had made some of it ourselves made it even more special. My mom, who loves to cook, kept saying how much she learned. My sister and I could not stop laughing about our pasta-making attempts. The whole experience brought us closer together and gave us something to bond over beyond just catching up. After dinner, the chef cleaned everything including all the pasta-making equipment. The next morning, our kitchen was spotless. The three of us still talk about this dinner and the pasta-making experience. It created a core memory from our weekend together and we are already planning to do it again next year.`,
  },
  {
    name: 'Thomas & Emma',
    location: 'Seminyak',
    date: 'May 2024',
    rating: 5,
    occasion: 'Anniversary',
    guestCount: '2',
    discoverySource: 'Instagram',
    review: `I found myCHEF on Instagram while secretly planning our 20th wedding anniversary dinner. My wife and I have been through so much together over two decades and I wanted this anniversary to feel deeply romantic and special. We had weathered some tough years recently and this dinner felt like a reaffirmation of our commitment to each other. The myCHEF team understood exactly what I was going for. They designed an intimate multi-course tasting menu with wine pairings that told the story of our twenty years together. During planning, I shared memories from different phases of our marriage and they incorporated elements into each course. They set up our villa terrace with dozens of candles, fresh flowers, elegant linens, and a curated playlist featuring songs from our wedding and relationship. The chef and sommelier arrived early to prep and set everything up. When my wife walked onto the terrace and saw the setup, she gasped and immediately teared up. Each course was a journey - starting with oysters like we had on our honeymoon, moving through dishes that referenced our different homes over the years, and ending with a recreation of our wedding dessert. The sommelier paired each course with perfect wines and shared little stories about the vineyards. Everything was cooked to absolute perfection. Between courses, we reminisced, looked through old photos on my phone, and reconnected in a way we had not in months. The whole experience felt like a love letter to our marriage. After dessert, the chef brought out a small anniversary cake and played our first dance song. We slow-danced on the terrace while the team discreetly cleaned up. When we finally sat down again, everything was spotless. This dinner reminded us why we chose each other and gave us space to recommit to our next twenty years together. It was hands down the most romantic and meaningful anniversary we have ever celebrated. Worth every bit of planning and investment.`,
  },
  {
    name: 'Ryan & Claire',
    location: 'Canggu',
    date: 'Apr 2024',
    rating: 5,
    occasion: 'Birthday',
    guestCount: '2',
    discoverySource: 'Google search',
    review: `Searched "surprise birthday chef Canggu" while planning a surprise dinner for my wife's birthday. She had been dropping hints about wanting Thai food and I wanted to make her birthday special after a stressful few months at work. This birthday felt important - she had been pushing herself so hard and deserved to feel celebrated and relaxed. The myCHEF team helped me coordinate the entire surprise. They designed an authentic Thai menu featuring her favorite dishes, decorated our villa dining area with orchids and candles, and timed everything for when she got back from her birthday spa day. They brought beautiful Thai serving dishes, set up soft lighting, and played traditional Thai music. The chef and server arrived while she was out and had everything ready when she walked in. When she opened the door and saw the setup, she was completely shocked and started crying happy tears. The meal was absolutely perfect - starting with tom yum soup, moving into fresh papaya salad, pad thai with perfectly cooked prawns, massaman curry with tender beef, and mango sticky rice for dessert. Every dish tasted authentic and was cooked exactly how she likes it - the spice levels were perfect, the flavors were balanced, everything was spot-on. She kept saying she could not believe this was happening at our villa and that it tasted better than our favorite Thai restaurant back home. The chef had clearly mastered these dishes. The server kept everything flowing smoothly and even brought out a small birthday cake with candles for her to blow out. We sat together for hours just enjoying the food and each other's company. After dinner, the team cleaned everything while we went for a walk on the beach. When we came back, the villa was spotless and there was a sweet birthday card from the team. My wife said it was the best birthday surprise she had ever had and the most thoughtful gift I have given her. Making her feel that special and loved made all the planning worth it. Will definitely book myCHEF for future celebrations.`,
  },
  {
    name: 'Victoria S.',
    location: 'Ubud',
    date: 'Mar 2024',
    rating: 5,
    occasion: 'Wellness Week',
    guestCount: '1',
    discoverySource: 'Villa recommendation',
    review: `My villa concierge recommended myCHEF when I mentioned doing a solo wellness week focused on healing and healthy eating. I had just gone through a difficult breakup and quit a stressful job, and I needed a full reset - mentally, physically, and emotionally. Food was going to be a crucial part of this healing journey and I wanted to eat clean, nourishing meals without any planning stress. The myCHEF team completely understood what I was trying to accomplish. They designed daily menus for the entire week that were healthy, organic, plant-forward, and still exciting and delicious. We planned three meals a day for seven days - everything from smoothie bowls and overnight oats to quinoa buddha bowls, tempeh stir-fries, coconut curries, fresh salads, and raw desserts. They sourced ingredients from local organic farms and Ubud market, which aligned with my wellness values. A chef came morning and evening to prepare meals, and everything was always beautifully presented - eating felt like an act of self-care, not just fuel. The food was consistently delicious, nourishing, and made me feel energized and clear-headed. I actually looked forward to every meal. Throughout the week, I journaled, did yoga, meditated, and ate these incredible healthy meals. I could feel my body healing and my energy returning. By the end of the week, I felt lighter - physically and emotionally. I had lost a few pounds, my skin was glowing, and most importantly, I felt like myself again. The chef was also wonderful to talk to and shared cooking tips and recipes with me. Cleanup was always handled completely so I never had to think about dishes or mess. This week truly changed my life and set me on a new path. The food was such a crucial part of that transformation. I have already booked myCHEF for another wellness week later this year because the experience was so impactful.`,
  },
  {
    name: 'Brandon & Ashley',
    location: 'Nusa Dua',
    date: 'Feb 2024',
    rating: 5,
    occasion: 'Valentine\'s Day',
    guestCount: '2',
    discoverySource: 'Friend referral',
    review: `Our friends who got engaged in Bali last year recommended myCHEF for Valentine's Day. My girlfriend and I were spending two weeks in Bali and I wanted Valentine's to be incredibly romantic and memorable. We had been together for three years and I was already thinking about proposing soon, so this felt like an important moment to show her how much she means to me. The myCHEF team helped me plan a truly unique Valentine's experience. They designed an aphrodisiac-themed tasting menu featuring ingredients known for romance - think oysters, figs, dark chocolate, strawberries, and champagne. They set up our villa with rose petals, dozens of candles, romantic lighting, and a playlist of slow jazz and R&B. The chef and server arrived at sunset to begin preparation. The whole setup looked like something from a movie - incredibly romantic and intimate. The meal itself was creative, delicious, and fun - starting with fresh oysters and champagne, moving through courses of seared scallops with saffron, duck breast with fig compote, dark chocolate lava cake with strawberries, and petit fours with champagne truffles. Each course was plated beautifully and tasted incredible. The server explained the aphrodisiac properties of each ingredient, which added a playful element. Between courses, we just held hands, talked about our relationship, and soaked in the romance. My girlfriend kept saying she felt like a princess and could not believe I had planned all this. For dessert, they surprised us with a heart-shaped chocolate box with our initials. After dinner, the team cleaned quietly while we slow-danced in the candlelight. This Valentine's exceeded every expectation and made my girlfriend feel so loved and special. She still talks about it as the most romantic night of her life. The whole experience set the bar incredibly high for future Valentine's Days. Highly recommend for anyone wanting to create a truly memorable romantic evening.`,
  },
  {
    name: 'Michelle T.',
    location: 'Seminyak',
    date: 'Jan 2024',
    rating: 5,
    occasion: 'Family Gathering',
    guestCount: '18',
    discoverySource: 'Google search',
    review: `I searched "private chef large family Bali" while planning our extended family vacation. We had eighteen family members coming from four different countries - grandparents, parents, teenagers, young kids - and feeding everyone without constant restaurant trips felt overwhelming. This vacation was our first all-together trip in five years and I wanted meals to bring us together, not stress me out. The myCHEF team was so experienced with large family groups and immediately put me at ease. During our planning call, I explained all our dietary needs - two vegetarians, one gluten-free, picky kids, and my mother-in-law who is very particular. They designed a flexible menu with options that would make everyone happy without being complicated. Over the week, we booked them for four dinners. They brought large serving platters, rented a huge dining table so we could all sit together, and set up buffet-style service so everyone could choose what they wanted. A chef and three helpers handled all prep, cooking, and service. Each dinner featured a mix of crowd-pleasers and local specialties - think BBQ nights with grilled meats and vegetables, pasta nights with multiple sauce options, Indonesian feast nights with mild and spicy versions, and build-your-own taco nights. The kids were happy because there were always options they liked, while adults got to enjoy more adventurous dishes. My mother-in-law, who normally complains about everything, actually complimented the beef rendang. The team was patient with the kids, accommodated last-minute changes, and kept everything running smoothly despite the chaos of eighteen people. After each dinner, cleanup was handled completely by the staff. These dinners became the highlights of our vacation - everyone gathered around the table, sharing stories and laughter, with delicious food bringing us together. Multiple family members said these were the best family meals we had ever shared. This experience made our reunion possible and stress-free. Worth every rupiah.`,
  },
  {
    name: 'Alex & Jordan',
    location: 'Canggu',
    date: 'Dec 2023',
    rating: 5,
    occasion: 'Holiday Dinner',
    guestCount: '6',
    discoverySource: 'Instagram',
    review: `Found myCHEF through Instagram while feeling homesick about spending Christmas away from family. My partner and I were spending the holidays in Bali with four close friends who also could not get home for Christmas. We wanted to create our own holiday celebration that felt festive and special even though we were far from home. Christmas is such an important holiday for all of us and we did not want to just skip it or treat it like any other day. The myCHEF team helped us plan a traditional Christmas dinner with Indonesian touches that honored both our traditions and our location. They decorated our villa dining area with greenery and candles, brought festive table settings, and played classic Christmas music. They even found Christmas crackers for us to pull. The chef and helper arrived early to start the slow-roasted dishes. By dinner time, the whole villa smelled like Christmas - roasted meat, herbs, and spices. The meal was perfect - starting with butternut squash soup, moving into a beautiful roasted turkey with all the traditional sides like stuffing, mashed potatoes, roasted vegetables, and cranberry sauce. They also included Indonesian sambals and pickles as a nod to where we were. For dessert, they made Christmas pudding and a traditional Indonesian cake. Everything tasted like home and made us feel connected to our families even though we were thousands of miles away. We went around the table sharing what we were grateful for and it got emotional. After dinner, the team cleaned everything while we opened small gifts and video-called our families back home. The next morning, our villa was spotless. This dinner helped us create our own holiday traditions and made being away from family feel less lonely. We all agreed it was one of the most meaningful Christmases we had celebrated. Planning to do it again next year if we are still in Bali.`,
  },
  {
    name: 'Samantha R.',
    location: 'Uluwatu',
    date: 'Nov 2023',
    rating: 5,
    occasion: 'Birthday',
    guestCount: '4',
    discoverySource: 'Villa recommendation',
    review: `Our villa manager suggested myCHEF when I mentioned celebrating my milestone 35th birthday. My husband and our best couple friends were joining us for a long weekend in Uluwatu and I wanted one really special dinner to mark this birthday. Thirty-five felt significant - I had just gotten a big promotion, we were finally financially stable, and life felt good. I wanted a dinner that reflected how far I had come. The myCHEF team designed a beautiful sunset dinner on our villa terrace overlooking the cliffs and ocean. They decorated with candles and tropical flowers, brought elegant table settings, and set up string lights that would glow as the sun went down. The chef and server arrived early and were so warm and professional. They timed everything perfectly so we would finish right as the sun set. The meal was absolutely stunning - starting with fresh ceviche, moving through perfectly grilled lobster tails, beef tenderloin with truffle butter, and ending with a passion fruit cheesecake. Every course was beautifully plated and tasted incredible. The view combined with the food made everything feel magical. My best friend kept saying it felt like dining at a five-star resort restaurant but better because it was private and intimate. Between courses, we talked about our lives, our dreams, and how grateful we were to be together in this moment. For dessert, the team brought out a birthday cake with sparklers and we all sang while the sun set behind us. It was one of those perfect life moments you want to freeze forever. After dinner, they cleaned everything while we watched the stars come out and reflected on the evening. The next day, my husband said watching me so happy made the whole trip worth it. This birthday dinner marked a chapter of my life where I finally felt successful, celebrated, and surrounded by love. I will remember this meal and this moment forever.`,
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const PREVIEW_LENGTH = 150;
  const shouldTruncate = testimonial.review.length > PREVIEW_LENGTH;
  const displayText = isExpanded || !shouldTruncate 
    ? testimonial.review 
    : testimonial.review.slice(0, PREVIEW_LENGTH) + '...';

  return (
    <Card 
      className="flex-shrink-0 w-[320px] bg-background/80 backdrop-blur-sm border-2 hover-elevate cursor-pointer transition-all" 
      data-testid="card-testimonial"
      onClick={() => shouldTruncate && setIsExpanded(!isExpanded)}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-semibold text-sm">{testimonial.name}</h4>
              <CheckCircle className="w-3.5 h-3.5 text-primary fill-primary/20 flex-shrink-0" />
            </div>
            <div className="flex items-center gap-1 text-xs text-foreground/60">
              <MapPin className="w-3 h-3" />
              {testimonial.location}
            </div>
          </div>
          <Badge variant="secondary" className="text-xs flex-shrink-0">
            {testimonial.date}
          </Badge>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-0.5">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
            ))}
          </div>
          <Badge variant="outline" className="text-xs border-primary/30 text-primary">
            Verified
          </Badge>
        </div>

        <Badge className="mb-3 w-fit text-xs bg-primary/10 text-primary border-primary/20">
          {testimonial.occasion}
        </Badge>

        <p className="text-sm text-foreground/80 leading-relaxed">
          {displayText}
        </p>

        {shouldTruncate && (
          <div className="flex items-center gap-1 mt-2 text-xs text-primary font-medium">
            {isExpanded ? (
              <>
                <ChevronUp className="w-3.5 h-3.5" />
                Show less
              </>
            ) : (
              <>
                <ChevronDown className="w-3.5 h-3.5" />
                Read full review
              </>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function ScrollingRow({ testimonials, direction }: { testimonials: Testimonial[]; direction: 'left' | 'right' }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let cleanup: (() => void) | undefined;

    // Wait for content to load and measure
    const timer = setTimeout(() => {
      if (!scrollContainer) return;
      
      const maxScroll = scrollContainer.scrollWidth / 2;
      
      // Initialize scroll position
      let scrollPosition = direction === 'right' ? maxScroll : 0;
      scrollContainer.scrollLeft = scrollPosition;

      const scroll = () => {
        if (!scrollContainer) return;

        // Only scroll if not paused
        if (!isPaused) {
          const currentMax = scrollContainer.scrollWidth / 2;

          if (direction === 'left') {
            // Scroll leftward (content moves left, showing right side)
            scrollPosition += 0.5;
            if (scrollPosition >= currentMax) {
              scrollPosition = 0;
            }
          } else {
            // Scroll rightward (content moves right, showing left side)
            scrollPosition -= 0.5;
            if (scrollPosition <= 0) {
              scrollPosition = currentMax;
            }
          }

          scrollContainer.scrollLeft = scrollPosition;
        }
        
        animationFrameId = requestAnimationFrame(scroll);
      };

      animationFrameId = requestAnimationFrame(scroll);

      cleanup = () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }, 100);

    return () => {
      clearTimeout(timer);
      if (cleanup) cleanup();
    };
  }, [direction, isPaused]);

  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div
      ref={scrollRef}
      className="flex gap-4 overflow-x-hidden scrollbar-hide"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {duplicatedTestimonials.map((testimonial, index) => (
        <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
      ))}
    </div>
  );
}

export default function TestimonialCarousel() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl lg:text-5xl font-semibold mb-4" data-testid="text-testimonials-headline">
            Real Stories from Real Guests
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-3xl mx-auto">
            Over 1000+ verified reviews from guests who trusted myCHEF for their special occasions
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <ScrollingRow testimonials={TESTIMONIALS_ROW1} direction="left" />
        <ScrollingRow testimonials={TESTIMONIALS_ROW2} direction="right" />
      </div>

      <div className="text-center mt-8 px-4">
        <p className="text-xs sm:text-sm text-foreground/60">
          All reviews verified • Updated October 2025 • 4.9/5 average rating
        </p>
      </div>
    </section>
  );
}
