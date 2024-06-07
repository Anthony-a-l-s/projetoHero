import classNames from "classnames"

type Props ={
    title: string;
    setselected?: (selected: boolean) => void;
    className?: string
    variant?: 'ligth' | 'dark';
    onClick?: (title: any) => void;
}

export function Button({title, className, variant = 'dark', onClick }: Props) {
    return (
        <button className={classNames([
            'bg-evergreen-light px-6 py-2 rounded-lg shadow font-mediun mt-3',
            variant === 'dark' && 'bg-evergreen-light  text-white',
            variant === 'ligth' && 'bg-white border-2 border-evergreen-light text-evergreen-light ',
            className,
        ])} onClick={onClick}>
            {title}
        </button>
    )
}