export {ChatCards} from './chat-cards.element'

// async image loading strategy
export const Card = ({avatar, image, text}) => `
  <chat-card grid="rows" vertically-distributed="equal">
    <div class="card-content">
      <img src="${image}"/>
      <p>${text}</p>
    </div>
    <div class="card-footer" grid vertically-aligned="center">
      <a href="href">Like</a>
      <a href="href">Comment</a>
    </div>
  </chat-card>
`

// export const Cards = (author, card_data) => `
//   <chat-cards>
//     ${card_data.reduce((cards, card) =>
//       `${cards}
//       ${Card({
//         avatar: author,
//         image: card.image,
//         text: card.text
//       })}
//     `, '')}
//   </chat-cards>
// `