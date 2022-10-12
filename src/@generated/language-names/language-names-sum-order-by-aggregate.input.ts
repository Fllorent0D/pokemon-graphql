import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class language_namesSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;
}
