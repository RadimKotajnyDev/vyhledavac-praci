'use client'
import {Box, Button, Spinner, Text} from "@chakra-ui/react"
import {useVyhledanePrace} from "@/app/configs/hooks/useVyhledanePrace";
import ThesesTable from "@/app/components/ThesesTable";

const VyhledanePrace = () => {

  const {
    NextPage,
    PreviousPage,
    TableTop,
    handleBackClick,
    tryAgain,
    slugify,
    TableHeads,
    setSortBy,
    setSortDirDown,
    isButtonHidden,
    bgColor,
    router,
    pageNumber,
    sortBy,
    sortDirDown,
    loadMore,
    isLoading,
    apiData,
    setLoadMore,
    setPageNumber,
    hideButton,
    maxPageNumber
  } = useVyhledanePrace()

  if (isLoading) {
    return (
      <Box color="white" w="full" justifyContent="center" gap={10}
           minH="80vh" flexDir="column" placeItems="center" display="flex">
        <Spinner size='xl'/>
        <Button display={tryAgain ? "block" : "none"} onClick={() => router.push("/")}>Zkusit znovu</Button>
      </Box>
    )
  } else {
    if (apiData && Array.isArray(apiData) && apiData.length > 0) {
      return (
        <ThesesTable {...{
          NextPage,
          PreviousPage,
          TableTop,
          handleBackClick,
          slugify,
          TableHeads,
          setSortBy,
          setSortDirDown,
          isButtonHidden,
          bgColor,
          router,
          pageNumber,
          sortBy,
          sortDirDown,
          loadMore,
          apiData,
          setLoadMore,
          setPageNumber,
          hideButton,
          maxPageNumber
        }} />
      )
    } else if (apiData && apiData.Message) {
      return (
        <Box color="white" w="full" justifyContent="center" gap={10}
             minH="80vh" flexDir="column" placeItems="center" display="flex">
          <Text fontSize="3xl">{apiData.Message}</Text>
          <Button onClick={() => router.push("/")}>Zkusit znovu</Button>
        </Box>
      )
    } else return (
      <>
        <Box color="white" w="full" justifyContent="center" gap={10}
             minH="80vh" flexDir="column" placeItems="center" display="flex">
          <Text fontSize="3xl">Nenalezeny žádné práce.</Text>
          <Button onClick={() => router.push("/")}>Zkusit znovu</Button>
        </Box>
      </>
    );
  }
}
export default VyhledanePrace
