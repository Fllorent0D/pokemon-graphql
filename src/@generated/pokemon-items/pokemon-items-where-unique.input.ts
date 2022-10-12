import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_itemsPokemon_idVersion_idItem_idCompoundUniqueInput } from './pokemon-items-pokemon-id-version-id-item-id-compound-unique.input';

@InputType()
export class pokemon_itemsWhereUniqueInput {

    @Field(() => pokemon_itemsPokemon_idVersion_idItem_idCompoundUniqueInput, {nullable:true})
    pokemon_id_version_id_item_id?: pokemon_itemsPokemon_idVersion_idItem_idCompoundUniqueInput;
}
