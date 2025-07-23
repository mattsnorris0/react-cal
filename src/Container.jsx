export default function Container({ children }) {
    return (
        <div className='p-4 sm:p-6'>
            <div>{children}</div>
        </div>
    );
}
