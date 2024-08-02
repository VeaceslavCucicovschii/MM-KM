const Header = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(false);

    const handleToggleOpen = () => {
        setIsToggleOpen(!isToggleOpen);
    };

    return (
        <nav className="my-14">
            <div className="container">
                <img></img>
                <div>
                    <ul></ul>

                </div>
            </div>
        </nav>
    )
}