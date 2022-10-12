import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flag_proseItem_flag_idLocal_language_idCompoundUniqueInput } from './item-flag-prose-item-flag-id-local-language-id-compound-unique.input';

@InputType()
export class item_flag_proseWhereUniqueInput {

    @Field(() => item_flag_proseItem_flag_idLocal_language_idCompoundUniqueInput, {nullable:true})
    item_flag_id_local_language_id?: item_flag_proseItem_flag_idLocal_language_idCompoundUniqueInput;
}
