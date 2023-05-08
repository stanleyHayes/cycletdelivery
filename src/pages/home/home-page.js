import Layout from "../../components/layout/layout";
import Banner from "../../components/shared/banner";
import AnimatedSection from "../../components/shared/animated-section";
import ServicesSection from "../../components/shared/services-section";
import ChoicesSection from "../../components/shared/choices-section";
import TeamSection from "../../components/shared/team-seciton";
import {Element} from "react-scroll";
import PricingSection from "../../components/shared/pricing-section";
import ContactSection from "../../components/shared/contact-section";
import OrderSection from "../../components/shared/order-section";

const HomePage = () => {

    return (
        <Layout>
            <Element name="home">
                <AnimatedSection backgroundColor="light.secondary">
                    <Banner/>
                </AnimatedSection>
            </Element>

            <Element name="about">
                <AnimatedSection>
                    <ServicesSection/>
                </AnimatedSection>

                <AnimatedSection>
                    <ChoicesSection/>
                </AnimatedSection>

                <AnimatedSection>
                    <TeamSection/>
                </AnimatedSection>
            </Element>

            <Element name="pricing">
                <AnimatedSection backgroundColor="light.accent">
                    <PricingSection/>
                </AnimatedSection>
            </Element>

            <Element name="order">
                <AnimatedSection>
                    <OrderSection/>
                </AnimatedSection>

            </Element>
            <Element name="contact">
                <AnimatedSection>
                    <ContactSection/>
                </AnimatedSection>
            </Element>
        </Layout>
    )
}

export default HomePage;