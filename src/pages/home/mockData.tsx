export type course = {
    courseId: string;
    name: string;
    longitude: number;
    latitude: number;
    startTime: string;
    endTime: string;
    weekday: string;
}

// 8:00-9:35
// 9:50-11:25
// 11:30-12:15

// 13:00-14:35
// 14:50-16:25
// 16:30-17:15

// 18:00-19:35
// 19:40-21:50

export const mockCourses:course[] = [
    {
        "courseId": "COMC0031112047.01",
        "name": "人工智能基础课程",
        "longitude": 300,
        "latitude": 400,
        "startTime": "8:00:00",
        "endTime": "9:50:00",
        "weekday": "tuesday",
    },
    {
        "courseId": "SOFT-225043",
        "name": "制造业课程",
        "longitude": 146.695655,
        "latitude": 554.689177,
        "startTime": "9:50:00",
        "endTime": "11:20:00",
        "weekday": "tuesday"
    },
    {
        "courseId": "SOFT-66980",
        "name": "制药业课程",
        "longitude": 319.531111,
        "latitude": 812.343291,
        "startTime": ":33:30",
        "endTime": "21:33:30",
        "weekday": "tuesday"
    }
]