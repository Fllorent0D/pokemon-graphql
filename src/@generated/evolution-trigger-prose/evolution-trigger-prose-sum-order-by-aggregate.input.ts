import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class evolution_trigger_proseSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    evolution_trigger_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;
}
