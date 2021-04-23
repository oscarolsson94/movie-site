import Image from 'next/image';

const Header = () => {
    return (
        <header className="" >
            <h1>Header</h1>
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
