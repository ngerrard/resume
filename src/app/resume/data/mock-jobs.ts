import { IJob } from '../models/job';

export const JOBHISTORY: IJob[] = [
  {
    company: 'MaritzCX - An InMoment Company',
    title: 'Senior Software Engineer',
    startDate: new Date('06/1/2018'),
    endDate: new Date(),
    location: 'Lehi, UT',
    description: `I worked with a team of 8 to develop the next generation of reporting software for the MaritzCX
        survey platform. The software allows select users to create custom components that can be displayed on a
        page and present data.`,
    acheivements: []
  },
  {
    company: 'Numetric',
    title: 'Software Engineer II',
    startDate: new Date('11/01/2017'),
    endDate: new Date('06/1/2018'),
    location: 'American Fork, UT',
    description: `Numetric is the fast and easy BI tool. I worked to create new charts and add features to
        manage those charts using React, Node, RethinkDB, Postgres, and Python.`,
    acheivements: []
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
      acheivements: []
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
      acheivements: []
  },
  {
      company: 'Academy Mortgage Corporation',
      title: 'ITS Senior Software Engineer 2',
      startDate: new Date('03/01/2013'),
      endDate: new Date('10/01/2013'),
      location: 'Sandy, UT',
      description: `I worked on a team to implement a new website to facilitate communication between appraisers and
          loan officers. I created console applications, and made changes to the website as needed.`,
      acheivements: []
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
      acheivements: []
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
      acheivements: []
  },
  {
      company: 'Sonic Innovations',
      title: 'Programmer/Analyst',
      startDate: new Date('01/01/2008'),
      endDate: new Date('08/01/2009'),
      location: 'Salt Lake City, UT',
      description: `Sonic Innovations is a global manufacturer and distributor of superior hearing products. I create
          new desktop and web applications for both internal and external customers. Many of the applications read and
          update data from multiple SQL and Progress databases. I gather application requirements, create and modify
          existing VB.NET applications, create documentation for the applications, and create test and implementation
          plans for the applications. During my time at Sonic I have converted our order entry and shipping applications
          from VB 6 to VB.NET, added payment processing to our eCommerce website, and created numerous new applications
          using VB.NET. Recently I worked on an Agile development team to create a new retail application for our hearing
          aid clinics. The retail application uses the MVC design pattern and is implemented using ASP.NET, C#, Javascript, and LINQ.`,
      acheivements: []
  },
  {
      company: 'Distinctive Software Systems',
      title: 'Software Engineer',
      startDate: new Date('07/01/2006'),
      endDate: new Date('12/01/2007'),
      location: 'South Jordan, UT',
      description: `Distinctive Software creates database applications for a variety of businesses using Visual Fox
          Pro, Fox Fire Reports, and websites using ASP.NET and C#.NET. I fixed bugs in current applications and
          websites and created new applications and websites using Visual Fox Pro, C# and ASP.NET. In addition to
          creating software applications and websites I designed databases and updated existing databases implemented
          in either MS SQL or Visual Fox Pro. My most interesting projects included Building a desktop application using
          Visual Fox Pro that connected to an ASP.NET website to upload information into SQL server. The website content
          was changed based on the data uploaded. Links, buttons, and images were updated based on SQL database values. The
          most challenging project was to take an AES encryption algorithm, write a C# encryption/decryption program to be
          used in our ASP.NET web pages and then convert that C# version into Visual Fox Pro so items encrypted in either
          software language could be saved and decrypted in the other language.`,
      acheivements: []
  },
  {
      company: 'BestBill',
      title: 'Programmer',
      startDate: new Date('12/01/2004'),
      endDate: new Date('7/01/2006'),
      location: 'Phoenix, AZ',
      description: `BestBill receives text data from clients and turns it into PDF files that can be printed and mailed. They
          have developed an automated system to process a client\'s data files. I monitor the automation systems to ensure the
          customer data is processed without error. I write software applications using the Delphi Programming Language to import
          customer data into our mySQL database. I also create software applications to help perform tasks in our automation
          system. My most recent automation program was created to household customer data based on the account and document
          ID numbers that are stored in our database. This allows BestBill to place multiple document types going to the same
          address in one envelope; and combines data prior to aggregating the PDF files into print jobs.`,
      acheivements: []
  }
];
