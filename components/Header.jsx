import Image from 'next/image'
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon} from "@heroicons/react/outline"
import HeaderItems from "./HeaderItems"
export default function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow lg:pt-4 justify-evenly max-w-2xl">
                <HeaderItems title="HOME" Icon={HomeIcon} />
                <HeaderItems title="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItems title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItems title="COLLECTIONS" Icon={CollectionIcon} />
                <HeaderItems title="SEARCH" Icon={SearchIcon} />
                <HeaderItems title="ACCOUNT" Icon={UserIcon} />
            </div>
            <Image 
            className="object-contain" 
            src="https://www.nicepng.com/png/full/242-2424140_hulu-png-logo-hulu-logo-white-png.png"
            width={200} 
            height={60} 
            />
        </header>
    )
}
