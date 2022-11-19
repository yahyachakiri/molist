export const ContainerSecond = ({children, className}) => {
    return (
        <div className={`m-laptop:px-[180px] sm:px-[150px] px-[30px] mx-auto w-auto max-w-[1920px] ${className}`}>
            {children}
        </div>
    )
}
