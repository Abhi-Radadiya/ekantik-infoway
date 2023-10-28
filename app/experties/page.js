import Image from "next/image";
import React from "react";
import stack from "../assets/stack.svg";
import reactLogo from "../assets/reactLogo.png";
import bootstrap from "../assets/bootStrap.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.png";
import mongo from "../assets/mongo.png";
import express from "../assets/express.png";
import js from "../assets/js.png";
import node from "../assets/node.png";
import next from "../assets/nxt.png";
import Link from "next/link";
import TechnologyIcon from "./components/TechnologyIcon";

export default function page() {
    const TechnologyStack = [reactLogo, next, bootstrap, tailwind, python, mongo, express, js, node];

    return (
        <div>
            <div className="lav-section-wrapper tools">
                <div className="row m0">
                    <div className="col-half">
                        <h2 className="font--h1">Technology Stack</h2>
                    </div>
                    <Image className="tools-img" src={stack} alt="Tag" width="302" height="291" loading="lazy" />
                </div>
                <div>
                    <h2 className="font--h2">Front-End</h2>
                    <p className="font--16">
                        Beinng the face of the project, we pay attention to every little detail in order to male it fascinating and easy to use so that users could enjoy
                        experiencing your website.
                    </p>
                    <div className="m-b">
                        <h3 className="font--h4">Frameworks</h3>
                        {TechnologyStack.map((el, index) => (
                            <React.Fragment key={index}>
                                <TechnologyIcon logo={el} />
                            </React.Fragment>
                        ))}

                        <div className="tools-wrap even">
                            <Link href="/">
                                <Image src={reactLogo} alt="React" width="95" height="32" loading="lazy" />
                            </Link>

                            <Link href="/tools/react" className="tools-card">
                                <Image src={next} alt="next" width="95" height="32" loading="lazy" />
                            </Link>

                            <Link href="/tools/react" className="tools-card">
                                <Image src={bootstrap} alt="Bootstrap" width="128" height="34" loading="lazy" />
                            </Link>

                            <Link href="/tools/react" className="tools-card">
                                <Image src={tailwind} alt="Bootstrap" width="128" height="34" loading="lazy" />
                            </Link>

                            <Link href="/tools/react" className="tools-card">
                                <Image src={python} alt="Bootstrap" width="128" height="34" loading="lazy" />
                            </Link>

                            <Link href="/tools/react" className="tools-card">
                                <Image src={mongo} alt="Bootstrap" width="128" height="34" loading="lazy" />
                            </Link>

                            <Link href="/tools/react" className="tools-card">
                                <Image src={express} alt="Bootstrap" width="128" height="34" loading="lazy" />
                            </Link>

                            <Link href="/tools/react" className="tools-card">
                                <Image src={js} alt="Bootstrap" width="128" height="34" loading="lazy" />
                            </Link>

                            <Link href="/tools/react" className="tools-card">
                                <Image src={node} alt="Bootstrap" width="128" height="34" loading="lazy" />
                            </Link>
                        </div>
                    </div>
                    <div className="m-b">
                        <h3 className="font--h4">Tools and libraries</h3>
                        <div className="tools-wrap">
                            {/* <a href="/tools/sass" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/download_14_eq49Y9zFid.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372459714"
                                    alt="Sass"
                                    width="63"
                                    height="47"
                                    loading="lazy"
                                />
                            </a>
                            <a href="/tools/less" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/less-logo-AAE582C286-seeklogo_1_68_xYn166.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372462289"
                                    alt="Less"
                                    width="78"
                                    height="34"
                                    loading="lazy"
                                />
                            </a>
                            <div className="tools-card tools-card_not-link">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/d3_1_q1yr_elV_D.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372459674"
                                    alt="Travis CI"
                                    width="46"
                                    height="46"
                                    loading="lazy"
                                />
                            </div>
                            <a href="/tools/redux" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/download_15_In1IfW-UO.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372459618"
                                    alt="Redux"
                                    width="113"
                                    height="30"
                                    loading="lazy"
                                />
                            </a>
                            <div className="tools-card tools-card_not-link">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/download_16_WH7VqZHIPu.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372459654"
                                    alt="Aws Codeplay"
                                    width="38"
                                    height="38"
                                    loading="lazy"
                                />
                            </div>
                            <a href="/tools/polymer" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/3ee242c9ed3f3d8313ad32207fdff1a3_1_1sgYdXCyx.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372459825"
                                    alt="Polymer"
                                    width="131"
                                    height="28"
                                    loading="lazy"
                                />
                            </a> */}
                        </div>
                    </div>
                    <h2 className="font--h2">Back-End</h2>
                    <p className="font--16">
                        We know how to combine all the most advanced technologies to produce customized, secured and scalable architecture that will maintain the most extensive
                        functionality of your web application.
                    </p>
                    <div className="m-b">
                        <h3 className="font--h4">Technologies</h3>
                        <div className="tools-wrap even">
                            {/* <a href="/tools/javascript" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/download_17_SAOqJJleX2.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372459657"
                                    alt="JS"
                                    width="45"
                                    height="45"
                                    loading="lazy"
                                />
                            </a>
                            <a href="/tools/java-mob" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/java-logo-transparent-png-png-image-892732_1_mLEophuir.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372462872"
                                    alt="java"
                                    width="89"
                                    height="55"
                                    loading="lazy"
                                />
                            </a>
                            <a href="/tools/python-web" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/Python-Logo_1_9AgXbW_eW.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372465605"
                                    alt="Python"
                                    width="117"
                                    height="28"
                                    loading="lazy"
                                />
                            </a>
                            <a href="/tools/csharp" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/download_18_gBA79hVXtt.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372459699"
                                    alt="C#"
                                    width="41"
                                    height="47"
                                    loading="lazy"
                                />
                            </a> */}
                        </div>
                    </div>
                    <div className="m-b">
                        <h3 className="font--h4">Frameworks</h3>
                        <div className="tools-wrap even">
                            {/* <a href="/tools/laravel" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/download_19_kKKk5mK5MK.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372459737"
                                    alt="Laravel"
                                    width="119"
                                    height="37"
                                    loading="lazy"
                                />
                            </a>
                            <a href="/tools/symfony" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/symfony_black_02_1_icWpM_QCa.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372465149"
                                    alt="Symfony"
                                    width="112"
                                    height="28"
                                    loading="lazy"
                                />
                            </a>
                            <a href="/tools/zend" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/ZendFramework-logo_1_Y6OnIJeXi.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372464467"
                                    alt="Zend"
                                    width="135"
                                    height="36"
                                    loading="lazy"
                                />
                            </a>
                            <a href="/tools/node" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/80-803529_vector-javascript-node-js-jpg-black-and-white_1_daordaGFZ.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372459477"
                                    alt="Node"
                                    width="85"
                                    height="34"
                                    loading="lazy"
                                />
                            </a>
                            <a href="/tools/express" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67_1_FHpbvJt8j.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372459534"
                                    alt="Express"
                                    width="105"
                                    height="26"
                                    loading="lazy"
                                />
                            </a>
                            <a href="/tools/spring" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/1280px-Spring_Framework_Logo_2018_1_k2JkxRRni.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372459667"
                                    alt="Spring"
                                    width="115"
                                    height="28"
                                    loading="lazy"
                                />
                            </a>
                            <a href="/tools/loopback" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/loopback-full-logo-blue_1_g5nW9gMmA.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372463453"
                                    alt="LoopBack"
                                    width="113"
                                    height="31"
                                    loading="lazy"
                                />
                            </a>
                            <a href="/tools/django" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/download_20_e8Zp40LLFf.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372460133"
                                    alt="django"
                                    width="83"
                                    height="28"
                                    loading="lazy"
                                />
                            </a>
                            <a href="/tools/flask" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/pocoo_flask_logo_icon_168045_1_ZJgHrSHhP.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372466185"
                                    alt="Flask"
                                    width="105"
                                    height="52"
                                    loading="lazy"
                                />
                            </a> */}
                        </div>
                    </div>
                    <div className="m-b">
                        <h3 className="font--h4">Databases</h3>
                        <div className="tools-wrap even">
                            {/* <a href="/tools/postgresql" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/kisspng-postgresql-amazon-relational-database-service-orac-sql-logo-5b42e2ed3e3076_1_KaAAQJ8uN.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372462711"
                                    alt="PostgreSQL"
                                    width="119"
                                    height="31"
                                    loading="lazy"
                                />
                            </a>
                            <div className="tools-card tools-card_not-link">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/download_21_X9Md9RQEp.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372460223"
                                    alt="MySQL"
                                    width="84"
                                    height="42"
                                    loading="lazy"
                                />
                            </div>
                            <a href="/tools/percona" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/percona-logo-sharing_1_MvmJNnKR4.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372464245"
                                    alt="Percona"
                                    width="127"
                                    height="31"
                                    loading="lazy"
                                />
                            </a>
                            <a href="/tools/oracle" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/purepng_1_w9ZR3Q_gP.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372465768"
                                    alt="Oracle"
                                    width="116"
                                    height="27"
                                    loading="lazy"
                                />
                            </a>
                            <a href="/tools/mongo" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/2560px-MongoDB_Logo_1_s_GTF2z00.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372459561"
                                    alt="mongoDB"
                                    width="112"
                                    height="30"
                                    loading="lazy"
                                />
                            </a>
                            <a href="/tools/dynamo" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/edit_dynamodb_1_Uw7bdfPKN.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372461396"
                                    alt="DynamoDB"
                                    width="85"
                                    height="34"
                                    loading="lazy"
                                />
                            </a>
                            <a href="/tools/neo4j" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/neo4j-logo-2020-1_1_sDMudHIi7.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372463979"
                                    alt="neo4j"
                                    width="87"
                                    height="28"
                                    loading="lazy"
                                />
                            </a>
                            <a href="/tools/hbase" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/apache-hbase-logo_1_bdODS06RNy.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372459686"
                                    alt="HBASE"
                                    width="114"
                                    height="29"
                                    loading="lazy"
                                />
                            </a>
                            <a href="/tools/cassandra" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/download_22_Lq5jR-O_T.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372460539"
                                    alt="Cassandra"
                                    width="132"
                                    height="26"
                                    loading="lazy"
                                />
                            </a> */}
                        </div>
                    </div>
                    <div className="m-b">
                        <h3 className="font--h4">Search engines</h3>
                        <div className="tools-wrap even">
                            {/* <a href="/tools/elasticsearch" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/Group_289268_wiFIQlPnG.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372461552"
                                    alt="Elasticsearch"
                                    width="75"
                                    height="41"
                                    loading="lazy"
                                />
                            </a>
                            <a href="/tools/sphinx" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/download_23_IXM61BLj-.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372460688"
                                    alt="Sphinx"
                                    width="107"
                                    height="27"
                                    loading="lazy"
                                />
                            </a>
                            <div className="tools-card tools-card_not-link">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/images_1_D_EyGBTYG.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372463238"
                                    alt="Solr"
                                    width="77"
                                    height="39"
                                    loading="lazy"
                                />
                            </div> */}
                        </div>
                    </div>
                    <div>
                        <h3 className="font--h4">Message brokers</h3>
                        <div className="tools-wrap">
                            {/* <a href="/tools/kafka" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/WIDE_-_Black_on_Transparent_1_6-BYGnVKk.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372464952"
                                    alt="kafka"
                                    width="80"
                                    height="36"
                                    loading="lazy"
                                />
                            </a>
                            <a href="/tools/sqs" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/download_24_oLXKv9t0F.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372460868"
                                    alt="amazon sqs"
                                    width="91"
                                    height="38"
                                    loading="lazy"
                                />
                            </a>
                            <div className="tools-card tools-card_not-link">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/logo_3_L04SfxIAP.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372462049"
                                    alt="OMQ"
                                    width="77"
                                    height="23"
                                    loading="lazy"
                                />
                            </div>
                            <a href="/tools/rabbitmq" className="tools-card">
                                <image
                                    src="https://ik.imagekit.io/k0jemnbco/Web_Dev/download_25_UqlH54dGD.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1648372461175"
                                    alt="Rabbit MQ"
                                    width="132"
                                    height="21"
                                    loading="lazy"
                                />
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --primary: #007bff;
    --secondary: #6c757d;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    --swiper-theme-color: #007aff;
    --swiper-navigation-size: 44px;
    font-size: 1rem;
    text-align: left;
    color: #27273d;
    font-family: Lato,Roboto,sans-serif;
    font-weight: 400;
    font-style: normal;
    line-height: 1;
    box-sizing: inherit;
    margin: 0 5.2223vw;
    padding: 65px 4.513889vw 65px;
    border-radius: 40px;
    background: url(https://ik.imagekit.io/k0jemnbco/DevOps/Mask_Group_hS55T5ayy.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646922799903) bottom right no-repeat;
    background-size: 35%;
    background-color: #fafafe;
    position: relative; */}
        </div>
    );
}
