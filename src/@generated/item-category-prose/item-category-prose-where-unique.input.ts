import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_category_proseItem_category_idLocal_language_idCompoundUniqueInput } from './item-category-prose-item-category-id-local-language-id-compound-unique.input';

@InputType()
export class item_category_proseWhereUniqueInput {

    @Field(() => item_category_proseItem_category_idLocal_language_idCompoundUniqueInput, {nullable:true})
    item_category_id_local_language_id?: item_category_proseItem_category_idLocal_language_idCompoundUniqueInput;
}
