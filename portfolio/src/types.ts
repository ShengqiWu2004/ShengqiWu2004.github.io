import dayjs from "dayjs";
interface Image{
    src:string;
    alt:string;
}
export type Project = {
    name: string;
    link: string;
    bullets:string[];
    description: string;
    begin_time: Date;
    end_time: Date;
    rel_path: string;
    pictures: Image[];
    media: string[];
}