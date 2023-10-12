import ThemeToggle from "./theme-toggle";

const Footer = () => {
    return (
        <>
            <div className="flex justify-between w-full pt-6 text-xs border-t border-neutral-200 dark:border-neutral-800">
                <div className="text-neutral-500">
                    Built by @pkpukaow | ©2023 pkpukaow. All Rights Reserved
                </div>
                <ThemeToggle />
            </div>
        </>
    )
}

export default Footer;