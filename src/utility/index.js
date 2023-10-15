const getBadgeColor = (badgeName) => {
  let badgeColor = '';
  switch (badgeName) {
    case 'arxiv':
    case 'wiley':
      badgeColor = "#6495ED";
      break;
    case 'paper':
    case 'draft':
    case 'notes':
    case 'pdf':
    case 'manual':
      badgeColor = "#9FE2BF";
      break;
    case 'xplore':
    case 'R-package':
    case 'CRAN':
    case 'app':
      badgeColor = "#DE3163";
      break;
    case 'slides':
    case 'certificate':
    case 'thesis':
      badgeColor = "#BDB76B";
      break;
    case 'video':
      badgeColor = "#DDA0DD";
      break;
    case 'weblink':
    case 'codes':
      badgeColor = "#7C7C79";
      break;
    case 'abstract':
      badgeColor = "#E59866";
      break;
    default :
      badgeColor = '';
  }
  return badgeColor;
};

export { getBadgeColor };