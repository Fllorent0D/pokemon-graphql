import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_proseItem_idLocal_language_idCompoundUniqueInput } from './item-prose-item-id-local-language-id-compound-unique.input';

@InputType()
export class item_proseWhereUniqueInput {

    @Field(() => item_proseItem_idLocal_language_idCompoundUniqueInput, {nullable:true})
    item_id_local_language_id?: item_proseItem_idLocal_language_idCompoundUniqueInput;
}
