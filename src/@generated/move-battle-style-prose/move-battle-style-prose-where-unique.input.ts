import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_battle_style_proseMove_battle_style_idLocal_language_idCompoundUniqueInput } from './move-battle-style-prose-move-battle-style-id-local-language-id-compound-unique.input';

@InputType()
export class move_battle_style_proseWhereUniqueInput {

    @Field(() => move_battle_style_proseMove_battle_style_idLocal_language_idCompoundUniqueInput, {nullable:true})
    move_battle_style_id_local_language_id?: move_battle_style_proseMove_battle_style_idLocal_language_idCompoundUniqueInput;
}
