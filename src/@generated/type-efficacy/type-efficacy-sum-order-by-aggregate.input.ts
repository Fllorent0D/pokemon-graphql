import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class type_efficacySumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    damage_type_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    target_type_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    damage_factor?: keyof typeof SortOrder;
}
