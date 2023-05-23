import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown"
import "@leenguyen/react-flip-clock-countdown/dist/index.css"

export default function CountDown() {
  return (
    <>
      <div className="w-[100%] h-[100vh] bg-gray-900 flex flex-col justify-center items-center">
      <div className="text-white font-bold text-[50px]">We Are Almost Here</div>
      <p className="text-green-500 mb-10">Get ready for the Biggest Sale-Mela of the Year</p>
        <div>
          <FlipClockCountdown
            className="px-5 py-4 border-2 border-white rounded-xl"
            to={new Date('Aug 17, 2023 12:00:00').getTime()}
            labels={["Days", "Hours", "Minutes", "Seconds"]}
            duration={0.5}
          />
        </div>
      </div>
    </>
  )
}
