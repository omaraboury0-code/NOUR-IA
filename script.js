// --- Catalogue Complet Beauty Rose Coopérative (53 Produits avec Descriptions) ---
const products = [
    // 1. HUILES VÉGÉTALES & EAUX FLORALES (01 - 10)
    {
        id: 1,
        title: "01. Pure Almond Oil / Huile d'Amande Douce (100ml)",
        category: "huiles",
        price: 65,
        oldPrice: null,
        image: "images/01.jpg",
        badge: "100ml",
        isPromo: false,
        descFr: "Huile d'amande douce, pressée à froid, soin cheveux, douceur et souplesse, éclat naturel, tous types de cheveux, 100ml.",
        descAr: "زيت اللوز العذب الطبيعي، معصورة على البارد، تغذية وتنعيم الشعر، لمعان طبيعي، لجميع أنواع الشعر."
    },
    {
        id: 2,
        title: "02. Eau de Rose Distillée 100% Spray (200ml)",
        category: "huiles",
        price: 50,
        oldPrice: 65,
        image: "images/02.jpg",
        badge: "Spray 200ml",
        isPromo: true,
        descFr: "Eau de rose distillée 100%, soin visage et peau, antirides, soin des yeux, antipyrétique, produit du Maroc, 200ml.",
        descAr: "ماء الورد المقطر 100%، صالح لبشرة الوجه، ضد التجاعيد، علاج العيون، ضد الحمى، منتج مغربي."
    },
    {
        id: 3,
        title: "03. Eau de Rose Première Distillation Bio (250ml)",
        category: "huiles",
        price: 60,
        oldPrice: null,
        image: "images/03.jpg",
        badge: "Bio 250ml",
        isPromo: false,
        descFr: "Eau de rose première distillation, agriculture biologique, antirides, soulage les yeux, contre la fièvre, Kelaat M'gouna, Maroc, 250ml.",
        descAr: "ماء الورد المقطر، التقطير الأول، فلاحة بيولوجية، ضد التجاعيد، قلعة مكونة، منتوج مغربي."
    },
    {
        id: 4,
        title: "04. Mélange 10 Huiles aux Plantes",
        category: "huiles",
        price: 85,
        oldPrice: 100,
        image: "images/04.jpg",
        badge: "10 Huiles",
        isPromo: true,
        descFr: "10 huiles aux plantes, soin capillaire fortifiant, huile aux herbes naturelles, Kelaat M'gouna, BeautyRose Coopérative.",
        descAr: "10 زيوت بالأعشاب الطبيعية، تقوية وتغذية الشعر، قلعة مكونة، تعاونية بيوتي روز."
    },
    {
        id: 5,
        title: "05. Huile de Lavande / زيت الخزامة",
        category: "huiles",
        price: 65,
        oldPrice: null,
        image: "images/05.jpg",
        badge: "Naturel",
        isPromo: false,
        descFr: "Huile de lavande naturelle, soin apaisant peau et cheveux, aromathérapie, Kelaat M'gouna.",
        descAr: "زيت الخزامة الطبيعي، مهدئ للبشرة والشعر، قلعة مكونة."
    },
    {
        id: 6,
        title: "06. Huile d'Amande Bio / زيت اللوز بيو",
        category: "huiles",
        price: 75,
        oldPrice: null,
        image: "images/06.jpg",
        badge: "100% Bio",
        isPromo: false,
        descFr: "Huile d'amande 100% bio, hydratation peau et cheveux, soin nourrissant naturel, Kelaat M'gouna.",
        descAr: "زيت اللوز بيو 100%، ترطيب وتغذية البشرة والشعر، قلعة مكونة."
    },
    {
        id: 7,
        title: "07. Huile de Figues de Barbarie / زيت التين الشوكي",
        category: "huiles",
        price: 140,
        oldPrice: 170,
        image: "images/07.jpg",
        badge: "Anti-Âge",
        isPromo: true,
        descFr: "Huile de pépins de figue de barbarie, anti-âge naturel, régénérant visage, Kelaat M'gouna.",
        descAr: "زيت التين الشوكي، مضاد للشيخوخة والتجاعيد، تجديد خلايا البشرة، قلعة مكونة."
    },
    {
        id: 8,
        title: "08. Huile de Sésame / زيت السمسم",
        category: "huiles",
        price: 65,
        oldPrice: null,
        image: "images/08.jpg",
        badge: "Naturel",
        isPromo: false,
        descFr: "Huile de sésame naturelle, protection solaire légère, soin nourrissant cheveux et corps, Kelaat M'gouna.",
        descAr: "زيت السمسم الطبيعي، تغذية وحماية البشرة والشعر، قلعة مكونة."
    },
    {
        id: 9,
        title: "09. Sidr Oil / زيت السدر (100ml)",
        category: "huiles",
        price: 75,
        oldPrice: null,
        image: "images/09.jpg",
        badge: "100ml",
        isPromo: false,
        descFr: "Huile de jujubier (Sidr), soin purifiant peau et cheveux, fortification capillaire, 100ml.",
        descAr: "زيت السدر الطبيعي للبشرة والشعر، تقوية بصيلات الشعر وتنقية البشرة."
    },
    {
        id: 10,
        title: "10. Huile de Réglisse / زيت عرق السوس",
        category: "huiles",
        price: 80,
        oldPrice: 95,
        image: "images/10.jpg",
        badge: "Éclat",
        isPromo: true,
        descFr: "Huile de réglisse, unifiant du teint, soin éclaircissant naturel, anti-taches, Kelaat M'gouna.",
        descAr: "زيت عرق السوس، تفتيح وتوحيد لون البشرة، إزالة التصبغات، قلعة مكونة."
    },

    // 2. CRÈMES DE SOIN, BEURRES & BAUMES (11 - 22)
    {
        id: 11,
        title: "11. Crème Anti-Cernes à base d'Huile de Ricin (50ml)",
        category: "cremes",
        price: 60,
        oldPrice: null,
        image: "images/11.jpg",
        badge: "50ml",
        isPromo: false,
        descFr: "Crème anti-cernes, contour des yeux, huile de ricin, hydratation contour des yeux, soin femme, 50ml.",
        descAr: "كريم مزيل للهالات السوداء بزيت الخروع، ترطيب محيط العين، للنساء."
    },
    {
        id: 12,
        title: "12. Crème Hydratante Vitamine E & Huile de Rose (30g)",
        category: "cremes",
        price: 55,
        oldPrice: null,
        image: "images/12.jpg",
        badge: "30g",
        isPromo: false,
        descFr: "Crème hydratante et nourrissante, vitamine E, huile de rose, soin visage, tous types de peaux, 30g.",
        descAr: "كريم مرطب ومغذي فيتامين E، زيت الورد، لجميع أنواع البشرة."
    },
    {
        id: 13,
        title: "13. Beurre de Karité / زبدة الشيا (150g)",
        category: "cremes",
        price: 85,
        oldPrice: 100,
        image: "images/13.jpg",
        badge: "150g",
        isPromo: true,
        descFr: "Beurre de karité pur, hydratation intense visage, corps et cheveux, nutrition profonde, 150g.",
        descAr: "زبدة الشيا الطبيعية، ترطيب عميق للوجه الجسم والشعر، 150 غرام."
    },
    {
        id: 14,
        title: "14. Crème Hydratante à l'Encens Masculin / اللبان الذكر (100g)",
        category: "cremes",
        price: 70,
        oldPrice: null,
        image: "images/14.jpg",
        badge: "100g",
        isPromo: false,
        descFr: "Crème hydratante à l'oliban (encens masculin), raffermissant, visage, corps et mains, Kelaat M'gouna, 100g.",
        descAr: "كريم باللبان الذكر، للوجه والجسم واليدين شد وترطيب البشرة، قلعة مكونة."
    },
    {
        id: 15,
        title: "15. Crème Hydratante Antirides Huile d'Amande (100g)",
        category: "cremes",
        price: 70,
        oldPrice: null,
        image: "images/15.jpg",
        badge: "100g",
        isPromo: false,
        descFr: "Crème hydratante antirides à l'huile d'amande, soin visage, corps et mains, Kelaat M'gouna, 100g.",
        descAr: "كريم بزيت اللوز، مضاد للتجاعيد، للوجه والجسم واليدين، قلعة مكونة."
    },
    {
        id: 16,
        title: "16. Crème Hydratante à l'Aker Fassi (100g)",
        category: "cremes",
        price: 70,
        oldPrice: 85,
        image: "images/16.jpg",
        badge: "100g",
        isPromo: true,
        descFr: "Crème hydratante à l'aker fassi (coquelicot), soin revitalisant des pieds, effet rosé naturel, visage, corps et mains, 100g.",
        descAr: "كريم بالعكر الفاسي لتوريد القدمين وترطيب الوجه والجسم واليدين، قلعة مكونة."
    },
    {
        id: 17,
        title: "17. Crème Hydratante à l'Huile d'Argan (100g)",
        category: "cremes",
        price: 70,
        oldPrice: null,
        image: "images/17.jpg",
        badge: "100g",
        isPromo: false,
        descFr: "Crème hydratante à l'huile d'argan, soin nourrissant visage, corps et mains, Kelaat M'gouna, 100g.",
        descAr: "كريم بزيت الأركان، لترطيب وتغذية البشرة، للوجه والجسم واليدين، قلعة مكونة."
    },
    {
        id: 18,
        title: "18. Crème Hydratante à l'Huile de Réglisse (100g)",
        category: "cremes",
        price: 70,
        oldPrice: null,
        image: "images/18.jpg",
        badge: "100g",
        isPromo: false,
        descFr: "Crème hydratante à l'huile de réglisse, soin éclaircissant et unifiant, visage, corps et mains, Kelaat M'gouna, 100g.",
        descAr: "كريم بزيت عرق السوس، لترطيب وتفتيح البشرة، للوجه والجسم واليدين، قلعة مكونة."
    },
    {
        id: 19,
        title: "19. Glycerin Cream / كريم الجلسرين الأصلي (100g)",
        category: "cremes",
        price: 65,
        oldPrice: null,
        image: "images/19.jpg",
        badge: "100g",
        isPromo: false,
        descFr: "Crème à la glycérine originale, hydratation et protection des peaux sèches, Kelaat M'gouna, 100g.",
        descAr: "كريم الجلسرين الأصلي ترطيب وحماية البشرة الجافة، قلعة مكونة، 100 غرام."
    },
    {
        id: 20,
        title: "20. Beurre de Fenugrec / زبدة الحلبة (150g)",
        category: "cremes",
        price: 85,
        oldPrice: 100,
        image: "images/20.jpg",
        badge: "150g",
        isPromo: true,
        descFr: "Beurre de fenugrec naturel, soin raffermissant et galbant buste et hanches, 150g.",
        descAr: "زبدة الحلبة الطبيعية، خاصة لتكبير وشد الأرداف والصدر، 150 غرام."
    },
    {
        id: 21,
        title: "21. Crème Massage Graisse de Dromadaire (100g)",
        category: "cremes",
        price: 75,
        oldPrice: null,
        image: "images/21.jpg",
        badge: "100g",
        isPromo: false,
        descFr: "Crème de massage à la bosse de dromadaire et aux huiles essentielles, soulagement articulaire et musculaire, 100g.",
        descAr: "كريم مساج بذروة الجمل والزيوت الأساسية، لتخفيف آلام المفاصل والعضلات، 100 غرام."
    },
    {
        id: 22,
        title: "22. Balm Lips / مورد الخدود والشفاه",
        category: "cremes",
        price: 45,
        oldPrice: 55,
        image: "images/22.jpg",
        badge: "100% Naturel",
        isPromo: true,
        descFr: "Teinte naturelle lèvres et joues, 100% naturel, sans produits chimiques, effet bonne mine rosé, tous types de peaux.",
        descAr: "مورد الخدود والشفاه الطبيعي 100%، خالي من المواد الكيماوية، لون وردي طبيعي ثابت."
    },

    // 3. SOINS CAPILLAIRES (23 - 32)
    {
        id: 23,
        title: "23. Shampoing Traitant Antichute à la Rose (200ml)",
        category: "cheveux",
        price: 60,
        oldPrice: null,
        image: "images/23.jpg",
        badge: "200ml",
        isPromo: false,
        descFr: "Shampoing à la rose, soin antichute, hydrate le cuir chevelu, apporte de la brillance, 100% origine naturelle, 200ml.",
        descAr: "شامبون معالج لتساقط الشعر بالورد يرطب فروة الشعر ويضفي لمعاناً، لجميع أنواع الشعر."
    },
    {
        id: 24,
        title: "24. Shampoing Traitant au Cade / العرعار (200ml)",
        category: "cheveux",
        price: 60,
        oldPrice: null,
        image: "images/24.jpg",
        badge: "200ml",
        isPromo: false,
        descFr: "Shampoing au cade, antipelliculaire, apaise démangeaisons et irritations du cuir chevelu, revitalise la fibre capillaire, 200ml.",
        descAr: "شامبون مرطب وعلاجي بالعرعار (الكاد)، يقلل القشرة ويخفف تهيج فروة الرأس والحكة."
    },
    {
        id: 25,
        title: "25. Shampoing Antipelliculaire au Romarin / إكليل الجبل (200ml)",
        category: "cheveux",
        price: 60,
        oldPrice: null,
        image: "images/25.jpg",
        badge: "200ml",
        isPromo: false,
        descFr: "Shampoing au romarin, antipelliculaire, hydrate le cuir chevelu, brillance des cheveux, 100% ingrédients naturels, 200ml.",
        descAr: "شامبون ضد القشرة بإكليل الجبل (اليارير)، يرطب فروة الشعر ويمنح لمعاناً طبيعياً."
    },
    {
        id: 26,
        title: "26. Shampoing Hydratant à l'Argan (200ml)",
        category: "cheveux",
        price: 60,
        oldPrice: null,
        image: "images/26.jpg",
        badge: "200ml",
        isPromo: false,
        descFr: "Shampoing à l'argan, hydrate le cuir chevelu, ajoute de la brillance, tous types de cheveux, 100% naturel, 200ml.",
        descAr: "شامبون مرطب للشعر بزيت الأركان يرطب فروة الشعر ويضفي لمعاناً، لجميع أنواع الشعر."
    },
    {
        id: 27,
        title: "27. Shampoing Hydratant au Coco (200ml)",
        category: "cheveux",
        price: 60,
        oldPrice: null,
        image: "images/27.jpg",
        badge: "200ml",
        isPromo: false,
        descFr: "Shampoing à la noix de coco, hydratation intense et brillance, tous types de cheveux, 100% naturel, 200ml.",
        descAr: "شامبون مرطب للشعر بجوز الهند، يرطب فروة الشعر ويمنح لمعاناً، لجميع أنواع الشعر."
    },
    {
        id: 28,
        title: "28. Shampoing Traitant au Chanvre / زيت القنب (200ml)",
        category: "cheveux",
        price: 65,
        oldPrice: 75,
        image: "images/28.jpg",
        badge: "200ml",
        isPromo: true,
        descFr: "Shampoing à l'huile de chanvre, soin antichute, hydrate le cuir chevelu, brillance et force, 100% naturel, 200ml.",
        descAr: "شامبون معالج لتساقط الشعر بزيت القنب يرطب فروة الشعر ويقوي البصيلات."
    },
    {
        id: 29,
        title: "29. Hair Styling Cream / كريم بديل الزيت للشعر الجاف",
        category: "cheveux",
        price: 70,
        oldPrice: null,
        image: "images/29.jpg",
        badge: "Cheveux Secs",
        isPromo: false,
        descFr: "Crème coiffante substitut d'huile, soin hydratant pour cheveux secs, douceur et éclat à la coiffure.",
        descAr: "كريم بديل الزيت للشعر كريم مرطب للشعر الجاف، نعومة ولمعان للتصفيف."
    },
    {
        id: 30,
        title: "30. Poudre d'Indigo Naturel / الأنديكو الخالص (150g)",
        category: "cheveux",
        price: 75,
        oldPrice: null,
        image: "images/30.jpg",
        badge: "150g",
        isPromo: false,
        descFr: "Indigo naturel pur, coloration végétale naturelle, sans additifs chimiques, couvre les cheveux blancs, 150g.",
        descAr: "الأنديكو الخالص، صباغة طبيعية دون إضافات كيماوية، تغطية الشيب بلون أسود طبيعي."
    },
    {
        id: 31,
        title: "31. Poudre d'Indigo Naturel - Mode d'Emploi (150g)",
        category: "cheveux",
        price: 75,
        oldPrice: null,
        image: "images/31.jpg",
        badge: "Guide Inclus",
        isPromo: false,
        descFr: "Guide d'utilisation indigo naturel, coloration noire ou brune (en mélange avec le henné), lutte contre les cheveux blancs prématurés.",
        descAr: "عشبة الأنديكو الطبيعية، لصبغ الشعر والتخلص من الشيب المبكر بطريقة طبيعية وآمنة، طريقة الاستعمال."
    },
    {
        id: 32,
        title: "32. Henné Cheveux aux Herbes Naturelles (150g)",
        category: "cheveux",
        price: 70,
        oldPrice: 85,
        image: "images/32.jpg",
        badge: "150g",
        isPromo: true,
        descFr: "Henné cheveux et mélange d'herbes naturelles, antipelliculaire, antichute, masque capillaire nourrissant et brillance, 150g.",
        descAr: "حناء الشعر السحرية بالأعشاب الطبيعية، ضد القشرة وتساقط الشعر، تغذية ولمعان، 150 غرام."
    },

    // 4. HYGIÈNE, BAIN, HAMMAM & SOINS TRADITIONNELS (33 - 48)
    {
        id: 33,
        title: "33. Doucha Body Wash Pêche & Rose Gel Douche (400ml)",
        category: "hygiene",
        price: 85,
        oldPrice: null,
        image: "images/33.jpg",
        badge: "400ml",
        isPromo: false,
        descFr: "Gel douche hydratant pêche et rose, fraîcheur quotidienne, tous types de peaux, 400ml.",
        descAr: "جيل دوش بالخوخ والورد، ترطيب وانتعاش يومي، لجميع أنواع البشرة، 400 مل."
    },
    {
        id: 34,
        title: "34. Gel Douche Fruits / جيل دوش بالفواكه (200ml)",
        category: "hygiene",
        price: 50,
        oldPrice: null,
        image: "images/34.jpg",
        badge: "200ml",
        isPromo: false,
        descFr: "Gel douche aux fruits, calmant et adoucissant, riche en vitamines B5, 100% fraîcheur, 200ml.",
        descAr: "جيل دوش بالفواكه، مهدئ ومنعم للبشرة، غني بالفيتامينات، انتعاش 100%."
    },
    {
        id: 35,
        title: "35. Gel Douche Fraise / جيل دوش بالفراولة (200ml)",
        category: "hygiene",
        price: 50,
        oldPrice: null,
        image: "images/35.jpg",
        badge: "200ml",
        isPromo: false,
        descFr: "Gel douche à la fraise, calmant et adoucissant, riche en vitamines, 100% fraîcheur, 200ml.",
        descAr: "جيل دوش بالفراولة، مهدئ ومنعم للبشرة، غني بالفيتامينات، انتعاش 100%."
    },
    {
        id: 36,
        title: "36. Gel Douche Fresh Menthe / جيل دوش بالنعناع (200ml)",
        category: "hygiene",
        price: 50,
        oldPrice: null,
        image: "images/36.jpg",
        badge: "200ml",
        isPromo: false,
        descFr: "Gel douche frais à la menthe, effet glacé revitalisant, calmant et adoucissant, riche en vitamines, 200ml.",
        descAr: "جيل دوش بالنعناع المنعش مهدئ ومنعم غني بالفيتامينات، انتعاش 100%."
    },
    {
        id: 37,
        title: "37. Gel Douche Rose / جيل دوش بالورد (200ml)",
        category: "hygiene",
        price: 50,
        oldPrice: null,
        image: "images/37.jpg",
        badge: "200ml",
        isPromo: false,
        descFr: "Gel douche à la rose, calmant et adoucissant, riche en vitamines, 100% fraîcheur, 200ml.",
        descAr: "جيل دوش بالورد مهدئ ومنعم للبشرة، غني بالفيتامينات، انتعاش 100%."
    },
    {
        id: 38,
        title: "38. Gel Douche Aloe Vera / جيل دوش بالصبار (200ml)",
        category: "hygiene",
        price: 50,
        oldPrice: null,
        image: "images/38.jpg",
        badge: "200ml",
        isPromo: false,
        descFr: "Gel douche à l'aloe vera, calmant, hydratant et adoucissant, riche en vitamines, 200ml.",
        descAr: "جيل دوش بالصبار (الألوفيرا)، مهدئ ومرطب ومنعم للبشرة، غني بالفيتامينات."
    },
    {
        id: 39,
        title: "39. Savon Solide au Lait d'Ânesse (80g)",
        category: "hygiene",
        price: 40,
        oldPrice: null,
        image: "images/39.jpg",
        badge: "80g",
        isPromo: false,
        descFr: "Savon solide au lait d'ânesse, soin doux visage et corps, hydratant et régénérant, 80g.",
        descAr: "صابون حليب الأتان الطبيعي للوجه والجسم، ترطيب وتنعيم البشرة، 80 غرام."
    },
    {
        id: 40,
        title: "40. Tabrima à la Rose et aux Herbes / تبريمة بالورد والأعشاب",
        category: "hygiene",
        price: 65,
        oldPrice: 80,
        image: "images/40.jpg",
        badge: "Hammam",
        isPromo: true,
        descFr: "Tabrima marocaine 100% naturelle à la rose et aux herbes, gommage corps hammam, éclat et douceur de la peau.",
        descAr: "تبريمة مغربية بالورد والأعشاب الطبيعية 100%، تقشير وتوحيد لون الجسم في الحمام."
    },
    {
        id: 41,
        title: "41. Ghassoul Aker Fassi / غسول العكر الفاسي (100ml)",
        category: "hygiene",
        price: 60,
        oldPrice: null,
        image: "images/41.jpg",
        badge: "100ml",
        isPromo: false,
        descFr: "Ghassoul à l'aker fassi, embellissement et éclat rosé du corps, soin hammam marocain, 100ml.",
        descAr: "غسول العكر الفاسي لتوريد وتجميل الجسم منتوج مغربي طبيعي 100 مل."
    },
    {
        id: 42,
        title: "42. Duo Aker Fassi & Nila Sahraoui",
        category: "hygiene",
        price: 75,
        oldPrice: 90,
        image: "images/42.jpg",
        badge: "Duo",
        isPromo: true,
        descFr: "Poudre d'aker fassi et nila sahraoui authentique, soin éclaircissant et adoucissant pour une peau lisse et lumineuse.",
        descAr: "العكر الفاسي الأصلي والنيلة الصحراوية، لبشرة ناعمة وبيضاء ومشرقة."
    },
    {
        id: 43,
        title: "43. Gel Nettoyant Moussant pour Pieds (150ml)",
        category: "hygiene",
        price: 65,
        oldPrice: null,
        image: "images/43.jpg",
        badge: "150ml",
        isPromo: false,
        descFr: "Mousse nettoyante pour pieds, nettoie en profondeur et neutralise les mauvaises odeurs, 150ml.",
        descAr: "رغوة منظفة للقدمين، ينظف ويزيل الروائح الكريهة، 150 مل."
    },
    {
        id: 44,
        title: "44. Lait Déodorant Yara-Ngh Protection 48h (75ml)",
        category: "hygiene",
        price: 55,
        oldPrice: null,
        image: "images/44.jpg",
        badge: "48h",
        isPromo: false,
        descFr: "Lait déodorant anti-transpirant et anti-odeurs, protection 48 heures, formule douce sans alcool, 75ml.",
        descAr: "حليب مزيل للعرق يارا، حماية 48 ساعة ضد التعرق والروائح، خالي من الكحول، 75 مل."
    },
    {
        id: 45,
        title: "45. Shaving Cream à la Caféine / كريم الحلاقة (400ml)",
        category: "hygiene",
        price: 80,
        oldPrice: null,
        image: "images/45.jpg",
        badge: "400ml",
        isPromo: false,
        descFr: "Crème de rasage riche en antioxydants et caféine d'origine naturelle, rasage doux et apaisant, 400ml.",
        descAr: "كريم الحلاقة للرجال غني بمضادات الأكسدة والكافيين الطبيعي، 400 مل."
    },
    {
        id: 46,
        title: "46. Khôl Naturel aux Noyaux de Dattes / كحل بلدي (7g)",
        category: "hygiene",
        price: 45,
        oldPrice: 60,
        image: "images/46.jpg",
        badge: "7g",
        isPromo: true,
        descFr: "Khôl traditionnel marocain naturel à base de noyaux de dattes, maquillage et soin des yeux, 7g.",
        descAr: "كحل بلدي طبيعي محضر بنواة التمر، لتجميل وتقوية العيون والرموش 7 غرام."
    },
    {
        id: 47,
        title: "47. Écorce de Noyer / Souak Naturel / سواك مغربي طبيعي",
        category: "hygiene",
        price: 35,
        oldPrice: null,
        image: "images/47.jpg",
        badge: "Naturel",
        isPromo: false,
        descFr: "Souak naturel marocain (écorce de noyer), blanchiment naturel des dents, soin des gencives, Beauty Rose coopérative.",
        descAr: "سواك مغربي طبيعي (لحاء الجوز)، تبييض الأسنان والعناية بالفم واللثة، منتوج طبيعي."
    },
    {
        id: 48,
        title: "48. Mascara Fortifiant Cils et Sourcils (10ml)",
        category: "hygiene",
        price: 55,
        oldPrice: null,
        image: "images/48.jpg",
        badge: "10ml",
        isPromo: false,
        descFr: "Mascara soin fortifiant et densifiant pour cils et sourcils, formule naturelle, 10ml.",
        descAr: "مسكرة مكثفة ومقوية للرموش والحواجب بتركيبة طبيعية، 10 مل."
    },

    // 5. PARFUMS, MUSCS & MAKHMARIYA (49 - 53)
    {
        id: 49,
        title: "49. Eau de Parfum Rayan / عطر ريان (30ml)",
        category: "parfums",
        price: 110,
        oldPrice: 130,
        image: "images/49.jpg",
        badge: "30ml",
        isPromo: true,
        descFr: "Eau de parfum Rayan, fragrance orientale raffinée et longue tenue, flacon 30ml.",
        descAr: "عطر ريان، أو دو بارفان برائحة شرقية فاخرة وثابتة، 30 مل."
    },
    {
        id: 50,
        title: "50. Musc Noir Roll-on Parfum / مسك أسود معطر (6ml)",
        category: "parfums",
        price: 45,
        oldPrice: null,
        image: "images/50.jpg",
        badge: "6ml",
        isPromo: false,
        descFr: "Musc noir, parfum roll-on concentré, huile parfumée orientale sans alcool, 6ml.",
        descAr: "مسك أسود معطر رول أون عطر شرقي مركز، مسك الطهارة الأسود، 6 مل."
    },
    {
        id: 51,
        title: "51. Parfum Roll-on Mille Roses / عطر ألف وردة",
        category: "parfums",
        price: 50,
        oldPrice: null,
        image: "images/51.jpg",
        badge: "Rose",
        isPromo: false,
        descFr: "Parfum mille roses, roll-on parfumé, huile parfumée à la rose naturelle, fragrance florale sans alcool.",
        descAr: "عطر ألف وردة مسك الورد عطر رول أون رائحة الورد الطبيعي."
    },
    {
        id: 52,
        title: "52. Makhmariya Yaqout / مخمرية ياقوت للجسم والشعر",
        category: "parfums",
        price: 75,
        oldPrice: 90,
        image: "images/52.jpg",
        badge: "Corps & Cheveux",
        isPromo: true,
        descFr: "Makhmariya parfumée Yaqout pour le corps et les cheveux, parfum oriental doux et longue durée.",
        descAr: "مخمرية ياقوت لتعطير وترطيب الجسم والشعر برائحة شرقية جذابة وثابتة."
    },
    {
        id: 53,
        title: "53. Makhmariya Amira Al Arab / مخمرية أميرة العرب (50g)",
        category: "parfums",
        price: 80,
        oldPrice: null,
        image: "images/53.jpg",
        badge: "50g",
        isPromo: false,
        descFr: "Makhmariya hydratante et parfumante Amira Al Arab pour corps et cheveux, texture fondante, 50g.",
        descAr: "مخمرية أميرة العرب مرطبة ومعطرة للجسم والشعر، 50 غرام."
    }
];

