import { GovernorsSelection } from "./Governors.js"

export const beMineHTML = () => {
    return `
        <h1>Will you be Mine</h1>

        <article id="facilities">
        <h2>Active Mining Facilities</h2>
            <section></section>

        </article>

        <article>Chosen minerals and purchase button go in here
            <h2>Chosen Minerals</h2>
            <section>Chosen minerals stuffs go in here</section>
            <button>BuTtOn</button>
        </article>

        <article>
            <section>${GovernorsSelection()}</section>
            <section>Available minerals</section>
        </article>
    `
}