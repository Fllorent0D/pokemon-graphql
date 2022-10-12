import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_category_proseMove_meta_category_idLocal_language_idCompoundUniqueInput } from './move-meta-category-prose-move-meta-category-id-local-language-id-compound-unique.input';

@InputType()
export class move_meta_category_proseWhereUniqueInput {

    @Field(() => move_meta_category_proseMove_meta_category_idLocal_language_idCompoundUniqueInput, {nullable:true})
    move_meta_category_id_local_language_id?: move_meta_category_proseMove_meta_category_idLocal_language_idCompoundUniqueInput;
}
