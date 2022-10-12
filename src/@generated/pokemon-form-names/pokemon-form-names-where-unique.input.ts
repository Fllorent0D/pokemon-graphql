import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_form_namesPokemon_form_idLocal_language_idCompoundUniqueInput } from './pokemon-form-names-pokemon-form-id-local-language-id-compound-unique.input';

@InputType()
export class pokemon_form_namesWhereUniqueInput {

    @Field(() => pokemon_form_namesPokemon_form_idLocal_language_idCompoundUniqueInput, {nullable:true})
    pokemon_form_id_local_language_id?: pokemon_form_namesPokemon_form_idLocal_language_idCompoundUniqueInput;
}
