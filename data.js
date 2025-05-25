/*
 * Aarti Sangrah - Deities Data
 * 
 * HOW TO ADD YOUTUBE VIDEOS TO AARTIS:
 * Simply add a "videoLink" property to any aarti object with the YouTube URL.
 * 
 * Example:
 * {
 *     id: "ganesh-1",
 *     title: "जय गणेश देवा",
 *     hindi: "...",
 *     english: "...",
 *     videoLink: "https://www.youtube.com/watch?v=VIDEO_ID"  // <- Add this line
 * }
 * 
 * Supported YouTube URL formats:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 * 
 * If videoLink is not provided, no video will be shown for that aarti.
 * Each aarti can have its own unique video link.
 */

const deitiesData = [
    {
        id: "ganesh",
        name: "Lord Ganesh",
        image: "images/ganesh.jpg",
        aartis: [
            {
                id: "ganesh-1",
                title: "जय गणेश देवा",
                hindi: `जय गणेश, जय गणेश, जय गणेश देवा।
माता जाकी पार्वती, पिता महादेवा॥

एक दंत दयावंत, चार भुजा धारी।
माथे पे सिंदूर सोहे, मूसे की सवारी॥

जय गणेश, जय गणेश, जय गणेश देवा।
माता जाकी पार्वती, पिता महादेवा॥

अंधन को आंख देत, कोढ़िन को काया।
बांझन को पुत्र देत, निर्धन को माया॥

जय गणेश, जय गणेश, जय गणेश देवा।
माता जाकी पार्वती, पिता महादेवा॥

हार चढ़े, फूल चढ़े और चढ़े मेवा।
लड्डुअन का भोग लगे, संत करें सेवा॥

जय गणेश, जय गणेश, जय गणेश देवा।
माता जाकी पार्वती, पिता महादेवा॥

दीनन की लाज रखो, शंभु सुतकारी।
कामना को पूर्ण करो, जाग महारानी॥

जय गणेश, जय गणेश, जय गणेश देवा।
माता जाकी पार्वती, पिता महादेवा॥`,
                english: `Jai Ganesh, Jai Ganesh, Jai Ganesh Deva.
Mata Jaaki Parvati, Pita Mahadeva.

Ek Dant Dayavant, Char Bhuja Dhari.
Mathe Par Tilak Sohe, Moose Ki Savari.

Paan Chade, Phool Chade, Aur Chade Meva.
Ladduan Ka Bhog Lage, Sant Karen Seva.

Andhan Ko Aankh Det, Kodhin Ko Kaya.
Baanjhan Ko Putra Det, Nirdhan Ko Maya.

Soor Shyam Sharan Aaye, Safal Kije Seva.
Jai Ganesh, Jai Ganesh, Jai Ganesh Deva.

Mata Jaaki Parvati, Pita Mahadeva.`,
videoLink: "https://www.youtube.com/watch?v=Yuex2EnsGiY"
            },
            {
                id: "ganesh-2",
                title: "श्री गणेश चालीसा",
                hindi: `॥ दोहा ॥
जय गणपति सदगुण सदन,कविवर बदन कृपाल।

विघ्न हरण मंगल करण,जय जय गिरिजालाल॥

॥ चौपाई ॥
जय जय जय गणपति गणराजू।मंगल भरण करण शुभः काजू॥

जै गजबदन सदन सुखदाता।विश्व विनायका बुद्धि विधाता॥

वक्र तुण्ड शुची शुण्ड सुहावना।तिलक त्रिपुण्ड भाल मन भावन॥

राजत मणि मुक्तन उर माला।स्वर्ण मुकुट शिर नयन विशाला॥

पुस्तक पाणि कुठार त्रिशूलं।मोदक भोग सुगन्धित फूलं॥

सुन्दर पीताम्बर तन साजित।चरण पादुका मुनि मन राजित॥

धनि शिव सुवन षडानन भ्राता।गौरी लालन विश्व-विख्याता॥

ऋद्धि-सिद्धि तव चंवर सुधारे।मुषक वाहन सोहत द्वारे॥

कहौ जन्म शुभ कथा तुम्हारी।अति शुची पावन मंगलकारी॥

एक समय गिरिराज कुमारी।पुत्र हेतु तप कीन्हा भारी॥

भयो यज्ञ जब पूर्ण अनूपा।तब पहुंच्यो तुम धरी द्विज रूपा॥

अतिथि जानी के गौरी सुखारी।बहुविधि सेवा करी तुम्हारी॥

अति प्रसन्न हवै तुम वर दीन्हा।मातु पुत्र हित जो तप कीन्हा॥

मिलहि पुत्र तुहि, बुद्धि विशाला।बिना गर्भ धारण यहि काला॥

गणनायक गुण ज्ञान निधाना।पूजित प्रथम रूप भगवाना॥

अस कही अन्तर्धान रूप हवै।पालना पर बालक स्वरूप हवै॥

बनि शिशु रुदन जबहिं तुम ठाना।लखि मुख सुख नहिं गौरी समाना॥

सकल मगन, सुखमंगल गावहिं।नाभ ते सुरन, सुमन वर्षावहिं॥

शम्भु, उमा, बहुदान लुटावहिं।सुर मुनिजन, सुत देखन आवहिं॥

लखि अति आनन्द मंगल साजा।देखन भी आये शनि राजा॥

निज अवगुण गुनि शनि मन माहीं।बालक, देखन चाहत नाहीं॥

गिरिजा कछु मन भेद बढायो।उत्सव मोर, न शनि तुही भायो॥

कहत लगे शनि, मन सकुचाई।का करिहौ, शिशु मोहि दिखाई॥

नहिं विश्वास, उमा उर भयऊ।शनि सों बालक देखन कहयऊ॥

पदतहिं शनि दृग कोण प्रकाशा।बालक सिर उड़ि गयो अकाशा॥

गिरिजा गिरी विकल हवै धरणी।सो दुःख दशा गयो नहीं वरणी॥

हाहाकार मच्यौ कैलाशा।शनि कीन्हों लखि सुत को नाशा॥

तुरत गरुड़ चढ़ि विष्णु सिधायो।काटी चक्र सो गज सिर लाये॥

बालक के धड़ ऊपर धारयो।प्राण मन्त्र पढ़ि शंकर डारयो॥

नाम गणेश शम्भु तब कीन्हे।प्रथम पूज्य बुद्धि निधि, वर दीन्हे॥

बुद्धि परीक्षा जब शिव कीन्हा।पृथ्वी कर प्रदक्षिणा लीन्हा॥

चले षडानन, भरमि भुलाई।रचे बैठ तुम बुद्धि उपाई॥

चरण मातु-पितु के धर लीन्हें।तिनके सात प्रदक्षिण कीन्हें॥

धनि गणेश कही शिव हिये हरषे।नभ ते सुरन सुमन बहु बरसे॥

तुम्हरी महिमा बुद्धि बड़ाई।शेष सहसमुख सके न गाई॥

मैं मतिहीन मलीन दुखारी।करहूं कौन विधि विनय तुम्हारी॥

भजत रामसुन्दर प्रभुदासा।जग प्रयाग, ककरा, दुर्वासा॥

अब प्रभु दया दीना पर कीजै।अपनी शक्ति भक्ति कुछ दीजै॥

॥ दोहा ॥
श्री गणेश यह चालीसा,पाठ करै कर ध्यान।

नित नव मंगल गृह बसै,लहे जगत सन्मान॥

सम्बन्ध अपने सहस्र दश,ऋषि पंचमी दिनेश।

पूरण चालीसा भयो,मंगल मूर्ती गणेश॥`,
                english: `॥ Doha ॥
Jaya Ganapati Sadhguna Sadana,Kavi Vara Badana Kripaala।

Vighna Harana Mangala Karana,Jaya Jaya Girijaa Laala॥

॥ Chaupai ॥
Jaya Jaya Jaya Ganapati Gan Raaju।Mangala Bharana Karana Shubha Kaaju॥

Jaya Gajabadana Sadana Sukhadaataa।Vishva Vinaayaka Buddhi Vidhaata॥

Vakra Tunda Shuchi Shunda Suhaavana।Tilaka Tripunda Bhaala Mana Bhaavana॥

Raajata Mani Muktana Ura Maala।Svarna Mukuta Shira Nayana Vishaala॥

Pustaka Paani Kuthaara Trishoolam।Modaka Bhoga Sugandhita Phoolam॥

Sundara Pitaambara Tana Saajita।Charana Paaduka Muni Mana Raajita॥

Dhani Shiva Suvana Shadaanana Bhraata।Gauri Lalana Vishva-Vidhaata॥

Riddhi Siddhi Tava Chanvara Sudhaare।Mushaka Vaahana Sohata Dvaare॥

Kahaun Janma Shubha Kathaa Tumhaari।Ati Shuchi Paavana Mangala Kaari॥

Eka Samaya Giriraaj Kumaari।Putra Hetu Tapa Kinha Bhaari॥

Bhayo Yagya Jaba Poorna Anoopa।Taba Pahunchyo Tuma Dhari Dvija Roopa॥

Atithi Jaani Kai Gauri Sukhaari।Bahuvidhi Sevaa Kari Tumhaari॥

Ati Prasanna Hvai Tuma Vara Dinha।Maatu Putra Hita Jo Tapa Kinha॥

Milahi Putra Tuhi Buddhi Vishaala।Binaa Garbha Dhaarana Yahi Kaala॥

Gananaayaka, Guna Gyaana Nidhaana।Poojita Prathama Roopa Bhagavana॥

Asa Kahi Antardhyaana Roopa Hvai।Palana Para Baalaka Svaroopa Hvai॥

Bani Shishu Rudana Jabahi Tuma Thaana।Lakhi Mukha Sukha Nahin Gauri Samaan॥

Sakala Magana, Sukha Mangala Gaavahin।Nabha Te Surana Sumana Varshaavahin॥

Shambhu Uma, Bahu Dana Lutavahin।Sura Munijana, Suta Dekhana Aavahin॥

Lakhi Ati Aananda Mangala Saaja।Dekhana Bhi Aaye Shani Raaja॥

Nija Avaguna Guni Shani Mana Maahin।Baalaka, Dekhan Chaahata Naahin॥

Giraja Kachhu Mana Bheda Badhaayo।Utsava Mora Na Shani Tuhi Bhaayo॥

Kahana Lage Shani, Mana Sakuchaai।Kaa Karihau, Shishu Mohi Dikhaai॥

Nahin Vishvaasa, Uma Ur Bhayau।Shani So Baalaka Dekhana Kahyau॥

Padatahin, Shani Driga Kona Prakaasha।Baalaka Shira Udi Gayo Aakaasha॥

Giraja Girin Vikala Hvai Dharani।So Dukha Dasha Gayo Nahin Varani॥

Haahaakaara Machyo Kailaasha।Shani Kinhyon Lakhi Suta Ka Naasha॥

Turata Garuda Chadhi Vishnu Sidhaaye।Kaati Chakra So Gaja Shira Laaye॥

Baalaka Ke Dhada Upara Dhaarayo।Praana, Mantra Padha Shankara Darayo॥

Naama 'Ganesha' Shambhu Taba Kinhe।Prathama Poojya Buddhi Nidhi, Vara Dinhe॥

Buddhi Pariksha Jaba Shiva Kinha।Prithvi Kar Pradakshina Linha॥

Chale Shadaanana, Bharami Bhulaii।Rachi Baitha Tuma Buddhi Upaai॥

Charana Maatu-Pitu Ke Dhara Linhen।Tinake Saata Pradakshina Kinhen॥

Dhani Ganesha, Kahi Shiva Hiya Harashe।Nabha Te Surana Sumana Bahu Barase॥॥

Tumhari Mahima Buddhi Badaye।Shesha Sahasa Mukha Sakai Na Gaai॥

Mein Mati Hina Malina Dukhaari।Karahun Kauna Vidhi Vinaya Tumhaari॥

Bhajata 'Raamasundara' Prabhudaasa।Lakha Prayaga, Kakara, Durvasa॥

Aba Prabhu Daya Dina Para Kijai।Apani Bhakti Shakti Kuchhu Dijai॥

॥ Doha ॥
Shri Ganesh Yah Chalisa,Path Karai Dhari Dhyan।

Nit Nav Mangal Gruha Bashe,Lahi Jagat Sanman॥

Sambandh Apne Sahasra Dasha,Rushi Panchami Dinesh।

Puran Chalisa Bhayo,Mangal Murti Ganesha॥.`
            },
                {
                    id: "ganesh-3",
                    title: "श्री गणेश के 108 नाम",
                    hindi: `गजानन- ॐ गजाननाय नमः ।
गणाध्यक्ष- ॐ गणाध्यक्षाय नमः ।
विघ्नराज- ॐ विघ्नराजाय नमः ।
विनायक- ॐ विनायकाय नमः ।
द्वैमातुर- ॐ द्वैमातुराय नमः ।
द्विमुख- ॐ द्विमुखाय नमः ।
प्रमुख- ॐ प्रमुखाय नमः ।
सुमुख-ॐ सुमुखाय नमः ।
कृति- ॐ कृतिने नमः ।
सुप्रदीप- ॐ सुप्रदीपाय नमः ॥ 10 ॥

सुखनिधी- ॐ सुखनिधये नमः ।
सुराध्यक्ष- ॐ सुराध्यक्षाय नमः ।
सुरारिघ्न- ॐ सुरारिघ्नाय नमः ।
महागणपति- ॐ महागणपतये नमः ।
मान्या- ॐ मान्याय नमः ।
महाकाल- ॐ महाकालाय नमः ।
महाबला- ॐ महाबलाय नमः ।
हेरम्ब- ॐ हेरम्बाय नमः ।
लम्बजठर- ॐ लम्बजठरायै नमः ।
ह्रस्वग्रीव- ॐ ह्रस्व ग्रीवाय नमः ॥ 20 ॥

महोदरा- ॐ महोदराय नमः ।
मदोत्कट- ॐ मदोत्कटाय नमः ।
महावीर- ॐ महावीराय नमः ।
मन्त्रिणे- ॐ मन्त्रिणे नमः ।
मङ्गल स्वरा- ॐ मङ्गल स्वराय नमः ।
प्रमधा- ॐ प्रमधाय नमः ।
प्रथम- ॐ प्रथमाय नमः ।
प्रज्ञा- ॐ प्राज्ञाय नमः ।
विघ्नकर्ता- ॐ विघ्नकर्त्रे नमः ।
विघ्नहर्ता- ॐ विघ्नहर्त्रे नमः ॥ 30 ॥

विश्वनेत्र- ॐ विश्वनेत्रे नमः ।
विराट्पति- ॐ विराट्पतये नमः ।
श्रीपति- ॐ श्रीपतये नमः ।
वाक्पति- ॐ वाक्पतये नमः ।
शृङ्गारिण- ॐ शृङ्गारिणे नमः ।
अश्रितवत्सल- ॐ अश्रितवत्सलाय नमः ।
शिवप्रिय- ॐ शिवप्रियाय नमः ।
शीघ्रकारिण- ॐ शीघ्रकारिणे नमः ।
शाश्वत - ॐ शाश्वताय नमः ।
बल- ॐ बल नमः ॥ 40 ॥

बलोत्थिताय- ॐ बलोत्थिताय नमः ।
भवात्मजाय- ॐ भवात्मजाय नमः ।
पुराण पुरुष- ॐ पुराण पुरुषाय नमः ।
पूष्णे- ॐ पूष्णे नमः ।
पुष्करोत्षिप्त वारिणे- ॐ पुष्करोत्षिप्त वारिणे नमः ।
अग्रगण्याय- ॐ अग्रगण्याय नमः ।
अग्रपूज्याय- ॐ अग्रपूज्याय नमः ।
अग्रगामिने- ॐ अग्रगामिने नमः ।
मन्त्रकृते- ॐ मन्त्रकृते नमः ।
चामीकरप्रभाय- ॐ चामीकरप्रभाय नमः ॥ 50 ॥

सर्वाय- ॐ सर्वाय नमः ।
सर्वोपास्याय- ॐ सर्वोपास्याय नमः ।
सर्व कर्त्रे- ॐ सर्व कर्त्रे नमः ।
सर्वनेत्रे- ॐ सर्वनेत्रे नमः ।
सर्वसिद्धिप्रदाय- ॐ सर्वसिद्धिप्रदाय नमः ।
सिद्धये- ॐ सिद्धये नमः ।
पञ्चहस्ताय- ॐ पञ्चहस्ताय नमः ।
पार्वतीनन्दनाय- ॐ पार्वतीनन्दनाय नमः ।
प्रभवे- ॐ प्रभवे नमः ।
कुमारगुरवे- ॐ कुमारगुरवे नमः ॥ 60 ॥

अक्षोभ्याय- ॐ अक्षोभ्याय नमः ।
कुञ्जरासुर भञ्जनाय- ॐ कुञ्जरासुर भञ्जनाय नमः ।
प्रमोदाय- ॐ प्रमोदाय नमः ।
मोदकप्रियाय- ॐ मोदकप्रियाय नमः ।
कान्तिमते- ॐ कान्तिमते नमः ।
धृतिमते- ॐ धृतिमते नमः ।
कामिने- ॐ कामिने नमः ।
कपित्थपनसप्रियाय- ॐ कपित्थपनसप्रियाय नमः ।
ब्रह्मचारिणे- ॐ ब्रह्मचारिणे नमः ।
ब्रह्मरूपिणे- ॐ ब्रह्मरूपिणे नमः ॥ 70 ॥

ब्रह्मविद्यादि दानभुवे- ॐ ब्रह्मविद्यादि दानभुवे नमः ।
जिष्णवे- ॐ जिष्णवे नमः ।
विष्णुप्रियाय- ॐ विष्णुप्रियाय नमः ।
भक्त जीविताय- ॐ भक्त जीविताय नमः ।
जितमन्मधाय- ॐ जितमन्मधाय नमः ।
ऐश्वर्यकारणाय- ॐ ऐश्वर्यकारणाय नमः ।
ज्यायसे- ॐ ज्यायसे नमः ।
यक्षकिन्नेर सेविताय- ॐ यक्षकिन्नेर सेविताय नमः।
गङ्गा सुताय- ॐ गङ्गा सुताय नमः ।
गणाधीशाय- ॐ गणाधीशाय नमः ॥ 80 ॥

गम्भीर निनदाय- ॐ गम्भीर निनदाय नमः ।
वटवे- ॐ वटवे नमः ।
अभीष्टवरदाय- ॐ अभीष्टवरदाय नमः ।
ज्योतिषे- ॐ ज्योतिषे नमः ।
भक्तनिधये- ॐ भक्तनिधये नमः ।
भावगम्याय- ॐ भावगम्याय नमः ।
मङ्गलप्रदाय- ॐ मङ्गलप्रदाय नमः ।
अव्यक्ताय- ॐ अव्यक्ताय नमः ।
अप्राकृत पराक्रमाय- ॐ अप्राकृत पराक्रमाय नमः ।
सत्यधर्मिणे- ॐ सत्यधर्मिणे नमः ॥ 90 ॥

सखये- ॐ सखये नमः ।
सरसाम्बुनिधये- ॐ सरसाम्बुनिधये नमः ।
महेशाय- ॐ महेशाय नमः ।
दिव्याङ्गाय- ॐ दिव्याङ्गाय नमः ।
मणिकिङ्किणी मेखालाय- ॐ मणिकिङ्किणी मेखालाय नमः ।
समस्त देवता मूर्तये- ॐ समस्त देवता मूर्तये नमः ।
सहिष्णवे- ॐ सहिष्णवे नमः ।
सततोत्थिताय- ॐ सततोत्थिताय नमः ।
विघातकारिणे- ॐ विघातकारिणे नमः ।
विश्वग्दृशे- ॐ विश्वग्दृशे नमः ॥ 100 ॥

विश्वरक्षाकृते- ॐ विश्वरक्षाकृते नमः ।
कल्याणगुरवे- ॐ कल्याणगुरवे नमः ।
उन्मत्तवेषाय- ॐ उन्मत्तवेषाय नमः ।
अपराजिते- ॐ अपराजिते नमः ।
समस्त जगदाधाराय- ॐ समस्त जगदाधाराय नमः ।
सर्वैश्वर्यप्रदाय- ॐ सर्वैश्वर्यप्रदाय नमः ।
आक्रान्त चिद चित्प्रभवे- ॐ आक्रान्त चिद चित्प्रभवे नमः ।
श्री विघ्नेश्वराय- ॐ श्री विघ्नेश्वराय नमः ॥ 108 ॥

॥ इति श्रीगणेशाष्टोत्तरशतनामावलिः सम्पूर्णा ॥
`,
                english: `1) Gajanana- Om Gajananaya Namah।
2) Ganadhyaksha- Om Ganadhyakshaya Namah।
3) Vighnaraja- Om Vighnarajaya Namah।
4) Vinayaka- Om Vinayakaya Namah।
5) Dvaimatura- Om Dvaimaturaya Namah।
6) Dwimukha- Om Dwimukhaya Namah।
7) Pramukha- Om Pramukhaya Namah।
8) Sumukha- Om Sumukhaya Namah।
9) Kriti- Om Kritine Namah।
10) Supradipa- Om Supradipaya Namah।
11) Sukhanidhi- Om Sukhanidhaye Namah।
12) Suradhyaksha- Om Suradhyakshaya Namah।
13) Surarighna- Om Surarighnaya Namah।
14) Mahaganapati- Om Mahaganapataye Namah।
15) Manya- Om Manyaya Namah।
16) Mahakala- Om Mahakalaya Namah।
17) Mahabala- Om Mahabalaya Namah।
18) Heramba- Om Herambaya Namah।
19) Lambajathara- Om Lambajatharayai Namah।
20) Haswagriva- Om Haswa Grivaya Namah।
21) Mahodara- Om Mahodaraya Namah।
22) Madotkata- Om Madotkataya Namah।
23) Mahavira- Om Mahaviraya Namah।
24) Mantrine- Om Mantrine Namah।
25) Mangala Swara- Om Mangala Swaraya Namah।
26) Pramadha- Om Pramadhaya Namah।
27) Prathama- Om Prathamaya Namah।
28) Prajna- Om Prajnaya Namah।
29) Vighnakarta- Om Vighnakartre Namah।
30) Vignaharta- Om Vignahartre Namah।
31) Vishwanetra- Om Vishwanetre Namah।
32) Viratpati- Om Viratpataye Namah।
33) Shripati- Om Shripataye Namah।
34) Vakpati- Om Vakpataye Namah।
35) Shringarin- Om Shringarine Namah।
36) Ashritavatsala- Om Ashritavatsalaya Namah।
37) Shivapriya- Om Shivapriyaya Namah।
38) Shighrakarina- Om Shighrakarine Namah।
39) Shashwata- Om Shashwataya Namah।
40) Bal- Om Bala Namah।
41) Balotthitaya- Om Balotthitaya Namah।
42) Bhavatmajaya- Om Bhavatmajaya Namah।
43) Purana Purusha- Om Purana Purushaya Namah।
44) Pushne- Om Pushne Namah।
45) Pushkarotshipta Varine- Om Pushkarotshipta Varine Namah।
46) Agraganyaya- Om Agraganyaya Namah।
47) Agrapujyaya- Om Agrapujyaya Namah।
48) Agragamine- Om Agragamine Namah।
49) Mantrakrite- Om Mantrakrite Namah।
50) Chamikaraprabhaya- Om Chamikaraprabhaya Namah।
51) Sarvaya- Om Sarvaya Namah।
52) Sarvopasyaya- Om Sarvopasyaya Namah।
53) Sarvakartre- Om Sarva Kartre Namah।
54) Sarvanetre- Om Sarvanetre Namah।
55) Sarvasiddhipradaya- Om Sarvasiddhipradaya Namah।
56) Siddhaye- Om Siddhaye Namah।
57) Panchahastaya- Om Panchahastaya Namah।
58) Parvatinadanaya- Om Parvatinandanaya Namah।
59) Prabhave- Om Prabhave Namah।
60) Kumaragurave- Om Kumaragurave Namah।
61) Akshobhyaya- Om Akshobhyaya Namah।
62) Kunjarasura Bhanjanaya- Om Kunjarasura Bhanjanaya Namah।
63) Pramodaya- Om Pramodaya Namah।
64) Modakapriyaya- Om Modakapriyaya Namah।
65) Kantimate- Om Kantimate Namah।
66) Dhritimate- Om Dhritimate Namah।
67) Kamine- Om Kamine Namah।
68) Kapitthapanasapriyaya- Om Kapitthapanasapriyaya Namah।
69) Brahmacharine- Om Brahmacharine Namah।
70) Brahmarupine- Om Brahmarupine Namah।
71) Brahmavidyadi Danabhuve- Om Brahmavidyadi Danabhuve Namah।
72) Jishnave- Om Jishnave Namah।
73) Vishnupriyaya- Om Vishnupriyaya Namah।
74) Bhakta Jivitaya- Om Bhakta Jivitaya Namah।
75) Jitamanmadhaya- Om Jitamanmadhaya Namah।
76) Aishwaryakaranaya- Om Aishwaryakaranaya Namah।
77) Jyayase- Om Jyayase Namah।
78) Yaksha Kinnerasevitaya- Om Yaksha Kinnerasevitaya Namah।
79) Ganga Sutaya- Om Ganga Sutaya Namah।
80) Ganadhishaya- Om Ganadhishaya Namah।
81) Gambhira Ninadaya- Om Gambhira Ninadaya Namah।
82) Vatave- Om Vatave Namah।
83) Jyotishe Abhishtavaradaya- Om Abhishtavaradaya Namah।
84) Om Jyotishe Namah।
85) Bhktanidhaye- Om Bhktanidhaye Namah।
86) Bhavagamyaya- Om Bhavagamyaya Namah।
87) Mangalapradaya- Om Mangalapradaya Namah।
88) Avyaktaya- Om Avyaktaya Namah।
89) Aprakrita Parakramaya- Om Aprakrita Parakramaya Namah।
90) Satyadharmine- Om Satyadharmine Namah।
91) Sakhaye- Om Sakhaye Namah।
92) Sarasambunidhaye- Om Sarasambunidhaye Namah।
93) Maheshaya- Om Maheshaya Namah।
94) Divyangaya- Om Divyangaya Namah।
95) Manikinkini Mekhalaya- Om Manikinkini Mekhalaya Namah।
96) Samasta Devata Murtaye- Om Samasta Devata Murtaye Namah।
97) Sahishnave- Om Sahishnave Namah।
98) Satatotthitaya- Om Satatotthitaya Namah।
99) Vighatakarine- Om Vighatakarine Namah।
100) Vishwagdrishe- Om Vishwagdrishe Namah।
101) Vishwarakshakrite- Om Vishwarakshakrite Namah।
102) Kalyanagurave- Om Kalyanagurave Namah।
103) Unmattaveshaya- Om Unmattaveshaya Namah।
104) Aparajite- Om Aparajite Namah।
105) Samsta Jagadadharaya- Om Samsta Jagadadharaya Namah।
106) Sarwaishwaryapradaya- Om Sarwaishwaryapradaya Namah।
107) Akranta Chida Chitprabhave- Om Akranta Chida Chitprabhave Namah।
108) Shri Vighneshwaraya- Om Shri Vighneshwaraya Namah।

॥ Eti Shriganeshashtottar Shatnamavalih Sampoorna ॥
`
           }
        ]
    },
    {
        id: "lakshmi",
        name: "Goddess Lakshmi",
        image: "images/lakshmi.jpg",
        aartis: [
            {
                id: "lakshmi-1",
                title: "ॐ जय लक्ष्मी माता",
                hindi: `ॐ जय लक्ष्मी माता, मैया जय लक्ष्मी माता।
तुमको निशदिन सेवत, हरि विष्णु विधाता॥
ॐ जय लक्ष्मी माता॥

उमा, रमा, ब्रह्माणी, तुम ही जग-माता।
सूर्य-चंद्रमा ध्यावत, नारद ऋषि गाता॥
ॐ जय लक्ष्मी माता॥

दुर्गा रूप निरंजनी, सुख संपत्ति दाता।
जो कोई तुमको ध्यावत, ऋद्धि-सिद्धि धन पाता॥
ॐ जय लक्ष्मी माता॥

तुम पाताल-निवासिनी, तुम ही शुभदाता।
कर्म-प्रभाव-प्रकाशिनी, भवनिधि की त्राता॥
ॐ जय लक्ष्मी माता॥

जिस घर में तुम रहतीं, सब सद्गुण आता।महालक्ष्मी नमस्तुभ्यं,
नमस्तुभ्यं सुरेश्वरि ।
हरि प्रिये नमस्तुभ्यं,
नमस्तुभ्यं दयानिधे ॥

पद्मालये नमस्तुभ्यं,
नमस्तुभ्यं च सर्वदे ।
सर्वभूत हितार्थाय,
वसु सृष्टिं सदा कुरुं ॥

ॐ जय लक्ष्मी माता,
मैया जय लक्ष्मी माता ।
तुमको निसदिन सेवत,
हर विष्णु विधाता ॥

उमा, रमा, ब्रम्हाणी,
तुम ही जग माता ।
सूर्य चद्रंमा ध्यावत,
नारद ऋषि गाता ॥
॥ॐ जय लक्ष्मी माता...॥

दुर्गा रुप निरंजनि,
सुख-संपत्ति दाता ।
जो कोई तुमको ध्याता,
ऋद्धि-सिद्धि धन पाता ॥
॥ॐ जय लक्ष्मी माता...॥

तुम ही पाताल निवासनी,
तुम ही शुभदाता ।
कर्म-प्रभाव-प्रकाशनी,
भव निधि की त्राता ॥
॥ॐ जय लक्ष्मी माता...॥

जिस घर तुम रहती हो,
ताँहि में हैं सद्‍गुण आता ।
सब सभंव हो जाता,
मन नहीं घबराता ॥
॥ॐ जय लक्ष्मी माता...॥

तुम बिन यज्ञ ना होता,
वस्त्र न कोई पाता ।
खान पान का वैभव,
सब तुमसे आता ॥
॥ॐ जय लक्ष्मी माता...॥

शुभ गुण मंदिर सुंदर,
क्षीरोदधि जाता ।
रत्न चतुर्दश तुम बिन,
कोई नहीं पाता ॥
॥ॐ जय लक्ष्मी माता...॥

महालक्ष्मी जी की आरती,
जो कोई नर गाता ।
उँर आंनद समाता,
पाप उतर जाता ॥
॥ॐ जय लक्ष्मी माता...॥

ॐ जय लक्ष्मी माता,
मैया जय लक्ष्मी माता ।
तुमको निसदिन सेवत,
हर विष्णु विधाता ॥`,
                english: `Mahalakshmi Namastubhyam,
Namastubhyam Sureshvari ।
Hari Priye Namastubhyam,
Namastubhyam Dayanidhe ॥

Padmalaye Namastubhyam,
Namastubhyam Cha Sarvade ।
Sarvbhoot Hitarthay,
Vasu Srashtin Sada Kurum ॥

Om Jai Lakshmi Mata,
Maiya Jai Lakshmi Mata ।
Tumako Nishidin Sevat,
Hari Vishnu Vidhata ॥

Uma Rama Brahmani,
Tum Hi Jag-Mata ।
Surya Chandrama Dhyavat,
Narad Rishi Gata ॥
॥Om Jai Lakshmi Mata...॥

Durga Roop Niranjani,
Sukh Sampatti Data ।
Jo Koi Tumako Dhyavat,
Riddhi-Siddhi Dhan Pata ॥
॥Om Jai Lakshmi Mata...॥

Tum Patal-Nivasini,
Tum Hi Shubhdata ।
Karma-Prabhav-Prakashini,
Bhavanidhi Ki Trata ॥
॥Om Jai Lakshmi Mata...॥

Jis Ghar Mein Tum Rahti,
Sab Sadgun Aata ।
Sab Sambhav Ho Jata,
Man Nahi Ghabrata ॥
॥Om Jai Lakshmi Mata...॥

Tum Bin Yagya Na Hote,
Vastra Na Koi Pata ।
Khan-Pan Ka Vaibhav,
Sab Tumase Aata ॥
॥Om Jai Lakshmi Mata...॥

Shubh-Gun Mandir Sundar,
Kshirodadhi Jata ।
Ratna Chaturdash Tum Bin,
Koi Nahi Pata ॥
॥Om Jai Lakshmi Mata...॥

Mahalakshmi Ji Ki Aarti,
Jo Koi Jan Gata ।
Ur Anand Samata,
Paap Utar Jata ॥
॥Om Jai Lakshmi Mata...॥

Om Jai Lakshmi Mata,
Maiya Jai Lakshmi Mata ।
Tumako Nishidin Sevat,
Hari Vishnu Vidhata ॥
`,
                videoLink: "https://www.youtube.com/watch?v=SyqgAt-T0iQ"
            },
            {
                id: "lakshmi-2",
                title: "श्री लक्ष्मी के 108 नाम",
                hindi: `ॐ प्रकृत्यै नमः ॥
ॐ विकृत्यै नमः ॥
ॐ विद्यायै नमः ॥
ॐ सर्वभूतहितप्रदायै नमः ॥
ॐ श्रद्धायै नमः ॥
ॐ विभूत्यै नमः ॥
ॐ सुरभ्यै नमः ॥
ॐ परमात्मिकायै नमः ॥
ॐ वाचे नमः ॥
ॐ पद्मालयायै नमः ॥ 10 ॥
ॐ पद्मायै नमः ॥
ॐ शुचये नमः ॥
ॐ स्वाहायै नमः ॥
ॐ स्वधायै नमः ॥
ॐ सुधायै नमः ॥
ॐ धन्यायै नमः ॥
ॐ हिरण्मय्यै नमः ॥
ॐ लक्ष्म्यै नमः ॥
ॐ नित्यपुष्टायै नमः ॥
ॐ विभावर्यै नमः ॥ 20 ॥

ॐ अदित्यै नमः ॥
ॐ दित्ये नमः ॥
ॐ दीपायै नमः ॥
ॐ वसुधायै नमः ॥
ॐ वसुधारिण्यै नमः ॥
ॐ कमलायै नमः ॥
ॐ कान्तायै नमः ॥
ॐ कामाक्ष्यै नमः ॥
ॐ क्ष्रीरोधसंभवाम् नमः ॥
ॐ क्रोधसंभवायै नमः ॥ 30 ॥

ॐ अनुग्रहप्रदायै नमः ॥
ॐ बुद्धये नमः ॥
ॐ अनघायै नमः ॥
ॐ हरिवल्लभायै नमः ॥
ॐ अशोकायै नमः ॥
ॐ अमृतायै नमः ॥
ॐ दीप्तायै नमः ॥
ॐ लोकशोकविनाशिन्यै नमः ॥
ॐ धर्मनिलयायै नमः ॥
ॐ करुणायै नमः ॥ 40 ॥

ॐ लोकमात्रे नमः ॥
ॐ पद्मप्रियायै नमः ॥
ॐ पद्महस्तायै नमः ॥
ॐ पद्माक्ष्यै नमः ॥
ॐ पद्मसुन्दर्यै नमः ॥
ॐ पद्मोद्भवायै नमः ॥
ॐ पद्ममुख्यै नमः ॥
ॐ पद्मनाभप्रियायै नमः ॥
ॐ रमायै नमः ॥
ॐ पद्ममालाधरायै नमः ॥ 50 ॥

ॐ देव्यै नमः ॥
ॐ पद्मिन्यै नमः ॥
ॐ पद्मगन्धिन्यै नमः ॥
ॐ पुण्यगन्धायै नमः ॥
ॐ सुप्रसन्नायै नमः ॥
ॐ प्रसादाभिमुख्यै नमः ॥
ॐ प्रभायै नमः ॥
ॐ चन्द्रवदनायै नमः ॥
ॐ चन्द्रायै नमः ॥
ॐ चन्द्रसहोदर्यै नमः ॥ 60 ॥

ॐ चतुर्भुजायै नमः ॥
ॐ चन्द्ररूपायै नमः ॥
ॐ इन्दिरायै नमः ॥
ॐ इन्दुशीतलायै नमः ॥
ॐ आह्लादजनन्यै नमः ॥
ॐ पुष्टयै नमः ॥
ॐ शिवायै नमः ॥
ॐ शिवकर्यै नमः ॥
ॐ सत्यै नमः ॥
ॐ विमलायै नमः ॥ 70 ॥

ॐ विश्वजनन्यै नमः ॥
ॐ तुष्टयै नमः ॥
ॐ दारिद्र्यनाशिन्यै नमः ॥
ॐ प्रीतिपुष्करिण्यै नमः ॥
ॐ शान्तायै नमः ॥
ॐ शुक्लमाल्यांबरायै नमः ॥
ॐ श्रियै नमः ॥
ॐ भास्कर्यै नमः ॥
ॐ बिल्वनिलयायै नमः ॥
ॐ वरारोहायै नमः ॥ 80 ॥

ॐ यशस्विन्यै नमः ॥
ॐ वसुन्धरायै नमः ॥
ॐ उदारांगायै नमः ॥
ॐ हरिण्यै नमः ॥
ॐ हेममालिन्यै नमः ॥
ॐ धनधान्यकर्ये नमः ॥
ॐ सिद्धये नमः ॥
ॐ स्त्रैणसौम्यायै नमः ॥
ॐ शुभप्रदाये नमः ॥
ॐ नृपवेश्मगतानन्दायै नमः ॥ 90 ॥

ॐ वरलक्ष्म्यै नमः ॥
ॐ वसुप्रदायै नमः ॥
ॐ शुभायै नमः ॥
ॐ हिरण्यप्राकारायै नमः ॥
ॐ समुद्रतनयायै नमः ॥
ॐ जयायै नमः ॥
ॐ मंगळा देव्यै नमः ॥
ॐ विष्णुवक्षस्स्थलस्थितायै नमः ॥
ॐ विष्णुपत्न्यै नमः ॥
ॐ प्रसन्नाक्ष्यै नमः ॥ 100 ॥

ॐ नारायणसमाश्रितायै नमः ॥
ॐ दारिद्र्यध्वंसिन्यै नमः ॥
ॐ देव्यै नमः ॥
ॐ सर्वोपद्रव वारिण्यै नमः ॥
ॐ नवदुर्गायै नमः ॥
ॐ महाकाल्यै नमः ॥
ॐ ब्रह्माविष्णुशिवात्मिकायै नमः ॥
ॐ त्रिकालज्ञानसंपन्नायै नमः ॥ 108 ॥
ॐ भुवनेश्वर्यै नमः ॥ 109 ॥

॥ इति श्रीलक्ष्मीष्टोत्तरशतनामावलिः सम्पूर्णा ॥
`,
                english: `ॐ Vikrityai Namah ॥
ॐ Prakrityai Namah ॥
ॐ Vidyayai Namah ॥
ॐ Sarvabhutahitapradayai Namah ॥
ॐ Shraddhayai Namah ॥
ॐ Vibhutyai Namah ॥
ॐ Surabhyai Namah ॥
ॐ Paramatmikayai Namah ॥
ॐ Vache Namah ॥
ॐ Padmalayayai Namah ॥ 10 ॥
ॐ Swadhayai Namah ॥
ॐ Padmayai Namah ॥
ॐ Shuchaye Namah ॥
ॐ Swahayai Namah ॥
ॐ Sudhayai Namah ॥
ॐ Dhanyayai Namah ॥
ॐ Hiranmayyai Namah ॥
ॐ Lakshmyai Namah ॥
ॐ NityaPushtayai Namah ॥
ॐ Vibhavaryai Namah ॥ 20 ॥

ॐ Adityai Namah ॥
ॐ Dityai Namah ॥
ॐ Dipayai Namah ॥
ॐ Vasudhayai Namah ॥
ॐ Vasudharinyai Namah ॥
ॐ Kamalayai Namah ॥
ॐ Kantayai Namah ॥
ॐ Kamakshyai Namah ॥
ॐ Kshirodhasambhavam Namah ॥
ॐ Krodhasambhavayai Namah ॥ 30 ॥

ॐ Anugrahapradayai Namah ॥
ॐ Buddhaye Namah ॥
ॐ Anaghayai Namah ॥
ॐ Harivallabhyai Namah ॥
ॐ Ashokayai Namah ॥
ॐ Amritayai Namah ॥
ॐ Diptayai Namah ॥
ॐ Lokashokavinashinyai Namah ॥
ॐ Dharmanilayayai Namah ॥
ॐ Karunayai Namah ॥ 40 ॥

ॐ Lokamatre Namah ॥
ॐ Padmapriyayai Namah ॥
ॐ Padmahastayai Namah ॥
ॐ Padmakshyai Namah ॥
ॐ Padmasundaryai Namah ॥
ॐ Padmodbhavayai Namah ॥
ॐ Padmamukhyai Namah ॥
ॐ Padmanabhapriyayai Namah ॥
ॐ Ramayai Namah ॥
ॐ Padmamaladharayai Namah ॥ 50 ॥

ॐ Devyai Namah ॥
ॐ Padminyai Namah ॥
ॐ Padmagandhinyai Namah ॥
ॐ Punyagandhayai Namah ॥
ॐ Suprasannayai Namah ॥
ॐ Prasadabhimukhyai Namah ॥
ॐ Prabhayai Namah ॥
ॐ Chandravadanayai Namah ॥
ॐ Chandrayai Namah ॥
ॐ Chandrasahodaryai Namah ॥ 60 ॥

ॐ Chaturbhujayai Namah ॥
ॐ Chandrarupayai Namah ॥
ॐ Indirayai Namah ॥
ॐ Indushitalayai Namah ॥
ॐ Ahladajananyai Namah ॥
ॐ Pushtayai Namah ॥
ॐ Shivayai Namah ॥
ॐ Shivakaryai Namah ॥
ॐ Satyai Namah ॥
ॐ Vimalayai Namah ॥ 70 ॥

ॐ Vishwajananyai Namah ॥
ॐ Tushtayai Namah ॥
ॐ Daridryanashinyai Namah ॥
ॐ Pritipushkarinyai Namah ॥
ॐ Shantayai Namah ॥
ॐ Shuklamalyambarayai Namah ॥
ॐ Shriyai Namah ॥
ॐ Bhaskaryai Namah ॥
ॐ Bilvanilayayai Namah ॥
ॐ Vararohayai Namah ॥ 80 ॥

ॐ Yashaswinyai Namah ॥
ॐ Vasundharayai Namah ॥
ॐ Udarangayai Namah ॥
ॐ Harinyai Namah ॥
ॐ Hemamalinyai Namah ॥
ॐ Dhanadhanyakaryai Namah ॥
ॐ Siddhaye Namah ॥
ॐ Strainasoumyayai Namah ॥
ॐ Shubhapradayai Namah ॥
ॐ Nripaveshmagatanandayai Namah ॥ 90 ॥

ॐ Varalakshmyai Namah ॥
ॐ Vasupradayai Namah ॥
ॐ Shubhayai Namah ॥
ॐ Hiranyaprakarayai Namah ॥
ॐ Samudratanayayai Namah ॥
ॐ Jayayai Namah ॥
ॐ Mangala Devyai Namah ॥
ॐ Vishnuvakshassthalasthitayai Namah ॥
ॐ Vishnupatnyai Namah ॥
ॐ Prasannakshyai Namah ॥ 100 ॥

ॐ Narayanasamashritayai Namah ॥
ॐ Daridryadhwamsinyai Namah ॥
ॐ Devyai Namah ॥
ॐ Sarvopadrava Varinyai Namah ॥
ॐ Navadurgayai Namah ॥
ॐ Mahakalyai Namah ॥
ॐ Brahmavishnushivatmikayai Namah ॥
ॐ Trikalajnanasampannayai Namah ॥ 108 ॥
ॐ Bhuvaneshwaryai Namah ॥ 109 ॥
`
            }
        ]
    },
    {
        id: "krishna",
        name: "Lord Krishna",
        image: "images/krishna.jpg",
        aartis: [
            {
                id: "krishna-1",
                title: "आरती कुंजबिहारी की",
                hindi: `आरती कुंजबिहारी की,
श्री गिरिधर कृष्ण मुरारी की ॥
आरती कुंजबिहारी की,
श्री गिरिधर कृष्ण मुरारी की ॥
गले में बैजंती माला,
बजावै मुरली मधुर बाला ।
श्रवण में कुण्डल झलकाला,
नंद के आनंद नंदलाला ।
गगन सम अंग कांति काली,
राधिका चमक रही आली ।
लतन में ठाढ़े बनमाली
भ्रमर सी अलक,
कस्तूरी तिलक,
चंद्र सी झलक,
ललित छवि श्यामा प्यारी की,
श्री गिरिधर कृष्ण मुरारी की ॥

आरती कुंजबिहारी की,
श्री गिरिधर कृष्ण मुरारी की ॥

कनकमय मोर मुकुट बिलसै,
देवता दरसन को तरसैं ।
गगन सों सुमन रासि बरसै ।
बजे मुरचंग,
मधुर मिरदंग,
ग्वालिन संग,
अतुल रति गोप कुमारी की,
श्री गिरिधर कृष्णमुरारी की ॥

आरती कुंजबिहारी की,
श्री गिरिधर कृष्ण मुरारी की ॥

जहां ते प्रकट भई गंगा,
सकल मन हारिणि श्री गंगा ।
स्मरन ते होत मोह भंगा
बसी शिव सीस,
जटा के बीच,
हरै अघ कीच,
चरन छवि श्रीबनवारी की,
श्री गिरिधर कृष्णमुरारी की ॥

आरती कुंजबिहारी की,
श्री गिरिधर कृष्ण मुरारी की ॥

चमकती उज्ज्वल तट रेनू,
बज रही वृंदावन बेनू ।
चहुं दिसि गोपि ग्वाल धेनू
हंसत मृदु मंद,
चांदनी चंद,
कटत भव फंद,
टेर सुन दीन दुखारी की,
श्री गिरिधर कृष्णमुरारी की ॥

आरती कुंजबिहारी की,
श्री गिरिधर कृष्ण मुरारी की ॥

आरती कुंजबिहारी की,
श्री गिरिधर कृष्ण मुरारी की ॥
आरती कुंजबिहारी की,
श्री गिरिधर कृष्ण मुरारी की ॥
`,
                english: `Aarti Kunj Bihari Ki,
Shri Girdhar Krishna Murari Ki ॥
Aarti Kunj Bihari Ki,
Shri Girdhar Krishna Murari Ki ॥
Gale Mein Baijanti Mala,
Bajave Murali Madhur Bala ।
Shravan Mein Kundal Jhalakala,
Nand Ke Anand Nandlala ।
Gagan Sam Ang Kanti Kali,
Radhika Chamak Rahi Aali ।
Latan Mein Thadhe Banamali
Bhramar Si Alak,
Kasturi Tilak,
Chandra Si Jhalak,
Lalit Chavi Shyama Pyari Ki,
Shri Girdhar Krishna Murari Ki ॥

Aarti Kunj Bihari Ki,
Shri Girdhar Krishna Murari Ki ॥

Kanakmay Mor Mukut Bilse,
Devata Darsan Ko Tarse ।
Gagan So Suman Raasi Barse
Baje Murchang,
Madhur Mridang,
Gwaalin Sang
Atual Rati Gop Kumari Ki,
Shri Girdhar Krishna Murari Ki ॥

Aarti Kunj Bihari Ki,
Shri Girdhar Krishna Murari Ki ॥

Jahaan Te Pragat Bhayi Ganga,
Sakal Man Haarini Shri Ganga ।
Smaran Te Hot Moh Bhanga
Basi Shiv Shish,
Jataa Ke Beech,
Harei Agh Keech,
Charan Chhavi Shri Banvaari Ki,
Shri Girdhar Krishna Murari Ki ॥

Aarti Kunj Bihari Ki,
Shri Girdhar Krishna Murari Ki ॥

Chamakati Ujjawal Tat Renu,
Baj Rahi Vrindavan Benu।
Chahu Disi Gopi Gwaal Dhenu
Hansat Mridu Mand,
Chandani Chandra,
Katat Bhav Phand,
Ter Sun Deen Dukhari Ki,
Shri Girdhar Krishna Murari Ki ॥

Aarti Kunj Bihari Ki,
Shri Girdhar Krishna Murari Ki ॥

Aarti Kunj Bihari Ki,
Shri Girdhar Krishna Murari Ki ॥
Aarti Kunj Bihari Ki,
Shri Girdhar Krishna Murari Ki ॥`,
                videoLink: "https://www.youtube.com/watch?v=FEMR5alT7CY"
        },
            {
                id: "krishna-2",
                title: "छोटी छोटी गैया, छोटे छोटे ग्वाल",
                hindi: `छोटी छोटी गैया, छोटे छोटे ग्वाल ।
छोटो सो मेरो मदन गोपाल ॥
छोटी छोटी गैया, छोटे छोटे ग्वाल ।
छोटो सो मेरो मदन गोपाल ॥
Read More
आगे आगे गैया पीछे पीछे ग्वाल ।
बीच में मेरो मदन गोपाल ॥

छोटी छोटी गैया, छोटे छोटे ग्वाल ।
छोटो सो मेरो मदन गोपाल ॥

कारी कारी गैया, गोरे गोरे ग्वाल।
श्याम वरण मेरो मदन गोपाल॥

छोटी छोटी गैया, छोटे छोटे ग्वाल ।
छोटो सो मेरो मदन गोपाल ॥

घास खाए गैया, दूध पीवे ग्वाल ।
माखन खावे मेरो मदन गोपाल ॥

छोटी छोटी गैया, छोटे छोटे ग्वाल ।
छोटो सो मेरो मदन गोपाल ॥

छोटी छोटी लकुटी, छोले छोटे हाथ ।
बंसी बजावे मेरो मदन गोपाल ॥

छोटी छोटी गैया, छोटे छोटे ग्वाल ।
छोटो सो मेरो मदन गोपाल ॥

छोटी छोटी सखियाँ, मधुबन बाग ।
रास राचावे मेरो मदन गोपाल ॥

छोटी छोटी गैया, छोटे छोटे ग्वाल ।
छोटो सो मेरो मदन गोपाल ॥
छोटी छोटी गैया, छोटे छोटे ग्वाल ।
छोटो सो मेरो मदन गोपाल ॥
`,
                english: `Choti Choti Gaiya, Chote Chote Gwal ।
Choto so Mero Madan Gopal ॥
॥ Choti Choti Gaiya… ॥
Aage Aage Gaiya Pichhe Pichhe Gwal ।
Bich Mein Mero Madan Gopal ॥
॥ Choti Choti Gaiya… ॥

Kaari Kaari Gaiya, Gore Gore Gwal ।
Shyam Varan Mero Madan Gopal ॥
॥ Choti Choti Gaiya… ॥

Ghaas Khaye Gaiya, Doodh Pive Gwal ।
Makhan Khave Mero Madan Gopal ॥
॥ Choti Choti Gaiya… ॥

Choti Choti Lakuti, Chhole Chhote Hath ।
Bansi Bajave Mero Madan Gopal ॥
॥ Choti Choti Gaiya… ॥

Choti Choti Sakhiyan, Madhuban Baag ।
Raas Rachave Mero Madan Gopal ॥
॥ Choti Choti Gaiya… ॥

Choti Choti Gaiya, Chote Chote Gwal ।
Choto so Mero Madan Gopal ॥`,
                videoLink: "https://www.youtube.com/watch?v=XzqJUoSDHZU"
            }
        ]
    },
    {
        id: "shiva",
        name: "Lord Shiva",
        image: "images/shiva.jpg",
        aartis: [
            {
                id: "shiva-1", 
                title: "ॐ जय शिव ओंकारा",
                hindi: `ॐ जय शिव ओंकारा, स्वामी जय शिव ओंकारा।
ब्रह्मा, विष्णु, सदाशिव, अर्द्धांगी धारा॥
ॐ जय शिव ओंकारा॥

एकानन, चतुरानन, पंचानन राजे।
हंसासन, गरुड़ासन, वृषवाहन साजे॥
ॐ जय शिव ओंकारा॥

दो भुज, चार चतुर्भुज, दसभुज ते सोहे।
तीनों रूप निरखता, त्रिभुवन जन मोहे॥
ॐ जय शिव ओंकारा॥

अक्षमाला वनमाला, मुण्डमाला धारी।
चंदन मृगमद चर्चित, भस्मांग भारी॥
ॐ जय शिव ओंकारा॥

श्वेताम्बर, पीताम्बर, बाघम्बर अंगे।
संकर, शिव सनातन, पार्वती संगे॥
ॐ जय शिव ओंकारा॥

कर के मध्य कमण्डल, चक्र त्रिशूल धरता।
जगकर्ता, जगपालक, जग संहरता॥
ॐ जय शिव ओंकारा॥

ब्रह्मा, विष्णु, सदाशिव, जानत अविवेका।
प्रणवाक्षर में शोभित, ये तीनों एका॥
ॐ जय शिव ओंकारा॥

त्रिगुण स्वामी जी की आरती, जो कोई नर गावे।
कहत शिवानंद स्वामी, मनवांछित फल पावे॥
ॐ जय शिव ओंकारा॥`,
                english: `Om Jai Shiv Omkara Har Jai Shiv OmKara।
Brahma Vishnu Sadashiv Ardhaangi Dhaara॥

Ekanan Chaturanan Panchanan Raajey।
Hansanan Garurasan Vrishvaahan Saajey॥

Do Bhuj Chaar Chaturbhuj Das Bhuj Te Sohey।
Teeno Roop Nirakhta Tribhuvan Jan Mohey॥

Akshmala Banmala Mundmala Dhaari।
Chandan Mrigmad Sohay Bholay Shubhkari॥

Shwetambar Pitambar Baagambar Angey।
Sankadik Brahmadik Bhutadik Sangey॥

Karkey Madhya Kamandal Chakra Trishul Dharta।
Jagkarta Jagbharta Jagsanhaarkarta॥

Brahma Vishnu Sada Shiv Jaanat Aviveka।
Pranvaakshar Madhye Ye Teeno Eka॥

Trigun Shivji Ki Aarti Jo Koi Nar Gaavey।
Kahat Shivanand Swami Manvaanchit Phal Paavey॥

Om Jai Shiv Omkara Har Jai Shiv OmKara।
Brahma Vishnu Sadashiv Ardhaangi Dhaara॥`,
                videoLink: "https://www.youtube.com/watch?v=BhwOproElxU"
            },
            {
                id: "shiva-2",
                title: "शिव चालीसा (Shiv Chalisa)",
                hindi: `॥ दोहा ॥
जय गणेश गिरिजा सुवन,
मंगल मूल सुजान ।
कहत अयोध्यादास तुम,
देहु अभय वरदान ॥
॥ चौपाई ॥
जय गिरिजा पति दीन दयाला ।
सदा करत सन्तन प्रतिपाला ॥

भाल चन्द्रमा सोहत नीके ।
कानन कुण्डल नागफनी के ॥

अंग गौर शिर गंग बहाये ।
मुण्डमाल तन क्षार लगाए ॥

वस्त्र खाल बाघम्बर सोहे ।
छवि को देखि नाग मन मोहे ॥ 4

मैना मातु की हवे दुलारी ।
बाम अंग सोहत छवि न्यारी ॥

कर त्रिशूल सोहत छवि भारी ।
करत सदा शत्रुन क्षयकारी ॥

नन्दि गणेश सोहै तहँ कैसे ।
सागर मध्य कमल हैं जैसे ॥

कार्तिक श्याम और गणराऊ ।
या छवि को कहि जात न काऊ ॥ 8

देवन जबहीं जाय पुकारा ।
तब ही दुख प्रभु आप निवारा ॥

किया उपद्रव तारक भारी ।
देवन सब मिलि तुमहिं जुहारी ॥

तुरत षडानन आप पठायउ ।
लवनिमेष महँ मारि गिरायउ ॥

आप जलंधर असुर संहारा ।
सुयश तुम्हार विदित संसारा ॥ 12

त्रिपुरासुर सन युद्ध मचाई ।
सबहिं कृपा कर लीन बचाई ॥

किया तपहिं भागीरथ भारी ।
पुरब प्रतिज्ञा तासु पुरारी ॥

दानिन महँ तुम सम कोउ नाहीं ।
सेवक स्तुति करत सदाहीं ॥

वेद नाम महिमा तव गाई।
अकथ अनादि भेद नहिं पाई ॥ 16

प्रकटी उदधि मंथन में ज्वाला ।
जरत सुरासुर भए विहाला ॥

कीन्ही दया तहं करी सहाई ।
नीलकण्ठ तब नाम कहाई ॥

पूजन रामचन्द्र जब कीन्हा ।
जीत के लंक विभीषण दीन्हा ॥

सहस कमल में हो रहे धारी ।
कीन्ह परीक्षा तबहिं पुरारी ॥ 20

एक कमल प्रभु राखेउ जोई ।
कमल नयन पूजन चहं सोई ॥

कठिन भक्ति देखी प्रभु शंकर ।
भए प्रसन्न दिए इच्छित वर ॥

जय जय जय अनन्त अविनाशी ।
करत कृपा सब के घटवासी ॥

दुष्ट सकल नित मोहि सतावै ।
भ्रमत रहौं मोहि चैन न आवै ॥ 24

त्राहि त्राहि मैं नाथ पुकारो ।
येहि अवसर मोहि आन उबारो ॥

लै त्रिशूल शत्रुन को मारो ।
संकट से मोहि आन उबारो ॥

मात-पिता भ्राता सब होई ।
संकट में पूछत नहिं कोई ॥

स्वामी एक है आस तुम्हारी ।
आय हरहु मम संकट भारी ॥ 28

धन निर्धन को देत सदा हीं ।
जो कोई जांचे सो फल पाहीं ॥

अस्तुति केहि विधि करैं तुम्हारी ।
क्षमहु नाथ अब चूक हमारी ॥

शंकर हो संकट के नाशन ।
मंगल कारण विघ्न विनाशन ॥

योगी यति मुनि ध्यान लगावैं ।
शारद नारद शीश नवावैं ॥ 32

नमो नमो जय नमः शिवाय ।
सुर ब्रह्मादिक पार न पाय ॥

जो यह पाठ करे मन लाई ।
ता पर होत है शम्भु सहाई ॥

ॠनियां जो कोई हो अधिकारी ।
पाठ करे सो पावन हारी ॥

पुत्र हीन कर इच्छा जोई ।
निश्चय शिव प्रसाद तेहि होई ॥ 36

पण्डित त्रयोदशी को लावे ।
ध्यान पूर्वक होम करावे ॥

त्रयोदशी व्रत करै हमेशा ।
ताके तन नहीं रहै कलेशा ॥

धूप दीप नैवेद्य चढ़ावे ।
शंकर सम्मुख पाठ सुनावे ॥

जन्म जन्म के पाप नसावे ।
अन्त धाम शिवपुर में पावे ॥ 40

कहैं अयोध्यादास आस तुम्हारी ।
जानि सकल दुःख हरहु हमारी ॥

॥ दोहा ॥
नित्त नेम कर प्रातः ही,
पाठ करौं चालीसा ।
तुम मेरी मनोकामना,
पूर्ण करो जगदीश ॥

मगसर छठि हेमन्त ॠतु,
संवत चौसठ जान ।
अस्तुति चालीसा शिवहि,
पूर्ण कीन कल्याण ॥`,
                english: `॥ Doha ॥
Jai Ganesh Girija Suvan Mangal Mul Sujan।
Kahat Ayodhya Das Tum Dev Abhaya Varadan ॥
॥ Chaupai ॥
Jai Girija Pati Dinadayala। Sada Karat Santan Pratipala ॥
Bhala Chandrama Sohat Nike Kanan। Kundal Nagaphani Ke ॥
Anga Gaur Shira Ganga Bahaye। Mundamala Tan Chhara Lagaye ॥
Vastra Khala Baghambar Sohain Chhavi। Ko Dekha Naga Muni Mohain ॥

Maina Matu Ki Havai Dulari। Vama Anga Sohat Chhavi Nyari ॥
Kara Trishul Sohat Chhavi Bhari Karat। Sada Shatrun Chhayakari ॥
Nandi Ganesh Sohain Tahan Kaise। Sagar Madhya Kamal Hain Jaise ॥
Kartik Shyam Aur Ganara-U Ya Chhavi। Ko Kahi Jata Na Kauo ॥

Devan Jabahi Jaya Pukara। Tabahi Dukha Prabhu Apa Nivara ॥
Kiya Upadrav Tarak Bhari Devan Sab Mili। Tumahi Juhari ॥
Turata Shadanana Apa Pathayau। Lava-Ni-Mesh Mahan Mari Girayau ॥
Apa Jalandhara Asura Sanhara Suyash। Tumhara Vidit Sansara ॥

Tripurasur Sana Yudha Machayi। Sabhi Kripakar Lina Bachayi ॥
Kiya Tapahin Bhagiratha Bhari Purva। Pratigya Tasu Purari ॥
Danin Mahan Tum Sama Kou Nahin। Sevak Astuti Karat Sadahin ॥
Veda Nam Mahima Tab Gayaee Akatha। Anandi Bhed Nahin Payee ॥

Pragate Udadhi Mantan Men Jvala। Jarat Sura-Sur Bhaye Vihala ॥
Kinha Daya Tahan Kari Sahayee। Nilakantha Tab Nam Kahayee ॥
Pujan Ramchandra Jab Kinha। Jiti Ke Lanka Vibhishan Dinhi ॥
Sahas Kamal Men Ho Rahe Dhari Kinha। Pariksha Tabahin Purari ॥

Ek Kamal Prabhu Rakheu Joi। Kushal-Nain Pujan Chaha Soi ॥
Kathin Bhakti Dekhi Prabhu Shankar। Bhaye Prasanna Diye-Ichchhit Var ॥
Jai Jai Jai Anant Avinashi। Karat Kripa Sabake Ghat Vasi ॥
Dushta Sakal Nit Mohin Satavai। Bhramat Rahe Mohin Chain Na Avai ॥

Trahi-Trahi Main Nath Pukaro। Yahi Avasar Mohi Ana Ubaro ॥
Lai Trishul Shatrun Ko Maro। Sankat Se Mohin Ana Ubaro ॥
Mata Pita Bhrata Sab Hoi। Sankat Men Puchhat Nahin Koi ॥
Svami Ek Hai Asha Tumhari। Ava Harahu Aba Sankat Bhari ॥

Dhan Nirdhan Ko Deta Sadahin। Jo Koi Janche So Phal Pahin ॥
Astuti Kehi Vidhi Karai Tumhari। Kshamahu Nath Aba Chuka Hamari ॥
Shankar Ho Sankat Ke Nishan। Vighna Vinashan Mangal Karan ॥
Yogi Yati Muni Dhyan Lagavan। Sharad Narad Shisha Navavain ॥

Namo Namo Jai Namah Shivaya। Sura Brahmadik Par Na Paya ॥
Jo Yah Patha Karai Man Lai। Tapar Hota Hai Shambhu Sahayee ॥
Riniyan Jo Koi Ho Adhikari। Patha Karai So Pavan Hari ॥
Putra-hin Ichchha Kar Koi। Nischaya Shiva Prasad Tehin Hoi ॥

Pandit Trayodashi Ko Lavai। Dhyan-Purvak Homa Karavai ॥
Trayodashi Vrat Kare Hamesha। Tan Nahin Take Rahe Kalesha ॥
Dhupa Dipa Naivedya Charhavai। Anta Vasa Shivapur Men Pavai ॥
Kahai Ayodhya Asha Tumhari। Jani Sakal Dukha Harahu Hamari ॥

॥ Doha ॥
Nitya Nema kari Pratahi। Patha karau Chalis ॥
Tum Meri Man Kamana। Purna Karahu Jagadish ॥`
            }
        ]
    },
    {
        id: "durga",
        name: "Goddess Durga",
        image: "images/durga.jpg",
        aartis: [
            {
                id: "durga-1",
                title: "जय अम्बे गौरी, मैया जय श्यामा गौरी - आरती (Jai Ambe Gauri Maiya Jai Shyama Gauri)",
                hindi: `जय अम्बे गौरी,
मैया जय श्यामा गौरी ।
तुमको निशदिन ध्यावत,
हरि ब्रह्मा शिवरी ॥
ॐ जय अम्बे गौरी..॥

मांग सिंदूर विराजत,
टीको मृगमद को ।
उज्ज्वल से दोउ नैना,
चंद्रवदन नीको ॥
ॐ जय अम्बे गौरी..॥

कनक समान कलेवर,
रक्ताम्बर राजै ।
रक्तपुष्प गल माला,
कंठन पर साजै ॥
ॐ जय अम्बे गौरी..॥

केहरि वाहन राजत,
खड्ग खप्पर धारी ।
सुर-नर-मुनिजन सेवत,
तिनके दुखहारी ॥
ॐ जय अम्बे गौरी..॥

कानन कुण्डल शोभित,
नासाग्रे मोती ।
कोटिक चंद्र दिवाकर,
सम राजत ज्योती ॥
ॐ जय अम्बे गौरी..॥

शुंभ-निशुंभ बिदारे,
महिषासुर घाती ।
धूम्र विलोचन नैना,
निशदिन मदमाती ॥
ॐ जय अम्बे गौरी..॥

चण्ड-मुण्ड संहारे,
शोणित बीज हरे ।
मधु-कैटभ दोउ मारे,
सुर भयहीन करे ॥
ॐ जय अम्बे गौरी..॥

ब्रह्माणी, रूद्राणी,
तुम कमला रानी ।
आगम निगम बखानी,
तुम शिव पटरानी ॥
ॐ जय अम्बे गौरी..॥

चौंसठ योगिनी मंगल गावत,
नृत्य करत भैरों ।
बाजत ताल मृदंगा,
अरू बाजत डमरू ॥
ॐ जय अम्बे गौरी..॥

तुम ही जग की माता,
तुम ही हो भरता,
भक्तन की दुख हरता ।
सुख संपति करता ॥
ॐ जय अम्बे गौरी..॥

भुजा चार अति शोभित,
वर मुद्रा धारी । [खड्ग खप्पर धारी]
मनवांछित फल पावत,
सेवत नर नारी ॥
ॐ जय अम्बे गौरी..॥

कंचन थाल विराजत,
अगर कपूर बाती ।
श्रीमालकेतु में राजत,
कोटि रतन ज्योती ॥
ॐ जय अम्बे गौरी..॥

श्री अंबेजी की आरति,
जो कोइ नर गावे ।
कहत शिवानंद स्वामी,
सुख-संपति पावे ॥
ॐ जय अम्बे गौरी..॥

जय अम्बे गौरी,
मैया जय श्यामा गौरी ।`,
                english: `Jai Ambe Gauri Maiya,
Jaa Shyama Gauri
Nishdin Tumko Dhyaavat,
Hari Brahma Shivji ॥

Mang Sinduur Biraajat,
Tiko Mrigmadko,
Ujjvalse Dou Naina,
Chandravadan Niko ॥
॥Jai Ambe Gauri...॥

Kanak Saman Kalevar,
Raktambar Raje,
Raktapushp Galmala,
Kanthhar Saje ॥
॥Jai Ambe Gauri...॥

Kehari Vahan Rajat,
Khadg Khappar Dhari
Sur Nar Munijan Sevat,
Tinke Dukhahari ॥
॥Jai Ambe Gauri...॥

Kanan Kundal Shobhit,
Nasagre Moti
Kotik Chandra Divakar,
Samrajat Jyoti ॥
॥Jai Ambe Gauri...॥

Shumbh- Nishumbh Vidare,
Mahishasur Ghatia
Dhumra-Vilochan Naina,
Nishdin Madmati ॥
॥Jai Ambe Gauri...॥

Chanda-Munda Sanhera,
Shonit Beed Hare,
Madhu-Katitabha Mare,
Sur Bhayahin Kare ॥
॥Jai Ambe Gauri...॥

Brahmani, Rudrani,
Tum Kamala Rani,
Agam-Nigam Bakhani,
Turn Shiv Patrani ॥
॥Jai Ambe Gauri...॥

Chaunsath Yogini Gavat,
Nritya Karat Bhairon,
Bajat Tab Mridanga,
Aur Bajat Damru ॥
॥Jai Ambe Gauri...॥

Tum Ho Jag Ki Mata,
Tum Hi Ho Bharta,
Bhaktan Ki Dukh Harta,
Sukh Sampati Karta ॥
॥Jai Ambe Gauri...॥

Bhuja Char Ati Shobhit,
Var Mudra Dhari,
Manvanchhit Phal Pavat,
Sevat Nar Nari॥
॥Jai Ambe Gauri...॥

Kanchan Thal Virajat,
Agaru Kapur Bati
Malketu Men Rajat,
Kotiratan Jyoti ॥
॥Jai Ambe Gauri...॥

Jai Ambe Gauri Maiya,
Jaa Shyama Gauri
Nishdin Tumko Dhyaavat,
Hari Brahma Shivji ॥`
            },
        {
            id: "durga-2",
            title: "Durga Chalisa (दुर्गा चालीसा)",
            hindi: `नमो नमो दुर्गे सुख करनी ।
नमो नमो दुर्गे दुःख हरनी ॥
निरंकार है ज्योति तुम्हारी ।
तिहूँ लोक फैली उजियारी ॥
शशि ललाट मुख महाविशाला ।
नेत्र लाल भृकुटि विकराला ॥

रूप मातु को अधिक सुहावे ।
दरश करत जन अति सुख पावे ॥

तुम संसार शक्ति लै कीना ।
पालन हेतु अन्न धन दीना ॥

अन्नपूर्णा हुई जग पाला ।
तुम ही आदि सुन्दरी बाला ॥

प्रलयकाल सब नाशन हारी ।
तुम गौरी शिवशंकर प्यारी ॥

शिव योगी तुम्हरे गुण गावें ।
ब्रह्मा विष्णु तुम्हें नित ध्यावें ॥

रूप सरस्वती को तुम धारा ।
दे सुबुद्धि ऋषि मुनिन उबारा ॥

धरयो रूप नरसिंह को अम्बा ।
परगट भई फाड़कर खम्बा ॥10॥

रक्षा करि प्रह्लाद बचायो ।
हिरण्याक्ष को स्वर्ग पठायो ॥

लक्ष्मी रूप धरो जग माहीं ।
श्री नारायण अंग समाहीं ॥

क्षीरसिन्धु में करत विलासा ।
दयासिन्धु दीजै मन आसा ॥

हिंगलाज में तुम्हीं भवानी ।
महिमा अमित न जात बखानी ॥

मातंगी अरु धूमावति माता ।
भुवनेश्वरी बगला सुख दाता ॥

श्री भैरव तारा जग तारिणी ।
छिन्न भाल भव दुःख निवारिणी ॥

केहरि वाहन सोह भवानी ।
लांगुर वीर चलत अगवानी ॥

कर में खप्पर खड्ग विराजै ।
जाको देख काल डर भाजै ॥

सोहै अस्त्र और त्रिशूला ।
जाते उठत शत्रु हिय शूला ॥

नगरकोट में तुम्हीं विराजत ।
तिहुँलोक में डंका बाजत ॥20॥

शुम्भ निशुम्भ दानव तुम मारे ।
रक्तबीज शंखन संहारे ॥

महिषासुर नृप अति अभिमानी ।
जेहि अघ भार मही अकुलानी ॥

रूप कराल कालिका धारा ।
सेन सहित तुम तिहि संहारा ॥

परी गाढ़ सन्तन पर जब जब ।
भई सहाय मातु तुम तब तब ॥

अमरपुरी अरु बासव लोका ।
तब महिमा सब रहें अशोका ॥

ज्वाला में है ज्योति तुम्हारी ।
तुम्हें सदा पूजें नरनारी ॥

प्रेम भक्ति से जो यश गावें ।
दुःख दारिद्र निकट नहिं आवें ॥

ध्यावे तुम्हें जो नर मन लाई ।
जन्ममरण ताकौ छुटि जाई ॥

जोगी सुर मुनि कहत पुकारी ।
योग न हो बिन शक्ति तुम्हारी ॥

शंकर आचारज तप कीनो ।
काम अरु क्रोध जीति सब लीनो ॥30

निशिदिन ध्यान धरो शंकर को ।
काहु काल नहिं सुमिरो तुमको ॥

शक्ति रूप का मरम न पायो ।
शक्ति गई तब मन पछितायो ॥

शरणागत हुई कीर्ति बखानी ।
जय जय जय जगदम्ब भवानी ॥

भई प्रसन्न आदि जगदम्बा ।
दई शक्ति नहिं कीन विलम्बा ॥

मोको मातु कष्ट अति घेरो ।
तुम बिन कौन हरै दुःख मेरो ॥

आशा तृष्णा निपट सतावें ।
मोह मदादिक सब बिनशावें ॥

शत्रु नाश कीजै महारानी ।
सुमिरौं इकचित तुम्हें भवानी ॥

करो कृपा हे मातु दयाला ।
ऋद्धिसिद्धि दै करहु निहाला ॥

जब लगि जिऊँ दया फल पाऊँ ।
तुम्हरो यश मैं सदा सुनाऊँ ॥

श्री दुर्गा चालीसा जो कोई गावै ।
सब सुख भोग परमपद पावै ॥40

देवीदास शरण निज जानी ।
कहु कृपा जगदम्ब भवानी ॥

॥दोहा॥
शरणागत रक्षा करे,
भक्त रहे नि:शंक ।
मैं आया तेरी शरण में,
मातु लिजिये अंक ॥

॥ इति श्री दुर्गा चालीसा संपूर्ण ॥`,
            english: `Namo Namo Durge Sukh Karani ।
Namo Namo Ambe Dukh Harani ॥
Nirakar Hai Jyoti Tumhari ।
Tihoun Lok Phaili Uujiyaari ॥

Shashi Lalaat Mukh Maha Vishala ।
Netra Lal Bhrikoutee Vikaraala ॥

Roop Maatu Ko Adhik Suhaave ।
Darshan Karata Jana Ati Sukh Paave ॥4

Tum Sansar Shakti Laya Keena ।
Palana Hetu Anna Dhan Deena ॥

Annapoorna Hui Tu Jag Pala ।
Tumhi Aadi Sundari Bala ॥

Pralayakala Sab Nashana Haari ।
Tum Gouri Shiv Shankar Pyari ॥

Shiv Yogi Tumhre Gun Gaavein ।
Brahma Vishnu Tumhein Nit Dhyavein ॥8

Roop Saraswati Ka Tum Dhara ।
Day Subuddhi Rishi Munina Ubara ॥

Dharyo Roop Narsimha Ko Amba ।
Pragat Bhayi Phaad Ke Khamba ॥

Raksha Kari Prahlad Bachaayo ।
Hiranyaykush Ko Swarga Pathayo ॥

Lakshmi Roop Dharo Jag Maahin ।
Shree Narayan Anga Samahin ॥12

Ksheer Sindhu Mein Karat Vilaasa ।
Daya Sindhu Deejey Man Aasa ॥

Hingalaja Mein Tumhi Bhavani ।
Mahima Amit Na Jaat Bakhani ॥

Matangi Aru Dhoomawati Mata ।
Bhuvaneshwari Bagala Sukhdata ॥

Shree Bhairav Tara Jag Tarani ।
Chhinna Bhala Bhava Dukh Nivarini ॥16

Kehari Vahan Soha Bhavani ।
Laangur Veer Chalata Agavani ॥

Kar Mein Khappar Khadaga Virajay ।
Jako Dekh Kaal Dar Bhajey ॥

Sohe Astra Aur Trishula ।
Jase Uthata Shatru Hiya Shoola ॥

Nagarkot Mein Toumhi Virajat ।
Tihoun Lok Mein Danka Baajat ॥20

Shumbh-Nishumbh Daanuv Tum Maare ।
Rakta Beej Shankhana Sanghaare ॥

Mahishasur Nrip Ati Abhimaani ।
Jehi Agh Bhar Mahi Akulaani ॥

Roop Karaal Kali ka Dhara ।
Sen Sahita Tum Tihin Samhara ॥

Pari Gaarh Santana Par Jab Jab ।
Bhayi Sahay Matou Tum Tab Tab ॥24

Amarpuri Arubaa Sab Lokaa ।
Tab Mahima Sab Kahey Ashoka ॥

Jwala Mein Hai Jyoti Tumhari ।
Tumhein Sada Poojey Nar Nari ॥

Prem Bhakti Se Jo Yash Gave ।
Dukh Daridra Nikat Nahin Aave ॥

Dhyaave Tumhein Jo Nar Man Layi ।
Janma Maran Tako Chhouti Jaayi ॥28

Yogi Sur Muni Kahat Pukaari ।
Yog Na Hoye Bina Shakti Tumhari ॥

Shankara Acharaj Tap Ati Keenho ।
Kaam Krodh Jeet Sab Leenho ॥

Nishidin Dhyan Dharo Shankar Ko ।
Kaahu Kaal Nahin Soumiro Tumko ॥

Shakti Roop Ko Maram Na Payo ।
Shakti Gayi Tab Man Pachitayo ॥32

Sharnagat Huyi Kirti Bakhaani ।
Jai Jai Jai Jagadambe Bhavani ॥

Bhayi Prasanna Aadi Jagadamba ।
Dayi Shakti Nahin Keen Vilamba ॥

Maukon Maatu Kashta Ati Ghero ।
Tum Bin Kaun Harey Dukh Mero ॥

Asha Trishna Nipat Satavein ।
Ripu Moorakh Mohe Ati Darpaave ॥36

Shatru Nash Kijey Maharani ।
Soumiron Ikchit Tumhein Bhavani ॥

Karo Kripa Hey Maatu Dayala ।
Riddhi Siddhi Dey Karahou Nihaala ॥

Jab Lagi Jiyoun Daya Phal Paoun ।
Tumhro Yash Mein Sada Sounaoun ॥

Durga Chalisa Jo Nar Gaavey ।
Sab Sukh Bhog Parampad Pavey ॥40

Devidas Sharan Nij Jaani ।
Karahoun Kripa Jagadambe Bhavani ॥

॥Doha॥
Sharanaagat Rakshaa Kare,
Bhakt Rahe Nishank ।
Main Aayaa Teri Sharan Me,
Maatu Lijiye Ank ॥
॥ Et Shree Durga Chalisa ॥`
        }
        ]
    },
    {
        id: "hanuman",
        name: "Lord Hanuman",
        image: "images/hanuman.jpg",
        aarti:[
            {
                id: "hanuman-1", 
                title: "हनुमान आरती (Hanuman Aarti)",
                hindi: `॥ श्री हनुमंत स्तुति ॥
मनोजवं मारुत तुल्यवेगं,
जितेन्द्रियं, बुद्धिमतां वरिष्ठम् ॥
वातात्मजं वानरयुथ मुख्यं,
श्रीरामदुतं शरणम प्रपद्धे ॥

॥ आरती ॥
आरती कीजै हनुमान लला की ।
दुष्ट दलन रघुनाथ कला की ॥

जाके बल से गिरवर काँपे ।
रोग-दोष जाके निकट न झाँके ॥
अंजनि पुत्र महा बलदाई ।
संतन के प्रभु सदा सहाई ॥
आरती कीजै हनुमान लला की ॥

दे वीरा रघुनाथ पठाए ।
लंका जारि सिया सुधि लाये ॥
लंका सो कोट समुद्र सी खाई ।
जात पवनसुत बार न लाई ॥
आरती कीजै हनुमान लला की ॥

लंका जारि असुर संहारे ।
सियाराम जी के काज सँवारे ॥
लक्ष्मण मुर्छित पड़े सकारे ।
लाये संजिवन प्राण उबारे ॥
आरती कीजै हनुमान लला की ॥

पैठि पताल तोरि जमकारे ।
अहिरावण की भुजा उखारे ॥
बाईं भुजा असुर दल मारे ।
दाहिने भुजा संतजन तारे ॥
आरती कीजै हनुमान लला की ॥

सुर-नर-मुनि जन आरती उतरें ।
जय जय जय हनुमान उचारें ॥
कंचन थार कपूर लौ छाई ।
आरती करत अंजना माई ॥
आरती कीजै हनुमान लला की ॥

जो हनुमानजी की आरती गावे ।
बसहिं बैकुंठ परम पद पावे ॥
लंक विध्वंस किये रघुराई ।
तुलसीदास स्वामी कीर्ति गाई ॥

आरती कीजै हनुमान लला की ।
दुष्ट दलन रघुनाथ कला की ॥
॥ इति संपूर्णंम् ॥`,
                english: `॥ Shri Hanuman Stuti ॥
Manojavm maaruta tulyavegam,
jitendriyam buddhimatam varissttha ॥
Vaatatmajam Vaanarayutha mukhyam,
Shriiramdutam sharanam prapadye ॥

॥ Aarti ॥
Aarti Ki Jai Hanuman Lala Ki ।
Dushat Dalan Ragunath Kala Ki ॥

Jake Bal Se Giriver Kaanpe ।
Rog Dosh Ja Ke Nikat Na Jaanke ॥
Anjani Putra Mahabaldaye ।
Santan Ke Prabhu Sada Sahaye ॥
Aarti Ki Jai Hanuman Lala Ki ॥

De Beeraha Raghunath Pathai ।
Lanka Jaari Siya Sudhi Laiye॥
Lanka So Kot Samundra Se Khaiy ।
Jaat Pavan Sut Baar Na Laiye ॥
Aarti Ki Jai Hanuman Lala Ki ॥

Lanka Jaari Asur Sab Maare ।
Siya Ramji Ke Kaaj Sanvare ॥
Lakshman Moorchit Parhe Sakare ।
Aan Sajeevan Pran Ubhaare ॥
Aarti Ki Jai Hanuman Lala Ki ॥

Paith Pataal Tori Yamkare ।
Ahiravan Ke Bhuja Ukhaare ॥
Baayen Bhuja Asur Dal Mare ।
Daayen Bhuja Sab Santa Jana Tare ॥
Aarti Ki Jai Hanuman Lala Ki ॥

Surnar Munijan Aarti Utare ।
Jai Jai Jai Hanuman Uchaare ॥
Kanchan Thaar Kapoor Lo Chhai ।
Aarti Karat Aajani Mai ॥
Aarti Ki Jai Hanuman Lala Ki ॥

Jo Hanumanji Ki Aarti Gaave ।
Basi Baikuntha Amar Padh Pave ॥
Lanka Vidvance Kiye Ragurai ।
Tulsidas Swami Aarti Gaaie ॥
Aarti Ki Jai Hanuman Lala Ki ॥

Aarti Ki Jai Hanuman Lala Ki ।
Dushat Dalan Ragunath Kala Ki ॥
॥ Eti Sampuarnam ॥`,
                videoLink: "https://www.youtube.com/watch?v=r7GJ8GoGSD8"
            },
            {
                id: "hanuman-2",
                title: "हनुमान चालीसा (Hanuman Chalisa)",
                hindi: `॥ दोहा॥
श्रीगुरु चरन सरोज रज
निज मनु मुकुरु सुधारि ।
बरनउँ रघुबर बिमल जसु
जो दायकु फल चारि ॥
बुद्धिहीन तनु जानिके
सुमिरौं पवन-कुमार ।
बल बुधि बिद्या देहु मोहिं
हरहु कलेस बिकार ॥

॥ चौपाई ॥
जय हनुमान ज्ञान गुन सागर ।
जय कपीस तिहुँ लोक उजागर ॥

राम दूत अतुलित बल धामा ।
अंजनि पुत्र पवनसुत नामा ॥

महाबीर बिक्रम बजरंगी ।
कुमति निवार सुमति के संगी ॥

कंचन बरन बिराज सुबेसा ।
कानन कुण्डल कुँचित केसा ॥४

हाथ बज्र अरु ध्वजा बिराजै ।
काँधे मूँज जनेउ साजै ॥

शंकर स्वयं/सुवन केसरी नंदन ।
तेज प्रताप महा जगवंदन ॥

बिद्यावान गुनी अति चातुर ।
राम काज करिबे को आतुर ॥

प्रभु चरित्र सुनिबे को रसिया ।
राम लखन सीता मन बसिया ॥८

सूक्ष्म रूप धरि सियहिं दिखावा ।
बिकट रूप धरि लंक जरावा ॥

भीम रूप धरि असुर सँहारे ।
रामचन्द्र के काज सँवारे ॥

लाय सजीवन लखन जियाए ।
श्री रघुबीर हरषि उर लाये ॥

रघुपति कीन्ही बहुत बड़ाई ।
तुम मम प्रिय भरतहि सम भाई ॥१२

सहस बदन तुम्हरो जस गावैं ।
अस कहि श्रीपति कण्ठ लगावैं ॥

सनकादिक ब्रह्मादि मुनीसा ।
नारद सारद सहित अहीसा ॥

जम कुबेर दिगपाल जहाँ ते ।
कबि कोबिद कहि सके कहाँ ते ॥

तुम उपकार सुग्रीवहिं कीह्ना ।
राम मिलाय राज पद दीह्ना ॥१६

तुम्हरो मंत्र बिभीषण माना ।
लंकेश्वर भए सब जग जाना ॥

जुग सहस्त्र जोजन पर भानु ।
लील्यो ताहि मधुर फल जानू ॥

प्रभु मुद्रिका मेलि मुख माहीं ।
जलधि लाँघि गये अचरज नाहीं ॥

दुर्गम काज जगत के जेते ।
सुगम अनुग्रह तुम्हरे तेते ॥२०

राम दुआरे तुम रखवारे ।
होत न आज्ञा बिनु पैसारे ॥

सब सुख लहै तुम्हारी सरना ।
तुम रक्षक काहू को डरना ॥

आपन तेज सम्हारो आपै ।
तीनों लोक हाँक तै काँपै ॥

भूत पिशाच निकट नहिं आवै ।
महावीर जब नाम सुनावै ॥२४

नासै रोग हरै सब पीरा ।
जपत निरंतर हनुमत बीरा ॥

संकट तै हनुमान छुडावै ।
मन क्रम बचन ध्यान जो लावै ॥

सब पर राम तपस्वी राजा ।
तिनके काज सकल तुम साजा ॥

और मनोरथ जो कोई लावै ।
सोई अमित जीवन फल पावै ॥२८

चारों जुग परताप तुम्हारा ।
है परसिद्ध जगत उजियारा ॥

साधु सन्त के तुम रखवारे ।
असुर निकंदन राम दुलारे ॥

अष्ट सिद्धि नौ निधि के दाता ।
अस बर दीन जानकी माता ॥

राम रसायन तुम्हरे पासा ।
सदा रहो रघुपति के दासा ॥३२

तुम्हरे भजन राम को पावै ।
जनम जनम के दुख बिसरावै ॥

अंतकाल रघुवरपुर जाई ।
जहाँ जन्म हरिभक्त कहाई ॥

और देवता चित्त ना धरई ।
हनुमत सेइ सर्ब सुख करई ॥

संकट कटै मिटै सब पीरा ।
जो सुमिरै हनुमत बलबीरा ॥३६

जै जै जै हनुमान गोसाईं ।
कृपा करहु गुरुदेव की नाईं ॥

जो सत बार पाठ कर कोई ।
छूटहि बंदि महा सुख होई ॥

जो यह पढ़ै हनुमान चालीसा ।
होय सिद्धि साखी गौरीसा ॥

तुलसीदास सदा हरि चेरा ।
कीजै नाथ हृदय मह डेरा ॥४०

॥ दोहा ॥
पवन तनय संकट हरन,
मंगल मूरति रूप ।
राम लखन सीता सहित,
हृदय बसहु सुर भूप ॥`,
                english: `॥ Shri Hanuman Chalisa Lyrics ॥
॥ Doha ॥
Shri Guru Charan Saroj raj
Nija manu Mukura sudhari ।
Baranau Raghuvar Bimal Jasu
Jo Dayaku Phala Chari ॥
Budheeheen Tanu Jannike
Sumiro Pavan Kumara ।
Bal Buddhi Vidya Dehoo Mohee
Harahu Kalesh Vikaar ॥

॥ Chaupai ॥
Jai Hanuman gyan gun sagar ।
Jai Kapis tihun lok ujagar ॥

Ram doot atulit bal dhama ।
Anjani putra Pavan sut nama ॥

Mahabir vikram Bajrangi ।
Kumati nivar sumati Ke sangi ॥

Kanchan varan viraj subesa ।
Kanan Kundal Kunchit Kesha ॥ 4

Hath Vajra Aur Dhwaja Viraje ।
Kaandhe moonj janeu saaje ॥

Sankar suvan kesri Nandan ।
Tej prataap maha jag vandan ॥

Vidyavaan guni ati chatur ।
Ram kaj karibe ko aatur ॥

Prabhu charitra sunibe ko rasiya ।
Ram Lakhan Sita man Basiya ॥ 8

Sukshma roop dhari Siyahi dikhava ।
Vikat roop dhari lank jalava ॥

Bhim roop dhari asur sanhare ।
Ramachandra ke kaj sanvare ॥

Laye Sanjivan Lakhan Jiyaye ।
Shri Raghuvir Harashi ur laye ॥

Raghupati Kinhi bahut badai ।
Tum mama priya Bharat-hi-sam bhai ॥ 12

Sahas badan tumharo yash gaave ।
As kahi Shripati kanth lagaave ॥

Sankadhik Brahmaadi Muneesa ।
Narad Sarad sahit Aheesa ॥

Yam Kuber Dikpaal Jahan te ।
Kavi kovid kahi sake kahan te ॥

Tum upkar Sugreevahin keenha ।
Ram milaye rajpad deenha ॥ 16 ॥

Tumhro mantra Vibheeshan maana ।
Lankeshwar Bhaye Sab jag jana ॥

Yug sahasra yojan par Bhanu ।
Leelyo tahi madhur phal janu ॥

Prabhu mudrika meli mukh mahee ।
Jaladhi langhi gaye achraj nahee ॥

Durgam kaj jagat ke jete ।
Sugam anugraha tumhre tete ॥ 20

Ram duwaare tum rakhvare ।
Hot na agya binu paisare ॥

Sab sukh lahai tumhari sarna ।
Tum rakshak kahu ko darna ॥

Aapan tej samharo aapai ।
Teenon lok hank te kanpai ॥

Bhoot pisaach Nikat nahin aavai ।
Mahavir jab naam sunavai ॥ 24

Nase rog harae sab peera ।
Japat nirantar Hanumat beera ॥

Sankat se Hanuman chhudavai ।
Man Kram Vachan dhyan jo lavai ॥

Sab par Ram tapasvee raja ।
Tin ke kaj sakal Tum saja ॥

Aur manorath jo koi lavai ।
Soi amit jeevan phal pavai ॥ 28

Charon jug partap tumhara ।
Hai parsiddh jagat ujiyara ॥

Sadhu Sant ke tum Rakhware ।
Asur nikandan Ram dulare ॥

Ashta siddhi nav nidhi ke data ।
As var deen Janki mata ॥

Ram rasayan tumhare pasa ।
Sada raho Raghupati ke dasa ॥ 32

Tumhare bhajan Ram ko pavai ।
Janam janam ke dukh bisraavai ॥

Antkaal Raghuvar pur jayee ।
Jahan janam Hari Bhakt Kahayee ॥

Aur Devta Chitt na dharahin ।
Hanumat sei sarv sukh karahin ॥

Sankat kate mite sab peera ।
Jo sumirai Hanumat Balbeera ॥ 36

Jai Jai Jai Hanuman Gosain ।
Kripa Karahun Gurudev ki nayin ॥

Jo shat bar path kare koi ।
Chhutahin bandi maha sukh hoi ॥

Jo yeh padhe Hanuman Chalisa ।
Hoye siddhi saakhi Gaureesa ॥

Tulsidas sada hari chera ।
Keejai Nath Hriday mahn dera ॥ 40

॥ Doha ॥
Pavan Tanay Sankat Harana,
Mangala Murati Roop ।
Ram Lakhan Sita Sahita,
Hriday Basahu Soor Bhoop ॥`,
videoLink: "https://www.youtube.com/watch?v=AETFvQonfV8"
            }
        ]
            
        },
    {
        id: "saraswati",
        name: "Goddess Saraswati",
        image: "images/saraswati.jpg",
        aarti: `या कुन्देन्दु तुषारहारधवला या शुभ्रवस्त्रावृता।
या वीणावरदण्डमण्डितकरा या श्वेतपद्मासना॥
या ब्रह्माच्युतशंकरप्रभृतिभिर्देवैः सदा वन्दिता।
सा मां पातु सरस्वती भगवती निःशेषजाड्यापहा॥`
    },
    {
        id: "vishnu",
        name: "Lord Vishnu",
        image: "images/vishnu.jpg",
        aarti: `ॐ जय जगदीश हरे, स्वामी जय जगदीश हरे।
भक्त जनों के संकट, क्षण में दूर करे॥
ॐ जय जगदीश हरे॥

जो ध्यावे फल पावे, दुख बिनसे मन का।
सुख संपति घर आवे, कष्ट मिटे तन का॥
ॐ जय जगदीश हरे॥`
    },
    {
        id: "rama",
        name: "Lord Rama",
        image: "images/ram.jpg",
        aarti: `आरती श्री रामचन्द्र जी की। कौशल्या के लाल की॥
अयोध्या के राजदुलारे, सीता जी के प्यारे॥
जय हनुमंत जिनका बल है अपरमपारा।
जय जय जानकी वल्लभ प्रभु जय जय सीताराम॥`
    },
    {
        id: "kali",
        name: "Goddess Kali",
        image: "images/kali.jpg",
        aarti: `जय काली महाकाली, जय आदिशक्ति कराली।
महाकाली घोर रूपे, स्मशान रूपे विशाल दंते॥
महामाया महाकाली, सर्व देवों में तू बली।
तू ही आदि तू अनंत, तेरी माया अति प्रचंड॥`
    },
    {
        id: "kartikeya",
        name: "Lord Kartikeya",
        image: "images/kartikeya.jpg",
        aarti: `जय गणपति जय गणपति, जय सेनापति स्वामी।
सुब्रह्मणयम् सुब्रह्मणयम् सुब्रह्मणयम् प्रभु॥
षण्मुखा षडानन मयूरा वाहना।
शक्तिधरा देवसेनायुक्ता गुहा॥`
    },
    {
        id: "radha",
        name: "Goddess Radha",
        image: "images/radha.jpg",
        aarti: `जय राधे जय राधे राधे, जय श्री राधे।
वृन्दावन की रानी राधे, जय श्री राधे॥
मोहन के मन भावन राधे, जय श्री राधे।
अष्ट सखी की स्वामिनी राधे, जय श्री राधे॥`
    },
    {
        id: "brahma",
        name: "Lord Brahma",
        image: "images/brahma.jpg",
        aarti: `ब्रह्मा जी की आरती, जो कोई गावे।
चौसठ विद्या पावे, पंडित कहलावे॥
ब्रह्मा जी मन भावे, पंडित कहलावे॥
ॐ जय जगदीश हरे, स्वामी जय जगदीश हरे॥`
    },
    {
        id: "parvati",
        name: "Goddess Parvati",
        image: "images/parvati.jpg",
        aarti: `जय पार्वती माता, जग पालन करता।
पुत्र चतुर वर दाता, रिद्धि सिद्धि दाता॥
तेरी अमर कहानी, जगत में हुई नूर जवानी॥
जय जय पार्वती अम्मा, जय जय शिव की अंगना॥`
    },
    {
        id: "ganga",
        name: "Goddess Ganga",
        image: "images/ganga.jpg",
        aarti: `ॐ जय गंगे माता, मैया जय गंगे माता।
जो नर तुमको ध्याता, मनवाँछित फल पाता॥
ॐ जय गंगे माता॥

करत स्नान तीरथ राजा, पाप कटत हैं काया।
दूर होत सब पीरा, मिटत कर्म के फेरा॥
ॐ जय गंगे माता॥`
    },
    {
        id: "jagannath",
        name: "Lord Jagannath",
        image: "images/jagganath.jpg",
        aarti: `जय जगन्नाथ स्वामी, जय जगदीशा।
करुणा सिंधु तुमको, नमन हमेशा॥
भक्तन के तुम रखवाले, दीनन के प्रतिपाले।
पुरी धाम के नाथ हो तुम, जगन्नाथा॥`
    },
    {
        id: "sita",
        name: "Goddess Sita",
        image: "images/sita.jpg",
        aarti: `जय सिया राम जय जय सिया राम।
भजन बिना नर किसे न पाए, पूरन काम॥
जय सिया राम जय जय सिया राम॥
माता सीता रघुवर प्यारी, घर घर की तुम हो महतारी॥
जय जय माँ जानकी, सकल विश्व जननी॥`
    },
    {
        id: "surya",
        name: "Lord Surya",
        image: "images/surya.jpg",
        aarti: `जय सूर्य देवा, जय सूर्य देवा।
सृष्टि पालन भानु देवा, जय सूर्य देवा॥
रविवार व्रत है तुम्हारा, रथ सप्त अश्वों का प्यारा।
उदय होत तुम सुबह सवेरे, अंधकार से विश्व उबारा॥`
    },
    {
        id: "santoshi",
        name: "Goddess Santoshi Mata",
        image: "images/santoshi.jpg",
        aarti: `जय संतोषी माता, मैया जय संतोषी माता।
अपने सेवक जन की, सुख संपत्ति दाता॥
जय संतोषी माता॥

शुक्रवार व्रत जो कोई ला वे, गुड़ और चना मनावे।
कुँवारी कन्याएँ होती, तेरे द्वार खड़ी हाथ जोड़ी॥
मनवांछित फल पावें, जय संतोषी माता॥`
    },
    {
        id: "nandi",
        name: "Lord Nandi",
        image: "images/nandi.jpg",
        aarti: `नंदी महादेव के वाहन, शंकर के हैं प्यारे।
द्वारपाल बने नंदीश्वर, शिव के द्वारे॥
जय नंदी महाराज, जय नंदी महाराज॥
हर हर महादेव के बोलो, जय नंदी महाराज॥`
    },
    {
        id: "narasimha",
        name: "Lord Narasimha",
        image: "images/narsimha.jpg",
        aarti: `जय नरसिंह महावीर, जय नरहरी।
प्रह्लाद भक्त उधारण, हरिणाकाशिपु मारी॥
जय नरसिंह महावीर, जय नरहरी॥`
    },
    {
        id: "yamuna",
        name: "Goddess Yamuna",
        image: "images/yamuna.jpg",
        aarti: `ॐ जय यमुना माता, मैया जय यमुना माता।
कृष्ण की प्रिय यमुना माता, भक्तों की सुख दाता॥
ॐ जय यमुना माता॥`
    },
    {
        id: "ayyappa",
        name: "Lord Ayyappa",
        image: "images/ayyappa.jpg",
        aarti: `स्वामिये शरणम् अय्यप्पा, स्वामिये शरणम् अय्यप्पा।
हरिहरपुत्र शरणम् अय्यप्पा, शबरीमाला वासा॥
स्वामिये शरणम् अय्यप्पा॥`
    },
    {
        id: "tulsi",
        name: "Goddess Tulsi",
        image: "images/tulsi.jpg",
        aarti: `आरती तुलसी माता की, तुलसी माता शुभदाता।
चरणों में जो पड़ जाए, हरि लेते अपनाता॥
नारद शारद शीश नवावें, विष्णु पूजा में होती॥`
    },
    {
        id: "gayatri",
        name: "Goddess Gayatri",
        image: "images/gayatri.jpg",
        aarti: `जय गायत्री माता, जय गायत्री माता।
वेदों की जननी तुम, ऋषि मुनि सुखदाता॥
ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यम्॥`
    },
    {
        id: "balarama",
        name: "Lord Balarama",
        image: "images/balarama.jpg",
        aarti: `आरती श्री बलराम जी की। रोहिणी के लाल की॥
कृष्ण भाई बलराम, हलधर नाम महान।
मूसल शस्त्र धारण करें, दुष्टों का करें विनाश॥`
    },
    {
        id: "vayu",
        name: "Lord Vayu",
        image: "images/vayu.jpg",
        aarti: `जय वायु देव महाबली, प्राणों के तुम स्वामी।
सब जीवों के प्राणदाता, जगत के अंतर्यामी॥
जय वायु देव महाबली॥`
    },
    {
        id: "varuna",
        name: "Lord Varuna",
        image: "images/varuna.jpg",
        aarti: `जय वरुण देव महाराज, जलधि के स्वामी।
समुद्र के अधिपति तुम, सब जल के रक्षक॥
जय वरुण देव महाराज॥`
    },
    {
        id: "bahuchara",
        name: "Goddess Bahuchara",
        image: "images/bahuchara.jpg",
        aarti: `जय बहुचरा माता, दातार दशा मिटाओ।
भक्तों की सदा सहायक, संकट सबके हरो॥
जय बहुचरा माता॥`
    },
    {
        id: "kubera",
        name: "Lord Kubera",
        image: "images/kubera.jpg",
        aarti: `जय कुबेर धनाध्यक्ष, यक्षराज महान।
धन-धान्य के दाता तुम, करें सदा कल्याण॥
जय कुबेर धनाध्यक्ष॥`
    },
    {
        id: "indra",
        name: "Lord Indra",
        image: "images/indra.jpg",
        aarti: `जय इंद्र देव महाराज, देवों के अधिपति।
वज्रधारी महावीर, मेघनाथ वृष्टिपति॥
जय इंद्र देव महाराज॥`
    },
    {
        id: "yama",
        name: "Lord Yama",
        image: "images/yama.jpg",
        aarti: `जय यमराज धर्मराज, धर्म के हो स्वामी।
पाप-पुण्य के न्यायकर्ता, सब जीवों के स्वामी॥
जय यमराज धर्मराज॥`
    },
    {
        id: "bhairava",
        name: "Lord Bhairava",
        image: "images/bhairava.jpg",
        aarti: `जय भैरव महाकाल, शिव के रौद्र रूप।
काल के भी महाकाल, दुष्टों के संहारक॥
जय भैरव महाकाल॥`
    },
    {
        id: "agni",
        name: "Lord Agni",
        image: "images/agni.jpg",
        aarti: `जय अग्नि देव महाराज, यज्ञों के मुख।
देवताओं तक हविष्य पहुंचाने वाले, सब घर के शुद्धिकर्ता॥
जय अग्नि देव महाराज॥`
    },
    {
        id: "annapurna",
        name: "Goddess Annapurna",
        image: "images/annapurna.jpg",
        aarti: `जय अन्नपूर्णा माता, अन्न की देवी माता।
सबको अन्न देने वाली, कभी न किसी को भूखा रखती॥
जय अन्नपूर्णा माता॥`
    },
    {
        id: "dattatreya",
        name: "Lord Dattatreya",
        image: "images/dattatreya.jpg",
        aarti: `जय दत्तात्रेय प्रभु, त्रिदेव अवतारी।
ब्रह्मा विष्णु महेश का, स्वरूप है तुम्हारा॥
जय दत्तात्रेय प्रभु॥`
    },
    {
        id: "chandi",
        name: "Goddess Chandi",
        image: "images/chandi.jpg",
        aarti: `जय चंडी महाकाली, मां काली कपालिनी।
दुर्गा चंदवदनी, कौशिकी ज्वालामुखी॥
जय चंडी महाकाली॥`
    },
    {
        id: "sai",
        name: "Sai Baba",
        image: "images/sai baba.jpg",
        aarti: `श्री सच्चिदानंद समर्थ सद्गुरु साईनाथ महाराज की जय।
सबका मालिक एक है, दूजा नहीं कोई।
हिन्दू मुस्लिम सिख ईसाई, सबको प्रेम सिखाता॥
श्री सच्चिदानंद समर्थ सद्गुरु साईनाथ महाराज की जय॥`
    },
    {
        id: "ashtalakshmi",
        name: "Ashtalakshmi",
        image: "images/asthalakshmi.jpg",
        aarti: `जय अष्टलक्ष्मी माता, आठों रूप धरे।
आदि लक्ष्मी, धान्य लक्ष्मी, धैर्य लक्ष्मी वरदे॥
जय अष्टलक्ष्मी माता॥`
    },
    {
        id: "vaishnodevi",
        name: "Vaishno Devi",
        image: "images/vaishno.jpg",
        aarti: `ॐ जय माता वैष्णोदेवी, मैया जय माता वैष्णोदेवी।
तुम ही हो प्राण हमारे, करो हमें भवसागर से पार॥
ॐ जय माता वैष्णोदेवी॥`
    },
    {
        id: "tirupati",
        name: "Lord Tirupati Balaji",
        image: "images/tirupati.jpg",
        aarti: `ॐ जय जगदीश हरे, बालाजी तिरुपति के स्वामी।
भक्तन के तुम रखवाले, दुख हरण करुणा के धामी॥
ॐ जय जगदीश हरे॥`
    },
    {
        id: "badrinath",
        name: "Lord Badrinath",
        image: "images/badrinath.jpg",
        aarti: `जय बद्रीविशाल लाल, जय बद्रीनारायण।
केदार बद्री धाम के, स्वामी नारायण॥
जय बद्रीविशाल लाल॥`
    },
    {
        id: "kedarnath",
        name: "Lord Kedarnath",
        image: "images/kedarnath.jpg",
        aarti: `ॐ नमः शिवाय, ॐ नमः शिवाय।
केदारनाथ महादेव की जय॥
हिमालय के उत्तुंग शिखर पर, बिराजत शिव शंकर।
कर्पूर गौर भोलेनाथ, पार्वती पति के जयकार॥`
    },
    {
        id: "kanha",
        name: "Lord Kanha",
        image: "images/kanha.jpg",
        aarti: `खाटू श्याम सुंदर, भक्तों के रखवारे।
नाता तेरा, कितना प्यारा॥
श्याम सांवरे, श्याम सांवरे।
खाटू के बाबा, श्याम सांवरे॥`
    },
    {
        id: "govinda",
        name: "Lord Govinda",
        image: "images/govinda.jpg",
        aarti: `गोविंदा गोविंदा, हरे मुरारी।
गोविंदा गोविंदा, राधा प्यारी॥
गोविंदा गोविंदा, मेरा मन होरी।
गोविंदा गोविंदा, लाज रखो मोरी॥`
    }
];

// Adding more deities to reach 50 in total
// for (let i = 0; i < 30; i++) {
//     const deityNum = i + 21;
//     deitiesData.push({
//         id: `deity${deityNum}`,
//         name: `Deity ${deityNum}`,
//         image: "images/default-deity.svg",
//         aarti: `Sample aarti lyrics for Deity ${deityNum}.\nThis would be replaced with actual aarti lyrics.\nMultiple lines of devotional content would appear here.`,
//         aartiEnglish: `Sample English translation for Deity ${deityNum}.\nThis would be replaced with actual English translation.\nMultiple lines of devotional content would appear here.`
//     });
// } 