// --- State Management ---
let cart = [];
let activeCategory = "all";

// --- DOM Elements ---
const productsGrid = document.getElementById('productsGrid');
const resultsCounter = document.getElementById('resultsCounter');
const cartToggleBtn = document.getElementById('cartToggle');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartCount = document.getElementById('cartCount');
const drawerCount = document.getElementById('drawerCount');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const checkoutBtn = document.getElementById('checkoutBtn');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const navLinks = document.querySelectorAll('#navCategoryLinks a');
const catCircles = document.querySelectorAll('.cat-circle-item');
const toastContainer = document.getElementById('toastContainer');

// Create Quick View Modal dynamically if not in HTML
let quickViewModal = document.getElementById('quickViewModal');
if (!quickViewModal) {
    quickViewModal = document.createElement('div');
    quickViewModal.id = 'quickViewModal';
    quickViewModal.className = 'quick-view-modal';
    quickViewModal.innerHTML = `
        <div class="modal-overlay" onclick="closeModal()"></div>
        <div class="modal-content">
            <button type="button" class="modal-close-btn" onclick="closeModal()" aria-label="Fermer"><i class="fa-solid fa-xmark"></i></button>
            <div class="modal-body" id="modalBody"></div>
        </div>
    `;
    document.body.appendChild(quickViewModal);
}

