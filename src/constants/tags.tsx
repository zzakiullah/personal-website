import { ReactElement } from "react";
import {
    FaPython,
    FaJava,
    FaHtml5,
    FaCss3Alt,
    FaSass,
    FaReact,
    FaVuejs,
    FaAngular,
    FaNodeJs,
    FaPhp,
    FaAws,
    FaGitAlt,
    FaJenkins,
    FaLinux,
    FaDocker,
    FaMicrochip,
} from "react-icons/fa6";
import {
    BiLogoCPlusPlus,
    BiLogoGoLang,
    BiLogoJavascript,
    BiLogoTypescript,
    BiLogoTailwindCss,
    BiLogoRedux,
    BiLogoPostgresql,
    BiLogoGraphql,
    BiLogoMongodb,
    BiLogoSpringBoot,
    BiLogoVisualStudio,
    BiSolidMicrochip,
} from "react-icons/bi";
import {
    SiRuby,
    SiAndroid,
    SiFirebase,
    SiKicad,
    SiAltiumdesigner,
    SiLtspice,
    SiStmicroelectronics,
    SiEspressif,
    SiProteus,
    SiAmd,
    SiAutocad,
} from "react-icons/si";
import { TbMathMaxMin } from "react-icons/tb";
import { GiCircuitry } from "react-icons/gi";

interface ITag {
    icon: ReactElement;
    text: string;
    bgColor: string;
    color: string;
}

enum Tag {
    Python = 0,
    CPlusPlus,
    Java,
    MATLAB,
    Ruby,
    Go,
    JavaScript,
    TypeScript,
    HTML,
    CSS,
    Sass,
    React,
    Vue,
    Angular,
    Tailwind,
    Redux,
    Android,
    ReactNative,
    Node,
    PHP,
    PostgreSQL,
    GraphQL,
    Firebase,
    MongoDB,
    Spring,
    AWS,
    Git,
    Jenkins,
    Linux,
    Docker,
    VSCode,
    VHDL,
    Verilog,
    KiCad,
    AltiumDesigner,
    LTspice,
    Cadence,
    STM32,
    ESP32,
    Proteus,
    Vivado,
    AutoCAD,
};

