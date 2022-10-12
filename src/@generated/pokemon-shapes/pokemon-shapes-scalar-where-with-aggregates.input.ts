import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class pokemon_shapesScalarWhereWithAggregatesInput {

    @Field(() => [pokemon_shapesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<pokemon_shapesScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_shapesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<pokemon_shapesScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_shapesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<pokemon_shapesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
