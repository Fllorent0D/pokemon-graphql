import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { stat_hintsOrderByWithRelationInput } from '../stat-hints/stat-hints-order-by-with-relation.input';

@InputType()
export class stat_hint_namesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    stat_hint_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    message?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => stat_hintsOrderByWithRelationInput, {nullable:true})
    stat_hints?: stat_hintsOrderByWithRelationInput;
}
