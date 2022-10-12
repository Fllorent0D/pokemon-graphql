import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { item_fling_effectsOrderByWithRelationInput } from '../item-fling-effects/item-fling-effects-order-by-with-relation.input';

@InputType()
export class item_fling_effect_proseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    item_fling_effect_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effect?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => item_fling_effectsOrderByWithRelationInput, {nullable:true})
    item_fling_effects?: item_fling_effectsOrderByWithRelationInput;
}
