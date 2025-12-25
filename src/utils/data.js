import { FaWallet } from "react-icons/fa6";
import { MdDashboard, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { PiNotepad } from "react-icons/pi";
import { TbActivity, TbMoneybag } from "react-icons/tb";

import AbujaYam from "../assets/others/abuja-yam.png";
import BenueYam from "../assets/others/benue-yams.jpg";
import Cassava from "../assets/others/cassava.jpg";
import Tomatoes from "../assets/others/Tomatoes.jpg";
import Peppers from "../assets/others/peppers.jpg";
import Maize from "../assets/others/maize.jpg";
import Plantains from "../assets/others/plantains.jpg";
import Watermelon from "../assets/others/watermelon.jpg";
import Ugu from "../assets/others/ugu.jpg";
import Sugarcane from "../assets/others/sugarcane.jpg";
import Soybeans from "../assets/others/soybeans.jpg";
import Chicks from "../assets/others/chicks.jpg";
import Broilers from "../assets/others/broilers.jpg";


import BigBuyer from "../assets/others/big-buyer.png";
import BigMoney from "../assets/others/big-money.png";
import BigRegister from "../assets/others/big-register.png";
import SmallRegister from "../assets/others/small-register.png";
import SmallMoney from "../assets/others/small-money.png";
import SmallBuyer from "../assets/others/small-buyer.png";


import Agent from "../assets/others/agent.jpg";

import { FaRegAddressBook } from "react-icons/fa6";
import { BsBank } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";




export const navLinks = [
  {
    id: 1,
    title: "Overview",
    link: "/dashboard",
    icon: MdDashboard
  },
  {
    id: 2,
    title: "Product Marketplace",
    link: "/dashboard/product-marketplace",
    icon: MdOutlineProductionQuantityLimits
  },
  {
    id: 3,
    title: "Sales",
    link: "/dashboard/sales",
    icon: TbActivity
  },
  {
    id: 4,
    title: "Commissions",
    link: "/dashboard/commissions",
    icon: TbMoneybag
  },
  {
    id: 5,
    title: "Wallet",
    link: "/dashboard/wallet",
    icon: FaWallet
  },

]


export const mockProducts = [
  {
    id: 1,
    name: "Tomatoes",
    sizes: [
      "Large", 
      "Medium", 
      "Small", 
          
    ],
   
    bulks: [
      "Basket",
      "Crates",     
    ],    
    image: Tomatoes,
    tag: "Crops",
    availableNow: true

  },
  {
    id: 2,
    name: "Peppers",
    sizes: [
      
      "Large"          
    ],
   
    bulks: [
      "Bag",
      "Crate",
      "Bowl"
      
    ],    
    image: Peppers,
    tag: "Crops",
    availableNow: true

  },
  // {
  //   id: 3,
  //   name: "Ugu",
  //   sizes: [
  //     "Extra large - ₦6500", 
  //     "Large - ₦3500", 
  //     "Medium - ₦2000", 
  //     "Small - ₦1200", 
  //     "Seed yam - ₦500"
    
  //   ],
   
  //   bulks: [
  //     "100 pieces",
  //     "60 pieces",
  //     "50 pieces",
  //     "20 pieces",
  //     "10 pieces"
  //   ],    
  //   image: Ugu


  // },
  {
    id: 4,
    name: "Yam - Abuja",
    sizes: [
      "Extra large - ₦6500", 
      "Large - ₦3500", 
      "Medium - ₦2000", 
      "Small - ₦1200", 
      "Seed yam - ₦500"
    
    ],
   
    bulks: [
      "100 pieces",
      "60 pieces",
      "50 pieces",
      "20 pieces",
      "10 pieces"
    ],    
    image: AbujaYam,
    tag: "Crops",
    availableNow: true

  },
 
  {
    id: 5,
    name: "Yam - Benue",
    sizes: [
      "Extra large - ₦6500", 
      "Large - ₦3500", 
      "Medium - ₦2000", 
      "Small - ₦1200", 
      "Seed yam - ₦500"
    
    ],
   
    bulks: [
      "100 pieces",
      "60 pieces",
      "50 pieces",
      "20 pieces",
      "10 pieces"
    ],    
    image: BenueYam,
    tag: "Crops",
    availableNow: false

  },
  {
    id: 6,
    name: "Plantains",
    sizes: [
      "Large", 
      "Medium",
      "Small"
       
    ],
   
    bulks: [
      "12 pieces",
      "6 pieces",
      
    ],    
    image: Plantains,
    tag: "Crops",
    availableNow: false

  },
  {
    id: 7,
    name: "Watermelon",
    sizes: [
       
      "Large", 
      "Small",
       
    ],
   
    bulks: [
      "1 ton",      
    ],    
    image: Watermelon,
    tag: "Crops",
    availableNow: false
  },
  {
    id: 8,
    name: "Soyabeans",
    sizes: [
      "Large", 
     
    ],
   
    bulks: [
      "Bag",      
      
    ],    
    image: Soybeans,
    tag: "Crops",
    availableNow: false




  },
  {
    id: 9,
    name: "Maize(corn)",
    sizes: [      
      "Large", 
             
    ],
   
    bulks: [
      "bag",
      "12 pieces",
      
    ],    
    image: Maize,
    tag: "Crops",
    availableNow: false

  },
  {
    id: 10,
    name: "Cassava",
    sizes: [
      "Extra large", 
      "Large", 
      "Medium",
       
    ],
   
    bulks: [
      "12 pieces",
      "6 pieces",
      
    ],    
    image: Cassava,
    tag: "Crops",
    availableNow: false
  },
  {
    id: 11,
    name: "Sugarcane",
    sizes: [
      "Extra large", 
      "Large", 
      "Medium",
       
    ],
   
    bulks: [
      "12 pieces",
      "6 pieces",
      
    ],    
    image: Sugarcane,
    tag: "Crops",
    availableNow: false

  },
  {
    id: 12,
    name: "Layer Chicks",
    sizes: [
      "Extra large", 
      "Large", 
      "Medium",
       
    ],
   
    bulks: [
      "12 pieces",
      "6 pieces",
      
    ],    
    image: Chicks,
        tag: "Livestocks",
    availableNow: false




  },
  {
    id: 13,
    name: "Broiler Chicks",
    sizes: [
      "Extra large", 
      "Large", 
      "Medium",
       
    ],
   
    bulks: [
      "12 pieces",
      "6 pieces",
      
    ],    
    image: Chicks,
        tag: "Livestocks",
    availableNow: false

  },
  {
    id: 14,
    name: "Broilers",
    sizes: [
      "Extra large", 
      "Large", 
      "Medium",
       
    ],
   
    bulks: [
      "12 pieces",
      "6 pieces",
      
    ],    
    image: Broilers,
    tag: "Livestocks",
    availableNow: false

  },
  {
    id: 14,
    name: "Broilers",
    sizes: [
      "Extra large", 
      "Large", 
      "Medium",
       
    ],
   
    bulks: [
      "12 pieces",
      "6 pieces",
      
    ],    
    image: Broilers,
    tag: "Livestocks",
    availableNow: false

  },


 
];


export const mockSales = [
  {
    id: 1,
    productName: "Tomatoes",
    size: "Large",
    bulk: "Basket",
    image: Tomatoes,
    unitPrice: 50000,
    quantity: 5,
    buyerName: "",
    buyerPhone: "",
    status: "Pending",
    createdAt: "2025-11-20",
  },
  {
    id: 2,
    productName: "Yam - Benue",
    size: "Large",
    bulk: "100 pieces",
    image: BenueYam,
    unitPrice: 350000,
    quantity: 4,
    buyerName: "Debo Obasanjo",
    buyerPhone: "08054678934",
    status: "Negotiating",
    createdAt: "2025-11-20",
  },
  {
    id: 3,
    productName: "Plantain",
    size: "Large",
    bulk: "12 pieces",
    image: Plantains,
    unitPrice: 60000,
    quantity: 10,
    buyerName: "Yahaya Isah",
    buyerPhone: "08054678934",
    status: "Completed",
    createdAt: "2025-11-20",
  },
  {
    id: 4,
    productName: "Water melon",
    size: "Small",
    bulk: "1 ton",
    image: Watermelon,
    unitPrice: 400000,
    quantity: 3,
    buyerName: "Yahaya Isah",
    buyerPhone: "08054678934",
    status: "Cancelled",
    createdAt: "2025-11-20",
  },
];

export const mockCommissions = [
  {
    id: 1,
    productName: "Tomatoes",
    image: Tomatoes,
    amount: 12500,
    status: "Pending",
    date: "2025-11-21",
  },
  {

    id: 2,
    productName: "Yam - Benue",
    image: BenueYam,
    amount: 126000,
    status: "Negotiating",
    date: "2025-11-21",

  },
  {

    id: 3,
    productName: "Plantain",
    image: Plantains,
    amount: 48000,
    status: "Completed",
    date: "2025-11-21",

  },


];



export const productFilters = [
 "All Products",
 "Crops",
 "Livestocks",
 "Available now"

];


export const saleFilters = [
 "Pending",
  "All Sales",
 "Negotiating",
 "Completed",
 "Cancelled",



];

export const commissionFilters = [
 "Pending",
 "Negotiating",
 "Completed",

]

export const stepImages = [
  {
    id: 1,
    tag: "register",
    bigImg: BigRegister,
    smallImg: SmallRegister,
    title: "Create your free agent account",
    desc: "Sign up once, verify your phone and bank details, and get access to the marketplace dashboard.",
    line: true
  },
  
  {
    id: 2,
    tag: "buyer",
    bigImg: BigBuyer,
    smallImg: SmallBuyer,
    title: "Choose products & find buyers",
    desc: "Browse products, check commission per item, then share links or pitch to your existing contacts offline.",
   
    line: true

  },
  {
    id: 3,
    tag: "money",
    bigImg: BigMoney,
    smallImg: SmallMoney,
     title: "We close & deliver, you earn",
    desc: "Once the buyer pays and confirms, we credit your wallet and you can request a payout instantly.",
    line: false

  },
 
]


export const buyerFormData = [

    {
        
        name: "buyerName",
        placeholder: "Buyer name",
        label: "Buyer Name",
        isPassword: false,
        errorMessage: "Please enter a name",
        validate: true
        
    },
    {
       
        name: "buyerPhoneNumber",
        placeholder: "Buyer's Phone Number",
        label: "Buyer's Phone Number",
        isPassword: false,
        errorMessage: "Please enter a valid buyer's phone number",
        validate: true,
        

    },
    {
        
        name: "buyerAddress",
        placeholder: "Buyer Address",
        label: "Buyer Address",
        isPassword: false,
        validate: true,
        errorMessage: "Please enter a valid address",
        validate: true


    },
    

];

export const landingProducts = [
  {
    id: 1,
    name: "Tomatoes",
    price: "250,000",
    commission: "12,500"
  },
    {
    id: 2,
    name: "Yam - Benue",
    price: "1,400,000",
    commission: "126,000"
  },
    {
    id: 3,
    name: "Plantain",
    price: "600,000",
    commission: "48,000"
  },
 
 
];



export const faqItems = [
  {
    question: "Who can become an agent?",
    answer:
      "Anyone with a phone and access to buyers can join. You don’t need a shop or capital to start.",
  },
  {
    question: "How do I get paid?",
    answer:
      "When your buyer pays and the order is confirmed, your commission is added to your wallet. You can then request a bank transfer payout.",
  },
  {
    question: "Do I need to keep stock?",
    answer:
      "No. You market our products using your link or offline, we handle the stock, delivery and after-sales.",
  },
];

export const agentRegisterData = [

    {
        
        name: "firstName",
        placeholder: "First Name",
        label: "First Name",
        isPassword: false,
        errorMessage: "Please enter the first name",
        validate: true
        
    },
    {
        
        name: "lastName",
        placeholder: "Last Name",
        label: "Last Name",
        isPassword: false,
        errorMessage: "Please enter the last name",
        validate: true
        
    },
    {
       
        name: "email",
        placeholder: "Email",
        label: "Email",
        isPassword: false,
        errorMessage: "Please enter a valid Email",
        validate: true,
        

    },
    {
       
        name: "phoneNumber",
        placeholder: "Phone Number",
        label: "Phone Number",
        isPassword: false,
        errorMessage: "Please enter a valid phone number",
        validate: true,
        

    },


];

export const agentLoginData = [

    {
       
        name: "email",
        placeholder: "Email",
        label: "Email",
        isPassword: false,
        errorMessage: "Please enter a valid Email",
        validate: true,
        

    },
    {
       
        name: "password",
        placeholder: "Password",
        label: "Password",
        isPassword: true,
        errorMessage: "Please enter a valid Password",
        validate: true,
        

    },


];

export const profileData = [
  {
    id: 1,
    title: "Contact Information",
    image: Agent,
    icon: IoIosContact,
    elements: [
      {
        label: "Full name",
        text: "Alex"
      },
      {
        label: "Phone Number",
        text: "08094324567"
      },
    ]
  },
  {
    id: 2,
    title: "Addresses",
    icon: FaRegAddressBook,
    elements: [

      {
        label: "Home address",
        text: "Apata, Ibadan"
      },
      {
        label: "Email",
        text: "alexolaleye345@yahoo.com"
      },
    ]
  },
  {
    id: 3,
    title: "Bank Information",
    icon: BsBank,
    elements: [

      {
        label: "Account name",
        text: "Alex"
      },
      {
        label: "Account number",
        text: "08094324567"
      },
      {
        label: "Bank name",
        text: "Opay"
      },
    ]
  },


]

