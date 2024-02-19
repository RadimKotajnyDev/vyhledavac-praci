import {Heading, Text} from "@chakra-ui/react";

const PageText = () => {
  return (
    <>
      <Heading fontSize={{base: "2xl", md: "7xl"}} mx={{base: 10, md: 0}}
          >ThesisSpotlight</Heading>
          <Text fontSize={{base: "lg", md: "3xl"}} mx={{base: 10, md: 0}}>
            Potřebujete se inspirovat?
            <br/> Hledáte zajímavé nápady studentů?
            <br/> Nebo vás jen zajímá co už někdo vytvořil?
            <br/> Pomůžeme vám najít ročníkové práce.
          </Text>
    </>
  )
}

export default PageText