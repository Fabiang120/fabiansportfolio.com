"use client";
import PartingGift from "../PartingGift/page";
import FBA from "../FBA/page"
import ConAmi from "../ConAmi/page"
export default function WorksPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#111111]">
            <PartingGift portal={true}/>
            <FBA portal={true}/>
            <ConAmi portal={true}/>
            <h1 className="mb-20">There is still more being added here...</h1>
        </div>
    );
}
