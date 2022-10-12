import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class move_flag_mapScalarWhereWithAggregatesInput {

    @Field(() => [move_flag_mapScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<move_flag_mapScalarWhereWithAggregatesInput>;

    @Field(() => [move_flag_mapScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<move_flag_mapScalarWhereWithAggregatesInput>;

    @Field(() => [move_flag_mapScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<move_flag_mapScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    move_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    move_flag_id?: IntWithAggregatesFilter;
}
