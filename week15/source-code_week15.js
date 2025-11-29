import { deleteItem, getItems, addItem, editItem } from "./myLib/fetchUtils.js"
const quoteURL = `${import.meta.env.VITE_APP_URL}/quotes`

async function loadQuotes() {
  try {
    const quotes = await getItems(quoteURL)
    return quotes
  } catch (e) {
    throw new Error(`Quote: ${e.message}`)
  }
}

async function deleteQuote(quoteId) {
  try {
    const deleteId = await deleteItem(quoteURL, quoteId)
    return deleteId
  } catch (e) {
    throw new Error(`Quote: ${e.message}`)
  }
}

async function addQuote(quote) {
  try {
    const addedItem = await addItem(quoteURL, quote)
    return addedItem
  } catch (e) {
    throw new Error(`Quote: ${e.message}`)
  }
}

async function editQuote(quote) {
  try {
    const editedItem = await editItem(quoteURL, quote)
    return editedItem
  } catch (e) {
    throw new Error(`Quote: ${e.message}`)
  }
}
export { loadQuotes, deleteQuote, addQuote, editQuote }
 

async function displayDialog() {
  return new Promise((resolve) => {
    const dialogMessageEl = document.getElementById("messageDialog")
 
    const okBtnEl = document.getElementById("okBtn")
    const cancelBtnEl = document.getElementById("cancelBtn")
 
    okBtnEl.addEventListener("click", () => {
      dialogMessageEl.close()
      resolve(okBtnEl.textContent)
    })
 
    cancelBtnEl.addEventListener("click", () => {
      dialogMessageEl.close()
      resolve(cancelBtnEl.textContent)
    })
    dialogMessageEl.showModal()
  })
 
  //   dialogMessageEl.show()
}
 
const ans = await displayDialog()
console.log(ans)