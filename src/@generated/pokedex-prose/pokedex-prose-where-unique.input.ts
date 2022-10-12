import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedex_prosePokedex_idLocal_language_idCompoundUniqueInput } from './pokedex-prose-pokedex-id-local-language-id-compound-unique.input';

@InputType()
export class pokedex_proseWhereUniqueInput {

    @Field(() => pokedex_prosePokedex_idLocal_language_idCompoundUniqueInput, {nullable:true})
    pokedex_id_local_language_id?: pokedex_prosePokedex_idLocal_language_idCompoundUniqueInput;
}
