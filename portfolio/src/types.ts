import dayjs from "dayjs";
interface Image{
    src:string;
    alt:string;
}
interface ProjectAnchor{
    anchor:string;
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

export type Experience = {
    companyName: string;
    companyLink: string;
    companyPosition:string;
    jobTitle: string;
    jobDescription: string;
    projects: ProjectAnchor[];
    begin_time: Date;
    isEnded: boolean;
    end_time: Date;
}