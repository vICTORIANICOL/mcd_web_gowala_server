import bcrypt from "bcryptjs";

export const stubUsers = [
  {
    name: "admin",
    email: "admin@mediacollege.dk",
    picture: "/users/no-user.jpg",
    role: "admin",
    hashedPassword: await bcrypt.hash("admin", 10),
  },
  {
    name: "guest",
    email: "guest@mediacollege.dk",
    picture: "/users/no-user.jpg",
    role: "guest",
    hashedPassword: await bcrypt.hash("guest", 10),
  },
];

export const stubProducts = [
  {
    title: "Gowala Parmasan",
    price: 89,
    image: "/products/parmasan.jpg",
    discount: 2,
  },
  {
    title: "Gowala Gouda",
    price: 149,
    image: "/products/gouda.jpg",
    discount: 10,
  },
  {
    title: "Gowala Smør",
    price: 39,
    image: "/products/butter.jpg",
    discount: 0,
  },
  {
    title: "Gowala Fløde",
    price: 29,
    image: "/products/cream.jpg",
    discount: 0,
  },
  {
    title: "Gowala Is",
    price: 89,
    image: "/products/icecream.jpg",
    discount: 10,
  },
  {
    title: "Gowala Bøf",
    price: 299,
    image: "/products/beaf.jpg",
    discount: 25,
  },
  {
    title: "Gowala Mælk",
    price: 29,
    image: "/products/milk.jpg",
    discount: 0,
  },
];

export const stubArticles = [
  {
    title: "Valg af de bedste køer",
    description:
      "Når vi vælger de bedste køer til mælkeproduktion og kød, er kvalitet og sundhed afgørende. Køer med høj mælkeydelse og god genetik sikrer en rig og cremet mælk, perfekt til smør, ost og yoghurt. Samtidig er sunde, velplejede køer nøglen til mørt og velsmagende kød. Foder, opvækst og dyrevelfærd spiller en stor rolle – naturlig fodring og frie græsningsforhold giver bedre produkter. Hos Gowala Farms prioriterer vi bæredygtighed og kvalitet, så du får de bedste mejeriprodukter og det mest velsmagende kød, direkte fra gården til dit bord.",
    image: "/articles/cows.jpg",
    list: [
      "Sundhed og genetik",
      "Foder og opvækst",
      "Dyrevelfærd",
      "Kvalitet fra gård til bord",
    ],
  },
  {
    title: "Stærk genetik",
    description:
      "Dyrenes sundhed er afgørende for både mælkeproduktion og kødets kvalitet. Hos Gowala Farms sørger vi for, at vores køer får en afbalanceret og næringsrig kost, der styrker deres immunforsvar og sikrer optimal vækst. Regelmæssige sundhedstjek og dyrlægekontroller hjælper med at forebygge sygdomme og sikrer, at dyrene trives. Frie græsningsforhold og stressfri omgivelser er essentielle for at holde køerne sunde og produktive. Vi prioriterer god hygiejne i staldene og anvender naturlige metoder til at fremme dyrenes velbefindende. Ved at tage hånd om vores dyr med omsorg og respekt, sikrer vi de bedste mejeriprodukter og det mest smagfulde kød til vores kunder.",
    image: "/articles/health.jpg",
    list: [
      "Stærk genetik",
      "Optimal fodring",
      "Dyrenes sundhed",
      "Forebyggende pleje",
    ],
  },
  {
    title: "Plads til udfoldelse",
    description:
      "Køerne på Gowala Farms nyder frie græsningsforhold, hvor de tilbringer størstedelen af deres tid på åbne marker. Her har de adgang til frisk græs, som er med til at give både mælken og kødet en naturlig og fyldig smag. Bevægelse i det fri styrker deres muskler og generelle sundhed, hvilket resulterer i en mere bæredygtig og kvalitetsrig produktion. Sollys og frisk luft spiller en vigtig rolle i dyrenes trivsel og reducerer stress, hvilket gavner både deres velbefindende og ydeevne. Vi tror på, at glade køer giver de bedste produkter, og derfor sikrer vi, at de lever under optimale forhold, hvor de kan græsse frit og naturligt.",
    image: "/articles/field.jpg",
    list: [
      "Frisk luft",
      "Adgang til grønne arealer",
      "Glade køer smager bedst",
    ],
  },
  {
    title: "Om Gowala Farms",
    description:
      "Hos Gowala Farms brænder vi for at levere friske, naturlige og velsmagende mejeriprodukter og kød af højeste kvalitet. Vores køer græsser frit på åbne marker, hvor de lever under optimale forhold for at sikre både deres trivsel og den bedste produktion. Vi kombinerer traditionelle landbrugsmetoder med moderne bæredygtige løsninger for at skabe produkter, der er gode for både mennesker og miljø. Gennem ansvarlig dyrevelfærd, nøje udvalgt foder og skånsom produktion sikrer vi, at vores mælk og kød bevarer den autentiske smag fra gården. Hos os er kvalitet, sundhed og respekt for dyrene kernen i alt, hvad vi gør.",
    image: "/articles/about.jpg",
    list: [
      "Høj kvalitet og naturlige produkter",
      "Frie græsningsforhold",
      "Bæredygtighed og dyrevelfærd",
      "Ægte smag fra gården",
    ],
  },
];

export const stubMessages = [
  {
    name: "Gowala Name",
    email: "gowala@gmail.com",
    description: "Message 1 description",
  },
  {
    name: "Name 2",
    email: "gawala2@mail.dk",
    description: "Message 2 description",
  },
];

export const stubEmployees = [
  {
    name: "Monica",
    image: "/employees/monica.jpg",
    text: "Monica er en dedikeret medarbejder på Gowala Farms, som med stor omhu sørger for dyrenes trivsel og kvaliteten af vores produkter.",
  },
  {
    name: "Anders",
    image: "/employees/anders.jpg",
    text: "Anders har et særligt øje for dyrevelfærd og passer dagligt på køerne med stor omsorg. Han sørger for, at dyrene er sunde, glade og får den bedste pleje, så de kan levere kvalitetsmælk og kød.",
  },
  {
    name: "Søren",
    image: "/employees/soren.jpg",
    text: "Søren har mange års erfaring med landbrug og står for den daglige drift på Gowala Farms. Han sikrer, at køerne trives, markerne passes, og at produktionen altid lever op til de højeste standarder.",
  },
  {
    name: "Knud",
    image: "/employees/knud.jpg",
    text: "Knud har en stor passion for mejeriproduktion og sørger for, at mælken forarbejdes skånsomt med de nyeste teknologier. Hans ekspertise sikrer, at alle produkter bevarer deres friske smag og høje kvalitet.",
  },
  {
    name: "Kalle",
    image: "/employees/kalle.jpg",
    text: "Kalle er en af de mest erfarne medarbejdere på Gowala Farms, og hans passion for landbrug skinner igennem i alt, hvad han gør.",
  },
];

export const stubSubscribers = [
  {
    email: "gowalasubscriber@mail.com",
  },
];

export const stubOrders = [
  {
    email: "customer1@mail.com",
    items: [{ product: "Gowala Parmasan" }, { product: "Gowala Gouda" }],
  },
  {
    email: "customer2@mail.com",
    items: [{ product: "Gowala Smør" }],
  },
  {
    email: "gowalasubscriber@mail.com",
    items: [
      { product: "Gowala Fløde" },
      { product: "Gowala Is" },
      { product: "Gowala Bøf" },
    ],
  },
];
