const WorkingHours = (): JSX.Element => {
    return (
        <table className="border-collapse text-left">
            <tbody>
                <tr>
                    <td className="px-4 py-2">Pirmadienis</td>
                    <td className="px-4 py-2">08:00 - 20:00</td>
                </tr>
                <tr>
                    <td className="px-4 py-2">Antradienis</td>
                    <td className="px-4 py-2">08:00 - 20:00</td>
                </tr>
                <tr>
                    <td className="px-4 py-2">Treciadienis</td>
                    <td className="px-4 py-2">08:00 - 20:00</td>
                </tr>
                <tr>
                    <td className="px-4 py-2">Ketvirtadienis</td>
                    <td className="px-4 py-2">08:00 - 20:00</td>
                </tr>
                <tr>
                    <td className="px-4 py-2">Penktadienis</td>
                    <td className="px-4 py-2">08:00 - 20:00</td>
                </tr>
                <tr>
                    <td className="px-4 py-2">Sestadienis</td>
                    <td className="px-4 py-2">08:00 - 20:00</td>
                </tr>
                <tr>
                    <td className="px-4 py-2">Sekmadienis</td>
                    <td className="px-4 py-2 text-red-500">Nedirbame</td>
                </tr>
            </tbody>
        </table>
    );
}

export default WorkingHours;