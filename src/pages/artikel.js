const artikel = () => {
    return(
    <div>helloworld
        <a href="/articles/asdf.html" target="_blank" rel="noopener noreferrer"> {/* target=blank berfungsi untuk membuka jendela baru saat tombol ditekan */}
        <button className="open-html-button">Open HTML File</button> {/*mengarahkan ke file html*/}
      </a>
    </div>
)
}
export default artikel