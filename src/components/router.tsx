import FlowManager from "@/pages/flowManager"
import Project from "@/pages/project"
import { useEffect, useState } from "react"
import Flow from "./Flow"

const routes = {
    "/": Project,
    '/flow': FlowManager,
    "/flow_new": Flow
}

export default function Router() {
    const [path, setPath] = useState(window.location.pathname)

    useEffect(() => {
        const onPopState = () => setPath(window.location.pathname)
        window.addEventListener("popstate", onPopState)
        return () => window.removeEventListener("popstate", onPopState)
    }, [])

    const Component = routes[path] || (() => <h1>404 Not Found</h1>)
    return <Component />
}

export function navTo(to: string) {
    window.history.pushState({}, "", to)
    const navEvent = new PopStateEvent("popstate")
    window.dispatchEvent(navEvent)
}