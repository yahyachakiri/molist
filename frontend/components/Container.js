export const Container = ({children, className}) => {
    return (
        <div className={`sm:px-14 px-2 mx-auto w-auto max-w-[1920px] ${className}`}>
            {children}
        </div>
    )
}
