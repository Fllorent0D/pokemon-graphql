import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Nature_pokeathlon_statsListRelationFilter } from '../prisma/nature-pokeathlon-stats-list-relation-filter.input';
import { Pokeathlon_stat_namesListRelationFilter } from '../prisma/pokeathlon-stat-names-list-relation-filter.input';
import { Pokemon_form_pokeathlon_statsListRelationFilter } from '../prisma/pokemon-form-pokeathlon-stats-list-relation-filter.input';

@InputType()
export class pokeathlon_statsWhereInput {

    @Field(() => [pokeathlon_statsWhereInput], {nullable:true})
    AND?: Array<pokeathlon_statsWhereInput>;

    @Field(() => [pokeathlon_statsWhereInput], {nullable:true})
    OR?: Array<pokeathlon_statsWhereInput>;

    @Field(() => [pokeathlon_statsWhereInput], {nullable:true})
    NOT?: Array<pokeathlon_statsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => Nature_pokeathlon_statsListRelationFilter, {nullable:true})
    nature_pokeathlon_stats?: Nature_pokeathlon_statsListRelationFilter;

    @Field(() => Pokeathlon_stat_namesListRelationFilter, {nullable:true})
    pokeathlon_stat_names?: Pokeathlon_stat_namesListRelationFilter;

    @Field(() => Pokemon_form_pokeathlon_statsListRelationFilter, {nullable:true})
    pokemon_form_pokeathlon_stats?: Pokemon_form_pokeathlon_statsListRelationFilter;
}
