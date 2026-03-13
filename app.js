'use strict';

// ===== DATA =====
const VERB_FAMILIES = [
  { name: 'geben', label: 'geben-ის ოჯახი' },
  { name: 'gehen', label: 'gehen-ის ოჯახი' },
];

const VERBS = [
  // ===== GEBEN =====
  {
    verb: 'geben', meta: 'gibt · gab · hat gegeben', meaning: 'მიცემა, გადაცემა', noun: 'die Gabe — საჩუქარი; ნიჭი', nounExamples: [{"de": "Sie hat eine außergewöhnliche Gabe für Musik.", "ka": "მას მუსიკისადმი განსაკუთრებული ნიჭი აქვს."}, {"de": "Die Gabe des alten Mannes an den Tempel war ein goldenes Kreuz.", "ka": "მოხუცის საჩუქარი ტაძრისთვის ოქროს ჯვარი იყო."}], family: 'geben',
    examples: [
      { de: 'Bitte gib mir das Salz!', ka: 'გთხოვ, მარილი მომეცი!' },
      { de: 'Drei mal drei gibt neun.', ka: 'სამჯერ სამი ცხრაა.' },
      { de: 'Wie viel Trinkgeld gibt man in Georgien normalerweise?', ka: 'რამდენ სასმელ ფულს იძლევიან ჩვეულებრივ საქართველოში?' },
      { de: 'Ich gebe dir mein Versprechen — ich komme pünktlich.', ka: 'სიტყვას გაძლევ — დროულად მოვალ.' },
    ]
  },
  {
    verb: 'sich geben', meta: 'reflexiv', meaning: 'თავისთავად გაივლის', family: 'geben',
    examples: [
      { de: 'Das gibt sich bestimmt wieder.', ka: 'ეს ნამდვილად თავისთავად გაივლის.' },
    ]
  },
  {
    verb: 'es gibt', meta: 'unpersönlich', meaning: 'არის, არსებობს', family: 'geben',
    examples: [
      { de: "Was gibt's Neues bei dir?", ka: 'რა სიახლეა შენთან?' },
      { de: 'Es gibt dieses Jahr besonders viel Obst im Garten.', ka: 'წელს ბაღში განსაკუთრებით ბევრი ხილია.' },
    ]
  },
  {
    verb: 'abgeben', meta: 'gibt ab · gab ab · abgegeben', meaning: 'ჩაბარება; გადაცემა', noun: 'die Abgabe — გადასახადი; ჩაბარება', nounExamples: [{"de": "Die Abgabe der Masterarbeit ist für Freitag geplant.", "ka": "სამაგისტრო ნაშრომის ჩაბარება პარასკევისთვისაა დაგეგმილი."}, {"de": "Auf Benzin werden in Deutschland hohe Abgaben erhoben.", "ka": "გერმანიაში ბენზინზე მაღალი გადასახადები ირიცხება."}], family: 'geben',
    examples: [
      { de: 'Bitte geben Sie Ihren Ausweis an der Rezeption ab.', ka: 'გთხოვთ პირადობის მოწმობა რეგისტრატურაში ჩააბაროთ.' },
      { de: 'Alle Schüler müssen ihre Prüfung bis 12 Uhr abgeben.', ka: 'ყველა მოსწავლემ გამოცდა 12 საათამდე უნდა ჩააბაროს.' },
    ]
  },
  {
    verb: 'angeben', meta: 'gibt an · gab an · angegeben', meaning: 'მითითება; ტრაბახი', noun: 'die Angabe — მითითება; der Angeber — ტრაბახა', nounExamples: [{"de": "Ohne genaue Angabe der Adresse kann das Paket nicht zugestellt werden.", "ka": "მისამართის ზუსტი მითითების გარეშე ამანათი ვერ ჩაბარდება."}, {"de": "Dieser Angeber redet den ganzen Abend über sein Auto.", "ka": "ეს ტრაბახა მთელ საღამოს თავის მანქანაზე ლაპარაკობს."}], family: 'geben',
    examples: [
      { de: 'Bitte geben Sie Ihre Telefonnummer an.', ka: 'გთხოვთ მიუთითოთ თქვენი ტელეფონის ნომერი.' },
      { de: 'Hör auf anzugeben!', ka: 'ნუ ტრაბახობ!' },
    ]
  },
  {
    verb: 'aufgeben', meta: 'gibt auf · gab auf · aufgegeben', meaning: 'მიტოვება; გაგზავნა; დავალების მიცემა', noun: 'die Aufgabe — დავალება; ამოცანა', nounExamples: [{"de": "Die wichtigste Aufgabe einer Regierung ist der Schutz der Bürger.", "ka": "მთავრობის ყველაზე მნიშვნელოვანი ამოცანა მოქალაქეთა დაცვაა."}, {"de": "Diese mathematische Aufgabe hat keine einfache Lösung.", "ka": "ამ მათემატიკურ ამოცანას მარტივი გამოსავალი არ აქვს."}], family: 'geben',
    examples: [
      { de: 'Wer aufgibt, hat schon verloren.', ka: 'ვინც თავს ანებებს, უკვე წაიგო.' },
      { de: 'Unser Lehrer gibt jeden Tag sehr viele Hausaufgaben auf.', ka: 'ჩვენი მასწავლებელი ყოველ დღე ბევრ საშინაო დავალებას იძლევა.' },
    ]
  },
  {
    verb: 'ausgeben', meta: 'gibt aus · gab aus · ausgegeben', meaning: 'დახარჯვა', noun: 'die Ausgabe — ხარჯი; გამოცემა', nounExamples: [{"de": "Die Ausgaben für das neue Projekt übersteigen das Budget.", "ka": "ახალი პროექტის ხარჯები ბიუჯეტს აღემატება."}, {"de": "In der aktuellen Ausgabe des Magazins gibt es einen Artikel über Georgien.", "ka": "ჟურნალის მიმდინარე გამოცემაში საქართველოზე სტატიაა."}], family: 'geben',
    examples: [
      { de: 'Er gibt fast sein ganzes Gehalt für Reisen aus.', ka: 'ის თავის თითქმის მთელ ხელფასს მოგზაურობაზე ხარჯავს.' },
      { de: 'Wie viel gibst du im Monat für Kleidung aus?', ka: 'რამდენს ხარჯავ ტანსაცმელზე თვეში?' },
    ]
  },
  {
    verb: 'bekanntgeben', meta: 'gibt bekannt · bekanntgegeben', meaning: 'გამოცხადება, გამოქვეყნება', noun: 'die Bekanntgabe — გამოცხადება; გამოქვეყნება', nounExamples: [{"de": "Nach der offiziellen Bekanntgabe des Gewinners gab es großen Applaus.", "ka": "გამარჯვებულის ოფიციალური გამოცხადების შემდეგ ხმამაღალი ტაში ისმოდა."}, {"de": "Die Bekanntgabe der neuen Preise überraschte viele Kunden.", "ka": "ახალი ფასების გამოქვეყნებამ ბევრი კლიენტი გააოცა."}], family: 'geben',
    examples: [
      { de: 'Der Trainer wird morgen die Aufstellung bekanntgeben.', ka: 'მწვრთნელი ხვალ გუნდის შემადგენლობას გამოაცხადებს.' },
    ]
  },
  {
    verb: 'durchgeben', meta: 'gibt durch · durchgegeben', meaning: 'სატელეფონოდ/სარადიოდ გადაცემა', noun: 'die Durchgabe — სარადიო/სატელეფონო შეტყობინება', nounExamples: [{"de": "Eine dringende Durchgabe im Bahnhof ließ alle aufhorchen.", "ka": "სადგურში გადაუდებელმა განცხადებამ ყველა ყურადღება მიიქცია."}, {"de": "Die Durchgabe der Prüfungsergebnisse erfolgt nächste Woche.", "ka": "გამოცდის შედეგები მომავალ კვირას გამოქვეყნდება."}], family: 'geben',
    examples: [
      { de: 'Kannst du mir die genaue Uhrzeit durchgeben?', ka: 'შეგიძლია შეხვედრის ზუსტი დრო გადმომცე?' },
    ]
  },
  {
    verb: 'ergeben', meta: 'ergibt · ergab · ergeben', meaning: 'გამოდიოდეს; იძლეოდეს შედეგს', noun: 'das Ergebnis — შედეგი; მაჩვენებელი', nounExamples: [{"de": "Das Ergebnis der Blutanalyse war völlig unerwartet.", "ka": "სისხლის ანალიზის შედეგი სრულიად მოულოდნელი იყო."}, {"de": "Die Fußballergebnisse vom Wochenende waren sehr spannend.", "ka": "შაბათ-კვირის ფეხბურთის შედეგები ძალიან საინტერესო იყო."}], family: 'geben',
    examples: [
      { de: 'Die Rechnung ergibt insgesamt 47 Euro.', ka: 'გაანგარიშება სულ 47 ევროს იძლევა.' },
      { de: 'Das ergibt für mich keinen Sinn.', ka: 'ეს ჩემთვის აზრს მოკლებულია.' },
    ]
  },
  {
    verb: 'herausgeben', meta: 'gibt heraus · herausgegeben', meaning: 'გამოცემა; ხურდის დაბრუნება', noun: 'der Herausgeber — გამომცემელი; die Herausgabe — გამოცემა', nounExamples: [{"de": "Der Herausgeber dieser Enzyklopädie ist ein bekannter Wissenschaftler.", "ka": "ამ ენციკლოპედიის გამომცემელი ცნობილი მეცნიერია."}, {"de": "Die Herausgabe des geheimen Dokuments wurde vom Gericht angeordnet.", "ka": "სასამართლომ საიდუმლო დოკუმენტის გამოქვეყნება დაავალა."}], family: 'geben',
    examples: [
      { de: 'Tut mir leid, ich kann nicht herausgeben.', ka: 'ბოდიში, ხურდა არ მაქვს.' },
      { de: 'Der Verlag gibt jedes Jahr ein neues Wörterbuch heraus.', ka: 'გამომცემლობა ყოველ წელს ლექსიკონის ახალ გამოცემას გამოსცემს.' },
    ]
  },
  {
    verb: 'hergeben', meta: 'gibt her · hergegeben', meaning: 'ჩამოგლეჯა; გაცემა', family: 'geben',
    examples: [
      { de: 'Gib sofort das Handy her!', ka: 'მობილური ახლავე მომეცი!' },
    ]
  },
  {
    verb: 'mitgeben', meta: 'gibt mit · mitgegeben', meaning: 'გამოსაყოლება; გამოტანა', family: 'geben',
    examples: [
      { de: 'Ich gebe dir etwas Kuchen für deine Schwester mit.', ka: 'შენი დისთვის ცოტა ნამცხვარს გაგატან.' },
    ]
  },
  {
    verb: 'nachgeben', meta: 'gibt nach · nachgegeben', meaning: 'დათმობა; შემცირება', family: 'geben',
    examples: [
      { de: 'Diesmal gebe ich nach.', ka: 'ამჯერად დავთმობ.' },
    ]
  },
  {
    verb: 'übergeben', meta: 'übergibt · übergab · übergeben', meaning: 'გადაბარება; ოფიციალური გადაცემა', noun: 'die Übergabe — გადაბარება; გადაცემა', nounExamples: [{"de": "Die Übergabe der Schlüssel findet morgen um 10 Uhr statt.", "ka": "გასაღებების გადაბარება ხვალ 10 საათზე შედგება."}, {"de": "Bei der Übergabe der neuen Brücke war der Bürgermeister anwesend.", "ka": "ახალი ხიდის გახსნის ცერემონიაზე მერი დაესწრო."}], family: 'geben',
    examples: [
      { de: 'Der alte Bürgermeister hat dem neuen die Amtsgeschäfte übergeben.', ka: 'ძველმა მერმა ახალს მოვალეობები გადასცა.' },
    ]
  },
  {
    verb: 'vergeben', meta: 'vergibt · vergab · vergeben', meaning: 'პატიება; ტენდერის გადაცემა', noun: 'die Vergabe — გადაცემა (ტენდერი); die Vergebung — პატიება', nounExamples: [{"de": "Die Vergabe des Literaturpreises findet jedes Jahr in Stockholm statt.", "ka": "ლიტერატურული პრემიის გადაცემა ყოველ წელს სტოკჰოლმში იმართება."}, {"de": "Er bat auf Knien um Vergebung für seinen Fehler.", "ka": "მან მუხლებზე დაჩოქილი სთხოვა პატიება თავისი შეცდომისთვის."}], family: 'geben',
    examples: [
      { de: 'Kannst du mir vergeben?', ka: 'შეგიძლია მაპატიო?' },
      { de: 'Es ist schwer zu vergeben, aber wichtig.', ka: 'პატიება ძნელია, მაგრამ მნიშვნელოვანი.' },
    ]
  },
  {
    verb: 'weitergeben', meta: 'gibt weiter · weitergegeben', meaning: 'ინფორმაციის/ნივთის გადაცემა', noun: 'die Weitergabe — გადაცემა; გავრცელება', nounExamples: [{"de": "Die Weitergabe von Passwörtern an Dritte ist verboten.", "ka": "პაროლების მესამე პირებზე გადაცემა აკრძალულია."}, {"de": "Die Weitergabe von Traditionen an Kinder ist sehr wichtig.", "ka": "ტრადიციების შვილებზე გადაცემა ძალიან მნიშვნელოვანია."}], family: 'geben',
    examples: [
      { de: 'Bitte gib diese Information an alle Kollegen weiter.', ka: 'გთხოვ, ეს ინფორმაცია ყველა კოლეგას გადაეცი.' },
    ]
  },
  {
    verb: 'wiedergeben', meta: 'gibt wieder · wiedergegeben', meaning: 'შინაარსის გადმოცემა; რეპროდუქცია', noun: 'die Wiedergabe — გადმოცემა; ხარისხი (ჩანაწერი)', nounExamples: [{"de": "Die Wiedergabe der hohen Töne ist mit diesen Lautsprechern perfekt.", "ka": "ამ დინამიკებზე მაღალი ტონების გადმოცემა სრულყოფილია."}, {"de": "Eine wortwörtliche Wiedergabe des Gesprächs ist unmöglich.", "ka": "საუბრის სიტყვა-სიტყვით გადმოცემა შეუძლებელია."}], family: 'geben',
    examples: [
      { de: 'Kannst du kurz wiedergeben, was der Chef gesagt hat?', ka: 'შეგიძლია მოკლედ გადმოსცე, რა თქვა უფროსმა?' },
    ]
  },
  {
    verb: 'zugeben', meta: 'gibt zu · zugegeben', meaning: 'აღიარება; ნების დართვა', noun: 'die Zugabe — ბონუსი; ანქოური (კონცერტი)', nounExamples: [{"de": "Das begeisterte Publikum forderte lautstark eine Zugabe.", "ka": "გახარებული მაყურებელი ხმამაღლა ითხოვდა ანქოურს."}, {"de": "Als Zugabe zum Kauf bekam jeder Kunde ein kleines Geschenk.", "ka": "შეძენის ბონუსად ყველა კლიენტმა პატარა საჩუქარი მიიღო."}], family: 'geben',
    examples: [
      { de: 'Ich muss zugeben, dass ich mich geirrt habe.', ka: 'უნდა ვაღიარო, რომ შევცდი.' },
    ]
  },
  {
    verb: 'zurückgeben', meta: 'gibt zurück · zurückgegeben', meaning: 'უკან დაბრუნება', noun: 'die Rückgabe — უკან დაბრუნება; ჩაბარება', nounExamples: [{"de": "Die Rückgabe des Mietwagens muss bis 18 Uhr erfolgen.", "ka": "ქირის მანქანა 18 საათამდე უნდა დაბრუნდეს."}, {"de": "Bei Defekten ist eine kostenlose Rückgabe möglich.", "ka": "გაუმართაობის შემთხვევაში უფასო დაბრუნება შესაძლებელია."}], family: 'geben',
    examples: [
      { de: 'Bis wann muss ich dir das Fahrrad zurückgeben?', ka: 'როდემდე უნდა დაგიბრუნო ველოსიპედი?' },
    ]
  },

  // ===== GEHEN =====
  {
    verb: 'gehen', meta: 'geht · ging · ist gegangen', meaning: 'სიარული; წასვლა; შესაძლებლობა', noun: 'der Gang — სიარული; დერეფანი; სიჩქარე (მანქანა)', nounExamples: [{"de": "Der Gang des alten Mannes war langsam, aber sicher.", "ka": "მოხუცი კაცის სიარული ნელი, მაგრამ მტკიცე იყო."}, {"de": "Am Ende des Ganges ist die Tür rechts.", "ka": "დერეფნის ბოლოს მარჯვენა მხარეს კარია."}], family: 'gehen',
    examples: [
      { de: 'Ich gehe lieber zu Fuß.', ka: 'მირჩევნია ფეხით ვიაროს.' },
      { de: 'Warum willst du schon gehen?', ka: 'რატომ გინდა უკვე წასვლა?' },
      { de: 'Hör bitte auf! Du gehst mir wirklich auf die Nerven.', ka: 'გთხოვ, გაჩერდი! ნამდვილად ნერვებზე მიდიხარ.' },
      { de: 'Das geht leider nicht, da habe ich einen Termin.', ka: 'სამწუხაროდ ვერ ვიქნები, ჩემი ჯერია.' },
    ]
  },
  {
    verb: 'es geht', meta: 'unpersönlich', meaning: 'უპიროვნო გამოთქმები (როგორ ხარ; შეიძლება)', family: 'gehen',
    examples: [
      { de: 'Wie geht es Ihrer Mutter?', ka: 'როგორ არის თქვენი დედა?' },
      { de: 'Morgen geht es leider nicht.', ka: 'სამწუხაროდ ხვალ ვერ ვიქნები.' },
      { de: 'Es geht nichts über einen langen Spaziergang im Wald.', ka: 'ტყეში გრძელ სეირნობაზე უკეთესი არაფერია.' },
    ]
  },
  {
    verb: 'es geht um', meta: 'Wendung', meaning: 'საქმე ეხება; მნიშვნელოვანია', family: 'gehen',
    examples: [
      { de: 'Worum geht es in dem neuen Roman?', ka: 'რაზეა ახალი რომანი?' },
      { de: 'Es geht mir nur darum, eine ehrliche Lösung zu finden.', ka: 'ჩემთვის მხოლოდ პატიოსანი გამოსავლის პოვნაა მნიშვნელოვანი.' },
    ]
  },
  {
    verb: 'abgehen', meta: 'geht ab · ging ab · ist abgegangen', meaning: 'ჩამოვარდნა; მოწყვეტა; გამოქვითვა', noun: 'der Abgang — გამოსვლა; წასვლა (სცენიდან/სკოლიდან)', nounExamples: [{"de": "Der Abgang des Direktors nach 20 Jahren überraschte alle.", "ka": "დირექტორის გასვლა 20 წლის შემდეგ ყველას გააოცა."}, {"de": "Der Schauspieler machte einen dramatischen Abgang von der Bühne.", "ka": "მსახიობი სცენიდან დრამატულად გავიდა."}], family: 'gehen',
    examples: [
      { de: 'Der Knopf an meiner Jacke ist wieder abgegangen.', ka: 'ჩემი ქურთუკის ღილი კვლავ მოვარდა.' },
      { de: 'Von dem Gesamtpreis gehen noch 5% Rabatt ab.', ka: 'საერთო ფასიდან კიდევ 5% ფასდაკლება გამოქვითება.' },
    ]
  },
  {
    verb: 'angehen', meta: 'geht an · ging an · ist angegangen', meaning: 'ჩართვა; დაწყება; ეხება', family: 'gehen',
    examples: [
      { de: 'Der Vortrag geht schon um 19.00 Uhr an.', ka: 'მოხსენება 19:00-ზე იწყება.' },
      { de: 'Das geht uns nichts an.', ka: 'ეს ჩვენ არ გვეხება.' },
    ]
  },
  {
    verb: 'aufgehen', meta: 'geht auf · ging auf · ist aufgegangen', meaning: 'ამოსვლა (მზე); გახსნა; გაგება', noun: 'der Aufgang — ამოსვლა (მზე); კიბის უჯრედი', nounExamples: [{"de": "Der Aufgang der Sonne über dem Meer war wunderschön.", "ka": "ზღვაზე მზის ამოსვლა საოცრად ლამაზი იყო."}, {"de": "Wir wohnen im dritten Stock, linker Aufgang.", "ka": "ჩვენ მესამე სართულზე ვცხოვრობთ, მარცხენა სადარბაზო."}], family: 'gehen',
    examples: [
      { de: 'Im Winter geht die Sonne hier erst um fast 8 Uhr auf.', ka: 'ზამთარში მზე აქ მხოლოდ დილის 8 საათზე ამოდის.' },
      { de: 'Jetzt geht mir endlich ein Licht auf!', ka: 'ახლა საბოლოოდ გამეგო!' },
    ]
  },
  {
    verb: 'ausgehen', meta: 'geht aus · ging aus · ist ausgegangen', meaning: 'გასვლა; ჩაქრობა; დამთავრება; გამოლევა', noun: 'der Ausgang — გასასვლელი; შედეგი; საღამოს გასვლა', nounExamples: [{"de": "Der Ausgang des Kinos ist auf der linken Seite.", "ka": "კინოს გასასვლელი მარცხენა მხარეს არის."}, {"de": "Der Ausgang des Prozesses war völlig unvorhersehbar.", "ka": "სასამართლო პროცესის შედეგი სრულიად მოულოდნელი იყო."}], family: 'gehen',
    examples: [
      { de: 'Gehen wir heute Abend aus?', ka: 'გავდივართ საღამოს?' },
      { de: 'Ich wollte Kaffee kochen, aber er war ausgegangen.', ka: 'ყავის მომზადება მინდოდა, მაგრამ გათავებული იყო.' },
      { de: 'Ich bin davon ausgegangen, dass das Meeting um 10 Uhr beginnt.', ka: 'ვვარაუდობდი, რომ შეხვედრა 10 საათზე იწყებოდა.' },
    ]
  },
  {
    verb: 'begehen', meta: 'begeht · beging · hat begangen', meaning: 'ჩადენა (დანაშაული/შეცდომა)', noun: 'die Begehung — ჩადენა; ადგილზე გასვლა (ინსპექცია)', nounExamples: [{"de": "Die Begehung des Tatorts durch die Polizei dauerte drei Stunden.", "ka": "პოლიციის მიერ დანაშაულის ადგილის დათვალიერება სამ საათს გაგრძელდა."}, {"de": "Vor dem Baubeginn findet eine Begehung des Geländes statt.", "ka": "მშენებლობის დაწყებამდე მოხდება ტერიტორიის ადგილზე დათვალიერება."}], family: 'gehen',
    examples: [
      { de: 'Wer hat diesen Fehler begangen?', ka: 'ვინ დაუშვა ეს შეცდომა?' },
      { de: 'Es ist noch unklar, wer den Überfall begangen hat.', ka: 'ჯერ კიდევ გაურკვეველია, ვინ ჩაიდინა თავდასხმა.' },
    ]
  },
  {
    verb: 'durchgehen', meta: 'geht durch · ist durchgegangen', meaning: 'გადახედვა; გაშვება (შეცდომა)', noun: 'der Durchgang — გასასვლელი; რაუნდი; გავლა', nounExamples: [{"de": "Der Durchgang zum Hinterhof ist gesperrt.", "ka": "უკანა ეზოსკენ გასასვლელი დაკეტილია."}, {"de": "Im zweiten Durchgang des Wettbewerbs waren nur noch fünf Teilnehmer.", "ka": "კონკურსის მეორე რაუნდში მხოლოდ ხუთი მონაწილე დარჩა."}], family: 'gehen',
    examples: [
      { de: 'Könnten Sie bitte alle Verträge noch einmal durchgehen?', ka: 'შეგიძლიათ გადახედოთ ყველა ხელშეკრულებას?' },
      { de: 'Sie lassen ihren Kindern einfach zu viel durchgehen.', ka: 'თქვენ ბავშვებს ძალიან ბევრ რამეს უტარებთ.' },
    ]
  },
  {
    verb: 'eingehen', meta: 'geht ein · ging ein · ist eingegangen', meaning: 'გახმობა; გაკუმშვა; შემოსვლა', noun: 'der Eingang — შესასვლელი; შემოსვლა (წერილი/ფული)', nounExamples: [{"de": "Warten Sie bitte am Eingang des Bahnhofs.", "ka": "გთხოვთ, სადგურის შესასვლელთან დაელოდოთ."}, {"de": "Der Eingang Ihrer Bewerbung wird in drei Tagen bestätigt.", "ka": "თქვენი განაცხადის მიღება სამ დღეში დასტურდება."}], family: 'gehen',
    examples: [
      { de: 'Die Zimmerpflanze ist eingegangen, weil niemand sie gegossen hat.', ka: 'სახლის ყვავილი გახმა, რადგან არავინ მრწყავდა.' },
      { de: 'Der Pullover ist beim Waschen stark eingegangen.', ka: 'სვიტრი რეცხვისას ძალიან შეჯდა.' },
      { de: 'Sie geht sehr gut auf die Bedürfnisse ihrer Schüler ein.', ka: 'ის ძალიან კარგად ითვალისწინებს თავისი მოსწავლეების საჭიროებებს.' },
    ]
  },
  {
    verb: 'entgehen', meta: 'entgeht · entging · ist entgangen', meaning: 'გამორჩენა; შეუმჩნეველი დარჩენა', family: 'gehen',
    examples: [
      { de: 'Der wichtige Termin muss mir entgangen sein.', ka: 'მნიშვნელოვანი შეხვედრა გამომრჩა.' },
      { de: 'Das neue Museum solltest du dir nicht entgehen lassen!', ka: 'ახალი მუზეუმი არ უნდა გამოგრჩეს!' },
    ]
  },
  {
    verb: 'losgehen', meta: 'geht los · ist losgegangen', meaning: 'დაწყება; გასვლა', family: 'gehen',
    examples: [
      { de: 'Das Theaterstück geht um halb acht los.', ka: 'სპექტაკლი შვიდ-ნახევარზე იწყება.' },
      { de: 'Wann gehen wir los?', ka: 'როდის გავდივართ?' },
    ]
  },
  {
    verb: 'mitgehen', meta: 'geht mit · ist mitgegangen', meaning: 'გასვლა ვინმესთან ერთად', family: 'gehen',
    examples: [
      { de: 'Geh schon mit Opa mit, ich bringe gleich die Taschen.', ka: 'ბაბუასთან ერთად წადი, ჩანთებს მე მოვიტან.' },
      { de: 'Willst du nicht mit uns ins Kino mitgehen?', ka: 'არ გინდა ჩვენთან ერთად კინოში წამოხვიდე?' },
    ]
  },
  {
    verb: 'nachgehen', meta: 'geht nach · ist nachgegangen', meaning: 'ჩამორჩენა (საათი); გამოძიება', family: 'gehen',
    examples: [
      { de: 'Meine Armbanduhr geht täglich ein paar Minuten nach.', ka: 'ჩემი მაჯის საათი ყოველდღე რამდენიმე წუთით ჩამოუვარდება.' },
      { de: 'Bitte gehen Sie der Beschwerde des Kunden nach.', ka: 'გთხოვთ, გამოიძიოთ კლიენტის საჩივარი.' },
    ]
  },
  {
    verb: 'nahe gehen', meta: 'Wendung', meaning: 'ძლიერ განცდა; გულში ჩავარდნა', family: 'gehen',
    examples: [
      { de: 'Die Nachricht vom Tod des alten Lehrers geht mir sehr nahe.', ka: 'მოხუცი მასწავლებლის გარდაცვალების ამბავი ძლიერ მაწუხებს.' },
    ]
  },
  {
    verb: 'spazieren gehen', meta: 'geht spazieren · ist spazieren gegangen', meaning: 'გასეირნება', noun: 'der Spaziergang — გასეირნება; სეირნობა', nounExamples: [{"de": "Ein Spaziergang im Park nach der Arbeit entspannt sehr.", "ka": "სამუშაოს შემდეგ პარკში გასეირნება ძალიან ამშვიდებს."}, {"de": "Der Spaziergang durch die Altstadt hat uns zwei Stunden gedauert.", "ka": "ძველი ქალაქის გავლით სეირნობა ორ საათს გაგვიგრძელდა."}], family: 'gehen',
    examples: [
      { de: 'Nach dem Abendessen gehe ich immer eine halbe Stunde spazieren.', ka: 'ვახშმის შემდეგ ყოველთვის ნახევარი საათი ვსეირნობ.' },
      { de: 'Sollen wir morgen früh am Fluss spazieren gehen?', ka: 'ხვალ დილით მდინარესთან გასეირნება გვინდა?' },
    ]
  },
  {
    verb: 'übergehen', meta: 'geht über · ist übergegangenis übergegangen', meaning: 'გადასვლა; გადაცემა (საკუთრება); ყურადღების ავლა', noun: 'der Übergang — გადასასვლელი; გარდამავალი პერიოდი', nounExamples: [{"de": "Am Übergang über die Grenze mussten wir zwei Stunden warten.", "ka": "საზღვარზე გადასასვლელთან ორი საათი მოგვიხდა ლოდინი."}, {"de": "Der Übergang von der Schule ins Berufsleben ist nicht immer leicht.", "ka": "სკოლიდან სამუშაო ცხოვრებაზე გადასვლა ყოველთვის არ არის მარტივი."}], family: 'gehen',
    examples: [
      { de: 'Gehen wir bitte zum dritten Punkt über.', ka: 'გთხოვთ, გადავიდეთ მესამე საკითხზე.' },
      { de: 'Bei der Beförderung hat man mich einfach übergangen.', ka: 'დაწინაურებისას ჩემი გვერდი ავლეს.' },
    ]
  },
  {
    verb: 'umgehen', meta: 'geht um · ist umgegangen', meaning: 'გავრცელება; მოპყრობა; თავის არიდება', noun: 'der Umgang — ურთიერთობა; მოპყრობა · die Umgehung — გვერდის ავლა', nounExamples: [{"de": "Der Umgang mit Stress ist eine wichtige Lebenskompetenz.", "ka": "სტრესსთან გამკლავება მნიშვნელოვანი სასიცოცხლო უნარია."}, {"de": "Die neue Umgehungsstraße entlastet das Stadtzentrum.", "ka": "ახალი გვერდის გზა ქალაქის ცენტრს ტვირთს უმსუბუქებს."}], family: 'gehen',
    examples: [
      { de: 'Im Kindergarten geht eine Erkältungswelle um.', ka: 'საბავშვო ბაღში გაციების ტალღა დაირბინა.' },
      { de: 'Geh bitte vorsichtiger mit dem Laptop um.', ka: 'გთხოვ, ლეპტოპს უფრო ფრთხილად მოეპყარ.' },
      { de: 'Er versucht ständig, die Steuergesetze zu umgehen.', ka: 'ის მუდმივად ცდილობს გადასახადის კანონებს გვერდი აუაროს.' },
    ]
  },
  {
    verb: 'untergehen', meta: 'geht unter · ist untergegangen', meaning: 'ჩასვლა (მზე); ჩაძირვა; გაქრობა', noun: 'der Untergang — ჩასვლა (მზე); ჩაძირვა; კრახი', nounExamples: [{"de": "Der Untergang der Sonne über dem Meer war unvergesslich.", "ka": "მზის ჩასვლა ზღვაზე დაუვიწყარი იყო."}, {"de": "Der Untergang des Römischen Reiches ist ein wichtiges Thema.", "ka": "რომის იმპერიის კრახი ისტორიის მნიშვნელოვანი თემაა."}], family: 'gehen',
    examples: [
      { de: 'Die Sonne geht heute Abend um 19.48 Uhr unter.', ka: 'მზე დღეს საღამოს 19:48-ზე ჩავა.' },
      { de: 'Das Schiff ist in einem schweren Sturm untergegangen.', ka: 'გემი ძლიერ ქარიშხალში ჩაიძირა.' },
    ]
  },
  {
    verb: 'vergehen', meta: 'vergeht · verging · ist vergangen', meaning: 'გასვლა (დრო); გაქრობა (სურვილი)', noun: 'das Vergehen — დანაშაული; სამართალდარღვევა', nounExamples: [{"de": "Das war kein schweres Vergehen, nur eine Ordnungswidrigkeit.", "ka": "ეს მძიმე დანაშაული არ იყო, მხოლოდ წესრიგის დარღვევა."}, {"de": "Für dieses Vergehen kann er eine Geldstrafe bekommen.", "ka": "ამ სამართალდარღვევისთვის ის ჯარიმას მიიღებს."}], family: 'gehen',
    examples: [
      { de: 'Auf Reisen vergeht die Zeit immer viel zu schnell.', ka: 'მოგზაურობისას დრო ყოველთვის ძალიან სწრაფად გადის.' },
      { de: 'Wenn ich sehe, wie dreckig die Küche ist, vergeht mir sofort der Hunger.', ka: 'როცა ვხედავ, რამდენად ბინძურია სამზარეულო, მაშინვე შიმშილი მივიწყდება.' },
    ]
  },
  {
    verb: 'vorangehen', meta: 'geht voran · ist vorangegangen', meaning: 'წინსვლა; წარმატება', noun: 'der Fortgang — პროგრესი; გაგრძელება; წასვლა', nounExamples: [{"de": "Der Fortgang des Projekts ist sehr zufriedenstellend.", "ka": "პროექტის პროგრესი ძალიან დამაკმაყოფილებელია."}, {"de": "Nach dem Fortgang des Direktors übernahm sie die Leitung.", "ka": "დირექტორის წასვლის შემდეგ მან ხელმძღვანელობა გადაიბარა."}], family: 'gehen',
    examples: [
      { de: 'Das Renovierungsprojekt geht gut voran.', ka: 'სარემონტო პროექტი კარგად მიდის.' },
    ]
  },
  {
    verb: 'vorbeigehen', meta: 'geht vorbei · ist vorbeigegangen', meaning: 'გავლა; დასრულება', family: 'gehen',
    examples: [
      { de: 'Gehen Sie geradeaus, am Park vorbei und dann links.', ka: 'პირდაპირ გაიარეთ, პარკის გვერდით, შემდეგ მარცხნივ.' },
      { de: 'Der Sommer ist so schnell vorbeigegangen.', ka: 'ზაფხული ასე სწრაფად გავიდა.' },
    ]
  },
  {
    verb: 'vorgehen', meta: 'geht vor · ist vorgegangen', meaning: 'წინ წასვლა; სისწრაფე (საათი); მოქმედება', noun: 'das Vorgehen — მოქმედების წესი · der Vorgang — პროცესი; საქმე', nounExamples: [{"de": "Das Vorgehen der Polizei bei der Festnahme war professionell.", "ka": "პოლიციის მოქმედება დაკავებისას პროფესიონალური იყო."}, {"de": "Der Vorgang in der Batterie ist ein chemischer Prozess.", "ka": "ბატარეაში მიმდინარე პროცესი ქიმიურია."}], family: 'gehen',
    examples: [
      { de: 'Geht schon vor, ich muss noch kurz telefonieren.', ka: 'წადით წინ, ერთი წუთი ტელეფონი მჭირდება.' },
      { de: 'Wie gehen wir bei diesem Problem am besten vor?', ka: 'ამ პრობლემას როგორ მივუდგეთ სწორად?' },
    ]
  },
  {
    verb: 'weitergehen', meta: 'geht weiter · ist weitergegangen', meaning: 'გაგრძელება; წინ სიარული', family: 'gehen',
    examples: [
      { de: 'Wenn das mit den Ausgaben so weitergeht, müssen wir den Urlaub absagen.', ka: 'თუ ხარჯებით ასე გაგრძელდა, შვებულება გავუქმებ.' },
      { de: 'Bitte gehen Sie weiter — die Einfahrt muss frei bleiben.', ka: 'გთხოვთ, გადახვიდეთ — შესასვლელი თავისუფალი უნდა იყოს.' },
    ]
  },
  {
    verb: 'zugehen', meta: 'geht zu · ist zugegangen', meaning: 'დახურვა; მიახლოება', noun: 'der Zugang — შესასვლელი; წვდომა; მიდგომა', nounExamples: [{"de": "Der Zugang zum Dach ist nur für Mitarbeiter erlaubt.", "ka": "სახურავზე შესვლა მხოლოდ თანამშრომლებისთვისაა ნებადართული."}, {"de": "Alle Schüler haben freien Zugang zur Schulbibliothek.", "ka": "ყველა მოსწავლეს სასკოლო ბიბლიოთეკაზე თავისუფალი წვდომა აქვს."}], family: 'gehen',
    examples: [
      { de: 'Der Reißverschluss geht nicht zu — die Hose ist wohl zu klein.', ka: 'ელვა არ იხურება — შარვალი ალბათ პატარაა.' },
      { de: 'Du musst lernen, auf fremde Menschen zuzugehen.', ka: 'უნდა ისწავლო უცნობ ადამიანებთან კონტაქტის დამყარება.' },
    ]
  },
  {
    verb: 'zurückgehen', meta: 'geht zurück · ist zurückgegangen', meaning: 'უკან დაბრუნება; შემცირება', noun: 'der Rückgang — შემცირება; ვარდნა; დაღმავლობა', nounExamples: [{"de": "Der Rückgang der Geburtenrate ist ein europäisches Problem.", "ka": "შობადობის შემცირება ევროპული პრობლემაა."}, {"de": "Die Firma verzeichnete im letzten Quartal einen starken Rückgang.", "ka": "კომპანიამ გასულ კვარტალში მნიშვნელოვანი ვარდნა დააფიქსირა."}], family: 'gehen',
    examples: [
      { de: 'Es wird kalt — gehen wir zurück ins Haus.', ka: 'ცივდება — სახლში დავბრუნდეთ.' },
      { de: 'Die Zahl der Verkehrsunfälle ist in diesem Jahr um 8% zurückgegangen.', ka: 'ამ წელს საგზაო შემთხვევების რაოდენობა 8%-ით შემცირდა.' },
    ]
  },
];

