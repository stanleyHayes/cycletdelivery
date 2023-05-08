import sliderImage1 from "././../assets/images/slider/pexels-karolina-grabowska-4239036.jpg";
import sliderImage2 from "././../assets/images/slider/pexels-karolina-grabowska-4239146.jpg";
import sliderImage3 from "././../assets/images/slider/pexels-karolina-grabowska-4239130.jpg";
import sliderImage4 from "././../assets/images/slider/pexels-tima-miroshnichenko-6195125.jpg";
import sliderImage5 from "././../assets/images/slider/pexels-tima-miroshnichenko-6195277.jpg";

import student from "././../assets/images/pricing/student.png";
import lecturer from "././../assets/images/pricing/lecturer.png";
import others from "././../assets/images/pricing/others.png";

const BANNER_SLIDER_IMAGES = [sliderImage1, sliderImage2, sliderImage3, sliderImage4, sliderImage5];
const STAFF = [
    {
        name: "Emery Bonzou",
        role: "Founder/CEO"
    },
    {
        name: "Farima Konaré",
        role: "Cofounder/CTO"
    },
    {
        name: "Othniel Fohe",
        role: "Cofounder/CTO"
    },
    {
        name: "Grâce Norman",
        role: "Cofounder/CMO"
    },

    {
        name: "Cindy Bibalou",
        role: "Advisor"
    },
    {
        name: "Yvann Mayoukou",
        role: "Advisor"
    }
];
const SERVICES = [
    {
        icon: "",
        name: "Place Order",
    },
    {
        icon: "",
        name: "Pickup Order",
    },
    {
        icon: "",
        name: "Deliver Order",
    },
    {
        icon: "",
        name: "Make Payment",
    }
];

const PRICING = [
    {
        category: "Student",
        price: {
            amount: 2.50,
            currency: "GHS"
        },
        image: student
    },
    {
        category: "Lecturer",
        price: {
            amount: 3,
            currency: "GHS"
        },
        image: lecturer
    },
    {
        category: "Others",
        price: {
            amount: 10,
            currency: "GHS"
        },
        image: others
    }
]
export const CYCLET_DELIVERY_DATA = {BANNER_SLIDER_IMAGES, STAFF, SERVICES, PRICING};