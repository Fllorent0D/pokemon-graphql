import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class naturesAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    decreased_stat_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    increased_stat_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hates_flavor_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    likes_flavor_id?: keyof typeof SortOrder;
}
