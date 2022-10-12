import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class berry_flavorsMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    berry_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contest_type_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    flavor?: keyof typeof SortOrder;
}
