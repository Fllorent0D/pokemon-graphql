import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_fling_effectsWhereInput } from '../item-fling-effects/item-fling-effects-where.input';

@InputType()
export class Item_fling_effectsRelationFilter {

    @Field(() => item_fling_effectsWhereInput, {nullable:true})
    is?: item_fling_effectsWhereInput;

    @Field(() => item_fling_effectsWhereInput, {nullable:true})
    isNot?: item_fling_effectsWhereInput;
}
