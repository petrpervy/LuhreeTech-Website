export function CTAButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>){
  const { className='', ...rest } = props
  return (
    <button
      className={[
        'pill px-6 py-3 text-[15px] font-medium',
        'bg-gradient-to-b from-[#FFC563] to-[#FF9F42]',
        'text-neutral-900',
        'shadow-glass hover:shadow-glassHover transition',
        'focus-visible:focus-ring',
        className
      ].join(' ')}
      {...rest}
    />
  )
}
