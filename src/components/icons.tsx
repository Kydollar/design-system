import { MoonStar } from "lucide-react"
import {
    AlertTriangle,
    ArrowRight,
    Check,
    ChevronLeft,
    ChevronRight,
    CreditCard,
    File,
    FileText,
    HelpCircle,
    Image,
    Laptop,
    Loader2,
    LucideProps,
    MoreVertical,
    Pizza,
    Plus,
    Settings,
    SunMedium,
    Trash,
    Twitter,
    User,
    X,
    type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

{/* <svg
    id="devriz"
    data-name="devriz"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 255.12 255.12"
    {...props}
>
    <path d="M151.48,13.66H.94c0,18.58,15.06,33.65,33.65,33.65h117.22c37.17,0,68.68,29.22,69.45,66.38,.54,26.27-13.96,49.29-35.48,61.01l24.46,24.46c27.16-18.41,44.95-49.6,44.68-84.85-.43-56.04-47.38-100.65-103.43-100.65Z" />
    <path d="M255.12,244.05h-47.58L89.37,125.88h58.99c8.01,0,14.77-4.91,14.77-10.77s-6.76-10.8-14.77-10.8H34.59v47.92c0,16.89,13.76,30.69,30.69,30.69h33.58l33.65,33.65H65.27C29.78,216.56,.94,187.69,.94,152.22V70.66H148.35c26.68,0,48.42,19.95,48.42,44.45,0,18.37-12.25,34.19-29.64,40.95l18.61,18.64h.03l69.35,69.35Z" />
</svg> */}

export const Icons = {
    logo: ({ ...props }: LucideProps) => (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="devriz"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 24 24"
            {...props}
        >
            <path fill="currentColor" d="M14.0398 2H1C1 3.60259 2.3045 4.90243 3.91476 4.90243H14.0684C17.288 4.90243 20.0174 7.42275 20.0841 10.6279C20.1309 12.8938 18.8641 14.9891 17 16L19 18C21.3526 16.4121 23.0231 13.7218 22.9997 10.6814C22.9625 5.84776 18.8948 2 14.0398 2Z" />
            <path fill="currentColor" d="M23 22H18.8818L8.65387 11.7771H13.7596C14.4529 11.7771 15.038 11.3523 15.038 10.8454C15.038 10.3384 14.4529 9.91107 13.7596 9.91107H3.9125V14.0566C3.9125 15.5178 5.10347 16.7116 6.56881 16.7116H9.47525L12.3878 19.6227H6.56794C3.49618 19.6218 1 17.1243 1 14.0558V7H13.7588C16.068 7 17.9496 8.72588 17.9496 10.8454C17.9496 12.4346 16.8894 13.8032 15.3842 14.388L16.995 16.0005H16.9976L23 22Z" />
        </svg>
    ),
    close: X,
    spinner: Loader2,
    chevronLeft: ChevronLeft,
    chevronRight: ChevronRight,
    trash: Trash,
    post: FileText,
    page: File,
    media: Image,
    settings: Settings,
    billing: CreditCard,
    ellipsis: MoreVertical,
    add: Plus,
    warning: AlertTriangle,
    user: User,
    arrowRight: ArrowRight,
    help: HelpCircle,
    pizza: Pizza,
    sun: SunMedium,
    moon: MoonStar,
    laptop: Laptop,
    gitHub: ({ ...props }: LucideProps) => (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="github"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            {...props}
        >
            <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            ></path>
        </svg>
    ),
    twitter: Twitter,
    check: Check,
}