let activeFamily = null; // null = ყველა

function getFilteredVerbs() {
  return activeFamily ? VERBS.filter(v => v.family === activeFamily) : VERBS;
}

const TOTAL = VERBS.length;

// ===== STATE =====
let state = {
  fcIndex: 0,
  fcFlipped: false,
  seenSet: new Set(),
  knownSet: new Set(),
  qCorrect: 0,
  qWrong: 0,
  qAnswered: false,
};

function loadState() {
  try {
    const raw = localStorage.getItem('deutschde_state');
    if (!raw) return;
    const s = JSON.parse(raw);
    state.seenSet = new Set(s.seen || []);
    state.knownSet = new Set(s.known || []);
    state.qCorrect = s.qCorrect || 0;
    state.qWrong = s.qWrong || 0;
  } catch(e) {}
}

function saveState() {
  try {
    localStorage.setItem('deutschde_state', JSON.stringify({
      seen: [...state.seenSet],
      known: [...state.knownSet],
      qCorrect: state.qCorrect,
      qWrong: state.qWrong,
    }));
  } catch(e) {}
}

function randEx(v) {
  return v.examples[Math.floor(Math.random() * v.examples.length)];
}

// ===== RING PROGRESS =====
function updateRing() {
  const pct = state.knownSet.size / TOTAL;
  const circumference = 2 * Math.PI * 20; // r=20 → 125.66
  const offset = circumference * (1 - pct);
  document.getElementById('ring-fill').style.strokeDashoffset = offset;
  document.getElementById('ring-pct').textContent = Math.round(pct * 100) + '%';
}

