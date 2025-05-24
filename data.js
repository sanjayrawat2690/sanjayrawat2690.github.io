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

Mata Jaaki Parvati, Pita Mahadeva.`
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
',
                english: '1) Gajanana- Om Gajananaya Namah।
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

जिस घर में तुम रहतीं, सब सद्गुण आता।
सब संभव हो जाता, मन नहीं घबराता॥
ॐ जय लक्ष्मी माता॥

तुम बिन यज्ञ न होते, वस्त्र न कोई पाता।
खान-पान का वैभव, सब तुमसे आता॥
ॐ जय लक्ष्मी माता॥

शुभ-गुण मंदिर सुंदर, क्षीरोदधि-जाता।
रत्न चतुर्दश तुम बिन, कोई नहीं पाता॥
ॐ जय लक्ष्मी माता॥

महालक्ष्मी जी की आरती, जो कोई नर गाता।
उर आनंद समाता, पाप उतर जाता॥
ॐ जय लक्ष्मी माता॥`,
                english: `Om Jai Lakshmi Mata,
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
                title: "यशोदा के नंदलाला",
                hindi: `यशोदा के नंदलाला, श्रीगोपाल बाला।
देवकी के मनमोहन, नंदके दुलारे॥

मोरपंख सिर पर राजे, सोहे गल वैजंती माला।
यमुना के तट पर होते, रास रचाया जिसने गोपियों संग रास रचाया॥`,
                english: `The beloved son of Yashoda, Sri Gopal Bala.
The enchanter of Devaki, the darling of Nanda.

A peacock feather adorns his head, a Vaijayanti garland beautifies his neck.
On the banks of Yamuna, he performed the divine dance with the gopis.`,
                videoLink: "https://youtu.be/EXAMPLE_KRISHNA_SHORT_URL"
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
                english: `Om glory to Lord Shiva Omkara, Lord glory to Shiva Omkara.
Brahma, Vishnu, Sadashiva, sharing half his body with Goddess Parvati.
Om glory to Shiva Omkara.

One-faced, four-faced, five-faced he reigns.
Seated on swan, on Garuda, adorned with the bull as his vehicle.
Om glory to Shiva Omkara.

Two-armed, four-armed, ten-armed he shines.
Beholding the three forms, the people of the three worlds are enchanted.
Om glory to Shiva Omkara.

Wearer of rosary beads, forest garland, and garland of skulls.
Anointed with sandalwood and musk, with ash-covered limbs.
Om glory to Shiva Omkara.

Dressed in white, in yellow, in tiger skin.
Sankara, eternal Shiva, with Parvati by his side.
Om glory to Shiva Omkara.

In his hand he holds a water pot, a discus, and a trident.
Creator of the world, protector of the world, destroyer of the world.
Om glory to Shiva Omkara.

Brahma, Vishnu, Sadashiva, known as indivisible.
Adorned in the syllable Om, these three are one.
Om glory to Shiva Omkara.

Whoever sings the aarti of the Lord of the three qualities,
Says Shivananda Swami, they shall obtain their heart's desire.
Om glory to Shiva Omkara.`,
                videoLink: "https://www.youtube.com/watch?v=EXAMPLE_SHIVA_VIDEO"
            },
            {
                id: "shiva-2",
                title: "शिव तांडव स्तोत्रम्",
                hindi: `जटाटवीगलज्जलप्रवाहपावितस्थले
गलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम्।
डमड्डमड्डमड्डमन्निनादवड्डमर्वयं
चकार चण्डताण्डवं तनोतु नः शिवः शिवम्॥१॥

जटाकटाहसम्भ्रमभ्रमन्निलिम्पनिर्झरी-
विलोलवीचिवल्लरीविराजमानमूर्धनि।
धगद्धगद्धगज्ज्वलल्ललाटपट्टपावके
किशोरचन्द्रशेखरे रतिः प्रतिक्षणं मम॥२॥`,
                english: `From his matted locks, made sacred by the flowing Ganges,
With a snake garland hanging down his neck,
Creating the sound of damaru, resounding loudly,
May Shiva, performing his fierce Tandava dance, bestow prosperity upon us.

In whose head shines the sprinkle of water from the Ganges,
Flowing from his matted hair in constant motion,
With forehead blazing like fire,
May my devotion be ever fixed on the young moon-crested Lord.`
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
                title: "ॐ जय अम्बे गौरी",
                hindi: `ॐ जय अम्बे गौरी, मैया जय श्यामा गौरी।
तुमको निशदिन ध्यावत, हरि ब्रह्मा शिवारी॥
ॐ जय अम्बे गौरी॥

मांग सिंदूर विराजत, टीको मृगमद को।
उज्ज्वल से दोउ नैना, चंद्रवदन नीको॥
ॐ जय अम्बे गौरी॥`,
                english: `Om Glory to Mother Ambe Gauri, Mother Glory to Shyama Gauri.
Day and night you are worshipped by Hari, Brahma, and Shiva.
Om Glory to Mother Ambe Gauri.

Vermilion adorns your parting, a musk mark on your forehead.
Bright are your two eyes, and beautiful is your moon-like face.
Om Glory to Mother Ambe Gauri.`
            }
        ]
    },
    {
        id: "hanuman",
        name: "Lord Hanuman",
        image: "images/hanuman.jpg",
        aarti: `आरती कीजै हनुमान लला की।दुष्ट दलन रघुनाथ कला की॥

जाके बल से गिरिवर कांपे।रोग दोष जाके निकट न झांके॥

अंजनि पुत्र महा बलदाई।सन्तन के प्रभु सदा सहाई॥

दे बीरा रघुनाथ पठाए।लंका जारि सिया सुधि लाए॥

लंका सो कोट समुद्र-सी खाई।जात पवनसुत बार न लाई॥

लंका जारि असुर संहारे।सियारामजी के काज सवारे॥

लक्ष्मण मूर्छित पड़े सकारे।आनि संजीवन प्राण उबारे॥

पैठि पाताल तोरि जम-कारे।अहिरावण की भुजा उखारे॥

बाएं भुजा असुरदल मारे।दाहिने भुजा संतजन तारे॥

सुर नर मुनि आरती उतारें।जय जय जय हनुमान उचारें॥

कंचन थार कपूर लौ छाई।आरती करत अंजना माई॥

जो हनुमानजी की आरती गावे।बसि बैकुण्ठ परम पद पावे॥`,
        aartiEnglish: `Aarti Kije Hanuman Lala Ki।Dusht Dalan Ragunath Kala Ki॥

Jake Bal Se Girivar Kaanpe।Rog Dosh Ja Ke Nikat Na Jhaanke॥

Anjani Putra Maha Baldaaee।Santan Ke Prabhu Sada Sahai॥

De Beera Raghunath Pathaaye।Lanka Jaari Siya Sudhi Laaye॥

Lanka So Kot Samundra-Si Khai।Jaat Pavan Sut Baar Na Lai॥

Lanka Jaari Asur Sanhare।Siyaramji Ke Kaaj Sanvare॥

Lakshman Moorchhit Pade Sakaare।Aani Sajeevan Pran Ubaare॥

Paithi Pataal Tori Jam-kaare।Ahiravan Ke Bhuja Ukhaare॥

Baayen Bhuja Asur Dal Mare।Daahine Bhuja Santjan Tare॥

Sur Nar Muni Aarti Utare।Jai Jai Jai Hanuman Uchaare॥

Kanchan Thaar Kapoor Lau Chhaai।Aarti Karat Anjana Maai॥

Jo Hanumanji Ki Aarti Gaave।Basi Baikunth Param Pad Pave॥`
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