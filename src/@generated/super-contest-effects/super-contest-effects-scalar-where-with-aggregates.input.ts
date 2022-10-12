import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class super_contest_effectsScalarWhereWithAggregatesInput {

    @Field(() => [super_contest_effectsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<super_contest_effectsScalarWhereWithAggregatesInput>;

    @Field(() => [super_contest_effectsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<super_contest_effectsScalarWhereWithAggregatesInput>;

    @Field(() => [super_contest_effectsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<super_contest_effectsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;
}
