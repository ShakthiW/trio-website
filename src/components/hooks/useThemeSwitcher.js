import React, { useEffect } from 'react'

const useThemeSwitcher = () => {
  
  const preferDarkQuery = "(prefer-color-scheme: dark)"

  const [mode, setmode] = useState("")

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery)
    const userPref = window.localStorage.getItem("theme")

    const handlePrefChange = () => {
      if(userPref) {
        let check = userPref === "dark" ? "dark" : "light"
        setmode(check)

        if(check === "dark") {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
      } else {

        // for the 1st time users the if condition return false, thats why use else as well
        let check = mediaQuery.matches ? "dark" : "light"
        setmode(check)

        if(check === "dark") {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
      }
    }

    mediaQuery.addEventListener("change", handlePrefChange)

    return () => mediaQuery.removeEventListener("change", handlePrefChange)

  }, [])

  // use to update the values in the local storage
  useEffect(() => {
    if(mode == "dark") {
      window.localStorage.setItem("theme", "dark")
      document.documentElement.classList.add("dark")
    } else {
      window.localStorage.setItem("theme", "light")
      document.documentElement.classList.remove("dark")
    }

  }, [mode])
  
  
  
  return [mode, setmode]
}

export default useThemeSwitcher