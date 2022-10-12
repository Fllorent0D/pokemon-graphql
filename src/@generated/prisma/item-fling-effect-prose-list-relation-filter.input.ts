import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_fling_effect_proseWhereInput } from '../item-fling-effect-prose/item-fling-effect-prose-where.input';

@InputType()
export class Item_fling_effect_proseListRelationFilter {

    @Field(() => item_fling_effect_proseWhereInput, {nullable:true})
    every?: item_fling_effect_proseWhereInput;

    @Field(() => item_fling_effect_proseWhereInput, {nullable:true})
    some?: item_fling_effect_proseWhereInput;

    @Field(() => item_fling_effect_proseWhereInput, {nullable:true})
    none?: item_fling_effect_proseWhereInput;
}