// ===== TABS =====
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    const tab = btn.dataset.tab;
    document.getElementById('tab-' + tab).classList.add('active');
    if (tab === 'list') renderList();
    if (tab === 'quiz') initQuiz();
  });
});

// ===== FLASHCARD =====
function highlightVerb(verb) {
  const prefixes = ['zurück','heraus','weiter','wieder','bekannt','spazieren','hinweg','hinaus','voran','vorbe','durch','ab','an','auf','aus','be','ein','ent','los','mit','nach','nahe','über','um','unter','ver','vor','zu'];
  for (const p of prefixes) {
    if (verb.startsWith(p) && verb.length > p.length) {
      return `<span class="verb-prefix">${p}</span>${verb.slice(p.length)}`;
    }
    // handle "es gibt", "sich geben", "spazieren gehen" etc - no prefix highlight
  }
  return verb;
}

function updateHeaderFamily() {
  const filtered = getFilteredVerbs();
  const label = activeFamily
    ? (activeFamily === 'geben' ? 'geben-ის ოჯახი' : 'gehen-ის ოჯახი')
    : 'geben + gehen';
  document.querySelector('.verb-family-name').textContent = label;
}

function renderDots() {
  const filtered = getFilteredVerbs();
  const c = document.getElementById('fc-dots');
  c.innerHTML = '';
  filtered.forEach((v, i) => {
    const globalIdx = VERBS.indexOf(v);
    const d = document.createElement('div');
    d.className = 'fc-dot' +
      (state.knownSet.has(globalIdx) ? ' known' : state.seenSet.has(globalIdx) ? ' seen' : '') +
      (i === state.fcIndex ? ' current' : '');
    d.title = v.verb;
    d.addEventListener('click', () => { state.fcIndex = i; renderFC(); });
    c.appendChild(d);
  });
}

