import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class pokemon_habitat_namesScalarWhereWithAggregatesInput {

    @Field(() => [pokemon_habitat_namesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<pokemon_habitat_namesScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_habitat_namesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<pokemon_habitat_namesScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_habitat_namesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<pokemon_habitat_namesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokemon_habitat_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
