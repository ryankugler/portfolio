import React from "react";

function TimelineItem({year, title, company, duration, details}) {

    return (
        <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
            <li className="mb-8 ml-4">
                <div className="absolute w-3 h-3 bg-stone-200
                rounded-full mt-1.5 -left-1.5 border border-white"/>
                <p className="flex flex-wrap gap-3 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 py-1 font-semibold text-white bg-stone-900 rounded-md">
                        {year}
                    </span>
                        <h3 className="text-lg font-semibold text-stone-900">
                            {title} @ {' '}
                            <span className="text-md font-medium text-blue-500">{company}</span>
                        </h3>

                    <div className="my-1 text-sm font-normal leading-none text-stone-400">
                        {duration}
                    </div>
                </p>
                    <p className="text-base font-normal text-stone-500">
                        {details.map(item => (
                        <p className="pt-1 pl-4">- {item}</p>
                        ))}
                    </p>
            </li>

        </ol>
    )
}

export default TimelineItem;