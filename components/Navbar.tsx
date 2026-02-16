import { ArrowRight, Briefcase } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

const Navbar = () => {
    return (
        <nav className="border-b border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto h-16 flex flex-row items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-semibold text-xl text-primary">
                    <Briefcase />
                    Job Tracker
                </Link>
                <div className="flex flex-row items-center gap-2">
                    <Link href="/sign-in">
                        <Button className="cursor-pointer text-gray-600 hover:text-black font-semibold"
                            variant="ghost"
                        >
                            Login
                        </Button>
                    </Link>
                    <Link href="/sign-up">
                        <Button className="cursor-pointer bg-primary hover:bg-primary/90">
                            Start for free
                            <ArrowRight />
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar