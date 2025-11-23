export default function HeaderTitle({ title , className }: { title: string , className?: string }) {
  return (
    <h2 className={"md:text-2xl text-[22px] font-medium "+ className}>{title}</h2>
  )
}