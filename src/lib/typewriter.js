export default function typeWriter(node) {
    const txt = node.innerHTML
    node.innerHTML = ""

    let i = 0;
    let speed = 50;

    let timeout;

    function write() {
        if (i < txt.length) {
            node.innerHTML += txt.charAt(i);
            i++;
            timeout = setTimeout(write, speed);
        }
    }

    write()
    return {
        destroy() {
            clearTimeout(timeout);
        }
    }
}
