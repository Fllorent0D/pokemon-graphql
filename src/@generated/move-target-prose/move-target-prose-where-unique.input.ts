import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_target_proseMove_target_idLocal_language_idCompoundUniqueInput } from './move-target-prose-move-target-id-local-language-id-compound-unique.input';

@InputType()
export class move_target_proseWhereUniqueInput {

    @Field(() => move_target_proseMove_target_idLocal_language_idCompoundUniqueInput, {nullable:true})
    move_target_id_local_language_id?: move_target_proseMove_target_idLocal_language_idCompoundUniqueInput;
}
