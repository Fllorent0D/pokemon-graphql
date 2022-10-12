import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { Pokeathlon_statsRelationFilter } from '../prisma/pokeathlon-stats-relation-filter.input';
import { Pokemon_formsRelationFilter } from '../prisma/pokemon-forms-relation-filter.input';

@InputType()
export class pokemon_form_pokeathlon_statsWhereInput {

    @Field(() => [pokemon_form_pokeathlon_statsWhereInput], {nullable:true})
    AND?: Array<pokemon_form_pokeathlon_statsWhereInput>;

    @Field(() => [pokemon_form_pokeathlon_statsWhereInput], {nullable:true})
    OR?: Array<pokemon_form_pokeathlon_statsWhereInput>;

    @Field(() => [pokemon_form_pokeathlon_statsWhereInput], {nullable:true})
    NOT?: Array<pokemon_form_pokeathlon_statsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_form_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    pokeathlon_stat_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    minimum_stat?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    base_stat?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    maximum_stat?: IntFilter;

    @Field(() => Pokeathlon_statsRelationFilter, {nullable:true})
    pokeathlon_stats?: Pokeathlon_statsRelationFilter;

    @Field(() => Pokemon_formsRelationFilter, {nullable:true})
    pokemon_forms?: Pokemon_formsRelationFilter;
}
