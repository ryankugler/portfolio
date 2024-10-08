function PortfolioItem({title, imgUrl, stack, description, link}) {

    return (
        <div className="border-2 border-stone-900 rounded-md overflow-hidden">
            <img src={imgUrl} 
            alt="portfolio"
            className="w-full sm:h-50 h-36 md:h-48 cursor-pointer"/>
            <div className="w-full p-4">
                <h3 className="text-lg md:text-lg mb-2 md:mb-1 font-semibold">{title}</h3>
                <p className="text-md justify-center pb-2 font-medium align-middle italic">
                    {description}   
                </p>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                    {stack.map(item => (
                        <span className="inline-block px-2
                        py-1 font-semibold border-2 border-stone-900 rounded-md">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </div>  
    )
}

export default PortfolioItem;