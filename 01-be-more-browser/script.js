var lastVales = {};

function logger(element, title, content) {
  if (lastVales[element] && lastVales[element] === content) return;
  lastVales[element] = content;
  let logTemplate = `%c${element}%c${title}:%c${content}`;
  console.log(
    logTemplate,
    "color:white; padding: 2px 6px; background-color:red; border-radius:4px; margin-right:3px",
    "margin-right:3px;color:gray",
    "color:unset"
  );
}

