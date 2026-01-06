
function Intro() {

    return (
        <div>
        <div className="flex items-center justify-center pt-20 pb-2">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold drop-shadow-md mr-4">Ryan Kugler</h1>
            <img className="dark:border-white w-32 h-50 rounded-full border-4 border-black shadow-lg hidden md:block" src="/assets/headshot.jpg" alt="headshot photo"/>
        </div>
            <div className="flex items-center flex-col justify-center pt-10 pb-6">
                <p className="text-base sm:block md:text-xl mb-3 font-medium">Software Developer | BASc. in Computer Engineering</p>
                
                <p className="text-sm max-w-xl mb-6 font-bold">
                {' '}I’m Ryan, a University of Waterloo Computer Engineering graduate and tech-enthusiast based in Toronto, Canada. Here, you'll find a mix of personal projects and learning experiments, as well as a professional timeline.
                </p>
                <p className="text-sm max-w-xl mb-6 font-bold">
                        Check out my 
                    {' '}<a 
                    className="text-green-600 hover:underline underline-offset-2 decoration-2" 
                    href="https://github.com/ryankugler"
                    rel="noreferrer noopener">
                    GitHub
                    </a>
                </p>

            </div>
        </div>

    )
}

export default Intro;