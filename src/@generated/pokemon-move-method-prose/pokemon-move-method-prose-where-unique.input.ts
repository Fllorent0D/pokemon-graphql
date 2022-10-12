import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_move_method_prosePokemon_move_method_idLocal_language_idCompoundUniqueInput } from './pokemon-move-method-prose-pokemon-move-method-id-local-language-id-compound-unique.input';

@InputType()
export class pokemon_move_method_proseWhereUniqueInput {

    @Field(() => pokemon_move_method_prosePokemon_move_method_idLocal_language_idCompoundUniqueInput, {nullable:true})
    pokemon_move_method_id_local_language_id?: pokemon_move_method_prosePokemon_move_method_idLocal_language_idCompoundUniqueInput;
}
