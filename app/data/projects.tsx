import Image from 'next/image'

// Helper component for image placeholders
function ImagePlaceholder({ description, src }: { description: string, src: string }) {
    return (
      <div className="bg-gray-800 rounded-lg p-4 my-6 shadow-lg">
        <p className="text-gray-400 italic">{description}</p>
        <div className="relative aspect-[3/2] mb-4 cursor-pointer">
        <Image
            src={src}
            alt={description}
            className="rounded-lg shadow-lg"
            fill
        /></div>
      </div>
    );
  }

export const projects = [
    { 
      id: 1, 
      title: 'Joeys Toy Box', 
      image: '/placeholder.svg?height=400&width=600', 
      description: (<>A 501c3 foundation website using React, hosted on Azure.{" "}
        <a
          href="https://joeystoybox.net"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300"
        >
          Visit
        </a>{" "}</>), 
      slug: 'joeys-toy-box',
      fullDescription: 'Alright, so this project has been ongoing for about the last 15 years.  Starting with the trusty LAMP stack, I first wrote this thing with HTML and PHP hosted on GoDaddy.  At some point I decided I needed to know Wordpress, so I recreated my theme and added several unnecessary plugins.  After watching my thousandth Bucky video, I finally had enough of PHP and decided to move on to everyones favorite: JavaScript.  The initial NodeJS rewrite of this website used EJS, lodash, JQuery, and several libraries Ive forgotten about by now.  Hosted it on Heroku until 2022 when their free plan was discontinued. After the final "your account will be deleted" email from Heroku, it was time for an update.  The latest iteration of this site was written using React Material UI, and pushes to Azure through Github actions.  I also started using Githubs dependabot, which comes in very handy.  Most importantly it uses the Paypak SDK for receiving any donations through the site.  Donations received go to a great charitable organization supporting metro Atlanta childhood cancer patients.',
      customContent: (<div>
        <div className="text-gray-300 space-y-4">
          <p>
            Alright, so this project has been ongoing for about the last 15
            years. Starting with the trusty{" "}
            <a
              href="https://en.wikipedia.org/wiki/LAMP_(software_bundle)"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              LAMP stack
            </a>
            , I first wrote this thing with HTML and PHP hosted on{" "}
            <a
              href="https://www.godaddy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              GoDaddy
            </a>
            .
          </p>
          <p>
            At some point, I decided I needed to know{" "}
            <a
              href="https://wordpress.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              WordPress
            </a>
            , so I recreated my theme and added several unnecessary plugins.
            After watching my thousandth{" "}
            <a
              href="https://www.youtube.com/@thenewboston"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              Bucky video
            </a>
            , I finally had enough of PHP and decided to move on to
            everyone’s favorite: JavaScript.
          </p>
          
          <ImagePlaceholder description="Early iterations of the website using Wordpress" src="/JTB-wordpress-wayback.png" />
          <p>
            The initial Node.js rewrite of this website used{" "}
            <a
              href="https://ejs.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              EJS
            </a>
            ,{" "}
            <a
              href="https://lodash.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              Lodash
            </a>
            ,{" "}
            <a
              href="https://jquery.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              JQuery
            </a>
            , and several libraries I’ve forgotten about by now. I hosted
            it on{" "}
            <a
              href="https://www.heroku.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              Heroku
            </a>{" "}
            until 2022 when their free plan was discontinued.
          </p>
          <p>
            After the final "your account will be deleted" email from
            Heroku, it was time for an update. The latest iteration of this
            site was written using{" "}
            <a
              href="https://mui.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              React Material UI
            </a>
            , and pushes to{" "}
            <a
              href="https://azure.microsoft.com/en-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              Azure
            </a>{" "}
            through GitHub Actions.
          </p>
          <ImagePlaceholder description="EJS JQuery Bootstrap implementation" src="/JTB-node-wayback.png" />
          <p>
            I also started using{" "}
            <a
              href="https://github.com/dependabot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              GitHub’s Dependabot
            </a>
            , which comes in very handy. Most importantly, it uses the{" "}
            <a
              href="https://developer.paypal.com/docs/business/javascript-sdk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              PayPal SDK
            </a>{" "}
            for receiving any donations through the site. Donations received
            go to a great charitable organization supporting metro Atlanta
            childhood cancer patients.
          </p>
          <ImagePlaceholder description="Current React Material UI implementation" src="/JTB-react-wayback.png" />
        </div>
      </div>)
    },
    { 
      id: 2, 
      title: 'Emerald Coast Outdoor Pros', 
      image: '/placeholder.svg?height=400&width=600', 
      description: (<>A small business splash page for receiving inquiries.{" "}
        <a
          href="https://www.emeraldcoastoutdoorpros.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300"
        >
          Visit
        </a>{" "}</>),
            slug: 'pensacola-pressure-washing',
      fullDescription: 'Imagine my relief when I discovered tedious markup and styling was no longer required thanks to v0.dev.  After discovering the magic of using AI to generate my frontend code, I cant imagine starting anywhere else.  With the help of Logo.com I was able to create a brand and design the website to match, and deployed seamlessly on my Vercel account.  ShadCN also deserves a shoutout, I was able to generate my own reusable components using custom prompts.  Now this Pensacola based outdoor services site has an online presence.',
      customContent: (<div>
      <div className="text-gray-300 space-y-4">
        <p>
          Imagine my relief when I discovered tedious markup and styling
          was no longer required thanks to{" "}
          <a
            href="https://v0.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300"
          >
            v0.dev
          </a>
          . Using AI to generate frontend code has been a game changer, and I can't imagine starting a project without these tools.
        </p>
        <ImagePlaceholder description="Frontend code generated using v0.dev" src="/pressure-washing-v0.png" />
        <p>
          With the help of{" "}
          <a
            href="https://logo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300"
          >
            Logo.com
          </a>
          , I created a brand identity and designed a matching website. I then deployed the site seamlessly using{" "}
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300"
          >
            Vercel
          </a>
          , ensuring a smooth and efficient process from start to finish.
        </p>
        <p>
          Special thanks to{" "}
          <a
            href="https://shadcn.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300"
          >
            ShadCN
          </a>{" "}
          for enabling me to generate reusable components with custom
          prompts. This made the development process even faster and more
          enjoyable.
        </p>
        <p>
          Now, this Pensacola-based outdoor services site has a polished,
          professional online presence that effectively showcases its
          offerings.
        </p>
      </div>
    </div>)
    },
    { 
      id: 3, 
      title: 'Land Leads', 
      image: '/placeholder.svg?height=400&width=600', 
      description: (<>Find real estate parcels with natural language searches.{" "}
        <a
          href="https://landlead-ui.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300"
        >
          Visit
        </a>{" "}</>), 
      slug: 'land-leads',
      fullDescription: 'This is what happens when a software developer listens to too many real estate podcasts.  I found myself asking "How can I find an off market property with really really specific criteria?".  The first thing that comes to mind is how to find a good, publicly available data source.  Using Jupyter notebooks, I setup a data mining process for retrieving Esri compatible real estate info from county tax assessor databases.  I used PostGIS to include geospatial column types and database functions.  With my Jupyter to PostGIS import process, I now have a locally running PostGIS data source with all the relevant tax parcel data.  There is just one problem: I hate SQL.  To combat this, I started looking into the best way to turn a natural language query into valid SQL that would return the parcel records I was looking for.  That is when I discovered Langchain.  Using Python and Langchains create_sql_query_chain, along with Langchain Communitys SQLDatabase and QuerySQLDataBaseTool, I developed a prompt chain that took a user natural language query and transformed it into a SQL query, executed the SQL, and analyzed the output in a useful way back to the user.  I used Langchains ChatOpenAi with my OpenAI API token to power the queries.  After several iterations of tuning the prompts, I started getting back answers that made some sense.  For example, list the properties bordering the national forest, or give me homes sold in the last 7 years near this address.  Next I decided I need to see this data on an interactive map, and that some kind of chat persistence would help clarify misunderstood requests.  To create the backend, I used FastAPI to quickly wrap these natural language requests in RESTful API calls. After a few successful Postman requests to my localhost, I headed over to v0.dev to get my frontend started.  "Give me a layout for a saas homepage" was my initial prompt, and a few tweaks later I was testing locally with npm run dev.  I used Leaflet to create a map and draw any shapes returned by the user queries.  At this point, I was pleased with it enough to try to get it on a public facing site.  Using Vercel I was able to quickly deploy the frontend code, but what about the FastAPI python backend, and the PostGIS server?  After much research, I landed on Railway for my database solution.  The key advantages were that it supported PostGIS, and included a 5 dollar credit for db hosting.  I was able to point my Jupyter notebook mentioned previously at my new Railway database and upload my data successfully.  Now to get the FastAPI up and running to glue it all together.  I added FastAPIs CORSMiddleware to limit the allowable traffic to come from the Vercel frontend only.  To nail down my environment and prepare for a cloud deployment, I created a Dockerfile. This allowed me to define my Python image, the dependencies needed, and the ports to expose using Uvicorn.  I used Docker Desktop and created a Docker compose file to confirm my new setup locally.  I wanted to setup a little more access control before deploying the backend, the 10 dollars I put into my OpenAI account wouldnt go far if any bots found my app.  So after a bit more research, I setup a new Firebase app and enabled email authentication.  I added firebase_admin to my python backend to protect the query endpoints, and added the Firebase SDK through NPM to protect my frontend routes.  Now someone at least has to sign up with a valid account to use my app service.  Finally, I created a docker image and tagged it, uploaded to my Azure Container Registry, deployed to an App Service.  At this point I had an end to end solution working ',
      customContent: (<div>
          <div className="text-gray-300 space-y-4">
            <p>
              This is what happens when a software developer listens to too
              many real estate podcasts. I found myself asking{" "}
              <strong>
                "How can I find an off-market property with really really
                specific criteria?"
              </strong>{" "}
              The first step was finding a good, publicly available data
              source.
            </p>
            <p>
              Using{" "}
              <a
                href="https://jupyter.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300"
              >
                Jupyter notebooks
              </a>
              , I set up a data mining process for retrieving Esri-compatible
              real estate info from county tax assessor databases. The data
              was stored in{" "}
              <a
                href="https://postgis.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300"
              >
                PostGIS
              </a>{" "}
              to utilize geospatial column types and database functions.
            </p>
            <p>
              To simplify querying, I used{" "}
              <a
                href="https://python.langchain.com/en/latest/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300"
              >
                LangChain
              </a>{" "}
              to create a natural language-to-SQL pipeline using
              `create_sql_query_chain`. This allowed users to ask questions
              like “List properties bordering the national forest” or “Give me
              homes sold in the last 7 years near this address.”
            </p>
            <ImagePlaceholder description="Jupyter notebook seeding Postgres data" src='/jupyter.png' />
            <p>
              For visualization, I integrated{" "}
              <a
                href="https://leafletjs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300"
              >
                Leaflet
              </a>{" "}
              to display data on an interactive map. Additionally, I used{" "}
              <a
                href="https://fastapi.tiangolo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300"
              >
                FastAPI
              </a>{" "}
              as the backend, exposing RESTful API calls to process user
              queries.
            </p>
            <p>
              To deploy, I chose{" "}
              <a
                href="https://vercel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300"
              >
                Vercel
              </a>{" "}
              for the frontend and{" "}
              <a
                href="https://railway.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300"
              >
                Railway
              </a>{" "}
              for the database, which supports PostGIS.
            </p>
            <p>
              To secure the app, I used{" "}
              <a
                href="https://firebase.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300"
              >
                Firebase
              </a>{" "}
              for email authentication and protected both the backend and
              frontend with the Firebase SDK.
            </p>
            <ImagePlaceholder description="Initial system prompt for Langchain" src="/landleads-prompt.png" />
            <p>
              Finally, I containerized the backend using{" "}
              <a
                href="https://www.docker.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300"
              >
                Docker
              </a>{" "}
              and deployed it to{" "}
              <a
                href="https://azure.microsoft.com/en-us/products/container-registry/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300"
              >
                Azure Container Registry
              </a>{" "}
              and App Service.
            </p>
            <ImagePlaceholder description="Deployed app interface" />
          </div>
        </div>)
    },
    {
      id: 4,
      title: "Garden Bug",
      description: (<>An IoT-enabled garden monitor device. {" "}
              <a
                href="https://github.com/tdoolittle3/Garden-Bug"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300"
              >
                GitHub
              </a>{" "}</>),
      slug: "garden-bug",
      customContent: (<div>
        <div className="text-gray-300 space-y-4">
          <p>
            Garden Bug is an IoT-enabled garden monitor device that uses a NodeMCU ESP8266 and Keystudio sensor modules.
          </p>
          <p>
            Last year when preparing my garden for spring, I noticed my old wifi board and decided to build a sensor for my starters.
            I grabbed a bread board, a NodeMCU ESP8266, a DS18B20, and a separate temperature sensor, humidity sensor, light sensor.
            A buzzer was added and then scrapped, maybe with better sensor filtering it can be added back.
          </p>
          <p>
            One of initial challenges was getting the NodeMCU to connect to the COM port on Windows 11.
            Thanks to {" "}
              <a
                href="https://randomnerdtutorials.com/install-esp32-esp8266-usb-drivers-cp210x-windows/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300"
              >
                this reference
              </a>{" "}
              I was able to find out I had the USB chip starting with CP210, so I found the CP210x Universal Windows Driver and installed it.  That seemed to fix the issue
          </p>
          <ImagePlaceholder description="Left: serial monitor connection on Arduino IDE.  Right: MQTT sub from Raspberry Pi" src="/gardenbug_serialmonitor.png" />
          <p>
            Next I installed a few dependencies through the Arduino IDE Library Manager.  I pulled DHT sensor library, ArduinoJson, DallasTemperature, OneWire, and PubSubClient.
            I decided to use MQTT for its IoT focused features like low overhead and QoS, perfect for telemetry applications like this.
          </p>
          <p>
            In the setup() function I start the Wifi connection and MQTT client.  Then in the loop() function we grab everything, JSONify it, and publish it to the message broker.
            There are many great options for the MQTT brokers, but I went with Mosquitto running on my Raspberry Pi.
          </p>
          <p>
            How could this project grow next? A dynamic user dashboard charting and graphing climate data?  A way to send commands to the device?  Fine tuning and productizing the hardware?
          </p>
        </div>
      </div>)
    },
    {
      id: 5,
      title: "Raspberry Pi",
      description: "Running PiHole and PiCam for smart home automation.",
      slug: "raspberry-pi",
      customContent: (<div>
        <div className="text-gray-300 space-y-4">
        <p>
          I have an old Raspberry Pi 2 from forever ago.  Here are two ways I've made it useful.
        </p>
        <p><b>PiHole.</b>  A DNS server for privacy and security, this service runs on the Raspberry Pi and blocks ads and trackers
        Just log on to your wifi router and point it to the Raspberry Pi and it will start ignoring DNS requests to ad domains and other pesky websites.
        You won't believe how much of your bandwidth is taken up by trackers, logs, metrics, ads, and all kinds of other requests that you never know about.
        Surprisingly, or perhaps unsurprisingly, my Amazon Fire TV was one of the biggest culprits of sending massive amounts of blocked DNS queries.
        So whatever you do, don't forget about all your other IoT devices which may be sending unnecessary traffic.</p>
        <p><b>PiCam.</b>  So I have one connected to my Raspberry Pi 2.  Since its an older model it can't do much with video, so I we'll have to settle with images.
        Using raspicam on a crontab scheduler, I save a JPEG image to a folder every minute and serve it up through a CGI script.  
        </p>
        </div>
        </div>)
    },
    {
      id: 6,
      title: "Shark Bait Scuba",
      description: (<>A Replit powered frontend for scuba diving training and charters.{" "}
        <a
          href="https://sharkbaitscubafl.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300"
        >
          Visit
        </a>{" "}</>),
      slug: "shark-bait-scuba",
      customContent: (<div>
        <div className="text-gray-300 space-y-4">
          <p>
            </p>
            </div>
        </div>)
    }
  ]