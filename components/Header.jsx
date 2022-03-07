import Image from 'next/image'
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon} from "@heroicons/react"
import HeaderItems from "./HeaderItems"
export default function Header() {
    return (
        <header>
            <div className="">
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
            height={100} 
            />
        </header>
    )
}
