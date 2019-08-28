import React, { Component }  from "react";


export default class Users extends Component {
    constructor(props){
        super(props);
        this.state = {usuarios:[
            {id:'1',nome:'Julio',email:'julio@teste.com.br',idade:'31', exibir: true},
            {id:'2',nome:'Marcia',email:'marcia@teste.com.br',idade:'32', exibir: true},
            {id:'3',nome:'Edson',email:'Edson@teste.com.br',idade:'40', exibir: true},
            {id:'4',nome:'Antonia',email:'Antonia@teste.com.br',idade:'34', exibir: true},
            {id:'5',nome:'Rute',email:'Rute@teste.com.br',idade:'54',exibir: true},
            {id:'6',nome:'Tarcisio',email:'Tarcisio@teste.com.br',idade:'60', exibir: true}
        ]
        };
    }
    removerUser(id){
        let listUsuario = this.state.usuarios.filter(usuario => usuario.id !== id);
        this.setState(state => ({
            usuarios: listUsuario
          }));
    }
    filtrarUser(context){
        let nome = context.target.value.toLowerCase();
        let listUsuario = [];
        
        for( let user of this.state.usuarios) {
            if(user.nome.toLowerCase().match(nome))
                user.exibir = true;
            else
                user.exibir = false;

            listUsuario.push(user);
        }
        this.setState(state => ({
            usuarios: listUsuario
          }));
    }
    render(){
        return(
            <div>
                <div>
                    <input type="text" placeholder="digite o nome..." name="filter" onChange={event => this.filtrarUser(event)}/>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Idade</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.usuarios.filter(user=> user.exibir).map(user=>(
                            <tr key={user.id}>
                                <td>{user.nome}</td>    
                                <td>{user.email}</td>
                                <td>{user.idade}</td>
                                <td><a href="#" onClick={event => this.removerUser(user.id)}>Remover</a></td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        )
    }
}