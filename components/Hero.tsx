import Image from "next/image";
import mypic from "../public/gokurun.gif";

const Hero = () => (
  <>
    <h1 className="text-4xl font-bold flex">
      {" "}
      <Image
        src={mypic}
        alt="Picture of the author"
        width="25"
        height="25"
      />{" "}
        &nbsp;Shaheer Khan
    </h1>
    <p>
      I Work as Mean stack developer at{" "}
      <a href="//www.uppedevents.com/">Upped Event Inc</a>.
    </p>
    <p>
      I previously created <a href="//octanedemo.netlify.app">Octane</a>, a platform
      that can Block,Unblock and whitelist domains,urls,vpns. I was also a
      resident engineer at PTA to provide support for Sandvine / DPI and the WMS
      Solution. I graduated from International Islamic University,Islamabad with
      degree in Software Engineering. I&#x27;m currently based in
      Islamabad,Pakistan.
    </p>
    <p>
      I&#x27;m interested in Angular, Nodejs, nextjs, Kubernetes, dockers more CI/CD
      technologies as well.
    </p>
  </>
);

export default Hero;
