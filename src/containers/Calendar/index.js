import React from 'react';
import { Text, View } from 'react-native';
import { Container, Content, StyledList } from './styles';

const data = [
  {
    startTime: '9:00',
    endTime: '10:00',
    title: 'Registration & Breakfast',
  },
  {
    startTime: '10:00',
    endTime: '10:30',
    title: 'Keynote',
    speaker: {
      name: 'Nick Schrock',
      company: 'Facebook',
      avatarUrl: 'http://conf.reactjs.com/img/nick-schrock.jpg',
    },
  },
  {
    startTime: '10:30',
    endTime: '11:00',
    title: 'How To Use React In a Wedding Gift Without Being A Bad Friend',
    speaker: {
      name: 'Keith Poplawski',
      company: 'Namely',
      avatarUrl: 'http://conf.reactjs.com/img/keith-poplawski.jpg',
    },
    description: [
      'As a belated gift, I’ve created a physical, standalone version of Jeopardy. Featuring React as the project’s interface, an Arduino and a node app running on a Raspberry Pi create an engaging and unique user experience. The presentation highlights React’s potential to respond to input beyond the mouse, including touch, physical buttons, and speech recognition.',
    ],
  },
  {
    startTime: '11:00',
    endTime: '11:30',
    title: 'Break',
  },
  {
    startTime: '11:30',
    endTime: '12:00',
    title: 'Rich Text Editing with React',
    speaker: {
      name: 'Isaac Salier-Hellendag',
      company: 'Facebook',
      avatarUrl: 'http://conf.reactjs.com/img/isaac-salier-hellendag.jpg',
    },
    description: [
      'Plain text is boring. At Facebook, we want to give our users the ability to add mentions, emoticons, hashtags, styles, and embedded media within the content they share. The result is that nearly every input on Facebook requires rich text features.',
      'As UI engineers, we want to provide our product teams with the tools to implement and expand upon these features without pushing them into the contentEditable pit of despair.',
      'This talk will dive into the details of how we used React, ImmutableJS, and yes, contentEditable, to create an editor framework that enables engineers to build and customize rich text composition experiences across Facebook.',
    ],
  },
  {
    startTime: '12:00',
    endTime: '12:30',
    title: 'A Cartoon Guide to the Wilds of Data Handling',
    speaker: {
      name: 'Lin Clark',
      company: 'Mozilla',
      avatarUrl: 'http://conf.reactjs.com/img/lin-clark.jpg',
    },
    description: [
      'I’m going to walk you through the wilds of data handling in react. I call it “the wilds” because when you first look at the landscape, it seems to be overflowing with an untamed profusion of different options. The boundaries between these options aren’t clear, and it’s hard to see why you’d want to pick any one in particular.',
      'When you look closer, you’ll see that it’s actually easier to navigate than you might think. You just need a good guide.',
    ],
  },
  {
    startTime: '12:30',
    endTime: '2:00',
    title: 'Lunch',
  },
  {
    startTime: '2:00',
    endTime: '2:30',
    title: 'Demystifying Tech Recruiting',
    speaker: {
      name: 'Helena Milosevic',
      company: 'Facebook',
      avatarUrl: 'http://conf.reactjs.com/img/helena-milosevic.jpg',
    },
    description: [
      'The recruiting process employed by major technology companies can often seem like a black box. In a pretty untraditional type of talk for a JavaScript conference, I will dive deep into exactly how the process works at Facebook in order to give you an idea of what to expect and how to prepare if you ever decide to apply for a major technology company.',
    ],
  },
  {
    startTime: '2:30',
    endTime: '3:00',
    title: 'Web-like Release Agility for Native Apps',
    speaker: {
      name: 'Jonathan Carter',
      company: 'Microsoft',
      avatarUrl: 'http://conf.reactjs.com/img/jonathan-carter.jpg',
    },
    description: [
      'React Native brought the web’s enviable debug cycle to mobile, without needing to sacrifice native UI to get there. While this makes for an amazing dev experience, your apps are still ultimately distributed through stores, and therefore, can’t immediately take advantage of the same release agility that is typically associated with web dev. But that doesn’t have to be the case!',
      'Whether you are doing distributions within your team, amongst your clients or to your entire consumer base, getting improvements out to users as quickly as possible, and monitoring its impact on usage/satisfaction, can be critical to success. This talk will show how easy it can be to setup an automated build pipeline and release continous app deployments via services like VSTS, HockeyApp and CodePush.',
    ],
  },
  {
    startTime: '3:00',
    endTime: '3:30',
    title: 'Break',
  },
  {
    startTime: '3:30',
    endTime: '4:00',
    title: 'React, Meet Virtual Reality',
    speaker: {
      name: 'Eric Florenzano',
      avatarUrl: 'http://conf.reactjs.com/img/eric-florenzano.jpg',
    },
    description: [
      'After a short moment in the 90s, Virtual Reality faded away. Now in 2016, VR is coming back in a big way. Games are leading the charge, but with millions of headsets pouring into the marketplace over the next few years, how can React web and app developers get involved? Can React even handle the screaming-fast performance requirements of VR? Spoiler: it can.',
      'This talk explores these concepts by incrementally building up a mobile VR engine that can be driven not just with JavaScript, but with React. We’ll discover how naive approaches fail, and why game engines are built the way they are. Finally, we’ll cover some exiting work with WebVR which intends to bring VR to all browsers.',
    ],
  },
  {
    startTime: '4:00',
    endTime: '4:30',
    title: 'Building a Progressive Web App',
    speaker: {
      name: 'Aditya Punjani',
      company: 'Flipkart',
      avatarUrl: 'http://conf.reactjs.com/img/aditya-punjani.jpg',
    },
    description: [
      'Flipkart Lite is Progressive Web App built with React, Flux, and Service Workers. This talk will deep dive into how we developed a high-performance mobile web app at scale, by devising a new architecture and taking an unconventional approach to server-side rendering with React.',
      'Hear how React and Flux Stores helped us speed up rendering and how we heavily optimized React Components to achieve 60fps scrolling and interactions. In conjunction with this, learn how we utilized Service Workers to eliminate all network latencies on repeat visits. The result was an immersive and smooth web app that worked seamlessly even on low-end mobile devices and 2g connections.',
    ],
  },
  {
    startTime: '4:30',
    endTime: '5:00',
    title: 'Break',
  },
  {
    startTime: '5:00',
    endTime: '5:30',
    title: 'Redux, Re-frame, Relay, Om/next, oh my!',
    speaker: {
      name: 'Jared Forsyth',
      company: 'Khan Academy',
      avatarUrl: 'http://conf.reactjs.com/img/jared-forsyth.jpg',
    },
    description: [
      'Managing client-side state is pretty easy for TodoMVC, but soon after you move beyond that, your app can quickly get brittle, discouraging re-use and significantly complicating maintenance. I will give an overview of a few of the libraries/frameworks that have appeared recently that try to address this problem, show how each of them looks when used in the React context, and then discuss advantages, disadvantages, common patterns, and what we can learn.',
    ],
  },
  {
    startTime: '5:30',
    endTime: '6:30',
    title: 'Lightning Talks',
    speaker: {
      name:
        'Andy Matuschak (Khan Academy), Vivian Cromwell (Chop Technologies, Inc), Vivek Patel (Google), Maria Hollweck (Girls Can Do IT), Kyle Matthews (RelateRocket), Eric Vlad Vicenti (Facebook), Andres Suarez (Facebook), Jake Taylor (Fuse) and Ken Wheeler (Formidable)',
      avatarUrl: 'http://charca.me/images/reactjs-conf/logo.png',
    },
    description: [
      'Gestures, Graphs, and Gaffes.',
      'React Native Infinite List Done Right',
      'Oy vey! Email templating with React',
      'React Native: Lessons Learned After Migrating an App from iOS to Android',
      'Gatsby, a React.js Static Site Generator',
      'Reducing Navigation',
      'Nuclide hacks for React Native development',
      'Hotter than Hot Reload - Building Native Mobile Apps with Fuse',
      'Building the Walmart iOS pharmacy with React Native',
    ],
  },
  {
    startTime: '6:30',
    endTime: '10:00',
    title: 'Food, Drinks, and Q&A with the React/RN/Relay/GraphQL teams',
  },
];

