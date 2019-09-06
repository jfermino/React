import fetch from 'isomorphic-unfetch'

export default (req, res)=>{    
    fetch(`https://www.reddit.com/r/javascript.json?sort=top&t=day&limit=3`)
    .then(response=>response.json())
    .then(d=>{
        res.end(JSON.stringify(d.data.children))
    }).catch(e => res.end(e));
  }
  