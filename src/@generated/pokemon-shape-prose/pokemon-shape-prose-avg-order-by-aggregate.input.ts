import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class pokemon_shape_proseAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_shape_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;
}
