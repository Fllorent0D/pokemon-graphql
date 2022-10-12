import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_color_namesPokemon_color_idLocal_language_idCompoundUniqueInput } from './pokemon-color-names-pokemon-color-id-local-language-id-compound-unique.input';

@InputType()
export class pokemon_color_namesWhereUniqueInput {

    @Field(() => pokemon_color_namesPokemon_color_idLocal_language_idCompoundUniqueInput, {nullable:true})
    pokemon_color_id_local_language_id?: pokemon_color_namesPokemon_color_idLocal_language_idCompoundUniqueInput;
}
