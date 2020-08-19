import { IJob } from '../models/job';

export const JOBHISTORY: IJob[] = [
  {
    company: 'MaritzCX - An InMoment Company',
    title: 'Senior Software Engineer',
    startDate: new Date('06/11/2018'),
    endDate: new Date('8/17/2020'),
    location: 'Lehi, UT',
    description: `I worked with a team of 8 to develop the next generation of reporting software for the MaritzCX
        survey platform. The software allows select users to create custom components that can be displayed on a
        page and present data.`,
    skills: [
      'Angular 4+',
      'Typescript',
      'NGRX',
      'RXJS',
      '.NET Core 1.x',
      'Redis',
      'Elasticsearch',
      'Docker',
      'Microsoft SQL'
    ]
  },
  {
    company: 'Numetric',
    title: 'Software Engineer II',
    startDate: new Date('11/01/2017'),
    endDate: new Date('06/1/2018'),
    location: 'American Fork, UT',
    description: `Numetric is the fast and easy BI tool. I worked to create new charts and add features to
        manage those charts.`,
    skills: [
      'React',
      'Docker',
      'Node',
      'RethinkDB',
      'Elasticsearch'
    ]
  },
  {
      company: 'DealerSocket',
      title: 'Senior Software Engineer, Scrum Master and Team Lead',
      startDate: new Date('02/01/2015'),
      endDate: new Date('11/01/2017'),
      location: 'Draper, UT',
      description: `As a team lead I led a team of 8-15 engineers. My team and I used AngularJS,
          NodeJS, and ASP.NET Web API to build a new CRM website to replace the existing CRM website. I
          worked with other team leads to determine the technology to use and with product management to
          ensure that the new CRM had the same capabilities as the existing CRM. I quickly became the subject
          matter expert in my office and shared my knowledge with every team that worked to build the new CRM.`,
      skills: [
        'AngularJS 1.x',
        'Angular 2',
        'Typescript',
        'C#',
        'VB.NET',
        'WebForms',
        'MVC',
        'JQuery',
        'Microsoft SQL'
      ]
  },
  {
      company: 'Dialog Direct',
      title: 'Senior Application Developer',
      startDate: new Date('10/01/2013'),
      endDate: new Date('04/01/2015'),
      location: 'Provo, UT',
      description: `I created a public web portal for our Frito Lay customers using ASP.NET MVC, HTML, C#, Entity
          Framework, Auto Mapper, Knockout, JQuery, and Kendo UI. The public web portal allows customers to place
          orders and change some basic account settings. The website and back end code implemented multiple design
          patterns including inversion of control using Castle Windsor, repository pattern, factory pattern, model
          view controller, model view view model, and many more.`,
      skills: [
        'C#',
        'VB.NET',
        'WebForms',
        'MVC',
        'KnockoutJS',
        'JQuery',
        'Microsoft SQL'
      ]
  },
  {
      company: 'Academy Mortgage Corporation',
      title: 'ITS Senior Software Engineer 2',
      startDate: new Date('03/01/2013'),
      endDate: new Date('10/01/2013'),
      location: 'Sandy, UT',
      description: `I worked on a team to implement a new website to facilitate communication between appraisers and
          loan officers. I created console applications, and made changes to the website as needed.`,
      skills: [
        'C#',
        'MVC',
        'JQuery',
        'Microsoft SQL'
      ]
  },
  {
      company: 'Dialogue Marketing',
      title: 'Application Developer',
      startDate: new Date('06/01/2011'),
      endDate: new Date('03/01/2013'),
      location: 'Provo, UT',
      description: `I wrote and modified internal websites used by the call center agents for our global customers. I
          created and modified multiple web controls, windows services, and other small programs to help support the
          call center and customer service effort. I introduced new technologies to management and convinced them to
          start developing all new websites using C#.NET and ASP.NET MVC. I trained other developers to use ASP.NET MVC
          using the Razor view syntax. I updated old Classic ASP and ASP.NET Web Forms projects and converted some of
          those projects into ASP.NET MVC projects. I created a multi-threaded Windows Service to import and export data
          from a Microsoft SQL 2008 database using the Entity Framework. During my time at Dialogue Marketing I worked on
          projects for Hostess, Nestle, Frito Lay, South American Foods, Select Quote, Medicare Compare, Broadview, and Great Call.`,
      skills: [
        'C#',
        'VB.NET',
        'WebForms',
        'MVC',
        'KnockoutJS',
        'JQuery',
        'Microsoft SQL'
      ]
  },
  {
      company: 'NetSteps',
      title: 'Programmer',
      startDate: new Date('08/01/2009'),
      endDate: new Date('05/01/2011'),
      location: 'Pleasant Grove, UT',
      description: `NetSteps builds websites for multi-level marketing type businesses such as Scentsy, Rodan and
          Fields, and Natura. I worked on various client teams to fix bugs and deploy new features using a combination
          of ASP.NET 4.0, Web Forms, MVC, JQuery, Silverlight, WCF, and SQL 2008. As my product knowledge grew I was
          placed on a maintenance team which performed work for six different clients.`,
      skills: [
        'C#',
        'WebForms',
        'MVC',
        'WPF',
        'Silverlight',
        'JQuery',
        'Microsoft SQL'
      ]
  }
];
