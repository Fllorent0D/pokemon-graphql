import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { statsOrderByWithRelationInput } from '../stats/stats-order-by-with-relation.input';

@InputType()
export class stat_namesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    stat_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => statsOrderByWithRelationInput, {nullable:true})
    stats?: statsOrderByWithRelationInput;
}
