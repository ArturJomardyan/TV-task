export const MenuIconItem = ({ icon, name }) => (
    <div className="menuIconItem">
        <img src={icon} alt="Girl in a jacket" width="25" height="25" />
        <p className="menuItemName">{name}</p>
    </div>
)