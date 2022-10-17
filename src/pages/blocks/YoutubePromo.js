const YoutubePromo = ({ screenWidth = 1024 }) => {
  const youtubeDemensions = {
    x: screenWidth >= 1024 ? 854 : screenWidth >= 768 ? 640 : screenWidth * 0.9,
    y:
      screenWidth >= 1024
        ? 480
        : screenWidth >= 768
        ? 360
        : (screenWidth * 0.9 * 9) / 16,
  }

  return (
    <div
      id="promo"
      className="w-full bg-primary flex p-4 items-center justify-center"
    >
      <iframe
        width={youtubeDemensions.x}
        height={youtubeDemensions.y}
        title="Magic Academy Promo"
        src="https://www.youtube.com/embed/V_70vMI5ShU"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default YoutubePromo
