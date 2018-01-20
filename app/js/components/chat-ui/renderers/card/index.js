import './card.css'

// TODO: custom element
// async image loading strategy
export const Card = ({author, image, text}) => `
  <div class="chat-card" grid="rows" vertically-distributed="equal">
    <div class="card-header" grid vertically-aligned="center">
      <chat-avatar src="${author.avatar}"></chat-avatar>
    </div>
    <div class="card-content">
      <img src="${image}"/>
      <p>${text}</p>
    </div>
    <div class="card-footer" grid vertically-aligned="center">
      <a href="href">Like</a>
      <a href="href">Comment</a>
    </div>
  </div>
`