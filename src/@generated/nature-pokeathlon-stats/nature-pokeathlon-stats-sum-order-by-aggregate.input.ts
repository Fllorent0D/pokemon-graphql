import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class nature_pokeathlon_statsSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    nature_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pokeathlon_stat_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_change?: keyof typeof SortOrder;
}
