import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_shape_prosePokemon_shape_idLocal_language_idCompoundUniqueInput } from './pokemon-shape-prose-pokemon-shape-id-local-language-id-compound-unique.input';

@InputType()
export class pokemon_shape_proseWhereUniqueInput {

    @Field(() => pokemon_shape_prosePokemon_shape_idLocal_language_idCompoundUniqueInput, {nullable:true})
    pokemon_shape_id_local_language_id?: pokemon_shape_prosePokemon_shape_idLocal_language_idCompoundUniqueInput;
}
