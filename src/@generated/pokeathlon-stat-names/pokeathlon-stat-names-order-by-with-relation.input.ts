import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { pokeathlon_statsOrderByWithRelationInput } from '../pokeathlon-stats/pokeathlon-stats-order-by-with-relation.input';

@InputType()
export class pokeathlon_stat_namesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    pokeathlon_stat_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => pokeathlon_statsOrderByWithRelationInput, {nullable:true})
    pokeathlon_stats?: pokeathlon_statsOrderByWithRelationInput;
}
