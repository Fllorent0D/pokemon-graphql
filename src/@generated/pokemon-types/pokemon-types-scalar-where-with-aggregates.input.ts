import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class pokemon_typesScalarWhereWithAggregatesInput {

    @Field(() => [pokemon_typesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<pokemon_typesScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_typesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<pokemon_typesScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_typesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<pokemon_typesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokemon_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    type_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    slot?: IntWithAggregatesFilter;
}
