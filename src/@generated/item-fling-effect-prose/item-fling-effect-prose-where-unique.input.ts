import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_fling_effect_proseItem_fling_effect_idLocal_language_idCompoundUniqueInput } from './item-fling-effect-prose-item-fling-effect-id-local-language-id-compound-unique.input';

@InputType()
export class item_fling_effect_proseWhereUniqueInput {

    @Field(() => item_fling_effect_proseItem_fling_effect_idLocal_language_idCompoundUniqueInput, {nullable:true})
    item_fling_effect_id_local_language_id?: item_fling_effect_proseItem_fling_effect_idLocal_language_idCompoundUniqueInput;
}
