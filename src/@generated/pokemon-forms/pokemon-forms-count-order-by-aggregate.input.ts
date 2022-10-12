import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class pokemon_formsCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    form_identifier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    introduced_in_version_group_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_default?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_battle_only?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order?: keyof typeof SortOrder;
}