// --- Quick View Modal Trigger ---
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="modal-grid">
            <img src="${product.image}" alt="${product.title}" class="modal-img">
            <div>
                <span class="product-category">${product.category} ${product.badge ? `• ${product.badge}` : ''}</span>
                <h2 class="modal-title">${product.title}</h2>
                <div class="modal-price">
                    ${product.price} MAD
                    ${product.oldPrice ? `<span class="old-price">${product.oldPrice} MAD</span>` : ''}
                </div>
                <div class="modal-desc-fr"><strong>FR:</strong> ${product.descFr}</div>
                <div class="modal-desc-ar"><strong>AR:</strong> ${product.descAr}</div>
                <button type="button" class="btn btn-primary" style="width: 100%;" onclick="addToCart(${product.id}); closeModal();">
                    Ajouter au panier
                </button>
            </div>
        </div>
    `;

    quickViewModal.classList.add('active');
}

function closeModal() {
    quickViewModal.classList.remove('active');
}

// --- Render Products ---
function renderProducts(items) {
    if (!productsGrid) return;
    productsGrid.innerHTML = '';
    if (resultsCounter) {
        resultsCounter.innerText = `${items.length} produit(s) affiché(s)`;
    }

    if (items.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: var(--gray-600); padding: 24px;">Aucun produit trouvé.</p>';
        return;
    }

    items.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <img src="${product.image}" alt="${product.title}" class="product-img" style="cursor: pointer;" onclick="openQuickView(${product.id})">
            <span class="product-category">${product.category}</span>
            <h3 class="product-title" style="cursor: pointer;" onclick="openQuickView(${product.id})">${product.title}</h3>

            <p class="product-desc-fr">${product.descFr}</p>
            <p class="product-desc-ar">${product.descAr}</p>

            <div class="product-prices">
                <span class="current-price">${product.price} MAD</span>
                ${product.oldPrice ? `<span class="old-price">${product.oldPrice} MAD</span>` : ''}
            </div>

            <div class="product-card-actions">
                <button type="button" class="add-to-cart-btn" onclick="addToCart(${product.id})">Ajouter</button>
                <button type="button" class="details-icon-btn" onclick="openQuickView(${product.id})" title="Détails" aria-label="Détails">
                    <i class="fa-regular fa-eye"></i>
                </button>
            </div>
        `;

        productsGrid.appendChild(productCard);
    });
}

