import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class evolution_chainsScalarWhereWithAggregatesInput {

    @Field(() => [evolution_chainsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<evolution_chainsScalarWhereWithAggregatesInput>;

    @Field(() => [evolution_chainsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<evolution_chainsScalarWhereWithAggregatesInput>;

    @Field(() => [evolution_chainsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<evolution_chainsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    baby_trigger_item_id?: IntNullableWithAggregatesFilter;
}
