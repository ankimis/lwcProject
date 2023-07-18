import SOCIAL from '@salesforce/resourceUrl/SOCIAL'
import ankit from '@salesforce/resourceUrl/ankit';
export const PROFILE_IMAGE = ankit

export const SOCIAL_LINKS=[
    {
        type:'twitter',
        label:"twitter/ankit",
        link:"https://twitter.com/karkra_nikhil",
        icon:SOCIAL+'/SOCIAL/twitter.svg'
    },
    {
        type: "facebook",
        label: "facebook/salesforcetroop",
        link: "https://facebook.com/salesforcetroop",
        icon: SOCIAL + '/SOCIAL/facebook.svg'
    },
    {
        type: "github",
        label: "github/ankitmishra",
        link: "https://github.com/ankimis/demolinux",
        icon: SOCIAL + '/SOCIAL/github.svg'
    },
    {
        type: "linkedin",
        label: "linkedin/ankitmishra",
        link: "https://www.linkedin.com/in/nikhilkarkra/",
        icon: SOCIAL + '/SOCIAL/linkedin.svg'
    },
    {
        type: "trailhead",
        label: "trailhead/ankit",
        link: "https://trailblazer.me/tbrecovery?nextPath=%2Fapex%2Fembeddedlogincallback&provider=Salesforce",
        icon: SOCIAL + '/SOCIAL/trailhead.svg'
    }
]

export const USER_DETAILS={
    NAME:'Ankit Mishra',
    ROLE:'Full Stack Developer',
    EMAIL:'ankitmishra9925@gmail.com',
    PHONE:'63 9549 9873'
}

export const CAREER_SUMMARY={
    HEADING:"Profile",
    DESCRIPTION: "",    
    KEYS_POINTS:[
        "Sincere with the job given to me and work hard till the job/project iscompleted.",
        "Can work in any situation and at any place, flexible with time and place work. ",
        "Have participated in many team work activities and had lead few of them. I believe in working with team.",
        "Fast learner, Confident, Committed.",
        "Ready to improve in areas where I Lack.",

    ]
}

export const EXPERIENCE_DATA={
    HEADING: "Work Experience",
    EXPERIENCES: [
        {
            ROLE: "Developer",
            COMPANY_NAME: "National Informatic Center",
            DURATION: "2021 - Present",
            DESCRIPTION:
                "Your Job description goes hereiusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
            DESCRIPTION_POINTS: [
                " You description Points 1 goes here. consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
                "You description Points 2 et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis",
                "You description Points 3 et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis",
                "You description Points 4 et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis",
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "Pho",
                    "Jquery",
                    "Javascript",
                    "Css",
                    "HTML5/LESS",
                    "PostgresSql",
                ]
            },
        // },
        // {
        //     ROLE: "Salesforce Developer",             
        //     DESCRIPTION:
        //         "Your Job description goes here iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
        //     DESCRIPTION_POINTS: [
        //         " Work with Validation Rules, Actions, Approval Processe Flow Builder and Process Builder",
        //         "Experience in Force.com Apex Classes, Apex triggers,Lightning components SOQL and SOSL, Salesforce App Exchange and Unit testing",
        //         "Experience working with Salesforce.com sandbox and production environments.",
        //         "Use Salesforce DX, GitHub, for better teamwork ",
        //         "c/amazonCaouselWork using Agile methodologies, including Scrum, Kanban, etc. ",
        //     ],
          
        // }
        // ,
        // {
        //     ROLE: "Salesforce Admin",
        //     COMPANY_NAME: "AMAZON",
        //     DURATION: "2012 - 2014",           
        //     DESCRIPTION_POINTS: [
        //         "Designed scripts to clean data before migration to the Salesforce cloud ecosystem.",
        //         "Created and maintained user profiles, workflows, and dashboards on Salesforce and other CRM software. Set permissions for users using Object-Level and FieldLevel security best practices.  ",
        //         "Implemented solutions to resolve system errors and data  issues to avoid downstream effects on marketing or sales teams.  ",
        //         "Trained employees on the Lightning App Builder and other CRM tools/applications.",
        //     ],
            
        // },
        // {
        //     ROLE: "Web Developer Trainee",
        //     COMPANY_NAME: "Microsoft",
        //     DURATION: "2011 - 2012",
        //     DESCRIPTION:
        //         "Your Job description goes hereiusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
        //     DESCRIPTION_POINTS: [
        //         " You description Points 1 goes here. consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
        //         "You description Points 2 et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis",
        //         "You description Points 3 et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis",
        //         "You description Points 4 et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis",
        //     ],
        //     TECHNOLOGIES_USED: {
        //         HEADING: 'Technologies used',
        //         LIST: [
        //             "HTML5",
        //             "CSS3",
        //             "Javascript",
        //             "jQuery",
        //             "java",
        //             "SQL",
        //         ]
        //     }
        },
    ]
}
 export const Project = {
    HEADING: "Project",
    Department1: "Salesforce",
  Project1 : [
         { 
            Department:"Salesforce Admin",
                List : [
                    
                        "Map the lifecycle of an opportunity to stages and sales processes in Salesforce.",
                        "Create an opportunity stag",
                        "reate a field and page layout on the Opportunity object",
                        "reate an opportunity record to test the record type for earned revenue.",
                        "Customize Nonprofit Success Pack (NPSP) rollup fields to exclude an opportunity record type.",
                        "Customize Rollups to Exclude an Opportunity Record Type",
            
                    ], 
        },
        {
             Department: "Salesforce Developer",
                List : [
                    
                        "trigger and handler classis with Lightning Component asynchronous process in salesforce scenarios.",
                        "Create an opportunity stag",
                        "reate a field and page layout on the Opportunity object",
                        "reate an opportunity record to test the record type for earned revenue.",
                        "Customize Nonprofit Success Pack (NPSP) rollup fields to exclude an opportunity record type.",
                        "Customize Rollups to Exclude an Opportunity Record Type",
            
                    ] , 
            }, 
        ]

 }

 export const EDUCATION_DATA={
     ICON: SOCIAL + '/SOCIAL/education.svg',
     HEADING: "EDUCATION",
     LIST:[
         {
             NAME: "Post  Gradution Computer Application",
             UNIVERSITY_NAME: "Chhatrapati Shahu Ji Maharaj University, Kanpur",
             DURATION: "2020 - 2021",
         },
         {
             NAME: "Bachelor of Science",
             UNIVERSITY_NAME: "Chhatrapati Shahu Ji Maharaj University, Kanpur",
             DURATION: "2016 - 2020",
         },
          {
            NAME: "12th Standerd",
            UNIVERSITY_NAME: "Up board (74%)",
            DURATION: "2014 - 2016",
        }, {
            NAME: "10th Standerd",
            UNIVERSITY_NAME: "Up board (80% With Computer)",
            DURATION: "2012 - 2014",
        }
     ]
 }
 export const Decl ={
    HEADING:"Declaration",
    List:[
        "I hereby declare that all the information mentioned",
        "in my resume is true and correct to my knowledge and I take full",
        "responsibility for the accuracy of the particulars mentioned",
    ],
    Name:"Ankit Mishra",
    Address: "Biroundhi Bharthana Etawah"

 }

 export const AWARDS_DATA={
     ICON: SOCIAL + '/SOCIAL/awards.svg',
     HEADING: "AWARDS",
     LIST: [
         {
             NAME: "Microsoft MVP",
             DESCRIPTION:"Award description goes here, sem. Nulla consequat massa quis enim. Donec pede justo.",
         },
         {
             NAME: "Employee of the year",
             DESCRIPTION:"Award description goes here, sem. Nulla consequat massa quis enim. Donec pede justo.",
         },
     ]
 }

