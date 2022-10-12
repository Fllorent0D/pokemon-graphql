import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flag_proseMove_flag_idLocal_language_idCompoundUniqueInput } from './move-flag-prose-move-flag-id-local-language-id-compound-unique.input';

@InputType()
export class move_flag_proseWhereUniqueInput {

    @Field(() => move_flag_proseMove_flag_idLocal_language_idCompoundUniqueInput, {nullable:true})
    move_flag_id_local_language_id?: move_flag_proseMove_flag_idLocal_language_idCompoundUniqueInput;
}
