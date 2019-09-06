import fetch from 'isomorphic-unfetch'

const Reddit =(req, res)=>{
    const {
        query : {tag}
    } = req
    
    fetch(`https://www.reddit.com/r/${tag}.json?sort=top&t=day&limit=3`)
    .then(response=>response.json())
    .then(d=>{
        res.end(JSON.stringify(d.data.children))
    }).catch(e => res.end(e));
  }
  
  export default Reddit