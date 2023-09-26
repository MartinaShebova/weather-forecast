import { screen, waitFor } from '@testing-library/react';
import FiveDaysWeather from './FiveDaysWeather';
import renderWithRouter from '../../renderWithRouter';
import userEvent from '@testing-library/user-event';

const mockProps = {
    cityName: 'Random city',
    fiveDaysWeatherData: [
        {
            "dt": 1695578400,
            "main": {
                "temp": 21.03,
                "feels_like": 21.09,
                "temp_min": 20.8,
                "temp_max": 21.03,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 949,
                "humidity": 73,
                "temp_kf": 0.23
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 56
            },
            "wind": {
                "speed": 1.99,
                "deg": 66,
                "gust": 3.92
            },
            "visibility": 10000,
            "pop": 0.29,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-24 18:00:00"
        },
        {
            "dt": 1695589200,
            "main": {
                "temp": 19.99,
                "feels_like": 19.98,
                "temp_min": 19.42,
                "temp_max": 19.99,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 950,
                "humidity": 74,
                "temp_kf": 0.57
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 73
            },
            "wind": {
                "speed": 2.19,
                "deg": 60,
                "gust": 4.23
            },
            "visibility": 10000,
            "pop": 0.22,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-24 21:00:00"
        },
        {
            "dt": 1695600000,
            "main": {
                "temp": 18.09,
                "feels_like": 17.99,
                "temp_min": 18.09,
                "temp_max": 18.09,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 950,
                "humidity": 78,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 95
            },
            "wind": {
                "speed": 2.53,
                "deg": 74,
                "gust": 4.76
            },
            "visibility": 10000,
            "pop": 0.34,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-25 00:00:00"
        },
        {
            "dt": 1695610800,
            "main": {
                "temp": 16.99,
                "feels_like": 16.91,
                "temp_min": 16.99,
                "temp_max": 16.99,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 951,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.05,
                "deg": 74,
                "gust": 6.19
            },
            "visibility": 10000,
            "pop": 0.1,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-25 03:00:00"
        },
        {
            "dt": 1695621600,
            "main": {
                "temp": 17.01,
                "feels_like": 17.01,
                "temp_min": 17.01,
                "temp_max": 17.01,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 952,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.2,
                "deg": 84,
                "gust": 6.33
            },
            "visibility": 10000,
            "pop": 0.47,
            "rain": {
                "3h": 0.56
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-25 06:00:00"
        },
        {
            "dt": 1695632400,
            "main": {
                "temp": 20.21,
                "feels_like": 20.11,
                "temp_min": 20.21,
                "temp_max": 20.21,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 953,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.49,
                "deg": 72,
                "gust": 5.04
            },
            "visibility": 10000,
            "pop": 0.68,
            "rain": {
                "3h": 0.52
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-25 09:00:00"
        },
        {
            "dt": 1695643200,
            "main": {
                "temp": 21.26,
                "feels_like": 21.03,
                "temp_min": 21.26,
                "temp_max": 21.26,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 953,
                "humidity": 61,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.17,
                "deg": 61,
                "gust": 6.39
            },
            "visibility": 10000,
            "pop": 0.45,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-25 12:00:00"
        },
        {
            "dt": 1695654000,
            "main": {
                "temp": 21.57,
                "feels_like": 21.19,
                "temp_min": 21.57,
                "temp_max": 21.57,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 953,
                "humidity": 54,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.16,
                "deg": 59,
                "gust": 8.53
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-25 15:00:00"
        },
        {
            "dt": 1695664800,
            "main": {
                "temp": 20.6,
                "feels_like": 19.92,
                "temp_min": 20.6,
                "temp_max": 20.6,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 953,
                "humidity": 46,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.47,
                "deg": 54,
                "gust": 9.13
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-25 18:00:00"
        },
        {
            "dt": 1695675600,
            "main": {
                "temp": 19.49,
                "feels_like": 18.67,
                "temp_min": 19.49,
                "temp_max": 19.49,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 953,
                "humidity": 45,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.36,
                "deg": 68,
                "gust": 10.67
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-25 21:00:00"
        },
        {
            "dt": 1695686400,
            "main": {
                "temp": 17.22,
                "feels_like": 16.49,
                "temp_min": 17.22,
                "temp_max": 17.22,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 952,
                "humidity": 57,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.09,
                "deg": 59,
                "gust": 7.66
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-26 00:00:00"
        },
        {
            "dt": 1695697200,
            "main": {
                "temp": 15.13,
                "feels_like": 14.5,
                "temp_min": 15.13,
                "temp_max": 15.13,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 952,
                "humidity": 69,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.29,
                "deg": 51,
                "gust": 5.04
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-26 03:00:00"
        },
        {
            "dt": 1695708000,
            "main": {
                "temp": 16.1,
                "feels_like": 15.44,
                "temp_min": 16.1,
                "temp_max": 16.1,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 953,
                "humidity": 64,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.38,
                "deg": 59,
                "gust": 5.89
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-26 06:00:00"
        },
        {
            "dt": 1695718800,
            "main": {
                "temp": 21.19,
                "feels_like": 20.59,
                "temp_min": 21.19,
                "temp_max": 21.19,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 953,
                "humidity": 47,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 45
            },
            "wind": {
                "speed": 5.91,
                "deg": 68,
                "gust": 7.47
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-26 09:00:00"
        },
        {
            "dt": 1695729600,
            "main": {
                "temp": 23.95,
                "feels_like": 23.42,
                "temp_min": 23.95,
                "temp_max": 23.95,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 953,
                "humidity": 39,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 26
            },
            "wind": {
                "speed": 7.11,
                "deg": 64,
                "gust": 9.04
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-26 12:00:00"
        },
        {
            "dt": 1695740400,
            "main": {
                "temp": 23.18,
                "feels_like": 22.68,
                "temp_min": 23.18,
                "temp_max": 23.18,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 952,
                "humidity": 43,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 19
            },
            "wind": {
                "speed": 7.03,
                "deg": 58,
                "gust": 9.39
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-26 15:00:00"
        },
        {
            "dt": 1695751200,
            "main": {
                "temp": 20.4,
                "feels_like": 19.78,
                "temp_min": 20.4,
                "temp_max": 20.4,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 952,
                "humidity": 49,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 59
            },
            "wind": {
                "speed": 4.75,
                "deg": 54,
                "gust": 11.49
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-26 18:00:00"
        },
        {
            "dt": 1695762000,
            "main": {
                "temp": 18.32,
                "feels_like": 17.57,
                "temp_min": 18.32,
                "temp_max": 18.32,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 953,
                "humidity": 52,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.71,
                "deg": 84,
                "gust": 7.85
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-26 21:00:00"
        },
        {
            "dt": 1695772800,
            "main": {
                "temp": 14.98,
                "feels_like": 14.15,
                "temp_min": 14.98,
                "temp_max": 14.98,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 952,
                "humidity": 62,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 90
            },
            "wind": {
                "speed": 2.3,
                "deg": 63,
                "gust": 3.88
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-27 00:00:00"
        },
        {
            "dt": 1695783600,
            "main": {
                "temp": 13.83,
                "feels_like": 12.99,
                "temp_min": 13.83,
                "temp_max": 13.83,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 952,
                "humidity": 66,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 95
            },
            "wind": {
                "speed": 1.8,
                "deg": 57,
                "gust": 3.08
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-27 03:00:00"
        },
        {
            "dt": 1695794400,
            "main": {
                "temp": 15.45,
                "feels_like": 14.7,
                "temp_min": 15.45,
                "temp_max": 15.45,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 953,
                "humidity": 63,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 98
            },
            "wind": {
                "speed": 2.42,
                "deg": 67,
                "gust": 7.09
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-27 06:00:00"
        },
        {
            "dt": 1695805200,
            "main": {
                "temp": 20.56,
                "feels_like": 19.9,
                "temp_min": 20.56,
                "temp_max": 20.56,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 954,
                "humidity": 47,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.96,
                "deg": 76,
                "gust": 6.66
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-27 09:00:00"
        },
        {
            "dt": 1695816000,
            "main": {
                "temp": 22.67,
                "feels_like": 22.06,
                "temp_min": 22.67,
                "temp_max": 22.67,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 954,
                "humidity": 41,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.97,
                "deg": 66,
                "gust": 6.94
            },
            "visibility": 10000,
            "pop": 0.02,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-27 12:00:00"
        },
        {
            "dt": 1695826800,
            "main": {
                "temp": 21.55,
                "feels_like": 20.94,
                "temp_min": 21.55,
                "temp_max": 21.55,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 953,
                "humidity": 45,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.27,
                "deg": 59,
                "gust": 6.8
            },
            "visibility": 10000,
            "pop": 0.1,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-27 15:00:00"
        },
        {
            "dt": 1695837600,
            "main": {
                "temp": 18.2,
                "feels_like": 17.54,
                "temp_min": 18.2,
                "temp_max": 18.2,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 953,
                "humidity": 56,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.28,
                "deg": 65,
                "gust": 6.24
            },
            "visibility": 10000,
            "pop": 0.1,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-27 18:00:00"
        },
        {
            "dt": 1695848400,
            "main": {
                "temp": 17.11,
                "feels_like": 16.29,
                "temp_min": 17.11,
                "temp_max": 17.11,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 953,
                "humidity": 54,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 1.29,
                "deg": 26,
                "gust": 2.41
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-27 21:00:00"
        },
        {
            "dt": 1695859200,
            "main": {
                "temp": 15.25,
                "feels_like": 14.29,
                "temp_min": 15.25,
                "temp_max": 15.25,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 953,
                "humidity": 56,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 1.33,
                "deg": 6,
                "gust": 1.48
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-28 00:00:00"
        },
        {
            "dt": 1695870000,
            "main": {
                "temp": 14.03,
                "feels_like": 13.06,
                "temp_min": 14.03,
                "temp_max": 14.03,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 953,
                "humidity": 60,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 97
            },
            "wind": {
                "speed": 1.09,
                "deg": 22,
                "gust": 1.28
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-28 03:00:00"
        },
        {
            "dt": 1695880800,
            "main": {
                "temp": 16.05,
                "feels_like": 15.12,
                "temp_min": 16.05,
                "temp_max": 16.05,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 954,
                "humidity": 54,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 98
            },
            "wind": {
                "speed": 1.2,
                "deg": 15,
                "gust": 2.22
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-28 06:00:00"
        },
        {
            "dt": 1695891600,
            "main": {
                "temp": 21.5,
                "feels_like": 20.67,
                "temp_min": 21.5,
                "temp_max": 21.5,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 954,
                "humidity": 37,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 33
            },
            "wind": {
                "speed": 4.31,
                "deg": 58,
                "gust": 6.59
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-28 09:00:00"
        },
        {
            "dt": 1695902400,
            "main": {
                "temp": 22.94,
                "feels_like": 22.2,
                "temp_min": 22.94,
                "temp_max": 22.94,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 954,
                "humidity": 35,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 37
            },
            "wind": {
                "speed": 5.7,
                "deg": 55,
                "gust": 6.58
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-28 12:00:00"
        },
        {
            "dt": 1695913200,
            "main": {
                "temp": 21.41,
                "feels_like": 20.49,
                "temp_min": 21.41,
                "temp_max": 21.41,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 954,
                "humidity": 34,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 95
            },
            "wind": {
                "speed": 4.84,
                "deg": 53,
                "gust": 6.3
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-28 15:00:00"
        },
        {
            "dt": 1695924000,
            "main": {
                "temp": 16.78,
                "feels_like": 15.64,
                "temp_min": 16.78,
                "temp_max": 16.78,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 954,
                "humidity": 43,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 74
            },
            "wind": {
                "speed": 0.98,
                "deg": 36,
                "gust": 1.13
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-28 18:00:00"
        },
        {
            "dt": 1695934800,
            "main": {
                "temp": 15.3,
                "feels_like": 14.06,
                "temp_min": 15.3,
                "temp_max": 15.3,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 955,
                "humidity": 45,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 57
            },
            "wind": {
                "speed": 0.94,
                "deg": 316,
                "gust": 1.17
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-28 21:00:00"
        },
        {
            "dt": 1695945600,
            "main": {
                "temp": 14.3,
                "feels_like": 13.04,
                "temp_min": 14.3,
                "temp_max": 14.3,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 954,
                "humidity": 48,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 59
            },
            "wind": {
                "speed": 0.89,
                "deg": 289,
                "gust": 1.39
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-29 00:00:00"
        },
        {
            "dt": 1695956400,
            "main": {
                "temp": 13.61,
                "feels_like": 12.33,
                "temp_min": 13.61,
                "temp_max": 13.61,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 954,
                "humidity": 50,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 66
            },
            "wind": {
                "speed": 0.73,
                "deg": 286,
                "gust": 1.04
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-29 03:00:00"
        },
        {
            "dt": 1695967200,
            "main": {
                "temp": 16.39,
                "feels_like": 15.21,
                "temp_min": 16.39,
                "temp_max": 16.39,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 955,
                "humidity": 43,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 74
            },
            "wind": {
                "speed": 0.57,
                "deg": 286,
                "gust": 0.89
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-29 06:00:00"
        },
        {
            "dt": 1695978000,
            "main": {
                "temp": 22.96,
                "feels_like": 22.07,
                "temp_min": 22.96,
                "temp_max": 22.96,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 956,
                "humidity": 29,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 33
            },
            "wind": {
                "speed": 1.31,
                "deg": 56,
                "gust": 3.31
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-29 09:00:00"
        },
        {
            "dt": 1695988800,
            "main": {
                "temp": 24.97,
                "feels_like": 24.1,
                "temp_min": 24.97,
                "temp_max": 24.97,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 954,
                "humidity": 22,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 40
            },
            "wind": {
                "speed": 4.61,
                "deg": 46,
                "gust": 3.97
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-29 12:00:00"
        },
        {
            "dt": 1695999600,
            "main": {
                "temp": 22.51,
                "feels_like": 21.52,
                "temp_min": 22.51,
                "temp_max": 22.51,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 954,
                "humidity": 27,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.53,
                "deg": 40,
                "gust": 4.71
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-29 15:00:00"
        }
    ],
    showHourlyForecast: true
}

describe('5 days weather forecast tests', () => {
    test('renders 5 weather-box elements', async () => {
        renderWithRouter(<FiveDaysWeather {...mockProps} />, []);

        const weatherBoxes = await screen.findAllByTestId('weather-box');

        expect(weatherBoxes).toHaveLength(5);
    });

    test('renders detailed forecast container on click', async () => {
        renderWithRouter(<FiveDaysWeather {...mockProps} />, []);

        const firstWeatherBox = await screen.findAllByTestId('weather-box');
        userEvent.click(firstWeatherBox[0]);

        const detailedForecastContainer = await screen.findByTestId('detailed-forecast');

        expect(detailedForecastContainer).toBeInTheDocument();
    });
});