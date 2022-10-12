import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class berriesAvgOrderByAggregateInput {

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
}