const Calendar = () => {
  const renderRow = (rowData, sectionID, rowID) => (
    <View key={rowID}>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          alignItems: 'stretch',
          justifyContent: 'center',
          paddingLeft: 15,
          paddingRight: 15,
        }}
      >
        <View style={{ width: 40 }}>
          <Text
            style={{
              color: 'grey',
              textAlign: 'right',
            }}
          >
            {rowData.startTime}
          </Text>
        </View>
        <View
          style={{
            borderColor: 'grey',
            borderLeftWidth: 1,
            flexDirection: 'column',
            flex: 1,
            marginLeft: 20,
            paddingLeft: 20,
          }}
        >
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: '#88C057',
              position: 'absolute',
              left: -5,
              top: 0,
            }}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: 'blue',
              marginBottom: 6,
              // marginBottom: 0
            }}
          >
            {rowData.title}
          </Text>
          ;
          <View
            style={{
              height: 0.5,
              backgroundColor: globals.colors.lightGrey,
              marginTop: 15,
              marginBottom: 15,
            }}
          />
        </View>
      </View>
    </View>
  );

  return (
    <Container>
      <Content>
        <Text>Calendar Screen</Text>
        <StyledList
          dataSource={data}
          renderRow={renderRow}
          // renderSectionHeader={renderSectionHeader}
          // automaticallyAdjustContentInsets={false}
        />
      </Content>
    </Container>
  );
};

export default Calendar;
