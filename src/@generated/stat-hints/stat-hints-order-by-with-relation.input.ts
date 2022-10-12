import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { statsOrderByWithRelationInput } from '../stats/stats-order-by-with-relation.input';
import { stat_hint_namesOrderByRelationAggregateInput } from '../stat-hint-names/stat-hint-names-order-by-relation-aggregate.input';

@InputType()
export class stat_hintsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stat_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gene_mod_5?: keyof typeof SortOrder;

    @Field(() => statsOrderByWithRelationInput, {nullable:true})
    stats?: statsOrderByWithRelationInput;

    @Field(() => stat_hint_namesOrderByRelationAggregateInput, {nullable:true})
    stat_hint_names?: stat_hint_namesOrderByRelationAggregateInput;
}
