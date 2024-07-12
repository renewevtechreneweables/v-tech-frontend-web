import React from 'react'
import CardWithCustomBullet from '@/components/CardWithCustomBullet'
function page() {
    const data = [
        {
            title: 'Formation of Group',
            items: [
                'Multiple industrial or commercial entities join together to form a group captive.',
                'These entities typically belong to the same industry or have similar electricity requirements.',
                'The group may include businesses operating in manufacturing, IT, textiles, pharmaceuticals, or any other sector with high electricity consumption.',
            ],
        },
        {
            title: 'Ownership and Operation',
            items: [
                'Each member of the group owns a share or stake in the captive power plant, either directly or through a separate entity established for this purpose.',
                'The captive power plant may utilize various sources of generation, including conventional sources like coal, natural gas, or renewable sources like solar, wind, or biomass.',
                "The group may choose to operate the captive power plant themselves or engage a third-party entity to manage the plant's operations and maintenance.",
            ],
        },
        {
            title: 'Electricity Procurement and Distribution',
            items: [
                'The primary purpose of the group captive is to generate electricity to meet the energy needs of its member entities.',
                'Electricity generated by the captive power plant is distributed among the members based on their agreed-upon share or allocation.',
                "In some cases, excess electricity generated beyond the group's requirements may be sold to the grid, providing additional revenue for the members.",
            ],
        },
        {
            title: 'Regulatory Framework and Benefits',
            items: [
                'The establishment and operation of group captive power plants are governed by regulatory frameworks set forth by local electricity regulatory authorities.',
                'Group captive arrangements often offer benefits such as reduced electricity costs, improved reliability, and greater control over energy supply.',
                'Members may also benefit from financial incentives, tax breaks, and exemptions available for captive power generation or renewable energy utilization.',
            ],
        },
    ]
    return (
        <>
            <section className="bg-theme-page bg-opacity-90 relative pt-24 pb-12  ">
                <div className="top-0 w-full h-full  ">
                    <div className="container p-5 m-auto flex items-end h-full w-full">
                        <div className="text-white space-y-3 md:space-y-5">
                            <div className="text-4xl md:text-5xl  md:max-w-4xl ">
                                <span className="text-black font-black ">
                                    Open Access
                                </span>{' '}
                                <span className="text-theme-default">
                                    (Group Captive)
                                </span>
                            </div>
                            <div className="bg-gradient-to-r from-[#61c06a] to-[#549b9b] inline-block text-transparent bg-clip-text text-3xl font-black my-5">
                                Overview
                            </div>
                            <p className="text-lg text-black text-left mb-8">
                                At V-TECH Renewables, we are passionate about
                                encouraging the use of renewable energy sources
                                by developing cutting-edge Open Access Group
                                Captive Solar models. Our goal is to help
                                businesses achieve their growth and
                                sustainability objectives by offering them
                                dependable, affordable, and eco-friendly solar
                                energy solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container  mx-auto p-5">
                <div className="bg-gradient-to-r from-[#61c06a] to-[#549b9b] inline-block text-transparent bg-clip-text text-3xl font-black my-5">
                    It's Benefits
                </div>
                <ul className=" text-lg text-left mb-8">
                    <li className="flex items-center gap-4">
                        <div className="p-1 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-[#f2f2f2] rounded-full" />
                        </div>
                        <span>Savings of 25-40% per unit electricity.</span>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="p-1 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-[#f2f2f2] rounded-full" />
                        </div>
                        <span>
                            Waiver of 'Cross-subsidy surcharge' on minimal 26%
                            capital investment.
                        </span>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="p-1 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-[#f2f2f2] rounded-full" />
                        </div>
                        <span>
                            Waiver of additional surcharge under 'Captive' and
                            'Group Captive' models.
                        </span>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="p-1 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-[#f2f2f2] rounded-full" />
                        </div>
                        <span>
                            No technical expertise required for complete energy
                            transition.
                        </span>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="p-1 bg-gradient-to-r from-[#61c06a] to-[#549b9b] rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-[#f2f2f2] rounded-full" />
                        </div>
                        <span>
                            Bulk power consumers can meet 70-80% of energy from
                            RE.
                        </span>
                    </li>
                </ul>
                <div className="bg-gradient-to-r from-[#61c06a] to-[#549b9b] inline-block text-transparent bg-clip-text text-3xl font-black my-5">
                    Explanation of the Group Captive (Open Access) Model
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-stretch">
                    {data.map((cardData, index) => (
                        <CardWithCustomBullet
                            key={index}
                            title={cardData.title}
                            items={cardData.items}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default page
