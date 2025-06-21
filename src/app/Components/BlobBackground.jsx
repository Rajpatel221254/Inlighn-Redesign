
export default function BlobBackground({ color1 = 'bg-primary', color2 = 'bg-purple-600' }) {
  return (
    <>
      <div className={`absolute top-[-120px] left-[-120px] w-[300px] h-[300px] ${color1} rounded-full blur-3xl opacity-20 animate-pulse z-0`} />
      <div className={`absolute bottom-[-120px] right-[-120px] w-[250px] h-[250px] ${color2} rounded-full blur-2xl opacity-20 animate-pulse z-0`} />
    </>
  )
}

