import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class move_meta_stat_changesScalarWhereWithAggregatesInput {

    @Field(() => [move_meta_stat_changesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<move_meta_stat_changesScalarWhereWithAggregatesInput>;

    @Field(() => [move_meta_stat_changesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<move_meta_stat_changesScalarWhereWithAggregatesInput>;

    @Field(() => [move_meta_stat_changesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<move_meta_stat_changesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    move_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    stat_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    change?: IntWithAggregatesFilter;
}
