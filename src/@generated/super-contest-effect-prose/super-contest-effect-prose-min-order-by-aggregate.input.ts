import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class super_contest_effect_proseMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    super_contest_effect_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    flavor_text?: keyof typeof SortOrder;
}