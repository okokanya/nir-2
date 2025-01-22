import React from 'react';
import './RingChart.css'; // Подключаем стили

const RingChart = ({ data }) => {
    const total = data.reduce((sum, segment) => sum + segment[1], 0);

    // Формируем строку для conic-gradient
    let cumulativePercentage = 0;
    const segmentPositions = [];
    const gradientString = data.map(([name, value, color]) => {
        const percentage = (value / total) * 100;
        const startPercentage = cumulativePercentage;
        const endPercentage = cumulativePercentage + percentage;
        const midPercentage = (startPercentage + endPercentage) / 2;
        cumulativePercentage += percentage;

        segmentPositions.push(midPercentage);
        return `${color} ${startPercentage.toFixed(2)}%, ${color} ${endPercentage.toFixed(2)}%`;
    }).join(', ');

    return (
        <div className="donut-chart">
            <div
                className="donut-container"
                style={{
                    background: `conic-gradient(${gradientString})`
                }}
            >
                {segmentPositions.map((position, index) => {
                    const angle = (position / 100) * 360;
                    const x = 50 + 40 * Math.cos((angle - 90) * (Math.PI / 180));
                    const y = 50 + 40 * Math.sin((angle - 90) * (Math.PI / 180));

                    const [name, value, color, emoji] = data[index];
                    const truncatedName =
                        name.length > 8 ? `${name.slice(0, 8)}...` : name;
                    const percentage = ((value / total) * 100).toFixed(1);

                    return (
                        <div
                            key={index}
                            className="donut-label"
                            style={{
                                position: 'absolute',
                                top: `${y}%`,
                                left: `${x}%`,
                                transform: 'translate(-50%, -50%)',
                                color: 'black',
                                textAlign: 'center'
                            }}
                        >
                            <span>{emoji} {truncatedName} {percentage}%</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RingChart;
