import { JSDOM } from 'jsdom';
export class graph {
    
    constructor() { }

    plot(values: number[], width: number, height: number /* target is where the graph will be contained */): string {
        let doc = this.generate_document(width, height);
        return doc;
    }

    generate_document(width: number, height: number): Document {

        let doc = document.implementation.createDocument( 
            "http://www.w3.org/1999/xhtml",
            "html",
            null
        );

        let bounding_box = doc.createElement("div");

        try {
            doc.body.appendChild(bounding_box);
        } catch (error) {
            console.log(error);
        }

        return doc;
    }

}

/*


const dom = new JSDOM(`<body></body>`);
let doc = dom.window;

let div = doc.createElement("div");
div.textContent = "...";
div.setAttribute("id", "frame");
try {
    doc.body.appendChild(div);
} catch (err) {
    console.log(err);
}

let vals = new graph();
try {
    doc.body.appendChild(vals.plot([0, 30, 42, 19], 50, 50));
} catch (err) {
    console.log(err);
}
    */