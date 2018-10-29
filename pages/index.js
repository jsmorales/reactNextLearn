
//https://nextjs.org/learn/basics/navigate-between-pages/works-with-anything
//https://github.com/zeit/next.js#routing

import Layout from '../comps/MyLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Friend from "../comps/friend_comp";
import TonightsPlan from "../comps/today_plan_comp";
import React from "react";


/*
* <PostLink id="hello-next-alocer-blog" title="Hello Next.js" name="custom name" class="class-example"/>
  <PostLink id="learn-next-alocer-blog" title="Learn Next.js" class="class-example"/>
  <PostLink id="deploy-next-alocer-blog" title="Deploy apps with AlocerX" class="class-example"/>

<li key={show.id}>
    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
        <a>{show.name}</a>
    </Link>
</li>
**/

const PostLink = (props) => (

    <li key={props.id}>
        <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
            <a>{props.name}</a>
        </Link>
    </li>
);



const Index = (props) => (

    <Layout>
        <p>Hello Next.js</p>

        <Friend/>

        <h2>Batman TV Shows</h2>
        <ul>
            {props.shows.map(({show})=>(
                <PostLink id={show.id} name={show.name}/>
            ))}
        </ul>

    </Layout>
);

Index.getInitialProps = async function(){
    const result = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await result.json();

    console.log(`Show data fetched. count: ${data.length}`);

    return {shows: data};
};

export default Index