function renderFC() {
  const filtered = getFilteredVerbs();
  if (state.fcIndex >= filtered.length) state.fcIndex = 0;
  const v = filtered[state.fcIndex];
  const globalIdx = VERBS.indexOf(v);
  const ex = randEx(v);
  state.fcFlipped = false;
  const card = document.getElementById('flashcard');
  card.classList.remove('flipped');

  document.getElementById('fc-verb').innerHTML = highlightVerb(v.verb);
  document.getElementById('fc-meta').textContent = v.meta;
  document.getElementById('fc-example-de').textContent = ex.de;
  document.getElementById('fc-meaning').textContent = v.meaning;
  document.getElementById('fc-example-de-b').textContent = ex.de;
  document.getElementById('fc-example-ka').textContent = ex.ka;
  document.getElementById('fc-seen').textContent = state.seenSet.size;
  document.getElementById('fc-known').textContent = state.knownSet.size;
  renderDots();
  updateRing();
}

document.getElementById('flashcard').addEventListener('click', () => {
  const card = document.getElementById('flashcard');
  state.fcFlipped = !state.fcFlipped;
  card.classList.toggle('flipped', state.fcFlipped);
  const filtered = getFilteredVerbs();
  const globalIdx = VERBS.indexOf(filtered[state.fcIndex]);
  if (state.fcFlipped && !state.seenSet.has(globalIdx)) {
    state.seenSet.add(globalIdx);
    saveState();
    renderDots();
    document.getElementById('fc-seen').textContent = state.seenSet.size;
  }
});

