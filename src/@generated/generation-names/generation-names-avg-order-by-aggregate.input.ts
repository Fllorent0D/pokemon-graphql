import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class generation_namesAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    generation_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;
}
