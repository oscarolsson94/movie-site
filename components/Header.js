import Image from 'next/image';
import HeaderItem from './HeaderItem';
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline';

const Header = () => {
    return (
        <header className="" >
            <div>
                <HeaderItem title="Home" Icon={HomeIcon} />
            </div>
            <Image
                className="object-contain"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Hulu_Logo.svg/1200px-Hulu_Logo.svg.png"
                width={200}
                height={100}
            />
        </header>
    );
}

export default Header;
