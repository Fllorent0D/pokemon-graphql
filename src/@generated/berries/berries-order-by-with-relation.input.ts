import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { typesOrderByWithRelationInput } from '../types/types-order-by-with-relation.input';
import { berry_firmnessOrderByWithRelationInput } from '../berry-firmness/berry-firmness-order-by-with-relation.input';
import { itemsOrderByWithRelationInput } from '../items/items-order-by-with-relation.input';
import { berry_flavorsOrderByRelationAggregateInput } from '../berry-flavors/berry-flavors-order-by-relation-aggregate.input';

@InputType()
export class berriesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    item_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firmness_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    natural_gift_power?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    natural_gift_type_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    size?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_harvest?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    growth_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    soil_dryness?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    smoothness?: keyof typeof SortOrder;

    @Field(() => typesOrderByWithRelationInput, {nullable:true})
    types?: typesOrderByWithRelationInput;

    @Field(() => berry_firmnessOrderByWithRelationInput, {nullable:true})
    berry_firmness?: berry_firmnessOrderByWithRelationInput;

    @Field(() => itemsOrderByWithRelationInput, {nullable:true})
    items?: itemsOrderByWithRelationInput;

    @Field(() => berry_flavorsOrderByRelationAggregateInput, {nullable:true})
    berry_flavors?: berry_flavorsOrderByRelationAggregateInput;
}
