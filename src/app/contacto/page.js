import Link from "next/link";
import Map from "../../components/Map";
import ContactForm from "../../components/ContactForm";
import ContactInfo from "../../components/ContactInfo";

export default function ContactPage() {
    return (
        <div>
            <div className="mx-10 md:mx-20 mt-20 mb-4  ">
                <ContactInfo />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center p-10 pb-20 gap-8">
                <div className="w-full md:w-1/2 ">
                    <ContactForm />
                </div>
                <div className="w-full md:w-1/2 pt-10">
                    <Map />
                </div>
            </div>
        </div>
    );
}