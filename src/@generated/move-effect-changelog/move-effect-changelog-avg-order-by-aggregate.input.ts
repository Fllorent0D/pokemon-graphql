import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class move_effect_changelogAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effect_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    changed_in_version_group_id?: keyof typeof SortOrder;
}