export const CERTIFICATION_DATA={
    ICON: SOCIAL + '/SOCIAL/certification.svg',
    HEADING: "CERTIFICATIONS",
    LIST: [
        {
            NAME: "Salesforce Administrator",
        },
        {
            NAME: "Japanese-Language Proficiency Test. N5",
        },
        {
            NAME: "Japanese-Language Proficiency Test. N4",
        },
        {
            NAME: "Salesforce Developer",
        },
        {
            NAME: "Course on Computer Concepts",
        }
    ]
}

export const LANGUAGES_DATA={
    HEADING: "Languages",
    LIST: [
        {
            NAME: "Hindi",
            LEVEL: "Native",
        },
        {
            NAME: "English",
            LEVEL: "Professional",
        },
        {
            NAME: "japanese",
            LEVEL: "Professional",
        },
    ]
}

export const SKILLS_DATA ={
    HEADING: "SKILLS & TOOLS",
    SKILLS:[
        {
            HEADING: "FRONTEND",
            SKILLS_LIST: [
                { NAME: "Html", LEVEL: "95" },
                { NAME: "Css", LEVEL: "80" },
                { NAME: "JavaScript)", LEVEL: "89" },
                { NAME: "Bootstrap", LEVEL: "90" },
            ],
        },
        {
            HEADING: "BACKEND",
            SKILLS_LIST: [
                { NAME: "Apex", LEVEL: "95" },
                { NAME: "PHP", LEVEL: "98" },
            ],
        },
        {
            HEADING: "CRM/CMS",
            SKILLS_LIST: [
                { NAME: "Salesforce", LEVEL: "50" },
                { NAME: "Cakephp 2", LEVEL: "75" }
            ],
        }
    ],
    OTHERS_SKILLS:{
        HEADING: 'OTHERS',
        SKILLS_LIST: [
            "Git",
            "Cakephp2",
            "css",
            "Visual Studio",
            "Trigger",
            "Batch",
            "Confluence"]
    }
}

export const INTERESTS_DATA = {
    HEADING: "Interests",
    LIST: ["Salesforce Developer","Reading", "Cooking", "Cricket"]
}