// --- Apply Filter & Search ---
function applyFilters() {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

    const filtered = products.filter(p => {
        const matchesCategory =
            activeCategory === "all" ||
            (activeCategory === "promo" && p.isPromo) ||
            p.category === activeCategory;

        const matchesSearch =
            !query ||
            p.title.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query) ||
            p.descFr.toLowerCase().includes(query) ||
            p.descAr.toLowerCase().includes(query);

        return matchesCategory && matchesSearch;
    });

    renderProducts(filtered);
}

function setActiveCategory(category) {
    activeCategory = category;

    filterBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === category);
    });

    navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.category === category);
    });

    applyFilters();
}

// --- Cart Operations ---
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    showToast(`"${product.title}" ajouté au panier`);
}

function changeQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartUI();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.innerText = totalCount;
    if (drawerCount) drawerCount.innerText = totalCount;

    if (!cartItemsContainer) return;
    cartItemsContainer.innerHTML = '';
    let totalSum = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; color: var(--gray-600);">Votre panier est vide.</p>';
    }

    cart.forEach(item => {
        totalSum += item.price * item.quantity;
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">${item.price} MAD</div>
                <div class="qty-controls">
                    <button type="button" class="qty-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
                    <span class="qty-value">${item.quantity}</span>
                    <button type="button" class="qty-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button type="button" class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Supprimer">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;
        cartItemsContainer.appendChild(itemEl);
    });

    if (cartTotalPrice) cartTotalPrice.innerText = `${totalSum} MAD`;
}

