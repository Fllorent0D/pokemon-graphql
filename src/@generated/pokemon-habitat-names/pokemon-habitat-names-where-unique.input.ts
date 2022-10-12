import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_habitat_namesPokemon_habitat_idLocal_language_idCompoundUniqueInput } from './pokemon-habitat-names-pokemon-habitat-id-local-language-id-compound-unique.input';

@InputType()
export class pokemon_habitat_namesWhereUniqueInput {

    @Field(() => pokemon_habitat_namesPokemon_habitat_idLocal_language_idCompoundUniqueInput, {nullable:true})
    pokemon_habitat_id_local_language_id?: pokemon_habitat_namesPokemon_habitat_idLocal_language_idCompoundUniqueInput;
}
