import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class pokemon_abilitiesMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ability_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_dream?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slot?: keyof typeof SortOrder;
}
