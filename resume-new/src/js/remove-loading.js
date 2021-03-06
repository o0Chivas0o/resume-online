export default function(){
  return !function () {
    let view = View('#siteWelcome')
    let controller = {
      view: null,
      init: function (view) {
        this.view = view
        this.deActive()
      },
      deActive: function () {
        this.view.classList.remove('active')
      }
    }
    controller.init(view)
  }.call()
}
