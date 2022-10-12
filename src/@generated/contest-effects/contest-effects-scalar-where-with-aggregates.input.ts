import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class contest_effectsScalarWhereWithAggregatesInput {

    @Field(() => [contest_effectsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<contest_effectsScalarWhereWithAggregatesInput>;

    @Field(() => [contest_effectsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<contest_effectsScalarWhereWithAggregatesInput>;

    @Field(() => [contest_effectsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<contest_effectsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;
}
