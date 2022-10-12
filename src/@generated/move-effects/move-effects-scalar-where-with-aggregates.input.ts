import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class move_effectsScalarWhereWithAggregatesInput {

    @Field(() => [move_effectsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<move_effectsScalarWhereWithAggregatesInput>;

    @Field(() => [move_effectsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<move_effectsScalarWhereWithAggregatesInput>;

    @Field(() => [move_effectsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<move_effectsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;
}
