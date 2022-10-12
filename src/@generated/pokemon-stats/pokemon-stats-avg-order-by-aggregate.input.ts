import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class pokemon_statsAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stat_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    base_stat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effort?: keyof typeof SortOrder;
}
