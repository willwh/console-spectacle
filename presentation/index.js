// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Table,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Text,
  Image
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import CodeSlide
import CodeSlide from 'spectacle-code-slide';

// Import Terminal
import Terminal from "spectacle-terminal";


// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  console: require("../assets/img/drupal-console.png"),
  cms_learning: require("../assets/img/cms-learning-curve.png"),
  bulldozer: require("../assets/img/bulldozer-dealwithit.png"),
  willwh: require("../assets/img/will-north.jpg"),
  jmolivas: require("../assets/img/jmolivas-lol.gif"),
  magic: require("../assets/img/magic-unicorn.gif"),
  download: require("../assets/img/download.png"),
  cheatsheet: require("../assets/img/cheatsheet.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={[]} transitionDuration={0} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.console} margin="0px auto 40px" height="293px"/>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Improve your Drupal 8 Workflow with Drupal Console
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            William Hetherington - North Studio
          </Text>
        </Slide>
        <Slide>
          <Image src={images.willwh} height="300" width="300"/>
          <Text>William Hetherington - Dropship Captain</Text><br />
          <Link href="https://drupal.org/u/willwh">https://drupal.org/u/willwh</Link><br /><br />
          <Link href="https://drupal.org/u/willwh">https://northstudio.com</Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            What is Drupal Console?
          </Heading>
          <List>
            <Appear><ListItem>A CLI (command line interface) tool for managing Drupal 8</ListItem></Appear>
            <Appear><ListItem>Built with Symfony's Console Component (symfony/console)</ListItem></Appear>
            <Appear><ListItem>Supports Drupal 8</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Why is it awesome?
          </Heading>
          <List>
            <Appear><ListItem>Generate code, users and content</ListItem></Appear>
            <Appear><ListItem>Interact with local and remote Drupal sites</ListItem></Appear>
            <Appear><ListItem>Make "recipes" using chain files</ListItem></Appear>
            <Appear><ListItem>Manage configuration, migrations, and more</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" bgImage={images.download} textColor="tertiary">
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Image src={images.cms_learning} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={images.bulldozer} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Install Console
          </Heading>
            <Terminal title="1. willwh@expatria: ~(zsh)" output={[
              "curl https://drupalconsole.com/installer -L -o drupal.phar",
              "mv drupal.phar /usr/local/bin/drupal",
                "chmod +x /usr/local/bin/drupal"
              ]}
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Initialize Console
          </Heading>
          <Terminal title="1. willwh@expatria: ~(zsh)" output={[
              "drupal init"]}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Link href="https://drupalconsole.com/cheatsheet">
            <Heading size={6} caps lineHeight={1} textColor="secondary">https://drupalconsole.com/cheatsheet</Heading>
          <Image width="100%" src={images.cheatsheet}/></Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Create a new Drupal 8 site
          </Heading>
          <Terminal title="1. willwh@expatria: ~(zsh)" output={[
              "drupal site:new"
              ]}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Start a PHP server to run Drupal
          </Heading>
          <Terminal title="1. willwh@expatria: ~(zsh)" output={[
              "drupal server",
              "drupal site:install"
              ]}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Chain Files
          </Heading>
          <Image src={images.magic} />
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/dev-init.yml")}
          ranges={[
              { loc: [0, 270], title: "../console/chain/dev-init.yml" },
              { loc: [0, 3], note: "Console magically imports chain files with a defined command name" },
              { loc: [3, 4], note: "An array of commands" },
              { loc: [4, 10], note: "Exec Example" },
              { loc: [10, 17], note: "Install some modules" },
              { loc: [17, 23], note: "Run npm install :)"},
              { loc: [23, 29], note: "Build your theme!" },
              { loc: [29, 40], note: "Configure stage_file_proxy"},
              { loc: [40, 56], note: "Create some dummy content"},
              { loc: [56, 62], note: "Finally clear caches :)"}
            ]}/>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/sfp.yml")}
          ranges={[
              { loc: [0, 270], title: "../console/chain/sfp.yml" },
              { loc: [0, 3], note: "Create our command as 'sfp:init'" },
              { loc: [3, 9], note: "Install stage_file_proxy" },
              { loc: [9, 15], note: "config:override with a placeholder" },
              { loc: [15, 20], note: "And another ;)" }
            ]}/>
        <Slide fit transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image src={images.jmolivas} />
          <BlockQuote>
            <Quote textSize="2em">This is how it feels to maintain a #drupal8 related project, because of all of the drupal core changes. #DrupalConsole</Quote>
            <Cite>jmolivas</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Scaffolding with Drupal Console
          </Heading>
        </Slide>
        <Slide>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Get Involved!
          </Heading>
          <Image src={images.console} />
          <Link>github.com/hechoendrupal/drupal-console</Link>
        </Slide>
      </Deck>
    );
  }
}
