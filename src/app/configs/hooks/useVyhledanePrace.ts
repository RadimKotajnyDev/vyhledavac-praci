import {useRouter} from "next/navigation";
import {useColorModeValue, useToast} from "@chakra-ui/react";
import {useAPIFunctions} from "@/app/configs/hooks/useAPIFunctions";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {server_address} from "@/app/configs/apiConfig";
import {APIData, PraceType} from "@/app/configs/types/ApiDataTypes";
import {TableHeads} from "@/app/configs/default-values/defaultconfig";

export const useVyhledanePrace = () => {

  const router = useRouter()
  const toast = useToast()
  //const bgColor = useColorModeValue("rgba(255, 255, 255, 0.1)", "rgba(0, 0, 0, 0.1)");
  const bgColor = useColorModeValue("rgba(255, 255, 255, 0.1)", "rgba(45, 55, 72, 0.5)");

  const {slugify} = useAPIFunctions()

  const [apiData, setAPIData] = useState<APIData | PraceType>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [maxPageNumber, setMaxPageNumber] = useState<number>(0)
  const [loadMore, setLoadMore] = useState<boolean>(false)
  const [sortBy, setSortBy] = useState<string>("tema")
  const [sortDirDown, setSortDirDown] = useState<boolean>(true)

  const [isButtonHidden, hideButton] = useState<boolean>(false)

  //TODO: clean code (It bugged last time, when I cleaned this mess below)
  useEffect(() => {
    const searchString = sessionStorage.getItem("search_string")
    const filter_params = sessionStorage.getItem("filter_params")
    async function loadData() {
      if (searchString) {
        axios.post(`${server_address}/search-page/${pageNumber}`,
          null,
          {params: {searchString: JSON.parse(searchString) ?? null, sortBy: sortBy, directionDown: sortDirDown}})
          .then(r => {
            //console.log(r)
            setMaxPageNumber(r.data.pocet_stran)
            if (pageNumber > 1 && loadMore) {
              if (r.data.prace.length > 0 && loadMore) {
                setAPIData(prevState => prevState?.concat(r.data.prace))
              } else {
                hideButton(true)
                toast({
                  title: "Načteno maximálně prací",
                  status: "info",
                  position: 'bottom-right',
                  isClosable: true,
                  duration: 1500
                })
              }
            } else {
              setAPIData(r.data.prace)
            }
            setIsLoading(false)
          })
          .catch((e) => {
            toast({
              title: e.message,
              status: "error",
              isClosable: true,
            })
          })
      } else if (filter_params) {
        axios.post(`${server_address}/filter-page/${pageNumber}`,
          JSON.parse(filter_params),
          {params: {sortBy: sortBy, directionDown: sortDirDown}})
          .then(r => {
            console.log(r)
            setMaxPageNumber(r.data.pocet_stran)
            if (pageNumber > 1 && loadMore) {
              if (r.data.prace.length > 0 && loadMore) {
                setAPIData(prevState => prevState?.concat(r.data.prace))
              } else {
                hideButton(true)
                toast({
                  title: "Načteno maximálně prací",
                  status: "info",
                  position: 'bottom-right',
                  isClosable: true,
                  duration: 1500
                })
              }
            } else {
              setAPIData(r.data.prace)
            }
            setIsLoading(false)
          })
          .catch((e) => {
            toast({
              title: e.message,
              status: "error",
              isClosable: true,
            })
          })
      }
      /*
      // This code below bugs the page
      if (!filter_params && !searchString) {
        router.push("/")
        toast({
          title: "Něco se nepovedlo. \nZkuste vyhledat práci znovu.",
          status: "error",
          duration: 2500,
          isClosable: true,
        })
      }
       */
    }

    loadData()
  }, [pageNumber, sortBy, sortDirDown, loadMore]);

  const [tryAgain, setTryAgain] = useState<boolean>(false)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTryAgain(true)
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  function NextPage() {
    if (pageNumber > 1) {
      if (loadMore) {
        setLoadMore(false)
        setPageNumber(1)
      } else {
        hideButton(true)
        setPageNumber((prevState: number) => prevState - 1)
      }
    }
  }

  function PreviousPage() {
    if (pageNumber) {
      if (loadMore) {
        setLoadMore(false)
        setPageNumber(1)
      } else {
        hideButton(true)
        setPageNumber((prevState: number) => prevState + 1)
      }
    }
  }

  const TableTop = useRef<HTMLTableElement>(null)

  function handleBackClick() {
    if (TableTop && TableTop.current) {
      const element = TableTop.current as HTMLElement | null; // or RefObject<HTMLElement> | null
      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    }
  }


  return {
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
  }
}
