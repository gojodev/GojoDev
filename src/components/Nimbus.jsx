const Nimbus = () => {
    let start = new Date('02/04/2025').getTime()
    let end = new Date('08/25/2025').getTime()

    const progress = Number(start / end)
    console.log(progress)

    const styling = `bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[${progress}]%`
    return (
        <div className="m-auto">

            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className={styling}> {progress}</div>
            </div>

        </div>
    )
}

export default Nimbus