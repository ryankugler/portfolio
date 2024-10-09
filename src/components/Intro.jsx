
function Intro() {

    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Ryan Kugler</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Developer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                    Check out my 
                {' '}<a 
                className="text-green-600 hover:underline underline-offset-2 decoration-2" 
                href="https://github.com/ryankugler"
                rel="noreferrer noopener">
                Github
                </a>
            </p>

        </div>
    )
}

export default Intro;