import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class experienceSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    growth_rate_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    level?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    experience?: keyof typeof SortOrder;
}
