import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class contest_combosScalarWhereWithAggregatesInput {

    @Field(() => [contest_combosScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<contest_combosScalarWhereWithAggregatesInput>;

    @Field(() => [contest_combosScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<contest_combosScalarWhereWithAggregatesInput>;

    @Field(() => [contest_combosScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<contest_combosScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    first_move_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    second_move_id?: IntWithAggregatesFilter;
}