const tags: ITag[] = [
    {
        icon: <FaPython color={"#306998"} />,
        text: "Python",
        bgColor: "#ffd43b",
        color: "black",
    },
    {
        icon: <BiLogoCPlusPlus />,
        text: "C/C++",
        bgColor: "#004482",
        color: "white",
    },
    {
        icon: <FaJava color={"#5382a1"} />,
        text: "Java",
        bgColor: "#f89820",
        color: "black",
    },
    {
        icon: <TbMathMaxMin color={"#e76e38"} />,
        text: "MATLAB",
        bgColor: "#0076a8",
        color: "white",
    },
    {
        icon: <SiRuby />,
        text: "Ruby",
        bgColor: "#d51f06", // lighter: #de3f24, darker: #d51f06
        color: "white",
    },
    {
        icon: <BiLogoGoLang />,
        text: "Go",
        bgColor: "#00ADD8",
        color: "white",
    },
    {
        icon: <BiLogoJavascript />,
        text: "JavaScript",
        bgColor: "#f0db4f",
        color: "#323330",
    },
    {
        icon: <BiLogoTypescript />,
        text: "TypeScript",
        bgColor: "#3178c6",
        color: "white",
    },
    {
        icon: <FaHtml5 />,
        text: "HTML",
        bgColor: "#e34c26",
        color: "white",
    },
    {
        icon: <FaCss3Alt />,
        text: "CSS",
        bgColor: "#264de4",
        color: "white",
    },
    {
        icon: <FaSass />,
        text: "Sass/SCSS",
        bgColor: "#cd6799",
        color: "white",
    },
    {
        icon: <FaReact />,
        text: "React",
        bgColor: "#06bcee",
        color: "#20232a",
    },
    {
        icon: <FaVuejs color={"#34495e"} />,
        text: "Vue",
        bgColor: "#41b883",
        color: "white",
    },
    {
        icon: <FaAngular />,
        text: "Angular",
        bgColor: "#c3002f",
        color: "white",
    },
    {
        icon: <BiLogoTailwindCss />,
        text: "Tailwind CSS",
        bgColor: "#06b6d4",
        color: "white",
    },
    {
        icon: <BiLogoRedux />,
        text: "Redux",
        bgColor: "#764abc",
        color: "white",
    },
    {
        icon: <SiAndroid />,
        text: "Android",
        bgColor: "#32de84",
        color: "black",
    },
    {
        icon: <FaReact />,
        text: "React Native",
        bgColor: "#06bcee",
        color: "#20232a",
    },
    {
        icon: <FaNodeJs />,
        text: "Node.js",
        bgColor: "#3c873a",
        color: "white",
    },
    {
        icon: <FaPhp />,
        text: "PHP",
        bgColor: "#777bb3",
        color: "black",
    },
    {
        icon: <BiLogoPostgresql />,
        text: "PosgreSQL",
        bgColor: "#336791",
        color: "white",
    },
    {
        icon: <BiLogoGraphql />,
        text: "GraphQL",
        bgColor: "#e10098",
        color: "white",
    },
    {
        icon: <SiFirebase />,
        text: "Firebase",
        bgColor: "#ff9100",
        color: "black",
    },
    {
        icon: <BiLogoMongodb />,
        text: "MongoDB",
        bgColor: "#00684a",
        color: "white",
    },
    {
        icon: <BiLogoSpringBoot />,
        text: "Spring",
        bgColor: "#6db33f",
        color: "white",
    },
    {
        icon: <FaAws />,
        text: "AWS",
        bgColor: "#ff9900",
        color: "black",
    },
    {
        icon: <FaGitAlt />,
        text: "Git",
        bgColor: "#f34f29",
        color: "white",
    },
    {
        icon: <FaJenkins />,
        text: "Jenkins",
        bgColor: "#f0d6b7",
        color: "black",
    },
    {
        icon: <FaLinux />,
        text: "Linux",
        bgColor: "white",
        color: "black",
    },
    {
        icon: <FaDocker />,
        text: "Docker",
        bgColor: "#1d63ed",
        color: "white",
    },
    {
        icon: <BiLogoVisualStudio />,
        text: "VS Code",
        bgColor: "#0078d7",
        color: "white",
    },
    {
        icon: <BiSolidMicrochip />,
        text: "VHDL",
        bgColor: "",
        color: "",
    },
    {
        icon: <FaMicrochip />,
        text: "Verilog",
        bgColor: "",
        color: "",
    },
    {
        icon: <SiKicad />,
        text: "KiCad",
        bgColor: "#314cb0",
        color: "white",
    },
    {
        icon: <SiAltiumdesigner />,
        text: "Altium Designer",
        bgColor: "#d6bc81",
        color: "#3d3d3d",
    },
    {
        icon: <SiLtspice />,
        text: "LTspice",
        bgColor: "#910029",
        color: "white",
    },
    {
        icon: <GiCircuitry color={"#eb1c2e"} />,
        text: "Cadence",
        bgColor: "white",
        color: "#242021",
    },
    {
        icon: <SiStmicroelectronics />,
        text: "STM32",
        bgColor: "#3bb5e8",
        color: "#19233e",
    },
    {
        icon: <SiEspressif />,
        text: "ESP32",
        bgColor: "#e8362d",
        color: "black",
    },
    {
        icon: <SiProteus />,
        text: "Proteus",
        bgColor: "#006074",
        color: "white",
    },
    {
        icon: <SiAmd />,
        text: "Vivado",
        bgColor: "#dce04a",
        color: "black",
    },
    {
        icon: <SiAutocad />,
        text: "AutoCAD",
        bgColor: "#770829",
        color: "white",
    },
];

export { Tag, tags };
