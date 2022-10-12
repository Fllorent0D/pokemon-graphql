import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class pokemon_egg_groupsCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    species_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    egg_group_id?: keyof typeof SortOrder;
}
