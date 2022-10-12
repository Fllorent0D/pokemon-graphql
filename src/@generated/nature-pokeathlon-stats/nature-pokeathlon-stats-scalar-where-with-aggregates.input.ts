import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class nature_pokeathlon_statsScalarWhereWithAggregatesInput {

    @Field(() => [nature_pokeathlon_statsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<nature_pokeathlon_statsScalarWhereWithAggregatesInput>;

    @Field(() => [nature_pokeathlon_statsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<nature_pokeathlon_statsScalarWhereWithAggregatesInput>;

    @Field(() => [nature_pokeathlon_statsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<nature_pokeathlon_statsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    nature_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokeathlon_stat_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    max_change?: IntWithAggregatesFilter;
}
