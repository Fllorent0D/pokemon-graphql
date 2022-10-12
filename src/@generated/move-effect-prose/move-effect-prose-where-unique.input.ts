import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_proseMove_effect_idLocal_language_idCompoundUniqueInput } from './move-effect-prose-move-effect-id-local-language-id-compound-unique.input';

@InputType()
export class move_effect_proseWhereUniqueInput {

    @Field(() => move_effect_proseMove_effect_idLocal_language_idCompoundUniqueInput, {nullable:true})
    move_effect_id_local_language_id?: move_effect_proseMove_effect_idLocal_language_idCompoundUniqueInput;
}
