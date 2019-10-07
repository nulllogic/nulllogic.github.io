import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/16blocks/layout"

const FlexPage = () => (
  <Layout>
    <div className="hero-image">
      <div className="container">
        <div className="row">
          <div className="xs-16">
            <h1 className="title">Flex-containers</h1>
          </div>
        </div>
      </div>
    </div>
  
    <div className="b-section-flex container">
      <div className="row l-inner">
        <div className="xs-16">
          
          <h2 className="section-title">Basics</h2>
          <p>sefmmyg wgfiilulrr rliugar a;ourh ; ;aorh f;oh ;aiwhe;uegsgku uaygsdfliy gwaiulg faiugaleie e
            iuglgualgaliueg iuaw ;akuehg ouehrg oiehgrih;dihfgih </p>
          <div className="flex-example flex">
            <div className="column">
              <span>Flex 1</span>
            </div>
            <div className="column">
              <span>Flex 2</span>
            </div>
            <div className="column">
              <span>Flex 3</span>
            </div>
          </div>
          
          <h2 className="section-title">Flex wrap</h2>
          <p>flex nowrap</p>
          <div className="flex-example flex flex-nowrap">
            <div className="column">
              <span>Flex 1</span>
            </div>
            <div className="column">
              <span>Flex 2</span>
            </div>
            <div className="column">
              <span>Flex 3</span>
            </div>
            <div className="column">
              <span>Flex 4</span>
            </div>
            <div className="column">
              <span>Flex 5</span>
            </div>
            <div className="column">
              <span>Flex 6</span>
            </div>
            <div className="column">
              <span>Flex 7</span>
            </div>
            <div className="column hidden-sm hidden-xs">
              <span>Flex 8</span>
            </div>
            <div className="column hidden-sm hidden-xs">
              <span>Flex 9</span>
            </div>
            <div className="column hidden-sm hidden-xs">
              <span>Flex 10</span>
            </div>
            <div className="column hidden-md hidden-sm hidden-xs">
              <span>Flex 11</span>
            </div>
            <div className="column hidden-md hidden-sm hidden-xs">
              <span>Flex 12</span>
            </div>
            <div className="column hidden-md hidden-sm hidden-xs">
              <span>Flex 13</span>
            </div>
            <div className="column hidden-md hidden-sm hidden-xs">
              <span>Flex 14</span>
            </div>
            <div className="column hidden-lg hidden-md hidden-sm hidden-xs">
              <span>Flex 15</span>
            </div>
          </div>
          <p>flex wrap</p>
          <div className="flex-example flex flex-wrap">
            <div className="column">
              <span>Flex 1</span>
            </div>
            <div className="column">
              <span>Flex 2</span>
            </div>
            <div className="column">
              <span>Flex 3</span>
            </div>
            <div className="column">
              <span>Flex 4</span>
            </div>
            <div className="column">
              <span>Flex 5</span>
            </div>
            <div className="column">
              <span>Flex 6</span>
            </div>
            <div className="column">
              <span>Flex 7</span>
            </div>
            <div className="column hidden-sm hidden-xs">
              <span>Flex 8</span>
            </div>
            <div className="column hidden-sm hidden-xs">
              <span>Flex 9</span>
            </div>
            <div className="column hidden-sm hidden-xs">
              <span>Flex 10</span>
            </div>
            <div className="column hidden-md hidden-sm hidden-xs">
              <span>Flex 11</span>
            </div>
            <div className="column hidden-md hidden-sm hidden-xs">
              <span>Flex 12</span>
            </div>
            <div className="column hidden-md hidden-sm hidden-xs">
              <span>Flex 13</span>
            </div>
            <div className="column hidden-md hidden-sm hidden-xs">
              <span>Flex 14</span>
            </div>
            <div className="column hidden-lg hidden-md hidden-sm hidden-xs">
              <span>Flex 15</span>
            </div>
          </div>
          
          <h2 className="section-title">Flex-direction</h2>
          <p>flex row reverse</p>
          <div className="flex-example flex flex-row-reverse">
            <div className="column">
              <span>Flex 1</span>
            </div>
            <div className="column">
              <span>Flex 2</span>
            </div>
            <div className="column">
              <span>Flex 3</span>
            </div>
          </div>
          <p>flex column</p>
          <div className="flex-example flex flex-column">
            <div className="column">
              <span>Flex 1</span>
            </div>
            <div className="column">
              <span>Flex 2</span>
            </div>
            <div className="column">
              <span>Flex 3</span>
            </div>
          </div>
          <p>flex column reverse</p>
          <div className="flex-example flex flex-column-reverse">
            <div className="column">
              <span>Flex 1</span>
            </div>
            <div className="column">
              <span>Flex 2</span>
            </div>
            <div className="column">
              <span>Flex 3</span>
            </div>
          </div>
          
          <h2 className="section-title">Flex justify</h2>
          <p>Justify start</p>
          <div className="flex-example flex justify-content-start">
            <div className="column">
              <span>Flex 1</span>
            </div>
            <div className="column">
              <span>Flex 2</span>
            </div>
            <div className="column">
              <span>Flex 3</span>
            </div>
          </div>
          <p>Justify end</p>
          <div className="flex-example flex justify-content-end">
            <div className="column">
              <span>Flex 1</span>
            </div>
            <div className="column">
              <span>Flex 2</span>
            </div>
            <div className="column">
              <span>Flex 3</span>
            </div>
          </div>
          <p>Justify between</p>
          <div className="flex-example flex justify-content-between">
            <div className="column">
              <span>Flex 1</span>
            </div>
            <div className="column">
              <span>Flex 2</span>
            </div>
            <div className="column">
              <span>Flex 3</span>
            </div>
          </div>
          <p>Justify around</p>
          <div className="flex-example flex justify-content-around">
            <div className="column">
              <span>Flex 1</span>
            </div>
            <div className="column">
              <span>Flex 2</span>
            </div>
            <div className="column">
              <span>Flex 3</span>
            </div>
          </div>
          <p>Justify center</p>
          <div className="flex-example flex justify-content-center">
            <div className="column">
              <span>Flex 1</span>
            </div>
            <div className="column">
              <span>Flex 2</span>
            </div>
            <div className="column">
              <span>Flex 3</span>
            </div>
          </div>
          
          <h2 className="section-title">Flex align</h2>
          <p>blablabla</p>
          <h3>Align items</h3>
          <p>use for vertical align flexboxes</p>
          <p>Align start</p>
          <div className="flex-example example-align flex align-items-start">
            <div className="column">
              <span>Flex 1</span>
              <span>Some text</span>
            </div>
            <div className="column">
              <span>Flex 2</span>
            </div>
            <div className="column">
              <span>Flex 3</span>
              <span>Some text</span>
              <span>Something else</span>
            </div>
          </div>
          <p>Align baseline</p>
          <div className="flex-example example-align flex align-items-baseline">
            <div className="column">
              <span>Flex 1</span>
              <span>Some text</span>
            </div>
            <div className="column">
              <span>Flex 2</span>
            </div>
            <div className="column">
              <span>Flex 3</span>
              <span>Some text</span>
              <span>Something else</span>
            </div>
          </div>
          <p>Align end</p>
          <div className="flex-example example-align flex align-items-end">
            <div className="column">
              <span>Flex 1</span>
              <span>Some text</span>
            </div>
            <div className="column">
              <span>Flex 2</span>
            </div>
            <div className="column">
              <span>Flex 3</span>
              <span>Some text</span>
              <span>Something else</span>
            </div>
          </div>
          <p>Align center</p>
          <div className="flex-example example-align flex align-items-center">
            <div className="column">
              <span>Flex 1</span>
              <span>Some text</span>
            </div>
            <div className="column">
              <span>Flex 2</span>
            </div>
            <div className="column">
              <span>Flex 3</span>
              <span>Some text</span>
              <span>Something else</span>
            </div>
          </div>
          <p>Align stretch</p>
          <div className="flex-example example-align flex align-items-stretch">
            <div className="column">
              <span>Flex 1</span>
              <span>Some text</span>
            </div>
            <div className="column">
              <span>Flex 2</span>
            </div>
            <div className="column">
              <span>Flex 3</span>
              <span>Some text</span>
              <span>Something else</span>
            </div>
          </div>
          
          <h3>Align content</h3>
          <p>use for vertical align flexboxes with two or more string in flexbox container</p>
          <p>align content start</p>
          <div className="flex-example example-align flex align-content-start flex-wrap">
            <div className="column">
              <span>This is flex 1</span>
            </div>
            <div className="column">
              <span>This is flex 2</span>
            </div>
            <div className="column">
              <span>This is flex 3</span>
            </div>
            <div className="column">
              <span>This is flex 4</span>
            </div>
            <div className="column">
              <span>This is flex 5</span>
            </div>
            <div className="column">
              <span>This is flex 6</span>
            </div>
            <div className="column">
              <span>This is flex 7</span>
            </div>
            <div className="column">
              <span>This is flex 8</span>
            </div>
            <div className="column">
              <span>This is flex 9</span>
            </div>
            <div className="column">
              <span>This is flex 10</span>
            </div>
            <div className="column">
              <span>This is flex 11</span>
            </div>
            <div className="column">
              <span>This is flex 12</span>
            </div>
            <div className="column">
              <span>This is flex 13</span>
            </div>
            <div className="column">
              <span>This is flex 14</span>
            </div>
          </div>
          <p>align content end</p>
          <div className="flex-example example-align flex align-content-end flex-wrap">
            <div className="column">
              <span>This is flex 1</span>
            </div>
            <div className="column">
              <span>This is flex 2</span>
            </div>
            <div className="column">
              <span>This is flex 3</span>
            </div>
            <div className="column">
              <span>This is flex 4</span>
            </div>
            <div className="column">
              <span>This is flex 5</span>
            </div>
            <div className="column">
              <span>This is flex 6</span>
            </div>
            <div className="column">
              <span>This is flex 7</span>
            </div>
            <div className="column">
              <span>This is flex 8</span>
            </div>
            <div className="column">
              <span>This is flex 9</span>
            </div>
            <div className="column">
              <span>This is flex 10</span>
            </div>
            <div className="column">
              <span>This is flex 11</span>
            </div>
            <div className="column">
              <span>This is flex 12</span>
            </div>
            <div className="column">
              <span>This is flex 13</span>
            </div>
            <div className="column">
              <span>This is flex 14</span>
            </div>
          </div>
          <p>align content stretch</p>
          <div className="flex-example example-align flex align-content-stretch flex-wrap">
            <div className="column">
              <span>This is flex 1</span>
            </div>
            <div className="column">
              <span>This is flex 2</span>
            </div>
            <div className="column">
              <span>This is flex 3</span>
            </div>
            <div className="column">
              <span>This is flex 4</span>
            </div>
            <div className="column">
              <span>This is flex 5</span>
            </div>
            <div className="column">
              <span>This is flex 6</span>
            </div>
            <div className="column">
              <span>This is flex 7</span>
            </div>
            <div className="column">
              <span>This is flex 8</span>
            </div>
            <div className="column">
              <span>This is flex 9</span>
            </div>
            <div className="column">
              <span>This is flex 10</span>
            </div>
            <div className="column">
              <span>This is flex 11</span>
            </div>
            <div className="column">
              <span>This is flex 12</span>
            </div>
            <div className="column">
              <span>This is flex 13</span>
            </div>
            <div className="column">
              <span>This is flex 14</span>
            </div>
          </div>
          <p>align content around</p>
          <div className="flex-example example-align flex align-content-around flex-wrap">
            <div className="column">
              <span>This is flex 1</span>
            </div>
            <div className="column">
              <span>This is flex 2</span>
            </div>
            <div className="column">
              <span>This is flex 3</span>
            </div>
            <div className="column">
              <span>This is flex 4</span>
            </div>
            <div className="column">
              <span>This is flex 5</span>
            </div>
            <div className="column">
              <span>This is flex 6</span>
            </div>
            <div className="column">
              <span>This is flex 7</span>
            </div>
            <div className="column">
              <span>This is flex 8</span>
            </div>
            <div className="column">
              <span>This is flex 9</span>
            </div>
            <div className="column">
              <span>This is flex 10</span>
            </div>
            <div className="column">
              <span>This is flex 11</span>
            </div>
            <div className="column">
              <span>This is flex 12</span>
            </div>
            <div className="column">
              <span>This is flex 13</span>
            </div>
            <div className="column">
              <span>This is flex 14</span>
            </div>
          </div>
          <p>align content between</p>
          <div className="flex-example example-align flex align-content-between flex-wrap">
            <div className="column">
              <span>This is flex 1</span>
            </div>
            <div className="column">
              <span>This is flex 2</span>
            </div>
            <div className="column">
              <span>This is flex 3</span>
            </div>
            <div className="column">
              <span>This is flex 4</span>
            </div>
            <div className="column">
              <span>This is flex 5</span>
            </div>
            <div className="column">
              <span>This is flex 6</span>
            </div>
            <div className="column">
              <span>This is flex 7</span>
            </div>
            <div className="column">
              <span>This is flex 8</span>
            </div>
            <div className="column">
              <span>This is flex 9</span>
            </div>
            <div className="column">
              <span>This is flex 10</span>
            </div>
            <div className="column">
              <span>This is flex 11</span>
            </div>
            <div className="column">
              <span>This is flex 12</span>
            </div>
            <div className="column">
              <span>This is flex 13</span>
            </div>
            <div className="column">
              <span>This is flex 14</span>
            </div>
          </div>
          <p>align content center</p>
          <div className="flex-example example-align flex align-content-center flex-wrap">
            <div className="column">
              <span>This is flex 1</span>
            </div>
            <div className="column">
              <span>This is flex 2</span>
            </div>
            <div className="column">
              <span>This is flex 3</span>
            </div>
            <div className="column">
              <span>This is flex 4</span>
            </div>
            <div className="column">
              <span>This is flex 5</span>
            </div>
            <div className="column">
              <span>This is flex 6</span>
            </div>
            <div className="column">
              <span>This is flex 7</span>
            </div>
            <div className="column">
              <span>This is flex 8</span>
            </div>
            <div className="column">
              <span>This is flex 9</span>
            </div>
            <div className="column">
              <span>This is flex 10</span>
            </div>
            <div className="column">
              <span>This is flex 11</span>
            </div>
            <div className="column">
              <span>This is flex 12</span>
            </div>
            <div className="column">
              <span>This is flex 13</span>
            </div>
            <div className="column">
              <span>This is flex 14</span>
            </div>
          </div>
          
          <h3>Align self</h3>
          <p>use for individual align flexboxes in flexbox container</p>
          <p>align self start</p>
          <div className="flex-example example-align flex flex-wrap">
            <div className="column align-self-start">
              <span>Align start</span>
            </div>
            <div className="column align-self-center">
              <span>Align center</span>
            </div>
            <div className="column align-self-end">
              <span>Align end</span>
            </div>
            <div className="column align-self-auto">
              <span>Align auto</span>
            </div>
            <div className="column align-self-baseline">
              <span>Align baseline</span>
            </div>
            <div className="column align-self-stretch">
              <span>Align stretch</span>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default FlexPage
