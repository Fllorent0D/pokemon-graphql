import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class pokemon_form_namesMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_form_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    form_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pokemon_name?: keyof typeof SortOrder;
}