document.getElementById('btn-know').addEventListener('click', () => {
  const filtered = getFilteredVerbs();
  const globalIdx = VERBS.indexOf(filtered[state.fcIndex]);
  state.knownSet.add(globalIdx);
  state.seenSet.add(globalIdx);
  saveState();
  nextFC();
});

document.getElementById('btn-next-fc').addEventListener('click', nextFC);

function nextFC() {
  const filtered = getFilteredVerbs();
  state.fcIndex = (state.fcIndex + 1) % filtered.length;
  renderFC();
}

// ===== QUIZ =====
let quizVerb = null;

function initQuiz() {
  updateQuizScore();
  nextQuestion();
}

function updateQuizScore() {
  document.getElementById('q-correct').textContent = state.qCorrect;
  document.getElementById('q-wrong').textContent = state.qWrong;
  const total = state.qCorrect + state.qWrong;
  const pct = total ? Math.round(state.qCorrect / total * 100) : 0;
  document.getElementById('q-pct').textContent = total ? pct + '%' : '—';
  document.getElementById('quiz-progress-fill').style.width = total ? pct + '%' : '0%';
}

function nextQuestion() {
  const filtered = getFilteredVerbs();
  state.qAnswered = false;
  document.getElementById('quiz-next-btn').classList.add('hidden');
  document.getElementById('quiz-explanation').classList.add('hidden');

  const quizVerb = filtered[Math.floor(Math.random() * filtered.length)];
  const ex = randEx(quizVerb);
  const useDE = Math.random() > 0.5;

  if (useDE) {
    document.getElementById('quiz-direction').textContent = 'გერმანული → ქართული';
    document.getElementById('quiz-question').textContent = ex.de;
  } else {
    document.getElementById('quiz-direction').textContent = 'ქართული → გერმანული';
    document.getElementById('quiz-question').textContent = ex.ka;
  }

  let opts = [quizVerb];
  while (opts.length < 4) {
    const r = filtered[Math.floor(Math.random() * filtered.length)];
    if (!opts.find(o => o.verb === r.verb)) opts.push(r);
  }
  opts = opts.sort(() => Math.random() - 0.5);

  const oc = document.getElementById('quiz-options');
  oc.innerHTML = '';
  opts.forEach(o => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt';
    btn.textContent = o.verb + ' — ' + o.meaning;
    btn.addEventListener('click', () => {
      if (state.qAnswered) return;
      state.qAnswered = true; oc.querySelectorAll('.quiz-opt').forEach(b => { b.disabled = true; });
      if (o.verb === quizVerb.verb) {
        btn.classList.add('correct'); state.qCorrect++;
      } else {
        btn.classList.add('wrong'); state.qWrong++;
        oc.querySelectorAll('.quiz-opt').forEach(b => { if (b.textContent.startsWith(quizVerb.verb)) b.classList.add('correct'); });
      }
      const expEl = document.getElementById('quiz-explanation');
      expEl.textContent = useDE ? '→ ' + ex.ka : '→ ' + ex.de;
      expEl.classList.remove('hidden');
      document.getElementById('quiz-next-btn').classList.remove('hidden');
      saveState();
      updateQuizScore();
    });
    oc.appendChild(btn);
  });
}