// --- WhatsApp Checkout (Numéro: 0702262913 -> 212702262913) ---
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showToast("السلة فارغة، أضف منتجاً أولاً.");
            return;
        }

        const customerName = document.getElementById('customerName')?.value.trim() || '';
        const customerCity = document.getElementById('customerCity')?.value.trim() || '';

        const phone = "212702262913";
        let total = 0;
        const lines = cart.map(item => {
            const sub = item.price * item.quantity;
            total += sub;
            return `- ${item.title} (${item.quantity} x ${item.price} MAD = ${sub} MAD)`;
        });

        let messageParts = [
            "السلام عليكم، بغيت نطلب المنتجات التالية من المتجر:"
        ];

        if (customerName) messageParts.push(`الاسم: ${customerName}`);
        if (customerCity) messageParts.push(`المدينة/العنوان: ${customerCity}`);

        messageParts.push("المنتجات:");
        messageParts = messageParts.concat(lines);
        messageParts.push(`المجموع الإجمالي: ${total} MAD`);

        const message = messageParts.join("\n");
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
    });
}

// --- Cart Drawer Controls ---
function openCart() {
    if (cartDrawer) cartDrawer.classList.add('active');
    if (cartOverlay) cartOverlay.classList.add('active');
}

function closeCart() {
    if (cartDrawer) cartDrawer.classList.remove('active');
    if (cartOverlay) cartOverlay.classList.remove('active');
}

if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCart);
if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

// --- Event Listeners ---
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => setActiveCategory(btn.dataset.filter));
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveCategory(link.dataset.category);
        const section = document.getElementById('products-section');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    });
});

catCircles.forEach(circle => {
    circle.addEventListener('click', () => {
        setActiveCategory(circle.dataset.category);
        const section = document.getElementById('products-section');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    });
});

if (searchInput) searchInput.addEventListener('input', applyFilters);

// --- Toast Notifications ---
function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// --- Initial Render ---
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    renderProducts(products);
});
