import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokeathlon_statsOrderByWithRelationInput } from '../pokeathlon-stats/pokeathlon-stats-order-by-with-relation.input';
import { naturesOrderByWithRelationInput } from '../natures/natures-order-by-with-relation.input';

@InputType()
export class nature_pokeathlon_statsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    nature_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pokeathlon_stat_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_change?: keyof typeof SortOrder;

    @Field(() => pokeathlon_statsOrderByWithRelationInput, {nullable:true})
    pokeathlon_stats?: pokeathlon_statsOrderByWithRelationInput;

    @Field(() => naturesOrderByWithRelationInput, {nullable:true})
    natures?: naturesOrderByWithRelationInput;
}