document.getElementById('quiz-next-btn').addEventListener('click', nextQuestion);

// ===== LIST =====
function renderList(filter) {
  const filtered = getFilteredVerbs();
  const c = document.getElementById('verb-list');
  const q = (filter || '').toLowerCase();
  const items = q
    ? filtered.filter(v => v.verb.toLowerCase().includes(q) || v.meaning.toLowerCase().includes(q))
    : filtered;
  c.innerHTML = '';
  items.forEach(v => {
    const idx = VERBS.indexOf(v);
    const exHtml = v.examples.map(e =>
      `<div class="vli-ex"><span class="vli-ex-de">${e.de}</span><span class="vli-ex-ka">${e.ka}</span></div>`
    ).join('');
    const nounExHtml = (v.noun && v.nounExamples && v.nounExamples.length) ? `
      <div class="vli-noun-section">
        <div class="vli-noun-header">→ ${v.noun}</div>
        ${v.nounExamples.map(e =>
          `<div class="vli-ex"><span class="vli-ex-de">${e.de}</span><span class="vli-ex-ka">${e.ka}</span></div>`
        ).join('')}
      </div>` : '';
    const div = document.createElement('div');
    div.className = 'verb-list-item';
    div.innerHTML = `
      <div class="vli-main">
        <div class="vli-verb">${highlightVerb(v.verb)}</div>
        <div class="vli-body">
          <div class="vli-meaning">${v.meaning}</div>
          <div class="vli-meta">${v.meta}</div>
          ${v.noun ? `<div class="vli-noun">→ ${v.noun}</div>` : ''}
        </div>
        <div class="vli-badge ${state.knownSet.has(idx) ? 'known' : ''}">${state.knownSet.has(idx) ? '✓' : idx + 1}</div>
        <div class="vli-arrow">›</div>
      </div>
      <div class="vli-examples hidden">${exHtml}${nounExHtml}</div>
    `;
    div.querySelector('.vli-main').addEventListener('click', () => {
      const ex = div.querySelector('.vli-examples');
      const arrow = div.querySelector('.vli-arrow');
      const isOpen = !ex.classList.contains('hidden');
      ex.classList.toggle('hidden', isOpen);
      arrow.classList.toggle('open', !isOpen);
    });
    c.appendChild(div);
  });
}

document.getElementById('list-search').addEventListener('input', e => renderList(e.target.value));

// ===== PWA INSTALL =====
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('install-banner').classList.remove('hidden');
});

document.getElementById('install-btn').addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  deferredPrompt = null;
  document.getElementById('install-banner').classList.add('hidden');
});

document.getElementById('install-dismiss').addEventListener('click', () => {
  document.getElementById('install-banner').classList.add('hidden');
});

// ===== SERVICE WORKER =====
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}

document.querySelectorAll('.family-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.family-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFamily = btn.dataset.family || null;
    state.fcIndex = 0;
    updateHeaderFamily();
    renderFC();
    renderList(document.getElementById('list-search').value);
    if (document.getElementById('tab-quiz').classList.contains('active')) nextQuestion();
  });
});

// ===== INIT =====
loadState();
updateHeaderFamily();
renderFC();
renderList();
