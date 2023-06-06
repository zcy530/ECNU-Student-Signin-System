export type leave = {
    noteId: number;
    week: number;
    reason: string;
    time: string;
    status: number;
    term: string;
    name: string | null;
    refuseReason: string | null;
    type: string | null;
    changeTime: string | null;
    id: number | null;
    student_id: number;
    course_id: string;
    course_name: string;
    professor_id: number;
}

export const leaveData:leave[] = [
    {
        "noteId": 153,
        "week": 10,
        "reason": "胃疼，希望可以请假去医院治疗",
        "time": "2022-10-11 17:45:01.0",
        "status": 1,
        "term": "2023年春季学期",
        "name": "朱岩",
        "refuseReason": null,
        "type": "病假",
        "changeTime": null,
        "id": null,
        "student_id": 10205101485,
        "course_id": "sei-gjbc",
        "course_name": "高级编程",
        "professor_id": 5101485
    },
    {
        "noteId": 154,
        "week": 9,
        "reason": "校外有不能错过的重要会议，需要参加，希望请假",
        "time": "2022-10-11 17:45:01.0",
        "status": 0,
        "term": "2023年春季学期",
        "name": "朱岩",
        "refuseReason": null,
        "type": "事假",
        "changeTime": null,
        "id": null,
        "student_id": 10205101485,
        "course_id": "sei-gjbc",
        "course_name": "人工智能导论",
        "professor_id": 5101485
    }
]