if (document.querySelector('.open-marketo-form')) {

    const openMarketoFormBtn = document.getElementsByClassName('open-marketo-form')

    for (const button of openMarketoFormBtn) {
        button.addEventListener('click', event => {
            event.preventDefault()

            MktoForms2.loadForm("//app-sj05.marketo.com", "170-LIB-021", button.dataset.marketoId, function(form) {
                MktoForms2.lightbox(form).show()

                if (document.getElementById('read-button')) {
                    setTimeout(() => {
                        const readTermsBtn = document.getElementById('read-button')
                        const termsText = document.getElementById('read-text')
                        readTermsBtn.addEventListener('click', event => {
                            event.preventDefault()
                            if (termsText.classList.contains('hidden')) {
                                termsText.style.display = 'inline-block'
                                termsText.classList.remove('hidden')
                            } else {
                                termsText.style.display = 'none'
                                termsText.classList.add('hidden')
                            }
                        })
                    }, 1500)
                }

                form.onSuccess(function(values, followUpUrl) {
                    location.href = button.dataset.marketoRedirect
                    return
                })
            })
        })
    }

    
}
