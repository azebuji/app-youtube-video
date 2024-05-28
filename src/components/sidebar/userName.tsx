

interface UserNameProps extends React.HTMLAttributes<HTMLDivElement> {
    name?: string | undefined;
    showYou?: boolean
}

const UserName = ({ name, showYou, ...rest }: UserNameProps) => (
    <>
        {
            <h5 {...rest}>{showYou ? "Você:" : ""}<small>{" " + name}</small> </h5>
        }
    </>
);

export default UserName;
